document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.querySelector('.nav-toggle');
    navToggle.addEventListener('click', function() {
        const nav = document.querySelector('nav');
        nav.classList.toggle('show');
    });

    const personnages = document.querySelectorAll("#personnages");
    personnages.forEach(function(personnage) {
        personnage.addEventListener("click", function() {
            const characterId = this.getAttribute('data-character-id');
            const characterDescription = document.getElementById(characterId + '-description');
            characterDescription.style.display = characterDescription.style.display === "none" ? "block" : "none";
        });
    });
});
images.forEach(function(image, index) {
    image.addEventListener("click", function() {
        const description = descriptions[index];
        if (description.style.display === "none") {
            description.style.display = "block";
        } else {
            description.style.display = "none";
        }
    });
});

function toggleDescription() {
    const description = document.getElementById("goku-description");
    if (description.style.display === "none") {
        description.style.display = "block";
    } else {
        description.style.display = "none";
    }

}
