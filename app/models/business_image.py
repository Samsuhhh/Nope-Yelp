from .db import db

class BusinessImage(db.Model):
    __tablename__ = 'business_images'

    id = db.Column(db.Integer, primary_key=True)
    business_id = db.Column(db.Integer, db.ForeignKey("business.id"))
    url = db.Column(db.String(200), nullable=False)

    business = db.relationship("Business", back_populates="business_images")
