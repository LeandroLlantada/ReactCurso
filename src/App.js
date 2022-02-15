import Navbar from './components/Navbar';
import './App.css';
import Item from './components/ItemListContainer';
import ItemCount from './components/ItemCount';


function App() {
  return (
    <div className="app">
      <Navbar />
      <Item />
      <ItemCount />
    </div>
  );
}

export default App;

