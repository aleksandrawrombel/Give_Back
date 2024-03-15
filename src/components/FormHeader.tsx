import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import supabase from './supabase';

import heroDecoration from '../assets/heroDecoration.svg';
import formHeroImage from '../assets/FormHeroImage.png';

const FormHeader = () => {
  //check logged in user

  const [loggedIn, setloggedIn] = useState(false);
  const [loggedInUserEmail, setLoggedInUserEmail] = useState('');

  const getUser = async () => {
    try {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (user) {
        setloggedIn(true);
        setLoggedInUserEmail(user.email as string);
      } else {
        setloggedIn(false);
        setLoggedInUserEmail('');
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  //logout user

  const handleLogOutUser = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      setloggedIn(false);
      setLoggedInUserEmail('');
      if (error) {
        throw error;
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <header className="landing_page_container form_header">
      <div className="form_hero_image">
        <img src={formHeroImage} alt="green jumper" />
      </div>
      <div className="form_header_nav">
        <nav>
          {loggedIn === false && (
            <ul className="form_nav_registration">
              <li>
                <Link to="/logowanie">Zaloguj</Link>
              </li>
              <li>
                <Link to="/rejestracja">Załóż konto</Link>
              </li>
            </ul>
          )}
          {loggedIn === true && (
            <ul className="form_nav_registration">
              <li>
                <p className="logged_in_user_email">{`Cześć, ${loggedInUserEmail}!`}</p>
              </li>
              <li>
                <Link to="/oddaj-rzeczy">Oddaj rzeczy</Link>
              </li>
              <li>
                <Link to="/wylogowano" onClick={handleLogOutUser}>
                  Wyloguj
                </Link>
              </li>
            </ul>
          )}
          <ul className="form_nav_menu">
            <li>
              <ScrollLink
                className="form_nav_link"
                to="nav_registration"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-70}
              >
                <Link to="/" className="form_link">
                  Start
                </Link>
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                className="form_nav_link"
                to="home_simple_steps"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-70}
              >
                <Link to="/" className="form_link">
                  O co chodzi?
                </Link>
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                className="form_nav_link"
                to="about_us"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-70}
              >
                <Link to="/" className="form_link">
                  O nas{' '}
                </Link>
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                className="form_nav_link"
                to="who_we_help"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-70}
              >
                <Link to="/" className="form_link">
                  Fundacja i organizacje
                </Link>
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                className="form_nav_link"
                to="home_contact"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-70}
              >
                <Link to="/" className="form_link">
                  Kontakt
                </Link>
              </ScrollLink>
            </li>
          </ul>
        </nav>
        <section className="form_header_hero_text">
          <h1>
            Oddaj rzeczy, których już nie chcesz <span>POTRZEBUJĄCYM</span>
          </h1>
          <img src={heroDecoration} alt="text decoration" className="form_header_hero_decoration" />
          <h2>Wystarczą 4 proste kroki:</h2>
          <div className="form_steps">
            <div className="step_square">
              <span>1</span>
              <p>Wybierz rzeczy</p>
            </div>
            <div className="step_square">
              <span>2</span>
              <p>Spakuj je w worki</p>
            </div>
            <div className="step_square">
              <span>3</span>
              <p>Wybierz fundację</p>
            </div>
            <div className="step_square">
              <span>4</span>
              <p>Zamów kuriera</p>
            </div>
          </div>
        </section>
      </div>
    </header>
  );
};

export default FormHeader;
