import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import supabase from './supabase';

import heroImage from '../assets/heroImage.png';
import heroDecoration from '../assets/heroDecoration.svg';

const HomeHeader = () => {
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
        console.log('zalogowano', user.email);
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
    <header className="landing_page_container">
      <div className="hero_image">
        <img src={heroImage} alt="box with overflowing items" />
      </div>
      <div className="header_nav">
        <nav>
          {loggedIn === false && (
            <ul className="nav_registration">
              <li>
                <Link to="/logowanie">Zaloguj</Link>
              </li>
              <li>
                <Link to="/rejestracja">Załóż konto</Link>
              </li>
            </ul>
          )}
          {loggedIn === true && (
            <ul className="nav_registration">
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
          <ul className="nav_menu">
            <li>
              <ScrollLink
                className="nav_link"
                to="nav_registration"
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
                to="home_simple_steps"
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
                to="about_us"
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
                to="who_we_help"
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
                to="home_contact"
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
          <Link to="/oddaj-rzeczy" className="hero_button">
            Oddaj <span>rzeczy</span>
          </Link>
          <Link to="/oddaj-rzeczy" className="hero_button">
            Zorganizuj <span>zbiórkę</span>
          </Link>
        </section>
      </div>
    </header>
  );
};

export default HomeHeader;
