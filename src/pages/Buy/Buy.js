import React, { useState, useContext } from 'react';
import './Buy.css';
import { CartContext } from '../../context/CartContext';
import PurchaseSuccess from '../../components/PurchaseSuccess/PurchaseSuccess';

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
  const { cartItems, setCartItem, totalPrice } = useContext(CartContext);

  const handleOnChange = (e) => {
    const { value, name } = e.target;
    setValues({ ...values, [name]: value });
  };

  const onSubmit = async (e) => {
		e.preventDefault();
    const date = new Date();
    const totalPurchase = totalPrice();
		const docRef = await addDoc(collection(db, 'purchases'), {
			values,
      cartItems,
      date,
      totalPurchase,
		});
		setPurchaseID(docRef.id);
		setValues(initialState);
    setCartItem([]);
    console.log(docRef.id)
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
					style={{ margin: 10, width: 400 }}
					name='name'
					value={values.name}
					onChange={handleOnChange}
          required
				/>
				<TextField
          id="outlined-basic" 
          label="Apellido"
          variant="outlined"
					style={{ margin: 10, width: 400 }}
					name='lastName'
					value={values.lastName}
					onChange={handleOnChange}
          required
				/>
				<TextField
          id="outlined-basic" 
          label="Email"
          variant="outlined"
          type="email"
					style={{ margin: 10, width: 400 }}
					name='email'
					value={values.email}
					onChange={handleOnChange}
          required
				/>
        <button className='submitForm'>Enviar</button>
      </form>
      {purchaseID && <PurchaseSuccess PurchaseId={purchaseID} name={values.name} />}
    </div>
  )
}

export default Buy;