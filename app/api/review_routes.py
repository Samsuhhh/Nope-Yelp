from flask import Blueprint, request, jsonify
from flask_login import login_required
from app.models import Review, db
from flask_login import current_user
from app.forms.review_form import ReviewForm

review_routes = Blueprint('reviews', __name__)

## GET ALL REVIEWS
@review_routes.route("/", methods=["GET"])
def get_reviews():
  reviews = Review.query.all()
  review_list = []

  for review in reviews:
    reviews_dict = review.to_dict()
    review_list.append(reviews_dict)

  return {"reviews": [review for review in review_list]}

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
    review.rating = form.rating.data
    review.review = form.review.data

    db.session.add(review)
    db.session.commit()

    return review.to_dict()
  pass ## TODO HANDLE VALIDATION ERRS


## DELETE A REVIEW
@review_routes.route('/<int:id>', methods=["DELETE"])
@login_required
def delete_review():
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
