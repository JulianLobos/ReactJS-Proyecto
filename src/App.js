import './App.css';
import Navbar from './components/NavBar';
import ShoppingCart from './components/ShoppingCart/ShoppingCart';
import Greetings from './components/Greetings/Greetings';

function App() {
  return (
    <div className="App">
      <Navbar />
      <ShoppingCart />
      <Greetings />
      <h1 className='pageTitle'>jurold</h1>
      <p className='pageSubtitle'>Black and white photography</p>
      <p className='pageAuthor'>by Julian Lobos</p>
    </div>
  );
}

export default App;
