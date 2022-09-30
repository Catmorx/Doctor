function mostrarInformacionRes() {
    $.ajax({
        url: baseUrl+'reservation/reservation',
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

function agregarInformacionRes() {
    $.ajax({
        type: "POST",
        url: baseUrl+"doctor/doctor",
        data: JSON.stringify({
            startDate: new Date().toISOString().slice(0, 10),
            devolutionDate: $("#devolutionDate").val(),
            client: {"idClient": parseInt($("#idCliRes").val())},
            doctor: {"id": parseInt($("#idDocRes").val())}
        }),
        //	{"startDate":"2020-12-20","devolutionDate":"2020-12-20","client":{"idClient":1},"doctor":{"id":1}}
        contentType: "application/json"
    }).done(function (data) {
        $("#resultadoDoc").empty();
        $("#devolutionDate").val("");
        $("#idCliRes").val("");
        $("#idDocRes").val("");
        mostrarInformacionRes();
        alert("Elementos de doctor agregados");//imprimimos respuesta
    }).fail(function (e) {
        alert("Algo salió mal");
    });
}