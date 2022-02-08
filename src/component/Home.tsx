import React from 'react';
import style from './Home.module.scss';
import logo from '../assets/natours/logo-white.png';
import AnimatedButton from './UI/AnimatedButton';

const Home = () => {
  return (
    <>
      {/* 
      <div className={style.home}>
        <h1>Welcome to Couch Polyglot!</h1>
        <p>The page is not yet ready but checkout my YouTube channel:</p>

        <a href='https://www.youtube.com/channel/UCHowOK8RrPns_-m1LPfoqEw'>
          Couch Polyglot
        </a>
      </div> */}
      <div className={style.natours}>
        <div className={style.header}>
          <div className={style.logoBox}>
            <img src={logo} alt='Logo' className={style.logo} />
          </div>

          <div className={style.textBox}>
            <h1 className={style.headingPrimary}>
              <span className={style.headingPrimaryMain}>COUCH POLYGLOT</span>
              <span className={style.headingPrimarySub}>
                is where life happens
              </span>
            </h1>
            <AnimatedButton label={'Test'} onClick={()=>{console.log("Cklciked")}}/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
