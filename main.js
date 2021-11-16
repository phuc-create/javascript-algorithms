const Btn = document.getElementById("here");

Btn.addEventListener("mouseover", () => {
  let top = Math.floor(Math.random() * 100);
  let left = Math.floor(Math.random() * 100);
  Btn.style.top = top + "%";
  Btn.style.left = left + "%";
});
