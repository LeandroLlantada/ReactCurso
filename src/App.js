import navbar from './components/navbar';
import './App.css';
import ItemListContainer from './components/itemListContainer';

function App() {
  return (
    <div className="app">
      <navbar />
      <ItemListContainer />
    </div>
  );
}

export default App;

