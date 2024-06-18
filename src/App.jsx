import { useState } from 'react'
import './App.css'
import ProductCard from './components/ProductCard'
import SearchBar from './components/SearchBar'

const App = () => {
  const [nombreBusqueda, setNombreBusqueda] = useState('');

  return (
    <div>
      <SearchBar setNombreBusqueda={setNombreBusqueda} />
      <ProductCard nombreBusqueda={nombreBusqueda} />
    </div>
  );
};

export default App;
