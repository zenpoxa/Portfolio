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
  let logo1_bis = allSlides[0].querySelector(`a:nth-child(${i+1})>img`);
  let logo2_bis = allSlides[1].querySelector(`a:nth-child(${i+1})>img`);

  console.log(logo1_bis, logo2_bis);

  logo1_bis.style.width = `${(100/nbLogos)*.8}vh`;
  logo2_bis.style.width = `${(100/nbLogos)*.8}vh`;

  logo1_bis.style.left = `${(allSlides[0].clientWidth/nbLogos)*i}px`;
  logo2_bis.style.left = `${(allSlides[0].clientWidth/nbLogos)*i}px`;
  
  let nb2 = utils.randomIntFromInterval(0, wrapperInf.clientHeight - logo1_bis.clientheight);
  logo1_bis.style.top = `${nb2}px`;
  logo2_bis.style.top = `${nb2}px`;
  
  i++;
}