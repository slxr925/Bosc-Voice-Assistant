import os
import datetime
from aip import AipOcr
from Util.db_util import dbutil
from tqdm import tqdm
import uuid


# bf1dfacf-67d8-11e8-
def get_file_content(filePath):
    with open(filePath, 'rb') as fp:
        return fp.read()
def ocr(path):

    """ 你的 APPID AK SK """
    APP_ID = '22496260'
    API_KEY = 'iqmh4nUjXhGfinpYhrvMnKXS'
    SECRET_KEY = '1PSCidMVErnPqQ7zmYRzQbW8FYl4zkI5'
    client = AipOcr(APP_ID, API_KEY, SECRET_KEY)

    image = get_file_content(path)

    """ 如果有可选参数 """
    options = {}
    options["detect_direction"] = "true"
    options["probability"] = "true"

    """ 带参数调用通用文字识别（含位置信息版）, 图片参数为本地图片 """
    res=client.general(image, options)
    return res
import time
def ocr_test(path):
    files=os.listdir(path)
    result={}
    for f in tqdm(files):
        root=path+'/'+f


        res=ocr(root)
        ans=[r['words'] for r in res['words_result']]
        key=f.split('.')[0]
        result[key]=ans
        time.sleep(1)
    insert(result)
# def getPrice(name):
#     dict={
#         '点心':,
#         '豆浆、粥、汤':1,
#         '面食1':5,
#         '酱菜':0,
#         '面浇头',
#         '蛋',
#         '主荤',
#         '半荤',
#         '蔬菜',
#         '汤',
#         '面食2',
#         '粗粮',
#         '水果',
#         '饮料':,
#         '赠品':0
#     }
#     return dict.get(name,0)
def getType(name):
    dict={
        "早餐": ['点心','豆浆、粥、汤', '面食1','酱菜','面浇头','蛋'],
        "午餐":  ['主荤','半荤','蔬菜','汤','面食2','粗粮','水果','饮料','赠品']
    }
    for k in dict:
        if name in dict[k]:
            return k
    return "other"
    pass
def insert(result):
    t=result.pop('time')
    t="2020年"+''.join(t)
    # t="2020年8月31日"
    dbs = dbutil("tengxun")
    data_format="%Y年%m月%d日"
    date = datetime.datetime.strptime(t,data_format)
    for key in result:
        for n in tqdm(result[key]):
            item={
                'table':'foodmenu',
                 "params":{
                       # "food_id":str(uuid.uuid1()),

                       'date':date,
                        "brunch":getType(key),
                        "category":key,
                     "food_img":n+".jpg",
                    "food_name":n,
                     "food_price":0
                 }
            }

            dbs.insertItem(item)


    pass
from Util.img_util import cutImg

def func(path):
    try:
        f=os.listdir(path)
    except:
        path=path.replace('~','～')
        f = os.listdir(path)
    for i in f:
        t=path + i
        if not os.path.isdir(t):
            cutImg(t)
    f = os.listdir(path)
    for i in f:
        t = path + i
        if os.path.isdir(t):
            ocr_test(path+i)
if "__main__"==__name__:
    path = "D://tmp/张江食堂菜单 2020年9月14日~9月20日"
    path = 'D://tmp/张江食堂菜单 2020年9月14日～9月20日'
    func(path)
    ""
# insert("",result)
# ocr('D://tmp/张江食堂菜单 2020年8月31日～9月6日/a97c628a-ec4c-11ea-984b-80304911f07c.png')

