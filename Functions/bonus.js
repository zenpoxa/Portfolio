/****************************
 * IMPORTS & OUTILS
 ***************************/
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,

    spaceBetween: 50,

    speed: 1000,

    autoplay: {
        delay: 4000,
    },
});