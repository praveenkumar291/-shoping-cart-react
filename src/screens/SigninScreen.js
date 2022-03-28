import React, { useContext, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Store } from './../Store';
import { toast } from 'react-toastify';
// import { Toast } from 'react-toastify/dist/components';
import { getError } from './../utils';

const SigninScreen = () => {
  const navigate = useNavigate();
  const { search } = useLocation();
  const redirectInUrl = new URLSearchParams(search).get('redirect');
  const redirect = redirectInUrl ? redirectInUrl : '/shipping';

  const [email, setEmail] = useState(''); // use state hook emil
  const [password, setPassword] = useState(''); // use state hook password
  const { state, dispatch: ctxDispatch } = useContext(Store); // here use ing use context and store
  const { userInfo } = state;

  // onsubmit
  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post('/api/users/signin', {
        //ajax request
        email,
        password,
      });
      ctxDispatch({ type: 'USER_SIGNIN', payload: data }); //  dispatch acton
      localStorage.setItem('userInfo', JSON.stringify(data)); // data store in local storage
      navigate( redirect || '/');
    } catch (err) {
      toast.error(getError(err)); // toastfie using
    }
  };
  //
  useEffect(() => {
    if (userInfo) {
      navigate(redirect);
    }
  }, [navigate, redirect, userInfo]);
  return (
    <Container className="small-container  continer-bg">
      <Helmet>
        <title>Sign In</title>
      </Helmet>

      {/* form */}

      <h1 className="my-3">Sign In</h1>
      {/* // onSubmit implement */}
      <Form onSubmit={submitHandler}>
        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <div className="mb-3">
          <Button type="submit">Sign In</Button>
        </div>
        <div className="mb-3">
          New customer ?
          <Link to={`/signup?redirect=${redirect}`}>Create your account</Link>
        </div>
      </Form>
    </Container>
  );
};

export default SigninScreen;
