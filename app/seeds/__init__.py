from flask.cli import AppGroup
from .users import seed_users, undo_users
from .businesses import seed_businesses, undo_businesses
from .reviews import seed_reviews, undo_reviews
from .business_images import seed_business_images, undo_business_images
from .tag import seed_tags, undo_tags
from .business_tags import seed_bussiness_tags, undo_business_tags

# Creates a seed group to hold our commands
# So we can type `flask seed --help`
seed_commands = AppGroup('seed')


# Creates the `flask seed all` command
@seed_commands.command('all')
def seed():
    seed_users()
    seed_businesses()
    seed_reviews()
    seed_business_images()
    seed_tags()
    seed_bussiness_tags()
    # Add other seed functions here


# Creates the `flask seed undo` command
@seed_commands.command('undo')
def undo():
    undo_users()
    undo_businesses()
    undo_reviews()
    undo_business_images()
    undo_tags()
    undo_business_tags()
    # Add other undo functions here
