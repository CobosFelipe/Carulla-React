import { useState, useEffect } from 'react';
const ProductCard = ({ nombreBusqueda }) => {
  const [products, setProducts] = useState([]);
  const [productsPerPage, setProductsPerPage] = useState(24);
  const [currentPage, setCurrentPage] = useState(1);

  const productList = async (nombreBusqueda) => {
    if (!nombreBusqueda) return;

    const data = await fetch(`https://www.omdbapi.com/?apikey=2b9c4287&s=${nombreBusqueda}&type=movie`);
    const products = await data.json();

    if (products.Response === 'True') {
      setProducts(products.Search);
    } else {
      setProducts([]); 
    }
  };

  useEffect(() => {
    productList(nombreBusqueda);
  }, [nombreBusqueda]); 

  return (
    <div className='conteiner-products'>
      {products.map((product, index) => (
        <div key={index} className="product-card">
          <img src={product.Poster} alt={product.Title} />
          <h2>{product.Title}</h2>
          <p>{product.Year}</p>
          <p>{product.Type}</p>
          
        </div>
      ))}
    </div>
  );
};

export default ProductCard;

