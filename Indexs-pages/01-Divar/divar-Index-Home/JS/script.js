function switchToggle_changeBgColor(toggle_id) {
    var toggle = document.querySelector("#" + toggle_id);
    toggle.classList.toggle("bg-switchToggle-brand");
}

function sidebarButtons_animation(icon_id) {
    var icon = document.querySelector("#" + icon_id);

    if (icon.style.transform == "rotateX(180deg)")
        icon.style.transform = "rotateX(0deg)";
    else
        icon.style.transform = "rotateX(180deg)";
}