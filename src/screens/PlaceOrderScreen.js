import React, { useContext, useEffect } from 'react';
import CheckoutSteps from './../components/CheckoutSteps';
import { Helmet } from 'react-helmet-async';
import { Store } from '../Store';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

import { Link, useNavigate } from 'react-router-dom';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';

const PlaceOrderScreen = () => {
    const navigate = useNavigate()



    
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { cart, userInfo } = state;

 ///

 const round2 = (num) => Math.round(num * 100 + Number.EPSILON)/100; // 123.2344 => 123.23
 cart.itemsPrice = round2(
     cart.cartItems.reduce((a, c)=> a + c.quantity * c.price, 0)
 );

 //shipping price
 cart.shippingPrice = cart.itemsPrice > 100 ? round2(0) : round2(20);
 //Tax
 cart.taxPrice = round2(0.15 * cart.itemsPrice);
 cart.totalPrice = cart.itemsPrice + cart.shippingPrice + cart.taxPrice;
const placeOrderHandler = async () => {
     

}
//
useEffect(()=>{
 if(!cart.paymentMethod){
     navigate('/payment')
 }
},[cart,navigate])


  return (
    <div>
      <CheckoutSteps step1 step2 step3 step4></CheckoutSteps>
      <Helmet>
        <title>Preview order</title>
      </Helmet>
      <h1 className="my-3"> Preview Order</h1>

      <Row>
        <Col md={8}>
          <Card className="mb-3">
            <Card.Body>
              <Card.Title>Shipping</Card.Title>

              <Card.Text>
                <strong>Name:</strong> {cart.shippingAddress.fullName}
                <br />
                <strong>Address:</strong> {cart.shippingAddress.address},
                {cart.shippingAddress.city},{cart.shippingAddress.postalCode},
                {cart.shippingAddress.country}
              </Card.Text>
              <Link to="/shipping">Edit</Link>
            </Card.Body>
          </Card>
          <Card className="mb-3">
            <Card.Body>
              <Card.Title>Payment</Card.Title>
              <Card.Text>
                <strong>Method:</strong> {cart.paymentMethod}
              </Card.Text>
              <Link to="/payment">Edit</Link>
            </Card.Body>
          </Card>
          <Card className="mb-3">
            <Card.Title>Items</Card.Title>
            <ListGroup variant="flush">
              {cart.cartItems.map((item) => (
                <ListGroup.Item key={item._id}>
                  <Row className="align-items-center">
                    <Col md={6}>
                      <img
                        className="img-fluid rounded img-thumbnail"
                        src={item.image}
                        alt={item.name}
                      />
                      <Link to={`/product/${item.slug}`}>{item.name}</Link>
                    </Col>
                    <Col md={3}>
                      <span>{item.quantity}</span>
                    </Col>
                    <Col md={3}>
                      <span>{item.price}</span>
                    </Col>
                  </Row>
                </ListGroup.Item>
              ))}
            </ListGroup>
            <Link to="/cart">Edit</Link>
          </Card>
        </Col>
        <Col md={4}>
          <Card.Body>
            <Card.Title>Order Summary</Card.Title>

            <ListGroup variant="flush">
              <ListGroup.Item>
                <Row>
                  <Col>Items</Col>
                  <Col>${cart.itemsPrice.toFixed(2)}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Shipping</Col>
                  <Col>${cart.shippingPrice.toFixed(2)}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Tax</Col>
                  <Col>${cart.taxPrice.toFixed(2)}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>
                    <strong>orderTotal</strong>
                  </Col>
                  <Col>
                    <strong>${cart.itemsPrice.toFixed(2)}</strong>
                  </Col>
                </Row>
              </ListGroup.Item>
              <Button type="button"
               onClick={placeOrderHandler}
               disabled={cart.cartItems.length===0}
               
               >
                 Place order
              </Button>
            </ListGroup>
          </Card.Body>
        </Col>
      </Row>
    </div>
  );
};

export default PlaceOrderScreen;
