import React from 'react';
import style from '../../style/ui-components/SecondaryHeading.module.scss';
import { Size } from '../../types/Size';

type Props = {
  text: string;
  cssClasses?: string;
  size?: Size;
};

function SecondaryHeading({ text, cssClasses = '', size = Size.L }: Props) {
  
  var css = {fontSize: ""};
  switch (size) {
    case Size.S:
      css.fontSize = '1.5rem'
      break;
    case Size.M:
      css.fontSize = '2.5rem'
      break;
    case Size.L:
      css.fontSize = '3.5rem'
      break;
    default:
      break;
  }

  return (
    <div className={cssClasses}>
      <h2 className={style.headingSecondary} style={css}>{text}</h2>
    </div>
  );
}

export default SecondaryHeading;
