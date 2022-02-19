import React from 'react';
import classNames from 'classnames';
import style from '../../style/ui-components/PriceCard.module.scss';
var cx = classNames.bind(style);

type Props = {};

const PriceCard = (props: Props) => {
  return (
    <div className={style.priceCard}>
      <div className={cx(style.side, style.front)}>Front</div>
      <div className={cx(style.side, style.back)}>Back</div>
    </div>
  );
};

export default PriceCard;
