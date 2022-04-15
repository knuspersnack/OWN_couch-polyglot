import React from 'react';
import style from '../../style/ui-components/TextInput.module.scss';

type Props = {
  placeholder: string;
  label: string;
  id: string;
  type: string;
  onInput?: Function;
  isRequired?: boolean;
};

const TextInput = (props: Props) => {
  const { placeholder, label, id, onInput, type, isRequired = true } = props;

  const onChange = () => {
    if (onInput) {
      onInput();
    }
  };

  return (
    <div className={style.container}>
      <input
        id={id}
        type={type}
        className={style.textInput}
        placeholder={placeholder}
        onInput={onChange}
        required={isRequired}
      />
      <label className={style.label} htmlFor={id}>{label}</label>
    </div>
  );
};

export default TextInput;
