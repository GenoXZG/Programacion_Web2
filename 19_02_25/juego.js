let numeroMaquina = Math.ceil(Math.random() * 10);
let numeroUser = parseInt(prompt("Ingresa un numero: "));
let vidas = 5
console.log(numeroMaquina);

while( numeroMaquina != numeroUser && vidas > 1 ){
    vidas --;
    alert("Numero incorrecto");
    numeroUser = parseInt(prompt("Numero incorrecto, vidas restantes: "+ vidas +"\nIngresa un nuevo numero: "));

}

if(numeroMaquina == numeroUser  ){
    alert("Has ganado");
}
else if( vidas == 0){
    alert("Has perdido");
}


