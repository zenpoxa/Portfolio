// Min et max inclus
function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// Obtenir la propriété de fin d'événement selon le moteur
function getTransitionEndEventName() {
    var transitions = {
        "transition"      : "transitionend",
        "OTransition"     : "oTransitionEnd",
        "MozTransition"   : "transitionend",
        "WebkitTransition": "webkitTransitionEnd"
     }
    let bodyStyle = document.body.style;
    for(let transition in transitions) {
        if(bodyStyle[transition] != undefined) {
            return transitions[transition];
        } 
    }
  };

// Appliquer un effect d'écriture de texte à un élément
function typeEffect(element, speed) {
    let text = element.innerHTML;
    element.innerHTML = "";

    let i = 0;
    var timer = setInterval(function() {
        if (i < text.length) {
            if (text.charAt(i) == '<') {
                i += 4;
                element.appendChild(document.createElement("br"));
            }
            element.append(text.charAt(i));
            i++;
        } else {
            clearInterval(timer);
        }
    }, speed);
}

export {typeEffect, randomIntFromInterval, getTransitionEndEventName};