import styles from './styles.module.scss';
import { CreateForm } from 'components/organism';
import { useSelector } from 'react-redux';
import { selectById } from 'store/todo-slice';
import { useParams } from 'react-router-dom';

const { header } = styles;

function EditPage() {
  const params = useParams();
  const selectedTodo = useSelector(selectById(params.id));

  return (
    <>
      <header className={header}>
        <h1>Edit Todo</h1>
      </header>

      <CreateForm values={selectedTodo} />
    </>
  );
}

export default EditPage;
