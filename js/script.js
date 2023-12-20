/*==================== SHOW MENU =============================*/
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close');

/*===================== MENU SHOW ============================*/
/* Validate if constant exists */
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

/*========================= MENU HIDDEN =====================*/
/* Validate if constant exists */
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

/*=================== REMOVE MENU MOBILE =====================*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=================== ADD BLUR TO HEADER =======================*/
const blurHeader = () => {
    const header = document.getElementById('header')
    // When the scroll is greater than 50 viewport height, add the blur-header class to the header tag
    this.scrollY >= 50
        ? header.classList.add('blur-header')
        : header.classList.remove('blur-header')
}
window.addEventListener('scroll', blurHeader)

/*===================== SHOW SCROLL UP =============================*/
const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up')
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
    this.scrollY >= 350
        ? scrollUp.classList.add('show-scroll')
        : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== SCROLL SECTIONS ACTIVE LINK =================*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () => {
    const scrollDown = window.scrollY

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute('id'),
            sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

        if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
            sectionsClass.classList.add('active-link')
        } else {
            sectionsClass.classList.remove('active-link')
        }
    })
}

// =====================destinations============================
// swiper
const swiper = new Swiper(".mySwiper", {
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
});
const swiper2 = new Swiper(".mySwiper2", {
    loop: true,
    spaceBetween: 10,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    thumbs: {
        swiper: swiper,
    },
})

// ======= Other Destination =============
const API_URL = "https://be-2-bandung-7-production.up.railway.app";
fetch(`${API_URL}/destinations`)
    .then(response => response.json())
    .then(data => {
        const img1 = document.querySelector('.destination__img1');
        const title1 = document.querySelector('.destination__title1');
        const kota1 = document.querySelector('.kota1');

        const img2 = document.querySelector('.destination__img2');
        const title2 = document.querySelector('.destination__title2');
        const kota2 = document.querySelector('.kota2');

        const img3 = document.querySelector('.destination__img3');
        const title3 = document.querySelector('.destination__title3');
        const kota3 = document.querySelector('.kota3');

        const img4 = document.querySelector('.destination__img4');
        const title4 = document.querySelector('.destination__title4');
        const kota4 = document.querySelector('.kota4');

        const img5 = document.querySelector('.destination__img5');
        const title5 = document.querySelector('.destination__title5');
        const kota5 = document.querySelector('.kota5');

        const img6 = document.querySelector('.destination__img6');
        const title6 = document.querySelector('.destination__title6');
        const kota6 = document.querySelector('.kota6');


        img1.src = data[0].imageUrl;
        title1.textContent = data[0].negara;
        kota1.textContent = data[0].kota;

        img2.src = data[1].imageUrl;
        title2.textContent = data[1].negara;
        kota2.textContent = data[1].kota;

        img3.src = data[2].imageUrl;
        title3.textContent = data[2].negara;
        kota3.textContent = data[2].kota;

        img4.src = data[3].imageUrl;
        title4.textContent = data[3].negara;
        kota4.textContent = data[3].kota;

        img5.src = data[4].imageUrl;
        title5.textContent = data[4].negara;
        kota5.textContent = data[4].kota;

        img6.src = data[5].imageUrl;
        title6.textContent = data[5].negara;
        kota6.textContent = data[5].kota;
    })
    .catch(error => console.error('Error:', error));


// ==================== contact us ============================

document.getElementById('input-form').addEventListener('submit', async function (event) {
    event.preventDefault();

    let name = document.getElementById('input-name').value;
    let email = document.getElementById('input-email').value;
    let message = document.getElementById('input-message').value;

    let data = {
        name: name,
        email: email,
        message: message
    };

    try {
        const response = await fetch(`${API_URL}/messages`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        if (response.ok) {
            // If the response status is in the range 200-299
            const jsonData = await response.json();

            Swal.fire({
                title: "Success!",
                text: "Message successfully sent!",
                icon: "success"
            });

            // Empty the form
            document.getElementById('input-name').value = '';
            document.getElementById('input-email').value = '';
            document.getElementById('input-message').value = '';
        } else {
            // If the response status is not in the range 200-299
            const errorData = await response.json();
            console.error('Error:', errorData);

            Swal.fire({
                title: "Error!",
                text: errorData.message || "Failed to send message. Please try again later.",
                icon: "error"
            });
        }
    } catch (error) {
        console.error('Error:', error);

        Swal.fire({
            title: "Error!",
            text: "An unexpected error occurred. Please try again later.",
            icon: "error"
        });
    }
});





