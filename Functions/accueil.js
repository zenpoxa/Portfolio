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
  let logo1 = allSlides[0].querySelector(`a:nth-child(${i+1})>img`);
  let logo2 = allSlides[1].querySelector(`a:nth-child(${i+1})>img`);
  let nb = utils.randomIntFromInterval(0, wrapperInf.clientHeight - logo1.clientheight);

  logo1.style.width = `${(100/nbLogos)}vh`;
  logo2.style.width = `${(100/nbLogos)}vh`;

  logo1.style.left = `${(allSlides[0].clientWidth/nbLogos)*i}px`;
  logo2.style.left = `${(allSlides[0].clientWidth/nbLogos)*i}px`;
  
  logo1.style.top = `${nb}px`;
  logo2.style.top = `${nb}px`;
  
  i++;
}

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
