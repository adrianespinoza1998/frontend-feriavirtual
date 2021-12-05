
export const validarCompra = (number, name, expiry, cvc) => {

    //El número debe tener 16 digitos
    /*if(Number(number) > 10000000000000000000 && Number(name) < 1000000000000000000){
        alert('Número de tarjeta incorrecto');
        return false;
    }*/

    const tarjeta = Array.from(number);
    let indexTarjeta = 0;

    for(const tar of tarjeta){
        indexTarjeta++;
    }

    if(indexTarjeta !== 19){
        alert('Número de tarjeta incorrecto');
        return false;
    }

    const nombres = name.split(' ');
    const arrayNombres = [];

    nombres.map(nombre =>{
        return arrayNombres.push(nombre);
    });

    if(arrayNombres.lenght > 4){
        console.log(arrayNombres.length);
        alert('Por favor introdusca el nombre completo');
        return false;
    }

    const fecha = expiry.split('-');
    var today = new Date();

    if(Number(fecha[0]) < today.getFullYear() || (Number(fecha[1])<1 && Number(fecha[1])>12)){
        alert('Fecha de vencimiento incorrecta');
        return false;
    }

    if(Number(cvc)<100 && Number(cvc)>999){
        alert('El CVC debe contener 3 números');
        return false;
    }

    return true;

}
