export default function navMobile() {
  const navBarMobile = document.querySelector(".img-toggle");
  const menuMobile = document.querySelector(".menu-mobile");
  const navBarMobielClose = document.querySelector("#close-mobile");
  const corpo = document.querySelector("html");
  const home = document.querySelector("#home");
  const about = document.querySelector("#about");
  const project = document.querySelector("#project");
  const tool = document.querySelector("#tool");

  navBarMobile.addEventListener("click", () => {
    menuMobile.style.display = "flex";
    menuMobile.style.overflowY = "hidden";
    corpo.style.overflowY = "hidden";
    menuMobile.style.overflowY = "hidden";
  });

  navBarMobielClose.addEventListener("click", () => {
    menuMobile.style.display = "none";
    corpo.style.overflowY = "auto";
    menuMobile.style.overflowY = "auto";
  });

  home.addEventListener("click", () => {
    menuMobile.style.display = "none";
    corpo.style.overflowY = "auto";
    menuMobile.style.overflowY = "auto";
  });
  about.addEventListener("click", () => {
    menuMobile.style.display = "none";
    corpo.style.overflowY = "auto";
    menuMobile.style.overflowY = "auto";
  });
  project.addEventListener("click", () => {
    menuMobile.style.display = "none";
    corpo.style.overflowY = "auto";
    menuMobile.style.overflowY = "auto";
  });
  tool.addEventListener("click", () => {
    menuMobile.style.display = "none";
    corpo.style.overflowY = "auto";
    menuMobile.style.overflowY = "auto";
  });
}
