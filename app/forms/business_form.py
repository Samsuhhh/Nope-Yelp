from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, SelectMultipleField, SelectField
from wtforms.validators import DataRequired, Email, ValidationError
from app.models import Business

main_tag_lst = [
    'Acai Bowls',
    'Bagels',
    'Bakeries',
    'Beer, Wine & Spirits',
    'Breweries',
    'Bubble Tea',
    'Butcher',
    'Coffee & Tea',
    'Convenience Stores',
    'Delicatessen',
    'Desserts',
    'Donuts',
    'Farmers Market',
    'Food Delivery Services',
    'Food Trucks',
    'Gelato',
    'Grocery',
    'Honey',
    'Ice Cream & Frozen Yogurt',
    'Internet Cafes',
    'Juice Bars & Smoothies',
    'Poke',
    'Shaved Ice',
    'Tortillas',
    'Afghan',
    'African',
    'American',
    'Asian Fusion',
    'Barbeque',
    'Bistros',
    'Brazilian',
    'Breakfast & Brunch',
    'Buffets',
    'Burgers',
    'Cafes',
    'Cajun/Creole',
    'Caribbean',
    'Chicken Wings',
    'Chinese',
    'Comfort Food',
    'Cuban',
    'Danish',
    'Diners',
    'Dim Sum',
    'Dumplings',
    'Eastern European',
    'Filipino',
    'Fish & Chips',
    'Food Court',
    'French',
    'Gastropubs',
    'German',
    'Gluten-Free',
    'Greek',
    'Halal',
    'Hawaiian',
    'Hong Kong Style Cafe',
    'Fast Food',
    'Hot Pot',
    'Indian',
    'Italian',
    'Japanese',
    'Kebab',
    'Korean',
    'Kosher',
    'Raw Food',
    'Mediterranean',
    'Mexican',
    'Middle Eastern',
    'Noodles',
    'Pizza',
    'Salad',
    'Seafood',
    'Soul Food',
    'Soup',
    'Steakhouse',
    'Sushi',
    'Tapas',
    'Fusion',
    'Thai',
    'Vegan',
    'Vegetarian',
    'Vietnamese',
    'Bootcamp'
]

def valid_name(form, field):
    name = field.data
    if len(name) > 40 or len(name) < 1:
        raise ValidationError('Business name must be between 1 and 40 characters.')

def valid_phone(form, field):
    phone = field.data
    if not len(phone) == 10:
        raise ValidationError('Please enter valid phone number.')

def valid_address(form, field):
    address = field.data
    if len(address) > 50 or len(address) < 5:
        raise ValidationError('Street address must be between 5 and 50 characters.')

def valid_city(form, field):
    city = field.data
    if len(city) > 20 or len(city) < 2:
        raise ValidationError('City must be between 2 and 20 characters.')

def valid_zip(form, field):
    zipcode = field.data
    if zipcode > 99999 or zipcode < 10000:
        raise ValidationError('Please enter a valid zip code.')

def valid_state(form, field):
    state = field.data
    if len(state) > 20 or len(state) < 2:
        raise ValidationError('State must be between 2 and 15 characters.')

def valid_about(form, field):
    about = field.data
    if len(about) > 3000 or len(about) < 5:
        raise ValidationError('About must be between 5 and 3000 characters.')

def valid_lng(form, field):
    lng = field.data
    if lng > 180 or lng < -180:
        raise ValidationError('Longitude must be between 180 and -180.')

def valid_lat(form, field):
    lat = field.data
    if lat > 90 or lat < -90:
        raise ValidationError('Latitude must be between 90 and -90.')

def valid_price_range(form, field):
    price_range = field.data
    if price_range > 4 or price_range < 1:
        raise ValidationError('Price range must be between 1 and 4.')

def valid_website(form, field):
    website = field.data
    if len(website) > 75 or len(website) < 4:
        raise ValidationError('Website url must be between 4 and 75 characters.')

class BusinessForm(FlaskForm):
    business_name = StringField('Name', validators=[DataRequired(), valid_name])
    email = StringField('Email', validators=[DataRequired(), Email()])
    phone = StringField('Phone Number', validators=[DataRequired(), valid_phone])
    street_address = StringField('Address', validators=[DataRequired(), valid_address])
    city = StringField('City', validators=[DataRequired(), valid_city])
    zipcode = IntegerField('Zip Code', validators=[DataRequired(), valid_zip])
    state = StringField('State', validators=[DataRequired(), valid_state])
    about = StringField('About', validators=[DataRequired(), valid_about])
    longitude = IntegerField('Longitude', validators=[DataRequired(), valid_lng])
    latitude = IntegerField('Latitude', validators=[DataRequired(), valid_lat])
    price_range = IntegerField('Price Range', validators=[DataRequired(), valid_price_range])
    website = StringField('Website', validators=[DataRequired(), valid_website])
    # tags = SelectMultipleField('Tags', choices=main_tag_lst)
    tag1 = StringField('Tag1')
    tag2 = StringField('Tag2')
    tag3 = StringField('Tag3')
