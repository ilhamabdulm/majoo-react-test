import joinClasses from 'utils/join-classes';
import styles from './styles.module.scss';

const { root } = styles;

// variant = primary | secondary

const Button = (props) => {
  const {
    type = 'button',
    children,
    variant = '',
    prefixIcon = null,
    suffixIcon = null,
    onClick = () => {},
    disabled = false,
    size = '', // small | large | "full"
    bordered = false,
    small,
    className = '',
    danger = false,
  } = props;
  const classes = joinClasses([root, styles[variant], className]);

  return (
    <button
      type={type}
      danger={`${danger}`}
      className={classes}
      onClick={onClick}
      disabled={disabled}
      data-size={size}
      data-bordered={`${bordered}`}
      data-small={`${small}`}
    >
      {prefixIcon || null}
      {children}
      {suffixIcon || null}
    </button>
  );
};

export default Button;
