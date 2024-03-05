/****************************
 * IMPORTS & OUTILS
 ***************************/
import * as utils from "./utils.js";
import * as switchPage from "./switch-projet.js";

/****************************
 * VARIABLES GLOABLES
 ***************************/
var myBody = document.querySelector("#un-projet-body");

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
  let logo1 = allSlides[0].querySelector(`a:nth-child(${i+1})>img`);
  let logo2 = allSlides[1].querySelector(`a:nth-child(${i+1})>img`);

  console.log(logo1, logo2);

  logo1.style.width = `${(100/nbLogos)}vh`;
  logo2.style.width = `${(100/nbLogos)}vh`;

  logo1.style.left = `${(allSlides[0].clientWidth/nbLogos)*i}px`;
  logo2.style.left = `${(allSlides[0].clientWidth/nbLogos)*i}px`;
  
  let nb = utils.randomIntFromInterval(0, wrapperInf.clientHeight - logo1.height);
  logo1.style.top = `${nb}px`;
  logo2.style.top = `${nb}px`;
  
  i++;
}