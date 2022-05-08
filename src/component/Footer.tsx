import React from 'react';
import style from '../style/layout/Footer.module.scss';
import fullLogo from '../assets/natours/logo-green-2x.png';
import TertiaryButton from './UI/TertiaryButton';
import classNames from 'classnames';
var cx = classNames.bind(style);

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className={cx(style.footerContainer)}>
      <div className={cx(style.logoContainer, "grid justify-items-center")}>
        <img src={fullLogo} alt='Person on a tour' className={style.logo} />
      </div>
      <section className={'grid-container'}>
        <div className={'row'}>
          <div className={'col50'}>
            <div className={style.navigation}>
              <ul className={style.list}>
                <li className={style.item}>
                  <TertiaryButton label='Impressum' onClick={() => {}} />
                </li>
                <li className={style.item}>
                  <TertiaryButton label='Contact me' onClick={() => {}} />
                </li>
                <li className={style.item}>
                  <TertiaryButton label='Privacy policy' onClick={() => {}} />
                </li>
                <li className={style.item}>
                  <TertiaryButton label='Terms' onClick={() => {}} />
                </li>
              </ul>
            </div>
          </div>
          <div className={'col50'}>
            <p className={style.copyRight}>
              Built by <TertiaryButton label='GD' onClick={() => {}} /> for
              Couch Polyglot. Copyright by &copy; GD.
            </p>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
