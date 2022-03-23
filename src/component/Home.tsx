import React from 'react';
import style from '../style/pages/Home.module.scss';
import AboutSection from './section/About';
import BookingSection from './section/Booking';
import ContactSection from './section/Contact';
import FeatureSection from './section/Feature';
import IntroSection from './section/Intro';
import Stories from './section/Stories';


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
      <div className={style.natours}>
        
        <IntroSection onClick={openInNewTab}/>

        <AboutSection />
        
        <FeatureSection />

        <BookingSection />

        <Stories />

        <ContactSection />
        
      </div>
    </>
  );
};

export default Home;
