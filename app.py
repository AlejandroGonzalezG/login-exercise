from flask import Flask, request, jsonify
from flask_migrate import Migrate
from flask_jwt_extended import JWTManager
from flask_cors import CORS
from src.api.models import db
from src.api.auth import auth
from src.api.account import account

app = Flask(__name__)
app.config['DEBUG'] = True
app.config['ENV'] = 'deployment'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///database.db'
app.config['JWT_SECRET_KEY'] = 'secret-key'

db.init_app(app)
Migrate(app, db)
jwt = JWTManager(app)
CORS(app)

app.register_blueprint(auth, url_prefix='/api')
app.register_blueprint(account, url_prefix='/api')

@app.route('/')
def root():
    return jsonify({ "message": "API REST FLASK" }), 200

if __name__ == '__main__':
    app.run()

