import classNames from 'classnames';
import React, { MouseEventHandler } from 'react';
import style from '../../style/ui-components/PrimaryButton.module.scss';
var cx = classNames.bind(style);

type Props = { label: String; onClick: MouseEventHandler; color?: String };

const PrimaryButton = (props: Props) => {
  const { label, onClick } = { ...props };
  return <a href="#" className={cx(style.btn, style.btnWhite)} onClick={onClick}>
      {label}
      </a>;
};

export default PrimaryButton;