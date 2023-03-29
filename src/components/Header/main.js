export default function navMobile() {
  const navBarMobile = document.querySelector(".img-toggle");
  const menuMobile = document.querySelector(".menu-mobile");
  const navBarMobielClose = document.querySelector("#close-mobile");
  const corpo = document.querySelector("html");
  const home = document.querySelector("#home");
  const about = document.querySelector("#about");
  const project = document.querySelector("#project");
  const tool = document.querySelector("#tool");

  function scrollToTop() {
    window.scrollTo(0, 0);
  }

  navBarMobile.addEventListener("click", () => {
    menuMobile.style.display = "flex";
    menuMobile.style.overflowY = "hidden";
    corpo.style.overflowY = "hidden";
    menuMobile.style.overflowY = "hidden";

    scrollToTop();
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

    scrollToTop();
  });
  about.addEventListener("click", () => {
    menuMobile.style.display = "none";
    corpo.style.overflowY = "auto";
    menuMobile.style.overflowY = "auto";

    scrollToTop();
  });
  project.addEventListener("click", () => {
    menuMobile.style.display = "none";
    corpo.style.overflowY = "auto";
    menuMobile.style.overflowY = "auto";

    scrollToTop();
  });
  tool.addEventListener("click", () => {
    menuMobile.style.display = "none";
    corpo.style.overflowY = "auto";
    menuMobile.style.overflowY = "auto";

    scrollToTop();
  });
}
