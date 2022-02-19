import React from 'react';
import logo from '../assets/natours/logo-white.png';
import style from '../style/pages/Home.module.scss';
import ImageComposition from './ImageComposition';
import FeatureBox from './UI/FeatureBox';
import PrimaryButton from './UI/PrimaryButton';
import SecondaryButton from './UI/SecondaryButton';
import SecondaryHeading from './UI/SecondaryHeading';

const Home = () => {
  function openInNewTab(event: any) {
    event.preventDefault();
    window.open(
      'https://www.youtube.com/channel/UCHowOK8RrPns_-m1LPfoqEw',
      '_blank'
    );
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
        <section className={style.sectionIntro}>
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
            <PrimaryButton
              label={'Discover my content'}
              onClick={openInNewTab}
            />
          </div>
        </section>

        <section className={style.sectionAbout}>
          <SecondaryHeading
            text='Exciting courses for adventurous people'
            cssClasses={'u-center-text u-margin-bottom-large'}
          />
          <div className='grid-container'>
            <div className={'row'}>
              <div className={'col50'}>
                <h3 className='heading-tertiary u-margin-bottom-small'>
                  You're going to fall in love with languages
                </h3>
                <p className='paragraph'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
                  reprehenderit obcaecati repellendus quo quas excepturi hic
                  facere praesentium asperiores exercitationem debitis totam,
                  provident vitae nihil necessitatibus quis nostrum temporibus?
                  Aspernatur.
                </p>
                <h3 className='heading-tertiary u-margin-bottom-small'>
                  Live adventures like you never habe before
                </h3>
                <p className='paragraph'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Officiis praesentium labore ipsam atque vero.
                </p>
                <SecondaryButton label={'Learn more >>'} onClick={() => {}} />
              </div>
              <div className={'col50'}>
                <ImageComposition />
              </div>
            </div>
          </div>
        </section>

        <section className={style.sectionFeatures}>
          <div className={'grid-container'}>
            <div className={'row'}>
              <div className={'col25'}>
                <FeatureBox
                  heading={'Explore the world'}
                  text={
                    'Cillum amet incididunt ut magna nostrud occaecat cillum.'
                  }
                  iconClass={'icon-basic-world'}
                />
              </div>
              <div className={'col25'}>
              <FeatureBox
                  heading={'Meet nature'}
                  text={
                    'Minim proident esse laboris ea aute nulla reprehenderit anim minim eiusmod reprehenderit laborum in amet.'
                  }
                  iconClass={'icon-basic-compass'}
                />
              </div>
              <div className={'col25'}>
              <FeatureBox
                  heading={'Find your way'}
                  text={
                    "Magna commodo dolore cupidatat culpa aliquip veniam incididunt enim voluptate."
                  }
                  iconClass={'icon-basic-map'}
                />
              </div>
              <div className={'col25'}>
              <FeatureBox
                  heading={'Live a healthier life'}
                  text={
                    'Sit amet quis non quis sint non pariatur voluptate laborum nisi consequat nostrud id.'
                  }
                  iconClass={'icon-basic-heart'}
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
