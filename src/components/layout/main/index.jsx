import styles from './styles.module.scss';

const { root, content } = styles;

const MobileLayout = ({ children }) => {
  return (
    <main className={root}>
      <section className={content}>{children}</section>
    </main>
  );
};

export default MobileLayout;
