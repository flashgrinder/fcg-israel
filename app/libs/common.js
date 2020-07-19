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
        animationTimingFunc: 'linear',
        breakpoints: {
            1024: {
              perView: 4
            },
            768: {
              perView: 3
            },
            576: {
              perView: 2
            },
            400: {
              perView: 1
            }
        }
    });

    glide.mount();

    /* Modal Window */
    const modalService = () => {
        const d = document;
        const body = d.querySelector('body');
        const buttons = d.querySelectorAll('[data-modal-trigger]');

        for(let button of buttons) {
            triggerEvent(button);
        }
        
        function triggerEvent(button) {
          button.addEventListener('click', () => {
            const trigger = button.getAttribute('data-modal-trigger');
            const modal = d.querySelector(`[data-modal=${trigger}]`);
            const modalBody = modal.querySelector('.modal__body');
            const closeBtn = modal.querySelector('.modal__close');
            
            closeBtn.addEventListener('click', () => modal.classList.remove('is-open'))

            modal.addEventListener('click', () => {
                modal.classList.remove('is-open')
                modal.classList.add('is-out');
                setTimeout(() => {
                    modal.classList.remove('is-out');
                }, 1300);
            } )
            
            modalBody.addEventListener('click', (e) => e.stopPropagation());
      
            modal.classList.add('is-open');
            
            body.addEventListener('keydown', (e) => {
                    if(e.keyCode === 27) {
                        modal.classList.remove('is-open')
                    }
                });
            });
        }
    }
      
    modalService();

});