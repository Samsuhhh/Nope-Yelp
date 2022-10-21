from crypt import methods
import json
from turtle import title
from flask import Blueprint, request, jsonify
from flask_login import current_user, login_required
from app.models import User, Business, Review, BusinessImage, db, Tag
from app.forms.business_form import BusinessForm
from app.forms.review_form import ReviewForm
from app.forms.business_img_form import BusinessImageForm


def validation_form_errors(validation_errors):
  errors = []
  for field in validation_errors:
    for err in validation_errors[field]:
      errors.append(f'{field}:{err}')
  return errors

business_routes = Blueprint("businesses", __name__)

## BUSINESS ROUTE FOR GET ALL BUSINESSES
@business_routes.route("/", methods=["GET"])
def get_all_businesses():
  ## TODO ADD QUERYING FOR SEARCHING "LIKE%NAME%"
  businesses = Business.query.all()

  business_lst = [{"placeholder":"placehodor"}]
  for business in businesses:
    business_dict = business.to_dict()
    images = BusinessImage.query.filter(BusinessImage.business_id == business.id).first()
    images_dict =images.to_dict()
    business_dict["images"] = images_dict
    business_dict['tags'] = [tag.to_dict() for tag in business.tags]
    # print(business)
    if business.reviews:
      business_dict["review_count"] = len(business.reviews)
      business_dict["review_average"] = round(sum([review.nope for review in business.reviews]) / len(business.reviews), 2)
    business_lst.append(business_dict)
  return jsonify(business_lst)

## BUSINESS ROUTE FOR GET BUSSINESS OWNED BY CURRENT USER
## TODO FIXME
@business_routes.route("/current", methods=["GET"])
@login_required
def get_businesses_of_curr_user():

  businesses = Business.query.filter(current_user.id == Business.owner_id ).all()
  return {"businesses":[business.to_dict() for business in businesses]}

## GET BUSINESS BY ID
@business_routes.route("/<int:id>", methods=["GET"])
def get_business_by_id(id):
  business = Business.query.get(id)

  if not business:
    return {"message":"Business couldn't be found", "statusCode": 404}

  business_dict = business.to_dict()
  owner = (User.query.filter(User.id == business.owner_id).one()).to_dict()
  business_dict['Owner'] = owner

  reviews = Review.query.filter(Review.business_id == id)
  business_dict['Reviews'] = [review.to_dict() for review in reviews]

  business_dict['tags'] = [tag.to_dict() for tag in business.tags]
  # business_dict['tags'] = [tag for tag in business.tags]

  businessImages = BusinessImage.query.filter(BusinessImage.business_id == id)
  business_dict['BusinessImages'] = [businessImage.to_dict() for businessImage in businessImages]



  ## reviews is superfulous not doing anything because reviews is always truthy
  if reviews:
    if len(business.reviews) == 0:
      business_dict["reviewCount"] = 0
      business_dict["reviewAverage"] = 0
    else:
      business_dict["reviewCount"] = len(business.reviews)
      business_dict["reviewAverage"] = round(sum([review.nope for review in business.reviews]) / len(business.reviews), 2)

  return business_dict
## GET REVIEWS BY BUSINESS ID
@business_routes.route('/<int:id>/reviews', methods=["GET"])
def get_review_by_business(id):

  ##ERROR HANDLING NON-EXISTING BUSINESS
  business = Business.query.get(id)
  if not business:
    return {"message": "Business couldn't be found.", "statusCode":404}

  ## FILTERING REVIEWS BY BUSINESS ID
  reviews_lst = []
  reviews = Review.query.filter(Review.business_id == id).all()
  for review in reviews:
    review_dict = review.to_dict()

    ## FINDING THE OWNER OF EACH REVIEW BY USER ID
    owner = (User.query.filter(User.id == review.user_id).one()).to_dict()
    review_dict['Owner'] = owner

    reviews_lst.append(review_dict)
  return jsonify(reviews_lst)
  # return {"Reviews": [review.to_dict() for review in reviews]}

