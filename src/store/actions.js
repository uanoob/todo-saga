export const ADD_TODO = 'ADD_TODO';

export const addToDo = title => ({
  type: ADD_TODO,
  payload: {
    _id: new Date().getTime().toString(),
    title,
  },
});
