/****************************
 * IMPORTS & OUTILS
 ***************************/
import * as utils from "./utils.js";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

/****************************
 * VARIABLES GLOBALES
 ***************************/
let myBody = document.querySelector("#accueil-body");

/****************************
 * ANIMATION DEFILEMENT INF.
 ***************************/
var wrapperInf = myBody.querySelector("div.infinite-horizontal>div.wrapper");
var allSlides = wrapperInf.querySelectorAll("div");
var nbLogos = allSlides[0].querySelectorAll("img").length;
let i = 0;

while (i < nbLogos) {
  let logo1 = allSlides[0].querySelector(`a:nth-child(${i + 1})>img`);
  let logo2 = allSlides[1].querySelector(`a:nth-child(${i + 1})>img`);

  logo1.style.width = `${(100 / nbLogos) * .6}vw`;
  logo2.style.width = `${(100 / nbLogos) * .6}vw`;

  i++;
}

/****************************
 * SCROLL HORIZONTAL PC
 ***************************/
var ambitions = myBody.querySelector("div.ambitions");
var wrapper = myBody.querySelector("div.horizontal-scroll");
var horizontalArticles = gsap.utils.toArray("div.horizontal-scroll>article");

// timeline gsap définie
if (window.innerWidth > 720) {
  const horizontal_tl = gsap.timeline({
    scrollTrigger: {
      trigger: ambitions,
      pin: true,
      scrub: 1,
      start: "bottom bottom",
      end: "+=" + (ambitions.clientHeight),
      snap: {
        snapTo: 1 / (horizontalArticles.length - 1),
        duration: { min: 0.2, max: 0.4 },
        delay: 0.2,
        ease: "power1.out"
      },
    },
  });

  horizontal_tl.to(wrapper, {
    xPercent: -100 * ((horizontalArticles.length - 1) / horizontalArticles.length),
    ease: "none",
  });
}
