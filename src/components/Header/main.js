export default function navMobile() {
  const navBarMobile = document.querySelector(".img-toggle");
  const menuMobile = document.querySelector(".menu-mobile");
  const navBarMobielClose = document.querySelector("#close-mobile");

  navBarMobile.addEventListener("click", () => {
    menuMobile.style.display = "flex";
  });

  navBarMobielClose.addEventListener("click", () => {
    menuMobile.style.display = "none";
  });
}
