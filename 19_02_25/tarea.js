// Comparacion de numeros

let a = parseInt(prompt("Ingresa un primer numero: "));
let b = parseInt(prompt("Ingresa un segundo numero: "));

if(a > b){
    console.log("El valor del primer numero es mayor que el del segundo: "+ a + " > " + b );
}
else if(b > a){
    console.log("El valor del segundo numero es mayor que el del primero: "+ b + " > " + a );
}
else if( a == b){
    console.log("El valor de ambos numeros es igual: "+ b + " = " + a );
}