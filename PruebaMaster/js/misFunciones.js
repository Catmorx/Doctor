function leerClientes(){
    //FUNCION GET
        $.ajax({    
            url : 'https://g6fa7bce83865eb-yc6akd8hrlz5qzxx.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/client/client',
            type : 'GET',
            dataType : 'json',
            success : function(clientes) {
                   let cs=clientes.items;
                   $("#listaClientes").empty();
                   for(i=0;i<cs.length;i++){
                       $("#listaClientes").append(cs[i].id+" <b>"+cs[i].name+"</b> "+cs[i].email+" "+cs[i].age);
                       $("#listaClientes").append("<button onclick='borrarCliente("+cs[i].id+")'>Borrar</button><br>");
                   
                   }
            },
            error : function(xhr, status) {
                alert('ha sucedido un problema');
            }
    });
}
    
function guardarCliente() {
        let data={
            id:$("#id").val(),
            name:$("#name").val(),
            email:$("#email").val(),
            age:$("#age").val(),
        };
        let dataToSend=JSON.stringify(data);
        //console.log(dataToSend);
        $.ajax({    
            url : 'https://g6fa7bce83865eb-yc6akd8hrlz5qzxx.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/client/client',
            type : 'POST',
         //   dataType : 'json',
            data:dataToSend,
            contentType:'application/json',
            success : function(pepito) {
                $("#id").val("");
                $("#name").val("");
                $("#email").val("");
                $("#age").val("");
            },
            error : function(xhr, status) {
                alert('ha sucedido un problema');
            },
            complete: function(){
                leerClientes();
            }
        });
}
    
function editarCliente(){
        let data=JSON.stringify({
            id:$("#id").val(),
            name:$("#name").val(),
            email:$("#email").val(),
            age:$("#age").val(),
        });
        $.ajax({    
            url : 'https://g6fa7bce83865eb-yc6akd8hrlz5qzxx.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/client/client',
            type : 'PUT',
         //   dataType : 'json',
            data:data,
            contentType:'application/json',
            success : function(pepito) {
                $("#id").val("");
                $("#name").val("");
                $("#email").val("");
                $("#age").val("");
            },
            error : function(xhr, status) {
           //     alert('ha sucedido un problema');
            },
            complete: function(){
                leerClientes();
            }
        });
    
}
    
function borrarCliente(idCliente){
        let data=JSON.stringify({
            id:idCliente
        });
        //console.log(dataToSend);
        $.ajax({    
            url : 'https://g6fa7bce83865eb-yc6akd8hrlz5qzxx.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/client/client',
            type : 'DELETE',
         //   dataType : 'json',
            data:data,
            contentType:'application/json',
            success : function(pepito) {
                $("#id").val("");
                $("#name").val("");
                $("#email").val("");
                $("#age").val("");
            },
            error : function(xhr, status) {
           //     alert('ha sucedido un problema');
            },
            complete: function(){
                leerClientes();
            }
        });
}