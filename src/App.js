import React from 'react';
import './App.css';
import Navbar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import image1 from "./assets/jurold1.webp"

function App() {
  return (
    <div className="App">
      <Navbar />
      <ItemListContainer 
      greetings="a Jurold" 
      title="Cotton cloud" 
      image={image1} 
      alt="cotton cloud" 
      description="Lorem ipsum dolor sit"
      />
    </div>
    
  );
}

export default App;
