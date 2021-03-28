const navToggle = document.querySelector('.nav-toggle');
const navItems = document.querySelectorAll('.nav__item')
const navLinks = document.querySelectorAll('.nav__link')
const body = document.querySelector('body');

navToggle.addEventListener('click', () => {

  document.body.classList.toggle('nav-open');
  navItems.forEach((link, index) => {
    link.style.animation ? link.style.animation = '' : link.style.animation = `navLinkFade 1.5s ease forwards ${index + 1 * index / 7 + 1}s`
  })

});

navItems.forEach(link => {
  link.addEventListener('click', () => {
    document.body.classList.remove('nav-open');
    navItems.forEach(link => {
      link.style.animation = ''
    })
  })

})
