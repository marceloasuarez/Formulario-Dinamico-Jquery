var num_campos=4;

function nuevo(){
    //alert("novo")
    $("#tablaUsuarios").append("<tr>"+
        "<td><input name='prod[]' type='text' size='15' placeholder='Ingresa Marca' required/></td>"+
        "<td><input name='cant[]' type='text' size='10' placeholder='Ingresa Cantidad' required/></td>"+
        "<td><input name='desc[]' type='text' size='10' placeholder='Ingresa Descripcion' required/></td>"+
        "<td><input name='val[]' type='text' size='10' placeholder='Ingresa Valor' required/></td>"+
        "<td><input type='button' value='Eliminar' onclick='eliminar(this)' class='btn btn-danger eliminar'></td>"+
        "</tr>")
}

function guardar(e){
    e.preventDefault()
    var res = $("form#f").serializeArray();
    //console.log(res)
    var nprod = res.length;
    var cont = 0;
    $("#result").empty();
    var produtos = [];
    var produto = [];
    for (i=0;i<nprod;i++){
  
        $("#result").append(res[i].value);
        
        produto.push(res[i].value);
        
        if(cont < num_campos-1 ){
            $("#result").append(", ");
            cont++;
        }
        else{
            $("#result").append(" <br />");
            produtos.push(produto);
            produto = [];
            cont=0;
        }
    }
    //console.log(produtos);
    
}

function eliminar(e){
    $(e).parent().parent().fadeOut(400).remove();

}

function iniciar(){
    
    $("#newp").on("click",nuevo)
    $("#guardar").on("click",guardar)
}

$(document).on("ready",iniciar)