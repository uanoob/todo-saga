import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import AddToDo from './AddToDo';
import ToDoList from './ToDoList';
import Navigation from './Navigation';

const App = () => (
  <Container>
    <Row className='row'>
      <Col xs={12}>
        <h1>ToDo List</h1>
        <Navigation />
        <Switch>
          <Route path='/' exact component={ToDoList} />
          <Route path='/new-item' component={AddToDo} />
        </Switch>
      </Col>
    </Row>
  </Container>
);

export default App;
