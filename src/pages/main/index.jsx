import { Button } from 'components/atoms';
import { MainLayout } from 'components/layout';
import { ListTab, ListTodo } from 'components/organism';

import styles from './styles.module.scss';

const { header, floating_footer } = styles;

function MainPage() {
  return (
    <MainLayout>
      <header className={header}>
        <h1>Todo App</h1>
      </header>

      <ListTab />
      <ListTodo />

      <footer className={floating_footer}>
        <div>
          <Button prefixIcon={'+'} variant="primary"></Button>
        </div>
      </footer>
    </MainLayout>
  );
}

export default MainPage;
