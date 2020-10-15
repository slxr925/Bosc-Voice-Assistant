import re
def testww():
    text="""
    <meta content="always" name="referrer">
<script>
	(new Image()).src = 'https://weixin.sogou.com/approve?uuid=' + '367c5936-c3e0-430b-b9ce-df18ff627422' + '&token=' + '5E788A2A0DF92A364B4EE561EF837EAF4C6C10CF5F4E31E8' + '&from=inner';

    setTimeout(function () {
        var url = '';
        url += 'http://mp.w';
        url += 'eixin.qq.co';
        url += 'm/s?src=11&';
        url += 'timestamp=1';
        url += '598958748&v';
        url += 'er=2558&sig';
        url += 'nature=Lbk8';
        url += 'D2Qc2shzA-y';
        url += 'bENuclc70zl';
        url += '9iwpMISE6a2';
        url += 'rO2xgLvavQk975IHEetGkoQb0gIU9Mkwjz6CEcdQHZ1*cElRnKfd6cP24y8ZToNBr9m2jidAxXs7xopUpGZYT1QRo6f&new=1';
        url.replace("@", "");
        window.location.replace(url)
    },100);

</script>
    """
    pattern = re.compile(r"'.+'")
    result = pattern.findall(text)
    print(result)
import datetime
def test1():
    t='2020年8月31日'
    data_format="%Y年%m月%d日"
    date = datetime.datetime.strptime(t,data_format)
    print(date)
# test1()
def test():
    t={'主荤': ['上汤肉圆', '椒盐基围虾', '清蒸小鲈鱼', '蒜香鸡米花'], '半荤': ['青红椒土豆肉片', '干锅有机花菜', '五香兰花干', '番茄炒蛋'], '水果': ['桔子'], '汤': ['咸菜肉丝麻腐汤', '绿豆汤'], '点心': ['清蛋糕', '烤布丁', '夹心蛋糕', '肉包刀切', '五香薄饼'], '粗粮': ['山芋'], '蔬菜': ['青菜', '卷心菜', '葱油菜瓜'], '蛋': ['白煮蛋', '茶叶蛋'], '豆浆、粥、汤': ['豆浆', '牛奶', '白粥', '谷物牛奶麦片'], '赠品': [], '酱菜': ['榨菜'], '面浇头': ['辣肉', '炒素', '蔬菜'], '面食1': ['面条', '小馄饨', '汤米粉'], '面食2': ['熏鱼面', '榨菜肉丝面', '五香兰花干面'], '饮料': ['酸奶', '冰红茶']}
    l=[]
    for k in t:
        l.extend(t[k])
    print('\n'.join(l))
# test()
from Util.db_util import dbutil
import random
from tqdm import tqdm
def test3():
    dbs = dbutil("tengxun")
    dict={
        '主荤':300,
        '半荤':220,
        '水果':70,
        '汤':20,
        '点心':100,
        '粗粮':90,
        '蔬菜':100,
        '蛋':150,
        '豆浆、粥、汤':60,
        '酱菜':20,
        '面浇头':40,
        '面食1':160,
        '面食2': 160,
        '饮料':80
    }
    sql='select DISTINCT food_name,category from foodmenu '
    food=dbs.getDics(sql)
    for f in tqdm(food):
        v=dict[f['category']]
        r=random.random()*0.3+1
        t=int(v*r)
        sql2='update foodmenu set calorie=%s where food_name=%s'
        dbs.exe_sql(sql2,(t,f['food_name']))

test3()