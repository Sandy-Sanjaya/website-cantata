// Toogle Class Active 
const navbarNav = document.querySelector
(".navbar-nav"); 

// Saat hamburger menu di click 
document.querySelector("#hamburger-menu").onclick = () => {
    navbarNav.classList.toggle("active"); 
};

// Klik di luar sidebar untuk menghilangkan nav 
const hamburger = documen.querySelector("#hamburger-menu"); 

document.addEventListener("click", function(e){
    if(!hamburger.contains(e.target) &&!navbarNav.contains(e.target)){
        navbarNav.classList.remove("active"); 
    }
}); 