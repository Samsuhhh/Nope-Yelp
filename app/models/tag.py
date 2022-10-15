from .db import db

business_tags = db.Table(
    "business_tags",
    db.Model.metadata,
    db.Column("business_id", db.Integer, db.ForeignKey("businesses.id"), primary_key=True),
    db.Column("tag_id", db.Integer, db.ForeignKey("tags.id"), primary_key=True)
)

class Tag(db.Model):
    __tablename__ = "tags"

    id = db.Column(db.Integer, primary_key=True)
    tag = db.Column(db.String(15), nullable=False)

    businesses = db.relationship("Business", secondary=business_tags, back_populates="tags", cascade="all, delete")
