/*=============== TOGGLE BUTTONS ===============*/
const buttons = document.querySelectorAll('.card-buttons > button');
const card = document.querySelector('.card');
const sections = document.querySelectorAll('.card-section');

buttons.forEach((btn) => {
   btn.addEventListener('click', function () {
      buttons.forEach((item) => item.classList.remove('is-active'));
      sections.forEach((sec) => sec.classList.remove('is-active'));
      btn.classList.add('is-active');
      btn.getAttribute('data-section') !== '#landing' ?
         card.classList.add('is-active') :
         card.classList.remove('is-active');
      card.setAttribute('data-state', btn.getAttribute('data-section'));
      const section = document.querySelector(btn.getAttribute('data-section'));
      section.classList.add('is-active');
   });
});

/*=============== SHOW SOCIAL NETWORKS ===============*/
const showSocial = (toggleCard, socialCard) => {
   const toggle = document.getElementById(toggleCard),
      social = document.getElementById(socialCard)
   toggle.addEventListener('click', () => {
      if (social.classList.contains('animation')) {
         social.classList.add('down-animation')
         setTimeout(() => {
            social.classList.remove('down-animation')
         }, 1000)
      }
      social.classList.toggle('animation')
   })
}
showSocial('card-toggle', 'card-social')