#!/usr/bin/python
# -*- coding: UTF-8 -*-
from flask import Flask,json,request
app = Flask(__name__)
from model import get_dinningRoom
@app.route('/')
def hello_world():
    return '欢迎来到 上银语音助手！'

@app.route('/search',methods=['GET','POST'])
def index():
    t = request.data
    if len(t)==0:
        t=request.values['data']
    data = json.loads(t)
    print(data)
    #t={"question":"xxxx"}
    if isinstance(data['question'], list):
        data['question']=''.join(data['question'])
    r= {
        'success':True,
        'obj':get_dinningRoom(data['question']),
        'code':1,
        'msg':'success'
    }
    s=json.jsonify(r)
    return s
