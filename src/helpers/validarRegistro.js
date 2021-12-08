export const validarRegistro = (form)=>{

    if(form.nombre !=='' && form.apPaterno !=='' && form.apMaterno !=='' && form.dni !=='' && 
        form.direccion!=='' && form.codPostal!=='' && form.correo!=='' && form.usuario!=='' && 
        form.contrasena!=='' && !isNaN(form.idPais) && form.idPais>0 && !isNaN(form.idRol) &&
        form.idRol>0){

            if(form.nombre.lenght<2){
                alert("El nombre debe tener 2 letras mínimo");
                return false;
            }

            if(form.apPaterno<2){
                alert("El apellido paterno debe tener 2 letras mínimo");
                return false;
            }

            if(form.apMaterno<2){
                alert("El apellido materno debe tener 2 letras mínimo");
                return false;
            }

            if(form.dni < 7){
                alert("El dni debe poseer minimo 7 cifras");
                return false;
            }

            const direccion = form.direccion.split(' ');
            const arrayDireccion = [];

            direccion.map((dir)=>{
                return arrayDireccion.push(dir);
            });

            if(arrayDireccion.lenght <2 || Number(arrayDireccion[arrayDireccion.length-1]) == null || 
            isNaN(Number(arrayDireccion[arrayDireccion.length-1]))){
                alert("Dirección sin número");

                return false;
            }

            if(Number(arrayDireccion[arrayDireccion.length-1])<1){
                alert('Número de dirección incorrecto');

                return false;
            }

            if(isNaN(form.codPostal)){
                alert("Código postal sin números");
                return false;
            }

            if(form.codPostal.lenght>=7 || Number(form.codPostal)>0){
                alert('Código postal incorrecto');
                return false;
            }

            if(form.usuario.lenght >3){
                alert("Usuario debe poseer mínimo 2 caracteres");
                return false;
            }

            if(form.contrasena.lenght<6){
                alert("Contraseña debe poseer mínimo 6 caracteres");
                return false;
            }

            if(form.contrasena === form.usuario){
                alert('Contraseña debe ser diferente al usuario');
                return false;
            }

            return true;

    }else{
        alert('Uno o más campos vacios')
        return false;
    }
}