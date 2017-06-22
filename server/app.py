from flask import Flask
from flask_restful import Api, Resource
from flask_restful.utils import cors
import requests

app = Flask(__name__)
api = Api(app)


class GPU(Resource):
    def get(self):
        r = requests.get('http://153.120.159.204:5000/')
        return r.json(), 200

    def options(self):
        return {'Allow': 'GET'}, 200, {'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Methods': 'PUT,GET', 'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'}
    
api.decorators=[cors.crossdomain(origin='*', automatic_options=False)]
        
api.add_resource(GPU, '/')
        
if __name__ == '__main__':
    app.config["ERROR_404_HELP"] = False
    app.run(debug=False, host='0.0.0.0', port=6101)
