let BtnMenu = document.querySelector('.menu-burger');
let Menu = document.querySelector('.aside-menu');

Menu.classList.toggle('Menu-Display');

BtnMenu.addEventListener('click' ,function(){
    if(BtnMenu.innerHTML == '<i class="bi bi-list"></i>')
    {
        BtnMenu.innerHTML = '<i class="bi bi-x"></i>';
    }
    else
    {
        BtnMenu.innerHTML = '<i class="bi bi-list"></i>';
    }
    
})


