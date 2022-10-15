from app.models import db, Review


def seed_reviews():
    review1 = Review(
        user_id=16,
        business_id=1,
        review="Rude treatment again today, and this time it's the last time.  I am a longterm resident and have always had nothing but positive relations with the people who work in the dozen neighborhood shops I have favored over big stores. I am a retired public health social worker who has always preferred to give my business to locals.",
        nope=5,
    )
    review2 = Review(
        user_id=17,
        business_id=1,
        review="Don't Believe The Hype! don't, don't, don't!",
        nope=5,
    )
    review3 = Review(
        user_id=18,
        business_id=1,
        review="In my quest to find the best cookie in the Mission, I stopped by Arizmendi since it is one of the more talked about bakeries in the area. I don't really see what all the hype is about.  ",
        nope=4,
    )
    review4 = Review(
        user_id=19,
        business_id=1,
        review="I'm so glad other people like this place.  But to me, the measure of a bakery is how good their bread is, not their cookies, pastries, or muffins.  Unfortunately, I am unable to tell anyone how their bread is -- because they don't bake in the morning!",
        nope=4,
    )
    review5 = Review(
        user_id=20,
        business_id=1,
        review="Rustic? How about 'made for cowboys' and no that is not a compliment.",
        nope=5,
    )
    review6 = Review(
        user_id=21,
        business_id=2,
        review="Went there last night looking forward to a burger. Server brought wrong wine after being asked again after waiting 25 minutes, salads delivered after long wait, then burger, which was basically raw, was delivered minutes later. But then again this a bar and not a restaurant.",
        nope=3,
    )
    review7 = Review(
        user_id=22,
        business_id=2,
        review="If you want to know how much this place really doesn't care about how it treats customers just look at their follow-ups on any negative review below.",
        nope=4,
    )
    review8 = Review(
        user_id=23,
        business_id=2,
        review="Walked in just around 6pm for a party of 9. 4 adults and 5 starving teenage boys. Got us right in with no issue. Barely anyone in the restaurant for a rainy Tuesday night. This may have been the worst meal and service we've had in a long time.",
        nope=5,
    )
    review9 = Review(
        user_id=24,
        business_id=3,
        review="This steak house is a complete joke.",
        nope=4,
    )
    review10 = Review(
        user_id=25,
        business_id=3,
        review="Hands down, one of the worst experiences my family and I have ever had at a restaurant. To start...our Christmas Eve reservation was made a month prior for 7pm, and we were not sat until a half hour after our reservation.",
        nope=5,
    )
    review11 = Review(
        user_id=26,
        business_id=3,
        review="Next time you order a flavored iced tea and you think it's refillable, well it's NOT and we weren't told it wasn't. Oh well. Just pay the dang $14",
        nope=3,
    )
    review12 = Review(
        user_id=27,
        business_id=3,
        review="Sunday night with family spend $167 on steak & alcohol. I tried really hard to give this place a 2nd chance, even with the bad nope reviews.",
        nope=4,
    )
    review13 = Review(
        user_id=28,
        business_id=3,
        review="Went for my Sister-in-law's Birthday. Had a reservation and still had to wait 45 minutes. Our waiter had the personality of a wet mop. Our hors d'oeuvres came (after a 35 minute wait) and all were cold.",
        nope=4,
    )
    review14 = Review(
        user_id=29,
        business_id=3,
        review="I have never been to this location, and I can honestly tell you that I would never come back.",
        nope=5,
    )
    review15 = Review(
        user_id=30,
        business_id=3,
        review="10000 nopes if I could. Currently sitting here while writing this review. Save yourselves. Turn around and go to Macaroni Grill.",
        nope=5,
    )
    review16 = Review(
        user_id=16,
        business_id=3,
        review="Rude treatment again today, and this time it's the last time.  I am a longterm resident and have always had nothing but positive relations with the people who work in the dozen neighborhood shops I have favored over big stores. I am a retired public health social worker who has always preferred to give my business to locals.",
        nope=5,
    )
    review17 = Review(
        user_id=17,
        business_id=3,
        review="Mash potatoes are hard, you can pick them up like a block.",
        nope=3,
    )
    review18 = Review(
        user_id=18,
        business_id=4,
        review="This place was okay! I don't know why it's on nope at all!",
        nope=1,
    )
    review19 = Review(
        user_id=19,
        business_id=4,
        review="Service is always great whenever I go here. It's quick & efficient, but definitely friendly.",
        nope=1,
    )
    review20 = Review(
        user_id=20,
        business_id=4,
        review="FINALLY!!! I've been meaning to go here for so long, but due to Covid only making it to-go for awhile. I delayed.",
        nope=1,
    )
    review21 = Review(
        user_id=21,
        business_id=4,
        review="This place is phenomenal. I orders a level 3 mild curry with the chicken and vegetables, let me just tell you it was delicious!",
        nope=1,
    )
    review22 = Review(
        user_id=22,
        business_id=5,
        review="Meh... It wasn't THAT bad",
        nope=2,
    )
    review23 = Review(
        user_id=23,
        business_id=5,
        review="Mixed service. Took at least 30 minutes to get our food. Had to ask twice for ketchup. Reservations required for tables, not at the bars. Our 45 min wait was closer to 30 but we noticed a lot of empty tables. Maybe they were short staffed.",
        nope=2,
    )
    review24 = Review(
        user_id=24,
        business_id=5,
        review="Unfortunately, they don't have the best customer service, in my opinion. We were told it would be a 2 hour wait to be seated.",
        nope=3,
    )
    review25 = Review(
        user_id=25,
        business_id=6,
        review="I wish I could say better things about this place, but the food just isn't good and service is very slow. I ordered the kale salad, and there wasn't an oz of kale in it. There was, however, a ton of spring mix and a weird granola bar?",
        nope=4,
    )
    review26 = Review(
        user_id=26,
        business_id=6,
        review="This is a beautiful place but they probably should stick to what they do best, make beer.",
        nope=3,
    )
    review27 = Review(
        user_id=27,
        business_id=6,
        review="Very cool atmosphere, just not the best workers! Most of them are stuck up and rude!!",
        nope=3,
    )
    review28 = Review(
        user_id=28,
        business_id=6,
        review="Waiter was very nice but either inexperienced or spread thin.",
        nope=4,
    )
    review29 = Review(
        user_id=29,
        business_id=7,
        review="I can't say much because we didn't get past the host. I put my name in and she told me it would be a 45 minute wait. I sat down, pulled up their website and there was a reservation for two available in 15 minutes, so I set it up on Open Table and let her know.",
        nope=5,
    )
    review30 = Review(
        user_id=30,
        business_id=7,
        review="Don't Believe The Hype! don't, don't, don't!",
        nope=5,
    )
    review31 = Review(
        user_id=16,
        business_id=7,
        review="Rude treatment again today, and this time it's the last time.  I am a longterm resident and have always had nothing but positive relations with the people who work in the dozen neighborhood shops I have favored over big stores. I am a retired public health social worker who has always preferred to give my business to locals.",
        nope=5,
    )
    review32 = Review(
        user_id=17,
        business_id=8,
        review="Don't Believe The Hype! don't, don't, don't!",
        nope=5,
    )
    review33 = Review(
        user_id=18,
        business_id=8,
        review="The environment is superb. The beer is refreshing. The food is excellent. But they lose 3 points for their customer service.",
        nope=4,
    )
    review34 = Review(
        user_id=19,
        business_id=9,
        review="What a cluster truck. Had reservations, walked in, they said the other half of our party is here, find them and come back to us. We found our family, came back and told us you have 10 minutes left on your reservation, we can't seat you.",
        nope=5,
    )
    review35 = Review(
        user_id=20,
        business_id=9,
        review="Gave it a two because the atmosphere and food were good.  Unfortunately, the experience was terrible due to the severe lack of service.",
        nope=2,
    )
    review36 = Review(
        user_id=21,
        business_id=9,
        review="We were celebrating a birthday with 8 guests. We wanted an outdoor patio with shade or protection because of the late afternoon heat and settled on this place because of their location, good beer and lush garden patio.",
        nope=1,
    )
    review37 = Review(
        user_id=22,
        business_id=10,
        review="The drinks are great but the food...well it's mediocre at best. I had the Birria beef tacos tonight - the greasiest thing I've ever eaten. 2 of us had the kimchi fried rice and the 2 plates looked completely different.",
        nope=3,
    )
    review38 = Review(
        user_id=23,
        business_id=10,
        review="Basically I will not be going back here til they change up there service process.. the system is terrible and very impersonal. You order food from your phone! They leave a paper menu but not all items on menu are actually available .. then you have to send a text message to some phone number to find they don't have that item and then you have to start ordering your food AGAIN.",
        nope=5,
    )
    review39 = Review(
        user_id=24,
        business_id=10,
        review="Walked in, was told that there was a 2 hour wait. Walked out and saw the out door area from the outdoor stones. Walked back in and asked if there was an outdoor first come, first served area. Answer was yes, should've led with that?",
        nope=4,
    )
    review40 = Review(
        user_id=25,
        business_id=10,
        review="Young staff, no personal attention, scan ordering, interesting that the staff that I spoke to does not even know Stones roots or story. I have been a frequent customer since the old tasting room in San Fran.",
        nope=3,
    )
    review41 = Review(
        user_id=26,
        business_id=11,
        review="Not impressed in any way. So many issues here. Must have a smart phone to order. No servers. No password to connect to WiFi. Had to flag someone down to get that. Menu is so small and nothing is gluten free.",
        nope=4,
    )
    review42 = Review(
        user_id=27,
        business_id=12,
        review="Group of four, asked for a table & was told it was 1hr 45min wait. Not a big deal, we decided to wait. We were told that we could sit anywhere outside and order beer.",
        nope=4,
    )
    review43 = Review(
        user_id=28,
        business_id=12,
        review="Don't Believe The Hype! don't, don't, don't!",
        nope=5,
    )
    review44 = Review(
        user_id=29,
        business_id=12,
        review="The food here was decent but the service is absolutely atrocious. Nothing makes sense. They give you menus when you are seated yet you need to order through the QR code. That seems fine, except you don't see someone for 20 minutes after you order.",
        nope=5,
    )
    review45 = Review(
        user_id=30,
        business_id=13,
        review="Beer good. Food good. Service.. what service? This place is playing the COVID card to understaff and provide terrible service.",
        nope=4,
    )
    review46 = Review(
        user_id=16,
        business_id=13,
        review="NAH NO WAY NOPE!!!",
        nope=5,
    )
    review47 = Review(
        user_id=17,
        business_id=13,
        review="Don't Believe The Hype! don't, don't, don't!",
        nope=5,
    )
    review48 = Review(
        user_id=18,
        business_id=13,
        review="In my quest to find the best cookie in the Mission, I stopped by Arizmendi since it is one of the more talked about bakeries in the area. I don't really see what all the hype is about.  ",
        nope=4,
    )
    review49 = Review(
        user_id=19,
        business_id=14,
        review="Ready Press Submit! First off, this review is for the dining area and the new food ordering app. There's the normal QR code which we're all used to for accessing the menu. That's where it goes down hill quickly.",
        nope=5,
    )
    review50 = Review(
        user_id=20,
        business_id=14,
        review="Appetizers came out cold, ordering through the app sucks and if you want any condiments good freakin luck!!!",
        nope=5,
    )
    review51 = Review(
        user_id=21,
        business_id=15,
        review="Mac and cheese was completely cold and didn't even taste like Mac and cheese. Immediately sent it back. Got it refunded. Got my burger which had a tomato sauce on it which I wasn't aware of nor did it have it on the description of the burger. Bun was dry and the meat was dry. I wasn't paying $18 for that.",
        nope=5,
    )
    review52 = Review(
        user_id=22,
        business_id=15,
        review="The host/hostesses are not friendly. The gardens are not open even though the website says nothing about it being closed.",
        nope=4,
    )
    review53 = Review(
        user_id=23,
        business_id=15,
        review="Well let me start with the good. The food was good. We had the Chicharrones appetizer yummy. I had never had them in my life. I doubt I'll eat them again but I liked it. Ate a few tacos, the Carnitas, and the Carne asada. Carnitas was delish. Carne asada was ok. Like I said food was good. Now for the bad. Their are no waiters. Everything is online. No one checks on you to make sure meal was ok or if you need another drink.",
        nope=3,
    )
    review54 = Review(
        user_id=24,
        business_id=15,
        review="Food was great. Beer was excellent. We ended up going with a large party to celebrate after our wedding rehearsal.",
        nope=1,
    )
    review55 = Review(
        user_id=25,
        business_id=16,
        review="Don't Believe The Hype! don't, don't, don't!",
        nope=5,
    )
    review56 = Review(
        user_id=26,
        business_id=16,
        review="The Bolognese was served cold, pasta wasn't fresh, and the sauce had little flavor. I would usually not judge food with such a high expectation but I paid $30 for one pasta.",
        nope=5,
    )
    review57 = Review(
        user_id=27,
        business_id=16,
        review="We decided to come here because of the high reviews. But I am very disappointed with the food and service. Food was mediocre, nothing special, nothing getting the quality I expected.",
        nope=4,
    )
    review58 = Review(
        user_id=28,
        business_id=17,
        review="My first visit was very good.  Came back 15 years later and this place must have changed management/chef.",
        nope=3,
    )
    review59 = Review(
        user_id=29,
        business_id=17,
        review="I took my SO here for his birthday, but I was severely disappointed in the lack of service. We waited about 15 minutes after being seated for someone to come take our order, another 45 minutes for our food (during which no one came to check in on us), and when I tried to catch someone's eye to ask for the check, it was like everyone was making an effort to avoid us.",
        nope=4,
    )
    review60 = Review(
        user_id=30,
        business_id=17,
        review="Because the menu is the same, I thought at the least, the food we be fairly consistent. We ordered the breakfast sandwich, mushroom fries, club sandwich, and ok for each of us. The waiter did not know the menu and told us that the oj was not fresh squeezed.",
        nope=5,
    )
    review61 = Review(
        user_id=16,
        business_id=18,
        review="Rude treatment again today, and this time it's the last time.  I am a longterm resident and have always had nothing but positive relations with the people who work in the dozen neighborhood shops I have favored over big stores. I am a retired public health social worker who has always preferred to give my business to locals.",
        nope=5,
    )
    review62 = Review(
        user_id=17,
        business_id=18,
        review="My problem is with the hosts and their process for seating. At 5pm today, when I called in advance to ask guest services regarding a party of ten and eating/dining in, the person in the phone advised there would be little to no wait.",
        nope=4,
    )
    review63 = Review(
        user_id=18,
        business_id=18,
        review="In my quest to find the best cookie in the Mission, I stopped by Arizmendi since it is one of the more talked about bakeries in the area. I don't really see what all the hype is about.  ",
        nope=4,
    )
    review64 = Review(
        user_id=19,
        business_id=19,
        review="Prices are inconsistent. I got three desserts March 30th and paid just over $30. Went today and bought one of the same desserts and it cost $15. I won't be returning.",
        nope=5,
    )
    review65 = Review(
        user_id=20,
        business_id=19,
        review="The food sucks. I've never had a meal here that I thought was even decent, and I always felt the highlight of the meal was the cheap, stale bread they give you when you sit down.",
        nope=5,
    )
    review66 = Review(
        user_id=21,
        business_id=19,
        review="Coming here for the first time, I was expecting to be amazed with everything when I walked in. Boy, was I wrong.",
        nope=4,
    )
    review67 = Review(
        user_id=22,
        business_id=20,
        review="The managers are rude.",
        nope=3,
    )
    review68 = Review(
        user_id=23,
        business_id=20,
        review="Used to be my fav restaurant. Must be new management or something because had one of the worst experiences I've ever had at a restaurant in my entire life here even after spending over 200$.",
        nope=4,
    )
    review69 = Review(
        user_id=24,
        business_id=20,
        review="Lame! Bakery closes at 10 even though rest closes at midnight. Over a dozen of ppl and they turned everyone away.",
        nope=3,
    )
    review70 = Review(
        user_id=25,
        business_id=21,
        review="Wow. Jaw dropping terrible. Talk about stuck up and snoody during memorial weekend!!!  Do not go to this place. I came here on a Monday night trying to end the weekend on a positive note and didn't even get to eat.",
        nope=5,
    )
    review71 = Review(
        user_id=26,
        business_id=21,
        review="Don't Believe The Hype! don't, don't, don't!",
        nope=3,
    )
    review72 = Review(
        user_id=27,
        business_id=21,
        review="This place was a letdown when I ordered takeout last night. The calamari was soggy, Cesar salad dressing was horrible and the pasta dish Gnudi was inedible.",
        nope=4,
    )
    review73 = Review(
        user_id=28,
        business_id=22,
        review="I love this place however the service was very disappointing at the counter. Please let your employees handling food know that 'gloves need to be changed or removed while waiting for customers'.",
        nope=2,
    )
    review74 = Review(
        user_id=29,
        business_id=22,
        review="fwoa8yfaifbywai78ybf8awbyf89awbw NOOOO",
        nope=5,
    )
    review75 = Review(
        user_id=30,
        business_id=22,
        review="Snooty place over rated",
        nope=3,
    )
    review76 = Review(
        user_id=16,
        business_id=23,
        review="Rude treatment again today, and this time it's the last time.  I am a longterm resident and have always had nothing but positive relations with the people who work in the dozen neighborhood shops I have favored over big stores. I am a retired public health social worker who has always preferred to give my business to locals.",
        nope=5,
    )
    review77 = Review(
        user_id=17,
        business_id=23,
        review="Worst customer service I've ever seen at a restaurant. Beware, they asked for vaccine record and ID. They are extremely rude about it.",
        nope=4,
    )
    review78 = Review(
        user_id=18,
        business_id=23,
        review="Their food is great. But reception service is terrible. I signed waiting list for long time. And all other customers after me didn't need to wait and got a table immediately.",
        nope=2,
    )
    review79 = Review(
        user_id=19,
        business_id=24,
        review="Their Executive Chef is another story. His attire was inappropriate & unsanitary. Their kitchen is open, so you can see their culinary team.",
        nope=5,
    )
    review80 = Review(
        user_id=20,
        business_id=24,
        review="Unbelievably slow. Give completely useless estimate of how long pizza will take. Staff seems not to care.",
        nope=5,
    )
    review81 = Review(
        user_id=21,
        business_id=24,
        review="I went to enjoy lunch after their long closure due to the pandemic. I approached the hostess who told me that the wait for two people would be about an hour. Looking around the restaurant i saw several tables available for two people.",
        nope=3,
    )
    review82 = Review(
        user_id=22,
        business_id=25,
        review="I absolutely HATE dining in at this restaurant. I have been here for brunch, lunch, and dinner. I have decided to only come here to pick up a dessert to go.",
        nope=4,
    )
    review83 = Review(
        user_id=23,
        business_id=25,
        review="Don't Believe The Hype! don't, don't, don't!",
        nope=5,
    )
    review84 = Review(
        user_id=24,
        business_id=25,
        review="They sneak in a SURCHARGE of 4percent on every bill!!",
        nope=4,
    )
    review85 = Review(
        user_id=25,
        business_id=26,
        review="Over the weekend I visited what I have been told one of the most delicious restaurants / bakery also known for presentation. I woke up very exited as I do when I know I am going to eat something yummy. Now only about to eat but also picking up a dessert for my daughter,  it was a surprise.",
        nope=1,
    )
    review86 = Review(
        user_id=26,
        business_id=26,
        review="We had hair in our food-- We dined in--(when they were open). We complained about it. Their behavior was very intolerant. When we got the check--we were charged for the entree we sent back.",
        nope=5,
    )
    review87 = Review(
        user_id=27,
        business_id=26,
        review="I will just get to the point! (A major heads-up for people that like to know how they will be spending their hard earn money!)",
        nope=5,
    )
    review88 = Review(
        user_id=28,
        business_id=27,
        review="The first time we went, the service was okay but it could've  been better. The second time we went, we were seated at a close table.",
        nope=5,
    )
    review89 = Review(
        user_id=29,
        business_id=27,
        review="TOURIST TRAP. AVOID AT ALL COST IF YOU ARE LOOKING FOR A QUALITY MEAL.",
        nope=5,
    )
    review90 = Review(
        user_id=30,
        business_id=27,
        review="This restaurant is very nice but really really expensive.",
        nope=2,
    )
    review91 = Review(
        user_id=16,
        business_id=28,
        review="Rude treatment again today, and this time it's the last time.  I am a longterm resident and have always had nothing but positive relations with the people who work in the dozen neighborhood shops I have favored over big stores. I am a retired public health social worker who has always preferred to give my business to locals.",
        nope=5,
    )
    review92 = Review(
        user_id=17,
        business_id=28,
        review="The server it's very bad,",
        nope=5,
    )
    review93 = Review(
        user_id=18,
        business_id=28,
        review="What happened? One of the saddest things in life is to look forward to a meal after not having it for a while and being disappointed. I ordered all my favs, portobello mushroom fries, burrata pizza, and trenne pasta. The fries were stale and tough, almost as if they tried reheating but didn't work. The burrata pizza was almost cold making the cheese jello.",
        nope=5,
    )
    review94 = Review(
        user_id=19,
        business_id=29,
        review="I'm so glad other people like this place.  But to me, the measure of a bakery is how good their bread is, not their cookies, pastries, or muffins.  Unfortunately, I am unable to tell anyone how their bread is -- because they don't bake in the morning!",
        nope=4,
    )
    review95 = Review(
        user_id=20,
        business_id=29,
        review="Rustic? How about 'made for cowboys' and no that is not a compliment.",
        nope=5,
    )
    review96 = Review(
        user_id=21,
        business_id=29,
        review="Went there last night looking forward to a burger. Server brought wrong wine after being asked again after waiting 25 minutes, salads delivered after long wait, then burger, which was basically raw, was delivered minutes later. But then again this a bar and not a restaurant.",
        nope=3,
    )
    review97 = Review(
        user_id=22,
        business_id=29,
        review="If you want to know how much this place really doesn't care about how it treats customers just look at their follow-ups on any negative review below.",
        nope=4,
    )
    review98 = Review(
        user_id=23,
        business_id=30,
        review="Walked in just around 6pm for a party of 9. 4 adults and 5 starving teenage boys. Got us right in with no issue. Barely anyone in the restaurant for a rainy Tuesday night. This may have been the worst meal and service we've had in a long time.",
        nope=5,
    )
    review99 = Review(
        user_id=24,
        business_id=30,
        review="This steak house is a complete joke.",
        nope=4,
    )
    review100 = Review(
        user_id=25,
        business_id=30,
        review="Hands down, one of the worst experiences my family and I have ever had at a restaurant. To start...our Christmas Eve reservation was made a month prior for 7pm, and we were not sat until a half hour after our reservation.",
        nope=5,
    )
    review101 = Review(
        user_id=26,
        business_id=31,
        review="Next time you order a flavored iced tea and you think it's refillable, well it's NOT and we weren't told it wasn't. Oh well. Just pay the dang $14",
        nope=3,
    )
    review102 = Review(
        user_id=27,
        business_id=31,
        review="Sunday night with family spend $167 on steak & alcohol. I tried really hard to give this place a 2nd chance, even with the bad nope reviews.",
        nope=4,
    )
    review103 = Review(
        user_id=28,
        business_id=31,
        review="Went for my Sister-in-law's Birthday. Had a reservation and still had to wait 45 minutes. Our waiter had the personality of a wet mop. Our hors d'oeuvres came (after a 35 minute wait) and all were cold.",
        nope=4,
    )
    review104 = Review(
        user_id=29,
        business_id=32,
        review="I have never been to this location, and I can honestly tell you that I would never come back.",
        nope=5,
    )
    review105 = Review(
        user_id=30,
        business_id=32,
        review="10000 nopes if I could. Currently sitting here while writing this review. Save yourselves. Turn around and go to Macaroni Grill.",
        nope=5,
    )
    review106 = Review(
        user_id=16,
        business_id=32,
        review="Rude treatment again today, and this time it's the last time.  I am a longterm resident and have always had nothing but positive relations with the people who work in the dozen neighborhood shops I have favored over big stores. I am a retired public health social worker who has always preferred to give my business to locals.",
        nope=5,
    )
    review107 = Review(
        user_id=17,
        business_id=33,
        review="Mash potatoes are hard, you can pick them up like a block.",
        nope=3,
    )
    review108 = Review(
        user_id=18,
        business_id=34,
        review="This place was okay! I don't know why it's on nope at all!",
        nope=1,
    )
    review109 = Review(
        user_id=19,
        business_id=34,
        review="Service is always great whenever I go here. It's quick & efficient, but definitely friendly.",
        nope=1,
    )
    review110 = Review(
        user_id=20,
        business_id=34,
        review="FINALLY!!! I've been meaning to go here for so long, but due to Covid only making it to-go for awhile. I delayed.",
        nope=1,
    )
    review111 = Review(
        user_id=21,
        business_id=34,
        review="This place is phenomenal. I orders a level 3 mild curry with the chicken and vegetables, let me just tell you it was delicious!",
        nope=1,
    )
    review112 = Review(
        user_id=22,
        business_id=35,
        review="Meh... It wasn't THAT bad",
        nope=2,
    )
    review113 = Review(
        user_id=23,
        business_id=35,
        review="Mixed service. Took at least 30 minutes to get our food. Had to ask twice for ketchup. Reservations required for tables, not at the bars. Our 45 min wait was closer to 30 but we noticed a lot of empty tables. Maybe they were short staffed.",
        nope=2,
    )
    review114 = Review(
        user_id=24,
        business_id=35,
        review="Unfortunately, they don't have the best customer service, in my opinion. We were told it would be a 2 hour wait to be seated.",
        nope=3,
    )
    review115 = Review(
        user_id=25,
        business_id=36,
        review="I wish I could say better things about this place, but the food just isn't good and service is very slow. I ordered the kale salad, and there wasn't an oz of kale in it. There was, however, a ton of spring mix and a weird granola bar?",
        nope=4,
    )
    review116 = Review(
        user_id=26,
        business_id=36,
        review="This is a beautiful place but they probably should stick to what they do best, make beer.",
        nope=3,
    )
    review117 = Review(
        user_id=27,
        business_id=36,
        review="Very cool atmosphere, just not the best workers! Most of them are stuck up and rude!!",
        nope=3,
    )
    review118 = Review(
        user_id=28,
        business_id=37,
        review="Waiter was very nice but either inexperienced or spread thin.",
        nope=4,
    )
    review119 = Review(
        user_id=29,
        business_id=37,
        review="I can't say much because we didn't get past the host. I put my name in and she told me it would be a 45 minute wait. I sat down, pulled up their website and there was a reservation for two available in 15 minutes, so I set it up on Open Table and let her know.",
        nope=5,
    )
    review120 = Review(
        user_id=30,
        business_id=37,
        review="Don't Believe The Hype! don't, don't, don't!",
        nope=5,
    )
    review121 = Review(
        user_id=16,
        business_id=37,
        review="Rude treatment again today, and this time it's the last time.  I am a longterm resident and have always had nothing but positive relations with the people who work in the dozen neighborhood shops I have favored over big stores. I am a retired public health social worker who has always preferred to give my business to locals.",
        nope=5,
    )
    review122 = Review(
        user_id=17,
        business_id=38,
        review="Don't Believe The Hype! don't, don't, don't!",
        nope=5,
    )
    review123 = Review(
        user_id=18,
        business_id=38,
        review="The environment is superb. The beer is refreshing. The food is excellent. But they lose 3 points for their customer service.",
        nope=4,
    )
    review124 = Review(
        user_id=19,
        business_id=39,
        review="What a cluster truck. Had reservations, walked in, they said the other half of our party is here, find them and come back to us. We found our family, came back and told us you have 10 minutes left on your reservation, we can't seat you.",
        nope=5,
    )
    review125 = Review(
        user_id=20,
        business_id=39,
        review="Gave it a two because the atmosphere and food were good.  Unfortunately, the experience was terrible due to the severe lack of service.",
        nope=2,
    )
    review126 = Review(
        user_id=21,
        business_id=39,
        review="We were celebrating a birthday with 8 guests. We wanted an outdoor patio with shade or protection because of the late afternoon heat and settled on this place because of their location, good beer and lush garden patio.",
        nope=1,
    )
    review127 = Review(
        user_id=22,
        business_id=40,
        review="The drinks are great but the food...well it's mediocre at best. I had the Birria beef tacos tonight - the greasiest thing I've ever eaten. 2 of us had the kimchi fried rice and the 2 plates looked completely different.",
        nope=3,
    )
    review128 = Review(
        user_id=23,
        business_id=40,
        review="Basically I will not be going back here til they change up there service process.. the system is terrible and very impersonal. You order food from your phone! They leave a paper menu but not all items on menu are actually available .. then you have to send a text message to some phone number to find they don't have that item and then you have to start ordering your food AGAIN.",
        nope=5,
    )
    review129 = Review(
        user_id=24,
        business_id=40,
        review="Walked in, was told that there was a 2 hour wait. Walked out and saw the out door area from the outdoor stones. Walked back in and asked if there was an outdoor first come, first served area. Answer was yes, should've led with that?",
        nope=4,
    )
    review130 = Review(
        user_id=25,
        business_id=40,
        review="Young staff, no personal attention, scan ordering, interesting that the staff that I spoke to does not even know Stones roots or story. I have been a frequent customer since the old tasting room in San Fran.",
        nope=3,
    )
    review131 = Review(
        user_id=26,
        business_id=41,
        review="Not impressed in any way. So many issues here. Must have a smart phone to order. No servers. No password to connect to WiFi. Had to flag someone down to get that. Menu is so small and nothing is gluten free.",
        nope=4,
    )
    review132 = Review(
        user_id=27,
        business_id=42,
        review="Group of four, asked for a table & was told it was 1hr 45min wait. Not a big deal, we decided to wait. We were told that we could sit anywhere outside and order beer.",
        nope=4,
    )
    review133 = Review(
        user_id=28,
        business_id=42,
        review="Don't Believe The Hype! don't, don't, don't!",
        nope=5,
    )
    review134 = Review(
        user_id=29,
        business_id=42,
        review="The food here was decent but the service is absolutely atrocious. Nothing makes sense. They give you menus when you are seated yet you need to order through the QR code. That seems fine, except you don't see someone for 20 minutes after you order.",
        nope=5,
    )
    review135 = Review(
        user_id=30,
        business_id=43,
        review="Beer good. Food good. Service.. what service? This place is playing the COVID card to understaff and provide terrible service.",
        nope=4,
    )
    review136 = Review(
        user_id=16,
        business_id=43,
        review="NAH NO WAY NOPE!!!",
        nope=5,
    )
    review137 = Review(
        user_id=17,
        business_id=43,
        review="Don't Believe The Hype! don't, don't, don't!",
        nope=5,
    )
    review138 = Review(
        user_id=18,
        business_id=43,
        review="In my quest to find the best cookie in the Mission, I stopped by Arizmendi since it is one of the more talked about bakeries in the area. I don't really see what all the hype is about.  ",
        nope=4,
    )
    review139 = Review(
        user_id=19,
        business_id=44,
        review="Ready Press Submit! First off, this review is for the dining area and the new food ordering app. There's the normal QR code which we're all used to for accessing the menu. That's where it goes down hill quickly.",
        nope=5,
    )
    review140 = Review(
        user_id=20,
        business_id=44,
        review="Appetizers came out cold, ordering through the app sucks and if you want any condiments good freakin luck!!!",
        nope=5,
    )
    review141 = Review(
        user_id=21,
        business_id=45,
        review="Mac and cheese was completely cold and didn't even taste like Mac and cheese. Immediately sent it back. Got it refunded. Got my burger which had a tomato sauce on it which I wasn't aware of nor did it have it on the description of the burger. Bun was dry and the meat was dry. I wasn't paying $18 for that.",
        nope=5,
    )
    review142 = Review(
        user_id=22,
        business_id=45,
        review="The host/hostesses are not friendly. The gardens are not open even though the website says nothing about it being closed.",
        nope=4,
    )
    review143 = Review(
        user_id=23,
        business_id=45,
        review="Well let me start with the good. The food was good. We had the Chicharrones appetizer yummy. I had never had them in my life. I doubt I'll eat them again but I liked it. Ate a few tacos, the Carnitas, and the Carne asada. Carnitas was delish. Carne asada was ok. Like I said food was good. Now for the bad. Their are no waiters. Everything is online. No one checks on you to make sure meal was ok or if you need another drink.",
        nope=3,
    )
    review144 = Review(
        user_id=24,
        business_id=45,
        review="Food was great. Beer was excellent. We ended up going with a large party to celebrate after our wedding rehearsal.",
        nope=1,
    )
    review145 = Review(
        user_id=25,
        business_id=46,
        review="First time dining at this restaurant with 6 colleagues. Upon entering, I was pleasantly surprised by the decor and ambience of the cafe and restaurant.",
        nope=1,
    )
    review146 = Review(
        user_id=26,
        business_id=46,
        review="Wow, what happened to this place? Service used to be good, but no longer. I ordered a hamburger and ordered it to be medium. When it was served to me, is was completely raw on the inside.",
        nope=4,
    )
    review147 = Review(
        user_id=27,
        business_id=46,
        review="On Friday night we experienced a disappointing meal here. I've frequently enjoyed this restaurant in the past, and brought out of town guests, who were excited to try it.",
        nope=3,
    )
    review148 = Review(
        user_id=28,
        business_id=47,
        review="The ambiance and decor was great.",
        nope=1,
    )
    review149 = Review(
        user_id=29,
        business_id=47,
        review="I got online at 12:01 pm to place an order for a two days later ship date only to find that shipping on that date was no longer an option.",
        nope=3,
    )
    review150 = Review(
        user_id=30,
        business_id=47,
        review="Came here Saturday night. It was my birthday. It was packed around 730 - 8 . Called before hand for reservation but they dont have any. Was told if 1-2 person is missing we could still be seated since we have a large party. But it wasnt true",
        nope=5,
    )
    review151 = Review(
        user_id=16,
        business_id=48,
        review="Rude treatment again today, and this time it's the last time.  I am a longterm resident and have always had nothing but positive relations with the people who work in the dozen neighborhood shops I have favored over big stores. I am a retired public health social worker who has always preferred to give my business to locals.",
        nope=5,
    )
    review152 = Review(
        user_id=17,
        business_id=48,
        review="Don't Believe The Hype! don't, don't, don't!",
        nope=5,
    )
    review153 = Review(
        user_id=18,
        business_id=48,
        review="In my quest to find the best cookie in the Mission, I stopped by Arizmendi since it is one of the more talked about bakeries in the area. I don't really see what all the hype is about.  ",
        nope=4,
    )
    review154 = Review(
        user_id=19,
        business_id=49,
        review="HORRIBLE service! The ambience is nice but Josh, the GM, was quite rude and not interested in providing good customer service after one of his servers ruined our experience.",
        nope=5,
    )
    review155 = Review(
        user_id=20,
        business_id=49,
        review="Unbelievably slow. Give completely useless estimate of how long pizza will take. Staff seems not to care.",
        nope=5,
    )
    review156 = Review(
        user_id=21,
        business_id=49,
        review="Really disappointed, I don't understand the hype.if u ever visited Paris ladurée , Angelina, Vienna Demel, Sacher u will be not satisfied",
        nope=4,
    )
    review157 = Review(
        user_id=22,
        business_id=50,
        review="So you guys refuse to let us speak to a manager because you're so busy and insist we send an email but never respond to the email? That's not ok!",
        nope=5,
    )
    review158 = Review(
        user_id=23,
        business_id=50,
        review="5 STARS 1 NOPE!",
        nope=1,
    )
    review159 = Review(
        user_id=24,
        business_id=50,
        review="Went here thinking they would be serving breakfast at 8 am like their website says. Turns out the hours aren't liberal.",
        nope=4,
    )
    review160 = Review(
        user_id=25,
        business_id=51,
        review="Food was okay, she only really liked the beignets. Other than that, we got the lobster eggs benedict and tartufo (truffle and egg) pizza. The flavor and texture on everything was pretty good.",
        nope=2
    )
    review161 = Review(
        user_id=26,
        business_id=51,
        review="I can't express how disappointed I am in the management and customer service of this restaurant.",
        nope=5,
    )
    review162 = Review(
        user_id=27,
        business_id=51,
        review="Extremely loud, pretentious, and mediocre food.",
        nope=4,
    )
    review163 = Review(
        user_id=28,
        business_id=52,
        review="Honestly , not all that , over priced , quality of food is good but bad preparation and service , they care more about how things look than how things should be , I hate all The hostesses , they are rude and have a nasty attitude",
        nope=5,
    )
    review164 = Review(
        user_id=29,
        business_id=52,
        review="s. My husband and I went for breakfast for the first time ever. It was a nightmare. The waiter spilled an entire mimosa on my husband. It covered his face and was dripping down onto his suit jacket. We were furious.",
        nope=5,
    )
    review165 = Review(
        user_id=30,
        business_id=52,
        review="We're from out of town so we came here based on the great reviews this place typically gets. We went here for lunch and our server recommended the lobster hash so that's what I ordered. Worst thing I have ever eaten and lobster is my favorite food.",
        nope=5,
    )
    review166 = Review(
        user_id=16,
        business_id=53,
        review="Rude treatment again today, and this time it's the last time.  I am a longterm resident and have always had nothing but positive relations with the people who work in the dozen neighborhood shops I have favored over big stores. I am a retired public health social worker who has always preferred to give my business to locals.",
        nope=5,
    )
    review167 = Review(
        user_id=17,
        business_id=53,
        review="Don't Believe The Hype! don't, don't, don't!",
        nope=5,
    )
    review168 = Review(
        user_id=18,
        business_id=53,
        review="Napoleon tasted burned like a burned card board, bitter, so awful.  It cost $14.00, you gotta be kidding me.  Technically, total of $16 to include tax & surcharge fee for fine good.",
        nope=4,
    )
    review169 = Review(
        user_id=19,
        business_id=54,
        review="Don't Believe The Hype! don't, don't, don't!",
        nope=5,
    )
    review170 = Review(
        user_id=20,
        business_id=54,
        review="Unbelievably slow. Give completely useless estimate of how long pizza will take. Staff seems not to care.",
        nope=5,
    )
    review171 = Review(
        user_id=21,
        business_id=54,
        review="Went there last sunday.....under staffed....sooooo. f......ing NOISY..you need to Invest  in noise reducer in the ceiling..many of your waiters just talking  between each other instead of going around",
        nope=4,
    )
    review172 = Review(
        user_id=22,
        business_id=55,
        review="This rating is for the service only, I love their pastries but when I went there 01/10 evening the lady who was working at the cashier not only made a mistake with my order but gave me an attitude when I point it out to her, instead of a simple apology and fix her mistake ,she made me wait so she could take care of other customers.",
        nope=5,
    )
    review173 = Review(
        user_id=23,
        business_id=55,
        review="I think this might be the first time I would rate a very well run operation with FIVE nopes. Wow, what am I thinking, right?",
        nope=5,
    )
    review174 = Review(
        user_id=24,
        business_id=55,
        review="When will eateries learn that we don't mind paying a higher price for GOOD QUALITY food? So after paying too much, I found 2 heels of the lettuce! Pieces that should have been thrown in the trash!!!",
        nope=5,
    )
    review175 = Review(
        user_id=25,
        business_id=56,
        review="One of my least favorite things is when you walk into a half empty restaurant and they tell you there is a 25 min wait. No offer to sit, have a glass of wine, take a load off .... just wait.",
        nope=4,
    )
    review176 = Review(
        user_id=26,
        business_id=56,
        review="Do not come here on Valentine's Day! Stay the heck away!!! Came here tonight for Valentine's Day as we typically go to Mi Piace in Pasadena..absolutely the worst mistake.",
        nope=5,
    )
    review177 = Review(
        user_id=27,
        business_id=56,
        review="I came here for a birthday party with family...be ready for a very long wait for a table...after we sat the server was very nice/friendly/helpful.",
        nope=2,
    )
    review178 = Review(
        user_id=28,
        business_id=57,
        review="I had the Trenne pasta. The penne noodles were baked in a way where they tasted stale. The meat was totally over cooked and extremely chewy. The sauce... was basically tomato water. Yuck. My stomach hates me right now.",
        nope=4,
    )
    review179 = Review(
        user_id=29,
        business_id=57,
        review="Their Caesar salad was pretty good, but unfortunately it was better than the meal itself. I ordered the clam fettuccine, which was served while I still trying to finish my salad, so I had to rush through, but it was somewhat cold by the time I took the first bite.",
        nope=2,
    )
    review180 = Review(
        user_id=30,
        business_id=57,
        review="Great place until they started hiring all these scum bag hipsters who think they own the place !",
        nope=3,
    )
    review181 = Review(
        user_id=16,
        business_id=58,
        review="Rude treatment again today, and this time it's the last time.  I am a longterm resident and have always had nothing but positive relations with the people who work in the dozen neighborhood shops I have favored over big stores. I am a retired public health social worker who has always preferred to give my business to locals.",
        nope=5,
    )
    review182 = Review(
        user_id=17,
        business_id=58,
        review="Havent been to this restaurant in many years. I was really disappointed with the service and quality of food. I gave the manager my feedback, who was very apologetic and set us home with a box of macaroons. For the high quality this restaurant seems to claim, it definitely disappointed.",
        nope=4,
    )
    review183 = Review(
        user_id=18,
        business_id=58,
        review="They will make you pay employees Health benefits without your permission on your receipt, you can see it on your receipt it will say you've been charged",
        nope=4,
    )
    review184 = Review(
        user_id=19,
        business_id=58,
        review="I'm so glad other people like this place.  But to me, the measure of a bakery is how good their bread is, not their cookies, pastries, or muffins.  Unfortunately, I am unable to tell anyone how their bread is -- because they don't bake in the morning!",
        nope=4,
    )
    review185 = Review(
        user_id=20,
        business_id=59,
        review="Rustic? How about 'made for cowboys' and no that is not a compliment.",
        nope=5,
    )
    review186 = Review(
        user_id=21,
        business_id=59,
        review="Just waited 30 minutes for a hamburger and ended up not even getting it. Was told it would be one minute ten times while waiting with my dog. Employees laughing and talking like there's nothing to do. By far the worst 30 minutes I've experienced all year",
        nope=4,
    )
    review187 = Review(
        user_id=22,
        business_id=59,
        review="If you want to know how much this place really doesn't care about how it treats customers just look at their follow-ups on any negative review below.",
        nope=4,
    )
    review188 = Review(
        user_id=23,
        business_id=60,
        review="It's all hype. A bunch of bougié people eating overpriced eats. The servers have no personality. The food is mediocre at best.",
        nope=5,
    )
    review189 = Review(
        user_id=24,
        business_id=60,
        review="This steak house is a complete joke.",
        nope=4,
    )
    review190 = Review(
        user_id=25,
        business_id=60,
        review="Hands down, one of the worst experiences my family and I have ever had at a restaurant. To start...our Christmas Eve reservation was made a month prior for 7pm, and we were not sat until a half hour after our reservation.",
        nope=5,
    )
    review191 = Review(
        user_id=26,
        business_id=61,
        review="I had to come on here to let it be known that your customer service is seriously lacking. I call the other morning and spoke to a girl named Sophie. She spoke to me in such a condescending tone with some of the simple questions I asked her and kept telling me 'you need to speak up', I don't need to anything and she should learn how to converse to customers and be more hospitable.'",
        nope=5,
    )
    review192 = Review(
        user_id=27,
        business_id=61,
        review="I've given this restaurant three tries and it has let me down three times. If you're looking for a nice meal and also be able to hear the person speak sitting across from you then STAY AWAY from this place.",
        nope=3,
    )
    review193 = Review(
        user_id=28,
        business_id=62,
        review="Went for my Sister-in-law's Birthday. Had a reservation and still had to wait 45 minutes. Our waiter had the personality of a wet mop. Our hors d'oeuvres came (after a 35 minute wait) and all were cold.",
        nope=4
    )
    review194 = Review(
        user_id=29,
        business_id=62,
        review="The noise level here is criminal. Who cares about the food or drink or service if they are happy to subject you and me and their workers to dangerous levels of noise?",
        nope=4,
    )
    review195 = Review(
        user_id=30,
        business_id=62,
        review="We came here because they pride themselves for being allergy friendly - front and center on their website. They are not.",
        nope=5,
    )
    review196 = Review(
        user_id=16,
        business_id=63,
        review="Last time I got the long hair from my food-pizza. It was disgusting(( I don't want to go this place anymore",
        nope=5,
    )
    review197 = Review(
        user_id=17,
        business_id=63,
        review="ABSOLUTELY DISGUSTING. I get takeout here cause I work nearby and it used to be great a couple of years ago. The quality for food has gone down drastically.",
        nope=4,
    )
    review198 = Review(
        user_id=18,
        business_id=64,
        review="Usually have a great experience but tonight it wasn't. Ordered three chocolate beignets with some other stuff  , but got 3 raspberry instead.. normally would be fine if I liked raspberry. Such a bummer to get home and bite into the wrong flavor.. ",
        nope=3,
    )
    review199 = Review(
        user_id=19,
        business_id=64,
        review="This place is fancy and the service is good. All dishes are served individually without sides. It does not make sense to me.",
        nope=2,
    )
    review200 = Review(
        user_id=20,
        business_id=64,
        review="Came with the family here but very disappointed when tried to change my daughter and went to the bathroom. NO CHANGING TABLE!!",
        nope=3,
    )
    review201 = Review(
        user_id=21,
        business_id=64,
        review="The staff at this place is RUDE, particularly the nasty hostess with the curly hair and oversized fake glasses that are SO OVER. ",
        nope=4,
    )
    review202 = Review(
        user_id=22,
        business_id=65,
        review="Meh... It wasn't THAT bad",
        nope=2,
    )
    review203 = Review(
        user_id=23,
        business_id=65,
        review="This was 1st time here so i want the safe route and got the french toast.  I didnt like it. It was wasnt done it was eggy and mushy.  Maybe if it was cooked a lul longer it would have been better.",
        nope=4,
    )
    review204 = Review(
        user_id=24,
        business_id=65,
        review="So i went to this place based on the reviews. the ambiance was really nice. But it took the server abut 15 min to come to ask us what we wanted to drink.",
        nope=3,
    )
    review205 = Review(
        user_id=25,
        business_id=66,
        review="Way too loud. Not fun. Can't concentrate on the food, drink or conversation. It's even loud when it's half empty.",
        nope=4,
    )
    review206 = Review(
        user_id=26,
        business_id=66,
        review="This is a beautiful place but they probably should stick to what they do best, make beer.",
        nope=3,
    )
    review207 = Review(
        user_id=27,
        business_id=66,
        review="Very cool atmosphere, just not the best workers! Most of them are stuck up and rude!!",
        nope=3,
    )
    review208 = Review(
        user_id=28,
        business_id=66,
        review="Waiter was very nice but either inexperienced or spread thin.",
        nope=4,
    )
    review209 = Review(
        user_id=29,
        business_id=67,
        review="OK. I wasn't going to write anything, and this is about a year and a half after it happened, but I just told the story to somebody, got heated and figured it was an appropriate time to vent my frustration with this amazing restaurant that fell into disrepair.",
        nope=5,
    )
    review210 = Review(
        user_id=30,
        business_id=67,
        review="Don't Believe The Hype! don't, don't, don't!",
        nope=5,
    )
    review211 = Review(
        user_id=16,
        business_id=67,
        review="Overpriced and overhyped. The food was standard and not very creative. The line is very long.",
        nope=4,
    )
    review212 = Review(
        user_id=17,
        business_id=68,
        review="Food and service at the bar was great. I am reviewing about service from the pastry bar.",
        nope=5,
    )
    review213 = Review(
        user_id=18,
        business_id=68,
        review="1st time customer. I've been hearing about How good the macarons are here so I had to buy a lemon flavor one...so disappointed! For being an expensive cookie, it was  really hard and stale.",
        nope=4,
    )
    review214 = Review(
        user_id=19,
        business_id=69,
        review="What a cluster truck. Had reservations, walked in, they said the other half of our party is here, find them and come back to us. We found our family, came back and told us you have 10 minutes left on your reservation, we can't seat you.",
        nope=5,
    )
    review215 = Review(
        user_id=20,
        business_id=69,
        review="This place is OVER PRICED and LOUD. It's so loud that you can't even enjoy the over priced food. My bf and I paid 100 for breakfast and coffee and orange juice.",
        nope=4,
    )
    review216 = Review(
        user_id=21,
        business_id=69,
        review="Say wtf? I just paid over 100 for breakfast and I am paying for a health benefit surcharge ??? Wtf?",
        nope=5,
    )
    review217 = Review(
        user_id=22,
        business_id=70,
        review="This place sucks on service, however I do love the atmosphere but this is the second time they mess up my order. I clearly ordered chicken with my meal that had pasta, the manager came and just picked up his shoulders and still charged me full price for my dinner.",
        nope=5,
    )
    review218 = Review(
        user_id=23,
        business_id=70,
        review="Basically I will not be going back here til they change up there service process.. the system is terrible and very impersonal. You order food from your phone! They leave a paper menu but not all items on menu are actually available .. then you have to send a text message to some phone number to find they don't have that item and then you have to start ordering your food AGAIN.",
        nope=5,
    )
    review219 = Review(
        user_id=24,
        business_id=70,
        review="This place is over rated. Food is very good, HOWEVER,",
        nope=2,
    )
    review220 = Review(
        user_id=25,
        business_id=70,
        review="The food has been good in my visits so I'm not rating BL on that. The service and availability of product was disappointing. Was there on Saturday 4/7 and they had ran out of a few items so I didn't make a big deal.",
        nope=3,
    )
    review221 = Review(
        user_id=26,
        business_id=71,
        review="Not impressed in any way. So many issues here. Must have a smart phone to order. No servers. No password to connect to WiFi. Had to flag someone down to get that. Menu is so small and nothing is gluten free.",
        nope=4,
    )
    review222 = Review(
        user_id=27,
        business_id=72,
        review="After waiting 45 minutes for the chocolate soufflé, and watching many soufflés pass by, the manager came up to us to sadly inform us that our order was not in yet. Unfortunately, it would have required another 20 minutes to get that soufflé and it was already too late at that point. If you order a soufflé, ask for a status update every 5 minutes!!!",
        nope=4,
    )
    review223 = Review(
        user_id=28,
        business_id=72,
        review="My boyfriend and I went for dinner. We expected to wait, but didn't expect to be ignored. I said hello and no one greeted us or told us where to wait.",
        nope=5,
    )
    review224 = Review(
        user_id=29,
        business_id=72,
        review="Place looks great from the outside and the foyer but what a mess after you sit down and order.  We had table of 5.  3 ordered pizza and the rest ordered dinner.",
        nope=1,
    )
    review225 = Review(
        user_id=30,
        business_id=73,
        review="Tiramisu is good. But the service is bad. Felt the discrimination! Have to say, as a Chinese, I know how to tip and how much percentage I should give!",
        nope=4,
    )
    review226 = Review(
        user_id=16,
        business_id=73,
        review="NAH NO WAY NOPE!!!",
        nope=5,
    )
    review227 = Review(
        user_id=17,
        business_id=73,
        review="Don't Believe The Hype! don't, don't, don't!",
        nope=5,
    )
    review228 = Review(
        user_id=18,
        business_id=73,
        review="How many different ways can I describe overpriced? This service is a one by the way the staff is very helpful and friendly but the food versus the cost not so much",
        nope=4,
    )
    review229 = Review(
        user_id=19,
        business_id=74,
        review="First of all we came here at 11:01 and server told me they don't serve brackfast anymore for whole 1 minute.  I ask if I can order Brackfast potato as a side to my Sandwich, server told me no. No more brackfast and they can give me French fries - yesterday's French fries..",
        nope=5,
    )
    review230 = Review(
        user_id=20,
        business_id=74,
        review="I rarely give poor comments specially after I highly recommended this restaurant to my wife and her friends. The hostess was nice and kind and explained to my wife that breakfast had been over and if it was ok for them to have the lunch menu.",
        nope=5,
    )
    review231 = Review(
        user_id=21,
        business_id=75,
        review="It's extremely busy and not as good/delicious as I expected! It's great coffee and has good pastries but I do not understand what is the fuss about, first it takes forever to get a table and it's crammed at all time.",
        nope=5,
    )
    review232 = Review(
        user_id=22,
        business_id=75,
        review="The host/hostesses are not friendly. The gardens are not open even though the website says nothing about it being closed.",
        nope=4,
    )
    review233 = Review(
        user_id=23,
        business_id=75,
        review="Bakery gets no stars ! Had me looking dumb for almost 20 min on the side waiting to order when finally I went back and asked where do I order ??",
        nope=4,
    )
    review234 = Review(
        user_id=24,
        business_id=75,
        review="I come here regularly, but what just happened is very disappointing.",
        nope=3,
    )
    review235 = Review(
        user_id=25,
        business_id=76,
        review="Don't Believe The Hype! don't, don't, don't!",
        nope=5,
    )
    review236 = Review(
        user_id=26,
        business_id=76,
        review="This review is for rude service at the dessert counter.  It wasn't crowded when I had entered. However, the workers basically ignored us for a good 2 minutes before finally acknowledging our presence.",
        nope=5,
    )
    review237 = Review(
        user_id=27,
        business_id=76,
        review="Wow just went there today. The waitress with the blue eyes and hair in a pony tail just got mad at me for not getting MY order right. Favorite restaurant? Only if I get another waiter or waitress.",
        nope=4,
    )
    review238 = Review(
        user_id=28,
        business_id=77,
        review="Really disappointing. Went on my birthday, after dinner, hoping to try some nice desserts.",
        nope=4,
    )
    review239 = Review(
        user_id=29,
        business_id=77,
        review="Wow has this place gone downhill. Absolute swill. The bakery has good stuff but the restaurant is serving garbage.",
        nope=5,
    )
    review240 = Review(
        user_id=30,
        business_id=77,
        review="What's all the hype?  Minus the tall ceilings, not much going on.  Their decor is half opened kitchen and opened pizza station.  Everything's over priced from pastries to everything on the menu.",
        nope=5,
    )
    review241 = Review(
        user_id=16,
        business_id=78,
        review="The food is quite good but the service is horrible. After ordering, it took nearly 30 minutes to get a salad.",
        nope=4,
    )
    review242 = Review(
        user_id=17,
        business_id=78,
        review="I have no idea if the food here is any good. It was so noisy and hot inside at 10pm that we left, despite a projected wait of only 15 minutes.",
        nope=5,
    )
    review243 = Review(
        user_id=18,
        business_id=78,
        review="They didn't appreciate our business so we took our money elsewhere! I have to wait in line twice to buy 40 dollars worth of macarons...no thank you!",
        nope=4,
    )
    review244 = Review(
        user_id=19,
        business_id=79,
        review="Don't Believe The Hype! don't, don't, don't!",
        nope=5,
    )
    review245 = Review(
        user_id=20,
        business_id=79,
        review="Unbelievably slow. Give completely useless estimate of how long pizza will take. Staff seems not to care.",
        nope=5,
    )
    review246 = Review(
        user_id=21,
        business_id=79,
        review="I visited this restaurant second time and was very disappointed on this experience. The breakfast time until 11 A.M., but I came at 11:00, they served with lunch menu. A meal wasn't taste,  not fresh. A clubhouse sandwich  was very dry. Don't recommend.",
        nope=4,
    )
    review247 = Review(
        user_id=22,
        business_id=80,
        review="Food was great; on the contrary, service at the dessert counter lacked professionalism.",
        nope=2,
    )
    review248 = Review(
        user_id=23,
        business_id=81,
        review="Waiter on the phone with some other client, we were never offered water. My egg benedict was more like hard boiled egg, and made me wonder if it was freshly made. Used to be my favorite place. The service didn't match the price.",
        nope=5,
    )
    review249 = Review(
        user_id=24,
        business_id=82,
        review="If you have a child that needs a diaper change, then you are out of luck. They have no diaper changing station for mothers with small children.",
        nope=4,
    )
    review250 = Review(
        user_id=25,
        business_id=83,
        review="This place is overrated. The staff is rude, and the food is mediocre at best.",
        nope=3,
    )
    review251 = Review(
        user_id=26,
        business_id=84,
        review="Dinner was a huuuuuge flop here esp. for all the positive reviews from yelp and the overly priced menu and terrible service.",
        nope=5,
    )
    review252 = Review(
        user_id=27,
        business_id=85,
        review="Don't Believe The Hype! don't, don't, don't!",
        nope=5,
    )
    review253 = Review(
        user_id=28,
        business_id=86,
        review="OVERRATED....the food was mediocre. We were very disappointed with our order of Steak Frites and Margherita pizza. If you're looking for quality food this is not the place for you",
        nope=4,
    )
    review254 = Review(
        user_id=29,
        business_id=87,
        review="Im so pissed!!!! They didnt forget to charge me but theu forgot to put the macaroons in my bag!!! They said theyl refund me! We'll see",
        nope=5,
    )
    review255 = Review(
        user_id=30,
        business_id=88,
        review="The food here is good. That's clear. The desserts are exceptional. The atmosphere is also wonderful.",
        nope=1,
    )
    review256 = Review(
        user_id=16,
        business_id=89,
        review="The wait is ridiculous. If you bring a party bigger then 4 you have to wait over 1.5 hours. The food hetter be worth it!",
        nope=3,
    )
    review257 = Review(
        user_id=17,
        business_id=90,
        review="Don't Believe The Hype! don't, don't, don't!",
        nope=5,
    )
    review258 = Review(
        user_id=18,
        business_id=91,
        review="In my quest to find the best cookie in the Mission, I stopped by Arizmendi since it is one of the more talked about bakeries in the area. I don't really see what all the hype is about.  ",
        nope=4,
    )
    review259 = Review(
        user_id=19,
        business_id=91,
        review="This place sucks. I was looking for a Orange Italian Soda so I called and was told they had Orange Italian Soda's. When I got their they do not even sell Orange Italian Soda's. It was very frustrating with the traffic and lack of parking.",
        nope=5,
    )
    review260 = Review(
        user_id=20,
        business_id=92,
        review="Unbelievably slow. Give completely useless estimate of how long pizza will take. Staff seems not to care.",
        nope=5,
    )
    review261 = Review(
        user_id=21,
        business_id=93,
        review="Wow. This place was too noisy. It was like a high school cafeteria.",
        nope=5,
    )
    review262 = Review(
        user_id=22,
        business_id=93,
        review="I'm not dumb enough to get blinded by society. So because of the reviews i came here with high expectations.",
        nope=5,
    )
    review263 = Review(
        user_id=23,
        business_id=94,
        review="I think this place is ver overrated! Had the fruit and nut bread and was very disappointed with the quality the coffee was terrible as well! We tried the macaroons and they tasted very bland!",
        nope=5,
    )
    review264 = Review(
        user_id=24,
        business_id=95,
        review="This place is phony!  I don't totally hate this place. But it is not what it seems to be. It's just a trendy hang out place, that's really too loud due to the echo in the building.",
        nope=5,
    )
    review265 = Review(
        user_id=25,
        business_id=96,
        review="This is not a place to take a date",
        nope=3,
    )
    review266 = Review(
        user_id=26,
        business_id=97,
        review="I will never return here, and I've been a regular for the last year or so. Took an out of town visitor here on Easter Sunday after telling him how great this place is- things seemed off to a great start, but when our food was delivered, it was ice cold...for all three of us. My eggs were completely underdone, my steak was cold, and they both had lobster hash with pieces of lobster so cold",
        nope=5,
    )
    review267 = Review(
        user_id=27,
        business_id=98,
        review="disappointed. this is their second time done this so i realized this issue need to be mentioned: slow and inefficient work flow to make coffee although their coffee is the best as my preference.",
        nope=5,
    )
    review268 = Review(
        user_id=28,
        business_id=99,
        review="I come here for the first time, me and my husband order pizza and was delicious. I give one star because i buy a bunch of stuff from the bakery , i didn't see when they put what i order in the box but i trust them.",
        nope=2,
    )
    review269 = Review(
        user_id=29,
        business_id=99,
        review="This review is specifically for the waiters and waitress and seating hosts and hostesses. NOT for their pastries or for their food.  ",
        nope=4,
    )
    review270 = Review(
        user_id=30,
        business_id=100,
        review="Don't Believe The Hype! don't, don't, don't!",
        nope=5,
    )

    db.session.add(review1)
    db.session.add(review2)
    db.session.add(review3)
    db.session.add(review4)
    db.session.add(review5)
    db.session.add(review6)
    db.session.add(review7)
    db.session.add(review8)
    db.session.add(review9)
    db.session.add(review10)
    db.session.add(review11)
    db.session.add(review12)
    db.session.add(review13)
    db.session.add(review14)
    db.session.add(review15)
    db.session.add(review16)
    db.session.add(review17)
    db.session.add(review18)
    db.session.add(review19)
    db.session.add(review20)
    db.session.add(review21)
    db.session.add(review22)
    db.session.add(review23)
    db.session.add(review24)
    db.session.add(review25)
    db.session.add(review26)
    db.session.add(review27)
    db.session.add(review28)
    db.session.add(review29)
    db.session.add(review30)
    db.session.add(review31)
    db.session.add(review32)
    db.session.add(review33)
    db.session.add(review34)
    db.session.add(review35)
    db.session.add(review36)
    db.session.add(review37)
    db.session.add(review38)
    db.session.add(review39)
    db.session.add(review40)
    db.session.add(review41)
    db.session.add(review42)
    db.session.add(review43)
    db.session.add(review44)
    db.session.add(review45)
    db.session.add(review46)
    db.session.add(review47)
    db.session.add(review48)
    db.session.add(review49)
    db.session.add(review50)
    db.session.add(review51)
    db.session.add(review52)
    db.session.add(review53)
    db.session.add(review54)
    db.session.add(review55)
    db.session.add(review56)
    db.session.add(review57)
    db.session.add(review58)
    db.session.add(review59)
    db.session.add(review60)
    db.session.add(review61)
    db.session.add(review62)
    db.session.add(review63)
    db.session.add(review64)
    db.session.add(review65)
    db.session.add(review66)
    db.session.add(review67)
    db.session.add(review68)
    db.session.add(review69)
    db.session.add(review70)
    db.session.add(review71)
    db.session.add(review72)
    db.session.add(review73)
    db.session.add(review74)
    db.session.add(review75)
    db.session.add(review76)
    db.session.add(review77)
    db.session.add(review78)
    db.session.add(review79)
    db.session.add(review80)
    db.session.add(review81)
    db.session.add(review82)
    db.session.add(review83)
    db.session.add(review84)
    db.session.add(review85)
    db.session.add(review86)
    db.session.add(review87)
    db.session.add(review88)
    db.session.add(review89)
    db.session.add(review90)
    db.session.add(review91)
    db.session.add(review92)
    db.session.add(review93)
    db.session.add(review94)
    db.session.add(review95)
    db.session.add(review96)
    db.session.add(review97)
    db.session.add(review98)
    db.session.add(review99)
    db.session.add(review100)
    db.session.add(review101)
    db.session.add(review102)
    db.session.add(review103)
    db.session.add(review104)
    db.session.add(review105)
    db.session.add(review106)
    db.session.add(review107)
    db.session.add(review108)
    db.session.add(review109)
    db.session.add(review110)
    db.session.add(review111)
    db.session.add(review112)
    db.session.add(review113)
    db.session.add(review114)
    db.session.add(review115)
    db.session.add(review116)
    db.session.add(review117)
    db.session.add(review118)
    db.session.add(review119)
    db.session.add(review120)
    db.session.add(review121)
    db.session.add(review122)
    db.session.add(review123)
    db.session.add(review124)
    db.session.add(review125)
    db.session.add(review126)
    db.session.add(review127)
    db.session.add(review128)
    db.session.add(review129)
    db.session.add(review130)
    db.session.add(review131)
    db.session.add(review132)
    db.session.add(review133)
    db.session.add(review134)
    db.session.add(review135)
    db.session.add(review136)
    db.session.add(review137)
    db.session.add(review138)
    db.session.add(review139)
    db.session.add(review140)
    db.session.add(review141)
    db.session.add(review142)
    db.session.add(review143)
    db.session.add(review144)
    db.session.add(review145)
    db.session.add(review146)
    db.session.add(review147)
    db.session.add(review148)
    db.session.add(review149)
    db.session.add(review150)
    db.session.add(review151)
    db.session.add(review152)
    db.session.add(review153)
    db.session.add(review154)
    db.session.add(review155)
    db.session.add(review156)
    db.session.add(review157)
    db.session.add(review158)
    db.session.add(review159)
    db.session.add(review160)
    db.session.add(review161)
    db.session.add(review162)
    db.session.add(review163)
    db.session.add(review164)
    db.session.add(review165)
    db.session.add(review166)
    db.session.add(review167)
    db.session.add(review168)
    db.session.add(review169)
    db.session.add(review170)
    db.session.add(review171)
    db.session.add(review172)
    db.session.add(review173)
    db.session.add(review174)
    db.session.add(review175)
    db.session.add(review176)
    db.session.add(review177)
    db.session.add(review178)
    db.session.add(review179)
    db.session.add(review180)
    db.session.add(review181)
    db.session.add(review182)
    db.session.add(review183)
    db.session.add(review184)
    db.session.add(review185)
    db.session.add(review186)
    db.session.add(review187)
    db.session.add(review188)
    db.session.add(review189)
    db.session.add(review190)
    db.session.add(review191)
    db.session.add(review192)
    db.session.add(review193)
    db.session.add(review194)
    db.session.add(review195)
    db.session.add(review196)
    db.session.add(review197)
    db.session.add(review198)
    db.session.add(review199)
    db.session.add(review200)
    db.session.add(review201)
    db.session.add(review202)
    db.session.add(review203)
    db.session.add(review204)
    db.session.add(review205)
    db.session.add(review206)
    db.session.add(review207)
    db.session.add(review208)
    db.session.add(review209)
    db.session.add(review210)
    db.session.add(review211)
    db.session.add(review212)
    db.session.add(review213)
    db.session.add(review214)
    db.session.add(review215)
    db.session.add(review216)
    db.session.add(review217)
    db.session.add(review218)
    db.session.add(review219)
    db.session.add(review220)
    db.session.add(review221)
    db.session.add(review222)
    db.session.add(review223)
    db.session.add(review224)
    db.session.add(review225)
    db.session.add(review226)
    db.session.add(review227)
    db.session.add(review228)
    db.session.add(review229)
    db.session.add(review230)
    db.session.add(review231)
    db.session.add(review232)
    db.session.add(review233)
    db.session.add(review234)
    db.session.add(review235)
    db.session.add(review236)
    db.session.add(review237)
    db.session.add(review238)
    db.session.add(review239)
    db.session.add(review240)
    db.session.add(review241)
    db.session.add(review242)
    db.session.add(review243)
    db.session.add(review244)
    db.session.add(review245)
    db.session.add(review246)
    db.session.add(review247)
    db.session.add(review248)
    db.session.add(review249)
    db.session.add(review250)
    db.session.add(review251)
    db.session.add(review252)
    db.session.add(review253)
    db.session.add(review254)
    db.session.add(review255)
    db.session.add(review256)
    db.session.add(review257)
    db.session.add(review258)
    db.session.add(review259)
    db.session.add(review260)
    db.session.add(review261)
    db.session.add(review262)
    db.session.add(review263)
    db.session.add(review264)
    db.session.add(review265)
    db.session.add(review266)
    db.session.add(review267)
    db.session.add(review268)
    db.session.add(review269)
    db.session.add(review270)
    db.session.commit()


def undo_reviews():
    db.session.execute('TRUNCATE reviews RESTART IDENTITY CASCADE;')
    db.session.commit()
