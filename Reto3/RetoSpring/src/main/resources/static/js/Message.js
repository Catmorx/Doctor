function mostrarInformacionMes() {
    $.ajax({
        url: 'https://g6fa7bce83865eb-yc6akd8hrlz5qzxx.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/message/message',
        type: 'GET',
        dataType: "JSON",
        success: function (respuesta) {
            tablaRespuestaMes(respuesta.items);
        }, error: function (e) {
            console.log(e);
            alert("Algo salió mal");
        }, error: function (e) {
            console.log(e);
            alert("Algo salió mal");
        }
    });
}
function tablaRespuestaMes(items) {
    let myTableMes = `<table BORDER CELLPADDING=2 BORDERCOLOR='#7c65b1'><th scope='col'> ID </th><th> MESSAGE TEXT </th>`;
    for (let i = 0; i < items.length; i++) {
        myTableMes += `<tr>`;
        myTableMes += `<td>${items[i].id} </td>`;
        myTableMes += `<td>${items[i].messagetext}</td>`;
        myTableMes += `<td> <button onclick="finishActuMes( ${items[i].id}, '${items[i].messagetext}')" style="background-color:#7c65b1; border-color:#563856; color:white;">Editar</button></td>`;
        myTableMes += `<td> <button onclick="borrarInformacionMes(${items[i].id})" style="background-color:#7c65b1; border-color:#563856; color:white;">Borrar</button>`;
        myTableMes += `</tr>`;
    }
    $("#resultadoMes").append(myTableMes);
    myTableMes = `</table>`;
}

function agregarInformacionMes() {
    $.ajax({
        type: "POST",
        url: "https://g6fa7bce83865eb-yc6akd8hrlz5qzxx.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/message/message",
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
function finishActuMes(id, messagetext) {
    $("#idMes").val(id);
    $("#messagetext").val(messagetext);
}
function actualizarInformacionMes() {
    $.ajax({
        method: 'PUT',
        url: 'https://g6fa7bce83865eb-yc6akd8hrlz5qzxx.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/message/message',
        data: JSON.stringify({
            id: $("#idMes").val(),
            messagetext: $("#messagetext").val(),
        }),
        contentType: "application/JSON"
    }).done(function (data) {
        $("#resultadoMes").empty();
        $("#idMes").val("");
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
        url: 'https://g6fa7bce83865eb-yc6akd8hrlz5qzxx.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/message/message',
        data: JSON.stringify({ id }),
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