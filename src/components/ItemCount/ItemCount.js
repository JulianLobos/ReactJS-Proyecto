import React, {useState} from 'react';
import './ItemCount.css'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const ItemCount = ({img, stock, initial, addItem}) => {
    
    const [counter, setCounter] = useState(parseInt(initial));
    const counterAdd = () => {
        if(counter<stock){
            setCounter(counter + 1);
        }
    }
    const counterRemove = () => {
        if(counter>initial){
            setCounter(counter - 1);
        }
    }

    return(
        <div className='counterContainer'>
            <p className='chooseQuantity'>Cantidad:</p>
            <div className='itemCounter'>
            <AddIcon onClick={counterAdd}/>
            <p className='counterNumber'>{counter}</p>
            <RemoveIcon onClick={counterRemove}/>
        </div>
        <button className='addBtn' onClick={()=> addItem(img, counter)}>Agregar al Carrito</button>
        </div>
    );
};

export default ItemCount;