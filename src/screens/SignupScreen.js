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

const SignupScreen = () => {
  const navigate = useNavigate();
  const { search } = useLocation();
  const redirectInUrl = new URLSearchParams(search).get('redirect');
  const redirect = redirectInUrl ? redirectInUrl : '/';

  const [name, setName] = useState(''); // use state hook emil

  const [email, setEmail] = useState(''); // use state hook emil
  const [password, setPassword] = useState(''); // use state hook password
  const [confirmPassword, setConfirmPassword] = useState(''); // use state hook emil

  const { state, dispatch: ctxDispatch } = useContext(Store); // here use ing use context and store
  const { userInfo } = state;

  // onsubmit
  const submitHandler = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast.error('Password do not match');
      return;
    }
    try {
      const { data } = await axios.post('/api/users/signup', {
        //ajax request
        name,
        email,
        password,
        confirmPassword,
      });
      ctxDispatch({ type: 'USER_SIGNIN', payload: data }); //  dispatch acton
      localStorage.setItem('userInfo', JSON.stringify(data)); // data store in local storage
      navigate( '/');
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
        <title>Sign Up</title>
      </Helmet>

      {/* form */}

      <h1 className="my-3">Sign up</h1>
      {/* // onSubmit implement */}
      <Form onSubmit={submitHandler}>
        <Form.Group className="mb-3" controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="name"
            required
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>
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
        <Form.Group className="mb-3" controlId="confirm password">
          <Form.Label>ConfirmPassword</Form.Label>
          <Form.Control
            type="confirmpassword"
            required
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </Form.Group>
        <div className="mb-3">
          <Button type="submit">Sign Up</Button>
        </div>
        <div className="mb-3">
          Already have an account ?
          <Link to={`/signin?redirect=${redirect}`}>SignIn</Link>
        </div>
      </Form>
    </Container>
  );
};

export default SignupScreen;
