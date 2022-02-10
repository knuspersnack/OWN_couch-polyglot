import React from 'react';
import logo from '../assets/natours/logo-white.png';
import style from '../style/components/Home.module.scss';
import AnimatedButton from './UI/AnimatedButton';

const Home = () => {

  
function openInNewTab(event:any){
  event.preventDefault();
  window.open('https://www.youtube.com/channel/UCHowOK8RrPns_-m1LPfoqEw', '_blank');
}

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
            <AnimatedButton label={'Discover my content'} 
            onClick={openInNewTab}/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
