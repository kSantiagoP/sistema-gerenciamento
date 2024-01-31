import { useEffect, useState } from "react";
import styled from "styled-components";
import { getClientes } from "../../services/clients";
import {DataGrid} from '@mui/x-data-grid'
import Box from '@mui/material/Box';
import FiltroUser from "../FiltroUser";

const columns = setGridHeader();


const BuscaUserCont = styled.section`
    color: #FFF;
    text-align: left;
    width: 100%;
    height: 270px;
    padding: 20px 0;
    background-image: linear-gradient(90deg, #0fbf56 45%, #5ac485 105%);
    margin-left: 20px;
    `;

const TextoCont = styled.h2`
    color: #FFF;
    font-size: 25px;
    text-align: left;
    width: 100%;
`;


function BuscaUser(){
    const[ clientes, setClientes] = useState([]);
    const [rows, setRows] = useState([]);

    useEffect(() => {
        fetchClientes();
        
    }, []); 

    async function fetchClientes(){
        const clientesAPI = await getClientes();
        setClientes(clientesAPI);
        setRows(clientesAPI);
    }

    const fCallback = (dados) => {
        setRows(dados);
    }

    return(
        <BuscaUserCont>
            <FiltroUser dadosGrid={clientes} filtroCallback={fCallback}></FiltroUser>
            <TextoCont>Lista de Clientes</TextoCont>
            <Box sx={{ height: 400, width: '50%' }}>
                <DataGrid
                    rows={rows}
                    columns={columns}
                    initialState={{
                    pagination: {
                        paginationModel: {
                        pageSize: 5,
                        },
                    },
                    }}
                    pageSizeOptions={[5]}
                    checkboxSelection={false}
                    disableRowSelectionOnClick
                />
            </Box>

        </BuscaUserCont>

    );
}


function setGridHeader(){

    return [
        { field: 'id', headerName: 'ID', width: 90 },
        {
          field: 'nome',
          headerName: 'Nome Completo',
          width: 150,
          editable: false,
        },
        {
          field: 'email',
          headerName: 'Email',
          width: 150,
          editable: false,
        },
        {
          field: 'telefone',
          headerName: 'Telefone',
          width: 150,
          editable: false,
        },
        {
          field: 'x_coord',
          headerName: 'Coordernada X',
          width: 160,
          type: 'number',
          editable: false,
        },
        {
            field: 'y_coord',
            headerName: 'Coordernada Y',
            width: 160,
            type: 'number',
            editable: false,
          },
      ];

}


export default BuscaUser;