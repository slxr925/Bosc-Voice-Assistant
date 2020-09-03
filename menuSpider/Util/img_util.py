from PIL import Image
import os
def defind():
    # (left, upper, right, lower)
    dict={
        "time":[320,180,530,260],

        '点心':[50,610,200,1000],
        '豆浆、粥、汤': [195, 610, 350, 1000],
        '面食1': [345, 610, 500, 1000],
        '酱菜': [495, 610, 650, 1000],
        '面浇头': [645, 610, 800, 1000],
        '蛋': [795, 610, 950, 1000],

        '主荤': [50,1200,200,1450],
        '半荤': [195, 1200, 350, 1450],
        '蔬菜': [345, 1200, 500, 1450],
        '汤': [495, 1200, 650, 1450],
        '面食2': [645, 1200, 800, 1450],
        '粗粮': [795, 1200,950, 1450],

        '水果': [50,1520,200,1700],
        '饮料': [195, 1520, 350, 1700],
        '赠品': [345, 1520, 500, 1700]
    }
    return dict
def cropImg(img, newpath,rect):

    # 截图
    assert len(rect)==4,"rect size must be 4"
    cropped = img.crop((rect[0],rect[1],rect[2],rect[3]))
    # 保存到新的目录中
    cropped.save(newpath)
def cutImg(path):
    img = Image.open(path)
    dict=defind()
    filename = os.path.basename(path)
    filename=filename.split('.')[0]
    dir=os.path.dirname(path)+'/'+filename
    if not os.path.exists(dir):
        os.mkdir(dir)
    for k in dict:
        cropImg(img,dir+'/'+k+'.png',dict[k])
# cutImg('D://tmp/张江食堂菜单 2020年8月31日～9月6日/a97c628a-ec4c-11ea-984b-80304911f07c.png')