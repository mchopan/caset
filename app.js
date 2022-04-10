gsap.registerPlugin(ScrollTrigger);

/*nav Script Start*/

const hamBurger = document.querySelector('.burger');
const navButton = document.querySelector('#navButtons');
const navbar = document.querySelector('.container');

hamBurger.addEventListener('click', function () {
    gsap.from("#navButtons", { y: -400, duration: 0.5 });
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
    gsap.from("#navButtons", { y: 400, duration: 0.7 });
};

TweenLite.set('.introline, .bigline',{x:'200%'})

var lines = new TimelineMax({repeat:-1, yoyo:true, repeatDelay:2})
.to('.bigline',1,{x:'0%'})
.to('.introline',1,{x:'0%'}, "+=0.3")