window.onscroll = function() {scrollFunction()}

function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.querySelector(".header__info--fixed").classList.add('disable')
        document.querySelector(".header__info--sticky").classList.remove('disable')

        document.querySelector(".header__info--hamburger-fixed").classList.add('disable')
        document.querySelector(".header__info--hamburger-sticky").classList.remove('disable')

        document.querySelector("#menu").style.top = '19%'
        document.querySelector("#overlay").style.top = '19%'
    } else {
        document.querySelector(".header__info--sticky").classList.add('disable')
        document.querySelector(".header__info--fixed").classList.remove('disable')

        document.querySelector(".header__info--hamburger-sticky").classList.add('disable')
        document.querySelector(".header__info--hamburger-fixed").classList.remove('disable')

        document.querySelector("#menu").style.top = '28%'
        document.querySelector("#overlay").style.top = '28%'
    }
}

function hamburger(x) {
    if (x.classList.contains("change")) {
        document.querySelectorAll('.container').forEach(hamburger => {hamburger.classList.remove("change")})
        document.querySelector("#menu").classList.add('disable')
        document.querySelector("#overlay").classList.add('disable')
    } else {
        document.querySelectorAll('.container').forEach(hamburger => {hamburger.classList.add("change")})
        document.querySelector("#menu").classList.remove('disable')
        document.querySelector("#overlay").classList.remove('disable')
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