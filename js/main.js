// Всплывающее бургер-меню в хедер-блоке

$(document).ready(function () {
    $('.header__top_logoMobile').click(function (event) {
        $('.header__top_logoMobile, .header__top_logoMenu').toggleClass('burger__active');
    });
});

// Прокрутка до якоря

const anchors = document.querySelectorAll('a[href*="#"]');

for (let anchor of anchors) {
    anchor.addEventListener("click", function (event) {
        event.preventDefault();
        const blockID = anchor.getAttribute('href')
        document.querySelector('' + blockID).scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    });
};

// Слайдер

var slideIndex = 1;
showSlides(slideIndex);

function plusSlide() {
    showSlides(slideIndex += 1);
}
function minusSlide() {
    showSlides(slideIndex -= 1);
}
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    const slides = document.getElementsByClassName("main__autopark_typeCar");
    const dots = document.getElementsByClassName("main__autopark_typeGazele");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

// Модальное окно

modalWindow = $('.popup__overlay')
$('.popup__modal').click(function () {
    modalWindow.css('display', 'block')
})
modalWindow.click(function (event) {
    e = event || window.event
    if (e.target == this) {
        $(modalWindow).css('display', 'none')
    }
});
$('.popup__close').click(function () {
    modalWindow.css('display', 'none')
});
$('.popur__input_button').click(function () {
    modalWindow.css('display', 'none')
});
$(document).keydown(function (e) {
    if (e.keyCode === 27) {
        modalWindow.css('display', 'none')
    }
});

// Уведомление об отправки

$('.popur__input_button, .main__booking_button').click(function (event) {
    event.preventDefault();
    function delay() { $('.message__block').fadeOut(1000); }
    $('.message__block').fadeIn(1000, function () {
        setTimeout(delay, 2100);
    });
});

