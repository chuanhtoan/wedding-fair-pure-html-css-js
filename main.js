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
    if (x.classList.contains("change")) {
        document.querySelectorAll('.container').forEach(hamburger => {hamburger.classList.remove("change")})
        document.querySelectorAll('.menu').forEach(menu => {menu.classList.add('hidden')})
        document.querySelector("#overlay").classList.add('hidden')
    } else {
        document.querySelectorAll('.container').forEach(hamburger => {hamburger.classList.add("change")})
        document.querySelectorAll('.menu').forEach(menu => {menu.classList.remove('hidden')})
        document.querySelector("#overlay").classList.remove('hidden')
    }
}
