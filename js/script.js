// Activates when the screen size is changed.
window.addEventListener('resize', checkSize);

const hero = document.querySelector(".hero");
const heroHead = document.querySelector(".hero-head");
const headerLogo = document.getElementById("mtech-logo");
const motto = document.getElementById("mtech-motto");

// Header background
const queryHeaderBackground = document.querySelector(".hero-background");
let styleHeaderBackground = getComputedStyle(queryHeaderBackground);

// Header logo
const queryHeaderLogo = document.querySelector("#mtech-logo");
let styleHeaderLogo = getComputedStyle(queryHeaderLogo);

// Header motto
const queryHeaderMotto = document.querySelector("#mtech-motto");
let styleHeaderMotto = getComputedStyle(queryHeaderMotto);

let backgroundHeight = styleHeaderBackground.height;
let logoWidth = styleHeaderLogo.width;
let logoMargin = styleHeaderLogo.marginTop;

function checkSize() {
    var pageWidth = document.documentElement.clientWidth;

    if(pageWidth > 600) {
        backgroundHeight = '14em';
        logoWidth = '30em';

    }
    else if(pageWidth < 600) {
        backgroundHeight = '10em';
        logoWidth = '20em';
    }

    scrollFunction(backgroundHeight, logoWidth)
}

// When the user scrolls down 10px from the top of the document, resize background and logo inside header.
window.onscroll = function() {scrollFunction(backgroundHeight, logoWidth)};

function scrollFunction(background, width) {

    var pageWidth = document.documentElement.clientWidth;


    let logoWidth = "25em";
    let logoTop = "1em";

    if(pageWidth < 600) {
        logoWidth = "15em";
        logoTop = "";
    }

    // Similar to the style.css
    if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
        hero.style.height = "100px";
        heroHead.style.height = "100px";
        headerLogo.style.width = logoWidth;
        headerLogo.style.top = logoTop;
        motto.style.display = "none";
    } else {
        hero.style.height = background;
        heroHead.style.height = background;
        headerLogo.style.width = width;
        headerLogo.style.removeProperty('top')
        motto.style.display = "block";
        motto.style.animation = "fadeIn 2s";
    }
}