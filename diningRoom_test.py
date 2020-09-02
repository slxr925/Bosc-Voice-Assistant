#encoding=utf-8
import re
import os
import numpy as np
import pygtrie

#res = {} #定义全局变量
# 只有早餐和午餐，需要转换s


def dict_to_trie(slot_value):
    '''
    slot_value: 词典类型(menu/date/time)
    return: t['面条'] = ‘menu’
    '''
    t = pygtrie.StringTrie()
    with open('slot-dictionaries/'+slot_value+'.txt', 'r', encoding='utf-8') as fin:
        for line in fin:
            line = line.strip('\n').strip('\t')
            t[line] = slot_value
    return t 

def judge_intent(sentence,res):
    if '价格' in sentence or '钱' in sentence:
        res['intent'] = 'ask_price'
    else:
        res['intent'] = 'ask_menu'
    return res
def find_dict(sentence,res):
    slot_values = ['menu','date','time']

    for slot_value in slot_values:
        t_trie = dict_to_trie(slot_value)
        i = j = 0
        length = len(sentence)
        while i<length and j<length:
            dict_word = sentence[i:j+1]
            if t_trie.has_key(dict_word):
                j = j + 1
                if slot_value not in res.keys():
                    res[slot_value] = dict_word 
                else:
                    continue
            else:
                j = j + 1
                if j==length-1 and i<length:
                    dict_word = sentence[i:j+1]
                    if t_trie.has_key(dict_word):
                        if slot_value not in res.keys():
                            res[slot_value] = dict_word
                        else:
                            continue
                        break 
                    i = i + 1
                    j = 0
    for slot_value in slot_values:
        if slot_value not in res.keys():
            res[slot_value] = None
        elif res[slot_value] == '早上' or res[slot_value] == '早':
            res[slot_value] = '早餐'
        elif res[slot_value] == '中午' or res[slot_value] == '下午':
                res[slot_value] = '午餐'

    return res

def get_dinningRoom(sentence, res):
	res = {}
	res = judge_intent(sentence, res)
	res = find_dict(sentence, res)
	return res


if __name__ == '__main__':
    sentence = '面条多少钱？'
    # dict_to_trie('menu')
    res = {}
    # res = judge_intent(sentence, res)
    # res = find_dict(sentence, res)
    res = get_dinningRoom(sentence, res)
    print(res)






