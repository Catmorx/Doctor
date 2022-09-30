var baseUrl = "https://g6fa7bce83865eb-yc6akd8hrlz5qzxx.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/";
function mostrarInformacionSpe() {
    $.ajax({
        url: baseUrl+'specialty/specialty',
        type: 'GET',
        dataType: "JSON",
        success: function (respuesta) {
            console.log(respuesta);
            allSpecialty(respuesta.items);
        }, error: function (e) {
            console.log(e);
            alert("Algo salió mal");
        }
    });
}
// new Date().toISOString().slice(0, 10)
// https://stackoverflow.com/questions/1531093/how-do-i-get-the-current-date-in-javascript

function allSpecialty(items){
    
    for (let i = 0; i < items.length; i++) {
        const element = items[i];

        $('#specialty').append(`<option value="${element.id}">${element.name}</option>`);
    }    
}

$(document).ready(function(){
    mostrarInformacionSpe();
})
