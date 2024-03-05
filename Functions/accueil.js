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
var allLogos = wrapperInf.querySelectorAll("img");

allLogos.forEach((logo, i) => {
    logo.style.width = `${(100/allLogos.length)*1.3}vh`;
    logo.style.left = `${(wrapperInf.clientWidth/allLogos.length)*i}px`;
    logo.style.top = `${utils.randomIntFromInterval(0, wrapperInf.clientHeight - logo.height)}px`;
});

allLogos.forEach(logo => {
    utils.moveRightInfinite(logo, -.005*myBody.clientWidth + 12.5, wrapperInf, true);
});

/****************************
 * SCROLL HORIZONTAL PC
 ***************************/
var Ambitions = myBody.querySelector("div.ambitions");
var wrapper = myBody.querySelector("div.horizontal-scroll");
var horizontalArticles = gsap.utils.toArray("div.horizontal-scroll>article");

// timeline gsap définie
const horizontal_tl = gsap.timeline({
    scrollTrigger: {
      trigger: Ambitions,
      pin: true,
      scrub: 1,
      start: "bottom bottom",
      end: "+=" + (wrapper.clientHeight),
      snap: {
        snapTo: 1 / (horizontalArticles.length - 1),
        duration: { min: 0.2, max: 0.4},
        delay: 0.2,
        ease: "power2.inOut",
      },
    },
  });

  horizontal_tl.to(wrapper, {
    x: (-wrapper.offsetWidth + horizontalArticles[horizontalArticles.length-1].clientWidth),
  });
