import React, {useState, useEffect} from 'react';
import "./ItemListContainer.css";
import { CircularProgress } from '@mui/material';
import ItemList from "../ItemList/ItemList";

//////////////     Firebase - Firestore     //////////////
import { db } from '../../firebase/firebaseConfig'
import { collection, query, getDocs } from 'firebase/firestore';

const ItemListContainer = () => {
    const [imagesData, setImagesData] = useState([]);
    
    const getImages = async () => {
        const q = query(collection(db, 'images'));
        const querySnapshot = await getDocs(q);
        const docs = [];

        querySnapshot.forEach((doc) => {
            docs.push({...doc.data(), id: doc.id})
          });
          setImagesData(docs);
    };

    useEffect(() => {
        getImages();
    }, [])

    return(
        <div className="container">
            {imagesData.length > 0 ? <ItemList images={imagesData} />
                : <div><CircularProgress className='progress'/></div>
            }
        </div>
    );
};

export default ItemListContainer;