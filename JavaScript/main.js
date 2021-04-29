// Sticky Header

// window.addEventListener("scroll", function() {
//     const header = document.querySelector("header");
//     header.classList.toggle("sticky", window.scrollY > 0);
// });

// Sidebar Function

const menu = document.querySelector(".menu");
const sidebar = document.querySelector(".sidebar");
const menuBtn = document.querySelector(".menuBtn");

sidebar.style.left = "-250px";

menuBtn.onclick = function() {
    if(sidebar.style.left === "-250px") {
        sidebar.style.left = "0px";
        menu.src = "assets/images/close.png";
        menu.style.width = "1.9rem";
        menu.style.height = "1.9rem";
    }
    else {
        sidebar.style.left = "-250px";
        menu.src = "assets/images/menu.png";
        menu.style.width = "2.68rem";
        menu.style.height = "1.68rem";
        menu.style.filter = "invert(1)";
    }
}


// Copyright Year
window.addEventListener("load", function() {
    document.querySelector("#copyright-year").appendChild(
        document.createTextNode(
            new Date().getFullYear()
        )
    )
});
