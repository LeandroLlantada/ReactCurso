import Navbar from './components/Navbar';
import './App.css';
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount';


function App() {
  return (
    <div className="app">
      <Navbar />
      <ItemListContainer greetings="Bienvenidos al ecommerce" />
      <ItemCount />
    </div>
  );
}

export default App;

