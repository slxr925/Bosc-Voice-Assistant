# -*- coding: utf-8 -*-
#-------------------------------------------------
#   File Name：     config
#   Author :        fengge
#   date：          2019/3/27
#   Description :   配置文件
#-------------------------------------------------
environments={

    "tengxun": {
        "dbs": {
            "host": '49.235.152.129',
            "user": 'root',
     "port": 3306,
            "password": 'zdf.0126',
            "database": 'Bosc',
        },
    },
    "shiyanshi": {
        "dbs": {
            "host": '49.235.152.129',
            "user": 'root',
"port": 10003,
            "password": 'SLX..eds123',
            "database": 'train',
        },
    },
    "bijiben": {
        "dbs": {
            "host": '192.168.137.2',
            "user": 'root',
"port": 3306,
            "password": 'zdf.0126',
            "database": 'eds',
        },
    },    "shiyanshi2": {
        "dbs": {
            "host": '49.235.152.129',
            "user": 'root',
"port": 10003,
            "password": 'SLX..eds123',
            "database": 'eds_base',
        },
    },

}
tmp_dir="D:\\tmp"
environment_name="tengxun"
environment=environments[environment_name]
import os
project_dir = os.path.dirname(os.path.abspath(__file__))
data_dir = os.path.dirname(os.path.abspath(__file__))