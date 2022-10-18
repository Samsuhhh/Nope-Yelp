# from random import randint
# from app.models import db, business_tags

# tags = []
# for i in range(1, 106):
#     business_id_ = i
#     for j in range(0, 3):
#         tag_id_ = randint(1, 83)
#         business_tag = business_tags(business_id=business_id_, tag_id=tag_id_)
#         tags.append(business_tag)

# def seed_bussiness_tags():
#     for tag in tags:
#         db.session.add(tag)
#     db.session.commit()


# def undo_business_tags():
#     db.session.execute('TRUNCATE business_tags RESTART IDENTITY CASCADE;')
#     db.session.commit()
