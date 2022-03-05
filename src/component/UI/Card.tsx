import classNames from 'classnames';
import React, { FC } from 'react';
import style from '../../style/ui-components/Card.module.scss';
var cx = classNames.bind(style);

type Props = {
  opac?: boolean;
};

const Card:FC<Props> = ({opac, children}) => {

  const cardCssClass = opac ? cx(style.card, style.opac) : style.card;

  return (
    <div className={cardCssClass} >
      {children}
    </div>
  );
};

export default Card;
