/****************************
 * IMPORTS & OUTILS
 ***************************/
import gsap from "gsap";
import {ScrollTrigger} from "gsap/all";
import CustomEase from "gsap/CustomEase";
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
    {defaults: {
        duration: 1,
        ease: CustomEase.create("custom", "M0,0 C0.159,0 0.258,0.252 0.303,0.417 0.446,0.945 0.533,1.115 0.623,1.14 0.634,1.142 0.72,1.012 0.72,1.012 0.72,1.012 0.838,0.936 0.838,0.936 0.838,0.936 0.978,0.961 1,1 "),
    }}
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
        },"-=75%")
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
 * APPARITION MODERNE DES LIGNES
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
                start: "top center",
            },
            visibility: "visible",
        });
});

// écriture du texte en live
let speed = 25;
document.querySelectorAll("div.gradation p.typing").forEach(texte => {
    gsap.to(texte,
        {
            scrollTrigger: {
                trigger: texte,
                start: "top center",
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
            autoAlpha: 0,
        },

        {
            scrollTrigger: {
                trigger: texte,
                start: "top center",
            },
            
            duration: 1.25,
            y: 0,
            autoAlpha: 1,
            ease: "power2.out",
            overwrite: "auto"
        },
    );
});

// morphing de texte
const elts = {
    text1: document.getElementById("text1"),
    text2: document.getElementById("text2")
};

const texts = [
    "Discuter",
    "Échanger",
    "Se comprendre",
];

const morphTime = 1;
const cooldownTime = 0.5;

let textIndex = texts.length - 1;
let time = new Date();
let morph = 0;
let cooldown = cooldownTime;

elts.text1.textContent = texts[textIndex % texts.length];
elts.text2.textContent = texts[(textIndex + 1) % texts.length];

function doMorph() {
    morph -= cooldown;
    cooldown = 0;

    let fraction = morph / morphTime;

    if (fraction > 1) {
        cooldown = cooldownTime;
        fraction = 1;
    }

    setMorph(fraction);
}

function setMorph(fraction) {
    elts.text2.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
    elts.text2.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

    fraction = 1 - fraction;
    elts.text1.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
    elts.text1.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

    elts.text1.textContent = texts[textIndex % texts.length];
    elts.text2.textContent = texts[(textIndex + 1) % texts.length];
}

function doCooldown() {
    morph = 0;

    elts.text2.style.filter = "";
    elts.text2.style.opacity = "100%";

    elts.text1.style.filter = "";
    elts.text1.style.opacity = "0%";
}

function animate() {
    requestAnimationFrame(animate);

    let newTime = new Date();
    let shouldIncrementIndex = cooldown > 0;
    let dt = (newTime - time) / 1000;
    time = newTime;

    cooldown -= dt;

    if (cooldown <= 0) {
        if (shouldIncrementIndex) {
            textIndex++;
        }

        doMorph();
    } else {
        doCooldown();
    }
}

animate();
