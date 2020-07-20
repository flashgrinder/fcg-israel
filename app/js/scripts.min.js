document.addEventListener('DOMContentLoaded', function () {

    /* Particles */
    particlesJS("particles-js", 
        {"particles":
            {
                "number": {
                "value":80,
                "density": {
                    "enable":true,
                    "value_area":1000}
                },
                "color": {
                "value":"#ffffff"
                },
                "shape": {
                    "type":"circle",
                    "stroke": {
                        "width":0,
                        "color":"#000000"
                    },
                    "polygon": {
                        "nb_sides":5
                    },
                    "image": {
                        "src":"img/github.svg",
                        "width":100,
                        "height":100
                    }
                },
                "opacity": {
                    "value":0.5,
                    "random":false,
                    "anim": {
                        "enable":false,
                        "speed":1,
                        "opacity_min":0.1,
                        "sync":false
                    }
                },
                "size": {
                    "value":3,
                    "random":true,
                    "anim": {
                        "enable":false,
                        "speed":40,
                        "size_min":0.1,
                        "sync":false
                    }
                },
                "line_linked": {
                    "enable":true,
                    "distance":150,
                    "color":"#ffffff",
                    "opacity":0.4,
                    "width":1
                },
                "move": {
                    "enable":true,
                    "speed":6,
                    "direction":"none",
                    "random":false,
                    "straight":false,
                    "out_mode":"out",
                    "bounce":false,
                    "attract": {
                        "enable":false,
                        "rotateX":600,
                        "rotateY":1200
                    }
                }
            },
            "interactivity": {
                "detect_on":"canvas",
                "events": {
                    "onhover": {
                        "enable":false,
                        "mode":"repulse"
                    },"onclick": {
                        "enable":false,
                        "mode":"push"
                    },
                    "resize":true
                },
                "modes": {
                    "grab": {
                        "distance":400,
                        "line_linked": {
                            "opacity":1
                        }
                    }, 
                    "bubble": {
                        "distance":400,
                        "size":40,
                        "duration":2,
                        "opacity":8,
                        "speed":3
                    },
                    "repulse": {
                        "distance":200,
                        "duration":0.4
                    },
                    "push": {
                        "particles_nb":4
                    },"remove": {
                        "particles_nb":2
                    }
                }
            },
            "retina_detect":true
        });

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
                
                closeBtn.addEventListener('click', () => {
                    modal.classList.remove('is-open');
                    modal.classList.add('is-out');
                    setTimeout(() => {
                        modal.classList.remove('is-out');
                    }, 1300);
                });

                modal.addEventListener('click', () => {
                    modal.classList.remove('is-open');
                    modal.classList.add('is-out');
                    setTimeout(() => {
                        modal.classList.remove('is-out');
                    }, 1300);
                });
            
                modalBody.addEventListener('click', (e) => e.stopPropagation());
        
                modal.classList.add('is-open');
                
                body.addEventListener('keydown', (e) => {
                        if(e.keyCode === 27) {
                            modal.classList.remove('is-open');
                            modal.classList.add('is-out');
                            setTimeout(() => {
                                modal.classList.remove('is-out');
                            }, 1300);
                        }
                    })
                });
            }
    }
      
    modalService();

});