import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import './ItemDetail.css';
import PaymentIcon from '@mui/icons-material/Payment';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';

// toastify
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const ItemDetail = ({img}) => {

    const { addItem, isInCart } = useContext(CartContext);

    return(
        <div className='itemDetailBackground'>
            <p className='itemDetailTitle'>{img.name}</p>
            <img className='itemDetailImg' src={img.img} alt={'jurold photography | ' + img.name}/>
            <div className='itemDetailInfo'>
                <p className='itemDetailPrice'>${img.price}</p>
                <p className='mediosDePago'><PaymentIcon /> Ver los medios de pago</p>
                <p className='envioGratis'><LocalShippingIcon /> Envio gratis!</p>
                <p className='itemDetailDescription'>{img.description}</p>
                <p className='tamano'>Tamaño en cm:</p>
                <p className='itemDetailTamano'>{img.size}</p>
                {isInCart(img.id) ? <Link to="/cart"><button className='itemDetailBtn'>Finalizar Compra</button></Link> : <ItemCount img={img} stock={img.stock} initial="1" addItem={addItem}/>}
                <ToastContainer/>
            </div>
        </div>
    )
}

export default ItemDetail;