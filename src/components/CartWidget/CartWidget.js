import React from 'react'
import "./CartWidget.css";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {Link} from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

const CartWidget = () => {

  const { getQuantity } = useContext(CartContext)

  return (
    getQuantity() > 0 ? 
    <Link to="/cart">
    <div className='cartIcon'>
      <ShoppingCartIcon />
      <div className='cartCounter'>
        <p className='counterNumber'>{getQuantity()}</p>
      </div>
    </div>
  </Link>
  :
  ""
  )
}

export default CartWidget;
