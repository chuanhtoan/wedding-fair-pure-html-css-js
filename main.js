window.onscroll = function() {scrollFunction()}

function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.querySelector(".header__info--fixed").classList.add('disable')
        document.querySelector(".header__info--sticky").classList.remove('disable')

        document.querySelector(".header__info--hamburger-fixed").classList.add('disable')
        document.querySelector(".header__info--hamburger-sticky").classList.remove('disable')
    } else {
        document.querySelector(".header__info--sticky").classList.add('disable')
        document.querySelector(".header__info--fixed").classList.remove('disable')

        document.querySelector(".header__info--hamburger-sticky").classList.add('disable')
        document.querySelector(".header__info--hamburger-fixed").classList.remove('disable')
    }
}

function hamburger(x) {
    x.classList.toggle("change")
    if (x.classList.contains("change")) {
        document.querySelector('#menu').style.opacity = '1';
    } else {
        document.querySelector('#menu').style.opacity = '0';
    }
}

// Media Query
// var paragraph = document.querySelector('p');
// var mediaQueryList = window.matchMedia('(max-width: 1140px)');
// function screenTest(e) {
//     if (e.matches) {
//         document.querySelector("#fixed-btn-text").innerHTML = 'Đăng ký'
//     } else {
//         document.querySelector("#fixed-btn-text").innerHTML = 'ĐĂNG KÝ NHẬN VÉ MỜI'
//     }
// }
// mediaQueryList.addListener(screenTest);