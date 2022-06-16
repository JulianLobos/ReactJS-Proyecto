import "./ItemListContainer.css";
import ItemList from "../ItemList/ItemList";

const ItemListContainer = ({greetings}) => {

    //     ******   comento hasta hacer componente detalle   ******
    //const addToCart = (cantidad) => {
    //    console.log(`${cantidad} producto/s agregado/s al carrito.`);
    //}

    return(
        <div className="container">
            <p className="welcome">Bienvenido {greetings}!</p>
            <ItemList />
        </div>
    );
};

export default ItemListContainer;