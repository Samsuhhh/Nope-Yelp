from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField
from wtforms.validators import DataRequired


class BusinessImageForm(FlaskForm):
    business_id= IntegerField('Business ID', validators=[DataRequired()])
    url = StringField("URL", validators=[DataRequired()])
