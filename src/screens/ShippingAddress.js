import React, { useContext, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Store } from './../Store';
import { useNavigate } from 'react-router-dom';
import CheckoutSteps from './../components/CheckoutSteps';

const ShippingAddress = () => {
  const navigate = useNavigate();
  const { state, dispatch: ctxDispatch } = useContext(Store); // here use ing use context and store
  const {
    userInfo,
    cart: { shippingAddress },
  } = state;
  const [fullName, setFullName] = useState(shippingAddress.fullName || '');
  const [address, setAddress] = useState(shippingAddress.address || '');
  const [city, setCity] = useState(shippingAddress.city || '');
  const [pscode, setPscode] = useState(shippingAddress.pscode || '');
  const [country, setCountry] = useState(shippingAddress.country || '');
  //

  useEffect(() => {
    if (!userInfo) {
      navigate('/signin ? redirect=/shipping');
    }
  }, [userInfo, navigate]);
  const submitHandler = (e) => {
    e.preventDefault();
    ctxDispatch({
      type: 'SAVE_SHIPPING_ADDRESS',
      payload: {
        fullName,
        address,
        city,
        pscode,
        country,
      },
    });
    localStorage.setItem(
      'shippingAddress',
      JSON.stringify({
        fullName,
        address,
        city,
        pscode,
        country,
      })
    );
    navigate('/payment');
  };
  return (
    <div>
      <Helmet>
        <title>Shipping Address</title>
      </Helmet>
       <CheckoutSteps step1 step2></CheckoutSteps>
      <div className=" container small-container">
        <h1 className="my-3"> Shipping address</h1>
        <Form onSubmit={submitHandler}>
          <Form.Group className="mb-3" controlId="fullName">
            <Form.Label> Full Name</Form.Label>
            <Form.Control
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
            />
          </Form.Group>
          {/* //2 */}
          <Form.Group className="mb-3" controlId="address">
            <Form.Label> Address</Form.Label>
            <Form.Control
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            />
          </Form.Group>
          {/* 3 */}
          <Form.Group className="mb-3" controlId="city">
            <Form.Label> City</Form.Label>
            <Form.Control
              value={city}
              onChange={(e) => setCity(e.target.value)}
              required
            />
          </Form.Group>
          {/* 4 */}
          <Form.Group className="mb-3" controlId="postal code">
            <Form.Label> Postal Code</Form.Label>
            <Form.Control
              value={pscode}
              onChange={(e) => setPscode(e.target.value)}
              required
            />
          </Form.Group>

          {/* 5 */}
          <Form.Group className="mb-3" controlId="country">
            <Form.Label> Country</Form.Label>
            <Form.Control
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              required
            />
          </Form.Group>
          <div className="mb-3">
            <Button variant="primary" type="submit">
              Continue
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default ShippingAddress;