## EDIT A BUSINESS
@business_routes.route('/<int:id>', methods=['PUT'])
@login_required
def edit_a_business(id):
  business = Business.query.get(id)
  if not business:
    return {"message":"Business couldn't be found", "statusCode":404}

  if business.owner_id != current_user.id:
    return {"message":"Forbidden", "statusCode":403}

  form = BusinessForm()
  form['csrf_token'].data = request.cookies['csrf_token']
  if form.validate_on_submit():
    tags_lst = []
    tag1 = Tag(tag=form.tag1.data)
    tag2 = Tag(tag=form.tag2.data)
    tag3 = Tag(tag=form.tag3.data)
    tags_lst.append(tag1)
    tags_lst.append(tag2)
    tags_lst.append(tag3)
    business.business_name = form.business_name.data
    business.email = form.email.data
    business.phone = form.phone.data
    business.owner_id = current_user.id
    business.street_address = form.street_address.data
    business.city = form.city.data
    business.zipcode = form.zipcode.data
    business.state = form.state.data
    business.about = form.about.data
    business.longitude = form.longitude.data
    business.latitude = form.latitude.data
    business.price_range = form.price_range.data
    business.website = form.website.data
    business.tags = tags_lst

    db.session.commit()

    updated_business = business.to_dict()
    updated_business['tags'] = tags_lst
    return updated_business
  return {"errors": validation_form_errors(form.errors), "statusCode":401}

## DELETE A BUSINESS
@business_routes.route('/<int:id>', methods=['DELETE'])
@login_required
def delete_business(id):
  print('\n\n\n\n\n\n\n DELETE A BUSINESS RUNNING')
  business = Business.query.get(id)
  if not business:
    return {"message":"Business couldn't be found", "statusCode":404}
  if business.owner_id != current_user.id:
    return {"message":"Forbidden", "statusCode":403}

  db.session.delete(business)
  db.session.commit()

  return {"message":"Successfully deleted", "statusCode":200}


# TAGS NECESSARY TO CREATE A BUSINESS
main_tag_lst = [
    {'title': 'Acai Bowls'},
    {'title': 'Bagels'},
    {'title': 'Bakeries'},
    {'title': 'Beer, Wine & Spirits'},
    {'title': 'Breweries'},
    {'title': 'Bubble Tea'},
    {'title': 'Butcher'},
    {'title': 'Coffee & Tea'},
    {'title': 'Convenience Stores'},
    {'title': 'Delicatessen'},
    {'title': 'Desserts'},
    {'title': 'Donuts'},
    {'title': 'Farmers Market'},
    {'title': 'Food Delivery Services'},
    {'title': 'Food Trucks'},
    {'title': 'Gelato'},
    {'title': 'Grocery'},
    {'title': 'Honey'},
    {'title': 'Ice Cream & Frozen Yogurt'},
    {'title': 'Internet Cafes'},
    {'title': 'Juice Bars & Smoothies'},
    {'title': 'Poke'},
    {'title': 'Shaved Ice'},
    {'title': 'Tortillas'},
    {'title': 'Afghan'},
    {'title': 'African'},
    {'title': 'American'},
    {'title': 'Asian Fusion'},
    {'title': 'Barbeque'},
    {'title': 'Bistros'},
    {'title': 'Brazilian'},
    {'title': 'Breakfast & Brunch'},
    {'title': 'Buffets'},
    {'title': 'Burgers'},
    {'title': 'Cafes'},
    {'title': 'Cajun/Creole'},
    {'title': 'Caribbean'},
    {'title': 'Chicken Wings'},
    {'title': 'Chinese'},
    {'title': 'Comfort Food'},
    {'title': 'Cuban'},
    {'title': 'Danish'},
    {'title': 'Diners'},
    {'title': 'Dim Sum'},
    {'title': 'Dumplings'},
    {'title': 'Eastern European'},
    {'title': 'Filipino'},
    {'title': 'Fish & Chips'},
    {'title': 'Food Court'},
    {'title': 'French'},
    {'title': 'Gastropubs'},
    {'title': 'German'},
    {'title': 'Gluten-Free'},
    {'title': 'Greek'},
    {'title': 'Halal'},
    {'title': 'Hawaiian'},
    {'title': 'Hong Kong Style Cafe'},
    {'title': 'Fast Food'},
    {'title': 'Hot Pot'},
    {'title': 'Indian'},
    {'title': 'Italian'},
    {'title': 'Japanese'},
    {'title': 'Kebab'},
    {'title': 'Korean'},
    {'title': 'Kosher'},
    {'title': 'Raw Food'},
    {'title': 'Mediterranean'},
    {'title': 'Mexican'},
    {'title': 'Middle Eastern'},
    {'title': 'Noodles'},
    {'title': 'Pizza'},
    {'title': 'Salad'},
    {'title': 'Seafood'},
    {'title': 'Soul Food'},
    {'title': 'Soup'},
    {'title': 'Steakhouse'},
    {'title': 'Sushi'},
    {'title': 'Tapas'},
    {'title': 'Fusion'},
    {'title': 'Thai'},
    {'title': 'Vegan'},
    {'title': 'Vegetarian'},
    {'title': 'Vietnamese'},
]

