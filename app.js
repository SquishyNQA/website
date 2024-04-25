const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
const navLogo = document.querySelector('#navbar__logo')

//display the dropdown menu
const mobileMenu = () => {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
};

menu.addEventListener('click', mobileMenu);

//show active menu when scrolling
const highlightMenu = () => {
    const elem = document.querySelector('.highlight')
    const homeMenu = document.querySelector('#home-page')
    const aboutMenu = document.querySelector('#about-page')
    const servicesMenu = document.querySelector('#services-page')
    let scrollPos = window.scrollY
    console.log(scrollPos)

    // adds 'highlight' class to my menu items
    if(window.innerWidth > 960 && scrollPos <600){
        homeMenu.classList.add('highlight')
        aboutMenu.classList.remove('highlight')
        return
    } else if (window.innerWidth > 960 && scrollPos <1400){
        aboutMenu.classList.add('highlight')
        homeMenu.classList.remove('highlight')
        servicesMenu.classList.remove('highlight')
        return
    } else if (window.innerWidth > 960 && scrollPos <2345){
        servicesMenu.classList.add('highlight')
        aboutMenu.classList.remove('highlight')
        return
    }

    if((elem && window.innerWidth <960 && scrollPos <600) || elem){
        elem.classList.remove('highlight')
    }
}

window.addEventListener('scroll', highlightMenu)
window.addEventListener('click', highlightMenu)

const hideMobileMenu = () => {
    const menuBars= document.querySelector('.is-active')
    if(window.innerHeight <= 768 && menuBars){
        menu.classList.toggle('is-active')
        menuLinks.classList.remove('active')
    }
}

menuLinks.addEventListener('click', hideMobileMenu)
navLogo.addEventListener('click', hideMobileMenu)


const hero = document.querySelector('.hero');
let ring;

hero.addEventListener('mousemove', function(e) {
  const x = e.clientX - hero.offsetLeft;
  const y = e.clientY - hero.offsetTop;
  
  if (!ring) {
    ring = document.createElement('div');
    ring.classList.add('gradient-ring');
    hero.appendChild(ring);
  }
  
  ring.style.left = x + 'px';
  ring.style.top = y + 'px';
});

hero.addEventListener('mouseleave', function() {
  if (ring) {
    ring.remove();
    ring = null;
  }
});