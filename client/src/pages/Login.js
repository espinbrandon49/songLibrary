import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

function FormFloatingBasicExample() {
  return (
    <>
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
      <hr />
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
    </>
  );
}

export default FormFloatingBasicExample;