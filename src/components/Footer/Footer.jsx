import React from 'react';

import './Footer.scss';

import telegram from '../../assets/images/icon-telegram.png';
import whatsapp from '../../assets/images/icon-whatsapp.png';

import { contactInfo } from '../../utils/constants';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__logo-wrap">
          <div className="footer__logo" />
          <h2 className="footer__name">Beton-W</h2>
        </div>
        <div className="footer__address">
          <p>{contactInfo.ie}</p>
          <p>{contactInfo.address}</p>
        </div>
        <div className="footer__contacts">
          <div className="footer__tel">
            <a href={contactInfo.telLink}>
              {contactInfo.tel}
            </a>
          </div>
          <div className="footer__mail">
            <a href={contactInfo.mailLink}>
              {contactInfo.mail}
            </a>
          </div>
        </div>
        <div className="footer__messengers">
          <a href={contactInfo.telegram}>
            <img
              src={telegram}
              alt="telegram"
              className="container-contacts__subtitle-telegram"
            />
          </a>
          <a href={contactInfo.whatsapp}>
            <img
              src={whatsapp}
              alt="whatsapp"
              className="container-contacts__subtitle-whatsapp"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
