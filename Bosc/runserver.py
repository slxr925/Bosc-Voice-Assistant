from web import app
# from gevent import pywsgi,monkey

# monkey.patch_all()
#
# server = pywsgi.WSGIServer(('0.0.0.0', 8080), app)
# server.serve_forever()
app.run(host="0.0.0.0", debug=True, port=8080)