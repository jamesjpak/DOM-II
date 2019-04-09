// Your code goes here



let signBtns = document.querySelector(".content-pick");

signBtns.addEventListener('click', function(){
    if (event.target.className === "btn") {

        event.target.style.backgroundColor = "blue";
        event.target.color = "white";

    }
});

let crazyBackground = document.querySelector(".content-destination");

crazyBackground.addEventListener("mousemove", function(event) {
    event.target.style.backgroundColor = "lightblue";
})


const navColor = document.querySelector('header .nav');

navColor.addEventListener("mouseover", function(event) {
    event.target.style.color = "green";

    setTimeout(function() {
        event.target.style.color = "";
    }, 500);
}, false);



const headerChange = document.querySelectorAll('.text-content');

    headerChange.forEach(header => {
    header.addEventListener("wheel", function(event) {
    event.target.style.color = "blue";
});
});



document.addEventListener("copy", function(event) {
    event.preventDefault();
    alert('DO NOT COPY!!!')
});

let animateHeader = document.querySelector(".logo-heading");
animateHeader.addEventListener("click", function(event) {
    TweenLite.to(animateHeader, 3, {rotation: 720});
})


/* document.addEventListener("select", function(event) {
    event.target.style.backgroundColor = "yellow";
});
*/

// const colorLogo = document.querySelector(".logo-heading");

window.addEventListener("keydown", function(event) {
    if (event.keyCode == 81) {
        document.querySelector(".logo-heading").style.color = "red";
    }

    if (event.keyCode == 87) {
        document.querySelector(".logo-heading").style.color = "white";
    }
})

let resizedColor = document.querySelector(".intro h2");
window.addEventListener("resize", function(event) {
    resizedColor.style.backgroundColor = "gold";
})


let colorifyWord = document.querySelector(".text-content h2");
colorifyWord.addEventListener("mousedown", function(event) {
    event.target.style.color = "green";
});



let scrollChange = document.querySelector(".content-destination h2")

window.addEventListener("scroll", function(event) {
    document.backgroundColor = "lightblue";
});


window.addEventListener("load", function(event) {
    console.log("page successfuly loaded!");
})