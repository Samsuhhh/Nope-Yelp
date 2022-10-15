from app.models import db, User


# Adds a demo user, you can add other users here if you want
def seed_users():
    user1 = User(
        first_name='Carl',
        last_name='Maki',
        email='CarlMaki@email.com',
        username='CarlMaki',
        password='password',
        user_avatar="https://media.istockphoto.com/vectors/profile-placeholder-default-avatar-girl-vector-vector-id1384276314?k=20&m=1384276314&s=612x612&w=0&h=uQ6LZKo19LYc29YkOsupObuxhM70YXUnH8_QzcecQaE=",
    )
    user2 = User(
        first_name='Scarlett',
        last_name='Pettigrew',
        email='ScarlettPettigrew@email.com',
        username='ScarlettPettigrew',
        password='password',
        user_avatar="https://media.istockphoto.com/vectors/profile-placeholder-default-avatar-girl-vector-vector-id1384276314?k=20&m=1384276314&s=612x612&w=0&h=uQ6LZKo19LYc29YkOsupObuxhM70YXUnH8_QzcecQaE=",
    )
    user3 = User(
        first_name='Violet',
        last_name='Irwin',
        email='VioletIrwin@email.com',
        username='VioletIrwin',
        password='password',
        user_avatar="https://media.istockphoto.com/vectors/profile-placeholder-default-avatar-girl-vector-vector-id1384276314?k=20&m=1384276314&s=612x612&w=0&h=uQ6LZKo19LYc29YkOsupObuxhM70YXUnH8_QzcecQaE=",
    )
    user4 = User(
        first_name='Abigail',
        last_name='Tapia',
        email='AbigailTapia@email.com',
        username='AbigailTapia',
        password='password',
        user_avatar="https://media.istockphoto.com/vectors/profile-placeholder-default-avatar-girl-vector-vector-id1384276314?k=20&m=1384276314&s=612x612&w=0&h=uQ6LZKo19LYc29YkOsupObuxhM70YXUnH8_QzcecQaE=",
    )
    user5 = User(
        first_name='Avery',
        last_name='Schiebel',
        email='AverySchiebel@email.com',
        username='AverySchiebel',
        password='password',
        user_avatar="https://media.istockphoto.com/vectors/profile-placeholder-default-avatar-girl-vector-vector-id1384276314?k=20&m=1384276314&s=612x612&w=0&h=uQ6LZKo19LYc29YkOsupObuxhM70YXUnH8_QzcecQaE=",
    )
    user6 = User(
        first_name='Ben',
        last_name='Darnell',
        email='BenDarnell@email.com',
        username='BenDarnell',
        password='password',
        user_avatar="https://media.istockphoto.com/vectors/profile-placeholder-default-avatar-girl-vector-vector-id1384276314?k=20&m=1384276314&s=612x612&w=0&h=uQ6LZKo19LYc29YkOsupObuxhM70YXUnH8_QzcecQaE=",
    )
    user7 = User(
        first_name='Edward',
        last_name='Ventotla',
        email='EdwardVentotla@email.com',
        username='EdwardVentotla',
        password='password',
        user_avatar="https://media.istockphoto.com/vectors/profile-placeholder-default-avatar-girl-vector-vector-id1384276314?k=20&m=1384276314&s=612x612&w=0&h=uQ6LZKo19LYc29YkOsupObuxhM70YXUnH8_QzcecQaE=",
    )
    user8 = User(
        first_name='Willow',
        last_name='Zeller',
        email='WillowZeller@email.com',
        username='WillowZeller',
        password='password',
        user_avatar="https://media.istockphoto.com/vectors/profile-placeholder-default-avatar-girl-vector-vector-id1384276314?k=20&m=1384276314&s=612x612&w=0&h=uQ6LZKo19LYc29YkOsupObuxhM70YXUnH8_QzcecQaE=",
    )
    user9 = User(
        first_name='Zoey',
        last_name='Schlicht',
        email='ZoeySchlicht@email.com',
        username='ZoeySchlicht',
        password='password',
        user_avatar="https://media.istockphoto.com/vectors/profile-placeholder-default-avatar-girl-vector-vector-id1384276314?k=20&m=1384276314&s=612x612&w=0&h=uQ6LZKo19LYc29YkOsupObuxhM70YXUnH8_QzcecQaE=",
    )
    user10 = User(
        first_name='Dan',
        last_name='Soloman',
        email='DanSoloman@email.com',
        username='DanSoloman',
        password='password',
        user_avatar="https://media.istockphoto.com/vectors/profile-placeholder-default-avatar-girl-vector-vector-id1384276314?k=20&m=1384276314&s=612x612&w=0&h=uQ6LZKo19LYc29YkOsupObuxhM70YXUnH8_QzcecQaE=",
    )
    user11 = User(
        first_name='Larry',
        last_name='Soloman',
        email='LarrySoloman@email.com',
        username='LarrySoloman',
        password='password',
        user_avatar="https://media.istockphoto.com/vectors/profile-placeholder-default-avatar-girl-vector-vector-id1384276314?k=20&m=1384276314&s=612x612&w=0&h=uQ6LZKo19LYc29YkOsupObuxhM70YXUnH8_QzcecQaE=",
    )
    user12 = User(
        first_name='Camila',
        last_name='Tandy',
        email='CamilaTandy@email.com',
        username='CamilaTandy',
        password='password',
        user_avatar="https://media.istockphoto.com/vectors/profile-placeholder-default-avatar-girl-vector-vector-id1384276314?k=20&m=1384276314&s=612x612&w=0&h=uQ6LZKo19LYc29YkOsupObuxhM70YXUnH8_QzcecQaE=",
    )
    user13 = User(
        first_name='Fred',
        last_name='Moore',
        email='FredMoore@email.com',
        username='FredMoore',
        password='password',
        user_avatar="https://media.istockphoto.com/vectors/profile-placeholder-default-avatar-girl-vector-vector-id1384276314?k=20&m=1384276314&s=612x612&w=0&h=uQ6LZKo19LYc29YkOsupObuxhM70YXUnH8_QzcecQaE=",
    )
    user14 = User(
        first_name='Grace',
        last_name='Ziegler',
        email='GraceZiegler@email.com',
        username='GraceZiegler',
        password='password',
        user_avatar="https://media.istockphoto.com/vectors/profile-placeholder-default-avatar-girl-vector-vector-id1384276314?k=20&m=1384276314&s=612x612&w=0&h=uQ6LZKo19LYc29YkOsupObuxhM70YXUnH8_QzcecQaE=",
    )
    user15 = User(
        first_name='Otto',
        last_name='Jones',
        email='OttoJones@email.com',
        username='OttoJones',
        password='password',
        user_avatar="https://media.istockphoto.com/vectors/profile-placeholder-default-avatar-girl-vector-vector-id1384276314?k=20&m=1384276314&s=612x612&w=0&h=uQ6LZKo19LYc29YkOsupObuxhM70YXUnH8_QzcecQaE=",
    )
    user16 = User(
        first_name='Paul',
        last_name='Ferro',
        email='PaulFerro@email.com',
        username='PaulFerro',
        password='password',
        user_avatar="https://media.istockphoto.com/vectors/profile-placeholder-default-avatar-girl-vector-vector-id1384276314?k=20&m=1384276314&s=612x612&w=0&h=uQ6LZKo19LYc29YkOsupObuxhM70YXUnH8_QzcecQaE=",
    )
    user17 = User(
        first_name='John',
        last_name='Deitz',
        email='JohnDeitz@email.com',
        username='JohnDeitz',
        password='password',
        user_avatar="https://media.istockphoto.com/vectors/profile-placeholder-default-avatar-girl-vector-vector-id1384276314?k=20&m=1384276314&s=612x612&w=0&h=uQ6LZKo19LYc29YkOsupObuxhM70YXUnH8_QzcecQaE=",
    )
    user18 = User(
        first_name='Elizabeth',
        last_name='Ebner',
        email='ElizabethEbner@email.com',
        username='ElizabethEbner',
        password='password',
        user_avatar="https://media.istockphoto.com/vectors/profile-placeholder-default-avatar-girl-vector-vector-id1384276314?k=20&m=1384276314&s=612x612&w=0&h=uQ6LZKo19LYc29YkOsupObuxhM70YXUnH8_QzcecQaE=",
    )
    user19 = User(
        first_name='Elizabeth',
        last_name='Mills',
        email='ElizabethMills@email.com',
        username='ElizabethMills',
        password='password',
        user_avatar="https://media.istockphoto.com/vectors/profile-placeholder-default-avatar-girl-vector-vector-id1384276314?k=20&m=1384276314&s=612x612&w=0&h=uQ6LZKo19LYc29YkOsupObuxhM70YXUnH8_QzcecQaE=",
    )
    user20 = User(
        first_name='Aaron',
        last_name='Lulloff',
        email='AaronLulloff@email.com',
        username='AaronLulloff',
        password='password',
        user_avatar="https://media.istockphoto.com/vectors/profile-placeholder-default-avatar-girl-vector-vector-id1384276314?k=20&m=1384276314&s=612x612&w=0&h=uQ6LZKo19LYc29YkOsupObuxhM70YXUnH8_QzcecQaE=",
    )
    user21 = User(
        first_name='Hank',
        last_name='Hydinger',
        email='HankHydinger@email.com',
        username='HankHydinger',
        password='password',
        user_avatar="https://media.istockphoto.com/vectors/profile-placeholder-default-avatar-girl-vector-vector-id1384276314?k=20&m=1384276314&s=612x612&w=0&h=uQ6LZKo19LYc29YkOsupObuxhM70YXUnH8_QzcecQaE=",
    )
    user22 = User(
        first_name='Joe',
        last_name='Bowers',
        email='JoeBowers@email.com',
        username='JoeBowers',
        password='password',
        user_avatar="https://media.istockphoto.com/vectors/profile-placeholder-default-avatar-girl-vector-vector-id1384276314?k=20&m=1384276314&s=612x612&w=0&h=uQ6LZKo19LYc29YkOsupObuxhM70YXUnH8_QzcecQaE=",
    )
    user23 = User(
        first_name='Tim',
        last_name='Knutson',
        email='TimKnutson@email.com',
        username='TimKnutson',
        password='password',
        user_avatar="https://media.istockphoto.com/vectors/profile-placeholder-default-avatar-girl-vector-vector-id1384276314?k=20&m=1384276314&s=612x612&w=0&h=uQ6LZKo19LYc29YkOsupObuxhM70YXUnH8_QzcecQaE=",
    )
    user24 = User(
        first_name='Ben',
        last_name='Ashwoon',
        email='BenAshwoon@email.com',
        username='BenAshwoon',
        password='password',
        user_avatar="https://media.istockphoto.com/vectors/profile-placeholder-default-avatar-girl-vector-vector-id1384276314?k=20&m=1384276314&s=612x612&w=0&h=uQ6LZKo19LYc29YkOsupObuxhM70YXUnH8_QzcecQaE=",
    )
    user25 = User(
        first_name='Aaron',
        last_name='Hoffman',
        email='AaronHoffman@email.com',
        username='AaronHoffman',
        password='password',
        user_avatar="https://media.istockphoto.com/vectors/profile-placeholder-default-avatar-girl-vector-vector-id1384276314?k=20&m=1384276314&s=612x612&w=0&h=uQ6LZKo19LYc29YkOsupObuxhM70YXUnH8_QzcecQaE=",
    )
    user26 = User(
        first_name='Harper',
        last_name='Yocum',
        email='HarperYocum@email.com',
        username='HarperYocum',
        password='password',
        user_avatar="https://media.istockphoto.com/vectors/profile-placeholder-default-avatar-girl-vector-vector-id1384276314?k=20&m=1384276314&s=612x612&w=0&h=uQ6LZKo19LYc29YkOsupObuxhM70YXUnH8_QzcecQaE=",
    )
    user27 = User(
        first_name='Willow',
        last_name='Jurgenson',
        email='WillowJurgenson@email.com',
        username='WillowJurgenson',
        password='password',
        user_avatar="https://media.istockphoto.com/vectors/profile-placeholder-default-avatar-girl-vector-vector-id1384276314?k=20&m=1384276314&s=612x612&w=0&h=uQ6LZKo19LYc29YkOsupObuxhM70YXUnH8_QzcecQaE=",
    )
    user28 = User(
        first_name='Adam',
        last_name='Sellon',
        email='AdamSellon@email.com',
        username='AdamSellon',
        password='password',
        user_avatar="https://media.istockphoto.com/vectors/profile-placeholder-default-avatar-girl-vector-vector-id1384276314?k=20&m=1384276314&s=612x612&w=0&h=uQ6LZKo19LYc29YkOsupObuxhM70YXUnH8_QzcecQaE=",
    )
    user29 = User(
        first_name='Thomas',
        last_name='Trebil',
        email='ThomasTrebil@email.com',
        username='ThomasTrebil',
        password='password',
        user_avatar="https://media.istockphoto.com/vectors/profile-placeholder-default-avatar-girl-vector-vector-id1384276314?k=20&m=1384276314&s=612x612&w=0&h=uQ6LZKo19LYc29YkOsupObuxhM70YXUnH8_QzcecQaE=",
    )
    user30 = User(
        first_name='Carl',
        last_name='Schiebel',
        email='CarlSchiebel@email.com',
        username='CarlSchiebel',
        password='password',
        user_avatar="https://media.istockphoto.com/vectors/profile-placeholder-default-avatar-girl-vector-vector-id1384276314?k=20&m=1384276314&s=612x612&w=0&h=uQ6LZKo19LYc29YkOsupObuxhM70YXUnH8_QzcecQaE=",
    )

    db.session.add(user1)
    db.session.add(user2)
    db.session.add(user3)
    db.session.add(user4)
    db.session.add(user5)
    db.session.add(user6)
    db.session.add(user7)
    db.session.add(user8)
    db.session.add(user9)
    db.session.add(user10)
    db.session.add(user11)
    db.session.add(user12)
    db.session.add(user13)
    db.session.add(user14)
    db.session.add(user15)
    db.session.add(user16)
    db.session.add(user17)
    db.session.add(user18)
    db.session.add(user19)
    db.session.add(user20)
    db.session.add(user21)
    db.session.add(user22)
    db.session.add(user23)
    db.session.add(user24)
    db.session.add(user25)
    db.session.add(user26)
    db.session.add(user27)
    db.session.add(user28)
    db.session.add(user29)
    db.session.add(user30)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_users():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
