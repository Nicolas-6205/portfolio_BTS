const box = document.getElementById("colorBox");
const colorText = document.getElementById("colorCode");

// Fonction pour générer une couleur aléatoire
function randomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

// Changer la couleur du carré au clic
box.addEventListener("click", () => {
  const color = randomColor();
  box.style.backgroundColor = color;
  colorText.textContent = color;
});
