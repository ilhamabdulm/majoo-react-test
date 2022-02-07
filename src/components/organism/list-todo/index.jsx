import { TodoCard } from 'components/molecules';
import { useSelector } from 'react-redux';

import DrawerDetailTodo from '../drawer-detail-todo';

import { selectTodos, setSelectedTodo } from 'store/todo-slice';
import useModal from 'utils/use-modal';

import styles from './styles.module.scss';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

const { list_container } = styles;

const ListTodo = (props) => {
  const { isOpen, toggleModal } = useModal();
  const todos = useSelector(selectTodos);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(todos, 'this is todos list');
  }, [todos]);

  return (
    <article className={list_container}>
      {todos?.map((todo) => {
        return (
          <TodoCard
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
