import React from 'react';
import classNames from 'classnames';
import style from '../../style/ui-components/PriceCard.module.scss';
import TertiaryHeading from './TertiaryHeading';
import { Color } from '../../types/ColorSchema';
var cx = classNames.bind(style);

type Props = {
  colorFront: Color;
  colorBack: Color;
};

const PriceCard = ({ colorFront, colorBack }: Props) => {


  return (
    <div className={style.priceCard}>
      <div className={cx(style.side, style.front)}>
        <div className={cx(style.picture, style.pic1)}>
          &nbsp;
          </div>
        <TertiaryHeading text='The Sea Explorer' color={colorFront} />
        <div className={style.details}>
          <ul>
            <li>3 day tours</li>
            <li>Up to 30 people</li>
            <li>2 tour guides</li>
            <li>Sleep in cozy hotels</li>
            <li>Difficulty: Easy</li>
          </ul>
        </div>
        </div>
      <div className={cx(style.side, style.back, style[colorBack])}>
        Back
        </div>
    </div>
  );
};

export default PriceCard;
