---
title: "Performance Plastics"
summary: "Originally built on Wordpress and zero knowledge of web development. This is the first website I ever made."
cardCtaText:
cardCtaLink:
caseStudy: true
quickLinks:
- title: Overview
  url: "#overview"
- title: Process
  url: "#process"
- title: Result
  url: "#result"
- title: "Repo"
  url: "https://github.com/laurielim/eleventy-pp"
- title: "Live Site"
  url: "https://performance.mu/"
tags: ['selected']
---

<figure>
  {% image
    "src/static/portfolio-assets/Screenshot-performance-plastics-1.png",
    "Screenshot of the frontpage.",
    false
  %}
</figure>

<h2 id="overview">Overview</h2>

### Purpose & Goal
In 2019, I made this company website on Wordpress, using the website builder Elementor. Now that I have experience in web development, I wanted to rebuild the website with a modern techstack focusing on performance and accessibility.

### Web Stack
The new website is built with [static site generator Eleventy](https://www.11ty.dev/). While most of the content is static, the website also hosts a product catalogue that changes occassionally. To allow for a content editor to update the catalogue, I setup [Decap CMS](https://decapcms.org/) (formally Netlify CMS). The site is hosted on a private server although staging is available on Netlify and deployed via Github Actions.

---

<figure>
  {% image
    "src/static/portfolio-assets/Screenshot-performance-plastics-2.png",
    "Screenshot of a product type page."
  %}
</figure>

<h2 id="process">Process</h2>

### Design

The original website was put together without knowledge of web design and development. I used it as a starting point and improve the things based on best practices and what I have learnt so far.

The new UI is simpler. For example, the old content sidebar, which was some sort of accordion available from Elementor, has been replaced with a fixed container containing links.

Site building tools provide a lot of functionalities and I found myself back then trying to use too many of them. I mistakenly believed that it would make the site appear more modern. I have since learnt that less is more and it is visible via the website's sleek new design.

### Developmemt

Having previously transformed my portfolio website from a plain html/css site to a statically built site, development was relatively straightforward. I had all the tools necessary to build a site the way I envisioned and to move away from Wordpress and WYSIWYG site building tools. Most of my time was in fact spent on managing the content.

Highlights of this project are:
- Some content is editable via Decap CMS
- The site is multilingual, available in English and French
- The "back to top" button uses an IntersectionObserver to toggle visibility

---

<figure>
  {% image
    "src/static/portfolio-assets/Screenshot-performance-plastics-3.png",
    "Screenshot of the contact page."
  %}
</figure>

<h2 id="result">Result</h2>

### Lessons Learnt
Making a multilngual website presents it's own set of challenges. I learn about Eleventy's i18n tools, how to organize my content and how to create a statically built language switcher.

Working with Decap CMS was also very interesting as it is a single-page React app that is configured via a .yml file. It was challenging yet fun to integrate this CMS into the project. It took some time to find the best combination for it to work with multiple languages.

This project really solidified my appreciation for web development. Being able to shape a website exactly the way I want is very satistfying and proof of how much I have learnt since 2019.

---
