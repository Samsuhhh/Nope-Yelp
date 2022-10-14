from flask import Blueprint, Response, jsonify
from flask_login import login_required
from app.models import User, Business, Tags, Reviews
from flask_login import current_user

review_routes= Blueprint('reviews', __name__)

## EDIT REVIEW
@review_routes.route("/<int:id>", methods=["PUT"])
@login_required
def edit_review(id):

  review= Review.query.get(id):

  if not review:
    return {"message":"Review could not be found", "statusCode:404"}

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
