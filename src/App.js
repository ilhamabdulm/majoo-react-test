import { useEffect } from 'react';
import { Provider, useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';

import { MainLayout } from 'components/layout';
import { CreatePage, MainPage } from 'pages';

import { store } from 'store';
import { initData } from 'store/todo-slice';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initData());
  }, []);

  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="create" element={<CreatePage />} />
        <Route index element={<MainPage />} />
      </Route>
    </Routes>
  );
}

export default App;
