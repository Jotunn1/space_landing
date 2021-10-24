$(function () {
    $(".slider__box").slick({
        prevArrow: '<img class="slider__arrow slider__arrow-left" src="/images/Arrow-left.png" alt="">',
        nextArrow: '<img class="slider__arrow slider__arrow-right" src="/images/Arrow-right.png" alt="">'
    });

    $(".menu__btn").on("click", function () {
        $(".menu__list").toggleClass("active")
    });
});