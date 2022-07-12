import React from 'react';
import './PurchaseSuccess.css';

const PurchaseSuccess = ({PurchaseId, name}) => {
  return (
    <div className='purchaseSuccessContainer'>
        <div className='messageContainer'>
            <p className='message'>Muchas gracias por tu compra {name}! El ID de la transacción es: {PurchaseId}</p>
        </div>
    </div>
  )
}

export default PurchaseSuccess;