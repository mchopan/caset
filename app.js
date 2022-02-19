/*nav Script Start*/
const hamBurger = document.querySelector('.burger');
const navButton = document.querySelector('#navButtons');
const navbar = document.querySelector('.container');

hamBurger.addEventListener('click', function () {
    navbar.classList.add("shadow-md");
    if (navButton.classList != 'hidden') {
        navButton.classList.add("hidden");
        gsap.to("#burger2", { rotation: '180deg', duration: 0.1 });
        gsap.reverse('pullFromX()')
        navbar.classList.add("shadow-md");
    }
    else {
        navButton.classList.remove('hidden');
        gsap.to("#burger2", { rotation: '0deg', duration: 0.1 });
        pullFromX();
        navbar.classList.remove("shadow-md");
    }
});

function pullFromX() {
    gsap.from("#navButtons", { y: -400, duration: 0.6 });
};

/* nav Script End*/


// Animation on images
