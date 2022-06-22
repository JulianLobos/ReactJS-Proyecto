import './ItemDetail.css';
import PaymentIcon from '@mui/icons-material/Payment';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';

const ItemDetail = ({img, name, description, price, size}) => {

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
                <button className='itemDetailBtn'>Comprar</button>
            </div>
        </div>
    )
}

export default ItemDetail;