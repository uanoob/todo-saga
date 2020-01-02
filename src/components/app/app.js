import React from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const App = () => (
  <Container>
    <Row className='row'>
      <Col xs={12}>
        <h1>Todo Saga</h1>
        <Button>Push me!</Button>
      </Col>
    </Row>
  </Container>
);

export default App;
