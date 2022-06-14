import "./ItemListContainer.css";
import ItemCount from '../ItemCount/ItemCount';

const ItemListContainer = ({greetings, title, image, alt, description}) => {

    const addToCart = (cantidad) => {
        console.log(`${cantidad} producto/s agregado/s al carrito.`);
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
            initial="1" 
            stock="7" 
            onAdd={addToCart}
            />
        </div>
    );
};

export default ItemListContainer;