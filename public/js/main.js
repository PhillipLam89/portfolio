const navToggle = document.querySelector('.nav-toggle');
const navItems = document.querySelectorAll('.nav__item')
const navLinks = document.querySelectorAll('.nav__link')
const body = document.querySelector('body');
const skillsImage = document.querySelector('.skills-img')

const flipCard = document.querySelector('.card');
const cardDiv = document.querySelector('.card__content');


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

let isCardFlipped = false
flipCard.addEventListener('click', () => {
    !isCardFlipped ? cardDiv.style.transform = `rotateY(.5turn)` : cardDiv.style.transform = `rotateY(1turn)`
    skillsImage.style.opacity = 0
    isCardFlipped = !isCardFlipped
    skillsImage.style.opacity = 1
});



const contactForm = document.querySelector('.contact-form')

let name = document.getElementById('name')
let email = document.getElementById('email')
let subject = document.getElementById('subject')
let message = document.getElementById('message')



contactForm.addEventListener('submit', (e) => {
  e.preventDefault()

  let formData = new FormData(contactForm)
  fetch('/', {
    method: 'POST',
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams(formData).toString()
    }).then(() => alert('Sent! All inquiries will be responded to within 1 business day.')).catch((error) =>
    alert(error))

   document.querySelector('.contact-form').reset()
  }
)
