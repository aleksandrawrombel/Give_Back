import { ChangeEvent, FormEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import supabase from './supabase';

import decoration from '../assets/heroDecoration.svg';

const Register = () => {
  interface RegisterData {
    email: string;
    password: string;
    password2: string;
  }

  //validate registration form

  const [registerData, setregisterData] = useState<RegisterData>({
    email: '',
    password: '',
    password2: '',
  });

  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [password2Error, setPassword2Error] = useState('');

  const [registrationSuccess, setRegistrationSuccess] = useState(false);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setregisterData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    let isCorrect = true;

    if (registerData.email === '') {
      setEmailError('Podany email jest nieprawidłowy!');
      isCorrect = false;
    } else if (!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,}$/.test(registerData.email)) {
      setEmailError('Podany email jest nieprawidłowy!');
      isCorrect = false;
    } else {
      setEmailError('');
    }

    if (registerData.password === '') {
      setPasswordError('Podane hasło jest za krótkie!');
      isCorrect = false;
    } else if (registerData.password.length < 6) {
      setPasswordError('Podane hasło jest za krótkie!');
      isCorrect = false;
    } else {
      setPasswordError('');
    }

    if (registerData.password !== registerData.password2) {
      setPassword2Error('Podane hasła nie są takie same!');
      isCorrect = false;
    } else {
      setPassword2Error('');
    }

    if (isCorrect) {
      await registerUser(registerData.email, registerData.password);
      setRegistrationSuccess(true);
    }
  };

  //register user using supabase

  const registerUser = async (email: string, password: string) => {
    try {
      const { error } = await supabase.auth.signUp({
        email: email,
        password: password,
      });

      if (error) {
        throw error;
      } else {
        // window.location.href = 'http://localhost:5173/';
        window.location.href = 'https://main--oddaj.netlify.app/';
      }
    } catch (error) {
      console.log(error);
    }
  };

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
              <Link className="nav_link" to="/#nav_registration">
                Start
              </Link>
            </li>
            <li>
              <Link className="nav_link" to="/#home_simple_steps">
                O co chodzi?
              </Link>
            </li>
            <li>
              <Link className="nav_link" to="/#about_us">
                O nas
              </Link>
            </li>
            <li>
              <Link className="nav_link" to="/#who_we_help">
                Fundacja i organizacje
              </Link>
            </li>
            <li>
              <Link className="nav_link" to="/#home_contact">
                Kontakt
              </Link>
            </li>
          </ul>
          </nav>
        </div>
      </header>
      <section className="register">
        <h1>Załóż konto</h1>
        <img src={decoration} alt="text decoration" className="register_decoration" />
        <form className="register_form" noValidate onSubmit={handleSubmit}>
          <div className="register_form_inputs">
            <label className="register_email_label">Email</label>
            <input
              className="register_email"
              type="text"
              name="email"
              value={registerData.email}
              required
              onChange={handleInputChange}
              style={{ borderColor: emailError ? 'tomato' : 'black' }}
              data-cy="register_email_input"
            ></input>
            {emailError && <span className="validation_error register_error" data-cy="register_email_error">{emailError}</span>}
            <label className="register_password_label">Hasło</label>
            <input
              className="register_password"
              type="password"
              name="password"
              value={registerData.password}
              required
              onChange={handleInputChange}
              style={{ borderColor: passwordError ? 'tomato' : 'black' }}
              data-cy="register_password_input"
            ></input>
            {passwordError && <span className="validation_error register_error" data-cy="register_password_error">{passwordError}</span>}
            <label className="register_password_label">Powtórz hasło</label>
            <input
              className="register_password"
              type="password"
              name="password2"
              value={registerData.password2}
              required
              onChange={handleInputChange}
              style={{ borderColor: password2Error ? 'tomato' : 'black' }}
              data-cy="register_password_confirmation_input"
            ></input>
            {password2Error && <span className="validation_error register_error" data-cy="register_password2_error">{password2Error}</span>}
          </div>
          <div className="register_buttons">
            <button>
              <Link to="/logowanie" className="register_link">
                Zaloguj się
              </Link>
            </button>
            <button data-cy="register_submit_button">Załóż konto</button>
          </div>
        </form>
      </section>
      {registrationSuccess && (
      <section className="register_success">
        <h1>Rejestracja nastąpiła pomyślnie!</h1>
        <img src={decoration} alt="text decoration" className="register_success_decoration" />
        <button>
          <Link to="/" className="home_link">
            Strona główna
          </Link>
        </button>
      </section>
      )}
    </>
  );
};

export default Register;
