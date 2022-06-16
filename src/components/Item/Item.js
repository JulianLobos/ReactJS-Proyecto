import React from 'react';
import './Item.css'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const Item = ({datos}) => {
    return(
        <div className="itemCard">
            <img className="itemImage" src={datos.url} alt={datos.id}></img>
            <FavoriteBorderIcon className='favoriteIcon'/>
            <p className="itemTitle">{datos.id}</p>
            <p className='itemPrice'>US$ 35</p>
            <p className='itemShipping'>Envío gratis!</p>
            <p className="itemDescription">{datos.title}</p>
            <button className='itemDetails'> Ver detalles <ArrowForwardIosIcon className='detailArrow' /></button>
        </div>
    )
}

export default Item;