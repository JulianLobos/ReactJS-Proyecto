import React from 'react'
import './Error.css';
import ErrorIcon from '@mui/icons-material/Error';
import HomeIcon from '@mui/icons-material/Home';
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <div className='errorContainer'>
      <p className='errorMessage'><ErrorIcon className='errorIcon'/>Error 404: page not found</p>
      <Link to="/">
        <p className='errorVolver'><HomeIcon/> Volver a la página de inicio</p>
      </Link>
    </div>
  )
}

export default Error