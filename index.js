// const menulink = document.getElementById("menu-links");
// function change() {
//   menulink.classList.add("active");
// }

// function changeback() {
//   menulink.classList.remove("active");
// }


window.onload = function () {
  const menulink = document.getElementById("menu-links");
  
  function change() {
    menulink.classList.add("active");
  }

  function changeback() {
    menulink.classList.remove("active");
  }

  // Assign the functions to the elements
  document.querySelector(".fa-bars").onclick = change;
  document.querySelector(".fa-close").onclick = changeback;
};

