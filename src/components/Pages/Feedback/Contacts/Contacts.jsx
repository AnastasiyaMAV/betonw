import React from 'react';

import './Contacts.scss';

import LittleBtn from '../../../../ui/buttons/LittleBtn/LittleBtn';

import telegram from '../../../../assets/images/icon-telegram.png';
import whatsapp from '../../../../assets/images/icon-whatsapp.png';

import { contactInfo } from '../../../../utils/constants';

function Contacts() {
  return (
    <section className="container-contacts">
      <article>
        <h1>{contactInfo.title}</h1>
        <div className="container-contacts__subtitle">
          <p>{contactInfo.nameFirm}</p>
          <p>{contactInfo.ie}</p>
          <p>{contactInfo.address}</p>
          <div className="container-contacts__subtitle-telAndEmail">
            <p>{contactInfo.mail}</p>
            <LittleBtn
              text="Написать"
              href={contactInfo.mailLink}
              mainColor="#101725"
              bgcColor="#e7ead6"
              addColor="#dfba30"
            />
          </div>
          <div className="container-contacts__subtitle-telAndEmail">
            <p>{contactInfo.tel}</p>
            <LittleBtn
              text="Позвонить"
              href={contactInfo.telLink}
              mainColor="#101725"
              bgcColor="#e7ead6"
              addColor="#dfba30"
            />
          </div>
          <div className="container-contacts__subtitle-messengers">
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
      </article>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2184.418358088471!2d60.60102691594269!3d56.80445208084771!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x43c16eda090e39d9%3A0x908cea482c840d9!2z0YPQuy4g0KbQuNC-0LvQutC-0LLRgdC60L7Qs9C-LCAyOSwg0JXQutCw0YLQtdGA0LjQvdCx0YPRgNCzLCDQodCy0LXRgNC00LvQvtCy0YHQutCw0Y8g0L7QsdC7LiwgNjIwMTMx!5e0!3m2!1sru!2sru!4v1653987372303!5m2!1sru!2sru"
        title="maps"
        width="600"
        height="450"
        style={{ border: '0' }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </section>
  );
}

export default Contacts;
