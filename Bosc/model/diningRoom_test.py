#!/usr/bin/python
# -*- coding: UTF-8 -*-
import re
import os
import numpy as np
import pygtrie
from sklearn.feature_extraction.text import CountVectorizer
import numpy as np
from scipy.linalg import norm
import datetime
from config import project_dir
def read_file(filename):
    template = {}
    with open(filename, 'r', encoding='utf-8') as fin:
        for line in fin:
            line = line.strip('\n').split('\t')
            template[line[0]] = line[1]
    return template
            
# 1.获取意图 
def get_intent(res):
    res['intent'] = 'qa_dining'
    return res

# 2.利用cos句子相似度，获取问题种类：type: 1-问菜单 2-问价格 3-是否类问题 4-问时间
def tf_similarity(sentence, example):
    def add_space(s):
        return ' '.join(list(s))
    
    # 将字中间加入空格
    sentence, example = add_space(sentence), add_space(example)
    # 转化为TF矩阵
    cv = CountVectorizer(tokenizer=lambda s: s.split())
    corpus = [sentence, example]
    vectors = cv.fit_transform(corpus).toarray()
    # 计算TF系数
    return np.dot(vectors[0], vectors[1]) / (norm(vectors[0]) * norm(vectors[1]))

def get_type(sentence, res):
    score = 0
    res['type'] = None
    template = read_file(project_dir+'/model/question_template/dinging.txt')
    for tmp in template:
        sim = tf_similarity(sentence, tmp)
        if score < sim:
            score = sim
            res['type'] = template[tmp]
    return res

# 3.匹配日期
def get_date(sentence, res):
    now_time = datetime.datetime.now()
    weekday = now_time.weekday() + 1

    if '今天' in sentence or '今日' in sentence or '当天' in sentence or '今儿个' in sentence or 'today' in sentence:
        date = now_time.strftime('%Y-%m-%d')
        res['start_date'] = date
        res['end_date'] = date
    elif '明天' in sentence:
        date = (now_time + datetime.timedelta(days=1)).strftime('%Y-%m-%d')
        res['start_date'] = date
        res['end_date'] = date
    elif '昨天' in sentence:
        date = (now_time - datetime.timedelta(days=1)).strftime('%Y-%m-%d')
        res['start_date'] = date
        res['end_date'] = date
    elif '下周' in sentence or '下一周' in sentence:
        date = (now_time + datetime.timedelta(days=7)).strftime('%Y-%m-%d')
        if weekday == 1:
            res['start_date'] = (now_time + datetime.timedelta(days=7)).strftime('%Y-%m-%d')
            res['end_date'] = (now_time + datetime.timedelta(days=11)).strftime('%Y-%m-%d')
        elif weekday == 2:
            res['start_date'] = (now_time + datetime.timedelta(days=6)).strftime('%Y-%m-%d')
            res['end_date'] = (now_time + datetime.timedelta(days=10)).strftime('%Y-%m-%d')
        elif weekday == 3:
            res['start_date'] = (now_time + datetime.timedelta(days=5)).strftime('%Y-%m-%d')
            res['end_date'] = (now_time + datetime.timedelta(days=9)).strftime('%Y-%m-%d')
        elif weekday == 4:
            res['start_date'] = (now_time + datetime.timedelta(days=4)).strftime('%Y-%m-%d')
            res['end_date'] = (now_time + datetime.timedelta(days=8)).strftime('%Y-%m-%d')
        elif weekday == 5:
            res['start_date'] = (now_time + datetime.timedelta(days=3)).strftime('%Y-%m-%d')
            res['end_date'] = (now_time + datetime.timedelta(days=7)).strftime('%Y-%m-%d')
        elif weekday == 6:
            res['start_date'] = (now_time + datetime.timedelta(days=2)).strftime('%Y-%m-%d')
            res['end_date'] = (now_time + datetime.timedelta(days=6)).strftime('%Y-%m-%d')
        elif weekday == 7:
            res['start_date'] = (now_time + datetime.timedelta(days=1)).strftime('%Y-%m-%d')
            res['end_date'] = (now_time + datetime.timedelta(days=5)).strftime('%Y-%m-%d')
    elif '上周' in sentence or '上一周' in sentence:
        date = (now_time - datetime.timedelta(days=7)).strftime('%Y-%m-%d')
        if weekday == 1:
            res['start_date'] = (now_time - datetime.timedelta(days=7)).strftime('%Y-%m-%d')
            res['end_date'] = (now_time - datetime.timedelta(days=3)).strftime('%Y-%m-%d')
        elif weekday == 2:
            res['start_date'] = (now_time - datetime.timedelta(days=8)).strftime('%Y-%m-%d')
            res['end_date'] = (now_time - datetime.timedelta(days=4)).strftime('%Y-%m-%d')
        elif weekday == 3:
            res['start_date'] = (now_time - datetime.timedelta(days=9)).strftime('%Y-%m-%d')
            res['end_date'] = (now_time - datetime.timedelta(days=5)).strftime('%Y-%m-%d')
        elif weekday == 4:
            res['start_date'] = (now_time - datetime.timedelta(days=10)).strftime('%Y-%m-%d')
            res['end_date'] = (now_time - datetime.timedelta(days=6)).strftime('%Y-%m-%d')
        elif weekday == 5:
            res['start_date'] = (now_time - datetime.timedelta(days=11)).strftime('%Y-%m-%d')
            res['end_date'] = (now_time - datetime.timedelta(days=7)).strftime('%Y-%m-%d')
        elif weekday == 6:
            res['start_date'] = (now_time - datetime.timedelta(days=5)).strftime('%Y-%m-%d')
            res['end_date'] = (now_time - datetime.timedelta(days=1)).strftime('%Y-%m-%d')
        elif weekday == 7:
            res['start_date'] = (now_time - datetime.timedelta(days=6)).strftime('%Y-%m-%d')
            res['end_date'] = (now_time - datetime.timedelta(days=2)).strftime('%Y-%m-%d')
    else:
        res['start_date'] = None
        res['end_date'] = None

    return res

