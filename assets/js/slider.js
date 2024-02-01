let slider = document.querySelector('.bannerSlider');
let wrapper = document.querySelector('.wrapper');
let next = document.querySelector('.arrow-next');
let prev = document.querySelector('.arrow-prev');
let slide = document.querySelectorAll('.slide');
let currdeg = 0;
let active = 0;

next.addEventListener('click', () => {
    slider.classList.toggle('zoom');

    currdeg = currdeg - (360 / slide.length);

    if (active === slide.length - 1) {
        active = 0;
    } else {
        active++;
    }

    toggle();
});

prev.addEventListener('click', () => {
    slider.classList.toggle('zoom');

    currdeg = currdeg + (360 / slide.length);

    if (active === 0) {
        active = slide.length - 1;
    } else {
        active--;
    }

    toggle();
});

let toggle = () => {
    setTimeout(() => {
        for (let i = 0; i < slide.length; i++) {
            slide[i].classList.remove('active');
            slide[i].style.transform = 'rotateY(' + ((360 / slide.length) * i) + 'deg) translateZ(0px)';
        }

        slide[active].classList.add('active');
        wrapper.style.transform = 'rotateY(' + currdeg + 'deg)';
    }, 900);

    setTimeout(() => {
        slider.classList.toggle('zoom');
    }, 1900);
}
