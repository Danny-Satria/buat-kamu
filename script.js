let pesanWhatsapp = "You are the best thing I never planned✨✨";
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
  alert(`Wo Aini. Te Amo. Ku Tresno❤️`);
  window.open("https://api.whatsapp.com/send?text=" + pesanWhatsapp, "_blank");
}
