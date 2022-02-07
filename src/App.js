import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';

import { MainLayout } from 'components/layout';
import { CreatePage, EditPage, MainPage } from 'pages';

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
        <Route path="edit/:id" element={<EditPage />} />
        <Route index element={<MainPage />} />
      </Route>
    </Routes>
  );
}

export default App;
