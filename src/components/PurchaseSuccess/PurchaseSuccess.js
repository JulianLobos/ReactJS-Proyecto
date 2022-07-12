import React from 'react';
import './PurchaseSuccess.css';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from 'react-router-dom';

const PurchaseSuccess = ({PurchaseId}) => {
  return (
    <div className='purchaseSuccessContainer'>
        <div className='messageContainer'>
            <p className='message'>Muchas gracias por tu compra! El ID de la transacción es: {PurchaseId}</p>
        </div>
        <Link to="/">
            <p className='purchaseSuccessGoBack'><ArrowBackIcon /> Vuelve al home</p>
        </Link>
    </div>
  )
}

export default PurchaseSuccess;