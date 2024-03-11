import React from 'react';
import { Link } from 'react-router-dom';

import decoration from '../assets/heroDecoration.svg';
import tshirtIcon from '../assets/tshirtIcon.png';
import bagIcon from '../assets/bagIcon.png';
import searchIcon from '../assets/searchIcon.png';
import recycleIcon from '../assets/recycleIcon.png';

const HomeSimpleSteps = () => {
  return (
    <section className="home_simple_steps">
      <h2 className="home_simple_steps_text">Wystarczą 4 proste kroki</h2>
      <img src={decoration} alt="text decorartion" className="simple_steps_decoration" />
      <ul className="simple_steps_menu">
        <li>
          <img src={tshirtIcon} alt="t-shirt icon" className="simple_steps_icon" />
          <span className="simple_steps_name">Wybierz rzeczy</span>
          <span className="simple_steps_text">ubrania, zabawki, sprzęt i inne</span>
        </li>
        <li>
          <img src={bagIcon} alt="shopping bag icon" className="simple_steps_icon" />
          <span className="simple_steps_name bag_name">Spakuj je</span>
          <span className="simple_steps_text">skorzystaj z worków na śmieci</span>
        </li>
        <li>
          <img src={searchIcon} alt="search icon" className="simple_steps_icon" />
          <span className="simple_steps_name">Zdecyduj komu chcesz pomóc</span>
          <span className="simple_steps_text">wybierz zaufane miejsce</span>
        </li>
        <li>
          <img src={recycleIcon} alt="reuse recycle icon" className="simple_steps_icon" />
          <span className="simple_steps_name">Zamów kuriera</span>
          <span className="simple_steps_text">kurier przyjedzie w dogodnym terminie</span>
        </li>
      </ul>
      <Link to="/logowanie" className="simple_steps_button">oddaj <span>rzeczy</span></Link>
    </section>
  );
};

export default HomeSimpleSteps;
