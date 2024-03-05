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
var allLogos = wrapperInf.querySelectorAll("img");

allLogos.forEach((logo, i) => {
    logo.style.width = `${(100/allLogos.length)*1.3}vh`;
    logo.style.left = `${(wrapperInf.clientWidth/allLogos.length)*i}px`;
});

allLogos.forEach(logo => {
    utils.moveRightInfinite(logo, -.005*myBody.clientWidth + 12.5, wrapperInf, true);
});