import React from 'react';

import formMainBackground from '../assets/formMainBackground.png';

const FormMain = () => {
  return (
    <>
      <section className="form_main_header">
        <p className="form_main_header_important">Ważne!</p>
        <p className="form_main_header_text">
          Uzupełnij szczegóły dotyczące Twoich rzeczy. Dzięki temu będziemy wiedzieć komu najlepiej je przekazać.
        </p>
      </section>
      <section className="form_main">
        <div className="form_main_background_image">
          <img src={formMainBackground} alt="teddy bear" />
          <div className="form_main_step_one">
            <span className="step_count">Krok 1/4</span>
            <p className="step_instruction">Zaznacz co chcesz oddać:</p>
            <form>
              <label className="checkbox_container">
                ubrania, które nadają się do ponownego użycia
                <input type="checkbox" />
                <span className="checkbox"></span>
              </label>
              <label className="checkbox_container">
                ubrania, do wyrzucenia
                <input type="checkbox" />
                <span className="checkbox"></span>
              </label>
              <label className="checkbox_container">
                zabawki
                <input type="checkbox" />
                <span className="checkbox"></span>
              </label>
              <label className="checkbox_container">
                książki
                <input type="checkbox" />
                <span className="checkbox"></span>
              </label>
              <label className="checkbox_container">
                Inne
                <input type="checkbox" />
                <span className="checkbox"></span>
              </label>
              <button type="submit" className="form_main_step_one_button">
                Dalej
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default FormMain;
