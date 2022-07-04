import './ItemDetail.css';
import PaymentIcon from '@mui/icons-material/Payment';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import ItemCount from '../ItemCount/ItemCount';
import { useState } from 'react';
import { Link } from 'react-router-dom';

// toastify
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ItemDetail = ({img, name, description, price, size, stock, id}) => {

    const addAlert = (cart) => toast.success(cart > 1 ? `${cart} productos agregados al carrito!` : `${cart} producto agregado al carrito!`, 
    {position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,});

    const [cantidad, setCantidad] = useState(0);
    const addToCart = (cart) => {
        setCantidad(cart);
        addAlert(cart);
       }

    return(
        <div className='itemDetailBackground'>
            <p className='itemDetailTitle'>{name}</p>
            <img className='itemDetailImg' src={img} alt={description}/>
            <div className='itemDetailInfo'>
                <p className='itemDetailPrice'>{price}</p>
                <p className='mediosDePago'><PaymentIcon /> Ver los medios de pago</p>
                <p className='envioGratis'><LocalShippingIcon /> Envio gratis!</p>
                <p className='itemDetailDescription'>{description}</p>
                <p className='tamano'>Tamaño en cm:</p>
                <p className='itemDetailTamano'>{size}</p>
                {cantidad > 0 ? <Link to="/cart"><button className='itemDetailBtn'>Finalizar Compra</button></Link> : <ItemCount itemId={id} stock={stock} initial="1" onAdd={addToCart}/>}
                <ToastContainer/>
            </div>
        </div>
    )
}

export default ItemDetail;