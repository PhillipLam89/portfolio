const navToggle = document.querySelector('.nav-toggle');
const navItems = document.querySelectorAll('.nav__item')
const navLinks = document.querySelectorAll('.nav__link')
const body = document.querySelector('body');
const skillsImage = document.querySelector('.card__content')

const flipCard = document.querySelector('.card');
const cardDiv = document.querySelector('.card__content');

const wrapper = document.querySelector('.wrapper')
const desktopSection = document.querySelector('.my-work-section')
// Mobile detection-------------------------------------------------------------------------------

let isUsingMobileDevice = navigator.maxTouchPoints > 0 ||
                          navigator.msMaxTouchPoints > 0 ||
                          window.orientation ? true : false
        isUsingMobileDevice = (  //user sniffer agent is used as last resort only
            /\b(BlackBerry|webOS|iPhone|IEMobile)\b/i.test(navigator.userAgent) ||
            /\b(Android|Windows Phone|iPad|iPod)\b/i.test(navigator.userAgent)
        );

  //displays site for mobile devices if true:

isUsingMobileDevice ? wrapper.style.display = 'none' : desktopSection.style.display = 'none'


//-------------------------------------------------------------------------------------------------


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

//skills div display for mobile

const whatIKnow = document.querySelector('.what-i-know');

whatIKnow.addEventListener('click', () => {
  whatIKnow.style.animation = 'fadeOut 2s ease'
  whatIKnow.style.cursor = 'auto'
  whatIKnow.style.opacity = 0

  const displaySkills = document.querySelector('.tech-skills-div')
  const displayTools = document.querySelector('.tools-skills-div')
  const skillsWrapper = document.querySelector('.skills-wrapper-mobile')
  setTimeout( () => {
    skillsWrapper.style.animation = `fade 2s ease`
    skillsWrapper.style.opacity = 1
    skillsWrapper.style.display = 'flex'
    whatIKnow.style.display = 'none'
  }, 1000)
});



//skills div display (3d flip card) for desktop
let isCardFlipped = false
flipCard.addEventListener('click', () => {
    !isCardFlipped ? cardDiv.style.transform = `rotateY(.5turn)` : cardDiv.style.transform = `rotateY(1turn)`

    isCardFlipped = !isCardFlipped
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
