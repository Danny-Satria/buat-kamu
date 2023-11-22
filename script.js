const x = document.querySelector("button.nggak");
x.addEventListener("click", function () {
  const i = Math.floor(Math.random() * 200) + 1;
  const j = Math.floor(Math.random() * 200) + 1;

  x.style.left = i + "px";
  x.style.top = j + "px";
});

function mau() {
  alert(`Good girl`);
  alert(`Here we go`);
  alert(`Last...`);
  location.assign("https://wa.me/? text=Wo%20Aini.%20Te%20Amo.%20Ku%20Tresno");
}
