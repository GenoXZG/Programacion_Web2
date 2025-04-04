let inventario = [];
let id = 1;

function start(){
    let continuar = true;
    while(continuar){
        let aux = menu();
        switch(aux){
            case 1:
                agregarProducto();
                break;
            case 2:
                mostrarProducto();
                break;
            case 3:
                buscarProducto();
                break;
            case 4:
                alert("Saliendo del sistema...")
                continuar = false;
                break;
            default:
                alert("Opcion no valida");
                break;
        }
    }
    

    
}


function menu(){
    return parseInt(prompt(`
        Elige una opcion:
        1. Agregar producto
        2. Mostrar inventario
        3. Buscar producto
        4. Salir`));
}


function agregarProducto(){
    let nombre = prompt("Ingresa el nombre del producto: ");
    let cantidad = parseInt(prompt("Ingresa la cantidad del producto:"));
    let precio = parseInt(prompt("Indica el precio del producto por unidad:"));

    if(cantidad > 0 && precio > 0){
        let temp;
        let producto = {
            Numero_producto: id,
            producto: nombre,
            cantidad: cantidad,
            precio: precio
        }
        id++;
        inventario.push(producto)
        alert("Producto agregado con exito");
    }
    else{
        alert("Ingresa una cantidad y/o precio validos: Mayores a  0");
    }
    temp = parseInt(prompt(`Deseas agregar un producto extra?:\n 
                1. Si\n
                2. No`));
        if(temp == 1){
            agregarProducto();
        }
        else if(temp == 2){
            alert("Regresando al menu...");
        }
        else{
            alert("Eleccion no valida")
        }
}


function mostrarProducto(){

    if(inventario.length == 0){
        alert("No hay productos");
    }
    else{
        let mensaje = "Productos en el inventario \n";
        for(let i = 0; i < inventario.length; i++){

            for (let i = 0; i < inventario.length; i++) {
                mensaje += "Producto #" + inventario[i].Numero_producto + "\n";
                mensaje += "Nombre: " + inventario[i].producto + "\n";
                mensaje += "Cantidad: " + inventario[i].cantidad + "\n";
                mensaje += "Precio: $" + inventario[i].precio + "\n";
                mensaje += "------------------------------\n\n";
        };         
    }
    alert(mensaje);  
    }
}


function buscarProducto(){
    aux = 0
    idProducto = parseInt(prompt("Ingresa el id que deseas buscar: "));
    while(aux < inventario.length && idProducto != inventario[aux].Numero_producto){
        aux++;
    }
    if(aux < inventario.length){
        alert("Producto encontrado:\n" +
            "Nombre: " + inventario[aux].producto + "\n" +
            "Cantidad: " + inventario[aux].cantidad + "\n" +
            "Precio: $" + inventario[aux].precio);
    }
    else{
        alert("No se encontró un producto con el id ingresado");
    }
}

start();