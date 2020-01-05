import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ListGroup from 'react-bootstrap/ListGroup';
import Jumbotron from 'react-bootstrap/Jumbotron';
import ToDo from './ToDo';
import * as actions from '../store/actions';

const ToDoList = ({ todos, loadToDoList }) => {
  useEffect(() => {
    loadToDoList();
  }, [loadToDoList]);

  return (
    <Jumbotron>
      <ListGroup>
        {todos.map(todo => (
          <ToDo key={todo._id} title={todo.title} />
        ))}
      </ListGroup>
    </Jumbotron>
  );
};

ToDoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  loadToDoList: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  todos: state.todos,
});

export default connect(mapStateToProps, actions)(ToDoList);
