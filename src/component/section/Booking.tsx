import React from 'react';
import classNames from 'classnames';
import SecondaryHeading from '../UI/SecondaryHeading';
import style from '../../style/section/Booking.module.scss';
import PriceCard from '../UI/PriceCard';
import { Color } from '../../types/ColorSchema';
import TertiaryHeading from '../UI/TertiaryHeading';
import PrimaryButton, { ButtonColor } from '../UI/PrimaryButton';
var cx = classNames.bind(style);

type Props = {};

const BookingSection = (props: Props) => {
  return (
    <section className={cx(style.sectionBooking, 'grid-container')}>
      <SecondaryHeading text='Most popular lessons' />
      <div className={'row'}>
        <div className={'col33'}>
          <PriceCard
            colorFront={Color.ORANGE}
            colorBack={Color.ORANGE}
            title={'Beginner Lesson'}
            picture={'pic1'}
            descriptionBack={'Only'}
            price={'29€'}
          >
            <ul>
              <li>Up to 15 people</li>
              <li>45 min</li>
              <li>Catalan, Spanish</li>
              <li>Just Speaking</li>
              <li>Difficulty: Easy</li>
            </ul>
          </PriceCard>
        </div>
        <div className={'col33'}>
          <PriceCard
            colorFront={Color.GREEN}
            colorBack={Color.GREEN}
            title={'Worldtraveler Lesson'}
            picture={'pic2'}
            descriptionBack={'Only'}
            price={'39€'}
          >
            <ul>
              <li>Up to 10 people</li>
              <li>45 min</li>
              <li>French</li>
              <li>Discussions, Grammar</li>
              <li>Difficulty: Medium</li>
            </ul>
          </PriceCard>
        </div>
        <div className={'col33'}>
        <PriceCard
            colorFront={Color.BLUE}
            colorBack={Color.BLUE}
            title={'Polyglot Lesson'}
            picture={'pic3'}
            descriptionBack={'Only'}
            price={'49€'}
          >
            <ul>
              <li>Up to 5 people</li>
              <li>60 min</li>
              <li>Homework, Discussions, Grammar</li>
              <li>Intensity: Hard</li>
            </ul>
          </PriceCard>
        </div>
      </div>
      <PrimaryButton title={'Discover all my lessons'} onClick={()=>{}} buttonColor={ButtonColor.ORANGE}/>
    </section>
  );
};

export default BookingSection;