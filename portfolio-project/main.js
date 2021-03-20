let header = document.getElementById("header");
let progressBarContainer = document.querySelector(".scroll-progress-container");
let logo = document.getElementById("logo");
let btnMenu = document.getElementById("btnMenu");
let nav = document.querySelector("nav");
let navItems = document.querySelectorAll("nav li");
let openNav = false;

const minHeader = () => {
  if (
    document.body.scrollTop > 200 ||
    document.documentElement.scrollTop > 200
  ) {
    progressBarContainer.style.display = "block";
    if (window.matchMedia("(max-width: 576px)").matches) {
      header.style.backgroundColor = "#05080fee";
    } else if (window.matchMedia("(max-width: 768px)").matches) {
      logo.style.fontSize = "1.5rem";
      header.style.backgroundColor = "#05080fee";
    } else {
      header.style.backgroundColor = "#05080fee";
    }
  } else {
    progressBarContainer.style.display = "none";
    if (window.matchMedia("(max-width: 576px)").matches) {
      header.style.backgroundColor = "#05080f00";
    } else if (window.matchMedia("(max-width: 768px)").matches) {
      logo.style.fontSize = "3rem";
      header.style.backgroundColor = "#05080f00";
    } else {
      header.style.backgroundColor = "#05080f00";
    }
  }
};
document.addEventListener("scroll", minHeader);

let backToTop = document.querySelector(".back-to-top");

const toTop = () => {
  if (
    document.body.scrollTop > 600 ||
    document.documentElement.scrollTop > 600
  ) {
    backToTop.style.bottom = "20px";
  } else {
    backToTop.style.bottom = "-50px";
  }
};
document.addEventListener("scroll", toTop);

const moMenu = () => {
  nav.classList.toggle("responsive");
  btnMenu.classList.toggle("btn-glow");
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    header.classList.toggle("bg");
  }
  for (let i = 0; i < navItems.length; i++) {
    navItems[i].addEventListener("click", moMenu);
  }
};

btnMenu.addEventListener("click", moMenu);

function showScrollProgress() {
  let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  let height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  let scrolled = (winScroll / height) * 100;
  document.getElementById("scrollBar").style.width = scrolled + "%";
}

document.addEventListener("scroll", showScrollProgress);
