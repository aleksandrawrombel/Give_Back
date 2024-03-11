import React from 'react';

import decoration from '../assets/heroDecoration.svg';

import HomeFundations from './HomeFundations';

const HomeWhoWeHelp = () => {
  return (
    <section className="who_we_help">
      <div className="who_we_help_text">
        <h4>Komu pomagamy?</h4>
        <img src={decoration} alt="text decoration" />
      </div>
      <HomeFundations />
    </section>
  );
};

export default HomeWhoWeHelp;
