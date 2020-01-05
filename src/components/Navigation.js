import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavigationBar = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
  background-color: lightgray;
`;

export default () => (
  <NavigationBar>
    <Link className='btn btn-primary' to='/'>
      ToDo List
    </Link>
    <Link className='btn btn-secondary' to='/new-item'>
      + Add New
    </Link>
  </NavigationBar>
);
