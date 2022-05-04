let lastScrollTop = 0; 
const navbar = document.getElementById('navbar'); 
window.addEventListener('scroll', function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop; 
    if (scrollTop > lastScrollTop) {
        navbar.classList.add('hide-nav'); 
    } else {
        navbar.classList.remove('hide-nav');  
    }
    lastScrollTop = scrollTop; 
})

const open = document.getElementById('contact'); 
const modalContainer = document.getElementById('modal_container'); 
const close = document.getElementById('close'); 
const emailText = document.getElementById('email-text'); 
const navContact = document.getElementById('navContact'); 
const exitModal = document.getElementById('exit-modal'); 
let timesClicked = 0; 


open.addEventListener('click', () => {
    timesClicked++; 
    if (timesClicked % 2 !== 0) {
        modalContainer.classList.add('show'); 
    } else {
        modalContainer.classList.remove('show'); 
    }
})

close.addEventListener('click', () => {
    modalContainer.classList.remove('show'); 
})

navContact.addEventListener('click', () => {
    timesClicked++;
    if (timesClicked % 2 !== 0) {
        modalContainer.classList.add('show'); 
    } else {
        modalContainer.classList.remove('show'); 
    }
})

exitModal.addEventListener('click', () => {
    timesClicked++; 
    modalContainer.classList.remove('show'); 
})




