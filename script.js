const nav = document.querySelector('.nav');
const hamburger = document.getElementById('hamburger');
const navUl = document.getElementById('nav-ul')

window.addEventListener('scroll', fixNav);

function fixNav() {
    if (window.scrollY > nav.offsetHeight + 20) {
        nav.classList.add('active')
    } else {
        nav.classList.remove('active')
    }
}

hamburger.addEventListener('click', () => {
    navUl.classList.toggle('show')
})