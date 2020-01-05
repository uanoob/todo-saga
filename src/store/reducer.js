import { ADD_TODO, RENDER_TODO_LIST } from './actions';

const initialState = {
  todos: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case RENDER_TODO_LIST:
      return {
        ...state,
        todos: action.payload,
      };
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    default:
      return state;
  }
};
