import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import AddToDo from './AddToDo';
import ToDoList from './ToDoList';

const App = () => (
  <Container>
    <Row className='row'>
      <Col xs={12}>
        <h1>ToDo List</h1>
        <AddToDo />
        <ToDoList />
      </Col>
    </Row>
  </Container>
);

export default App;
