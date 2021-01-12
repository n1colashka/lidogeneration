document.addEventListener('DOMContentLoaded', function() {
    function initMainSlider() {
        var mySwiper = new Swiper('.hero__slider', {
            loop: true,
            direction: 'vertical',
            pagination: {
                el: '.swiper-pagination',
                renderBullet: function (index, className) {
                    return '<span class="' + className + '">'+'<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><circle class="pagination-circle" cx="10" cy="10" r="4" transform="rotate(90 10 10)" fill="#384955"/> <circle class="pagination-path" cx="10" cy="10" r="9.75" transform="rotate(90 10 10)" stroke="#384955" stroke-width="0.5"/> </svg>  </span>';
                },
            },
            
        })
    }

    function initLeadsSlider() {
        var mySwiper = new Swiper('.leads__slider', {
            loop: true,
            direction: 'vertical',
            pagination: {
                el: '.swiper-pagination',
                renderBullet: function (index, className) {
                    return '<span class="' + className + '">'+'<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><circle class="pagination-circle" cx="10" cy="10" r="4" transform="rotate(90 10 10)" fill="#ffffff"/> <circle class="pagination-path" cx="10" cy="10" r="9.75" transform="rotate(90 10 10)" stroke="#ffffff" stroke-width="0.5"/> </svg>  </span>';
                  },
            },
            
        })
    }

    function initScroll() {

        const scrollBlock = document.querySelector('.scroll__container');
        
        function blockScroll(scrollBlock) {
            const container = scrollBlock;
            const items = scrollBlock.children;
            let activeIndex = 0;
            let currentHeight = 900;
            let height = 900;
            let offset = 350;
            let offsetInitial = 350;

            if (window.innerWidth <= 1200) {
                offsetInitial = 200;
                offset = 200;
                currentHeight = 460;
                height = 400;
            }
                


            function prepareItems() {

                items[0].classList.add('active');
                
                scrollBlock.style.transition = '0.5s ease';
                Array.prototype.forEach.call(items, function(item) {
                    item.style.transition = '0.5s ease';
                });
            }

            function showSingleBlock() {
                Array.prototype.forEach.call(items, function(item) {
                    item.style.opacity = 0;
                });
                items[activeIndex].style.opacity = 1;
            }

            function showAllBlocks() {
                Array.prototype.forEach.call(items, function(item) {
                    item.style.opacity = '';
                });
                items[activeIndex].style.opacity = '';
            }

            function scrollUp() {
                if (activeIndex < 2) {
                    scrollBlock.style.transform = `translateY(${-offset}px)`;
                    offset += offsetInitial;
                    currentHeight = height - offset + 300;
                    container.style.height = currentHeight + 'px';
                    activeIndex++;
                    changeActive();
                } 
                if (activeIndex == 2) {
                    showSingleBlock();
                }
            }

            function scrollDown() {
                if (activeIndex > 0) {
                    offset -= offsetInitial;
                    scrollBlock.style.transform = `translateY(${-offset + offsetInitial}px)`;
                    activeIndex--;
                    changeActive();

                    if (currentHeight < height) {
                        currentHeight = height - offset + offsetInitial;
                        container.style.height = currentHeight + 'px';
                    }
                    showAllBlocks();
                }
            }

            function changeActive() {
                Array.prototype.forEach.call(items, function(item) {
                    item.classList.remove('active');
                });
                items[activeIndex].classList.add('active');
            }

            function focusBlock() {
                const scrollSection= document.querySelector('.scroll');

                scrollSection.addEventListener('mouseenter', function(e) {
                    window.addEventListener('mousewheel', wheelScroll);  { passive: false } //- добавить третим аргументом, чтобы убрать ошибки в консоли Chrome
                    window.addEventListener('DOMMouseScroll', wheelScroll);  { passive: false } // - добавить третим аргументом, чтобы убрать ошибки в консоли Chrome
                })
                scrollSection.addEventListener('mouseleave', function(e) {
                    window.removeEventListener('mousewheel', wheelScroll);  { passive: true } // - добавить третим аргументом, чтобы убрать ошибки в консоли Chrome
                    window.removeEventListener('DOMMouseScroll', wheelScroll);  { passive: true } // - добавить третим аргументом, чтобы убрать ошибки в консоли Chrome
                })
            }

            function wheelScroll(event){
                var delta = 0;
                if (!event) event = window.event; // Событие IE.
                // Установим кроссбраузерную delta
                if (event.wheelDelta) {
                    // IE, Opera, safari, chrome - кратность дельта равна 120
                    delta = event.wheelDelta/120;
                } else if (event.detail) {
                    // Mozilla, кратность дельта равна 3
                    delta = -event.detail/3;
                }
                if (delta) {
                    // Отменим текущее событие - событие поумолчанию (скролинг окна).
                    if (event.preventDefault) {
                        event.preventDefault();
                    }
                    event.returnValue = false; // для IE
            
                    // если дельта больше 0, то колесо крутят вверх, иначе вниз
                    var dir = delta > 0 ? scrollDown(): scrollUp();
                    
                }
            }

            prepareItems();
            focusBlock();
        }
        
        blockScroll(scrollBlock);
    }

    initMainSlider();
    
    if (window.innerWidth > 991) {
        initScroll();
    }
    if (window.innerWidth > 768) {
        initLeadsSlider();

    }
})