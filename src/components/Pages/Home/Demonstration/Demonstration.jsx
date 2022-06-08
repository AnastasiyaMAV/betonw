import React from 'react';

import './Demonstration.scss';

import photo1 from '../../../../assets/images/cars/photo1.jpg';
import photo2 from '../../../../assets/images/cars/photo2.jpg';
import photo3 from '../../../../assets/images/cars/photo3.jpg';
import photo4 from '../../../../assets/images/cars/photo4.jpg';
import photo5 from '../../../../assets/images/cars/photo6.png';

const photos = [
  {
    id: '01',
    alt: 'photo1',
    src: photo1,
  },
  {
    id: '02',
    alt: 'photo1',
    src: photo2,
  },
  {
    id: '03',
    alt: 'photo1',
    src: photo3,
  },
  {
    id: '04',
    alt: 'photo1',
    src: photo4,
  },
  {
    id: '05',
    alt: 'photo1',
    src: photo5,
  },
];

function Demonstration() {
  return (
    <section className="demonstration">
      {photos.map((photo) => (
        <article
          key={photo.id}
          className="demonstration__article"
        >
          <img
            src={photo.src}
            alt={photo.alt}
            className="demonstration__image"
          />
        </article>
      ))}
    </section>
  );
}

export default Demonstration;
