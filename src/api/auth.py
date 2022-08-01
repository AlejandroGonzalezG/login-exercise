import datetime
from flask import Blueprint, jsonify, request
from flask_jwt_extended import create_access_token
from models import User, Profile
from werkzeug.security import generate_password_hash, check_password_hash

auth = Blueprint('auth', __name__)

@auth.route('/login', methods=['POST'])
def login():
    email = request.json.get('email')
    password = request.json.get('password')

    if not email: return jsonify({ "status": "Failed", "message": "El email es requerido", "data": None }), 400
    if not password: return jsonify({ "status": "Failed", "message": "Password is required", "data": None }), 400
    
    userExits = User.query.filter_by(email=email).first()
    if not userExits: return jsonify({ "status": "Failed", "message": "Email/Password son incorrectos", "data": None }), 401
    if not check_password_hash(userExits.password, password): return jsonify({ "status": "failed", "message": "Email/Password son incorrectos", "data": None }), 401

    expires = datetime.timedelta(days=1)

    access_token = create_access_token(identity=userExits.id, expires_delta=expires)

    data = {
        "access_token": access_token,
        "user": userExits.serialize()
    }

    return jsonify({ "status": "success", "message": "Login realizado de forma correcta", "data": data }), 200

@auth.route('/register', methods=['POST'])
def register():

    email = request.json.get('email')
    password = request.json.get('password')

    name = request.json.get('name', '')
    phone_number = request.json.get('phone_number', '')

    if not email: return jsonify({ "status": "Failed", "message": "El email es requerido", "data": None }), 400
    if not password: return jsonify({ "status": "Failed", "message": "El password es requerido", "data": None }), 400
    
    userFound = User.query.filter_by(email=email).first()
    if userFound: return jsonify({ "status": "Failed", "message": "User already exists", "data": None }), 400

    user = User()
    user.email = email
    user.password = generate_password_hash(password)

    profile = Profile()
    profile.name = name
    profile.phone_number = phone_number

    user.profile = profile
    user.save()

    if user: return jsonify({ "status": "Success", "message": "Registro realizado de forma satisfactoria, por favor ingrese al Login", "data": None }), 200
    else: return jsonify({ "status": "Failed", "message": "Error al momento de registrar, por favor intente nuevamente", "data": None }), 200