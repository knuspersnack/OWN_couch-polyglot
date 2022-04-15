import React from 'react';
import style from '../../style/section/Contact.module.scss';
import { Size } from '../../types/Size';
import Form from '../UI/Form';
import PrimaryButton, { ButtonColor } from '../UI/PrimaryButton';
import RadioButton from '../UI/RadioButton';
import RadioButtonGroup from '../UI/RadioButtonGroup';
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
              <Form>
                <form action='#'>
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
                  <RadioButtonGroup groupName='testGroup'>
                    <RadioButton id='reminder' label='Reminder' />
                    <RadioButton id='news' label='Newsletter' />
                  </RadioButtonGroup>
                  <div className={style.subscribe}>
                    <PrimaryButton
                      title={'Subscribe'}
                      onClick={() => {}}
                      buttonColor={ButtonColor.ORANGE}
                    />
                  </div>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
