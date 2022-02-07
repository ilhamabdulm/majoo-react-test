import { createSlice, nanoid } from '@reduxjs/toolkit';

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

export const createTodo = (newTodo) => (dispatch, getState) => {
  const payload = {
    id: nanoid(),
    createdAt: new Date().toDateString(),
    status: 0,
    ...newTodo,
  };
  const state = getState();
  const data = state.todos.data;

  dispatch(setTodosData([...data, payload]));
};

export const updateTodoStatus = (id, status) => (dispatch, getState) => {
  const state = getState();
  const data = state.todos.data;
  const clonned = data?.map((dt) =>
    dt.id === id ? { ...dt, status: status } : { ...dt }
  );

  dispatch(setTodosData(clonned));
};

export const updateTodo = (id, updatedData) => (dispatch, getState) => {
  const state = getState();
  const data = state.todos.data;
  const clonned = data?.map((dt) =>
    dt.id === id ? { ...updatedData } : { ...dt }
  );

  dispatch(setTodosData(clonned));
};

export const selectTodos = (state) => state.todos.data;

export const selectSelected = (state) => state.todos.selected;

export const selectById = (id) => (state) => {
  const todos = state.todos.data;

  return todos.find((td) => String(td.id) === String(id));
};

export default todoSlice.reducer;
