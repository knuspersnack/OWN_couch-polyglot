import React from 'react';
import classNames from 'classnames';
import style from '../../style/ui-components/PriceCard.module.scss';
var cx = classNames.bind(style);

type Props = {
  color: string
};

const PriceCard = (props: Props) => {

  let colorClassFront = '';
  let colorClassBack = style.back1;;
  if(props.color === 'blue') {
    colorClassFront = style.front1;
  } else if (props.color === 'orange') {
    
  }

  return (
    <div className={style.priceCard}>
      <div className={cx(style.side,  style.front, colorClassFront)}>Front</div>
      <div className={cx(style.side, style.back)}>Back</div>
    </div>
  );
};

export default PriceCard;
