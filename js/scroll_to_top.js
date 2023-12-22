const d = document,
w = window;
export default function scrollTopButton(btn){
    const $scrollBtn = d.querySelector(btn);
    /*Lo primero que debemos hacer antes de darle click al boton es detectar la distancia a la que está
    el scroll de la barra de desplazamiento vertical*/
    //Guardar en una variable de tipo DOM el selector del boton
    

    //necesitamos el evento de scroll de window
    w.addEventListener('scroll', (e) =>{
        //propiedad para detectar a que distancia se ha separado la barra de desplazamiento desde window o  desde ducument.documentElement que es la etiqueta html
        //console.log(w.scrollY, d.documentElement.scrollTop);
        let scrollTop = w.scrollY;
        //a partir de 600px se le remueve la clase hidden para permitir mostrar el boton.
        if(scrollTop > 600){
            $scrollBtn.classList.remove('hidden');
        }else{
            $scrollBtn.classList.add('hidden');
        }
    });


    //Evento al hacer click al boton
    d.addEventListener('click', (e) => {
        if(e.target.matches(btn) || e.target.matches(`${btn} *`)){
            w.scrollTo({
                behavior: "smooth",
                top: 0,
            });
        }
    });
}