/****************************
 * IMPORTS & OUTILS
 ***************************/
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

/****************************
 * VARIABLES GLOBALES
 ***************************/
let myBody = document.querySelector("#accueil-body");

/****************************
 * SCROLL HORIZONTAL PC
 ***************************/
var ambitions = myBody.querySelector("div.global-ambitions");
var wrapper = myBody.querySelector("div.horizontal-scroll");
var horizontalArticles = gsap.utils.toArray("div.horizontal-scroll>article");
const pinSection = document.querySelector(".pin-section");

// timeline gsap définie
if (window.innerWidth > 720) {
  const horizontal_tl = gsap.timeline({
    scrollTrigger: {
      trigger: pinSection,
      pin: true,
      scrub: 1,
      start: "center center",
      end: "+=" + ambitions.clientHeight,
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
