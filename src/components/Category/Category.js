import React, {useState, useEffect} from 'react';
import { CircularProgress } from '@mui/material';
import ItemList from "../ItemList/ItemList";
import { useParams } from 'react-router-dom';

// firebase
import { db } from '../../firebase/firebaseConfig'
import {collection,	query, getDocs,	where} from 'firebase/firestore';

const Category = () => {
    let { category } = useParams();
    const [imagesData, setImagesData] = useState([]);

    useEffect(() => {
        const getImagesByCategory = async () => {
            const q = query(collection(db, 'images'), where('category', '==', category));
            const querySnapshot = await getDocs(q);
            const docs = [];
            // console.log(querySnapshot);
            querySnapshot.forEach((doc) => {
                // doc.data() is never undefined for query doc snapshots
                docs.push({...doc.data(), id: doc.id})
              });
              setImagesData(docs);
        };
        getImagesByCategory();
    }, [category])

    return(
        <div className="container">
            {imagesData.length > 0 ? <ItemList images={imagesData} />
                : <div><CircularProgress className='progress'/></div>
            }
        </div>
    );
};

export default Category;