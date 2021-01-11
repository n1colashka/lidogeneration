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

    initMainSlider();
    initLeadsSlider();
})