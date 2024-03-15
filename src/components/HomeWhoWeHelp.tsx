import React, { useState } from 'react';

import decoration from '../assets/heroDecoration.svg';

import HomeFundations from './HomeFundations';
import HomeOrganizations from './HomeOrganizations';
import HomeLocals from './HomeLocals';

const HomeWhoWeHelp = () => {
  const [clickedComponent, setClickedComponent] = useState<string>('fundation');

  const handleClick = (clicked: string) => {
    setClickedComponent(clicked);
  };

  return (
    <section className="who_we_help" id="who_we_help">
      <div className="who_we_help_text">
        <h4>Komu pomagamy?</h4>
        <img src={decoration} alt="text decoration" />
      </div>
      <section className="who_we_help_buttons">
        <button
          className={
            'fundation_button' && clickedComponent === 'fundation'
              ? 'who_we_help_button fundation_button'
              : 'who_we_help_button'
          }
          onClick={() => handleClick('fundation')}
        >
          Fundacjom
        </button>
        <button
          className={clickedComponent === 'organization' ? 'who_we_help_button clicked_button' : 'who_we_help_button'}
          onClick={() => handleClick('organization')}
        >
          Organizacjom pozarządowym
        </button>
        <button
          className={clickedComponent === 'locals' ? 'who_we_help_button clicked_button' : 'who_we_help_button'}
          onClick={() => handleClick('locals')}
        >
          Lokalnym zbiórkom
        </button>
      </section>
      {clickedComponent === 'fundation' && <HomeFundations />}
      {clickedComponent === 'organization' && <HomeOrganizations />}
      {clickedComponent === 'locals' && <HomeLocals />}
    </section>
  );
};

export default HomeWhoWeHelp;
