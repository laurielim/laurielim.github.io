---
title: "One Hit KO shop"
summary: "A serverless e-commerce website built with 11ty, Netlify and Stripe. This is a weekend project."
cardCtaText:
cardCtaLink:
displayOrder: 3
featured: true
quickLinks:
- title: Overview
  url: "#overview"
- title: Process
  url: "#process"
- title: Result
  url: "#result"
- title: "Live Site"
  url: "https://ohkshop.netlify.app/"
tags: ['selected']
---

<figure>
  {% image
    "src/static/portfolio-assets/Screenshot-ohkshop-1.png",
    "Screenshot of One Hit KO shops homepage",
    false
  %}
</figure>

<h2 id="overview">Overview</h2>

### Purpose & Goal
One Hit KO shop was created to showcase and sell handmade earrings and pins. The primary purpose was to provide an avenue for the founder's hobby project to reach a wider audience and establish a small business.

Additionally, the project served as an opportunity to gain practical experience in using the Stripe API and Netlify functions, based on a [blog post by Sia Karamalegos](https://sia.codes/posts/serverless-ecommerce-store/) that explored building a Jamstack store with Stripe, Netlify, and my preferred static site generator, Eleventy.

### Web Stack
The website was developed using [Eleventy v2.0.1](https://www.11ty.dev/blog/eleventy-v2/), a static site generator that I was already familiar with, making it an ideal choice for this project. The site incorporated a simple design with custom fonts from Google Fonts and a color scheme chosen by the founder. For product management and payment processing, [Stripe](https://stripe.com) was employed, while [Netlify Functions](https://www.netlify.com/products/functions/) was used to handle checkout sessions and update the catalogue once a product is purchased. The site is deployed on Netlify and also includes a contact form which is handled by [Netlify Forms](https://www.netlify.com/products/forms/).

---

<figure>
  {% image
    "src/static/portfolio-assets/Screenshot-ohkshop-2.png",
    "Screenshot of the contact page of One Hit KO shop"
  %}
</figure>

<h2 id="process">Process</h2>

### Design
The design approach for the One Hit KO shop centered around simplicity and effective presentation of the handcrafted products. It is inspired by [Jimmy Nelson's bookshop](https://www.jimmynelson.com/shop/). The user interface is intuitive, guiding visitors seamlessly through the browsing and checkout process.

### Development
The development phase of the project was marked by two notable highlights.

- Setting up checkout sessions using the Stripe API, enabling a smooth and secure purchasing experience for customers.
- Leveraging the Stripe webhook service, I created a Netlify function that disables purchased products and triggers site rebuilds whenever a purchase is successful, ensuring that the store's content is always up-to-date.

The learning process during development was rich and rewarding. I gained valuable insights into how the Stripe API works, mastering the integration of the checkout page and product management through the Stripe dashboard. Additionally, I explored and implemented Netlify Forms, effectively creating a contact page to handle special requests from customers.

---

<figure>
  {% image
    "src/static/portfolio-assets/Screenshot-ohkshop-3.png",
    "Screenshot of the checkout page"
  %}
</figure>

<h2 id="result">Result</h2>

### Lessons Learnt
Building the One Hit KO shop was not only an opportunity to turn a hobby into a business but also a learning opportunity. Understanding and working with the Stripe API allowed me to implement a secure and reliable payment system for customers. Learning to create Netlify functions allowed me to automate tasks and optimize site performance.

I appreciated the process of integrating design choices made by the founder into the website, ensuring a personalized touch. The project's success reinforced my proficiency with Eleventy, further solidifying my expertise in using the static site generator for future endeavors.

---
