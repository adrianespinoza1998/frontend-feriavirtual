export const validarSubasta = (subastas)=>{

    for (const subasta of subastas){

        const input = document.querySelector(`#inputSubasta${subasta.id}`);
        const inputSelect = document.querySelector(`#selTipoProd${subasta.id}`);

        const cantNum = Number(input.value);
        const idTipoProd = Number(inputSelect.value);

        if(idTipoProd<=0){
            alert('Por favor ingrese un tipo de producto');
            return false;
        }

        if(cantNum<100){
            alert('El pedido mínimo son 100 kg');
            return false;
        }

    }

    return true;
}