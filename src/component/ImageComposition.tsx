import React from 'react';
import classNames from 'classnames';
import nat1 from '../assets/natours/nat-1-large.jpg';
import nat2 from '../assets/natours/nat-2-large.jpg';
import nat3 from '../assets/natours/nat-3-large.jpg';
import style from '../style/ui-components/ImageComposition.module.scss';
var cx = classNames.bind(style);

type Props = {};

const ImageComposition = (props: Props) => {
  return (
    <div className={style.composition}>
      <img src={nat1} alt='' className={cx(style.photo, style.pos1)} />
      <img src={nat2} alt='' className={cx(style.photo, style.pos2)} />
      <img src={nat3} alt='' className={cx(style.photo, style.pos3)} />
    </div>
  );
};

export default ImageComposition;
