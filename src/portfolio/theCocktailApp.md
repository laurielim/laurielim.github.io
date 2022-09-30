---
title: "TheCocktailApp"
summary: "A cocktail recipe web application built with React and Symfony. This is the course project I did while learning Reactjs."
cardCtaText: See Project
cardCtaLink: /portfolio/thecocktailapp/
displayOrder: 1
featured: true
quickLinks:
- title: Overview
  url: "#overview"
- title: Process
  url: "#process"
- title: Result
  url: "#result"
- title: "Repo"
  url: "https://github.com/laurielim/REACT21K_REACT_JS_PROJECT"
- title: "Live Site"
  url: "https://laurielim-thecocktailapp.netlify.app/"
- title: "API"
  url: "https://laurielim-thecocktailapp-api.herokuapp.com/"
tags: ['selected']
---

<figure>
  {% image
    "src/static/portfolio-assets/Screenshot-theCocktailApp-1.jpg",
    "Screenshot of theCocktailApp homepage",
    false
  %}
</figure>

<h2 id="overview">Overview</h2>

### Purpose & Goal
TheCocktailApp is the course project I did while I was [learning React](//github.com/laurielim/REACT21K_REACT_JS) at Business College Helsinki. The goal of this project was to practice what I learnt. As I was [learning PHP](//github.com/laurielim/REACT21K_PHP) and data structures in parallel, I also made an [API for my recipes](//laurielim-thecocktailapp-api.herokuapp.com/) which interacts with an SQL database.

### Web Stack
This web app is built with React and hosted on Netlify. The backend is built using the Symfony framework and is hosted on Heroku. The IBA official recipes are stored in a JSON file while posted recipes are stored in a PostgreSQL database, as available on Heroku.

---

<figure>
  {% image
    "src/static/portfolio-assets/Screenshot-theCocktailApp-2.jpg",
    "Screenshot of the page of recipes from theCocktailApp"
  %}
</figure>

<h2 id="overview">Process</h2>

### Design
The initial idea was to make a website for cooking recipes. However I wanted to make use of [TheCocktailDB](//www.thecocktaildb.com/) which is an open, crowd-sourced database of drinks and cocktails from around the world. Based on this, I desgined [the app on Figma](//www.figma.com/file/qVjZ8IDxZnayehZwQBCsev/TheCocktailApp?node-id=0%3A1). In the end, I made my own API and database but the project desgin stayed the same.

### Development
This website was developed over 8 weeks. I started with the planning and design of the front end. Over a couple of weeks, I translated those plans into actual code. After that I started putting together the data for my recipes and eventually set up the back end.

For the React app:

- I worked with both functional and class components.
- I became familiar with React Hooks.
- I used Bootstrap to build my form.

Meanwhile, for the Symfony app:

- I created routes to get and post data.
- I handled both JSON and SQL data.
- I made my first forey into documenting an API.

---

<figure>
  {% image
    "src/static/portfolio-assets/Screenshot-theCocktailApp-3.jpg",
    "Screenshot of a recipe page from theCocktailApp on mobile"
  %}
</figure>

<h2 id="result">Result</h2>

### Lessons Learnt
Working on this project definitely made me realise the importance of planning before opening the code editor. It's easier to implements things over a blank slate as opposed to existing code.

We were introduced to component libraries towards the end of the course and asked to use one in the project. Bootstrap broke some of my styling and I spent more time fixing that than I would have if I had used it from the beginning.

Knowing what data structure to work with from the start would also have been ideal. I spent some time putting my data into a JSON format but then had to create an SQL database. I learnt that there is no simple way to convert JSON files into SQL data which is why I chose to use both in this case.

In some way, this is an example of learning things the hard way. Nonetheless, planning has become an essential part of my development process and it is reflected in future projects.

---