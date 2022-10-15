let menuButton = document.querySelector("#navbar-toggler-burger");
menuButton.addEventListener("click" , e => {
    e.currentTarget.classList.toggle("change")
})

window.addEventListener("scroll", e => {
    if(window.scrollY >= 150)
    {
        document.querySelector("nav").classList.remove("nav-menu-top")
    }
    else {
        document.querySelector("nav").classList.add("nav-menu-top")
        
    }
    
})
window.addEventListener("scroll", e => {
    if(window.scrollY >= 700){
        document.querySelector(".award-title").classList.add("fade_right")
        document.querySelector(".award-image").classList.add("fade_left")
    }
    else{
        document.querySelector(".award-image").classList.remove("fade_left")
        document.querySelector(".award-title").classList.remove("fade_right")
    }

});