import { TodoCard } from 'components/molecules';

import styles from './styles.module.scss';

const { list_container } = styles;

const ListTodo = (props) => {
  return (
    <article className={list_container}>
      <TodoCard title="Test 1" date="12/12/22" />
      <TodoCard title="Test 2" date="12/12/22" />
      <TodoCard title="Test 3" date="12/12/22" />
      <TodoCard title="Test 4" date="12/12/22" />
    </article>
  );
};

export default ListTodo;
