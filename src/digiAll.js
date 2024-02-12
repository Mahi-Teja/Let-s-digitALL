const moveToTop = document.querySelector("[move-to-top]");
const menu = document.querySelector("[menu-icon]");
const menuList = document.querySelector("[menu-list]");

// Add event listener for scroll
window.addEventListener('scroll', scrollFunction);

function scrollFunction() {
  // Check if user has scrolled down by a certain amount
  if (window.scrollY > 200) { // Adjust this value as needed
    moveToTop.classList.remove("hidden");
    moveToTop.classList.add("block");
    
  } else {
    // Hide the button if user has scrolled back to the top
    moveToTop.classList.remove("block");
    moveToTop.classList.add("hidden");
  }
}

menu.addEventListener("click",menuToggle)
    

function menuToggle(){
    menuList.classList.toggle("flex")
    menuList.classList.toggle("hidden")
    menu.classList.toggle("rotate-90")
    menu.classList.toggle("-rotate-90")
}