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
  }

// bouger un élémént selon une direction & distance
  function moveRightInfinite(element, speed=5, contenant=NaN) {
    var frameDistance = 2;
    var elStyle = window.getComputedStyle(element);
    var value = elStyle.getPropertyValue("left").replace("px", "");

    function moveAFrame() {
        if (Math.floor(Number(element.style.left.replace("px", ""))) >= 0) {
            element.classList.remove('active');
        }
        if (Math.floor(Number(element.style.left.replace("px", ""))) >= window.screen.width) {
            element.style.left=`${-element.width}px`;
            element.style.top = `${randomIntFromInterval(0, contenant.clientHeight - element.height)}px`;
            element.classList.add('active');
        }
        else {
            elStyle = window.getComputedStyle(element);
            value = elStyle.getPropertyValue("left").replace("px", "");
            element.style["left"] = (Number(value) + frameDistance) + "px";
        }
    }

    var movingFrames = setInterval(moveAFrame, speed);
}

export {randomIntFromInterval, getTransitionEndEventName, moveRightInfinite};