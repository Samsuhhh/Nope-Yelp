from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField
from wtf.validators import DataRequired, ValidationError, NumberRange

from app.models import Review

def valid_review(form, field):
  review = field.data
  if len(review) < 4 or len(review) > 3000:
    raise ValidationError("Review must be between 4 and 3000 characters")

class ReviewForm(FlaskForm):
  review = StringField('Review', validators=[DataRequired(), review_length])
  rating = IntegerField('Rating', validators=[DataRequired(), NumberRange(min=1, max=5, message="Rating must be between 1-5")])
