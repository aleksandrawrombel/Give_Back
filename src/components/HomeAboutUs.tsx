import React from 'react';

import decoration from '../assets/heroDecoration.svg';
import peopleAboutUs from '../assets/peopleAboutUs.png';
import signatureAboutUs from '../assets/signatureAboutUs.png';

const HomeAboutUs = () => {
  return (
    <section className="about_us">
      <div className="about_us_text">
        <h3>O nas</h3>
        <img src={decoration} alt="text decoration" className="about_us_decoration" />
        <p>
          Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery. Bunya nuts black-eyed pea
          prairie turnip leek lentil turnip greens parsnip.
        </p>
        <img src={signatureAboutUs} alt="signature" className="about_us_signature" />
      </div>
      <div className="about_us_people" >
      <img src={peopleAboutUs} alt="a team of people"/>
      </div>
    </section>
  );
};

export default HomeAboutUs;
