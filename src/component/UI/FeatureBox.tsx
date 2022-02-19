import classNames from 'classnames';
import React from 'react';
import style from '../../style/ui-components/FeatureBox.module.scss';
var cx = classNames.bind(style);

type Props = {
  heading: string;
  text: string;
  iconClass: string;
};

const FeatureBox = (props: Props) => {
const {heading, text, iconClass} = props;

  return (
    <div className={style.featureBox}>
      <i className={cx(iconClass, style.icon)}></i>
      <h3 className='heading-tertiary u-margin-bottom-small'>{heading}</h3>
      <p className={style.text}>{text}</p>
    </div>
  );
};

export default FeatureBox;
