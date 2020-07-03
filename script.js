AOS.init();


const toggle = document.querySelector(".toggle");
const menu = document.querySelector(".menu");


/* Toggle mobile menu */
function toggleMenu() {
    if (menu.classList.contains("active")) {
        menu.classList.remove("active");

        // adds the menu (hamburger) icon
        toggle.querySelector("a").innerHTML = "<li class=\"toggle\"><a href=\"#\"><i class=\"fas fa-bars\"></i></a></li>";
    } else {
        menu.classList.add("active");

        // adds the close (x) icon
        toggle.querySelector("a").innerHTML = "<li class=\"toggle\"><a href=\"#\"><i class=\"fas fa-times\"></i></a></li>";
    }
}

/* Event Listener */



toggle.addEventListener("click", toggleMenu, false);




/* Event Listeners */

