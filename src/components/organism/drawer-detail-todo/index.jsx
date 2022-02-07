import { Button, Tag } from 'components/atoms';
import { DrawerLayout } from 'components/layout';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

import { deleteTodo, selectSelected } from 'store/todo-slice';

import styles from './styles.module.scss';

const { root, action_group, detail } = styles;

const DrawerDetailTodo = (props) => {
  const { isOpen, onClose } = props;
  const todo = useSelector(selectSelected);
  const dispatch = useDispatch();

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
            <Button size="small" variant="secondary">
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
          <Button size="full" variant="primary">
            Tandai Selesai
          </Button>
        </footer>
      </section>
    </DrawerLayout>
  );
};

export default DrawerDetailTodo;
