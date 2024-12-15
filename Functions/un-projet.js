/****************************
 * IMPORTS & OUTILS
 ***************************/
import * as utils from "./utils.js";
import * as switchPage from "./switch-projet.js";
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

/****************************
 * VARIABLES GLOABLES
 ***************************/
var myBody = document.querySelector("#un-projet-body");

/****************************
 * SLIDER IMAGES
 ***************************/
new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,

  speed: 1000,

  autoplay: {
    delay: 4000,
  },
});

/****************************
 * NAVIGATION ENTRE PROJETS
 ***************************/
var prevBtn = myBody.querySelector("div.nav-bottom>div.prev");
var nextBtn = myBody.querySelector("div.nav-bottom>div.next");

prevBtn.addEventListener("click", () => {
  switchPage.prevProject();
});
nextBtn.addEventListener("click", () => {
  switchPage.nextProject();
});

/****************************
 * ANIMATION DEFILEMENT INF.
 ***************************/
var wrapperInf = myBody.querySelector("div.technos>div.wrapper");
var allSlides = wrapperInf.querySelectorAll("div");
var nbLogos = allSlides[0].querySelectorAll("img").length;
let i = 0;

while (i < nbLogos) {
  let logo1_bis = allSlides[0].querySelector(`a:nth-child(${i + 1})>img`);
  let logo2_bis = allSlides[1].querySelector(`a:nth-child(${i + 1})>img`);

  logo1_bis.style.width = `${(100 / nbLogos) * .4}vw`;
  logo2_bis.style.width = `${(100 / nbLogos) * .4}vw`;

  i++;
}