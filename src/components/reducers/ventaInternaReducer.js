
export const ventaInternaReducer = (state = [], action)=>{

    switch (action.type){
        case 'add':
            return [...state, action.payload];
        case 'update':
            return state.map(
                venta =>
                    (venta.idProducto === action.payload.idProducto)
                    ? action.payload
                    : venta
            );
        case 'delete':
            return state.filter( todo => todo.idProducto !== action.payload);
        default:
            return state;
    }
}