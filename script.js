//toggle icon
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

// scroll section active link 
let sections = document.querySelectorAll('section');
let navlink = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navlink.forEach(link => {
                link.classList.remove('active');
                document.querySelector('header nav a[herf*=' + id + ']').classList.add('active');
            });
        };
    });
    // sticky navbar
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    //Remove toggle icon && navbar (When you click navbar link (Scroll) )
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

//scroll reveal
ScrollReveal({ 
    reset: true, //ตัวนี้เอาไว้ถ้าไม่อยากให้มันเเสดงซ้ำตอนเลื้อนขึ้นลง ก็Commentสะ
    distance: '80px',
    duration: 2000,
    delay: 200 
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

// typed js
const typed = new Typed('.multiple-text', {
    strings: ['Frontend Developer', 'Web Developer', 'Prompt Engineering', 'Backend Developer'],
    typeSpeed: 90, 
    backSpeed: 90, 
    backDelay: 180,
    loop: true 
});