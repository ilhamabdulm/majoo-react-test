import React from 'react';
import styles from './styles.module.scss';

const Text = ({
  type = 'reg16',
  children = '',
  onClick = () => { },
  className = 'N800',
  style = {},
  innerHtml = false,
}) => {
  return (
    <div
      onClick={onClick}
      className={`${styles[type]} ${className}`}
      style={style}
      dangerouslySetInnerHTML={innerHtml ? { __html: children } : null}
    >
      {innerHtml ? null : children}
    </div>
  );
};

export default Text;
