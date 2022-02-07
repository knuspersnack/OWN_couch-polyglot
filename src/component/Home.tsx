import React from 'react';
import style from './Home.module.scss';

const Home = () => {
  return (
    <>
      <div className={style.home}>
        <h1>Welcome to Couch Polyglot!</h1>
        <p>The page is not yet ready but checkout my YouTube channel:</p>

        <a href='https://www.youtube.com/channel/UCHowOK8RrPns_-m1LPfoqEw'>
          Couch Polyglot
        </a>
      </div>
      <div className={style.natours}>
        <div className={style.header}>
          Some text
        </div>
      </div>
    </>
  );
};

export default Home;
