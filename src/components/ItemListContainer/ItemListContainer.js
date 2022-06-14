import "./ItemListContainer.css";
import ItemCount from '../ItemCount/ItemCount';

const ItemListContainer = ({greetings, title, image, alt, description}) => {

    const addToCart = (cantidad) => {
        if(cantidad>0){
            console.log(`${cantidad} producto/s agregado/s al carrito.`);
        }else{
            console.log('Debe ingresar una cantidad.')
        }
    }

    return(
        <div className="itemsContainer">
            <p className="welcome">Bienvenido {greetings}!</p>

            <div className="itemCard">
                <p className="itemTitle">{title}</p>
                <img className="itemImage" src={image} alt={alt}></img>
                <p className="itemDescription">{description}</p>
            </div>
            <ItemCount 
            initial="3" 
            stock="7" 
            onAdd={addToCart}
            />
        </div>
    );
};

export default ItemListContainer;