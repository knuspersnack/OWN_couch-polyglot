import React, { MouseEventHandler } from 'react';
import style from '../../style/section/Intro.module.scss';
import PrimaryButton from '../UI/PrimaryButton';
import logo from '../../assets/natours/logo-white.png';

type Props = {
  onClick: MouseEventHandler;
};

const IntroSection = (props: Props) => {
  return (
    <section className={style.sectionIntro}>
      <div className={style.logoBox}>
        <img src={logo} alt='Logo' className={style.logo} />
      </div>

      <div className={style.textBox}>
        <h1 className={style.headingPrimary}>
          <span className={style.headingPrimaryMain}>COUCH POLYGLOT</span>
          <span className={style.headingPrimarySub}>is where life happens</span>
        </h1>
        <PrimaryButton label={'Discover my content'} onClick={props.onClick} />
      </div>
    </section>
  );
};

export default IntroSection;
