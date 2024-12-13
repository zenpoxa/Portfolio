/****************************
 * IMPORTS & OUTILS
 ***************************/
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { CustomEase } from "gsap/CustomEase";

import * as utils from "./utils.js";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(CustomEase);

/****************************
 * ANIMATION DE ROTATION LOGO
 ***************************/
document.querySelectorAll(".roll-once").forEach(roll => {
    gsap.to(roll, {
        scrollTrigger: {
            trigger: roll,
        },
        rotate: 720,
        duration: 1.5,
        ease: 'power2.out'
    });
});

document.querySelectorAll(".roll-each").forEach(roll => {
    gsap.fromTo(roll,
        {
            scale: 1,
        },
        {
            scrollTrigger: {
                trigger: roll,
                start: "center center",
                toggleActions: "restart none none none",
            },
            rotate: 360,
            scale: 1,
            duration: .5,
            ease: 'power1.out'
        });
});

/********************************
 * ANIMATION DU TITRE D'ACCUEIL
 *******************************/
var leBonjour = document.querySelector("h1.second");
var titreAcceuil = gsap.timeline(
    {
        defaults: {
            duration: 1,
            ease: CustomEase.create("custom", "M0,0 C0.159,0 0.258,0.252 0.303,0.417 0.446,0.945 0.533,1.115 0.623,1.14 0.634,1.142 0.72,1.012 0.72,1.012 0.72,1.012 0.838,0.936 0.838,0.936 0.838,0.936 0.978,0.961 1,1 "),
        }
    }
);
document.querySelectorAll("h1.first").forEach(bien => {
    titreAcceuil.fromTo(bien,
        {
            scale: .01,
        },
        {
            scale: 1,
        })
});
document.querySelectorAll("h1.second").forEach(leBonjour => {
    titreAcceuil.fromTo(leBonjour,
        {
            scale: .01,
            visibility: 'hidden',
        },
        {
            visibility: 'visible',
            scale: 1,
        }, "-=75%")
});

/********************************
 * ANIMATION D'AGGRANDISSEMENT D'UN TEXTE
 *******************************/
document.querySelectorAll(".title-boom").forEach(title => {
    gsap.fromTo(title,
        {
            scale: .1,
            visibility: 'hidden',
        },
        {
            scrollTrigger: {
                trigger: title,
                start: "center center",
            },

            visibility: 'visible',
            ease: CustomEase.create("custom", "M0,0 C0.159,0 0.258,0.252 0.303,0.417 0.446,0.945 0.533,1.115 0.623,1.14 0.634,1.142 0.72,1.012 0.72,1.012 0.72,1.012 0.838,0.936 0.838,0.936 0.838,0.936 0.978,0.961 1,1 "),
            scale: 1,
            duration: 1,
        });
});

/********************************
 * APPARITION DES LIGNES
 *******************************/
document.querySelectorAll(".line-spawn").forEach(line => {
    gsap.fromTo(line,
        {
            scaleX: .1,
            scaleY: 1.5,
            visibility: "hidden",
        },
        {
            scrollTrigger: {
                trigger: line,
                start: "top center",
            },

            visibility: "visible",
            scaleX: 1,
            scaleY: 1,
            duration: .4,
        });
});

/*************************************
 * APPARITION DU TEXTE POUR LE CONTACT
 ************************************/
document.querySelectorAll("div.gradation p:not(.final), div.morphing").forEach(texte => {
    gsap.fromTo(texte,
        {
            visibility: "hidden",
        },
        {
            scrollTrigger: {
                trigger: texte,
                start: "center bottom",
            },
            visibility: "visible",
        });
});

// écriture du texte en live
var speed = 35;
document.querySelectorAll("div.gradation p.typing").forEach(texte => {
    gsap.to(texte,
        {
            scrollTrigger: {
                trigger: texte,
                start: "center bottom",
            },
            onStart: () => {
                utils.typeEffect(texte, speed);
            },
        });
});

// fading
document.querySelectorAll("div.gradation p.fading").forEach(texte => {
    gsap.fromTo(
        texte,
        {
            y: 100,
            opacity: 0,
        },

        {
            scrollTrigger: {
                trigger: texte,
                start: "center bottom",
            },

            y: 0,
            duration: 1.25,
            opacity: 1,
        },
    );
});

// sliding
document.querySelectorAll("div.gradation p.sliding").forEach(texte => {
    gsap.from(texte,
        {
            scrollTrigger: {
                trigger: texte,
                start: "center bottom",
            },

            xPercent: -100,
            duration: 1.25,
            opacity: 1,
        },
    );
});

/*************************************
 * ANNIMATIONS RESEAUX
 ************************************/
document.querySelectorAll("div.reseaux>p:first-child").forEach(texte => {
    gsap.fromTo(texte,
        {
            visibility: 'hidden',
        },
        {
            scrollTrigger: {
                trigger: texte,
                start: "center center",
            },
            onStart: () => {
                utils.typeEffect(texte, speed);
            },
            visibility: 'visible',
        });
});

/*************************************
 * REVLELATION DES TITRES PAGE BONUS
 ************************************/
document.querySelectorAll("div.titre>div.cache").forEach(texte => {
    gsap.to(texte,
        {
            scrollTrigger: {
                trigger: texte,
                start: "top center",
            },
            width: "0%",
        });
});
