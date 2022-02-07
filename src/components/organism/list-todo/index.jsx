import { TodoCard } from 'components/molecules';
import { useSelector, useDispatch } from 'react-redux';

import DrawerDetailTodo from '../drawer-detail-todo';

import { selectTodos, setSelectedTodo } from 'store/todo-slice';
import useModal from 'utils/use-modal';

import styles from './styles.module.scss';
import { selectFilter } from 'store/filter-slice';

const { list_container } = styles;

const ListTodo = (props) => {
  const { isOpen, toggleModal } = useModal();
  const todos = useSelector(selectTodos);
  const filter = useSelector(selectFilter);

  const dispatch = useDispatch();

  return (
    <article className={list_container}>
      {todos
        ?.filter((td) => (filter === 2 ? td : td.status === filter))
        ?.map((todo) => {
          return (
            <TodoCard
              key={todo.id}
              title={todo.title}
              date={todo.createdAt}
              onClick={() => {
                dispatch(setSelectedTodo(todo));
                toggleModal();
              }}
            />
          );
        })}

      <DrawerDetailTodo
        isOpen={isOpen}
        onClose={() => {
          toggleModal();
          dispatch(setSelectedTodo(null));
        }}
      />
    </article>
  );
};

export default ListTodo;
