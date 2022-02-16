import React from 'react';
import nat1 from '../assets/natours/nat-1-large.jpg';
import nat2 from '../assets/natours/nat-2-large.jpg';
import nat3 from '../assets/natours/nat-3-large.jpg';
import style from '../style/ui-components/ImageComposition.module.scss';

type Props = {};

const ImageComposition = (props: Props) => {
  return (
    <div className={style.composition}>
      <img src={nat1} alt='' className={style.photo} />
      <img src={nat2} alt='' className={style.photo} />
      <img src={nat3} alt='' className={style.photo} />
    </div>
  );
};

export default ImageComposition;
