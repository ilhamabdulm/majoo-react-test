import { Outlet } from 'react-router-dom';

import styles from './styles.module.scss';

const { root, content } = styles;

const MobileLayout = ({ children }) => {
  return (
    <main className={root}>
      <section className={content}>
        <Outlet />
      </section>
    </main>
  );
};

export default MobileLayout;
