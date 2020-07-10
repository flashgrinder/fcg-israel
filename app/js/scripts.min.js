document.addEventListener('DOMContentLoaded', function () {

    /* Particles */
    particlesJS.load('particles-js', 'js/particles.json', function() {
        console.log('callback - particles.js config loaded');
    });

    /* Main-screen Slogan */
    $('.main-screen__slogan:first').addClass('is-active');

    setInterval(function(){
        let $next = $('.main-screen__slogan.is-active')
                    .removeClass('is-active')
                    .next('.main-screen__slogan');

        $next.length ? $next.addClass('is-active') : $('.main-screen__slogan:first').addClass('is-active');

    }, 5000)

});