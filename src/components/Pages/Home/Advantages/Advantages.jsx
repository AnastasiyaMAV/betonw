import React from 'react';

import './Advantages.scss';

import { advantages } from '../../../../utils/constants';

function Advantages() {
  return (
    <section className="advantages">
      <h2 className="advantages__title">Наши преимущества</h2>
      <ul className="advantages__list">
        {advantages.map((advant) => (
          <ol
            key={advant.id}
            className="advantages__item"
          >
            <span className="advantages__item-num">
              {advant.id}
            </span>
            <p className="advantages__item-text">
              {advant.text}
            </p>
          </ol>
        ))}
      </ul>
    </section>
  );
}

export default Advantages;