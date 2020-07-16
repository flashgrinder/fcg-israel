document.addEventListener('DOMContentLoaded', function () {

    /* Particles */
    particlesJS.load('particles-js', 'js/particles.json', function() {});

    /* Main-screen Slogan */
    $('.main-screen__slogan:first').addClass('is-active');

    setInterval(function(){
        let $next = $('.main-screen__slogan.is-active')
                    .removeClass('is-active')
                    .next('.main-screen__slogan');

        $next.length ? $next.addClass('is-active') : $('.main-screen__slogan:first').addClass('is-active');

    }, 5000)

    /* Glide.js Slider */
    let glide = new Glide('.glide', {
        type: 'carousel',
        startAt: 0,
        perView: 4,
        autoplay: 500,
        animationDuration: 8000,
        animationTimingFunc: 'linear'
    });

    glide.mount();

});