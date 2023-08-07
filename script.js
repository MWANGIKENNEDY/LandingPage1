const menuBtn = document.querySelector("#menu-bars");

const mobileMenu = document.querySelector(".mobile-menu");

menuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("show-menu");
});
