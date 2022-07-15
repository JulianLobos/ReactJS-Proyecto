import React, {useState, useEffect} from 'react';
import "./ItemListContainer.css";
import { CircularProgress } from '@mui/material';
import ItemList from "../ItemList/ItemList";
import { useParams } from 'react-router-dom';

//////////////     Firebase - Firestore     //////////////
import { db } from '../../firebase/firebaseConfig'
import { collection, query, getDocs, where } from 'firebase/firestore';

const ItemListContainer = () => {
    let { category } = useParams();
    const [imagesData, setImagesData] = useState([]);

    useEffect(() => {
        const getImages = async () => {
            const q = category ? query(collection(db, 'images'), where('category', '==', category)) : query(collection(db, 'images'));
            const querySnapshot = await getDocs(q);
            const docs = [];
    
            querySnapshot.forEach((doc) => {
                docs.push({...doc.data(), id: doc.id})
              });
              setImagesData(docs);
        };
        getImages();
    }, [category])

    return(
        <div className="container">
            {category ? 
            <p className='pageTitle'>jurold | Black and white photography <span className='pageCategory'>{category}</span></p>
            : <p className='pageTitle'>jurold | Black and white photography</p>}
            {imagesData.length > 0 ? <ItemList images={imagesData} />
                : <div><CircularProgress className='progress'/></div>
            }
        </div>
    );
};

export default ItemListContainer;