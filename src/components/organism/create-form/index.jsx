import { Button, Input } from 'components/atoms';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createTodo, updateTodo } from 'store/todo-slice';
import useForm from 'utils/use-form';

import styles from './styles.module.scss';

const { form_container } = styles;

const CreateForm = (props) => {
  const { values } = props;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { state, handleStateSchange, handleBulkChange } = useForm({
    title: '',
    description: '',
  });

  useEffect(() => {
    if (values) {
      handleBulkChange({
        title: values.title,
        description: values.description,
        id: values.id,
      });
    }
  }, [values]);

  const _handleSubmit = () => {
    if (values) {
      dispatch(
        updateTodo(values.id, {
          ...values,
          title: state.title,
          description: state.description,
        })
      );
    } else {
      dispatch(
        createTodo({ title: state.title, description: state.description })
      );
    }

    navigate('/');
  };

  return (
    <div className={form_container}>
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
        <Button type="button" variant="primary" onClick={_handleSubmit}>
          {values ? 'Ubah' : 'Tambah'}
        </Button>
      </div>
    </div>
  );
};

export default CreateForm;
