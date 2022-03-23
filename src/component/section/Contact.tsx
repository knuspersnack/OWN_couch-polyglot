import React from 'react';
import style from '../../style/section/Contact.module.scss';
import { Size } from '../../types/Size';
import SecondaryHeading from '../UI/SecondaryHeading';
import TextInput from '../UI/TextInput';

type Props = {};

const ContactSection = (props: Props) => {
  return (
    <section className={style.sectionContact}>
      <div className='grid-container'>
        <div className={'row'}>
          <div className={'col'}>
            <div className={style.contactContainer}>
              <form action='#' className={style.form}>
                <SecondaryHeading
                  text='Subscribe for weekly news'
                  cssClasses={'u-margin-bottom-small'}
                  size={Size.M}
                />
                <div className={style.inputGroup}>
                  <TextInput
                    placeholder='Full Name'
                    id='name'
                    label='Full Name'
                    type='text'
                  />
                  <TextInput
                    placeholder='Email'
                    id='email'
                    label='Email adress'
                    type='email'
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
