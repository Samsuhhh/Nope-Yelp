from app.models import db, Business


def seed_businesses():
    restaurant1 = Business(
        owner_id=1,
        business_name="Marufuku Ramen",
        email='marufuku@marufukuramen.com',
        phone='4158729786',
        street_address='1581 Webster St',
        city='San Francisco',
        state='CA',
        zipcode=94115,
        about='Marufuku proudly serves the authentic Hakata-style Tonkotsu ramen — featuring milky and umami rich broth made from boiling pork bones for long hours, an ultra-thin artisanal noodles that match perfectly with the broth, and Cha-shu made from specially selected pork.',
        longitude=-122.3924,
        latitude=37.77882,
        price_range=2,
        website='http://marufukuramen.com',
        # tags=['Tapas', 'Acai Bowls', 'Breweries']
        )
    restaurant2 = Business(
        owner_id=2,
        business_name='KAIYO Rooftop',
        email='info@kaiyosf.com',
        phone='4158008141',
        street_address='701 3rd St',
        city='San Francisco',
        state='CA',
        zipcode=94105,
        about="Kaiyō is the food and drink experience of the Japanese journey in Peru. It is an exploration of these two cultures, immersed in regional ingredients, notable flavors and skilled preparation to delight your senses. From fresh ceviche and sashimi to grilled scallops and wagyu, our food tells a story on the palette. Our craft-cocktail program highlights Peruvian Pisco and Japanese whisky, elevating these regional contenders with daring spices, herbs, and fruits. Kaiyō is an experience of cultures, and we can't wait to serve you.",
        longitude=-122.3924,
        latitude=37.77882,
        price_range=2,
        website='https://kaiyosf.com/kaiyorooftop',
        # tags=['Juice Bars & Smoothies', 'Burgers', 'Caribbean']
        )
    restaurant3 = Business(
        owner_id=3,
        business_name='Starbelly',
        email='info@starbellysf.com',
        phone='4152527500',
        street_address='3583 16th St',
        city='San Francisco',
        state='CA',
        zipcode=94114,
        about="a neighborhood restaurant Starbelly is a casual and friendly neighborhood restaurant in San Francisco's lively Castro District. With a menu of forward-thinking California comfort food, supplemented by seasonal craft cocktails, beer and wine, Starbelly offers something delicious for everyone.",
        longitude=-122.43253,
        latitude=37.76402,
        price_range=2,
        website='http://www.starbellysf.com',
        # tags=['Japanese', 'Thai', 'Dumplings']
        )
    restaurant4 = Business(
        owner_id=4,
        business_name='Dumpling House',
        email='info@dumplinghouse.us',
        phone='4158292789',
        street_address='335 Noe St',
        city='San Francisco',
        state='CA',
        zipcode=94114,
        about="Everything in our restaurant is made by order and it's made by care and love as well. Our main dim sum chief been doing Hong Kong dim sum for more than 20 years. In these 20 years, he used to work in Beijing, Shanghai, Hong Kong, and also gains various experiences from Michelin restaurant.",
        longitude=-122.432762,
        latitude=37.763552,
        price_range=2,
        website='http://dumplinghouse.us',
        # tags=['French', 'Food Court', 'Hot Pot']
        )
    restaurant5 = Business(
        owner_id=5,
        business_name="Jamie's Place",
        email='info@sfjamiesplace.com',
        phone='4158031888',
        street_address='1380 9th Ave',
        city='San Francisco',
        state='CA',
        zipcode=94122,
        about='New Business just opened for curbside and takeout.',
        longitude=-122.465979,
        latitude=37.762616,
        price_range=2,
        website='https://sfjamiesplace.com/',
        # tags=['Seafood', 'Cafes', 'Comfort Food']
        )
    restaurant6 = Business(
        owner_id=6,
        business_name='Savor',
        email='info@savor.menu',
        phone='4157026048',
        street_address='401 Irving St',
        city='San Francisco',
        state='CA',
        zipcode=94122,
        about="We are happy to be a new part of the Inner Sunset neighborhood in San Francisco bringing new flavors to nourish your body and feed your soul.",
        longitude=-122.46223,
        latitude=37.764114,
        price_range=2,
        website='https://savor.menu',
        # tags=['Grocery', 'Hong Kong Style Cafe', 'Breweries']
        )
    restaurant7 = Business(
        owner_id=7,
        business_name='Lily',
        email='info@lilyonclement.com',
        phone='4157425285',
        street_address='225 Clement St',
        city='San Francisco',
        state='CA',
        zipcode=94118,
        about="Alright lets put the 4 stars into perspective. It's one thing to give a nice place 4 stars because you take into account the ambiance, service, etc. When you give a hole in the wall 4 stars you know they've earned it.",
        longitude=-122.461686,
        latitude=37.782826,
        price_range=2,
        website='https://www.lilyonclement.com',
        # tags=['American', 'Food Trucks', 'Asian Fusion']
        )
    restaurant8 = Business(
        owner_id=8,
        business_name='Bottega',
        email='info@bottegavalencia.com/',
        phone='4156559048',
        street_address='1132 Valencia St',
        city='San Francisco',
        state='CA',
        zipcode=94110,
        about='We are a group of young Italians, born and raised in different parts of Italy,who came to San Francisco about ten years ago sharing the same passion, cooking and eating delicious food.',
        longitude=-122.4212,
        latitude=37.75472,
        price_range=2,
        website='https://www.bottegavalencia.com/',
        # tags=['Acai Bowls', 'Dim Sum', 'Cuban']
        )
    restaurant9 = Business(
        owner_id=9,
        business_name='Beit Rima',
        email='info@beitrimasf.com',
        phone='4155661274',
        street_address='86 Carl St',
        city='San Francisco',
        state='CA',
        zipcode=94117,
        about='Authentic Arabic comfort food with fresh ingredients sourced from local farms, made and served with love.',
        longitude=-122.4496,
        latitude=37.7659,
        price_range=2,
        website='http://www.beitrimasf.com',
        # tags=['Butcher', 'Gastropubs', 'Hong Kong Style Cafe']
        )
    restaurant10 = Business(
        owner_id=10,
        business_name='Kin Khao',
        email='info@kinkhao.com',
        phone='4153627456',
        street_address='55 Cyril Magnin St',
        city='San Francisco',
        state='CA',
        zipcode=94102,
        about="Kin Khao serves delicious Thai food that stays true to its origin, made with seasonal produce and sustainably raised or caught meats and seafood. We make all our curry pastes, sauces, and relishes in-house daily. ",
        longitude=-122.43443,
        latitude=37.79094,
        price_range=2,
        website='http://kinkhao.com/',
        # tags=['Dumplings', 'Chicken Wings', 'Convenience Stores']
        )
    restaurant11 = Business(
        owner_id=11,
        business_name='The Snug',
        email='info@thesnugsf.com',
        phone='4155625092',
        street_address='2301 Fillmore St',
        city='San Francisco',
        state='CA',
        zipcode=94115,
        about="Unique cocktails, local beer, small-producer wines, and modern Californian comfort food -- all served up in a warm and comfortable environment.",
        longitude=-122.43443,
        latitude=37.79094,
        price_range=2,
        website='http://www.thesnugsf.com',
        # tags=['Gastropubs', 'Beer, Wine & Spirits', 'Fast Food']
        )
    restaurant12 = Business(
        owner_id=12,
        business_name='Hog Island Oyster',
        email='info@hogislandoysters.com',
        phone='4153917117',
        street_address='1 Ferry Bldg Shop 11',
        city='San Francisco',
        state='CA',
        zipcode=94111,
        about="Serving sustainably farmed oysters and shellfish raised on our farm on Tomales Bay. Fresh Local Seafood and seafood friendly cocktails featuring small craft spirits and fresh herbs+botanicals.",
        longitude=-122.40834,
        latitude=37.79300,
        price_range=2,
        website='https://hogislandoysters.com',
        # tags=['Comfort Food', 'Pizza', 'Tortillas']
        )
    restaurant13 = Business(
        owner_id=13,
        business_name='Sotto Mare',
        email='info@sottomaresf.com',
        phone='4153983181',
        street_address='552 Green St',
        city='San Francisco',
        state='CA',
        zipcode=94133,
        about="Located in the heart of North Beach, San Francisco, Sotto Mare Restaurant provides a delicious and authentic Italian North Beach experience. We are proud to serve the freshest fish and shellfish in town.",
        longitude=-122.40834,
        latitude=37.79979,
        price_range=2,
        website='http://www.sottomaresf.com',
        # tags=['Honey', 'Mediterranean', 'Mexican']
        )
    restaurant14 = Business(
        owner_id=14,
        business_name='Fog Harbor Fish House',
        email='info@fogharbor.com',
        phone='4159692010',
        street_address='39 Pier',
        city='San Francisco',
        state='CA',
        zipcode=94133,
        about="Ranked Top 5 Most Popular Restaurants in SF by Yelp. Award winning view of the Golden Gate Bridge, and Alcatraz! Waterfront indoor & outdoor seating. First restaurant on Fisherman's Wharf with 100 percent sustainable seafood.",
        longitude=-122.41029,
        latitude=37.808988,
        price_range=2,
        website='https://fogharbor.com',
        # tags=['Acai Bowls', 'Desserts', 'Dim Sum']
        )
    restaurant15 = Business(
        owner_id=15,
        business_name='Kitchen Story',
        email='info@kitchenstorysf.com',
        phone='4155254905',
        street_address='3499 16th St',
        city='San Francisco',
        state='CA',
        zipcode=94114,
        about="Breakfast, Brunch, Bloody Marys, Millionaire's Bacon",
        longitude=-122.43072,
        latitude=37.76429,
        price_range=2,
        website='http://kitchenstorysf.com',
        # tags=['Raw Food', 'Delicatessen', 'Comfort Food']
        )
    restaurant16 = Business(
        owner_id=1,
        business_name='The Pink Door',
        email='thepinkdoor@info.com',
        phone='2064433241',
        street_address='1919 Post Alley',
        city='Seattle',
        state='WA',
        zipcode=98101,
        about='Along the quaint Post Alley at Seattle’s Pike Place Market awaits one of the city’s most beloved restaurant destinations since 1981: The Pink Door. Equal parts Italian-American dining, eclectic entertainment and warm, spirited service, we welcome you!',
        longitude=-122.3425,
        latitude=47.61028,
        price_range=2,
        website='https://www.thepinkdoor.net/welcome-mobile',
        # tags=['Chinese', 'Breweries', 'Greek']
        )
    restaurant17 = Business(
        owner_id=2,
        business_name='Biang Biang Noodles',
        email='biangbiangnoodles@info.com',
        phone='2068098999',
        street_address='601 E Pike St',
        city='Seattle',
        state='WA',
        zipcode=98122,
        about='Trendy, industrial-style Chinese noodle house dishing up dumplings, baos & chicken wings.',
        longitude=-122.324239,
        latitude=47.61393,
        price_range=2,
        website='https://www.biangbiangnoodles.com/',
        # tags=['Beer, Wine & Spirits', 'Donuts', 'Fusion']
        )
    restaurant18 = Business(
        owner_id=3,
        business_name='Tilikum Place Cafe',
        email='tilikumcafe@gmail.com',
        phone='2062824830',
        street_address='407 Cedar St',
        city='Seattle',
        state='WA',
        zipcode=98121,
        about='European-style bistro & bar offering an eclectic, seasonal menu in a casual, stylish space.',
        longitude=-122.347691,
        latitude=47.6179,
        price_range=2,
        website='https://www.tilikumplacecafe.com/',
        # tags=['Mexican', 'African', 'Breakfast & Brunch']
        )
    restaurant19 = Business(
        owner_id=4,
        business_name='Nue',
        email='info@nueseattle.com',
        phone='2062570312',
        street_address='1519 14th Ave',
        city='Seattle',
        state='WA',
        zipcode=98122,
        about='A memorabilia-packed dining room sets the tone for hip takes on street eats from around the globe.',
        longitude=-122.3146,
        latitude=47.61483,
        price_range=2,
        website='https://www.nueseattle.com/',
        # tags=['Food Trucks', 'Chinese', 'Noodles']
        )
    restaurant20 = Business(
        owner_id=5,
        business_name='Toulouse Petit Kitchen & Lounge',
        email='info@toulousepetit.com',
        phone='2064329069',
        street_address='601 Queen Anne Ave N',
        city='Seattle',
        state='WA',
        zipcode=98109,
        about='Hip Cajun-Creole spot with a cozy, New Orleans influenced dining room & optional fixed-price menus.',
        longitude=-122.357127,
        latitude=47.62485,
        price_range=2,
        website='https://toulousepetit.com/',
        # tags=['Greek', 'Vietnamese', 'Gelato']
        )
    restaurant21 = Business(
        owner_id=6,
        business_name='Biscuit Bitch',
        email='info@biscuitbitch.com',
        phone='2064417999',
        street_address='1909 1st Ave',
        city='Seattle',
        state='WA',
        zipcode=98101,
        about="Homemade Southern-Style Biscuits and Gravy and all the Breakfast Fixin's served up with a Heapin' Helpin' of Attitude and Kickass Espresso!",
        longitude=-122.34167,
        latitude=47.61034,
        price_range=1,
        website='https://biscuitbitch.square.site/home',
        # tags=['Internet Cafes', 'Tortillas', 'Beer, Wine & Spirits']
        )
    restaurant22 = Business(
        owner_id=7,
        business_name='Katsu-ya Seattle',
        email='info@katsuya.com',
        phone='2065800080',
        street_address='122 Westlake Ave N',
        city='Seattle',
        state='WA',
        zipcode=98109,
        about='As one of only a small select group of Master sushi chefs in Los Angeles, Chef Katsuya Uechi brings culinary artistry and restaurant operations to the world. Katsuya Uechi was born and raised in Okinawa, Japan. He is known for his distinctive style and first-rate execution of high quality dishes.',
        longitude=-122.33809,
        latitude=47.6192,
        price_range=2,
        website='https://www.katsu-yagroup.com/',
        # tags=['Steakhouse', 'Food Trucks', 'Hong Kong Style Cafe']
        )
    restaurant23 = Business(
        owner_id=8,
        business_name='Kedai Makan',
        email='info@kedaimakan.com',
        phone='206-241-4096',
        street_address='1802 Bellevue Ave',
        city='Seattle',
        state='WA',
        zipcode=98122,
        about='Tiny storefront featuring traditional & innovative Malaysian dishes & creative cocktails.',
        longitude=-122.32658,
        latitude=47.6179,
        price_range=2,
        website='http://www.kedaimakansea.com/',
        # tags=['Coffee & Tea', 'Burgers', 'Eastern European']
        )
    restaurant24 = Business(
        owner_id=9,
        business_name='Six Seven Restaurant',
        email='dining@edgewaterhotel.com',
        phone='2062694575',
        street_address='2411 Alaskan Way',
        city='Seattle',
        state='WA',
        zipcode=98121,
        about='Local seafood leads the seasonal menus at this New American spot with views in the Edgewater Hotel.',
        longitude=-122.35230,
        latitude=47.612304,
        price_range=3,
        website='https://www.edgewaterhotel.com/seattle-six-seven-restaurant/',
        # tags=['Food Delivery Services', 'Vietnamese', 'Donuts']
        )
    restaurant25 = Business(
        owner_id=10,
        business_name='Skalka',
        email='info@skalka.com',
        phone='2064088169',
        street_address='77 Spring St',
        city='Seattle',
        state='WA',
        zipcode=98104,
        about="Skalka is the place where you can be introduced to something new that you’ve never tried before and will love to experience more. We keep our menu simple: a variety of authentic Georgian khachapuri with a breakfast twist.",
        longitude=-122.3376,
        latitude=47.60491,
        price_range=2,
        website='https://www.skalkaseattle.com/',
        # tags=['Cuban', 'Barbeque', 'Hot Pot']
        )
    restaurant26 = Business(
        owner_id=11,
        business_name="Elliott's Oyster House",
        email='info@elliotoysterhouse.com',
        phone='2066234340',
        street_address='1201 Alaskan Way',
        city='Seattle',
        state='WA',
        zipcode=98101,
        about='Waterfront restaurant with a bay view known for its selection of oysters & sustainable seafood.',
        longitude=-122.34025,
        latitude=47.605473,
        price_range=3,
        website='https://www.elliottsoysterhouse.com/',
        # tags=['Bakeries', 'Fast Food', 'Kosher']
        )
    restaurant27 = Business(
        owner_id=12,
        business_name='Taurus Ox',
        email='taurusoxseattle@gmail.com',
        phone='2069720075',
        street_address='903 19th Ave E',
        city='Seattle',
        state='WA',
        zipcode=98122,
        about='Petite neighborhood eatery featuring traditional Laotian stews & sausages plus small plates.',
        longitude=-122.30763,
        latitude=47.627150,
        price_range=2,
        website='https://taurusox.square.site/',
        # tags=['Fast Food', 'Salad', 'Mediterranean']
        )
    restaurant28 = Business(
        owner_id=13,
        business_name='Ishoni Yakiniku',
        email='info@ishoniyakiniku.com',
        phone='4254550898',
        street_address='611 Broadway E',
        city='Seattle',
        state='WA',
        zipcode=98102,
        about="Contemporary Japanese joint with striking interiors, plus a menu of Wagyu beef & grilled meats.",
        longitude=-122.32117,
        latitude=47.62461,
        price_range=3,
        website="https://ishoniyakinikuseattle.wordpress.com/",
        # tags=['Tortillas', 'Middle Eastern', 'Fast Food']
        )
    restaurant29 = Business(
        owner_id=14,
        business_name='Piroshky Piroshky',
        email='cs@piroshkybakery.com',
        phone='2064416068',
        street_address='1908 Pike Pl',
        city='Seattle',
        state='WA',
        zipcode=98101,
        about='Compact Russian bakery located in Pike Place Market serving over 20 varieties of handmade piroshki.',
        longitude=-122.34231,
        latitude=47.60991,
        price_range=1,
        website='https://piroshkybakery.com/',
        # tags=['Convenience Stores', 'Barbeque', 'Afghan']
        )
    restaurant30 = Business(
        owner_id=15,
        business_name='Dough Zone - Seattle Downtown Pine St.',
        email='info@doughzone.com',
        phone='2066826666',
        street_address='815 Pine St',
        city='Seattle',
        state='WA',
        zipcode=98101,
        about='Dough Zone is an award-winning chain restaurant founded locally in Washington in 2014. We \
            specialize in providing our customers with authentic Chinese-style, doughy goods, such as Pan \
            Seared Bao, Soup Dumplings, and a variety of noodle selections.',
        longitude=-122.3321,
        latitude=47.613314,
        price_range=2,
        website='https://www.doughzonedumplinghouse.com/',
        # tags=['Gelato', 'Asian Fusion', 'Pizza']
        )
    restaurant31 = Business(
        owner_id=1,
        business_name='Barbuzzo',
        email='info@barbuzzo.com',
        phone='2155469300',
        street_address='110 S 13th St',
        city='Philadelphia',
        state='PA',
        zipcode=19107,
        about='Farm-fresh ingredients star at this Mediterranean joint set in a chic, compact space.',
        longitude=-75.16216,
        latitude=39.94999,
        price_range=2,
        website='http://barbuzzo.com/',
        # tags=['Sushi', 'Indian', 'Poke']
        )
    restaurant32 = Business(
        owner_id=2,
        business_name="Talula's Garden",
        email='talulas.info@starr-restaurants.com',
        phone='2155927787',
        street_address='210 W Washington Sq',
        city='Philadelphia',
        state='PA',
        zipcode=19106,
        about='High-end charmer crafts seasonal American cuisine in a chic farmhouse setting with a summer garden.',
        longitude=-75.153542,
        latitude=39.947327,
        price_range=3,
        website='https://talulasgarden.com/',
        # tags=['Gluten-Free', 'Steakhouse', 'Mediterranean']
        )
    restaurant33 = Business(
        owner_id=3,
        business_name='Cantina La Martina',
        email='info@cantinalamartina.com',
        phone='2675192142',
        street_address='2800 D St',
        city='Philadelphia',
        state='PA',
        zipcode=19134,
        about="Perfect mix of pre-Hispanic and contemporary Mexican food & decor. Serving modern family dishes crafted with authentic Mexican flavor & tradition. Chef Dionicio has worked in Philly's top kitchens: Vetri Cucina, Xochitl, and El Rey. Bienvenidos todos.",
        longitude=-75.12281,
        latitude=39.99157,
        price_range=1,
        website='https://cantinalamartinaphilly.com/home',
        # tags=['Asian Fusion', 'Juice Bars & Smoothies', 'Soup']
        )
    restaurant34 = Business(
        owner_id=4,
        business_name='DuBu',
        email="dubu.ep@gmail.com",
        phone='2157823828',
        street_address='1333 W Cheltenham Ave',
        city='Philadelphia',
        state='PA',
        zipcode=19027,
        about='Traditional Korean dishes served in contemporary, wood-paneled surrounds with a relaxed vibe.',
        longitude=-75.13762,
        latitude=40.06315,
        price_range=2,
        website='https://duburestaurant.com/',
        # tags=['Breweries', 'Gastropubs', 'Raw Food']
        )
    restaurant35 = Business(
        owner_id=5,
        business_name='Suraya',
        email="managers@surayaphilly.com",
        phone='2153021900',
        street_address='1528 Frankford Ave',
        city='Philadelphia',
        state='PA',
        zipcode=19125,
        about='Chic & spacious Lebanese cafe, market & restaurant with bar & outdoor garden',
        longitude=-75.1339557,
        latitude=39.973686,
        price_range=3,
        website='https://www.surayaphilly.com/',
        # tags=['Eastern European', 'Greek', 'Breweries']
        )
    restaurant36 = Business(
        owner_id=6,
        business_name='So Korean Grill',
        email='sokoreangrill@gmail.com',
        phone='2677666449',
        street_address='6201 N Front St',
        city='Philadelphia',
        state='PA',
        zipcode=19120,
        about="SO Korean Grill introduces a new take on Korean BBQ to the Philly scene. Our menu includes many traditional favorites and features a tasting menu so you can immerse yourself into the world of K-BBQ.",
        longitude=-75.117652,
        latitude=40.0453172,
        price_range=2,
        website='https://sokoreangrill.com/menu',
        # tags=['Raw Food', 'Danish', 'Kosher']
        )
    restaurant37 = Business(
        owner_id=7,
        business_name='Kensington Pub',
        email='info@kensingtonpub.com',
        phone='2159046782',
        street_address='2116 E Tioga St',
        city='Philadelphia',
        state='PA',
        zipcode=19134,
        about="New Kensington's favorite new hangout, now under new management, with a brand new talented chef and a new menu! Come in for our $10 lunch special or our house pizza and our friendly atmosphere.",
        longitude=-75.10253,
        latitude=39.99556,
        price_range=1,
        website="http://places.singleplatform.com/kensington-pub/menu?ref=google",
        # tags=['Tortillas', 'Gelato', 'Butcher']
        )
    restaurant38 = Business(
        owner_id=8,
        business_name='Chubby Cattle',
        email="info@chubbycattle.com",
        phone='8666228853',
        street_address='146 N 10th St',
        city='Philadelphia',
        state='PA',
        zipcode=19107,
        about="As a reformer of the traditional Mongolian cuisine, Chubby Cattle is the first restaurant in the world to combine a refrigerated, conveyer belt-based hotpot with the finest traditional hotpot from Asia.",
        longitude=-75.15622,
        latitude=39.95498,
        price_range=2,
        website="https://www.chubbycattle.com/chubby-cattle-philadelphia/",
        # tags=['Burgers', 'Greek', 'Vietnamese']
        )
    restaurant39 = Business(
        owner_id=9,
        business_name='Bao & Bun Studio',
        email='info@baobun.com',
        phone='2678088100',
        street_address='5401 Tacony St',
        city='Philadelphia',
        state='PA',
        zipcode=19137,
        about='Established in 2020. In mandarin, Bao & Bun means " Bun is great"! Gua Bao is a well-known signature street food of Taiwan. In Taiwan, it is called "Bao" or "Taiwanese sandwich" and westerners generally refer to it as "bun".',
        longitude=-75.06408,
        latitude=40.0089526,
        price_range=1,
        website="https://www.baobunstudio.com/",
        # tags=['Food Trucks', 'Greek', 'Hot Pot']
        )
    restaurant40 = Business(
        owner_id=10,
        business_name='Tierra Colombiana Restaurant',
        email="tierracolombiana1@hotmail.com",
        phone='2153246086',
        street_address='4535 N 5th St',
        city='Philadelphia',
        state='PA',
        zipcode=19140,
        about="Traditional Latin American and Caribbean food",
        longitude=-75.13381,
        latitude=40.02051,
        price_range=2,
        website="http://tierracolombianarestaurant.com/",
        # tags=['Breakfast & Brunch', 'Kosher', 'Bagels']
        )
    restaurant41 = Business(
        owner_id=11,
        business_name='Cafe Mi Quang',
        email="info@cafemiquang.com",
        phone='2672390739',
        street_address='3324 Kensington Ave',
        city='Philadelphia',
        state='PA',
        zipcode=19134,
        about="Very authentic Viet spot underneath the L.",
        longitude=-75.11027,
        latitude=39.99843,
        price_range=1,
        website="https://www.zmenu.com/cafe-mi-quang-philadelphia-online-menu/",
        # tags=['Food Court', 'Acai Bowls', 'Raw Food']
        )
    restaurant42 = Business(
        owner_id=12,
        business_name='Bourbon & Branch',
        email="emmeline.bourbonevents@gmail.com",
        phone='2152380660',
        street_address='705 N 2nd St',
        city='Philadelphia',
        state='PA',
        zipcode=19123,
        about="Hip outfit for American fare with vegan options, a long whiskey list & a bar made from an altar.",
        longitude=-75.14104,
        latitude=39.96207,
        price_range=2,
        website="https://www.bourbonandbranchphilly.com/",
        # tags=['Cafes', 'Gluten-Free', 'Farmers Market']
        )
    restaurant43 = Business(
        owner_id=13,
        business_name='Grill N Dutchy',
        email="info@grillndutchy.com",
        phone='2158493500',
        street_address='5522 Germantown Ave',
        city='Philadelphia',
        state='PA',
        zipcode=19144,
        about="Grill n Dutchy specializes in; Jamaican food, Jerk chicken , Curry chicken, Oxtails, Stew chicken, Okra, beef Patties, veggie Patties, catering",
        longitude=-75.17371,
        latitude=40.03459,
        price_range=2,
        website="https://www.grillndutchy.com/",
        # tags=['Middle Eastern', 'Comfort Food', 'Ice Cream & Frozen Yogurt']
        )
    restaurant44 = Business(
        owner_id=14,
        business_name="Sutton's",
        email='info@sutton.com',
        phone='2675344151',
        street_address='1706 N 5th St',
        city='Philadelphia',
        state='PA',
        zipcode=19122,
        about="Sutton's Philadelphia Bar is a nod to the past industrial might of Kensington and the hardworking people that have lived here.",
        longitude=-75.143672,
        latitude=39.97715,
        price_range=2,
        website="https://suttonsphilly.com/",
        # tags=['Cajun/Creole', 'Bagels', 'Honey']
        )
    restaurant45 = Business(
        owner_id=15,
        business_name='Harp & Crown',
        email='info@harpcrown.com',
        phone='2153302800',
        street_address='1525 Sansom St',
        city='Philadelphia',
        state='PA',
        zipcode=19102,
        about="A beautiful, bi-level space that joins a pair of bars, New American eats & a basement bowling alley.",
        longitude=-75.166428,
        latitude=39.950417,
        price_range=2,
        website="https://harpcrown.com/",
        # tags=['Farmers Market', 'Danish', 'Cuban']
        )
    restaurant46 = Business(
        owner_id=1,
        business_name='Da Andrea',
        email="daandreawv@gmail.com",
        phone='2123671979',
        street_address='35 W 13th St',
        city='New York',
        state='NY',
        zipcode=10011,
        about="Fresh-made pastas and homestyle meat dishes are the hallmark of this budget Northern Italian spot.",
        longitude=-73.99597,
        latitude=40.736218,
        price_range=2,
        website="https://www.daandreanyc.com/",
        # tags=['Delicatessen', 'Chicken Wings', 'Coffee & Tea']
        )
    restaurant47 = Business(
        owner_id=2,
        business_name="Joe's Shanghai",
        email="info@joeshanghai.com",
        phone='2122338888',
        street_address='46 Bowery St',
        city='New York',
        state='NY',
        zipcode=10013,
        about="Popular Chinatown eatery famed for its soup dumplings and other Shanghai dishes in a spare setting.",
        longitude=-73.99670,
        latitude=40.715660,
        price_range=2,
        website="https://joeshanghairestaurants.com/",
        # tags=['Hawaiian', 'Grocery', 'French']
        )
    restaurant48 = Business(
        owner_id=3,
        business_name='LoveMama',
        email='info@lovemama.com',
        phone='2122545370',
        street_address='174 2nd Ave',
        city='New York',
        state='NY',
        zipcode=10003,
        about="Malaysian, Thai & Vietnamese food favorites served in a lively, unpretentious setting.",
        longitude=-73.986126,
        latitude=40.7304087,
        price_range=2,
        website="https://lovemamanyc.com/Home/index",
        # tags=['Chinese', 'Soup', 'Food Trucks']
        )
    restaurant49 = Business(
        owner_id=4,
        business_name='Time Out Market New York',
        email="info@timeout.com",
        phone='9178104855',
        street_address='55 Water St',
        city='Brooklyn',
        state='NY',
        zipcode=11201,
        about="Bi-level waterfront hangout showcasing a curated lineup of local food & drink plus cultural events.",
        longitude=-73.99214,
        latitude=40.703428,
        price_range=2,
        website="https://www.timeoutmarket.com/newyork/#",
        # tags=['Steakhouse', 'Japanese', 'Shaved Ice']
        )
    restaurant50 = Business(
        owner_id=5,
        business_name='Olio e Più',
        email="contact@olioepiu.nyc",
        phone='2122436546',
        street_address='3 Greenwich Ave',
        city='New York',
        state='NY',
        zipcode=10014,
        about="Naples meets NYC at this trattoria with thin-crust pizza, Italian wines & ample sidewalk seating.",
        longitude=-73.999773,
        latitude=40.7337980,
        price_range=2,
        website="https://www.olioepiu.com/",
        # tags=['Hong Kong Style Cafe', 'Mediterranean', 'Kosher']
        )
    restaurant51 = Business(
        owner_id=6,
        business_name='Antidote',
        email="info@antidote.com",
        phone='7187822585',
        street_address='66 S 2nd St',
        city='Brooklyn',
        state='NY',
        zipcode=11249,
        about="Antidote restaurant and bar welcome you to our Williamsburg home at 66 S 2nd street. At Antidote we believe that delicious food is a key factor in the enjoyment of life.",
        longitude=-73.965448,
        latitude=40.714253,
        price_range=2,
        website="https://www.antidoteny.com/",
        # tags=['Soup', 'Ice Cream & Frozen Yogurt', 'Bistros']
        )
    restaurant52 = Business(
        owner_id=7,
        business_name='Thursday Kitchen',
        email="info@thursdaykitchen.com",
        phone='2123580650',
        street_address='424 E 9th St',
        city='New York',
        state='NY',
        zipcode=10009,
        about="Casual spot for Korean cooking with French & Spanish influences, plus playful drinks & desserts.",
        longitude=-73.98373,
        latitude=40.72761,
        price_range=2,
        website="https://www.thursdaykitchen.com/",
        # tags=['Beer, Wine & Spirits', 'Comfort Food', 'Kebab']
        )
    restaurant53 = Business(
        owner_id=8,
        business_name='Raku',
        email="eastvillage@rakunyc.com",
        phone='2122281324',
        street_address='342 E 6th St',
        city='New York',
        state='NY',
        zipcode=10003,
        about="Chef Norihiro Ishizuka’s culinary journey began at the age of thirteen working at Kappo and udon restaurants to support his mother and four other siblings.",
        longitude=-73.986652,
        latitude=40.726498,
        price_range=2,
        website="https://rakunyc.com/",
        # tags=['Hawaiian', 'Brazilian', 'Coffee & Tea']
        )
    restaurant54 = Business(
        owner_id=9,
        business_name='The Osprey',
        email="theosprey@1hotels.com",
        phone='3476962505',
        street_address='60 Furman St',
        city='Brooklyn',
        state='NY',
        zipcode=11201,
        about="Upscale hotel restaurant offering an menu of farm-to-table cuisine, plus an East River view.",
        longitude=-73.995539,
        latitude=40.702241,
        price_range=2,
        website="https://www.1hotels.com/brooklyn-bridge/taste/osprey",
        # tags=['Tapas', 'Breakfast & Brunch', 'Italian']
        )
    restaurant55 = Business(
        owner_id=10,
        business_name='The Cabin NYC',
        email="info@thecabinnyc.com",
        phone='2127770454',
        street_address='205 E 4th St',
        city='New York',
        state='NY',
        zipcode=10009,
        about="Quirky, dimly lit, rustic-chic eatery serving eclectic comfort food for happy hour, brunch & dinner.",
        longitude=-73.98383,
        latitude=40.72393,
        price_range=2,
        website="https://thecabinnyc.com/",
        # tags=['Convenience Stores', 'Buffets', 'Mexican']
        )
    restaurant56 = Business(
        owner_id=11,
        business_name='Tin Building by Jean-Georges',
        email="info@tinbuilding.com",
        phone='6468686000',
        street_address='96 South St',
        city='New York',
        state='NY',
        zipcode=10038,
        about="Acclaimed food hall with restaurants including Chinese, seafood, French & vegan, plus a market.",
        longitude=-74.002266,
        latitude=40.7062000,
        price_range=4,
        website="https://www.tinbuilding.com/",
        # tags=['African', 'Juice Bars & Smoothies', 'Sushi']
        )
    restaurant57 = Business(
        owner_id=12,
        business_name="Jack's Wife Freda",
        email="info@jackswifefreda.com",
        phone='2125108550',
        street_address='226 Lafayette St',
        city='New York',
        state='NY',
        zipcode=10012,
        about="Breakfast, Lunch, Brunch & DINNER 7 days a week cafe",
        longitude=-73.99754,
        latitude=40.72213,
        price_range=2,
        website="https://jackswifefreda.com/",
        # tags=['Danish', 'Vegetarian', 'Italian']
        )
    restaurant58 = Business(
        owner_id=13,
        business_name="Ye's Apothecary",
        email="missyeapothecary@gmail.com",
        phone='',
        street_address='119 Orchard St',
        city='New York',
        state='NY',
        zipcode=10002,
        about="Right on the border with Chinatown, our speakeasy and tapas bar creates the ultimate intimate mood with classic Asian décor and warm lighting, ideal for whisking your palate into another era, among friends or in the spirit of romance.",
        longitude=-73.9898,
        latitude=40.71945,
        price_range=2,
        website="https://www.yesapothecary.com/",
        # tags=['Vegetarian', 'Italian', 'Food Trucks']
        )
    restaurant59 = Business(
        owner_id=14,
        business_name="Juliana's",
        email="info@juliana.com",
        phone='7185966700',
        street_address='19 Old Fulton St',
        city='Brooklyn',
        state='NY',
        zipcode=11201,
        about="Classic & specialty pies from a coal-fired oven in a modern space by pizza legend Patsy Grimaldi.",
        longitude=-73.993434,
        latitude=40.702747,
        price_range=2,
        website="https://julianaspizza.com/",
        # tags=['Comfort Food', 'Japanese', 'Brazilian']
        )
    restaurant60 = Business(
        owner_id=15,
        business_name='Rubirosa',
        email="info@rubirosa.com",
        phone='2129650500',
        street_address='235 Mulberry St',
        city='New York',
        state='NY',
        zipcode=10012,
        about="Neighborhood Italian spot serving reinvented Italian-American classics & pizzas in a dark space.",
        longitude=-73.99623,
        latitude=40.722766,
        price_range=2,
        website="https://www.rubirosanyc.com/",
        # tags=['Grocery', 'Halal', 'Cafes']
        )
    restaurant61 = Business(
        owner_id=1,
        business_name='Mister O1 Dallas',
        email='info@mistero1.com',
        phone='2144324434',
        street_address='3838 Oak Lawn Ave',
        city='Dallas',
        state='TX',
        zipcode=75219,
        about="Cozy, woodsy-chic pizzeria serving artisanal, Neapolitan-style pies, antipasti & salads.",
        longitude=-96.8014862,
        latitude=32.814480,
        price_range=2,
        website='https://www.mistero1.com',
        # tags=['Gluten-Free', 'Shaved Ice', 'Honey']
        )
    restaurant62 = Business(
        owner_id=2,
        business_name='il Bracco',
        email='info@ilbraccorestaurant.com',
        phone='2143610100',
        street_address='8416 Preston Center Plaza Dr',
        city='Dallas',
        state='TX',
        zipcode=75225,
        about="il Bracco is an Italian inspired restaurant in the heart of Dallas. We serve fresh takes on classic Italian dishes, featuring homemade pastas and breads, as well as fresh fish and proteins butchered in-house daily.",
        longitude=-96.802592,
        latitude=32.864895,
        price_range=2,
        website='http://ilbraccorestaurant.com',
        # tags=['Vegan', 'Mexican', 'Eastern European']
        )
    restaurant63 = Business(
        owner_id=3,
        business_name='The Porch',
        email='info@theporchrestaurant.com',
        phone='2148282916',
        street_address='2912 N Henderson Ave',
        city='Dallas',
        state='TX',
        zipcode=75206,
        about="Downhome Food. Uptown Cocktails. Lunch, dinner, weekend brunch.",
        longitude=-96.7847469,
        latitude=32.8206424,
        price_range=2,
        website='http://www.theporchrestaurant.com/',
        # tags=['Danish', 'Asian Fusion', 'French']
        )
    restaurant64 = Business(
        owner_id=4,
        business_name='Monarch',
        email='info@monarchrestaurants.com',
        phone='2149452222',
        street_address='1401 Elm St',
        city='Dallas',
        state='TX',
        zipcode=75202,
        about="Monarch is a wood-fired, modern Italian restaurant serving handmade pastas, steaks and fresh seafood.",
        longitude=-96.80069,
        latitude=32.781565,
        price_range=4,
        website='https://www.monarchrestaurants.com/',
        # tags=['Ice Cream & Frozen Yogurt', 'Bubble Tea', 'Donuts']
        )
    restaurant65 = Business(
        owner_id=5,
        business_name='Mami Coco',
        email='info@mamicoco.org',
        phone='4699962834',
        street_address='4500 Bryan St',
        city='Dallas',
        state='TX',
        zipcode=75206,
        about="Antojitos mexicanos!",
        longitude=-96.77751,
        latitude=32.80038,
        price_range=1,
        website='http://www.mamicoco.org',
        # tags=['Raw Food', 'Convenience Stores', 'Danish']
        )
    restaurant66 = Business(
        owner_id=6,
        business_name='R+D Kitchen',
        email='info@rd-kitchen.com',
        phone='2148907900',
        street_address='8300 Preston Ctr Plz',
        city='Dallas',
        state='TX',
        zipcode=75225,
        about="Our dining room is open and we look forward to seeing you! We prefer to host experiences based on smaller, more intimate parties of two.",
        longitude=-96.802789,
        latitude=32.863065,
        price_range=2,
        website='http://rd-kitchen.com',
        # tags=['African', 'Raw Food', 'Bakeries']
        )
    restaurant67 = Business(
        owner_id=7,
        business_name='Au Troisieme',
        email='info@autroisiemedallas.com',
        phone='4697262237',
        street_address='8305 Westchester Dr',
        city='Dallas',
        state='TX',
        zipcode=75225,
        about="Au Troisieme, meaning third place in French. You hang out at home, your office and we want this to be your third place. Serving New American with world influence.",
        longitude=-96.806932,
        latitude=32.86386775,
        price_range=4,
        website='https://autroisiemedallas.com',
        # tags=['Dumplings', 'Raw Food', 'Salad']
        )
    restaurant68 = Business(
        owner_id=8,
        business_name='Hudson House',
        email='info@hudsonhousehp.com',
        phone='2145832255',
        street_address='4448 Lovers Ln',
        city='Dallas',
        state='TX',
        zipcode=75225,
        about="More than a collection of restaurants. A lifestyle, and a timeless pursuit of excellence.",
        longitude=-96.8116955,
        latitude=32.8514422,
        price_range=2,
        website='http://hudsonhousehp.com',
        # tags=['Desserts', 'Gelato', 'Middle Eastern']
        )
    restaurant69 = Business(
        owner_id=9,
        business_name="Ellen's",
        email='info@ellens.com',
        phone='4692063339',
        street_address='1790 N Record St',
        city='Dallas',
        state='TX',
        zipcode=75202,
        about="Good old-fashioned southern comfort food and drink with a modern culinary twist. We have a barista and coffee bar for your favorite brewed beverages and a full bar for your adult beverages.",
        longitude=-96.8076125,
        latitude=32.7818955,
        price_range=2,
        website='https://www.ellens.com',
        # tags=['Food Delivery Services', 'Cuban', 'Japanese']
        )
    restaurant70 = Business(
        owner_id=10,
        business_name='Rodeo Goat',
        email='info@rodeogoat.com',
        phone='2147414628',
        street_address='1926 Market Center Blvd',
        city='Dallas',
        state='TX',
        zipcode=75207,
        about="YOU are the judge. Every battle burger ordered is a vote for that burger.",
        longitude=-96.823986,
        latitude=32.7971504,
        price_range=2,
        website='http://rodeogoat.com',
        # tags=['Italian', 'Hong Kong Style Cafe', 'African']
        )
    restaurant71 = Business(
        owner_id=11,
        business_name='Malai Kitchen',
        email='info@malaikitchen.com',
        phone='9723734434',
        street_address='6130 Luther Ln',
        city='Dallas',
        state='TX',
        zipcode=75225,
        about="Thai & Vietnamese Cuisine made fresh in house daily including Spring Rolls, Fried Rice, Drunken Noodles, Iron Pot Green Curry with Chicken, and Grilled Tiger Prawns. Malai also offers over 90 percent of the menu Gluten-Free, Vegetarian or Vegan.",
        longitude=-96.8054994,
        latitude=32.8634651,
        price_range=2,
        website='https://www.malaikitchen.com/',
        # tags=['Korean', 'Food Delivery Services', 'Food Trucks']
        )
    restaurant72 = Business(
        owner_id=12,
        business_name='The Honor Bar',
        email='info@honorbar.com',
        phone='2147800956',
        street_address='26A Highland Park Village',
        city='Dallas',
        state='TX',
        zipcode=75205,
        about="We consider hats, tank tops, flip flops, and team athletic attire too casual for our restaurant. If you'd like to wear a hat in our bar, we ask that it be worn in the traditional manner.",
        longitude=-96.806765,
        latitude=32.835492,
        price_range=2,
        website='http://honorbar.com',
        # tags=['Bistros', 'French', 'Food Trucks']
        )
    restaurant73 = Business(
        owner_id=13,
        business_name='Meso Maya Comida y Copas',
        email='info@mesomaya.com',
        phone='2144846555',
        street_address='1611 McKinney Ave',
        city='Dallas',
        state='TX',
        zipcode=75202,
        about="From the herbs and spices we use for homemade adobos and salsas, to our hand-ground tortillas, to the entrees and sauces we create from scratch, every dish is prepared with a reverence to the states of Mexico--glorious places like Yucatan, Vera Cruz, and Chiapas.",
        longitude=-96.8049378,
        latitude=32.7877819,
        price_range=2,
        website='http://www.mesomaya.com',
        # tags=['Internet Cafes', 'Thai', 'French']
        )
    restaurant74 = Business(
        owner_id=14,
        business_name='Douglas Bar and Grill',
        email='info@thedouglastx.com',
        phone='2142055888',
        street_address='6818 Snider Plz',
        city='Dallas',
        state='TX',
        zipcode=75205,
        about="Douglas, the latest dining experience from Doug Pickering, Michael Sharp, and Coleman Easley, marries traditional BBQ staples and celebrated southern cooking in a sophisticated, family-friendly experience located in Snider Plaza.",
        longitude=-96.787534,
        latitude=32.848823,
        price_range=3,
        website='https://thedouglastx.com/',
        # tags=['Fusion', 'Buffets', 'Halal']
        )
    restaurant75 = Business(
        owner_id=15,
        business_name='Pecan Lodge',
        email='info@pecanlodge.com',
        phone='2147488900',
        street_address='2702 Main St',
        city='Dallas',
        state='TX',
        zipcode=75226,
        about="Where there's smoke. There's flavor. That's Pecan Lodge in a nutshell. It's the unwavering belief that the best things in life are smoked in a pit and steeped in the time-honored traditions of generations gone by.",
        longitude=-96.7838607,
        latitude=32.783719430,
        price_range=2,
        website='http://www.pecanlodge.com',
        # tags=['American', 'Coffee & Tea', 'Bistros']
        )
    restaurant76 = Business(
        owner_id=1,
        business_name='The Purple Pig',
        email='info@thepurplepigchicago.com',
        phone='3124641744',
        street_address='444 N Michigan Ave',
        city='Chicago',
        state='IL',
        zipcode=60611,
        about="Since opening in 2009, The Purple Pig has received numerous accolades. In 2014, Chef Jimmy received his first James Beard Award for 'Rising Star Chef'. The Purple Pig has been a Michelin Guide Bib Gourmand recipient since 2011 and has collected numerous culinary and wine awards nationally.",
        longitude=-87.624782,
        latitude=41.890694,
        price_range=3,
        website='http://thepurplepigchicago.com',
        # tags=['Caribbean', 'Kosher', 'Bubble Tea']
        )
    restaurant77 = Business(
        owner_id=2,
        business_name='The Perch',
        email='info@theperchchicago.com',
        phone='7734862739',
        street_address='1932 W Division',
        city='Chicago',
        state='IL',
        zipcode=60622,
        about="Established in 2020. The Perch Kitchen and Tap is a partnership between 4 STAR Restaurant Group and Finch Beer Co. - Wicker Park's newest full service restaurant + bar with an onsite brewery.",
        longitude=-87.676221,
        latitude=41.90348,
        price_range=2,
        website='https://www.theperchchicago.com',
        # tags=['Butcher', 'French', 'Kosher']
        )
    restaurant78 = Business(
        owner_id=3,
        business_name='Girl & The Goat',
        email='info@girlandthegoat.com',
        phone='3124926262',
        street_address='809 W Randolph St',
        city='Chicago',
        state='IL',
        zipcode=60607,
        about="As one of the first restaurants on Chicago's famed Restaurant Row in the West Loop, Stephanie Izard's Girl & the Goat began in 2010 with a goal of serving bold, global flavors to our local community (and visitors!). Since then, our desire to treat guests like family has remained the same (as have our Green Beans), but our seasonal flavors, cocktails, wine and locally-rooted beer are ever-changing.",
        longitude=-87.64795134,
        latitude=41.88418277,
        price_range=3,
        website='https://girlandthegoat.com',
        # tags=['Bagels', 'Grocery', 'Tapas']
        )
    restaurant79 = Business(
        owner_id=4,
        business_name='The Dearborn',
        email='info@thedearborntavern.com',
        phone='3123841242',
        street_address='145 N Dearborn St',
        city='Chicago',
        state='IL',
        zipcode=60602,
        about="We are where you want to be in the heart of Chicago's Loop, a perfect break from the bustle of thetheaters, museums and shops around us. Settle into a seat in our spacious dining room and enjoy Chef Aaron Cuschieri's Midwest-focused cooking for lunch or dinner.",
        longitude=-87.6293151,
        latitude=41.884252,
        price_range=2,
        website='http://thedearborntavern.com',
        # tags=['Thai', 'Beer, Wine & Spirits', 'Soul Food']
        )
    restaurant80 = Business(
        owner_id=5,
        business_name='Penumbra',
        email='info@penumbrawinebar.com',
        phone='7737722343',
        street_address='3309 W Fullerton Ave',
        city='Chicago',
        state='IL',
        zipcode=60647,
        about="Penumbra Restaurant & Wine Bar is a new Logan Square venue that provides a great ambiance for couples or groups looking to lounge and dine without the hassle of having to drive downtown.",
        longitude=-87.710933,
        latitude=41.92445,
        price_range=2,
        website='http://www.penumbrawinebar.com',
        # tags=['Tortillas', 'Cafes', 'Tortillas']
        )
    restaurant81 = Business(
        owner_id=6,
        business_name='The Whale Chicago',
        email='info@thewhalechicago.com',
        phone='7738252900',
        street_address='2427 N Milwaukee Ave',
        city='Chicago',
        state='IL',
        zipcode=60647,
        about="A destination spot, a neighborhood restaurant and a cocktail bar all in one, The Whale is a nod to ahigh roller gambler with a large bank roll who receives the absolute cream of the crop when it comes to comps, freebies and other perks from the casino.",
        longitude=-87.70112,
        latitude=41.92555,
        price_range=2,
        website='http://www.thewhalechicago.com',
        # tags=['Kebab', 'Ice Cream & Frozen Yogurt', 'Convenience Stores']
        )
    restaurant82 = Business(
        owner_id=7,
        business_name='Giant',
        email='info@giantrestaurant.com',
        phone='7732520997',
        street_address='3209 W Armitage Ave',
        city='Chicago',
        state='IL',
        zipcode=60647,
        about="We like food. We like people. We like feeding people food. We promise not to make people into food. We promise to make simple, delicious (slightly cheffy) food for people to eat.",
        longitude=-87.70746,
        latitude=41.9171,
        price_range=3,
        website='http://www.giantrestaurant.com',
        # tags=['Donuts', 'Sushi', 'Tortillas']
        )
    restaurant83 = Business(
        owner_id=8,
        business_name='etta - Bucktown',
        email='info@ettarestaurant.com',
        phone='3127574444',
        street_address='1840 W North Ave',
        city='Chicago',
        state='IL',
        zipcode=60622,
        about="etta is a neighborhood restaurant that serves delicious, wood-fired food in a relaxed setting. Located in the Bucktown and Wicker Park area, etta is the perfect place to gather for dinner, brunch, or late-night libations!",
        longitude=-87.67417,
        latitude=41.91073,
        price_range=2,
        website='https://ettarestaurant.com',
        # tags=['Fast Food', 'Dim Sum', 'Acai Bowls']
        )
    restaurant84 = Business(
        owner_id=9,
        business_name="Jack's Wicker Park",
        email='info@jackswickerpark.com',
        phone='3125082009',
        street_address='2056 W Division St',
        city='Chicago',
        state='IL',
        zipcode=60622,
        about="Jack’s Wicker Park is a casually elegant French bistro with al fresco dining nestled in Chicago’s Wicker Park neighbourhood.",
        longitude=-87.67947,
        latitude=41.90346,
        price_range=3,
        website='https://www.jackswickerpark.com',
        # tags=['Vegetarian', 'Comfort Food', 'Farmers Market']
        )
    restaurant85 = Business(
        owner_id=10,
        business_name='Amaru',
        email='info@amaruchicago.com',
        phone='7736879790',
        street_address='1904 W North Ave',
        city='Chicago',
        state='IL',
        zipcode=60622,
        about="Pan Latin eats and cocktails. Food and drinks influenced by Central and South America and the Caribbean.",
        longitude=-87.67536,
        latitude=41.91071,
        price_range=3,
        website='https://amaruchicago.com',
        # tags=['Vegan', 'Afghan', 'Soul Food']
        )
    restaurant86 = Business(
        owner_id=11,
        business_name='Union',
        email='info@unionlogansquare.com',
        phone='7736977788',
        street_address='2202 N California Ave',
        city='Chicago',
        state='IL',
        zipcode=60647,
        about="An abundance of local beer. New American cuisine. Quintessentially Logan Square.",
        longitude=-87.69769,
        latitude=41.9218,
        price_range=2,
        website='https://www.unionlogansquare.com',
        # tags=['Italian', 'German', 'Raw Food']
        )
    restaurant87 = Business(
        owner_id=12,
        business_name='Forbidden Root',
        email='info@forbiddenroot.com',
        phone='3129292202',
        street_address='1746 W Chicago Ave',
        city='Chicago',
        state='IL',
        zipcode=60622,
        about="We are on a pursuit to blend our botanic philosophies with your culinary story - to fuse the flavors of our beer & food unexpectedly.",
        longitude=-87.671551,
        latitude=41.89628,
        price_range=2,
        website='http://www.forbiddenroot.com',
        # tags=['Indian', 'Kebab', 'Comfort Food']
        )
    restaurant88 = Business(
        owner_id=13,
        business_name='Qing Xiang Yuan Dumplings',
        email='info@qxydumplings.com',
        phone='3127991118',
        street_address='2002 S Wentworth Ave',
        city='Chicago',
        state='IL',
        zipcode=60616,
        about="We are famous for our dumplings & BBQ.",
        longitude=-87.63219,
        latitude=41.85505,
        price_range=2,
        website='https://qxydumplings.com',
        # tags=['Filipino', 'Delicatessen', 'Food Delivery Services']
        )
    restaurant89 = Business(
        owner_id=14,
        business_name="Dove's Luncheonette",
        email='info@doveschicago.com',
        phone='7736454060',
        street_address='1545 N Damen Ave',
        city='Chicago',
        state='IL',
        zipcode=60622,
        about="Set to the sounds of 1960s and 70s Chicago soul and blues, Dove's Luncheonette offers counter service morning, noon and night in the heart of Chicago's Wicker Park.",
        longitude=-87.677293,
        latitude=41.909487,
        price_range=2,
        website='http://www.doveschicago.com',
        # tags=['Korean', 'Bagels', 'Dim Sum']
        )
    restaurant90 = Business(
        owner_id=15,
        business_name='The VIG Chicago',
        email='info@thevigchicago.com',
        phone='3129822186',
        street_address='1527 N Wells St',
        city='Chicago',
        state='IL',
        zipcode=60610,
        about="Sports parlor with a refined kitchen and craft cocktails designed for the contemporary drinker. The Vig's concept is centered around the playful story line 'that it's good to be bad.'",
        longitude=-87.6345035,
        latitude=41.9099251,
        price_range=2,
        website='http://www.thevigchicago.com',
        # tags=['Kebab', 'Honey', 'Gelato']
        )
    restaurant91 = Business(
        owner_id=1,
        business_name="Poor Calvin's",
        email="info@poorcalvin.com",
        phone='4042544051',
        street_address='510 Piedmont Ave NE',
        city='Atlanta',
        state='GA',
        zipcode=30308,
        about="Modern, intimate eatery featuring an Asian fusion menu, plus both classic & creative cocktails.",
        longitude=-84.38226,
        latitude=33.7684,
        price_range=3,
        website="https://poorcalvins.com/",
        # tags=['Gelato', 'Breakfast & Brunch', 'Vietnamese']
        )
    restaurant92 = Business(
        owner_id=2,
        business_name='Postino Buckhead',
        email="postinobuckhead@upwardprojects.com",
        phone='6786081955',
        street_address='3655 Roswell Rd NE',
        city='Atlanta',
        state='GA',
        zipcode=30342,
        about="An industrial winecafé offering unique and approachable wines, simply scrumptious food prepared with local ingredients, and a warm, edgy culture that brings people together.",
        longitude=-84.38251,
        latitude=33.85494,
        price_range=3,
        website="https://www.postinowinecafe.com/locations/georgia/buckhead/",
        # tags=['Middle Eastern', 'Chicken Wings', 'Acai Bowls']
        )
    restaurant93 = Business(
        owner_id=3,
        business_name='South City Kitchen Midtown',
        email="info@southcitykitchen.com",
        phone='4048737358',
        street_address='1144 Crescent Ave NE',
        city='Atlanta',
        state='GA',
        zipcode=30309,
        about="Inventive takes on Southern classics, including a popular brunch, served in upscale surroundings.",
        longitude=-84.3845599,
        latitude=33.786,
        price_range=2,
        website="https://www.southcitykitchen.com/",
        # tags=['Filipino', 'Delicatessen', 'Pizza']
        )
    restaurant94 = Business(
        owner_id=4,
        business_name='Aviva by Kameel - Atlanta',
        email="info@aviva.com",
        phone='4046983600',
        street_address='225 Peachtree St NE',
        city='Atlanta',
        state='GA',
        zipcode=30303,
        about="Easygoing counter-serve cafe & juice bar providing locally sourced, classic Mediterranean meals.",
        longitude=-84.386555,
        latitude=33.760538,
        price_range=2,
        website="https://www.avivabykameel.com/",
        # tags=['Convenience Stores', 'Chinese', 'Caribbean']
        )
    restaurant95 = Business(
        owner_id=5,
        business_name='Krave',
        email="info@krave.com",
        phone='4042280840',
        street_address='1170 Collier Rd',
        city='Atlanta',
        state='GA',
        zipcode=30318,
        about="Our meats are carefully selected and trimmed in house and marinated for over 24 hours in our special marinade that's consisted mostly with your favorite fruits; to create that rich and bold flavor.",
        longitude=-84.42574,
        latitude=33.81099,
        price_range=2,
        website="https://kraveatl.com/",
        # tags=['Italian', 'Convenience Stores', 'Coffee & Tea']
        )
    restaurant96 = Business(
        owner_id=6,
        business_name='Two Urban Licks',
        email="info@twourbanlicks.com",
        phone='4045224622',
        street_address='820 Ralph McGill Blvd NE',
        city='Atlanta',
        state='GA',
        zipcode=30306,
        about="American rotisserie fare & live blues are draws at this restaurant in a warehouse with city views.",
        longitude=-84.3612738,
        latitude=33.7684555,
        price_range=2,
        website="https://www.twourbanlicks.com/",
        # tags=['Seafood', 'Noodles', 'Beer, Wine & Spirits']
        )
    restaurant97 = Business(
        owner_id=7,
        business_name='Whiskey Bird',
        email="info@whiskeybird.com",
        phone='4045000575',
        street_address='1409 N Highland Ave NE',
        city='Atlanta',
        state='GA',
        zipcode=30306,
        about="Grilled yakitori skewers & cross-cultural fusion plates (tacos, burgers in an easygoing space.)",
        longitude=-84.351852,
        latitude=33.792656,
        price_range=2,
        website="https://www.eatwhiskeybird.com/",
        # tags=['Vegan', 'Halal', 'Kosher']
        )
    restaurant98 = Business(
        owner_id=8,
        business_name='Urban Hai',
        email="info@urbanhai.com",
        phone='4045498181',
        street_address='77 12th St',
        city='Atlanta',
        state='GA',
        zipcode=30309,
        about="The Midtown restaurant is helmed by Chef Hai and will specialize in Peking duck served several ways including the traditional presentation, as well as duck fried rice and other small plate options.",
        longitude=-84.3849647,
        latitude=33.784326,
        price_range=2,
        website="https://www.yelp.com/biz/urban-hai-atlanta",
        # tags=['Soul Food', 'Bagels', 'Bakeries']
        )
    restaurant99 = Business(
        owner_id=9,
        business_name='Grana',
        email="info@granaatl.com",
        phone='4042319000',
        street_address='1835 Piedmont Ave NE',
        city='Atlanta',
        state='GA',
        zipcode=30324,
        about="Traditional Southern Italian cuisine served in an industrial-chic restaurant that has a rooftop bar.",
        longitude=-84.36667,
        latitude=33.805648,
        price_range=2,
        website="https://www.granaatl.com/",
        # tags=['Hawaiian', 'Burgers', 'Vietnamese']
        )
    restaurant100 = Business(
        owner_id=10,
        business_name='5Church - Buckhead',
        email="info@5church.com",
        phone='4708194841',
        street_address='3379 Peachtree Rd NE',
        city='Atlanta',
        state='GA',
        zipcode=30326,
        about="Hip locale for steaks & New American fare in an upscale space, plus cocktails & weekend brunch.",
        longitude=-84.3657890,
        latitude=33.8478353,
        price_range=3,
        website="https://buckhead.5church-atlanta.com/",
        # tags=['Tapas', 'Breweries']
        )
    restaurant101 = Business(
        owner_id=11,
        business_name='Okiboru Tsukemen & Ramen',
        email="info@okiboru.com",
        phone='4049985333',
        street_address='2277 Peachtree St NE',
        city='Atlanta',
        state='GA',
        zipcode=30309,
        about="Lively restaurant offering lauded noodle dishes, wraps & bao buns in a modern dining area.",
        longitude=-84.3901,
        latitude=33.8158,
        price_range=2,
        website="https://okiboru.com/",
        # tags=['Buffets', 'Vegetarian', 'Hawaiian']
        )
    restaurant102 = Business(
        owner_id=12,
        business_name='Little Rey',
        email="info@littlerey.com",
        phone='7707960207',
        street_address='1878 Piedmont Ave NE',
        city='Atlanta',
        state='GA',
        zipcode='30324',
        about="Contemporary Mexican counter serve offering tacos, breakfast & margaritas in a sunny, vibrant space.",
        longitude=-84.36634,
        latitude=33.80799,
        price_range=2,
        website="https://www.littlerey.com/",
        # tags=['Vietnamese', 'Gastropubs', 'Soul Food']
        )
    restaurant103 = Business(
        owner_id=13,
        business_name='26 Thai Kitchen & Bar',
        email="info@26thai.com",
        phone='4044005995',
        street_address='541 Main St NE',
        city='Atlanta',
        state='GA',
        zipcode=30324,
        about="Classic & contemporary curries, noodles & other Thai favorites are served in a loftlike space.",
        longitude=-84.36912,
        latitude=33.82237,
        price_range=2,
        website="https://26thai.com/",
        # tags=['Cajun/Creole', 'Barbeque', 'Delicatessen']
        )
    restaurant104 = Business(
        owner_id=14,
        business_name='Atlanta Breakfast Club',
        email="info@atlantabreakfast.com",
        phone='4704283825',
        street_address='249 Ivan Allen Jr Blvd',
        city='Atlanta',
        state='GA',
        zipcode=30313,
        about="Modern diner with retro seating for down-home breakfast fare, plus burgers & other American staples.",
        longitude=-84.395400,
        latitude=33.7650217,
        price_range=2,
        website="https://atlantabreakfastclub.ordersnapp.com/home",
        # tags=['Kosher', 'Food Trucks', 'Asian Fusion']
        )
    restaurant105 = Business(
        owner_id=15,
        business_name='Roc South Cuisine',
        email="info@rocsouthcuisine.com",
        phone='4044815915',
        street_address='3009 Buford Hwy NE',
        city='Atlanta',
        state='GA',
        zipcode=30329,
        about="Restaurant specializing in Southern-style cuisine & cocktails in laid-back surroundings.",
        longitude=-84.33755,
        latitude=33.83534,
        price_range=2,
        website="https://www.rocsouth.com/",
        # tags=['Salad', 'Comfort Food', 'Hawaiian']
        )

    db.session.add(restaurant1)
    db.session.add(restaurant2)
    db.session.add(restaurant3)
    db.session.add(restaurant4)
    db.session.add(restaurant5)
    db.session.add(restaurant6)
    db.session.add(restaurant7)
    db.session.add(restaurant8)
    db.session.add(restaurant9)
    db.session.add(restaurant10)
    db.session.add(restaurant11)
    db.session.add(restaurant12)
    db.session.add(restaurant13)
    db.session.add(restaurant14)
    db.session.add(restaurant15)
    db.session.add(restaurant16)
    db.session.add(restaurant17)
    db.session.add(restaurant18)
    db.session.add(restaurant19)
    db.session.add(restaurant20)
    db.session.add(restaurant21)
    db.session.add(restaurant22)
    db.session.add(restaurant23)
    db.session.add(restaurant24)
    db.session.add(restaurant25)
    db.session.add(restaurant26)
    db.session.add(restaurant27)
    db.session.add(restaurant28)
    db.session.add(restaurant29)
    db.session.add(restaurant30)
    db.session.add(restaurant31)
    db.session.add(restaurant32)
    db.session.add(restaurant33)
    db.session.add(restaurant34)
    db.session.add(restaurant35)
    db.session.add(restaurant36)
    db.session.add(restaurant37)
    db.session.add(restaurant38)
    db.session.add(restaurant39)
    db.session.add(restaurant40)
    db.session.add(restaurant41)
    db.session.add(restaurant42)
    db.session.add(restaurant43)
    db.session.add(restaurant44)
    db.session.add(restaurant45)
    db.session.add(restaurant46)
    db.session.add(restaurant47)
    db.session.add(restaurant48)
    db.session.add(restaurant49)
    db.session.add(restaurant50)
    db.session.add(restaurant51)
    db.session.add(restaurant52)
    db.session.add(restaurant53)
    db.session.add(restaurant54)
    db.session.add(restaurant55)
    db.session.add(restaurant56)
    db.session.add(restaurant57)
    db.session.add(restaurant58)
    db.session.add(restaurant59)
    db.session.add(restaurant60)
    db.session.add(restaurant61)
    db.session.add(restaurant62)
    db.session.add(restaurant63)
    db.session.add(restaurant64)
    db.session.add(restaurant65)
    db.session.add(restaurant66)
    db.session.add(restaurant67)
    db.session.add(restaurant68)
    db.session.add(restaurant69)
    db.session.add(restaurant70)
    db.session.add(restaurant71)
    db.session.add(restaurant72)
    db.session.add(restaurant73)
    db.session.add(restaurant74)
    db.session.add(restaurant75)
    db.session.add(restaurant76)
    db.session.add(restaurant77)
    db.session.add(restaurant78)
    db.session.add(restaurant79)
    db.session.add(restaurant80)
    db.session.add(restaurant81)
    db.session.add(restaurant82)
    db.session.add(restaurant83)
    db.session.add(restaurant84)
    db.session.add(restaurant85)
    db.session.add(restaurant86)
    db.session.add(restaurant87)
    db.session.add(restaurant88)
    db.session.add(restaurant89)
    db.session.add(restaurant90)
    db.session.add(restaurant91)
    db.session.add(restaurant92)
    db.session.add(restaurant93)
    db.session.add(restaurant94)
    db.session.add(restaurant95)
    db.session.add(restaurant96)
    db.session.add(restaurant97)
    db.session.add(restaurant98)
    db.session.add(restaurant99)
    db.session.add(restaurant100)
    db.session.add(restaurant101)
    db.session.add(restaurant102)
    db.session.add(restaurant103)
    db.session.add(restaurant104)
    db.session.add(restaurant105)

    db.session.commit()


def undo_businesses():
    db.session.execute('TRUNCATE businesses RESTART IDENTITY CASCADE;')
    db.session.commit()
