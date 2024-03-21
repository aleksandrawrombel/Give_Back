import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
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
              <Link className="form_nav_link" to="/#nav_registration">
                Start
              </Link>
            </li>
            <li>
              <Link className="form_nav_link" to="/#home_simple_steps">
                O co chodzi?
              </Link>
            </li>
            <li>
              <Link className="form_nav_link" to="/#about_us">
                O nas
              </Link>
            </li>
            <li>
              <Link className="form_nav_link" to="/#who_we_help">
                Fundacja i organizacje
              </Link>
            </li>
            <li>
              <Link className="form_nav_link" to="/#home_contact">
                Kontakt
              </Link>
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
