
function selectCityfromArea(city_id, checkedState) {
    if (city_tag_names.innerHTML.toString().includes("حداقل یک شهر را انتخاب کنید."))
        city_tag_names.innerHTML = "";

    if (checkedState) {
        city_tag_names.innerHTML += `
    
        <div class="d-flex align-items-center bg-transparent text-muted border-color-brand border-radius-30 px-2 pt-2 me-2" id="city-tag-` + city_id + `">
        <h6 class="text-danger fs-8">` + city_id + `</h6>
        <button
          class="bg-transparent text-danger border-0 border-radius-circle bg-danger-hover fs-10 fw-bold px-2 py-1 ms-1"
          onclick="removeElement('`+ 'city-tag-' + city_id + `'); check_cityTagNames(); document.querySelector('` + '#checkbox-tag-' + city_id + `').checked = false;">X</button>
      </div>
        
        `;

        document.querySelector("#btnSelectCities").disabled = false;
    }
    else
        removeElement("city-tag-" + city_id);

}

function removeElement(elemnt_id) {
    document.querySelector("#" + elemnt_id).remove();
    check_cityTagNames();
}

function check_cityTagNames() {
    if (!city_tag_names.innerHTML.includes("div"))
    {
        city_tag_names.innerHTML = "<h6 class='text-muted fs-8 pt-2'>حداقل یک شهر را انتخاب کنید.</h6>";
        document.querySelector("#btnSelectCities").disabled = true;
    }
}

function unchecked_checkboxes(checkbox_class) {
    let checkboxes = document.getElementsByClassName(checkbox_class);

    for (let i = 0; i < checkboxes.length; i++) {
        checkboxes[i].checked = false;
    }
}