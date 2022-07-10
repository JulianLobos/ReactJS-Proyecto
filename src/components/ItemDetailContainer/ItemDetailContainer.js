import {useState, useEffect} from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import './ItemDetailContainer.css';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { CircularProgress } from '@mui/material';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import { db } from '../../firebase/firebaseConfig';

//////////////     Firebase - Firestore     //////////////
import {collection,	query, getDocs,	documentId,	where} from 'firebase/firestore';
 
const ItemDetailContainer = () => {
    let { id } = useParams();
    const [img, setImg] = useState([]);
    const[loading, setLoading] = useState(true)

    useEffect(() => {
        const getImages = async () => {
            const q = query(collection(db, 'images'), where(documentId(), '==', id));
            const querySnapshot = await getDocs(q);
            const docs = [];

            querySnapshot.forEach((doc) => {
                docs.push({...doc.data(), id: doc.id})
              });
              setImg(docs[0]);
        };
        getImages();
        setLoading(false);
    }, [id])

    return(
        <div>
            <div className='detailContainer'>
                <Link to='/'>
                    <Tippy content="Volver al home" placement="right">
                        <ArrowBackIcon className='arrowBack'/>
                    </Tippy>
                </Link>
                {loading ? <div><CircularProgress className='progress'/></div> : <ItemDetail img={img}/>}
            </div>
        </div>
    )
}

export default ItemDetailContainer;