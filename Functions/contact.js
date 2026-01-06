// ENVOI DU MAIL
(function () {
    emailjs.init('dei_TgZWrVbhtIIsj');
})();

window.onload = function () {
    const form = document.getElementById('contact-form');
    const loader = document.getElementById('loader');

    form?.addEventListener('submit', function (event) {
        event.preventDefault();

        let resultText = document.getElementById("result");
        const newone = resultText.cloneNode(true);
        resultText.parentNode.replaceChild(newone, resultText);

        // vérifier si les champs sont bien remplis
        if (
            !this.querySelector("#name").value ||
            !this.querySelector("#email").value ||
            !this.querySelector("textarea").value
        ) {
            newone.innerHTML = "Champs mal remplis";
            return;
        }

        newone.innerHTML = "Envoi en cours...";

        emailjs.sendForm('service_a49mbi8', 'template_vd90ozf', this)
            .then(function () {
                newone.innerHTML = "Envoyé !";
            })
            .catch(function () {
                newone.innerHTML = "Erreur, veuillez réessayer plus tard";
            })
    });
};
