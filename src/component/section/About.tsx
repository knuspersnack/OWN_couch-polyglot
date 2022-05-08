import React from 'react';
import style from '../../style/section/About.module.scss';
import ImageComposition from '../ImageComposition';
import SecondaryButton from '../UI/SecondaryButton';
import SecondaryHeading from '../UI/SecondaryHeading';

type Props = {};

const AboutSection = (props: Props) => {
  return (
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
            <p className=''>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
              reprehenderit obcaecati repellendus quo quas excepturi hic facere
              praesentium asperiores exercitationem debitis totam, provident
              vitae nihil necessitatibus quis nostrum temporibus? Aspernatur.
            </p>
            <h3 className='heading-tertiary u-margin-bottom-small'>
              Live adventures like you never habe before
            </h3>
            <p className='paragraph'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
              praesentium labore ipsam atque vero.
            </p>
            <SecondaryButton label={'Learn more >>'} onClick={() => {}} />
          </div>
          <div className={'col50'}>
            <ImageComposition />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
