import React, { useRef } from 'react';
import { connect } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { addToDo } from '../store/actions';

const AddToDo = ({ addToDo }) => {
  const inputForm = useRef('');

  const onSubmit = e => {
    e.preventDefault();
    if (!inputForm.current.value.trim()) {
      return;
    }
    addToDo(inputForm.current.value);
    inputForm.current.value = '';
  };

  return (
    <Form onSubmit={onSubmit}>
      <Form.Group controlId='formBasicEmail'>
        <InputGroup>
          <Form.Control type='text' placeholder='Enter an item' ref={inputForm} />
          <InputGroup.Append>
            <Button type='submit'>Add To-Do</Button>
          </InputGroup.Append>
        </InputGroup>
      </Form.Group>
    </Form>
  );
};

export default connect(null, { addToDo })(AddToDo);
