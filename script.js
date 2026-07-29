// ============================
// SK Adventures & Tours
// Script v3
// ============================


// Smooth scrolling for navigation

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function(e){

        e.preventDefault();

        document.querySelector(this.getAttribute("href"))
        .scrollIntoView({

            behavior:"smooth"

        });

    });

});


// Header background change on scroll

window.addEventListener("scroll", function(){

    const header = document.querySelector(".header");

    if(window.scrollY > 50){

        header.style.background = "rgba(0,0,0,0.9)";

    }
    else{

        header.style.background = "rgba(0,0,0,0.70)";

    }

});


// Gallery image animation

const images = document.querySelectorAll(".gallery-grid img");


images.forEach(image => {

    image.addEventListener("click", function(){

        window.open(this.src, "_blank");

    });

});


// Current year in footer

const year = new Date().getFullYear();

const footerText = document.querySelector("footer p");

if(footerText){

    footerText.innerHTML =
    "© " + year + " SK Adventures & Tours. All Rights Reserved.";

}
