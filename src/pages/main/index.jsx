import { Button } from 'components/atoms';
import { MainLayout } from 'components/layout';
import { ListTab, ListTodo } from 'components/organism';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { initData } from 'store/todo-slice';

import styles from './styles.module.scss';

const { header, floating_footer } = styles;

function MainPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initData());
  }, []);

  return (
    <MainLayout>
      <header className={header}>
        <h1>Todo App</h1>
      </header>

      <ListTab />
      <ListTodo />

      <footer className={floating_footer}>
        <div>
          <Button prefixIcon={'+'} variant="primary" />
        </div>
      </footer>
    </MainLayout>
  );
}

export default MainPage;
