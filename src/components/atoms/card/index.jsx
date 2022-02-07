import styles from './styles.module.scss';

const { card } = styles;

const Card = (props) => {
  const {
    children,
    color,
    width,
    bordered = 'solid',
    shadow,
    onClick = () => {},
  } = props; // color = white | grey; width = default | fit-content; bordered = solid | dash

  return (
    <div
      className={card}
      data-color={color}
      data-width={width}
      data-shadow={shadow}
      data-bordered={bordered}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default Card;
