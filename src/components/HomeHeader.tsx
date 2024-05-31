import { useEffect, useState, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
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

  //scroll to section

  function ScrollToSection() {
    const location = useLocation();
    const lastHash = useRef('');

    useEffect(() => {
      if (location.hash) {
        lastHash.current = location.hash.slice(1);
      }

      if (lastHash.current && document.getElementById(lastHash.current)) {
        setTimeout(() => {
          document.getElementById(lastHash.current)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
          lastHash.current = '';
        }, 100);
      }
    }, [location]);

    return null;
  }

  ScrollToSection();

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
                <Link to="/logowanie" data-cy="nav_login">Zaloguj</Link>
              </li>
              <li>
                <Link to="/rejestracja" data-cy="nav_register">Załóż konto</Link>
              </li>
            </ul>
          )}
          {loggedIn === true && (
            <ul className="nav_registration" id="nav_registration">
              <li>
                <p className="logged_in_user_email" data-cy="logged_in_user_email">{`Cześć, ${loggedInUserEmail}!`}</p>
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
              <Link className="nav_link" to="#nav_registration" data-cy="nav_start">
                Start
              </Link>
            </li>
            <li>
              <Link className="nav_link" to="#home_simple_steps" data-cy="nav_home_simple_steps">
                O co chodzi?
              </Link>
            </li>
            <li>
              <Link className="nav_link" to="#about_us" data-cy="nav_about_us">
                O nas
              </Link>
            </li>
            <li>
              <Link className="nav_link" to="#who_we_help" data-cy="nav_who_we_help">
                Fundacja i organizacje
              </Link>
            </li>
            <li>
              <Link className="nav_link" to="#home_contact" data-cy="nav_home_contact">
                Kontakt
              </Link>
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
            <Link to="/oddaj-rzeczy" className="hero_button" data-cy="hero_button_give_away">
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
