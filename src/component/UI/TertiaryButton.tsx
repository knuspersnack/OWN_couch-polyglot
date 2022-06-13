import classNames from 'classnames';
import React, { MouseEventHandler } from 'react';
import style from '../../style/ui-components/TertiaryButton.module.scss';
var cx = classNames.bind(style);

type Props = {
  label: string;
  onClick: MouseEventHandler;
};

const TertiaryButton = (props: Props) => {
  const { label, onClick } = { ...props };
  return (
    <a href='#' className={style.btn} onClick={onClick}>
      {label}
    </a>
  );
};

export default TertiaryButton;