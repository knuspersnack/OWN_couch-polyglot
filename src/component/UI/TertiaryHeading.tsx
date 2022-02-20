import classNames from 'classnames';
import React from 'react';
import style from '../../style/ui-components/TertiaryHeading.module.scss';
import { Color } from '../../types/ColorSchema';
var cx = classNames.bind(style);

type Props = {
  text: string;
  color: Color;
};

function TertiaryHeading({ text, color }: Props) {
  return (
    <h4 className={style.headingTertiary}>
      <span className={cx(style.text, style[color])}>{text}</span>
    </h4>
  );
}

export default TertiaryHeading;
