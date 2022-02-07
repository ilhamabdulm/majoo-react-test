import { createSlice } from '@reduxjs/toolkit';
import fetchInitData from 'services/init-data';

export const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    data: [],
    selected: null,
  },
  reducers: {
    setSelectedTodo: (state, action) => {
      state.selected = action.payload;
    },
    setTodosData: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { setSelectedTodo, setTodosData } = todoSlice.actions;

export const initData = () => async (dispatch) => {
  try {
    const todos = await fetchInitData();
    dispatch(setTodosData(todos));
  } catch (err) {
    console.log(err);
  }
};

export const deleteTodo = (id) => (dispatch, getState) => {
  const state = getState();
  const data = state.todos.data;
  const afterDeletions = data.filter((dt) => dt.id !== id);
  dispatch(setTodosData(afterDeletions));
};

export const selectTodos = (state) => state.todos.data;
export const selectSelected = (state) => state.todos.selected;

export default todoSlice.reducer;
