// Initialize AOS Animation Library
        AOS.init({
            duration: 1000,
            easing: 'ease-in-out',
            once: false
        });

        // Page Loader
        window.addEventListener('load', function() {
            const loader = document.getElementById('pageLoader');
            loader.style.display = 'none';
        });

        // Scroll Progress Bar
        const scrollProgress = document.querySelector('.scroll-progress');
        window.addEventListener('scroll', function() {
            const scrollTop = window.scrollY;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrollPercent = (scrollTop / docHeight) * 100;
            scrollProgress.style.width = scrollPercent + '%';
        });

        // Back to Top Button
        const backToTopBtn = document.getElementById('backToTop');
        window.addEventListener('scroll', function() {
            if (window.scrollY > 300) {
                backToTopBtn.classList.add('show');
            } else {
                backToTopBtn.classList.remove('show');
            }
        });

        backToTopBtn.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });

        // Sticky Booking Button
        const stickyBooking = document.getElementById('stickyBooking');
        window.addEventListener('scroll', function() {
            if (window.scrollY > 0) {
                stickyBooking.classList.add('show');
            } else {
                stickyBooking.classList.remove('show');
            }
        });

        // whatsaap  scroll up 
        window.addEventListener('scroll', function() {
    const whatsapp = document.querySelector('.whatsapp-btn');

    if (window.scrollY > 300) {
        whatsapp.classList.add('scroll-up');
    } else {
        whatsapp.classList.remove('scroll-up');
    }
});

        // Counter Animation
        const counters = document.querySelectorAll('[data-target]');
        const speed = 200;

        const runCounter = (counter) => {
            const target = +counter.getAttribute('data-target');
            const increment = target / speed;

            const updateCount = () => {
                const count = +counter.innerText;

                if (count < target) {
                    counter.innerText = Math.ceil(count + increment);
                    setTimeout(updateCount, 10);
                } else {
                    counter.innerText = target.toLocaleString();
                }
            };

            updateCount();
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const target = entry.target;
                    if (target.hasAttribute('data-target')) {
                        runCounter(target);
                        observer.unobserve(target);
                    }
                }
            });
        });

        counters.forEach(counter => observer.observe(counter));

        // FAQ Toggle
        const faqQuestions = document.querySelectorAll('.faq-question');
        faqQuestions.forEach(question => {
            question.addEventListener('click', function() {
                const faqItem = this.parentElement;
                
                // Close other open items
                document.querySelectorAll('.faq-item.active').forEach(item => {
                    if (item !== faqItem) {
                        item.classList.remove('active');
                    }
                });

                // Toggle current item
                faqItem.classList.toggle('active');
            });
        });

        // Form Submission Handler
        // document.getElementById('quickBookingForm')?.addEventListener('submit', function(e) {
        //     e.preventDefault();
        //     alert('Thank you for your booking request! Our team will contact you shortly.');
        //     this.reset();
        // });

        // document.getElementById('contactForm')?.addEventListener('submit', function(e) {
        //     e.preventDefault();
        //     alert('Thank you for your message! We will get back to you as soon as possible.');
        //     this.reset();
        // });

        const form = document.getElementById("contactForm");
const result = document.getElementById("result");

form.addEventListener("submit", async function(e) {
    e.preventDefault();

    result.innerHTML = "Sending...";

    const formData = new FormData(form);

    const response = await fetch(form.action, {
        method: "POST",
        body: formData
    });

    const data = await response.json();

    if (data.success) {

        result.innerHTML =
        '<div style="color:#28a745;font-weight:600;">Message Sent Successfully!</div>';

        form.reset();

    } else {

        result.innerHTML =
        '<div style="color:red;font-weight:600;">Something went wrong!</div>';
    }
});

// booking form

document.getElementById("quickBookingForm")
.addEventListener("submit", async function(e){

    e.preventDefault();

    const form = this;
    const formData = new FormData(form);

    const response = await fetch(form.action,{
        method:"POST",
        body:formData
    });

    const data = await response.json();

    if(data.success){
        alert("Booking Request Sent Successfully!");
        form.reset();
    }else{
        alert("Something went wrong!");
    }

});
        // Smooth scroll for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                const href = this.getAttribute('href');
                if (href !== '#' && document.querySelector(href)) {
                    e.preventDefault();
                    document.querySelector(href).scrollIntoView({
                        behavior: 'smooth'
                    });

                    // Close mobile menu if open
                    const navbarCollapse = document.querySelector('.navbar-collapse');
                    if (navbarCollapse.classList.contains('show')) {
                        const closeBtn = document.querySelector('.navbar-toggler');
                        closeBtn.click();
                    }
                }
            });
        });

        // Navbar color change on scroll
        const navbar = document.getElementById('navbar');
        window.addEventListener('scroll', function() {
            if (window.scrollY > 100) {
                navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.15)';
            } else {
                navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
            }
        });

        // Initialize Lightbox
//      lightbox.option({
//     resizeDuration: 300,
//     fadeDuration: 300,
//     imageFadeDuration: 300,
//     wrapAround: true,
//     disableScrolling: true
// });


const galleryItems =
document.querySelectorAll('.gallery-item img');

const popup =
document.querySelector('.gallery-popup');

const popupImage =
document.querySelector('.popup-image');

const closeBtn =
document.querySelector('.close-btn');

const nextBtn =
document.querySelector('.next-btn');

const prevBtn =
document.querySelector('.prev-btn');

let currentIndex = 0;

galleryItems.forEach((img,index)=>{

    img.addEventListener('click',()=>{

        currentIndex = index;

        popup.classList.add('active');

        popupImage.src = img.src;

    });

});

nextBtn.addEventListener('click',()=>{

    currentIndex++;

    if(currentIndex >= galleryItems.length){
        currentIndex = 0;
    }

    popupImage.src =
    galleryItems[currentIndex].src;

});

prevBtn.addEventListener('click',()=>{

    currentIndex--;

    if(currentIndex < 0){
        currentIndex =
        galleryItems.length - 1;
    }

    popupImage.src =
    galleryItems[currentIndex].src;

});

closeBtn.addEventListener('click',()=>{

    popup.classList.remove('active');

});

popup.addEventListener('click',(e)=>{

    if(e.target === popup){

        popup.classList.remove('active');

    }

});


        // Preload images
        const preloadImages = () => {
            const images = document.querySelectorAll('img');
            images.forEach(img => {
                img.loading = 'lazy';
            });
        };

        preloadImages();

        // Add mobile menu improvements
        const navbarToggler = document.querySelector('.navbar-toggler');
        navbarToggler?.addEventListener('click', function() {
            this.classList.toggle('active');
        });

  