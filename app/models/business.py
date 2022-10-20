from .db import db
from .tag import business_tags

class Business(db.Model):
    __tablename__ = "businesses"

    id = db.Column(db.Integer, primary_key=True)
    owner_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
    business_name = db.Column(db.String(40), nullable=False)
    email = db.Column(db.String(40), nullable=False)
    phone = db.Column(db.String(12), nullable=False)
    street_address = db.Column(db.String(50), nullable=False)
    city = db.Column(db.String(20), nullable=False)
    zipcode = db.Column(db.Integer, nullable=False)
    state = db.Column(db.String(15), nullable=False)
    about = db.Column(db.String(3000), nullable=False)
    longitude = db.Column(db.Float, nullable=False)
    latitude = db.Column(db.Float, nullable=False)
    price_range = db.Column(db.Integer, nullable=False)
    website = db.Column(db.String(75), nullable=False)

    owner = db.relationship("User", back_populates="businesses")
    reviews = db.relationship("Review", back_populates="businesses")
    tags = db.relationship("Tag", secondary=business_tags, back_populates="businesses")
    business_images = db.relationship(
        "BusinessImage", back_populates="businesses")

    def to_dict(self):
        return {
            "id":self.id,
            "owner_id":self.owner_id,
            "business_name":self.business_name,
            "email":self.email,
            "phone":self.phone,
            "street_address":self.street_address,
            "city":self.city,
            "zipcode":self.zipcode,
            "state":self.state,
            "about":self.about,
            "longitude":self.longitude,
            "latitude":self.latitude,
            "price_range":self.price_range,

            "website":self.website
        }
