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