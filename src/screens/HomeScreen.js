import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// import data from '../data';
import axios from "axios"

const HomeScreen = () => {
  const[products, setProducts] = useState([]);
  useEffect(() => {
     const fetchData = async() => {

        const result = await axios.get('/api/products');
        setProducts(result.data);
     };
     fetchData();
  }, [])
  return (
    <div>
      <h1>feture products</h1>
      <div className="products">
        {products.map((product) => (
          <div key={product.slug} className="product">
            <Link to={`/product/${product.slug}`}>
              <img
                src={product.image}
                alt={product.name}
                style={{ width: '250px', height: '250px' }}
              />
            </Link>
            <div className="product-info">
              <Link to={`/product/${product.slug}`}>
                <p>{product.name}</p>
              </Link>
              <Link to={`/product/${product.slug}`}>
                <p>
                  <strong>${product.price}</strong>
                </p>
              </Link>
              <button>Add to cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeScreen;
