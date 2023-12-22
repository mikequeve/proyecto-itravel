const d = document,
w = window;

export default function hamburgerMenu(menuBtn, menuClose, navMenu, menuLink){
    d.addEventListener('click', (e) => {
        e.preventDefault();
        if(e.target.matches(menuBtn)){
            d.querySelector(navMenu).classList.toggle("open");
            d.querySelector(menuBtn).classList.add("hidden");
            d.querySelector(menuClose).classList.remove("hidden");
        }
        if(e.target.matches(menuClose) || e.target.matches(menuLink)){
            d.querySelector(navMenu).classList.remove("open");
            d.querySelector(menuBtn).classList.remove("hidden");
            d.querySelector(menuClose).classList.add("hidden");
        }
    });

    //Agregar la clase sticky en el menu cuando se muestre en tamanios superiores a 1024px
    w.addEventListener('scroll', (e) => {
        const $header = d.querySelector('.header');
        $header.classList.toggle("sticky", w.scrollY > 100);
    });
}