import React from 'react';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';

import heroImage from '../assets/heroImage.png';
import heroDecoration from '../assets/heroDecoration.svg';

const HomeHeader = () => {
  return (
    <header className="landing_page_container">
      <div className="hero_image">
        <img src={heroImage} alt="box with overflowing items" />
      </div>
      <div className="header_nav">
        <nav>
          <ul className="nav_registration">
            <li>
              <Link to="/logowanie">Zaloguj</Link>
            </li>
            <li>
              <Link to="/rejestracja">Załóż konto</Link>
            </li>
          </ul>

          <ul className="nav_menu">
            <li>
              <ScrollLink
                className="nav_link"
                to="section1"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-70}
              >
                Start
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                className="nav_link"
                to="section1"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-70}
              >
                O co chodzi?
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                className="nav_link"
                to="section1"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-70}
              >
                O nas
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                className="nav_link"
                to="section1"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-70}
              >
                Fundacja i organizacje
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                className="nav_link"
                to="section1"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-70}
              >
                Kontakt
              </ScrollLink>
            </li>
          </ul>
        </nav>
        <section className="hero_text">
          <h1>
            Zacznij pomagać! <span>Oddaj niechciane rzeczy w zaufane ręce</span>
          </h1>
          <img src={heroDecoration} alt="text decoration" className="hero_decoration" />
        </section>
        <section className="hero_buttons">
        <Link to="/logowanie" className="hero_button">Oddaj <span>rzeczy</span></Link>
        <Link to="/logowanie" className="hero_button">Zorganizuj <span>zbiórkę</span></Link>
        </section>
      </div>
    </header>
  );
};

export default HomeHeader;
