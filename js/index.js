import currentYear from "./copyright.js";
import hamburgerMenu from "./hamburger_menu.js";
import openModal from "./modal_window.js";
import offerSlider from "./offers_slider.js";
import scrollTopButton from "./scroll_to_top.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
  //Menu de hamburguesa
  hamburgerMenu(".bars", ".close", ".menu-list", ".menu-list a");

  //Slider de ofertas especiales
  //offerSlider();

  //Ventana modal de la seccion de contacto
  openModal(".close");

  //Año actual para el copyright en el footer
  currentYear();

  scrollTopButton(".scroll-to-top");
});
