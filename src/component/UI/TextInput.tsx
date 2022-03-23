import React from 'react';
import style from '../../style/ui-components/TextInput.module.scss';

type Props = {
  placeholder: string;
  label: string;
  id: string;
  type: string;
  onInput?: Function;
};

const TextInput = (props: Props) => {
  const { placeholder, label, id, onInput, type } = props;

  const onChange = () => {
    if (onInput) {
      onInput();
    }
  };

  return (
    <>
      <input
        id={id}
        type={type}
        className={style.textInput}
        placeholder={placeholder}
        onInput={onChange}
        required
      />
      <label htmlFor={id}>{label}</label>
    </>
  );
};

export default TextInput;
