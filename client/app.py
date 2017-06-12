# coding: UTF-8
from flask import Flask
from flask_restful import Api, Resource

app = Flask(__name__)
api = Api(app)


class GPU(Resource):
    def get(self):
        """
        get gpu information
        """
        pass
    

api.add_resource(GPU, '/')


if __name__ == '__main__':
    app.config["ERROR_404_HELP"] = False
    app.run(debug=True, host='0.0.0.0', port=5000)
