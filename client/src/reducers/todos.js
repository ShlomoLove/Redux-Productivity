import { FETCH_TODOS, ADD_TODO, FETCH_TODO, COMPLETE_TODO, DELETE_TODO } from '../actions/types';

const todos = ( state = [], action ) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false,
        }
      ];
    case FETCH_TODOS:
      return [...state, ...action.todos];
    case 'TOGGLE_TODO': 
      return state.map(todo => 
        (todo.id === action.id) ? {...todo, completed: !todo.completed} : todo
      )
    default: return state
  }
}

export default todos; 