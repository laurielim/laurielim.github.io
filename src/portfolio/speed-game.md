---
title: "Speed Game"
summary: "A simple game made with JavaScript which I update as I learn more about web development."
cardCtaText:
cardCtaLink:
displayOrder: 0
quickLinks:
- title: Overview
  url: "#overview"
- title: Process
  url: "#process"
- title: Result
  url: "#result"
- title: "Repo"
  url: "https://github.com/laurielim/laurielim.github.io/tree/main/speed-game"
- title: "Live Site"
  url: "https://laurielim.github.io/speed-game/"
tags: ['school']
---

<figure>
  {% image
    "src/static/portfolio-assets/Screenshot-speed-game-1.jpg",
    "Screenshot of speed-game instructions",
    false
  %}
</figure>

<h2 id="overview">Overview</h2>

### Purpose & Goal
Speed Game was a task from [the JavaScript course I did](https://github.com/laurielim/REACT21K_JAVASCRIPT) at Business College Helsinki. This is the second live webpage I made during the course. My mom still plays the game to pass the time and I think that's my best achievement so far.

### Web Stack
This page is built with plain HTML, CSS and JavaScript. During my React course, I did recreate the basic [Speed Game using React](https://github.com/laurielim/REACT21K_REACT_JS/tree/main/task-04-speed-game). However, I wanted to highlight this one because it contains iterations as I learn more about web development.

---

<figure>
  {% image
    "src/static/portfolio-assets/Screenshot-speed-game-2.jpg",
    "Screenshot of the homepage"
  %}
</figure>

<h2 id="process">Process</h2>

### Design
Around the time I was working on this, I was working with the [PokéAPI](https://pokeapi.co/) for another lesson. Hence I decided to make it Pokemon themed, using the sprites from the API, and the [pokemon color scheme](https://www.schemecolor.com/pokemon-colors.php#:~:text=The%20Pokemon%20Color%20Scheme%20palette,and%20Gold%20Foil%20(%23B3A125).) as my color palette.

### Development
Part of the development was done in class, after which we were tasked to complete it. This included styling the game and adding images and sounds. Once I met the basic task requirements, I added elements I thought would be nice for a game.

- I made 3 difficulty levels, each with a different background music.
- For mobile users, there is a setting menu for choosing the level.
- The "Game Over" music depends on the player's score.
- After reading about UX related to sound effects, I made it possible for users to turn sound on and off.
- Session highscore and sound settings are stored
- Based on user feedback, I included game instructions which popup for first time visitors.

As I mentioned, this webpage contains iterations. And as I continue learning, there might be further iterations.

---

<figure>
  {% image
    "src/static/portfolio-assets/Screenshot-speed-game-3.jpg",
    "Screenshot of a started game."
  %}
</figure>

<h2 id="result">Result</h2>

### Lessons Learnt
This is a simple webpage but I put into practice various fundamental elements of JavaScript. Notably, handling arrays, DOM manipulation and the Event loop. I also learnt to not assume what is "obvious" or not. When I first shared the webpage, I was asked multiple times how to play the game. Just adding instructions greatly improved UX and highlighted for me the importance of user feedback.

---