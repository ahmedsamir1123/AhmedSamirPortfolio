
let homeSection =document.querySelector("#Home")
console.log(homeSection.offsetHeight);

let homeSectionHeight =homeSection.offsetHeight

document.getElementById("contactBtn").addEventListener("click", myCart)

let mylogoo = document.querySelector("#mylogoo");
let modelElment = document.querySelector("#alert")

function myCart() {

    modelElment.classList.replace("d-none", 'd-block')


}

document.querySelector("#contact").addEventListener("click", () => {
    modelElment.classList.replace("d-none", 'd-block')


})

document.querySelector("#closeElem").addEventListener("click", () => {

    modelElment.classList.replace("d-block", 'd-none')



})


setTimeout(() => {
    window.location.href = "#About"
}, 7000);

var textColor = document.querySelectorAll(".textColor");

let imgPathBlack = mylogoo.getAttribute("src")

let navbg = document.querySelector("nav")
function updateTextColorOnScroll() {

    let imgPath = "imgs/myLogoBlack.png"
    // Check the vertical scroll position
    if (window.scrollY > homeSectionHeight) { // Example threshold for scroll position
        // navbg.style.background = "gray";

        for (var i = 0; i < textColor.length; i++) {
            textColor[i].style.color = "black";

            mylogoo.setAttribute("src", imgPathBlack)

        }
    } else {
        for (var i = 0; i < textColor.length; i++) {
            // navbg.style.background = "transparent";

            textColor[i].style.color = "white";
            mylogoo.setAttribute("src", imgPath)

            //   background: transparent;


        }
    }
}

// Run the function initially
updateTextColorOnScroll();

// Attach the function to the scroll event
window.onscroll = updateTextColorOnScroll;


