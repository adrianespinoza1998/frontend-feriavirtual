
export const subastaReducer = (state = [], action)=>{

    switch (action.type){
        case 'add':
            return [...state, action.payload];
        case 'update':
            return state.map(
                subasta =>
                    (subasta.id === action.payload.id)
                    ? action.payload
                    : subasta
            );
        case 'delete':
            return state.filter( todo => todo.id !== action.payload);
        default:
            return state;
    }
}