
const header = document.getElementById("header")
const stickyStart = 200;
function stickyNavbar() {
    if (window.pageYOffset > stickyStart) {
        header.classList.add("sticky");
    }
    else{
        header.classList.remove("sticky");
    }
}
window.onscroll = function () {
    stickyNavbar();
}

const burgerMenu = document.getElementById("burgermenu");
const navMenu = document.querySelector(".menulink");

burgerMenu.addEventListener("click", () => {
  if (navMenu.style.display === "block") {
    navMenu.style.display = "none";
  } else {
    navMenu.style.display = "block";
  }
});



function updateTabButtonStyles(activeTabId) {
    const allTabButtons = document.querySelectorAll('.tablistmenu div');
    allTabButtons.forEach(button => {
        const icon = button.querySelector('i'); 
        if (icon) {
            icon.style.color = ""; 
        }
    });
    const activeButton = document.getElementById(activeTabId + 'Btn');
    const activeIcon = activeButton.querySelector('i'); 
    if (activeIcon) {
        activeIcon.style.color = "orange"; 
    }
}
function Showtab(tabId) {
    const tabs = document.querySelectorAll(".cards");
    tabs.forEach(tab => {
        tab.style.display = "none";
    });

    const selectedTab = document.getElementById(tabId);
    selectedTab.style.display = "flex";

   
    updateTabButtonStyles(tabId);
}


document.getElementById("tab1Btn").addEventListener("click", () => Showtab('tab1'));
document.getElementById("tab2Btn").addEventListener("click", () => Showtab('tab2'));
document.getElementById("tab3Btn").addEventListener("click", () => Showtab('tab3'));
Showtab("tab1");



// (slide)//
let slideIndex = 0;

function changeSlide(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  const slides = document.querySelectorAll('.slide');
  if (n >= slides.length) { slideIndex = 0; } 
  if (n < 0) { slideIndex = slides.length - 1; } 

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slides[slideIndex].style.display = "flex"; 
}

showSlides(slideIndex);


document.querySelector('.prev').addEventListener('click', function() {
  changeSlide(-1);
});

document.querySelector('.next').addEventListener('click', function() {
  changeSlide(1);
});
