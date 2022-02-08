import classNames from 'classnames';
import React from 'react';
import style from './AnimatedButton.module.scss';
var cx = classNames.bind(style);

type Props = { label: String; onClick: Function; color?: String };

const AnimatedButton = (props: Props) => {
  const { label, onClick } = { ...props };
  return <a href="#" className={cx(style.btn, style.btnWhite)}>
      {label}
      </a>;
};

export default AnimatedButton;
