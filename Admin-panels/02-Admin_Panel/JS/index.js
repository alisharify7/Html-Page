let done_projects = document.querySelector("#done-projects-container")
let wait_projects = document.querySelector("#wait-projects-container")
let doing_projects = document.querySelector("#doing-projects-container")

let chart = new Chart(done_projects, {
    type: 'bar',
    data: {
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [{
        label: '# of Votes',
        data: [12, 8, 3, 11, 20, 50],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });

let chart_wait = new Chart(wait_projects, {
    type: 'bar',
    data: {
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [{
        label: '# of Votes',
        data: [65, 31, 85, 34, 15, 4],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });

let chart_doing = new Chart(doing_projects, {
    type: 'bar',
    data: {
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [{
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });



let btn_close_menu = document.querySelector('.btn-close-menu')
// side bar menu 
btn_close_menu.addEventListener("click", (e)=>{
  btn_close_menu.classList.toggle("closed")
  if(btn_close_menu.children[0].className == "bi bi-arrow-right")
  {
    btn_close_menu.children[0].className = "bi bi-arrow-left"
  }
  else{
    btn_close_menu.children[0].className = "bi bi-arrow-right"
  }
  document.querySelector(".menu-container").classList.toggle("close")
  // document.querySelector(".menu-bottons-aside").classList.add("d-none")
  document.querySelectorAll(".hidden-btn-menu").forEach(each=>{
    each.classList.toggle("d-none")
  })
  document.querySelector(".navak-menu-icon").classList.toggle("d-none")
  document.querySelector(".navak-asie-header-img").classList.toggle("d-none")
  document.querySelector(".left-column").classList.toggle("open")
  document.querySelector(".left-column").classList.toggle("col-md-8")
  document.querySelector(".left-column").classList.toggle("col-lg-10")
})



// in mobile size aside nav menu closed automaticlly
window.addEventListener("DOMContentLoaded", (e)=>{

  window.addEventListener("resize", (e)=>{
    if(window.innerWidth <= 768){
    if(!document.querySelector(".btn-close-menu").classList.contains("closed"))
    {document.querySelector(".btn-close-menu").click()}
  }
  if(window.innerWidth >= 948){
    // if size is ok automaticlly open size navbar
    if(document.querySelector(".btn-close-menu").classList.contains("closed"))
    { document.querySelector(".btn-close-menu").click()  }
  }
  })

if(window.innerWidth <= 768){
if(!document.querySelector(".btn-close-menu").classList.contains("closed"))
{
  document.querySelector(".btn-close-menu").click()
}
}
if(window.innerWidth >= 948){
// if size is ok automaticlly open size navbar
if(document.querySelector(".btn-close-menu").classList.contains("closed"))
{
  document.querySelector(".btn-close-menu").click()
}
}

})