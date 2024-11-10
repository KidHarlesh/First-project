// const menulink = document.getElementById("menu-links");
// function change() {
//   menulink.classList.add("active");
// }

// function changeback() {
//   menulink.classList.remove("active");
// }

function change() {
  const menulink = document.getElementById("menu-links");
  menulink.classList.add("active");
}

function changeback() {
  const menulink = document.getElementById("menu-links");
  menulink.classList.remove("active");
}

window.onload = function () {
  document.querySelector(".fa-bars").onclick = change;
  document.querySelector(".fa-close").onclick = changeback;
  document.querySelector(".homeid").onclick = changeback;
  document.querySelector(".aboutid").onclick = changeback;
  document.querySelector(".coursesid").onclick = changeback;
  document.querySelector(".contactme").onclick = changeback;
};
