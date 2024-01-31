import * as React from 'react';
import styled from 'styled-components';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { calculaRota } from '../../services/distanceCalculator';
import { getClientes } from '../../services/clients';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const ButtonDiv = styled.div`
display: flex;
justify-content: center;

`;

const Button = styled.button`
color: #0a632e;
font-size: 1em;
margin: 1em;
padding: 0.25em 1em;
border: 2px solid #0a632e;
border-radius: 3px;
`;

let rota, distancia, caminho;

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {

    fetchClientes();

    async function fetchClientes(){
        const clientesAPI = await getClientes();
        rota = calculaRota(clientesAPI);

        caminho = rota['path'];
        distancia = rota['distance'];
        setOpen(true);
    }

    }
  const handleClose = () => setOpen(false);

  return (
    <div>
        <ButtonDiv>
            <Button onClick={handleOpen}>Calcular</Button>
        </ButtonDiv>
        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        >
        <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
            Distância Calculada
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {`A lista dos IDs dos clientes ordenada pelo melhor caminho a ser percorrido a partir da sede é: ${caminho}, cuja distância é ${distancia}`}
            </Typography>
        </Box>
        </Modal>
    </div>
  );
}