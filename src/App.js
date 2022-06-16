import React from 'react';
import './App.css';
import Navbar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <ItemListContainer 
      greetings="a Jurold" 
      />
    </div>
    
  );
}

export default App;
