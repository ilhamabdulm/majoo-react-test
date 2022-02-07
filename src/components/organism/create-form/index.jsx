import { Button, Input } from 'components/atoms';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createTodo } from 'store/todo-slice';
import useForm from 'utils/use-form';

import styles from './styles.module.scss';

const { form_container } = styles;

const CreateForm = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { state, handleStateSchange } = useForm({
    title: '',
    description: '',
  });

  const _handleSubmit = () => {
    dispatch(
      createTodo({ title: state.title, description: state.description })
    );

    navigate('/');
  };

  return (
    <form className={form_container}>
      <Input
        label="Judul"
        type="text"
        placeholder="Tambah Judul"
        name="title"
        onChange={(v) => handleStateSchange('title', v)}
        value={state.title}
      />
      <Input
        label="Deskripsi"
        type="text"
        placeholder="Tambah Deskripsi"
        name="description"
        onChange={(v) => handleStateSchange('description', v)}
        value={state.description}
      />
      <div>
        <Button type="button" variant="secondary" onClick={() => navigate('/')}>
          Batal
        </Button>
        <Button type="submit" variant="primary" onClick={_handleSubmit}>
          Tambah
        </Button>
      </div>
    </form>
  );
};

export default CreateForm;
