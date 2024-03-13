import React from 'react';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';

import decoration from '../assets/heroDecoration.svg';

const LogIn = () => {
  return (
    <>
      <header className="landing_page_container log_in_header">
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
                  to="nav_registration"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-70}
                >
                  <Link to="/" className="log_in_link">
                    Start
                  </Link>
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
                  <Link to="/" className="log_in_link">
                    {' '}
                    O co chodzi?{' '}
                  </Link>
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
                  <Link to="/" className="log_in_link">
                    O nas
                  </Link>
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
                  <Link to="/" className="log_in_link">
                    Fundacja i organizacje
                  </Link>
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
                  <Link to="/" className="log_in_link">
                    Kontakt
                  </Link>
                </ScrollLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <section className="log_in">
        <h1>Zaloguj się</h1>
        <img src={decoration} alt="text decoration" className="log_in_decoration" />
        <form className="log_in_form">
          <div className="log_in_form_inputs">
            <label>Email</label>
            <input></input>
            <label>Hasło</label>
            <input></input>
          </div>
          <div className="log_in_buttons">
            <button><Link to="/rejestracja" className="register_link">Załóż konto</Link></button>
            <button>Zaloguj się</button>
          </div>
        </form>
      </section>
    </>
  );
};

export default LogIn;
