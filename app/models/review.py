from .db import db
from sqlalchemy.sql import func


class Review(db.Model):
    __tablename__ = 'review'

    id = db.Column(db.Integer, primary_key=True)
    review = db.Column(db.String(3000), nullable=False)
    rating = db.Column(db.Integer, nullable=False)
    business_id = db.Column(db.Integer, db.ForeignKey("business.id"), nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey("user.id"), nullable=False)
    created_at = db.Column(db.DateTime(timezone=True), server_default=func.current_timestamp())
    updated_at = db.Column(db.DateTime(timezone=True), onupdate=func.current_timestamp())

    user = db.relationship("User", back_populates="reviews")
    business = db.relationship("Business", back_populates="reviews")
