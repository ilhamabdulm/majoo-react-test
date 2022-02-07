import { Button } from 'components/atoms';
import { ListTab, ListTodo } from 'components/organism';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { initData } from 'store/todo-slice';

import styles from './styles.module.scss';

const { header, floating_footer } = styles;

function MainPage() {
  const navigate = useNavigate();

  return (
    <>
      <header className={header}>
        <h1>Todo App</h1>
      </header>

      <ListTab
        tabs={[
          { name: 'Semua', values: 2 },
          { name: 'Selesai', values: 1 },
          { name: 'Belum Selesai', values: 0 },
        ]}
      />
      <ListTodo />

      <footer className={floating_footer}>
        <div>
          <Button
            prefixIcon={'+'}
            variant="primary"
            onClick={() => navigate('/create')}
          />
        </div>
      </footer>
    </>
  );
}

export default MainPage;
