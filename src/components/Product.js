import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import Rating from './Rating';

const Product = ({ product }) => {
  return (
    <Card>
      <Link to={`/product/${product.slug}`}>
        <img
          src={product.image}
          alt={product.name}
          className="card-img-top"
          //   style={{ width: '250px', height: '250px' }}
        />
      </Link>
      <Card.Body>
        <Link to={`/product/${product.slug}`}>
          <Card.Title>{product.name}</Card.Title>
        </Link>
        <Rating rating={product.rating} numReviews={product.numReviews} />
        <Card.Text>${product.price}</Card.Text>
        <Button className=' btn btn-primary'>ADD to cart</Button>
      </Card.Body>
    </Card>
  );
};

export default Product;
