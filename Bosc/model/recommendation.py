import json
from itertools import combinations

def calculate_metabolism(sex, height, weight, age):
	if sex == 2:
		metabolism = 61+9.6*height+1.72*height-4.7*age
	else:
		metabolism = 67+13.73*height+5*height-6.9*age
	return metabolism

'''
	params:
	sex: 1-男 2-女
	target: 1-增重 2-减重 3-保持体重
'''
def metabolism_with_target(sex, height, weight, age, target):
	metabolism = 0
	if sex == 2:
		metabolism = 61+9.6*height+1.72*height-4.7*age
	else:
		metabolism = 67+13.73*height+5*height-6.9*age
	if target == 1:
		metabolism = metabolism * 1.05
	elif target == 2:
		metabolism = metabolism * 0.95
	return metabolism

def get_category(address):
	res = []
	slot_values = ['主荤','半荤', '蔬菜', '汤', '点心', '粗粮', '水果', '面食']
	for slot in slot_values:
		with open(address+slot+'.txt', 'r', encoding='utf-8') as fin:
			slot = []
			for line in fin:
				line = line.strip('\n')
				slot.append(line)
			res.append(slot)
	return res

def food_with_category(tmps):
	big_meat = []
	small_meat = []
	veg = []
	fat_rice = []
	fruit = []
	for tmp in tmps:
		if tmp['category'] == '主荤':
			big_meat.append(tmp)
		elif tmp['category'] == '半荤':
			small_meat.append(tmp)
		elif tmp['category'] == '蔬菜':
			veg.append(tmp)
		elif tmp['category'] == '粗粮':
			fat_rice.append(tmp)
		elif tmp['category'] == '水果':
			fruit.append(tmp)
	big_meat.append({'name': '无', 'cal': 0, 'category': '无', 'date': '无'})
	small_meat.append({'name': '无', 'cal': 0, 'category': '无', 'date': '无'})
	veg.append({'name': '无', 'cal': 0, 'category': '无', 'date': '无'})
	fat_rice.append({'name': '无', 'cal': 0, 'category': '无', 'date': '无'})
	fruit.append({'name': '无', 'cal': 0, 'category': '无', 'date': '无'})
	return big_meat, small_meat, veg, fat_rice, fruit

def get_value_food(tmp):
	value = 0.0
	value_food = {}
	value_food_ = {}
	value_food_all = []
	big_meat, small_meat, veg, fat_rice, fruit = food_with_category(tmp)

	for i in big_meat:
		# value += i['cal']
		for j in small_meat:
			# value += j['cal']
			for k in veg:
				for m in fat_rice:
					for n in fruit:
						value = float(i['cal']) + float(j['cal']) + float(k['cal']) + float(m['cal']) + float(n['cal'])
						value_food[value] = [i['name'], j['name'], k['name'], m['name'], n['name']]
	for value in value_food:
		if value != 0.0:
			for food in value_food[value]:
				value_food_[value] = [food for food in value_food[value] if food != '无']

	# print('value_food_:', value_food_)
	if value_food_:
		if value_food_ is not None:
			# print(value_food_)
			return value_food_

def get_all_food(value_food,metabolism):

	dict=[[abs(metabolism-k),value_food[k]] for k in value_food]
	tmp=sorted(dict,key=lambda x:x[0])
	tmp=tmp[0:3]
	
	return tmp
	
def recom(data):
	recommend_food={}
	user  = data['user'][0] #sex, height, weight, age
	metabolism = metabolism_with_target(user['sex'],user['height'],user['weight'], user['age'], user['phase'])
	metabolism = metabolism * 0.6
	res = data['res'][0]
	dict={}
	for tmp in res:
		if tmp['date'] in dict:
			dict[tmp['date']].append(tmp)
		else:
			dict[tmp['date']]=[tmp]
	for k in dict:
		recommend_food[k]=get_value_food(dict[k])

		recommend_food[k]=get_all_food(recommend_food[k],metabolism)

	return recommend_food

def read_json_file(filename):
	with open(filename, 'r', encoding='utf-8') as fin:
		value_food = {}
		value_food_new = {}
		big_meat = []
		small_meat = []
		veg = []
		fat_rice = []
		fruit = []
		all_food = []
		everyday_food = []
		recommend_food = {}
		recommend_food['星期一'] = []
		recommend_food['星期二'] = [] 
		recommend_food['星期三'] = [] 
		recommend_food['星期四'] = [] 
		recommend_food['星期五'] = []  
		data = json.load(fin)
		user  = data['user'] #sex, height, weight, age
		metabolism = metabolism_with_target(2, 160, 46, 25, 1)
		metabolism = metabolism * 0.6
		res = data['res'][0]
		dict={}
		for tmp in res:
			if tmp['date'] in dict:
				dict[tmp['date']].append(tmp)
			else:
				dict[tmp['date']]=[tmp]
		for k in dict:
			recommend_food[k]=get_value_food(dict[k])

			recommend_food[k]=get_all_food(recommend_food[k])
		

		# sorted(value_food_new.keys())
		# print(recommend_food)
		return recommend_food

		
		




if __name__ == '__main__':
	# metabolism = metabolism_with_target(2, 160, 46, 25, 1)
	# # print(metabolism)
	# res = get_category('/Users/cherry/Desktop/Bosc/model/slot-dictionaries/')
	# print(res)
	read_json_file('/Users/cherry/Desktop/Bosc/model/question_template/json.txt')








