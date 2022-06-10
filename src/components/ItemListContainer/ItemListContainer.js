import "./ItemListContainer.css";

const ItemListContainer = ({greetings, title, image, alt, description}) => {
    return(
        <div className="itemsContainer">
            <p className="welcome">Bienvenido {greetings}!</p>

            <div className="itemCard">
                <p className="itemTitle">{title}</p>
                <img className="itemImage" src={image} alt={alt}></img>
                <p className="itemDescription">{description}</p>
            </div>
        </div>
    );
};

export default ItemListContainer;