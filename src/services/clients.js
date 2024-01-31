import axios from "axios";

const clientsApi = axios.create({baseURL: "http://localhost:8000/clientes"});


async function getClientes(){
    const res = await clientsApi.get('/');
    if (res.status === 200)
        return res.data;
    else
        return [];
}


async function postClientes(dados){
    const res = await clientsApi.post('/', dados);
    
    if (res.status === 200)
        return 'Sucesso';
    else
        return 'Erro ao Cadastrar';

}

export {
    getClientes,
    postClientes
};