// Your code goes here

const navColor = document.querySelectorAll('header.nav')

navColor.addEventListener("mouseover", function(event) {
    event.target.style.color = "blue";

    setTimeout(function() {
        event.target.style.color = "";
    }, 500);
}, false);

