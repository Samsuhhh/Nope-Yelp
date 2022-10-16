from flask import Blueprint, jsonify
from app.models import Tag


tag_routes = Blueprint('tags', __name__)


@tag_routes.route('/', methods=["GET"])
def get_all_tags():
    tags = Tag.query.all()
    tag_list = []

    for tag in tags:
        tags_dict = tag.to_dict()
        tag_list.append(tags_dict)

    return {"tags": [tag for tag in tag_list]}
