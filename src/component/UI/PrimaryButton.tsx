import classNames from 'classnames';
import React, { FC, MouseEventHandler } from 'react';
import style from '../../style/ui-components/PrimaryButton.module.scss';
var cx = classNames.bind(style);

export enum ButtonColor {
  WHITE,
  GREEN,
  ORANGE
}

type Props = { 
  onClick: MouseEventHandler; 
  title: string;
  buttonColor?: ButtonColor;
}

const PrimaryButton:FC<Props> = (props: Props, children) => {
  const { title, onClick, buttonColor } = { ...props };
  let color = 'white';

  if(buttonColor === ButtonColor.GREEN) {
    color = 'green';
  }
  if(buttonColor === ButtonColor.ORANGE) {
    color = 'orange';
  }

  return (
    <a href='#' className={cx(style.btn, style[color])} onClick={onClick}>
      {title}
    </a>
  );
};

export default PrimaryButton;
