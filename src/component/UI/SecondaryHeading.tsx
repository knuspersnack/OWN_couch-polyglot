import React from 'react';
import style from '../../style/ui-components/SecondaryHeading.module.scss';

type Props = { 
  text: string
  cssClasses?: string 
};

function SecondaryHeading({ text, cssClasses = "" }: Props) {
  return (
    <div className={cssClasses}>
      <h2 className={style.headingSecondary}>{text}</h2>
    </div>
  );
}

export default SecondaryHeading;
