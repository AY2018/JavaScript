/* Images */

const images = document.getElementsByClassName("image");

let indexGeneral = 0, dernierePosition = {x: 0, y: 0,};

const activer = (image, x, y) => {
  image.style.left = `${x}px`;
  image.style.top = `${y}px`;

  image.dataset.status = "active";

  dernierePosition = {x, y};
};

const distanceEntreAvantApres = (x, y) => {
  return Math.hypot(x - dernierePosition.x, y - dernierePosition.y);
}

window.onmousemove= e => {
  if(distanceEntreAvantApres(e.clientX, e.clientY) > 100){
    const premiereImage = images[indexGeneral % images.length],
    derniereImage = images[(indexGeneral - 5) % images.length];

    activer(premiereImage, e.clientX, e.clientY);

    if(derniereImage) {derniereImage.dataset.status= "inactive"};

    indexGeneral++;
  }
}


/* Faire apparaitre la gallerie */


function apparition(){
  let galerie = document.getElementById("videotext");
  galerie.classList.toggle("apparait");
  // Changement style bouton (fond et couleur)
  let btn = document.getElementById("apparition_gallerie");
  btn.classList.toggle("cliked");
}

// Changement du texte du bouton 
const button = document.getElementById("apparition_gallerie");

  button.addEventListener("click", function() {
    if (button.textContent === "Voir Galerie") {
      button.textContent = "Cacher Galerie";
    } else {
      button.textContent = "Voir Galerie";
    }
  });


