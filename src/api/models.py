from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    __tablename__='users'
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    is_active = db.Column(db.Boolean(), unique=False, nullable=False)
    profile = db.relationship('Profile', backref='user', uselist=False)

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            "profile":self.profile.serialize()
            # do not serialize the password, its a security breach
        }

    def save(self):
        db.session.add(self)
        db.session.commit()

    def update(self):
        db.session.commit()

    def delete(self):
        db.session.delete(self)
        db.session.commit()

class Profile(db.Model):
    __tablename__='profiles'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), default="")
    phone_number = db.Column(db.String(20))
    instagram = db.Column(db.String(50), default="@something")
    facebook = db.Column(db.String(50), default="facebook.com/something")
    twitter = db.Column(db.String(50), default="twitter.com/something")
    github = db.Column(db.String(50), default="github.com/Something")
    users_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)

    def serialize(self):
        return {
            "id":self.id,
            "name":self.name,
            "phone_number":self.phone_number,
            "instagram":self.instagram,
            "facebook":self.facebook,
            "twitter":self.twitter,
            "github":self.github,
        }

    def save(self):
        db.session.add(self)
        db.session.commit()

    def update(self):
        db.session.commit()

    def delete(self):
        db.session.delete(self)
        db.session.commit()