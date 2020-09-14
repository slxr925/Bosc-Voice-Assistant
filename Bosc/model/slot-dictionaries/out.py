from Util.db_util import dbutil
import os
if "__main__"==__name__:

    db=dbutil('tengxun')
    sql="select * from foodmenu"
    tem=db.getDics(sql)
    dict={}
    for t in tem:
        if t['category'] in dict:
            dict[t['category']].add(t['food_name'])
        else:
            dict[t['category']]=set()
    for k in dict:

        k1=k.strip('1').strip('2')
        t=[a for a in dict[k]]
        name=k1+".txt"
        if os.path.exists(name):
            with open(name,'r',encoding='utf8') as file:
                t.extend(file.readlines())
        t=[a.strip() for a in t if len(a.strip())>0]
        t=list(set(t))
        file=open(name,'w',encoding='utf8')
        file.write('\n'.join(t))
        file.write('\n')
        file.close()
