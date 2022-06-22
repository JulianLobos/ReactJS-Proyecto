import React, {useState, useEffect} from 'react';
import "./ItemListContainer.css";
import { getProductByCategory } from '../../assets/Datos';
import { CircularProgress } from '@mui/material';
import ItemList from "../ItemList/ItemList";

const ItemListContainer = () => {

    // const addToCart = (cantidad) => {
    //     console.log(`${cantidad} producto/s agregado/s al carrito.`);
    // }

    const [images, setImages] = useState([]);
    const category = "animals"
    useEffect(() => {
        getProductByCategory(category)
            .then(res => setImages(res))
            .catch(err => console.log(err))
    }, []);

    return(
        <div className="container">
            {images.length > 0 ? <ItemList images={images} />
                : <div><CircularProgress className='progress'/></div>
            }
        </div>
    );
};

export default ItemListContainer;