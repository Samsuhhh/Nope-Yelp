from crypt import methods
from flask import Blueprint, request, jsonify
from flask_login import login_required
from app.models import Review, db, User
from flask_login import current_user
from app.forms.review_form import ReviewForm

def validation_form_errors(validation_errors):
  errors = []
  for field in validation_errors:
    for err in validation_errors[field]:
      errors.append(f'{field}:{err}')
  return errors

review_routes = Blueprint('reviews', __name__)

## GET ALL REVIEWS
@review_routes.route("/", methods=["GET"])
def get_reviews():
  reviews = Review.query.order_by(Review.created_at.desc()).all()
  review_list = []

  for review in reviews:
    owner = (User.query.filter(User.id == review.user_id).one()).to_dict()
    reviews_dict = review.to_dict()
    reviews_dict['owner'] = owner
    review_list.append(reviews_dict)

  return {"reviews": [review for review in review_list]}

## GET REVIEWS OF CURRENT USER
@review_routes.route("/current", methods=["GET"])
def get_reviews_of_curr_user():
  reviews = Review.query.filter(current_user.id == Review.user_id).all()
  return {"reviews": [review.to_dict() for review in reviews]}

## EDIT REVIEW
@review_routes.route("/<int:id>", methods=["PUT"])
@login_required
def edit_review(id):

  review= Review.query.get(id)

  if not review:
    return {"message":"Review could not be found", "statusCode":404}

  if current_user.id != review.user_id:
    return {"message":"Forbidden", "statusCode":403}

  form = ReviewForm()
  form['csrf_token'].data = request.cookies['csrf_token']
  if form.validate_on_submit():
    review.nope = form.nope.data
    review.review = form.review.data

    db.session.commit()

    return review.to_dict()
  return {"errors": validation_form_errors(form.errors), "statusCode":401}


## DELETE A REVIEW
@review_routes.route('/<int:id>', methods=["DELETE"])
@login_required
def delete_review(id):
  review = Review.query.get(id)
  ## ERROR HANDLING NONEXISTENT REVIEW
  if not review:
    return {"message": "Review couldn't be found", "statusCode":404}
  ## ERROR HANDLING LOGGED IN USER DID NOT CREATE THIS REVIEW
  if current_user.id != review.user_id:
    return {"message":"Forbidden", "statusCode":403}
  db.session.delete(review)
  db.session.commit()

  return {"message":"Successfully deleted", "statusCode":200}


## GET REVIEW BY ID
@review_routes.route('/<int:id>', methods=['GET'])
@login_required
def get_singular_review(id):
  review = Review.query.get(id)

  if not review:
    return {"message": "Review couldn't be found", "statusCode":404}
  if current_user.id != review.user_id:
    return {"message":"Forbidden", "statusCode":403}

  review_dict = review.to_dict()
  owner = (User.query.filter(User.id == review.user_id).one()).to_dict()
  review_dict['Owner'] = owner

  return review_dict
