const initApp = () => {
    const hamburguerBtn = document.getElementById('hamburger-btn')
    const hamburguerIco = document.getElementById('hamb-icon')
    const navBtnMobile = document.querySelectorAll('.navBtnMobile')
    const navMenuMobile = document.getElementById('navMenu-mobile')

    const toggleMenu = () => {
        hamburguerBtn.classList.toggle('open')
        navMenuMobile.classList.toggle('hidden')
        hamburguerIco.classList.toggle('color-bg')
    }

    hamburguerBtn.addEventListener('click', toggleMenu)
    for (let i = 0; i < navBtnMobile.length; i++) {
        navBtnMobile[i].addEventListener('click', toggleMenu)
    }
}

document.addEventListener('DOMContentLoaded', initApp)