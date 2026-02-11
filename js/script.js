// navbar
document.querySelector(".toggler").addEventListener("click", function () {
    const menu = document.querySelector(".menu-part-main .menues");
    const icon = document.querySelector(".toggler i");
    menu.classList.toggle("d-menues");
    // Toggle icon
    if (menu.classList.contains("d-menues")) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark"); // cross
    } else {
        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars"); // bars
    }
});

//sticky-navbar on tablet screen 
let navBar = document.querySelector(".nav-bar");
window.addEventListener("scroll", function () {
    if (window.pageYOffset > 90) {
        navBar.classList.add("sticky");
        navBar.style.background = "rgba(0, 0, 0, 0.6)"; // semi-transparent black
        navBar.style.backdropFilter = "blur(3px)"; // frosted glass effect
        navBar.style.webkitBackdropFilter = "blur(3px)"; // for Safari
    }
    else {
        navBar.classList.remove("sticky");
        navBar.style.background = ""; // semi-transparent black
        navBar.style.backdropFilter = ""; // frosted glass effect
        navBar.style.webkitBackdropFilter = ""; // for Safari
    }
});

// slider
$(document).ready(function () {
    $("#owlone").owlCarousel({
        items: 2,
        loop: true,
        margin: 25,
        autoplay: true,
        autoplayTimeout: 3000, // ⏳ wait 3s before sliding
        autoplaySpeed: 1000,   // 🎬 smooth sliding animation (1s)
        smartSpeed: 1000,      // 🪄 smooth navigation speed
        nav: true,
        dots: false,
        navText: [
            "<span class='custom-left'><i class='fa-solid fa-arrow-left'></i></span>",
            "<span class='custom-right'><i class='fa-solid fa-arrow-right'></i></span>"
        ],
        autoplayHoverPause: true, // ✅ pause on hover
        responsive: {
            0: {
                items: 1,
            }
        }
    });

});

// scroll - up - btn
let btn = document.getElementById("scrollBtn");
window.addEventListener("scroll", function () {
    //page scroll
    let scrollTop = window.scrollY || document.documentElement.scrollTop;
    //displayarea height
    let windowHeight = window.innerHeight;
    // total document height
    let docHeight = document.documentElement.scrollHeight;

    if (scrollTop + windowHeight >= docHeight - 10) {
        btn.style.display = "block";
    } else {
        btn.style.display = "none";
    }
});

btn.addEventListener("click", function (e) {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: "smooth"  // ✅ smooth animation
    });
});

// Read More / Read Less Toggle”
document.querySelectorAll('.read-more-btn').forEach(button => {
    button.addEventListener('click', function (e) {
        e.preventDefault();
        const extraContent = this.closest('figcaption').querySelector('.extra-content');
        extraContent.classList.toggle('show');
        this.innerHTML = extraContent.classList.contains('show')
            ? 'Read Less <i class="fa-solid fa-arrow-up"></i>'
            : 'Read More <i class="fa-solid fa-arrow-right"></i>';
    });
});

// Tabbed Content Navigation Feature
const tabs = document.querySelectorAll('.upper-part-about .item');
const panes = document.querySelectorAll('.tab-content .tab-pane');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {

        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');

        const target = tab.getAttribute('data-target');
        panes.forEach(pane => {
            pane.classList.remove('active');
            if (pane.id === target) pane.classList.add('active');
        });
    });
});

// Project Filter” or “Category Filter” feature
let projects = document.querySelectorAll(".project");
function filterProjects(catagory) {
    if (catagory === 'all') {
        projects.forEach(function (project) {
            project.style.display = "block";
        })
    }
    else {
        projects.forEach(function (project) {
            project.style.display = "none";
        });
        // To show a particular project
        let selectedprctCatagory = document.querySelectorAll('.' + catagory);
        selectedprctCatagory.forEach(function (project) {
            project.style.display = 'block'
        })

    }
}






