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
    testFunc(document.getElementsByClassName('popur__input_tel_but_name')[0].value, document.getElementsByClassName('popur__input_tel_but_email')[0].value, formatPhoneNumber(document.getElementsByClassName('popur__input_tel')[0].value), "+7", formatPostMessage(document.getElementsByClassName('popur__input_tel_but_text')[0].value));
    event.preventDefault();
    function delay() { $('.message__block').fadeOut(1000); }
    $('.message__block').fadeIn(1000, function () {
        setTimeout(delay, 2100);
    });
});

// Форматирование номера телефона и сообщений

function formatPhoneNumber(phone) {
    return phone.replace(/(\d{3})(\d{3})(\d{2})(\d{2})/, "($1)+$2-$3-$4");
}

function formatPostMessage(message) {
    return message.replace(/ /g, "+");
}

// Отправка номера телефона на ресурс

const testFunc = (name, email, phone, phone_iso, text) => {
    const formData = new URLSearchParams();

    formData.append("formservices[]", "03a3af7ae1a8a1f681be12bb7adedce1");
    formData.append("formservices[]", "16aaa60e32e1fcc41fc714b99dd1a98f");
    formData.append("formservices[]", "7026b8ee23d3c754c72a6036da740f51");
    formData.append("formservices[]", "9f1cee882fb6842effb22b0bbb6c980e");

    formData.append("Name", name);
    formData.append("Email", email);
    formData.append("tildaspec-phone-part[]-iso", phone_iso);
    formData.append("tildaspec-phone-part[]", phone);
    formData.append("Phone", `${phone_iso}+${phone}`);
    formData.append("Textarea", text);
    formData.append("tildaspec-referer", "https://movee.ru/#contacts");
    formData.append("tildaspec-fp", "63547c646d7c6863387c6c72752d52552c72752c656e2d55532c656e7c704d6163496e74656c7c767c614d6f7a696c6c617c6e4e657473636170657c706c696e7465726e616c2d7064662d766965776572696e7465726e616c2d7064662d766965776572696e7465726e616c2d7064662d766965776572696e7465726e616c2d7064662d766965776572696e7465726e616c2d7064662d766965776572696e7465726e616c2d7064662d7669657765727c7072327c7731343730683935367c634433307c744f2d3138307c6d54307c");

    fetch("https://forms.tildaapi.com/procces/", {
        method: "POST",
        mode: "cors",
        credentials: "omit",
        headers: {
            "Accept": "application/json, text/javascript, */*; q=0.01",
            "Accept-Language": "ru-RU,ru;q=0.8,en-US;q=0.5,en;q=0.3",
            "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
            "Sec-Fetch-Dest": "empty",
            "Sec-Fetch-Mode": "cors",
            "Sec-Fetch-Site": "cross-site",
        },
        referrer: "https://movee.ru/",
        body: formData.toString(),
    })
    .then(response => response.json())
    .then(data => console.log("сервер всегда говори 'ок', даже если ты плохой бот(((:", data))
    .catch(error => console.error("Error:", error));
};
