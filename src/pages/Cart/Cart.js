import React from 'react';
import './Cart.css';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {Link} from 'react-router-dom'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const Cart = () => {
  const {cartItems, clear, removeItem, addQuantity, removeQuantity} = useContext(CartContext) 
  let totalPrice = 0;
  return (
    cartItems.length > 0 ? <div className='cart'>
    <div className='cartItemsContainer'>
      <div className='cartTitles'>
        <p>Cantidad</p>
        <p>Imagen</p>
        <p>Nombre</p>
        <p>Precio</p>
        <p>Total Unitario</p>
        <p>Eliminar</p>
      </div>
      {cartItems.map((item) =>{
        const totalItemPrice = item.price * item.counter;
        totalPrice += totalItemPrice;
        if(item.counter > 0){
          return(
            <div className='cartItem' key={item.id}>
              <img src={item.img} className="cartItemImg" alt={item.name}></img>
              <p className='cartItemName'>{item.name}</p> 
              <p className='cartItemCounter'><AddIcon onClick={() => addQuantity(item.id)}  />{item.counter}<RemoveIcon onClick={() => removeQuantity(item.id)} /></p>
              <p className='cartItemPrice'>${item.price}</p>
              <p className='cartItemTotalPrice'>${totalItemPrice}</p>
              <button className='cartItemRemoveBtn' onClick={() => removeItem(item.id)}>Eliminar item</button>
            </div>
          )
        }
        return item;
      })}
    </div>
    <div className='cartFinish'>
    <p className='cartItemsTotal'>Total carrito ${totalPrice}</p>
    <button className='cartItemsBuy'>Comprar</button>
    </div>
    <button className='cartItemsClear' onClick={() => clear()}>Limpiar Carrito</button>
  </div> :
  <div className='emptyCart'>
    <p className='emptyCartText'><ProductionQuantityLimitsIcon /> Carrito Vacío!</p>
    <Link to="/">
      <p className='emptyCartGoBack'><ArrowBackIcon /> Vuelve al home para seguir comprando!</p>
    </Link>
  </div>
  )
}

export default Cart