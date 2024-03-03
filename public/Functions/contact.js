// ENVOI DU MAIL
(function() {
    emailjs.init('dei_TgZWrVbhtIIsj');
})();

window.onload = function() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();

        // vérifier si les champs sont bien remplis
        if (
            !this.querySelector("#name").value ||
            !this.querySelector("#email").value ||
            !this.querySelector("textarea").value        
        )
        {
            console.log("Champs mal remplis");
        }

        else {
            emailjs.sendForm('service_a49mbi8', 'template_vd90ozf', this)
            .then(function() {
                console.log('Mail envoyé avec succès!');
            }, function(error) {
                console.log('ERREUR : Mail pas envoyé...', error);
            });
        }
    });
}
