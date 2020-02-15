(function($){

    $(document).ready(function (){

        var swiper = new Swiper('.swiper-container', {
            spaceBetween: 30,
            pagination: {
                el: '.swiper-pagination',
                clickable: true
            },
            autoplay: {
                delay: 3000,
            },
            loop: true
        });

    });

})(window.jQuery);
