import axios from 'axios';

export const listarProductos = async(id) => {

    try{
        const fetch = await axios({
            method: 'GET',
            url: `http://localhost:8080/api/producto/${id}`,
        });
    
        const {data} = fetch;

        console.log(JSON.stringify(data));
        return data;
    }catch(error){
        return error;
    }
}