# 4.匹配早餐、午餐
def get_brunch(sentence, res):
    if '早上' or '早' in sentence:
        res['brunch'] = '早餐'
    elif '下午' or '中午' in sentence:
        res['brunch'] = '午餐'
    else:
        res['brunch'] = 'None'
    return res

# 5.匹配category（菜的种类）: 1-主荤（大昏）2-半荤（小荤）3-蔬菜（素菜）4-汤 5-点心 6-粗粮   
# 将词典存入字典
def dict_to_trie(slot_value):
    '''
    slot_value: 词典类型(menu/date/time)
    return: t['面条'] = ‘menu’
    '''
    root=os.path.abspath(os.path.dirname(__file__))
    t = pygtrie.StringTrie()
    with open(root+'/slot-dictionaries/'+slot_value+'.txt', 'r', encoding='utf-8') as fin:
        for line in fin:
            line = line.strip('\n').strip('\t')
            t[line] = slot_value
    return t 

def get_category(sentence, res):
    slot_values = ['主荤','半荤', '蔬菜', '汤', '点心', 
    '粗粮']
    res['category'] = None
    res['menu'] = None

    for slot_value in slot_values:
        t_trie = dict_to_trie(slot_value)
        i = j = 0
        length = len(sentence)
        while i<length and j<length:
            dict_word = sentence[i:j+1]
            if t_trie.has_key(dict_word):
                j = j + 1
                if slot_value not in res.keys():
                    res['category'] = slot_value 
                    res['menu'] = dict_word
                else:
                    continue
            else:
                j = j + 1
                if j==length-1 and i<length:
                    dict_word = sentence[i:j+1]
                    if t_trie.has_key(dict_word):
                        if slot_value not in res.keys():
                            res['category'] = slot_value
                            res['menu'] = dict_word
                        else:
                            continue
                        break 
                    i = i + 1
                    j = 0

    return res

# 6.返回菜名，如果未说具体菜名，并且是问菜单类的问题，则返回全部菜单 
def get_menu(sentence, res):
    if res['menu'] is None and ('菜' in sentence or '菜单' in sentence):
        res['menu'] = '全部菜单'
    return res

# 封装函数
def get_dinningRoom(sentence):
    res = {}
    #1.获取意图
    res = get_intent(res)
    #2.获取问题种类
    res = get_type(sentence, res)
    #3.获取日期
    res = get_date(sentence, res)
    #4.获取早、午餐
    res = get_brunch(sentence, res)
    #5.获取菜的种类
    res = get_category(sentence, res)
    #6.获取菜单
    res = get_menu(sentence, res)
    return res


if __name__ == '__main__':
    res = {}
    sentence = '上周的饼干多少钱'
    res = get_dinningRoom(sentence)
    print(res)





