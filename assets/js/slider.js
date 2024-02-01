let slider = document.querySelector('.bannerSlider');
let wrapper = document.querySelector('.wrapper');
let next = document.querySelector('.arrow-next');
let prev = document.querySelector('.arrow-prev');
let slide = document.querySelectorAll('.slide');
let background = document.querySelector('.background');
let currdeg = 0;
let active = 0;

const sliderBackground = {
    "slide1": {
        "id": "slide1",
        "src": "./assets/images/slider1.jpg"
    },
    "slide2": {
        "id": "slide2",
        "src": "./assets/images/slider2.jpg"
    },
    "slide3": {
        "id": "slide3",
        "src": "./assets/images/slider3.jpg"
    },
    "slide4": {
        "id": "slide4",
        "src": "./assets/images/slider4.jpg"
    },
    "slide5": {
        "id": "slide5",
        "src": "./assets/images/slider5.jpg"
    },
    "slide6": {
        "id": "slide6",
        "src": "./assets/images/slider6.jpg"
    }
};

const preloadSlideBackgrounds = () => {
    for (const slideId in sliderBackground) {
        const slideBackground = sliderBackground[slideId].src;
        const img = new Image();
        img.src = slideBackground;
        document.getElementById(slideId).style.backgroundImage = `url(${slideBackground})`;
    }
    updateBackgrounds();
};

const updateBackgrounds = () => {
    const activeSlideId = `slide${active + 1}`;
    const activeSlideBackground = sliderBackground[activeSlideId].src;

    slide.forEach(slide => {
        slide.classList.remove('active');
    });

    const currentSlide = document.getElementById(activeSlideId);
    if (currentSlide) {
        currentSlide.classList.add('active');
    }

    setTimeout(() => {
        background.style.transition = 'background-image 0.5s ease';
        background.style.backgroundImage = `url(${activeSlideBackground})`;
    }, 100);

    setTimeout(() => {
        slider.style.transition = '';
    }, 600);
};



document.addEventListener('DOMContentLoaded', () => {
    preloadSlideBackgrounds();
    startAutoplay();
});

next.addEventListener('click', () => {
    stopAutoplay();
    slider.classList.toggle('zoom');

    currdeg = currdeg - (360 / slide.length);

    if (active === slide.length - 1) {
        active = 0;
    } else {
        active++;
    }

    toggle();
    updateBackgrounds();
    startAutoplay();
});

prev.addEventListener('click', () => {
    stopAutoplay();
    slider.classList.toggle('zoom');

    currdeg = currdeg + (360 / slide.length);

    if (active === 0) {
        active = slide.length - 1;
    } else {
        active--;
    }

    toggle();
    updateBackgrounds();
    startAutoplay();
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

let autoplayInterval;

const startAutoplay = () => {
    autoplayInterval = setInterval(() => {
        next.click();
    }, 4500);
};

const stopAutoplay = () => {
    clearInterval(autoplayInterval);
};