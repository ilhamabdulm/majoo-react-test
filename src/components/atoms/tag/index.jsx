import styles from './styles.module.scss';

const { tag } = styles;

const Tag = (props) => {
  const { children, color, width = 'fit-content', onClick = () => {} } = props; // color = red | green | grey; width = default | fit-content; bordered = solid | dash

  return (
    <div
      className={tag}
      data-color={color}
      data-width={width}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default Tag;
