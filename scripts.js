const hamburgerMenu = document.querySelector('.hamburger');
const nav = document.querySelector('nav');
const navLink = document.querySelectorAll('.nav-link');
const body = document.querySelector('body');

hamburgerMenu.addEventListener('click', (event) => {
    handleMobileNav(event.target);
})

const handleMobileNav = () => {
    // toggles open nav, prevent scroll when nav is open
    nav.classList.toggle('open');
    body.classList.toggle('stop-scroll');
    // close nav when link any is clicked, allow scroll to link
    navLink.forEach((link) => {
        link.addEventListener('click', handleNavLinks);
    })
}

const handleNavLinks = () => {
    nav.classList.remove('open');
    body.classList.remove('stop-scroll');
}