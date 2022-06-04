import './App.css';
import Navbar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <h1 className='pageTitle'>jurold</h1>
      <img src='jurold1.webp' alt='cloud and mountains' className='imageIndex'></img>
      <p className='pageSubtitle'>Black and white photography</p>
      <p className='pageAuthor'>by Julian Lobos</p>
    </div>
  );
}

export default App;
