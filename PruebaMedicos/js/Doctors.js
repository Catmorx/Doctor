function mostrarInformacionDoc(){
    $.ajax({
        url : 'https://g6fa7bce83865eb-yc6akd8hrlz5qzxx.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/doctor/doctor',
        type : 'GET',
        dataType: "JSON",
        success:function(respuesta) {
            console.log(respuesta);
            tableRespuestaDoc(respuesta.items);
        }
    });
}
function tableRespuestaDoc(items){
    let myTableDoc="<table BORDER CELLPADDING=2 BORDERCOLOR='#7c65b1'><th scope='col'> ID </th><th> SPECIALTY </th><th> GRADUATE YEAR </th><th> DEPARTMENT ID </th><th> FULL NAME</th>";
        for(let i=0;i<items.length;i++){
            let name= JSON.stringify(items[i].name);
            myTableDoc+="<tr>";
            myTableDoc+="<td>"+items[i].id+"</td>";
            myTableDoc+="<td>"+items[i].specialty+"</td>";
            myTableDoc+="<td>"+items[i].graduate_year+"</td>";
            myTableDoc+="<td>"+items[i].department_id+"</td>";
            myTableDoc+="<td>"+items[i].name+"</td>";
            myTableDoc+="<td> <button onclick='finishActuDoc("+items[i].id+")'>Editar</button></td>";
            myTableDoc+="<td> <button onclick='borrarInformacionDoc("+items[i].id+")'>Borrar</button></td>";
            myTableDoc+="</tr>";
        }
        $("#resultadoDoc").append(myTableDoc);
        myTableDoc="</table>";
    }

function agregarInformacionDoc(){
    $.ajax({
        type: "POST",
        url: "https://g6fa7bce83865eb-yc6akd8hrlz5qzxx.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/doctor/doctor",
        data: JSON.stringify({
            id:$("#idDoc").val(),
            specialty:$("#specialty").val(),
            graduate_year:$("#graduate_year").val(),
            department_id:$("#department_id").val(),
            name:$("#nameDoc").val(),
        }),
        contentType: "application/json"  
        }).done(function(data) {
            $("#resultadoDoc").empty();
            $("#idDoc").val("");
            $("#specialty").val("");
            $("#graduate_year").val("");
            $("#department_id").val("");
            $("#nameDoc").val("");
            mostrarInformacionDoc();
            alert("Elementos Guardados")//imprimimos respuesta
        }).fail(function(e) {
            alert("Algo salió mal");
    });
}
function finishActuDoc(id){
    
    $("#idDoc").val(id);
}
function actualizarInformacionDoc(){
    $.ajax({
        method : 'PUT',
        url : 'https://g6fa7bce83865eb-yc6akd8hrlz5qzxx.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/doctor/doctor',
        data : JSON.stringify({
            id:$("#idDoc").val(),
            specialty:$("#specialty").val(),
            graduate_year:$("#graduate_year").val(),
            department_id:$("#department_id").val(),
            name:$("#nameDoc").val(),
        }),
        contentType: "application/JSON",
        }).done(function(data) {
            $("#resultadoDoc").empty();
            $("#idDoc").val("");
            $("#specialty").val("");
            $("#graduate_year").val("");
            $("#department_id").val("");
            $("#nameDoc").val("");
            mostrarInformacionDoc();
            alert("Elementos Actualizados")//imprimimos respuesta
        }).fail(function(e) {
            console.log(e);
            alert("Algo salió mal");
    });
    
}
function borrarInformacionDoc(id){
    $.ajax({
        method : 'DELETE',
        url : 'https://g6fa7bce83865eb-yc6akd8hrlz5qzxx.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/doctor/doctor',
        data : JSON.stringify({id}),
        contentType: "application/JSON",
        success:function(data) {
            console.log(data);
            $("#resultadoDoc").empty();
            $("#idDoc").val("");
            $("#specialty").val("");
            $("#graduate_year").val("");
            $("#department_id").val("");
            $("#nameDoc").val("");
            alert("Elementos Se han eliminado")//imprimimos respuesta
        },error:function(e) {
            console.log(e);
            alert("Algo salió mal");
        },complete:function(){
            mostrarInformacionDoc();
        }    
    });
}

