let lastScrollTop = 0; 
const navbar = document.getElementById('navbar'); 
window.addEventListener('scroll', function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop; 
    if (scrollTop > lastScrollTop) {
        navbar.classList.add('hide-nav')
    } else {
        navbar.classList.remove('hide-nav') 
    }
    lastScrollTop = scrollTop; 
})
