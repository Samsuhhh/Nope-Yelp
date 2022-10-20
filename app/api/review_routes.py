from flask import Blueprint, request, jsonify
from flask_login import login_required
from app.models import Review, db, User
from flask_login import current_user
from app.forms.review_form import ReviewForm

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

    db.session.add(review)
    db.session.commit()

    return review.to_dict()
  pass ## TODO HANDLE VALIDATION ERRS


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
