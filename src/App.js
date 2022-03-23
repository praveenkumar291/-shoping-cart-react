import React from 'react';
import data from './data';

const App = () => {
  return (
    <div>
      <header>
        <a href="/">amazon</a>
      </header>
      <main>
        <h1>feture products</h1>
        <div className="products">
          {data.products.map((product) => (
            <div key={product.slug} className="product">
              <a href={`/product/${product.slug}`}>
                <img
                  src={product.image}
                  alt={product.name}
                  style={{ width: '250px', height: '250px' }}
                />
              </a>
              <div className="product-info">
                <a href={`/product/${product.slug}`}>
                  <p>{product.name}</p>
                </a>
                <a herf={`/product/${product.slug}`}>
                  <p>
                    <strong>${product.price}</strong>
                  </p>
                </a>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default App;
