const box = document.getElemetById("colorbox");

function rabdomColor () {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return 'rgb(${r}, ${g}, ${b});
}

box.addEventListener("click, () => {
    box.style.backgroundColor = randomColor ();
});
