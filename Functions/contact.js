// ENVOI DU MAIL
(function () {
    emailjs.init('dei_TgZWrVbhtIIsj');
})();

var resultText = document.getElementById("result");

window.onload = function () {
    document.getElementById('contact-form')?.addEventListener('submit', function (event) {
        event.preventDefault();
        resultText.innerHTML = "";

        resultText = document.getElementById("result");
        var newone = resultText.cloneNode(true);
        resultText.parentNode.replaceChild(newone, resultText);

        // vérifier si les champs sont bien remplis
        if (
            !this.querySelector("#name").value ||
            !this.querySelector("#email").value ||
            !this.querySelector("textarea").value
        ) {
            newone.innerHTML = "Champs mal remplis";
        }

        else {
            emailjs.sendForm('service_a49mbi8', 'template_vd90ozf', this)
                .then(function () {
                    newone.innerHTML = "Envoyé !";
                }, function () {
                    newone.innerHTML = "Erreur serveur...";
                });
        }
    });
}
