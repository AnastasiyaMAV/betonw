import React from 'react';

import './Intro.scss';

import MainBtn from '../../../../ui/buttons/MainBtn/MainBtn';

import city from '../../../../assets/images/city.png';
import cars from '../../../../assets/images/cars.png';

function Intro() {
  return (
    <section className="intro">
      <h1 className="intro__title">Доставка бетона до строительных площадок</h1>
      <MainBtn
        href="tel:+79533856934"
        text="Сделать заказ"
        mainColor="#101725"
        bgcColor="transparent"
        addColor="#dfba30"
      />
      <img src={city} alt="Город" className="intro__image intro__image_city" />
      <img src={cars} alt="Машины" className="intro__image intro__image_cars" />
    </section>
  );
}

export default Intro;
