from flask import Blueprint, jsonify
from app.models import Tag


tag_routes = Blueprint('tags', __name__)


@tag_routes.route('/')
def get_all_tags():
    tags = Tag.query.all()

    return jsonify(tags)
