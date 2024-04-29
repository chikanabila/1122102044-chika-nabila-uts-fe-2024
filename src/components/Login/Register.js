import React from 'react'
import { Container, Row, Col, Button, Form } from 'react-bootstrap'

const Register = () => {
  return (
    <div id="register">
      <Container>
        <Row>
          <Col>
            <h2 className="text-center fw bold">Anda belum mempunyai akun? Silahkan daftar disini</h2>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Alamat email</Form.Label>
                <Form.Control type="email" placeholder="Tuliskan email anda" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Register



