import {useState, useEffect} from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import './ItemDetailContainer.css';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import ItemNotFound from '../../pages/ItemNotFound/ItemNotFound';

import { db } from '../../firebase/firebaseConfig';

//////////////     Firebase - Firestore     //////////////
import { getDoc, doc } from 'firebase/firestore';
 
const ItemDetailContainer = () => {
    let { id } = useParams();
    const [img, setImg] = useState([]);
    const[loading, setLoading] = useState(true)

    useEffect(() => {
        const getImages = async () => {
            const document = doc(db, 'images', id);
            const response = await getDoc(document);
            const result = {id: response.id, ...response.data()};
            setImg(result);
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
                {img.name === undefined && !loading ? <ItemNotFound /> : <ItemDetail img={img}/>}
            </div>
        </div>
    )
}

export default ItemDetailContainer;