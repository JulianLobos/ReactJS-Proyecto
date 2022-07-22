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
  emailVerification: '',
};

const Buy = () => {
  const [values, setValues] = useState(initialState);
	const [purchaseID, setPurchaseID] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { cartItems, setCartItem, totalPrice, getItemTotalPrice } = useContext(CartContext);

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
    <div className='buyBody'>
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
          disabled={totalPrice() === 0}
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
          disabled={totalPrice() === 0}
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
          disabled={totalPrice() === 0}
          fullWidth
				/>
        <TextField
          id="outlined-basic" 
          label="Repite tu email"
          variant="outlined"
          type="email"
					style={{ margin: 10, maxWidth: 400, minWidth: 280 }}
					name='emailVerification'
					value={values.emailVerification}
					onChange={handleOnChange}
          required
          disabled={totalPrice() === 0}
          fullWidth
				/>
        {values.email !== values.emailVerification ? <p className='emailVerification'>¡Las direcciones de correo electronico no coinciden!</p> : ''}
        {totalPrice() === 0 ? <button disabled className='submitForm'>Enviar</button> : <button disabled={values.email !== values.emailVerification} className='submitForm'>Enviar</button>}
      </form>
      {isLoading ? <CircularProgress className='circularProgress'/> : ''}
      {purchaseID && <PurchaseSuccess PurchaseId={purchaseID} />}

      {totalPrice() === 0 ? '' : 
      <div className='buyBrief'>
        <p className='detalleDeCompra'>Detalle de compra</p>
        {cartItems.map((item) => {
          return(
            <div key={item.id} >
              <p className='itemBrief'>
                <span className='itemBriefCounter'>x{item.counter}</span>
                <span className='itemBriefName'>{item.name}</span> 
                <span className='itemBriefPrice'>${getItemTotalPrice(item)}</span> 
              </p>
            </div>
          )
        })}
        <p className='briefTotalPrice'><span className='totalPriceSpan'>Precio total:</span> ${totalPrice()}</p>
      </div>}
    </div>
  )
}

export default Buy;