import datetime
import re
def get_current_week():
    monday, sunday = datetime.date.today(), datetime.date.today()
    one_day = datetime.timedelta(days=1)
    while monday.weekday() != 0:
        monday -= one_day
    while sunday.weekday() != 6:
        sunday += one_day
    # 返回当前的星期一和星期天的日期  2020年6月8日~6月14日
    return "{y}年{m1}月{d1}日~{m2}月{d2}日".format(y=monday.year,m1=monday.month,d1=monday.day,m2=sunday.month,d2=sunday.day)
    # return monday, sunday

# print(get_current_week())
