/****************************
 * IMPORTS & OUTILS
 ***************************/
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

import { LenisSmoothScroll } from "./smooth-scroll";


/****************************
 * VARIABLES GLOBALES
 ***************************/
let myBody = document.querySelector("#accueil-body");

/****************************
 * CAROUSSEL PROJETS
 ***************************/
const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,

    spaceBetween: 500,
    speed: 750,
    // autoplay: {
    //     delay: 4000,
    // },

    zoom: {
        maxRatio: 5,
      },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});





// broutilles
new LenisSmoothScroll();