from flask import Blueprint, request, Response, jsonify
from flask_login import login_required
from app.models import User, Business, Tag, Review
## TODO CHECK PATHING ABOVE
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

  business_lst = []
  for business in businesses:
    business_dict = business.to_dict()
    if business.reviews:
      business_dict["reviewCount"] = len(business.reviews)
      business_dict["reviewAverage"] = round(sum([review.rating for review in business.reviews]) / len(business.reviews), 2)
    business_lst.append(business_dict)
  return {"businesses":[business for business in business_list]}

## BUSINESS ROUTE FOR GET BUSSINESS OWNED BY CURRENT USER
@business_routes.route("/current", methods=["GET"])
@login_required
def get_businesses_of_curr_user():
  businesses = Business.query.filter(Business.owner_id == current_user.id).all()
  return {"businesses":[business.to_dict() for business in businesses]}

## GET BUSINESS BY ID
@business_routes.route("/<int:id>")
def get_business_by_id(id):
  business = Business.query.get(id)

  if not business:
    return {"message":"Business couldn't be found", "statusCode": 404}
  pass ## TODO FINISH THIS

## GET REVIEWS BY BUSINESS ID
@business_routes.route('/<int:id>/reviews', methods=["GET"])
def get_review_by_business(id):

  ##ERROR HANDLING NON-EXISTING BUSINESS
  business = Business.query.get(id)
  if not business:
    return {"message": "Business couldn't be found.", "statusCode":404}

  ## FILTERING REVIEWS BY BUSINESS ID
  reviews = Review.query.filter(Review.business_id == id).all()
  return {"Reviews": [review.to_dict() for review in reviews]}


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
      rating = form.rating.data,
      review = form.review.data
    )

    db.session.add(review)
    db.session.commit()

    return review.to_dict()
  return {"errors": validation_form_errors(form.errors), "statusCode":401}
