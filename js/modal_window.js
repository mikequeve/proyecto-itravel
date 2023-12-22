const d = document,
w = window;

export default function openModal(closeBtn){
    const $modal = d.querySelector('.contact-form');
    $modal.classList.add('visible');
    d.addEventListener('click', (e) => {
        e.preventDefault();
        if(e.target.matches(closeBtn) || e.target.matches(`${closeBtn} *`)){
            $modal.classList.remove('visible');
        }
    });

    w.addEventListener('scroll', (e) => {
        e.preventDefault();
        let scrollTop = w.scrollY;
        if(scrollTop <= 0){
            $modal.classList.add('visible');
        }
    });
}


