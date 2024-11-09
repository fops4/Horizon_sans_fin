    // Obtenir le modal
    var modal = document.getElementById("myModal");

    // Obtenir le bouton qui ouvre le modal
    var btn = document.getElementById("open-modal");

    // Obtenir l'élément <span> qui ferme le modal
    var span = document.getElementsByClassName("close")[0];

    // Lorsque l'utilisateur clique sur le bouton, ouvrir le modal
    btn.onclick = function() {
        modal.style.display = "block";
    }

    // Lorsque l'utilisateur clique sur <span> (x), fermer le modal
    span.onclick = function() {
        modal.style.display = "none";
    }

    // Lorsque l'utilisateur clique en dehors du modal, fermer le modal
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    // Gérer la soumission du formulaire
    document.getElementById('voyage-form').addEventListener('submit', function(event) {
        event.preventDefault(); // Empêche le rechargement de la page
        alert('Voyage ajouté !'); // Remplacez ceci par votre logique d'ajout réelle
        modal.style.display = 'none'; // Ferme le modal après soumission
        this.reset(); // Réinitialise le formulaire
    });