var body = document.querySelector("body");
var LightMode = document.querySelector("#light");
var DarkMode = document.querySelector("#darkmode-in");

LightMode.addEventListener("click", function () {
  body.style.backgroundColor = "#eee";
});

DarkMode.addEventListener("click", function () {
    if (body.style.backgroundColor == "black") {
        body.style.backgroundColor = "white";
    } 
  else
    {
        body.style.backgroundColor = "black";
    }
});