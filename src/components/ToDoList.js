import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ListGroup from 'react-bootstrap/ListGroup';
import Jumbotron from 'react-bootstrap/Jumbotron';
import ToDo from './ToDo';

const ToDoList = ({ todos }) => (
  <Jumbotron>
    <ListGroup>
      {todos.map(todo => (
        <ToDo key={todo._id} {...todo} />
      ))}
    </ListGroup>
  </Jumbotron>
);

ToDoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

const mapStateToProps = state => ({
  todos: state.todos,
});

export default connect(mapStateToProps, null)(ToDoList);
