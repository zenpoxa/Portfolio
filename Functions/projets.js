/****************************
 * IMPORTS & OUTILS
 ***************************/
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

/****************************
 * VARIABLES GLOBALES
 ***************************/

/****************************
 * CAROUSSEL PROJETS
 ***************************/
new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,

    spaceBetween: 500,
    speed: 750,
    autoplay: {
        delay: 10000,
    },

    zoom: {
        maxRatio: 5,
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});
