window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.querySelector(".header__info--fixed").classList.add('header__info--disable')
        document.querySelector(".header__info--sticky").classList.remove('header__info--disable')
    } else {
        document.querySelector(".header__info--sticky").classList.add('header__info--disable')
        document.querySelector(".header__info--fixed").classList.remove('header__info--disable')
    }
}

// function topFunction() {
//     document.body.scrollTop = 0 // For Safari
//     document.documentElement.scrollTop = 0 // For Chrome, Firefox, IE and Opera
// }