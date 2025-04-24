function generarQR(){
    event.preventDefault();
    let var1 = document.getElementById('producto').value.trim();
    let var2 = document.getElementById('proveedor').value.trim();
    let var3 = document.getElementById('input_estatus').value.trim();
    
    var  campos = var1+","+var2+","+var3;

    if ( textoConcatenado === ',,' ){
        alert("Ingresa todos los campos obligatorios");
    }else{
    console.log(textoConcatenado);
    let qrApi= 'https://api.qrserver.com/v1/create-qr-code/?size=200x200&data='+campos;
    let qrImg = document.createElement('img');
    qrImg.src=qrApi;
    qrImg.alt='Codigo de QR';
    document.getElementById('qr-code').appendChild(qrImg);
    }
}