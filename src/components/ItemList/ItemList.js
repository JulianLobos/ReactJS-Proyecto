import React, { useState, useEffect } from 'react';
import './ItemList.css';
import Item from '../Item/Item';

const ItemList = () => {
    const [images, setImages] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/photos')
            .then((response) => response.json())
            .then((json) => setImages(json));
    }, []);
    
    return(
        <div className="itemsContainer">
            {images.slice(0, 15).map((image) => (
                <Item key={image.id} datos={image} />
            ))}
        </div>

    )
}

export default ItemList;