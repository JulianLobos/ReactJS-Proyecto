import React from 'react';
import './ItemNotFound.css';
import ErrorIcon from '@mui/icons-material/Error';
import HomeIcon from '@mui/icons-material/Home';
import { Link } from 'react-router-dom';

const ItemNotFound = () => {
  return (
    <div className='itemNotFoundContainer'>
        <p className='itemNotFoundTitle'><ErrorIcon className='errorIcon'/>Error: Item not found!</p>
        <Link to="/">
        <p className='errorVolver'><HomeIcon/> Volver a la página de inicio</p>
        </Link>
    </div>
  )
}

export default ItemNotFound