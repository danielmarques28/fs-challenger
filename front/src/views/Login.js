import styles from '../styles/scss/views/Login.module.scss';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import UserAPI from '../api/user';
import { useHistory } from 'react-router-dom';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  let history = useHistory();

  function handleChangeEmail(event) {
    setEmail(event.target.value);
  }

  function handleChangePassword(event) {
    setPassword(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    UserAPI.login({ email, password })
      .then(function (response) {
        localStorage.token = response.data.token;
        // return <Redirect to="/" />;
        history.push('/');
      })
      // .catch(function (error) {
      //   error.response.data;
      // });
  }

  return (
    <div className={styles['login']}>
      <Card style={{ width: '20rem', padding: '15px' }}>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              onChange={handleChangeEmail}
              value={email}
              type="email"
              placeholder="Enter email"
            />
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Label>Password</Form.Label>
            <Form.Control
              onChange={handleChangePassword}
              value={password}
              type="password"
              placeholder="Enter password"
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Card>
    </div>
  );
}
