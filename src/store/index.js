import { configureStore } from '@reduxjs/toolkit';
import filterReducer from './filter-slice';
import todosReducer from './todo-slice';

export const store = configureStore({
  reducer: {
    todos: todosReducer,
    filter: filterReducer,
  },
});
