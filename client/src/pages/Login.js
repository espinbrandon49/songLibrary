import { useState } from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [login, setLogin] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
    } catch (err) {
      console.log(err)
    }
    setLogin('')
  }

  const addUser = () => {
    Axios.post("http://localhost:3001/api/user/signup", {
      username: username,
      password: password
    })
    window.location.replace('/')
  };

  const onSubmitSignup = (e) => {
    e.preventDefault();
    if (username === '' || password === '') {
      alert('Please fill in all fields')
    }
    addUser()
    setUsername('');
    setPassword('');

  };

  return (
    <main className='container'>
      <form>
        <h2>Login</h2>
        <FloatingLabel
          controlId="floatingInput"
          label="username"
          className="mb-3"
        >
          <Form.Control type="text" placeholder="Enter username" />
        </FloatingLabel>
        <FloatingLabel controlId="floatingPassword" label="Password">
          <Form.Control type="password" placeholder="Password" />
        </FloatingLabel>
        <button>Login</button>
      </form>

      <hr />

      <form onSubmit={onSubmitSignup} >
        <h2>Signup</h2>
        <FloatingLabel
          controlId="formUsername"
          label="Username"
          className="mb-3"
        >
          <Form.Control
            type="text"
            placeholder="Create a username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </FloatingLabel>
        <FloatingLabel controlId="floatingPassword" label="Password">
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </FloatingLabel>
        <button type='submit' className='btn btn-primary'>Signup</button>
      </form >
    </main>
  );
}

export default Login;