import React, { useState, useContext } from 'react';
import './Buy.css';
import { CartContext } from '../../context/CartContext';
import PurchaseSuccess from '../../components/PurchaseSuccess/PurchaseSuccess';
import { CircularProgress } from '@mui/material';

//////////        Firebase        //////////
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../firebase/firebaseConfig';

//////////        Form        //////////
import { TextField } from '@mui/material';

const initialState = {
	name: '',
	lastName: '',
	email: '',
};

const Buy = () => {
  const [values, setValues] = useState(initialState);
	const [purchaseID, setPurchaseID] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { cartItems, setCartItem, totalPrice } = useContext(CartContext);

  const handleOnChange = (e) => {
    const { value, name } = e.target;
    setValues({ ...values, [name]: value });
  };

  const onSubmit = async (e) => {
		e.preventDefault();
    setIsLoading(true);
    const date = new Date();
    const totalPurchase = totalPrice();
		const docRef = await addDoc(collection(db, 'orders'), {
			values,
      cartItems,
      date,
      totalPurchase,
      estado: 'generada',
		});
		setPurchaseID(docRef.id);
		setValues(initialState);
    setCartItem([]);
    setIsLoading(false);
	};


  return (
    <div>
      <h1 className='buyTitle'>Finaliza tu compra!</h1>
      <p className='finishPurchaseMessage'>* Rellena los siguientes campos con tus datos para finalizar tu compra!</p>      
      <form className='formContainer' onSubmit={onSubmit}>
      <TextField 
          id="outlined-basic" 
          label="Nombre"
          variant="outlined"
					style={{ margin: 10, maxWidth: 400, minWidth: 280 }}
					name='name'
					value={values.name}
					onChange={handleOnChange}
          required
          disabled={purchaseID!==''}
          fullWidth
				/>
				<TextField
          id="outlined-basic" 
          label="Apellido"
          variant="outlined"
					style={{ margin: 10, maxWidth: 400, minWidth: 280 }}
					name='lastName'
					value={values.lastName}
					onChange={handleOnChange}
          required
          disabled={purchaseID!==''}
          fullWidth
				/>
				<TextField
          id="outlined-basic" 
          label="Email"
          variant="outlined"
          type="email"
					style={{ margin: 10, maxWidth: 400, minWidth: 280 }}
					name='email'
					value={values.email}
					onChange={handleOnChange}
          required
          disabled={purchaseID!==''}
          fullWidth
				/>
        {purchaseID!=='' ? '' : <button disabled={totalPrice() === 0} className='submitForm'>Enviar</button>}
      </form>
      {isLoading ? <CircularProgress className='circularProgress'/> : ''}
      {purchaseID && <PurchaseSuccess PurchaseId={purchaseID} />}
    </div>
  )
}

export default Buy;