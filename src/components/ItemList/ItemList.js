import React from 'react';
import './ItemList.css';
import Item from '../Item/Item';

const ItemList = ({images}) => {
    return(
        <div className="itemsContainer">
            {images.map((image) => (
                <Item key={image.id} datos={image} />
            ))}
        </div>

    )
}

export default ItemList;