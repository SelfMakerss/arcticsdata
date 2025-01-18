/* DESCRIPTION: CUSTOM JS FILE */

/* NAVIGATION*/
// COLLAPSE THE NAVBAR BY ADDING THE TOP-NAV-COLLAPSE CLASS
window.onscroll = function () {
	scrollFunction();
	scrollFunctionBTT(); // back to top button
};

function scrollFunction() {
	let intViewportWidth = window.innerWidth;
	if (
		document.body.scrollTop > 30 ||
		(document.documentElement.scrollTop > 30) & (intViewportWidth > 991)
	) {
		document.getElementById("navbar").classList.add("top-nav-collapse");
	} else if (
		document.body.scrollTop < 30 ||
		(document.documentElement.scrollTop < 30) & (intViewportWidth > 991)
	) {
		document.getElementById("navbar").classList.remove("top-nav-collapse");
	}
}

// NAVBAR ON MOBILE
let elements = document.querySelectorAll(".nav-link:not(.dropdown-toggle)");

for (let i = 0; i < elements.length; i++) {
    elements[i].addEventListener("click", () => {
        document.querySelector(".offcanvas-collapse").classList.toggle("open");
    });
}

document.querySelector(".navbar-toggler").addEventListener("click", () => {
  document.querySelector(".offcanvas-collapse").classList.toggle("open");
});

// // HOVER ON DESKTOP
// function toggleDropdown(e) {
//     const _d = e.target.closest(".dropdown");
//     let _m = document.querySelector(".dropdown-menu", _d);

//     setTimeout(
//         function () {
//         const shouldOpen = _d.matches(":hover");
//         _m.classList.toggle("show", shouldOpen);
//         _d.classList.toggle("show", shouldOpen);

//         _d.setAttribute("aria-expanded", shouldOpen);
//         },
//         e.type === "mouseleave" ? 300 : 0
//     );
// }

document.querySelectorAll(".dropdown").forEach((dropdown) => {
    let hideTimeout;

    // ON HOVER
    dropdown.addEventListener("mouseover", () => {
        const menu = dropdown.querySelector(".dropdown-menu");
        clearTimeout(hideTimeout); // Clear timeout if it was set
        menu.classList.add("show");
        dropdown.classList.add("show");
    });

    dropdown.addEventListener("mouseleave", () => {
        const menu = dropdown.querySelector(".dropdown-menu");
        hideTimeout = setTimeout(() => {
            menu.classList.remove("show");
            dropdown.classList.remove("show");
        }, 300); // Delay of 0.5 seconds
    });

    // ON CLICK
    dropdown.addEventListener("click", (e) => {
        const menu = dropdown.querySelector(".dropdown-menu");
        if (dropdown.classList.contains("show")) {
            menu.classList.remove("show");
            dropdown.classList.remove("show");
        } else {
            clearTimeout(hideTimeout); // Prevent hiding if clicked
            menu.classList.add("show");
            dropdown.classList.add("show");
        }
    });
});



/* CARD SLIDER - SWIPER */
var cardSlider = new Swiper(".card-slider", {
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    slidesPerView: 3,
    spaceBetween: 70,
    breakpoints: {
        // when window is <= 767px
        767: {
        slidesPerView: 1,
        },
        // when window is <= 991px
        991: {
        slidesPerView: 2,
        spaceBetween: 40,
        },
    },
});

/* BACK TO TOP BUTTON */
// GET THE BUTTON
myButton = document.getElementById("myBtn");

// WHEN THE USER SCROLLS DOWN 20PX FROM THE TOP OF THE DOCUMENT, SHOW THE BUTTON
function scrollFunctionBTT() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        myButton.style.display = "block";
    } else {
        myButton.style.display = "none";
    }
}

// WHEN THE USER CLICKS ON THE BUTTON, SCROLL TO THE TOP OF THE DOCUMENT
function topFunction() {
    document.body.scrollTop = 0; // for Safari
    document.documentElement.scrollTop = 0; // for Chrome, Firefox, IE and Opera
}

// AOS ANIMATION ON SCROLL
AOS.init({
    duration: 1000,
    easing: "ease",
    once: true, // whether animation should happen only once - while scrolling down
});
