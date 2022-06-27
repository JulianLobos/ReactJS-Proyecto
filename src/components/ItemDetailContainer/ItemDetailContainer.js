import {useState, useEffect} from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import { getProductById } from '../../assets/Datos';
import './ItemDetailContainer.css';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { CircularProgress } from '@mui/material';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
 
const ItemDetailContainer = () => {
    let { id } = useParams();
    const[img, setImg] = useState({})
    const[loading, setLoading] = useState(true)

    useEffect(() => {
        getProductById(id)
            .then(res => {
                setImg(res)
                setLoading(false)
            }
            )
            .catch(err => console.log(err))
    }, [id])

    return(
        <div>
            <div className='detailContainer'>
                <Link to='/'>
                    <ArrowBackIcon className='arrowBack'/>
                </Link>
                {loading ? <div><CircularProgress /></div> : <ItemDetail img={img.img} name={img.name} description={img.description} price={img.price} size={img.size} stock={img.stock}/>}
            </div>
        </div>
    )
}

export default ItemDetailContainer;