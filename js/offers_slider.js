const d = document;

export default function offerSlider(){
    const $slides = d.querySelectorAll('.offer-slide'),
    $sliderBtn = d.querySelectorAll('.slider-btn');
    
    let i = 0;

    setInterval(() => {
        $slides[i].classList.remove('active');
        $sliderBtn[i].classList.remove('active');
        i++;

        if(i >= $slides.length){
            i = 0;
        }
        $slides[i].classList.add('active');
        $sliderBtn[i].classList.add('active');
    }, 5000);
}