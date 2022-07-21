import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import PaymentIcon from '@mui/icons-material/Payment';
import './ModalPayment.css';
import CloseIcon from '@mui/icons-material/Close';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 350,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  borderRadius: 5,
};

export default function ModalPayment() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen} className='paymentButton'><p className='mediosDePago'><PaymentIcon /> Ver los medios de pago</p></Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }} 
      >
        <Fade in={open}>
          <Box sx={style}>
            <CloseIcon className='closeIcon' onClick={handleClose}/>
            <Typography id="transition-modal-title" variant="h6" component="h2" className='paymentMethodTitle'>
              Medios de pago
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }} className='paymentTitle'>
              Tarjetas de crédito
            </Typography>
            <p className='cuotasCredito'>¡Hasta 12 cuotas sin interés!</p>
            <div className='creditCards'>
            <img src='/Assets/MediosDePago/Visa.svg' alt="tarjeta Visa"></img>
              <img src='/Assets/MediosDePago/Mastercard.svg' alt="tarjeta mastercard"></img>
              <img src='/Assets/MediosDePago/AmericanExpress.svg' alt="tarjeta american express"></img>
              <img src='/Assets/MediosDePago/Naranja.svg' alt="tarjeta naranja"></img>
              <img src='/Assets/MediosDePago/Cordobesa.svg' alt="tarjeta cordobesa"></img>
              <img src='/Assets/MediosDePago/BancoTierraDelFuego.svg' alt="tarjeta banco tierra del fuego"></img>
              <img src='/Assets/MediosDePago/HSBC.svg' alt="tarjeta HSBC"></img>
            </div>
            <Typography id="transition-modal-description" sx={{ mt: 2 }} className='paymentTitle'>
              Tarjetas de débito
            </Typography>
            <div className='debitCards'>
            <img src='/Assets/MediosDePago/Maestro.svg' alt="tarjeta maestro"></img>
            <img src='/Assets/MediosDePago/VisaDebito.svg' alt="tarjeta visa débito"></img>
            <img src='/Assets/MediosDePago/MasterCardDebito.svg' alt="tarjeta mastercard débito"></img>
            <img src='/Assets/MediosDePago/CabalDebito.svg' alt="tarjeta cabal débito"></img>
            </div>
            <Typography id="transition-modal-description" sx={{ mt: 2 }} className='paymentTitle'>
              Efectivo
            </Typography>
            <div className='efectivo'>
            <img src='/Assets/MediosDePago/Rapipago.svg' alt="rapipago logo"></img>
            <img src='/Assets/MediosDePago/PagoFacil.svg' alt="Pago Fácil logo"></img>
            </div>
            <Typography id="transition-modal-description" sx={{ mt: 2 }} className='paymentTitle'>
              Digital
            </Typography>
            <div className='digital'>
            <img src='/Assets/MediosDePago/MercadoPago.svg' alt="MercadoPago logo"></img>
            </div>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
