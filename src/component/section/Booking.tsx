import React from 'react'
import classNames from 'classnames';
import SecondaryHeading from '../UI/SecondaryHeading'
import style from '../../style/section/Booking.module.scss';
import PriceCard from '../UI/PriceCard';
var cx = classNames.bind(style);

type Props = {}

const BookingSection = (props: Props) => {
  return (
    <section className={cx(style.sectionBooking, 'grid-container')}>
          <SecondaryHeading text="Most popular lessons"/>
          <div className={'row'}>
            <div className={'col33'}>
                <PriceCard color='blue'/>
                </div>
            <div className={'col33'}>Col 1 of 3</div>
            <div className={'col33'}>Col 1 of 3</div>
          </div>
        </section>
  )
}

export default BookingSection