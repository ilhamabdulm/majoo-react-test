import { Button, Tag } from 'components/atoms';
import { DrawerLayout } from 'components/layout';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { deleteTodo, selectSelected, updateTodoStatus } from 'store/todo-slice';

import styles from './styles.module.scss';

const { root, action_group, detail } = styles;

const DrawerDetailTodo = (props) => {
  const { isOpen, onClose } = props;
  const todo = useSelector(selectSelected);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <DrawerLayout isOpen={isOpen} onClose={onClose}>
      <section className={root}>
        <header>
          <h3>{todo?.title}</h3>
          <Tag color={todo?.status ? 'green' : 'red'}>
            {todo?.status ? 'Selesai' : 'Belum Selesai'}
          </Tag>
        </header>

        <section className={detail}>
          <p>{todo?.description}</p>
          <span>Created At: {todo?.createdAt}</span>
        </section>

        <footer>
          <div className={action_group}>
            <Button
              size="small"
              variant="secondary"
              onClick={() => {
                onClose();
                navigate('/edit/' + todo.id);
              }}
            >
              Ubah
            </Button>
            <Button
              size="small"
              onClick={() => {
                dispatch(deleteTodo(todo?.id));
                onClose();
              }}
            >
              Hapus
            </Button>
          </div>
          {todo?.status ? (
            <Button
              size="full"
              variant="primary"
              danger
              onClick={() => {
                dispatch(updateTodoStatus(todo?.id, 0));
                onClose();
              }}
            >
              Tandai Belum Selesai
            </Button>
          ) : (
            <Button
              size="full"
              variant="primary"
              onClick={() => {
                dispatch(updateTodoStatus(todo?.id, 1));
                onClose();
              }}
            >
              Tandai Selesai
            </Button>
          )}
        </footer>
      </section>
    </DrawerLayout>
  );
};

export default DrawerDetailTodo;
