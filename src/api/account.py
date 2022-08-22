from flask import Blueprint, jsonify, request
from flask_jwt_extended import get_jwt_identity, jwt_required
from werkzeug.security import generate_password_hash, check_password_hash
from src.api.models import User, Profile

account = Blueprint('account', __name__)

@account.route('/private', methods=['GET'])
@jwt_required()
def get_profile():
    id = get_jwt_identity()
    user = User.query.get(id)
    data = {
        "user": user.serialize()
    }
    return jsonify({ "status": "success", "message": "Profile cargado", "data": data }), 200


@account.route('/private', methods=['PUT'])
@jwt_required()
def update_profile():
    id = get_jwt_identity()
    user = User.query.get(id)

    email = request.json.get('email')
    password = request.json.get('password')

    name = request.json.get('name')
    phone_number = request.json.get('phone_number')
    instagram = request.json.get('instagram')
    facebook = request.json.get('facebook')
    twitter = request.json.get('twitter')
    github = request.json.get('github')

    if not email: return jsonify({ "status": "failed", "message": "El email es requerido", "data": None }), 400
    if not password: return jsonify({ "status": "failed", "message": "El password es requerido", "data": None }), 400

    userFound = User.query.filter_by(email=email).first()
    if userFound and userFound.id != id: return jsonify({ "status": "failed", "message": "el email ya existe", "data": None }), 400

    if password != "":
        user.password = generate_password_hash(password)

    user.email = email
    user.profile.name = name
    user.profile.phone_number = phone_number
    user.profile.instagram = instagram
    user.profile.facebook = facebook
    user.profile.twitter = twitter
    user.profile.github = github
    user.update()

    data = {
        "user": user.serialize()
    }
    return jsonify({ "status": "success", "message": "Profile cargado", "data": data }), 200

