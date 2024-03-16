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

function splitLetter({ el=null, selector=null, lines=false }) {

    let element = el;
    if (selector && !el) {
      console.log("select")
      element = document.querySelector(selector)
    }
  
    if (lines) {
      const lines = element.querySelectorAll('div, span')
      console.log(lines)
  
      lines.forEach(line => {
        const tempText = line.innerText;
        line.innerText = "";
  
        for (const l of tempText) {
          let letterSpan = document.createElement('span')
          letterSpan.innerText = l;
          letterSpan.setAttribute('data-letter', '');
          if (l === " ") {
            letterSpan.classList.add("space")
          }
          line.appendChild(letterSpan)
        }
      })
    } else {
      const tempText = element.innerText;
      element.innerText = "";
  
      for (const l of tempText) {
        let letterSpan = document.createElement('span')
        letterSpan.innerText = l;
        letterSpan.setAttribute('data-letter', '');
        if (l === " ") {
          letterSpan.classList.add("space")
        }
        element.appendChild(letterSpan)
      }
    }
  }


export {typeEffect, randomIntFromInterval, getTransitionEndEventName, splitLetter};