## CREATE A BUSINESS
@business_routes.route("/", methods=["POST"])
@login_required
def create_business():
  form = BusinessForm()
  form['csrf_token'].data = request.cookies['csrf_token']
  if form.validate_on_submit():
    tags_lst = []
    # for tag in form.tags.data:
    #   # valid = [tag_title for tag_title in main_tag_lst if tag_title['title'] == tag][0]
    #   # add_tag=Tag(tag=valid['title'])
    #   # add_tag=Tag(tag=tag)
    #   add_tag = Tag.query.filter(Tag.tag == tag).to_dict()
    #   tags_lst.append(add_tag)
    # for tag in request.data.tags:
    #     add_tag = Tag.query.filter(Tag.tag == tag)
    #     tags_lst.append(add_tag)
    tag1 = Tag(tag=form.tag1.data)
    tag2 = Tag(tag=form.tag2.data)
    tag3 = Tag(tag=form.tag3.data)
    tags_lst.append(tag1)
    tags_lst.append(tag2)
    tags_lst.append(tag3)

    business = Business(
      business_name = form.business_name.data,
      email = form.email.data,
      phone = form.phone.data,
      owner_id = current_user.id,
      street_address = form.street_address.data,
      city = form.city.data,
      zipcode = form.zipcode.data,
      state = form.state.data,
      about = form.about.data,
      longitude = form.longitude.data,
      latitude = form.latitude.data,
      price_range = form.price_range.data,
      website = form.website.data,
      tags=tags_lst
    )
    db.session.add(business)
    db.session.commit()

    new_tags = [tag.to_dict() for tag in tags_lst]

    new_business = business.to_dict()
    new_business['tags'] = new_tags

    return new_business

  return {"errors": validation_form_errors(form.errors), "statusCode":401}

## CREATE A REVIEW FOR BUSINESS VIA ID
@business_routes.route('/<int:id>/reviews', methods=["POST"])
@login_required ## must be logged in to leave a review
def create_review(id):

  business = Business.query.get(id)

  ##ERROR HANDLING NON-EXISTING BUSINESS
  if not business:
    return {"message": "Business couldn't be found.", "statusCode":404}

  ## CHECK IF current_user.id WORKS
  if business.owner_id == current_user.id:
    return {"message": "Business owner cannot write a review for their business", "statusCode":403}

  form = ReviewForm()
  form['csrf_token'].data = request.cookies['csrf_token']
  if form.validate_on_submit():

    review = Review(
      user_id = current_user.id,
      business_id = id,
      nope = form.nope.data,
      review = form.review.data
    )

    db.session.add(review)
    db.session.commit()

    return review.to_dict()
  return {"errors": validation_form_errors(form.errors), "statusCode":401}


## ADD AN IMAGE TO A BUSINESS VIA ID
@business_routes.route('/<int:id>/images', methods=["POST"])
@login_required
def add_image(id):
  business = Business.query.get(id)

  ## ERROR HANDLING NON-EXISTENT BUSINESS
  if not business:
    return {"message": "Business coulnd't be found.", "statusCode": 404}

  form = BusinessImageForm()
  form['csrf_token'].data = request.cookies['csrf_token']
  if form.validate_on_submit():
    img = BusinessImage(
      business_id = id,
      url = form.url.data
    )

    db.session.add(img)
    db.session.commit()

    return img.to_dict()
  return {"errors": validation_form_errors(form.errors), "statusCode": 401}

# DELETE AN IMAGE FROM A BUSINESS VIA ID
@business_routes.route('/images/<int:id>', methods=["DELETE"])
@login_required
def delete_business_image(id):
  business_image = BusinessImage.query.get(id)
  # ERROR HANDLING NONEXISTENT IMAGE
  if not business_image:
    return {"message": "Review couldn't be found", "statusCode":404}

  db.session.delete(business_image)
  db.session.commit()

  return {"message": "Successfully delete", "statusCode": 200}
