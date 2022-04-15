import React from 'react';
import style from '../../style/ui-components/RadioButton.module.scss';

type Props = {
  id: string;
  label: string;
  name?: string;
  onInput?: Function;
};

const RadioButton = (props: Props) => {
  const {id, label, name, onInput = () => {} } = props;
  return (
    <div className={style.container}>
      <input
        type='radio'
        id={id}
        className={style.originalButton}
        onChange={() => onInput}
        name={name}
      />
      <label className={style.label} htmlFor={id}>
          <span className={style.customButton}>

          </span>
        {label}
      </label>
    </div>
  );
};

export default RadioButton;
