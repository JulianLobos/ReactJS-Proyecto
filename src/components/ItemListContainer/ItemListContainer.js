import React, {useState, useEffect} from 'react';
import "./ItemListContainer.css";
import { getProductByCategory } from '../../assets/Datos';
import { CircularProgress } from '@mui/material';
import ItemList from "../ItemList/ItemList";
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {

    let { id } = useParams();
    const [images, setImages] = useState([]);
    
    useEffect(() => {
        getProductByCategory(id)
            .then(res => setImages(res))
            .catch(err => console.log(err))
    }, [id]);

    return(
        <div className="container">
            {images.length > 0 ? <ItemList images={images} />
                : <div><CircularProgress className='progress'/></div>
            }
        </div>
    );
};

export default ItemListContainer;