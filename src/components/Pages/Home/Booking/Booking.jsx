import React from 'react';

import './Booking.scss';

import MainBtn from '../../../../ui/buttons/MainBtn/MainBtn';

function Booking() {
  return (
    <section className="booking">
      <MainBtn
        href="tel:+79533856934"
        text="Сделать заказ"
        mainColor="#101725"
        bgcColor="transparent"
        addColor="#dfba30"
      />
    </section>
  );
}

export default Booking;
