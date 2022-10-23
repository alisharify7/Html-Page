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


window.addEventListener("scroll", e=>{
    if(window.scrollY >= 4400)
    {
        document.querySelector(".card-1").classList.add("MoveFromRight")
        document.querySelector(".card-2").classList.add("MoveFromBottom")
        document.querySelector(".card-3").classList.add("MoveFromLeft")
    }
    else{
        document.querySelector(".card-1").classList.remove("MoveFromRight")
        document.querySelector(".card-2").classList.remove("MoveFromBottom")
        document.querySelector(".card-3").classList.remove("MoveFromLeft")
        
    }
})

function hidden_all_cats(){
    let filters_img = document.querySelectorAll(".filter");
    filters_img.forEach((img)=>{
        img.classList.add("d-none")
    })

}


let cat_parent = document.querySelectorAll(".gallery-list-item");
let filters_img = document.querySelectorAll(".filter");
cat_parent.forEach((cat)=> {
    cat.addEventListener("click", e => {
        
        cat_parent.forEach(each => {
            if(each == e.currentTarget)
            {
                each.classList.add("active-item")
            }
            else{
                each.classList.remove("active-item")

            }
        })

        let value = e.currentTarget.dataset.filter
        if(value == "all")
        {
            filters_img.forEach((img)=>{
                img.classList.remove("d-none")
            })
            return;
        }else{
            if(value == "cat1")
            {
                hidden_all_cats();
                document.querySelectorAll(".cat1").forEach( img => {
                    img.classList.remove("d-none")
                })
            }
            else if(value == "cat2")
            {
                hidden_all_cats();
                document.querySelectorAll(".cat2").forEach( img => {
                    img.classList.remove("d-none")
                })
            }
            else if(value == "cat3")
            {
                hidden_all_cats();
                document.querySelectorAll(".cat3").forEach( img => {
                    img.classList.remove("d-none")
                })
            }
        }
    })
})


