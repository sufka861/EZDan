window.onload = () => {
    const addressSearch = document.getElementById("address-inpt-field");
    const addressBtn = document.getElementById("address-search-btn");
    const destBtn = document.getElementById("save-dest-btn");

    addressSearch.onkeydown = () => {
        addressBtn.disabled = false;
    }

    addressBtn.onclick = () => {
        document.getElementById("map-pic").src = "images/grandmas_home_map.png";
        destBtn.disabled = false;
    }

    $('#my-modal').on('shown.bs.modal', function () {
        $('#modal-link').on('click', function (e) {
            window.location.replace("noas-destination-2.html");
        })
    })
    
}

