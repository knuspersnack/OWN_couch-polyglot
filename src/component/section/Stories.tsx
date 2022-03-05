import classNames from 'classnames';
import React from 'react';
import style from '../../style/section/Stories.module.scss';
import SecondaryHeading from '../UI/SecondaryHeading';
import Card from '../UI/Card';
import UserImage from '../UI/UserImage';
import user1 from '../../assets/natours/nat-8.jpg';
import user2 from '../../assets/natours/nat-9.jpg';
import video1mp4 from '../../assets/natours/video.mp4';
import video1webm from '../../assets/natours/video.webm';
import SecondaryButton from '../UI/SecondaryButton';
import VideoBackground from '../UI/VideoBackground';
var cx = classNames.bind(style);

type Props = {};

const StoriesSection = (props: Props) => {
  return (
    <section className={cx(style.sectionStories, 'grid-container')}>
      
      <VideoBackground>
        <source src={video1mp4} type='video/mp4' />
        <source src={video1webm} type='video/webm' />
      </VideoBackground>

      <SecondaryHeading text='Communicating makes people happy' />
      <div className={'row'}>
        <Card opac={true}>
          <UserImage imageLabel='Mary Smith'>
            <img src={user1} alt='Person on a tour' />
          </UserImage>
          <h3 className='heading-tertiary u-margin-bottom-small'>
            I had the best experience
          </h3>
          <p className='italic'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
            dolorum in veniam quae reiciendis, dicta, accusantium pariatur
            ratione eaque ab magni tempore numquam quas voluptatibus commodi
            ipsum sequi! Deleniti, odio? ab numquam quas voluptatibus commodi
            ipsum sequi! Deleniti, odio?
          </p>
        </Card>
      </div>
      <div className={'row'}>
        <Card opac={true}>
          <UserImage imageLabel='Jack Wilson'>
            <img src={user2} alt='Person on a tour' />
          </UserImage>
          <h3 className='heading-tertiary u-margin-bottom-small'>
            Wow! My life is completely different now!
          </h3>
          <p className='italic'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
            dolorum in veniam quae reiciendis, dicta, accusantium pariatur
            ratione eaque ab magni tempore numquam quas voluptatibus commodi
            ipsum sequi! Deleniti, odio? ab numquam quas voluptatibus commodi
            ipsum sequi! Deleniti, odio?
          </p>
        </Card>
      </div>

      <SecondaryButton label={'Read all stories >>'} onClick={() => {}} />
    </section>
  );
};

export default StoriesSection;
