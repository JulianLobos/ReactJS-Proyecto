import React from 'react';
import './ItemList.css';
import Item from '../Item/Item';
import { Link } from 'react-router-dom';

const ItemList = ({images}) => {
    return(
        <div className="itemsContainer">
            {images.map((image) => (
                <div key={image.id}>
                    <Link to={`/detail/${image.id}`}>
                        <Item datos={image} />
                    </Link>
                </div>
            ))}
        </div>

    )
}

export default ItemList;