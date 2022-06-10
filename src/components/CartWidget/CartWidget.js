import React from 'react'
import "./CartWidget.css";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const CartWidget = () => {
  return (
      <div className='cartIcon'>
        <ShoppingCartIcon />
        <div className='cartCounter'>
          <p className='counterNumber'>0</p>
        </div>
      </div>
  )
}

export default CartWidget;
