export default function navMobile() {
  const navBarMobile = document.querySelector(".img-toggle");
  const menuMobile = document.querySelector(".menu-mobile");
  const navBarMobielClose = document.querySelector("#close-mobile");
  const $html = document.querySelector("html");

  navBarMobile.addEventListener("click", () => {
    menuMobile.style.display = "flex";
    $html.style.overflowY = "hidden";
  });

  navBarMobielClose.addEventListener("click", () => {
    menuMobile.style.display = "none";
    $html.style.overflowY = "auto";
  });
}
