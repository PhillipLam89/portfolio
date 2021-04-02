const navToggle = document.querySelector('.nav-toggle');
const navItems = document.querySelectorAll('.nav__item')
const navLinks = document.querySelectorAll('.nav__link')
const body = document.querySelector('body');

const whatIKnow = document.querySelector('.what-i-know');


navToggle.addEventListener('click', () => {
  document.body.classList.toggle('nav-open');
  navItems.forEach((link, index) => {
    link.style.animation ? link.style.animation = '' : link.style.animation = `navLinkFade 1s ease forwards ${index / 7 + 1}s`
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

whatIKnow.addEventListener('click', () => {
  whatIKnow.style.animation = 'fadeOut 2s ease'
  whatIKnow.style.cursor = 'auto'
  whatIKnow.style.opacity = 0

  const displaySkills = document.querySelector('.tech-skills-div')

  setTimeout( () => {
    displaySkills.style.animation = `fade 2s ease`
    displaySkills.style.opacity = 1
    whatIKnow.style.display = 'none'
  }, 1000)
});
