import styles from './styles.module.scss';
import { CreateForm } from 'components/organism';

const { header } = styles;

function CreatePage() {
  return (
    <>
      <header className={header}>
        <h1>Create New</h1>
      </header>

      <CreateForm />
    </>
  );
}

export default CreatePage;
