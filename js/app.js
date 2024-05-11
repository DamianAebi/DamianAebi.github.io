// Handle active class for nav links
let navLinks = document.querySelectorAll('.nav-link');
for (let i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener('click', function() {
    let activeLink = document.querySelector('.nav-link.active');
    activeLink.classList.remove('active');
    this.classList.add('active');
  });
}
