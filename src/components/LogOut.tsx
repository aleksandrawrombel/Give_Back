import React from 'react';

import { Link } from 'react-router-dom';

import decoration from '../assets/heroDecoration.svg';

const LogOut = () => {
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
              <a className="nav_link" href="/#nav_registration">
                Start
              </a>
            </li>
            <li>
              <a className="nav_link" href="/#home_simple_steps">
                O co chodzi?
              </a>
            </li>
            <li>
              <a className="nav_link" href="/#about_us">
                O nas
              </a>
            </li>
            <li>
              <a className="nav_link" href="/#who_we_help">
                Fundacja i organizacje
              </a>
            </li>
            <li>
              <a className="nav_link" href="/#home_contact">
                Kontakt
              </a>
            </li>
          </ul>
          </nav>
        </div>
      </header>
      <section className="log_out">
        <h1>Wylogowanie nastąpiło pomyślnie!</h1>
        <img src={decoration} alt="text decoration" className="log_out_decoration"/>
        <button>
              <Link to="/" className="home_link">
                Strona główna
              </Link>
            </button>
      </section>
      </>
    )
}

export default LogOut;