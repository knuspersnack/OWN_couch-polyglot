import React, { FC } from 'react';
import classNames from 'classnames';
import style from '../../style/ui-components/PriceCard.module.scss';
import TertiaryHeading from './TertiaryHeading';
import { Color } from '../../types/ColorSchema';
import PrimaryButton from './PrimaryButton';
var cx = classNames.bind(style);

type Props = {
  colorFront: Color;
  colorBack: Color;
  title: string;
  picture: string;
  descriptionBack: string;
  price: string;
};

const PriceCard: FC<Props> = ({ colorFront, colorBack, picture, title, descriptionBack, price, children }) => {
  return (
    <div className={style.priceCard}>
      <div className={cx(style.side, style.front)}>
        <div className={cx(style.picture, style[picture])}>&nbsp;</div>
        <TertiaryHeading text={title} color={colorFront} />
        <div className={style.details}>{children}</div>
      </div>
      <div className={cx(style.side, style.back, style[colorBack])}>
        <div className={style.pricebox}>
          <p className={style.description}>{descriptionBack}</p>
          <p className={style.value}>{price}</p>
          <PrimaryButton title={'Book now'} onClick={() => {}}></PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default PriceCard;
