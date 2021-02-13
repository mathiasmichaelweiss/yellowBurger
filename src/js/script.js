"use strict";

const burger = document.querySelector(".burger"),
  containerMenuBurger = document.querySelector(".menu-burger"),
  nav = document.querySelector("nav"),
  links = document.querySelectorAll("a");

burger.addEventListener("click", e => {
  burger.classList.toggle("active-burger");
  links.forEach(item => {
    if (
      e.target.classList.contains("burger") ||
      e.target.classList.contains("burger-icon")
    ) {
      if (burger.classList.contains("active-burger")) {
        containerMenuBurger.style = "margin-top: -375px; height: 750px";
        item.style = "display: block";
        burger.style = "box-shadow: 0px -4px 4px rgba(0, 0, 0, 0.05);";
      } else {
        nav.style = "";
        containerMenuBurger.style = "";
        item.style = "";
        burger.style = "";
      }
    }
  });
});
