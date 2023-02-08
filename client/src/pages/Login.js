import { useContext, useState } from 'react';
import Axios from 'axios';
import { AuthContext } from '../helpers/AuthContext';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [usernameSignup, setUsernameSignup] = useState('');
  const [passwordSignup, setPasswordSignup] = useState('');
  const { setAuthState } = useContext(AuthContext)

  const login = () => {
    const data = { username: username, password: password };
    Axios
      .post("http://localhost:3001/api/user/login", data)
      .then((response) => {
        if (response.data.error) {
          console.log(response.data.error)
        } else {
          localStorage.setItem('accessToken', response.data.token)

          setAuthState({
            username: response.data.username,
            _id: response.data._id,
            status: true
          });
          window.location.replace('/')
        }
      })
  }
  console.log(window.localStorage.accessToken)

  const onSubmitLogin = (e) => {
    e.preventDefault();
    if (username === '' || password === '') {
      alert('Please fill in all fields')
    }
    login();
    console.log(username, password)
    setUsername('');
    setPassword('');
  }

  const addUser = () => {
    Axios.post("http://localhost:3001/api/user/signup", {
      usernameSignup: usernameSignup,
      passwordSignup: passwordSignup
    })
    window.location.replace('/')
  };

  const onSubmitSignup = (e) => {
    e.preventDefault();
    if (usernameSignup === '' || passwordSignup === '') {
      alert('Please fill in all fields')
    }
    addUser()
    setUsernameSignup('');
    setPasswordSignup('');
  };

  return (
    <main className='container'>
      <form onSubmit={onSubmitLogin}>
        <h2>Login</h2>
        <FloatingLabel
          controlId="username"
          label="username"
          className="mb-3"
        >
          <Form.Control
            type="text"
            placeholder="Enter username"
            onChange={(e) => { setUsername(e.target.value) }}
          />
        </FloatingLabel>
        <FloatingLabel controlId="floatingPassword" label="Password">
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={(e) => { setPassword(e.target.value) }}
          />
        </FloatingLabel>
        <button type='submit' className='btn btn-primary'>Login</button>
      </form>

      <hr />

      <form onSubmit={onSubmitSignup} >
        <h2>Signup</h2>
        <FloatingLabel
          controlId="formUsername"
          label="username"
          className="mb-3"
        >
          <Form.Control
            type="text"
            placeholder="Create a username"
            value={usernameSignup}
            onChange={(e) => setUsernameSignup(e.target.value)}
          />
        </FloatingLabel>
        <FloatingLabel controlId="floatingPassword" label="Password">
          <Form.Control
            type="password"
            placeholder="Password"
            value={passwordSignup}
            onChange={(e) => setPasswordSignup(e.target.value)}
          />
        </FloatingLabel>
        <button type='submit' className='btn btn-primary'>Signup</button>
      </form >
    </main>
  );
}

export default Login;