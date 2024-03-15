import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
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
            <ul className="nav_registration" id="nav_registration">
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
              <a className="nav_link" href="#nav_registration">
                Start
              </a>
            </li>
            <li>
              <a className="nav_link" href="#home_simple_steps">
                O co chodzi?
              </a>
            </li>
            <li>
              <a className="nav_link" href="#about_us">
                O nas
              </a>
            </li>
            <li>
              <a className="nav_link" href="#who_we_help">
                Fundacja i organizacje
              </a>
            </li>
            <li>
              <a className="nav_link" href="#home_contact">
                Kontakt
              </a>
            </li>
          </ul>
        </nav>
        <section className="hero_text">
          <h1>
            Zacznij pomagać! <span>Oddaj niechciane rzeczy w zaufane ręce</span>
          </h1>
          <img src={heroDecoration} alt="text decoration" className="hero_decoration" />
        </section>
        {loggedIn === false && (
          <section className="hero_buttons">
            <Link to="/logowanie" className="hero_button">
              Oddaj <span>rzeczy</span>
            </Link>
            <Link to="/logowanie" className="hero_button">
              Zorganizuj <span>zbiórkę</span>
            </Link>
          </section>
        )}
        {loggedIn === true && (
          <section className="hero_buttons">
            <Link to="/oddaj-rzeczy" className="hero_button">
              Oddaj <span>rzeczy</span>
            </Link>
            <Link to="/oddaj-rzeczy" className="hero_button">
              Zorganizuj <span>zbiórkę</span>
            </Link>
          </section>
        )}
      </div>
    </header>
  );
};

export default HomeHeader;
