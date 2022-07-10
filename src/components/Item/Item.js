import React from 'react';
import './Item.css'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const Item = ({datos}) => {
    return(
        <div className="itemCard">
            <img className="itemImage" src={datos.img} alt={datos.id}></img>
            <p className="itemTitle">{datos.name}</p>
            <p className='itemPrice'>${datos.price}</p>
            <p className='itemShipping'>Envío gratis!</p>
            <button type="submit" className='itemDetails'> Ver detalles <ArrowForwardIosIcon className='detailArrow' /></button>
        </div>
    )
}

export default Item;