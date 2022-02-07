import { useEffect, useState } from 'react';

import { ErrorMessage } from '..';

import styles from './styles.module.scss';

const { root, root__input, input_container, input_container__with_prefix } =
  styles;

const Input = (props) => {
  const {
    label,
    type,
    name,
    placeholder,
    value = '',
    onChange = (v) => {},
    hideLabel = false,
    readonly = false,
    disabled = false,
    suffixIcon = null,
    prefixIcon = null,
    onClick = () => {},
    number = false,
    withParser = false,
    rules = null,
    required = false,
    max = 0,
  } = props;
  const [showValue, setShowValue] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isTouched, setIsTouched] = useState(false);

  useEffect(() => {
    if (number && value && withParser) {
      const withoutCommas = value.replace(/,/gi, '');
      setShowValue(Number(withoutCommas).toLocaleString('en'));
    } else {
      setShowValue(value);
    }
  }, [value, number]);

  return (
    <label className={root}>
      {label ? (
        <p style={{ visibility: hideLabel ? 'hidden' : 'visible' }}>
          {label} {required && <span>*</span>}
        </p>
      ) : null}
      <div className={input_container} data-disabled={`${disabled}`}>
        <div className={input_container__with_prefix}>
          {prefixIcon && <div>{prefixIcon}</div>}

          <input
            name={name}
            className={root__input}
            type={type}
            placeholder={placeholder}
            value={showValue}
            onChange={(e) => {
              if (number) {
                const regex = /^\d*[.]?\d*$/;
                const withoutCommas = e.target.value.replace(/,/gi, '');
                if (regex.test(withoutCommas)) {
                  if (max > 0 && Number(withoutCommas) > Number(max)) {
                    return;
                  } else {
                    onChange(withoutCommas);
                    if (withParser) {
                      setShowValue(Number(withoutCommas).toLocaleString('en'));
                    } else {
                      setShowValue(withoutCommas);
                    }
                  }
                } else {
                  return;
                }
              } else {
                onChange(e.target.value);
              }
            }}
            readOnly={readonly}
            disabled={disabled}
            onClick={() => (suffixIcon ? onClick() : null)}
            onFocus={() => setIsTouched(true)}
            onBlur={() => setIsTouched(false)}
          />
        </div>

        {suffixIcon && <div>{suffixIcon}</div>}
      </div>
      {(errorMessage || rules?.validation) && isTouched && (
        <div style={{ marginTop: '0.4rem' }}>
          <ErrorMessage>{errorMessage || rules?.message}</ErrorMessage>
        </div>
      )}
    </label>
  );
};

export default Input;
