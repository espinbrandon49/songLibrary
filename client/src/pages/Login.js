import { useState } from 'react';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

function Login() {
  const [login, setLogin] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    try {

    } catch (err) {
      console.log(err)
    }

    setLogin('')
  }

  
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
      <form>
        <h2>Signup</h2>
        <FloatingLabel
          controlId="floatingInput"
          label="createUsername"
          className="mb-3"
        >
          <Form.Control type="text" placeholder="Create username" />
        </FloatingLabel>
        <FloatingLabel controlId="floatingPassword" label="Password">
          <Form.Control type="password" placeholder="Password" />
        </FloatingLabel>
        <button>Signup</button>
        </form >
    </main>
  );
}

export default Login;