const menuBtn = document.querySelector('.header__menu-logo');
const menuNavList = document.querySelector('.header__nav');

menuBtn.addEventListener('click', function () {
    menuNavList.classList.toggle('u-slide-in')
})