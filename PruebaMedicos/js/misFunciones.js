function traerInformacion(){
    $.ajax({
        url : 'https://g6fa7bce83865eb-yc6akd8hrlz5qzxx.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/doctor/doctor',
        type : 'GET',
        dataType: "JSON",
        success:function(respuesta) {
            console.log(respuesta);
            pintarRespuesta(respuesta.items);
            alert("get abierto")
            // for(i=0;i<respuesta.items.length;i++){
            //     $("#resultado").append(respuesta.items[i].name+"<br>");
            // }
        }
    });
}
function pintarRespuesta(items){
    let myTable="<table BORDER CELLPADDING=2 BORDERCOLOR='#808080'><th scope='col'> ID </th><th> SPECIALTY </th><th> GRADUATE YEAR </th><th> DEPARTMENT ID </th><th> FULL NAME</th>";
        for(let i=0;i<items.length;i++){
            myTable+="<tr>";
            myTable+="<td>"+items[i].id+"</td>";
            myTable+="<td>"+items[i].specialty+"</td>";
            myTable+="<td>"+items[i].graduate_year+"</td>";
            myTable+="<td>"+items[i].department_id+"</td>";
            myTable+="<td>"+items[i].name+"</td>";
            myTable+="<td> <button onclick='borrarInformacion("+items[i].id+")'>Borrar</button>";
            myTable+="</tr>";
        }
        $("#resultado").append(myTable);
        myTable="</table>";
    }

function guardarInformacion(){
    let myData={
        id:$("#id").val(),
        specialty:$("#specialty").val(),
        graduate_year:$("#graduate_year").val(),
        department_id:$("#department_id").val(),
        name:$("#name").val(),
    };
    let dataToSend=JSON.stringify(myData);
   
    $.ajax({
        type: "POST",
        url: "https://g6fa7bce83865eb-yc6akd8hrlz5qzxx.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/doctor/doctor",
        data: JSON.stringify(myData),
        contentType: "application/json"  
        }).done(function(data) {
            $("#resultado").empty();
            $("#id").val("");
            $("#specialty").val("");
            $("#graduate_year").val("");
            $("#department_id").val("");
            $("#name").val("");
            traerInformacion();
            alert("Elementos Guardados")//imprimimos respuesta
        }).fail(function(e) {
        console.log(e);
            alert(e+" "+"Algo salió mal");
    });
}

function editarInformacion(){
    let myData={
        id:$("#id").val(),
        specialty:$("#specialty").val(),
        graduate_year:$("#graduate_year").val(),
        department_id:$("#department_id").val(),
        name:$("#name").val(),
    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        method : 'PUT',
        url : 'https://g6fa7bce83865eb-yc6akd8hrlz5qzxx.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/doctor/doctor',
        data : dataToSend,
        contentType: "aplication/JSON"
        }).done(function(data) {
            $("#resultado").empty();
            $("#id").val("");
            $("#specialty").val("");
            $("#graduate_year").val("");
            $("#department_id").val("");
            $("#name").val("");
            traerInformacion();
            alert("Elementos Actualizados")//imprimimos respuesta
        }).fail(function(e) {
            console.log(e);
            alert("Algo salió mal");
    });
}
function borrarInformacion(idCliente){
    $.ajax({
        method : 'DELETE',
        url : 'https://g6fa7bce83865eb-yc6akd8hrlz5qzxx.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/doctor/doctor',
        data : JSON.stringify({
            id:idCliente
        }),
        contentType: "application/json",
        success:function(data) {
            console.log(data);
            
            $("#id").val("");
            $("#specialty").val("");
            $("#graduate_year").val("");
            $("#department_id").val("");
            $("#name").val("");
            alert("Elementos Se han eliminado")//imprimimos respuesta
        },error:function(e) {
            console.log(e);
            alert("Algo salió mal");
        },complete:function(){
            $("#resultado").empty();
            traerInformacion();
        }    
    });
}

