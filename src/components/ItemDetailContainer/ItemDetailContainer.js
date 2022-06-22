import {useState, useEffect} from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import { getProductById } from '../../assets/Datos';
import './ItemDetailContainer.css';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { CircularProgress } from '@mui/material';

const ItemDetailContainer = () => {
    const[img, setImg] = useState([])
    const[loading, setLoading] = useState(true)
    const id = 4

    useEffect(() => {
        getProductById(id)
            .then(res => {
                setImg(res)
                setLoading(false)
            }
            )
            .catch(err => console.log(err))
    }, [])

    console.log(img)

    return(
        <div>
            <div className='detailContainer'>
                <ArrowBackIcon className='arrowBack'/>
                {loading ? <div><CircularProgress /></div> : <ItemDetail img={img[0].img} name={img[0].name} description={img[0].description} price={img[0].price} size={img[0].size}/>}
            </div>
        </div>
    )
}

export default ItemDetailContainer;