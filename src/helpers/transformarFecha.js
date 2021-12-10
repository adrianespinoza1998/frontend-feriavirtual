export const transformarFecha = (fecha = '') => {

    const listaFecha = fecha.split('-');

    const stringFecha = `${listaFecha[1]}-${listaFecha[0]}-${listaFecha[2]}`;

    console.log(stringFecha);

    const fechaFinal = new Date(stringFecha);

    fechaFinal.setDate(fechaFinal.getDate() - 1);

    return fechaFinal;
}
