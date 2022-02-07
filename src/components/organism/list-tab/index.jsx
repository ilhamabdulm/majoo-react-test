import { Button } from 'components/atoms';

import styles from './styles.module.scss';

const { tab_container } = styles;

const ListTab = (props) => {
  return (
    <section className={tab_container}>
      <Button variant="primary" size="small">
        Selesai
      </Button>
      <Button variant="primary" size="small">
        Belum Selesai
      </Button>
    </section>
  );
};

export default ListTab;
