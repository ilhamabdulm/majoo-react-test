import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { Button, Input } from 'components/atoms';
import { MainLayout } from 'components/layout';
import { initData } from 'store/todo-slice';

import styles from './styles.module.scss';
import { CreateForm } from 'components/organism';

const { header, form_container } = styles;

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
