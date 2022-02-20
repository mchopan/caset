gsap.registerPlugin(ScrollTrigger);

/*nav Script Start*/

const hamBurger = document.querySelector('.burger');
const navButton = document.querySelector('#navButtons');
const navbar = document.querySelector('.container');

hamBurger.addEventListener('click', function () {
    gsap.from("#navButtons", { x: 400, duration: 0.7 });
    navbar.classList.add("shadow-md");
    if (navButton.classList != 'hidden') {
        navButton.classList.add("hidden");
        gsap.to("#burger2", { rotation: '180deg', duration: 0.1 });
        navbar.classList.add("shadow-md");
    }
    else {
        navButton.classList.remove('hidden');
        gsap.to("#burger2", { rotation: '0deg', duration: 0.1 });
        navbar.classList.remove("shadow-md");
    }
});

function pullFromX() {
    gsap.from("#navButtons", { x: 400, duration: 0.7 });
};
