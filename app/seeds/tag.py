from app.models import db, Tag

# NO LONGER IN USE
usedTags = [
    {'title': 'Acai Bowls'},
    {'title': 'Bagels'},
    {'title': 'Bakeries'},
    {'title': 'Beer, Wine & Spirits'},
    {'title': 'Breweries'},
    {'title': 'Bubble Tea'},
    {'title': 'Butcher'},
    {'title': 'Coffee & Tea'},
    {'title': 'Convenience Stores'},
    {'title': 'Delicatessen'},
    {'title': 'Desserts'},
    {'title': 'Donuts'},
    {'title': 'Farmers Market'},
    {'title': 'Food Delivery Services'},
    {'title': 'Food Trucks'},
    {'title': 'Gelato'},
    {'title': 'Grocery'},
    {'title': 'Honey'},
    {'title': 'Ice Cream & Frozen Yogurt'},
    {'title': 'Internet Cafes'},
    {'title': 'Juice Bars & Smoothies'},
    {'title': 'Poke'},
    {'title': 'Shaved Ice'},
    {'title': 'Tortillas'},
    {'title': 'Afghan'},
    {'title': 'African'},
    {'title': 'American'},
    {'title': 'Asian Fusion'},
    {'title': 'Barbeque'},
    {'title': 'Bistros'},
    {'title': 'Brazilian'},
    {'title': 'Breakfast & Brunch'},
    {'title': 'Buffets'},
    {'title': 'Burgers'},
    {'title': 'Cafes'},
    {'title': 'Cajun/Creole'},
    {'title': 'Caribbean'},
    {'title': 'Chicken Wings'},
    {'title': 'Chinese'},
    {'title': 'Comfort Food'},
    {'title': 'Cuban'},
    {'title': 'Danish'},
    {'title': 'Diners'},
    {'title': 'Dim Sum'},
    {'title': 'Dumplings'},
    {'title': 'Eastern European'},
    {'title': 'Filipino'},
    {'title': 'Fish & Chips'},
    {'title': 'Food Court'},
    {'title': 'French'},
    {'title': 'Gastropubs'},
    {'title': 'German'},
    {'title': 'Gluten-Free'},
    {'title': 'Greek'},
    {'title': 'Halal'},
    {'title': 'Hawaiian'},
    {'title': 'Hong Kong Style Cafe'},
    {'title': 'Fast Food'},
    {'title': 'Hot Pot'},
    {'title': 'Indian'},
    {'title': 'Italian'},
    {'title': 'Japanese'},
    {'title': 'Kebab'},
    {'title': 'Korean'},
    {'title': 'Kosher'},
    {'title': 'Raw Food'},
    {'title': 'Mediterranean'},
    {'title': 'Mexican'},
    {'title': 'Middle Eastern'},
    {'title': 'Noodles'},
    {'title': 'Pizza'},
    {'title': 'Salad'},
    {'title': 'Seafood'},
    {'title': 'Soul Food'},
    {'title': 'Soup'},
    {'title': 'Steakhouse'},
    {'title': 'Sushi'},
    {'title': 'Tapas'},
    {'title': 'Fusion'},
    {'title': 'Thai'},
    {'title': 'Vegan'},
    {'title': 'Vegetarian'},
    {'title': 'Vietnamese'},
    {'title': 'Bootcamp'}
]
# THIS SEED FILE IS NO LONGER IN USE
add_tag = []
for tag in usedTags:
    tg = Tag(tag=tag['title'])
    add_tag.append(tg)

def seed_tags():
    for new_tag in add_tag:
        db.session.add(new_tag)
    db.session.commit()


def undo_tags():
    db.session.execute('TRUNCATE tags RESTART IDENTITY CASCADE;')
    db.session.commit()
