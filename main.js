 (function navSlide() {
   const burger = document.querySelector('.burger')
   const nav = document.querySelector('.nav-links')
   const navLinks = document.querySelectorAll('.nav-links li')


    // clickin burger icon toggles navbar slide-in on mobile
   burger.addEventListener('click', () => {
     nav.classList.toggle('nav-active')

     // using each nav links' index will allow individual links to slide in at different time intervals
     navLinks.forEach((link, index) => {
       link.style.animation ? link.style.animation = '' : link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.65}s`

     })

     //burger logo animation
     burger.classList.toggle('toggle')
   })
 })()
