import React from 'react';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';

import decoration from '../assets/heroDecoration.svg';

const Register = () => {
    return (
        <>
        <header className="landing_page_container register_header">
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
                  <Link to="/" className="register_link">
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
                  <Link to="/" className="register_link">
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
                  <Link to="/" className="register_link">
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
                  <Link to="/" className="register_link">
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
                  <Link to="/" className="register_link">
                    Kontakt
                  </Link>
                </ScrollLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <section className="register">
      <h1>Załóż konto</h1>
      <img src={decoration} alt="text decoration" className="register_decoration" />
      <form className="register_form" noValidate>
        <div className="register_form_inputs">
          <label className="register_email_label">Email</label>
          <input
            className="register_email"
            type="text"
            name="email"
            // value={logInData.email}
            required
            // onChange={handleInputChange}
            // style={{ borderColor: emailError ? 'tomato' : 'black' }}
          ></input>
          {/* {emailError && <span className="validation_error log_in_error">{emailError}</span>} */}
          <label className="register_password_label">Hasło</label>
          <input
            className="register_password"
            type="password"
            name="password"
            // value={logInData.password}
            required
            // onChange={handleInputChange}
            // style={{ borderColor: passwordError ? 'tomato' : 'black' }}
          ></input>
          {/* {passwordError && <span className="validation_error log_in_error">{passwordError}</span>} */}
          <label className="register_password_label">Powtórz hasło</label>
          <input
            className="register_password"
            type="password"
            name="password"
            // value={logInData.password}
            required
            // onChange={handleInputChange}
            // style={{ borderColor: passwordError ? 'tomato' : 'black' }}
          ></input>
          {/* {passwordError && <span className="validation_error log_in_error">{passwordError}</span>} */}
        </div>
        <div className="register_buttons">
        <button>Zaloguj się</button>
          <button>
            <Link to="/rejestracja" className="register_link">
              Załóż konto
            </Link>
          </button>
        </div>
      </form>
    </section>
  </>
    )
}

export default Register;