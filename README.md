# ![nope](https://user-images.githubusercontent.com/105745865/196279933-2feae36c-6493-406e-a8b3-795d31f51456.png)

Nope is a fullstack web application, inspired by [Yelp](https://yelp.com). Our rating system is opposite the typical norm. The more stars (known to us as nopes) you have, the worse the business is. We've noticed that users are typically more honest and put more thought into bad reviews than good reviews, hence the name Nope. Visit our site as a passive user, active user, or business owner. As a business owner you can recieve feedback known as grumbles, dedicated to shedding light on how the business can improve. As an active user you can read, post, delete, and edit grumbles or become a business owner yourself! As a passive user you may not write grumbles or leave nopes but you may visit business pages to read grumbles. 

**Live site: [Nope](http://nope-yelp.herokuapp.com)**

# 🔗 Wiki Links
- [API Documentation](https://github.com/samsuhhh/Nope-Yelp/wiki/API-Documentation)
- [Database Schema](https://github.com/samsuhhh/Nope-Yelp/wiki/Database-Schema)
- [Feature List](https://github.com/samsuhhh/Nope-Yelp/wiki/Feature-List)
- [Redux Store Shape](https://github.com/samsuhhh/Nope-Yelp/wiki/Redux-State)
- [User Stories](https://github.com/Samsuhhh/Nope-Yelp/wiki/User-Stories)


# 🖥️ Technologies
### Frameworks, Platforms, Libraries:
[![My Skills](https://skillicons.dev/icons?i=py,flask,js,react)](http://nope-yelp.herokuapp.com)

[![My Skills](https://skillicons.dev/icons?i=redux,postgres,docker,sqlite)](http://nope-yelp.herokuapp.com)

[![My Skills](https://skillicons.dev/icons?i=css,html,heroku)](http://nope-yelp.herokuapp.com)

- Python, Flask, JavaScript, React
- Redux, Postgres, Docker, SQLite
- CSS3, HTML5, Heroku

### Asset Design:
[![My Skills](https://skillicons.dev/icons?i=svg,ps,ai,css)](http://nope-yelp.herokuapp.com)

Assets utilized and/or created by:

- SVG, Adobe Photoshop, Adobe Illustrator, CSS3


# 📃 Pages

## 💦 Splash Page
![nope-landing](https://user-images.githubusercontent.com/105745865/197316610-4d8b99d9-9771-484a-98fe-8525242fbf29.gif)

## 🔍 Search Function
![nope-search](https://user-images.githubusercontent.com/105745865/197316723-51f9468a-cb11-4f69-974b-f672d7562a65.gif)
### Search by:
- Name
- Keywords
- Tag Names
- Cities
- Types of food

## 📷 Filter Search Function
![nope-filter](https://user-images.githubusercontent.com/105745865/197316865-654ef89f-c24c-48cf-8aa9-03b7e727e2f4.gif)
### Filter by:
- Price

## 🐝 Business Page
![nope-bus-page-photos](https://user-images.githubusercontent.com/105745865/197317160-7af4ee07-a017-49f0-a9ae-2813133346fc.gif)
### Owner of Business:
- Delete Photos
- Add Photos
- Edit Business Details
- Delete your Business

### User
- Leave a grumble
- Edit/Delete grumble

## 💢 Grumbles
![nope-bus-leave-review](https://user-images.githubusercontent.com/105745865/197317207-0f2c2012-27f9-4cc1-855f-2f95828f8013.gif)

## 🏢 Create a Business
![nope-for-businesses](https://user-images.githubusercontent.com/105745865/197317331-479844a0-5585-44c1-93e4-196fdaad996e.gif)

## ⛹️ User Profile
![nope-user](https://user-images.githubusercontent.com/105745865/197317454-7efe1571-bcfa-4d99-af3f-5877e98236e2.gif)
- Display your Avatar
- Check your reviews
- Check your businesses

# ▶️ Get Started

### Clone repository.

- SSH:

```
git@github.com:Samsuhhh/Nope-Yelp.git
```

- HTTPS:

```
https://github.com/Samsuhhh/Nope-Yelp.git
```

- CLI:
```
gh repo clone Samsuhhh/Nope-Yelp
```

### Install dependencies & Prep database.
- In the project directory you will run:

```
pipenv install
```

This command will install packages into the pipenv virtual environment and update your Pipfile.

- Create a .env file in said current directory.
- Paste in SECRET_KEY and DATABASE_URL configurations.

```
SECRET_KEY=<<SECRET_KEY>>
DATABASE_URL=sqlite:///dev.db
```

The .env file contains the individual user environment variables that override the variables set in the /etc/environment file. You can customize your environment variables as desired by modifying your .env file. In this case we are setting the SECRET_KEY and the DATABASE_URL.

- While in your root directory run:

```
pipenv shell
```

This will create a new active pip environment for  you to run your backend.

- Followed by:

```
flask db upgrade
flask seed all
pipenv run flask run
```

Because this application uses SQLite, the upgrade command will detect that a database does not exist and will create it. While now you are creating the database you are also seeding in our 105 businesses, 315 business images, 30 users, and all of their 270 grumbles/nopes.

- Navigate to your /Nope-Yelp/react-app/ folder and create another .env file.
- Paste in the REACT_APP_BASE_URL

```
REACT_APP_BASE_URL=http://localhost:5000
```
We'll be pasting in the path to server for frontend into this newly created environment file.

- All there is to do is:

```
npm install
```
This command installs a package and any packages that it depends on. Since the package has a package-lock the installation of dependencies will be driven by that. If you take a peak into your package.json file you can see all the dependencies our project is installing.

```
npm start
```
This runs a predefined command specified in the "start" property of a package's "scripts" object in our case it is:

```
"start": "react-scripts start"
```
DO NOT paste this anywhere. The code above is already provided in our package.json file!

*And voilà!*

# 📱 Contacts

|        | Jake Matillano |  Sam Suh  | Alex Dam | Gary Song |
|--------|----------------|-----------|----------|-----------|
| <img src=https://i.imgur.com/2ffGJqj.png width=20> | [LinkedIn](https://www.linkedin.com/in/jake-matillano-b141811a3/) | [LinkedIn](https://www.linkedin.com/) | [LinkedIn](https://www.linkedin.com/in/alexander-dam-a45b8821a/) | [LinkedIn](https://www.linkedin.com/in/gary-song-96b071246/) |
| <img src=https://i.imgur.com/w9xwrCT.png width=20> | [GitHub](https://github.com/jakezmat) | [GitHub](https://github.com/Samsuhhh) | [GitHub](https://github.com/Aldam55) | [GitHub](https://github.com/garydsong) |

# 🥚🥚🥚 For checking out our project we wanted to say 🥚🥚🥚

![thankyoueggs](https://user-images.githubusercontent.com/105745865/197347731-a3116dbe-0bec-444c-ae22-a82f69c90717.png)
