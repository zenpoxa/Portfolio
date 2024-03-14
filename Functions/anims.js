/****************************
 * IMPORTS & OUTILS
 ***************************/
import gsap from "gsap";
import ScrollTrigger from "gsap/all";
import CustomEase from "gsap/CustomEase";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(CustomEase);

/****************************
 * ANIMATION DE ROTATION LOGO
 ***************************/
gsap.to("img.roll-once", {
    scrollTrigger: {
        trigger: "img.roll-once",
        // toggleActions: "restart none none none",
    },
    rotate: 720,
    duration: 1.5,
    ease: 'power2.out'
});


/********************************
 * ANIMATION DE BOOM VISUEL TITRE
 *******************************/
gsap.fromTo("h1.title-boom",
{
    scale: .1,
},

{
    ease: CustomEase.create("custom", "M0,0 C0.159,0 0.258,0.252 0.303,0.417 0.446,0.945 0.533,1.115 0.623,1.14 0.634,1.142 0.72,1.012 0.72,1.012 0.72,1.012 0.838,0.936 0.838,0.936 0.838,0.936 0.978,0.961 1,1 "),
    scale: 1,
    duration: 1,
});
