import classNames from 'classnames';
import React from 'react';
import style from '../../style/section/Booking.module.scss';
import { Color } from '../../types/ColorSchema';
import PriceCard from '../UI/PriceCard';
import PrimaryButton, { ButtonColor } from '../UI/PrimaryButton';
import SecondaryHeading from '../UI/SecondaryHeading';
import { Container, Row, Col } from 'react-bootstrap';
var cx = classNames.bind(style);

type Props = {};

const BookingSection = (props: Props) => {
  return (
    <section className={cx(style.sectionBooking, 'grid-container')}>
      <SecondaryHeading text='Most popular lessons' />
      <Container>
      <Row>
        <Col>
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
        </Col>
        <Col>
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
        </Col>
        <Col>
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
        </Col>
      </Row>
      </Container>
      <PrimaryButton title={'Discover all my lessons'} onClick={()=>{}} buttonColor={ButtonColor.ORANGE}/>
  
    </section>
  );
};

export default BookingSection;
