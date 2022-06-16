import React from 'react';
import './Item.css'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const Item = ({datos}) => {
    return(
        <div className="itemCard">
            <img className="itemImage" src={datos.url} alt={datos.id}></img>
            <FavoriteBorderIcon className='favoriteIcon'/>
            <p className="itemTitle">{datos.id}</p>
            <p className="itemDescription">{datos.title}</p>
            <button className='itemDetails'> Ver detalles </button>
        </div>
    )
}

export default Item;