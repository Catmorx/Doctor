function mostrarInformacionCli() {
    $.ajax({
        url: 'https://g6fa7bce83865eb-yc6akd8hrlz5qzxx.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/client/client',
        type: 'GET',
        dataType: "JSON",
        success: function (respuesta) {
            tablaRespuestaCli(respuesta.items);
        }, error: function (e) {
            console.log(e);
            alert("Algo salió mal");
        }
    });
}
function tablaRespuestaCli(items) {
    let myTableCli="<table BORDER CELLPADDING=2 BORDERCOLOR='#7c65b1'><th scope='col'> ID </th><th> FULL NAME </th><th> EMAIL </th><th> AGE </th>";
    for(let i=0;i<items.length;i++){
        myTableCli+="<tr>";
        myTableCli+="<td>"+items[i].id+"</td>";
        myTableCli+="<td>"+items[i].name+"</td>";
        myTableCli+="<td>"+items[i].email+"</td>";
        myTableCli+="<td>"+items[i].age+"</td>";
        myTableCli+="<td> <button onclick='finishActuCli("+items[i].id+")'>Editar</button></td>";
        myTableCli+="<td> <button onclick='borrarInformacionCli("+items[i].id+")'>Borrar</button></td>";
        myTableCli+="</tr>";
    }
    $("#resultadoCli").append(myTableCli);
    myTableCli="</table>";
}

function finishActuCli(id) {
    $("#idCli").val(id);
}
function agregarInformacionCli() {
    $.ajax({
        type: "POST",
        url: "https://g6fa7bce83865eb-yc6akd8hrlz5qzxx.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/client/client",
        data: JSON.stringify({
            id: $("#idCli").val(),
            name: $("#nameCli").val(),
            email: $("#emailCli").val(),
            age: $("#ageCli").val(),
        }),
        contentType: "application/json"
    }).done(function (data) {
        $("#resultadoCli").empty();
        $("#idCli").val("");
        $("#nameCli").val("");
        $("#emailCli").val("");
        $("#ageCli").val("");
        mostrarInformacionCli();
        alert("Elementos Guardados Client")//imprimimos respuesta
    }).fail(function (e) {
        alert("Algo salió mal");
    });
}
function finishActuCli(id, name) {
    $("#idCli").val(id);
    $("#nameCli").val(name);
}
function actualizarInformacionCli() {
    $.ajax({
        method: 'PUT',
        url: 'https://g6fa7bce83865eb-yc6akd8hrlz5qzxx.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/client/client',
        data: JSON.stringify({
            id: $("#idCli").val(),
            name: $("#nameCli").val(),
            email: $("#emailCli").val(),
            age: $("#ageCli").val(),
        }),
        contentType: "application/JSON"
    }).done(function (data) {
        $("#resultadoCli").empty();
        $("#idCli").val("");
        $("#nameCli").val("");
        $("#emailCli").val("");
        $("#ageCli").val("");
        mostrarInformacionCli();
        alert("Elementos Actualizados")//imprimimos respuesta
    }).fail(function (e) {
        console.log(e);
        alert("Algo salió mal");
    });
}
function borrarInformacionCli(id) {
    $.ajax({
        method: 'DELETE',
        url: 'https://g6fa7bce83865eb-yc6akd8hrlz5qzxx.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/client/client',
        data: JSON.stringify({ id }),
        contentType: "application/json",
        success: function (data) {
            $("#resultadoCli").empty();
            alert("Elementos se han eliminado")//imprimimos respuesta
        }, error: function (e) {
            console.log(e);
            alert("Algo salió mal");
        }, complete: function () {
            mostrarInformacionCli();
        }
    });
}