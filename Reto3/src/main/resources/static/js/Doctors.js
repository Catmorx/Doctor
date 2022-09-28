function mostrarInformacionDoc() {
    $.ajax({
        url: 'http://129.213.139.66:8080/api/doctor/all',
        type: 'GET',
        dataType: "JSON",
        success: function (respuesta) {
            console.log(respuesta);
            tableRespuestaDoc(respuesta.items);
        }, error: function (e) {
            console.log(e);
            alert("Algo salió mal");
        }
    });
}
function tableRespuestaDoc(items) {
    let myTableDoc = `<table BORDER CELLPADDING=2 BORDERCOLOR='#7c65b1'><th scope='col'> ID </th><th> SPECIALTY </th><th> GRADUATE YEAR </th><th> DEPARTMENT ID </th><th> FULL NAME</th>`;
    for (let i = 0; i < items.length; i++) {
        myTableDoc += `<tr>`;
        myTableDoc += `<td>${items[i].id}</td>`;
        myTableDoc += `<td>${items[i].specialty}</td>`;
        myTableDoc += `<td>${items[i].graduate_year}</td>`;
        myTableDoc += `<td>${items[i].department_id}</td>`;
        myTableDoc += `<td>${items[i].name}</td>`;
        myTableDoc += `<td> <button onclick="finishActuDoc( ${items[i].id}, '${items[i].specialty}', ${items[i].graduate_year}, ${items[i].department_id}, '${items[i].name}' )" style="background-color:#7c65b1; border-color:#563856; color:white;">Editar</button></td>`;
        myTableDoc += `<td> <button onclick="borrarInformacionDoc(${items[i].id})" style="background-color:#7c65b1; border-color:#563856; color:white;">Borrar</button></td>`;
        myTableDoc += `</tr>`;
    }
    $("#resultadoDoc").append(myTableDoc);
    myTableDoc = `</table>`;
}

function agregarInformacionDoc() {
    $.ajax({
        type: "POST",
        url: "https://g6fa7bce83865eb-yc6akd8hrlz5qzxx.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/doctor/doctor",
        data: JSON.stringify({
            id: $("#idDoc").val(),
            specialty: $("#specialty").val(),
            graduate_year: $("#graduate_year").val(),
            department_id: $("#department_id").val(),
            name: $("#nameDoc").val(),
        }),
        contentType: "application/json"
    }).done(function (data) {
        $("#resultadoDoc").empty();
        $("#idDoc").val("");
        $("#specialty").val("");
        $("#graduate_year").val("");
        $("#department_id").val("");
        $("#nameDoc").val("");
        mostrarInformacionDoc();
        alert("Elementos de doctor agregados");//imprimimos respuesta
    }).fail(function (e) {
        alert("Algo salió mal");
    });
}
function finishActuDoc(id, specialty, graduate_year, department_id, name) {
    $("#idDoc").val(id);
    $("#specialty").val(specialty);
    $("#graduate_year").val(graduate_year);
    $("#department_id").val(department_id);
    $("#nameDoc").val(name);
}
function actualizarInformacionDoc() {
    $.ajax({
        method: 'PUT',
        url: 'https://g6fa7bce83865eb-yc6akd8hrlz5qzxx.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/doctor/doctor',
        data: JSON.stringify({
            id: $("#idDoc").val(),
            specialty: $("#specialty").val(),
            graduate_year: $("#graduate_year").val(),
            department_id: $("#department_id").val(),
            name: $("#nameDoc").val(),
        }),
        contentType: "application/JSON",
    }).done(function (data) {
        $("#resultadoDoc").empty();
        $("#idDoc").val("");
        $("#specialty").val("");
        $("#graduate_year").val("");
        $("#department_id").val("");
        $("#nameDoc").val("");
        mostrarInformacionDoc();
        alert("Elementos de doctor actualizados");//imprimimos respuesta
    }).fail(function (e) {
        console.log(e);
        alert("Algo salió mal");
    });

}
function borrarInformacionDoc(id) {
    $.ajax({
        method: 'DELETE',
        url: 'https://g6fa7bce83865eb-yc6akd8hrlz5qzxx.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/doctor/doctor',
        data: JSON.stringify({ id }),
        contentType: "application/JSON",
        success: function (data) {
            console.log(data);
            $("#resultadoDoc").empty();
            alert("Elementos de doctor se han eliminado");//imprimimos respuesta
        }, error: function (e) {
            console.log(e);
            alert("Algo salió mal");
        }, complete: function () {
            mostrarInformacionDoc();
        }
    });
}

