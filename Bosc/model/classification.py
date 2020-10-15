import pandas as pd
from sklearn.preprocessing import LabelEncoder
from bert_serving.client import BertClient
from sklearn.linear_model import LogisticRegression
from sklearn.model_selection import train_test_split
# from sklearn.externals import joblib
from sklearn.linear_model import LogisticRegression
from sklearn.model_selection import ShuffleSplit
from sklearn.model_selection import cross_val_score
from sklearn.metrics import classification_report
import pickle,os
from model.diningRoom_test import get_dinningRoom
# train_df = pd.read_csv('/Users/cherry/Desktop/Bosc/model/question_template/all_questions.txt', sep='\t', header=None)
# train_df.columns = ['问题', '意图']
# labelEncoder = LabelEncoder()
# y = labelEncoder.fit_transform(train_df['意图'])
root = os.path.abspath(os.path.dirname(__file__))
def read_file(filename):
	sentences = []
	# labels = []
	with open(filename, 'r', encoding='utf-8') as fin:
		for line in fin:
			line = line.strip('\n').split('\t')
			sentences.append(line[0])
			# labels.append(line[1])
	return sentences

def bert_encoding(filename):
	sentences = read_file(filename)
	bc = BertClient()
	sentences_encoded = bc.encode(sentences)
	return sentences_encoded

def model_lr(filename):
	train_df = pd.read_csv(filename, sep='\t', header=None)
	train_df.columns = ['问题', '意图']
	labelEncoder = LabelEncoder()
	y = labelEncoder.fit_transform(train_df['意图'])
	X = bert_encoding(filename)
	train_X, test_X, train_y, test_y = train_test_split(X, y, test_size=0.2, random_state=0)
	logistic_model = LogisticRegression()
	logistic_model.fit(train_X, train_y)
	# print(logistic_model.score(test_X, test_y))
	y_pred = logistic_model.predict(test_X)
	print(classification_report(test_y, y_pred))
	# cv_split = ShuffleSplit(n_splits=5, train_size=0.7, test_size=0.2)
	# logistic_model = LogisticRegression()
	# score_ndarray = cross_val_score(logistic_model, X, y, cv=cv_split)
	# print(score_ndarray)
	#保存模型
	pickle.dump(logistic_model, open(root+'/logistic.model2','wb'))
	#加载模型
	# logistic_model = pickle.load('logistic.model2')

def model_predict(sentence):
	bc = BertClient(timeout=1000)
	sentence2 = bc.encode(sentence)
	logistic_model = pickle.load(open(root+'/logistic.model2','rb'))
	y_pred = logistic_model.predict(sentence2)
	# y_pred=[1]
	if y_pred[0] == 1:
		y_pred1 = 'qa_dining'
	elif y_pred[0] == 0:
		y_pred1 = 'qa_bus'
	else:
		y_pred1 = 'qa_others'
	dict={
		'intent':y_pred1,
	}
	if y_pred[0]==1:
		return get_dinningRoom(sentence[0])
	return dict


if __name__ == '__main__':
	filename = 'question_template/all_questions.txt'
	# encode_file = 'question_template/bert_encoding.txt'
	# bert_encoding(filename)
	model_lr(filename)
	print(model_predict(['班车时刻表']))
	
