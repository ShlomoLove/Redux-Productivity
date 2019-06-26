import axios from 'axios';
import { ADD_TODO, DELETE_TODO, FETCH_TODOS, FETCH_TODO, UPDATE_TODO, COMPLETE_TODO } from './types.js';

const apiUrl = 'http://localhost:3004/todos';

const getRandomInt = (max) => {
  return Math.floor(Math.random() * Math.floor(max));
}


export const addTodo = text => {
  return (dispatch) => {
    return axios.post(apiUrl, {
      id: getRandomInt(10000000),
      text: text, 
      completed: false})
      .then (response => {
        dispatch(createPostSuccess(response.data))
      })
      .catch(error => {
        throw(error);
      });
  }; 
};

export const createPostSuccess = data => {
  return {
    type: ADD_TODO,
    id: data.id,
    text: data.text
  }
}

export const fetchTodos = todos => {
  console.log (todos, 'todos in fetchTodos in index of actions')
  return {
    type: FETCH_TODOS,
    todos
  }
}

export const fetchAllTodos = () => {
  return (dispatch) => {
    return axios.get(apiUrl) 
      .then(response => {
        dispatch(fetchTodos(response.data))
      })
      .catch(error => {
        throw(error, 'error');
      });
  };
};

export const setVisibilityFilter = filter => ({
  type: 'SET_VISIBILITY_FILTER', 
  filter
})

export const toggleTodo = todo => {
  let todoId = todo.id;
  let newCompleted = todo.completed ? false : true;
  return (dispatch) => {
    return axios.patch(apiUrl, {
      params: {id: todoId, completed: newCompleted}})
      .then(respose => {
        dispatch(createToggleSuccess(todoId))
      })
      .catch(error => {
        throw (error);
      });
  };
}

export const createToggleSuccess = todoId => {
  return {
    type: 'TOGGLE_TODO',
    id: todoId
  }
};

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}