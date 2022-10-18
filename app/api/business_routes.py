import json
from flask import Blueprint, request, jsonify
from flask_login import login_required
from app.models import User, Business, Review, BusinessImage, db
from flask_login import current_user
from app.forms.business_form import BusinessForm
from app.forms.review_form import ReviewForm


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


  # businessImages = BusinessImage.query.filter(BusinessImage.business_id == id)
  # business_dict['BusinessImages'] = [businessImage.to_dict() for businessImage in businessImages]
  businessImages = business.business_images
  business_dict["businessImages"] = [businessImage.to_dict() for businessImage in businessImages]


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

    db.session.commit()
    return business.to_dict()
  return {"errors": validation_form_errors(form.errors), "statusCode":401}

## DELETE A BUSINESS
@business_routes.route('/<int:id>', methods=['DELETE'])
@login_required
def delete_business(id):
  business = Business.query.get(id)
  if not business:
    return {"message":"Business couldn't be found", "statusCode":404}
  if business.owner_id != current_user.id:
    return {"message":"Forbidden", "statusCode":403}

  db.session.delete(business)
  db.session.commit()

  return {"message":"Successfully deleted", "statusCode":200}
## CREATE A BUSINESS
@business_routes.route("/", methods=["POST"])
@login_required
def create_business():
  form = BusinessForm()

  form['csrf_token'].data = request.cookies['csrf_token']
  if form.validate_on_submit():
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
      website = form.website.data
    )
    db.session.add(business)
    db.session.commit()

    return business.to_dict()
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
    return {"message": "Business owner cannot wrtie a review for their business", "statusCode":403}

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
