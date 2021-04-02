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





const contactForm = document.querySelector('.contact-form')

let name = document.getElementById('name')
let email = document.getElementById('email')
let subject = document.getElementById('subject')
let message = document.getElementById('message')



contactForm.addEventListener('submit', (e) => {
  e.preventDefault()

  let formData = {
      name: name.value,
      email: email.value,
      subject: subject.value,
      message: message.value
  }


  let xhr =  new XMLHttpRequest()
  xhr.open('POST', '/')
  xhr.setRequestHeader('content-type', 'application/json')
  xhr.onload = function() {
    console.log(xhr.responseText)
    if (xhr.responseText === 'success') {
      alert('sent')
      name.value = ''
      email.value = ''
      subject.value = ''
      message.value = ''
    } else {
      alert('UH OH SUMTHIN WONG')
    }
  }
  xhr.send(JSON.stringify(formData))
})
