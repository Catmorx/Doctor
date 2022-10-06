var host = "http://localhost:8080/api";

function mostrarInformacionMes() {
    $.ajax({
        url: host + '/Message/all',
        type: 'GET',
        dataType: "JSON",
        success: function (respuesta) {
            tablaRespuestaMes(respuesta);
        }, error: function (e) {
            console.log(e);
            alert("Algo salió mal");
        }, error: function (e) {
            console.log(e);
            alert("Algo salió mal");
        }
    });
}

$(document).ready(function () {
    mostrarInformacionMes();
})

function tablaRespuestaMes(items) {
    let myTableMes = `<table BORDER CELLPADDING=2 BORDERCOLOR='#7c65b1'><th scope='col'> MESSAGE </th><th>DOCTOR</th><th>CLIENT</th>`;
    for (let i = 0; i < items.length; i++) {
        myTableMes += `<tr>`;
        myTableMes += `<td>${items[i].messageText}</td>`;
        myTableMes += `<td>${items[i].doctor.name}</td>`;
        myTableMes += `<td>${items[i].client.name}</td>`;
        myTableMes += `<td> <button onclick="finishActuMes('${items[i].messageText}','${items[i].doctor.name}','${items[i].client.name}')" style="background-color:#7c65b1; border-color:#563856; color:white;">Change</button></td>`;
        myTableMes += `<td> <button onclick="borrarInformacionMes(${items[i].idMessage})" style="background-color:#7c65b1; border-color:#563856; color:white;">Delete</button>`;
        myTableMes += `</tr>`;
        console.log(items[i].idMessage)
        const element = items[i];
        $('#client').append(`<option value="${element.client.id}">${element.client.name}</option>`);
        $("#client").val("");
        $('#doctor').append(`<option value="${element.doctor.id}">${element.doctor.name}</option>`);
        $("#doctor").val("");
    }
    $("#resultadoMes").append(myTableMes);
    myTableMes = `</table>`;
}

function agregarInformacionMes() {
    $.ajax({
        type: "POST",
        url: host + "/Message/save",
        data: JSON.stringify({
            id: $("#idMes").val(),
            messagetext: $("#messagetext").val(),
        }),
        contentType: "application/json"
    }).done(function (data) {
        $("#resultadoMes").empty();
        $("#idMes").val("");
        $("#messagetext").val("");
        mostrarInformacionMes();
        alert("Elementos de mensaje agregados");//imprimimos respuesta
    }).fail(function (e) {
        alert("Algo salió mal");
    });
}

function finishActuMes(messagetext, doctor, client) {
    $("#client").val(client);
    $("#messagetext").val(messagetext);
    $("#doctor").val(doctor);
}

function actualizarInformacionMes() {
    $.ajax({
        method: 'PUT',
        url: host + '/Message/update',
        data: JSON.stringify({
            id: $("#idMes").val(),
            messagetext: $("#messagetext").val(),
        }),
        contentType: "application/JSON"
    }).done(function (data) {
        $("#resultadoMes").empty();
        $("#messagetext").val("");
        mostrarInformacionMes();
        alert("Elementos de mensaje actualizados");//imprimimos respuesta
    }).fail(function (e) {
        console.log(e);
        alert("Algo salió mal");
    });
}

function borrarInformacionMes(id) {
    $.ajax({
        method: 'DELETE',
        url: host + 'Message/delete/' + id,
        data: JSON.stringify({id}),
        contentType: "application/json",
        success: function (data) {
            $("#resultadoMes").empty();
            alert("Elementos de mensaje se han eliminado");//imprimimos respuesta
        }, error: function (e) {
            console.log(e);
            alert("Algo salió mal");
        }, complete: function () {
            mostrarInformacionMes();
        }
    });
}