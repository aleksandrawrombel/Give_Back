import React, { useState, FormEvent } from 'react';

import formMainBackground from '../assets/formMainBackground.png';

const FormMain = () => {
  //form pagination

  const [currentPage, setCurrentPage] = useState(1);
  const handleClick = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  // step one

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const [checked, setChecked] = useState<{ [key: string]: boolean }>({});
  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked: isChecked } = e.target;
    setChecked({ ...checked, [name]: isChecked });
  };

  // step two

  const [bags, setBags] = useState(0);
  const countBags = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = parseInt(e.target.value);
    setBags(value);
  };

  return (
    <>
      {currentPage === 1 && (
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
                <form onSubmit={handleSubmit}>
                  <label className="checkbox_container">
                    ubrania, które nadają się do ponownego użycia
                    <input
                      type="checkbox"
                      name="clothes1"
                      checked={checked.clothes1 || false}
                      onChange={handleCheckboxChange}
                    />
                    <span className="checkbox"></span>
                  </label>
                  <label className="checkbox_container">
                    ubrania, do wyrzucenia
                    <input
                      type="checkbox"
                      name="clothes2"
                      checked={checked.clothes2 || false}
                      onChange={handleCheckboxChange}
                    />
                    <span className="checkbox"></span>
                  </label>
                  <label className="checkbox_container">
                    zabawki
                    <input
                      type="checkbox"
                      name="toys"
                      checked={checked.toys || false}
                      onChange={handleCheckboxChange}
                    />
                    <span className="checkbox"></span>
                  </label>
                  <label className="checkbox_container">
                    książki
                    <input
                      type="checkbox"
                      name="books"
                      checked={checked.books || false}
                      onChange={handleCheckboxChange}
                    />
                    <span className="checkbox"></span>
                  </label>
                  <label className="checkbox_container">
                    Inne
                    <input
                      type="checkbox"
                      name="other"
                      checked={checked.other || false}
                      onChange={handleCheckboxChange}
                    />
                    <span className="checkbox"></span>
                  </label>
                  <button className="form_main_step_one_button" onClick={() => handleClick(2)}>
                    Dalej
                  </button>
                </form>
              </div>
            </div>
          </section>
        </>
      )}
      {currentPage === 2 && (
        <>
          <section className="form_main_header">
            <p className="form_main_header_important">Ważne!</p>
            <p className="form_main_header_text">Wszystkie rzeczy do oddania zapakuj w 60l worki.</p>
          </section>
          <section className="form_main">
            <div className="form_main_background_image">
              <img src={formMainBackground} alt="teddy bear" />
              <div className="form_main_step_one">
                <span className="step_count">Krok 2/4</span>
                <p className="step_instruction">Podaj liczbę 60l worków, w które spakowałeś/aś rzeczy:</p>
                <form className="form_main_step_two">
                  <p>Liczba 60l worków:</p>
                  <div className="custom_select">
                    <select value={bags} onChange={countBags}>
                      <option className="option" value="0">
                        — wybierz —
                      </option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                    </select>
                  </div>
                </form>
                <div className="form_main_buttons">
                  <button className="form_main_step_one_button" onClick={() => handleClick(1)}>
                    Wstecz
                  </button>
                  <button className="form_main_step_one_button" onClick={() => handleClick(3)}>
                    Dalej
                  </button>
                </div>
              </div>
            </div>
          </section>
        </>
      )}
      {currentPage === 3 && (
        <>
          <section className="form_main_header">
            <p className="form_main_header_important">Ważne!</p>
            <p className="form_main_header_text form_main_header_text_step_three">
              Jeśli wiesz komu chcesz pomóc, możesz wpisać nazwę tej organizacji w wyszukiwarce. Możesz też filtrować
              organizacje po ich lokalizacji bądź celu ich pomocy.
            </p>
          </section>
          <section className="form_main">
            <div className="form_main_background_image">
              <img src={formMainBackground} alt="teddy bear" />
              <div className="form_main_step_one">
                <span className="step_count">Krok 3/4</span>
                <p className="step_instruction">Lokalizacja:</p>
                <form className="form_main_step_three">
                  <div className="custom_select_step_three">
                    <select>
                      <option className="option">— wybierz —</option>
                      <option value="Poznań">Poznań</option>
                      <option value="Warszawa">Warszawa</option>
                      <option value="Kraków">Kraków</option>
                      <option value="Wrocław">Wrocław</option>
                      <option value="Katowice">Katowice</option>
                    </select>
                  </div>
                </form>
                <form className="form_main_step_three_help">
                  <p>Komu chcesz pomóc?</p>
                  <div className="help_part_one">
                  <label className="checkbox_container_step_three">
                    <input type="checkbox" />
                    <span className="checkbox_step_three">dzieciom</span>
                  </label>
                  <label className="checkbox_container_step_three">
                    <input type="checkbox" />
                    <span className="checkbox_step_three mothers">samotnym matkom</span>
                  </label>
                  <label className="checkbox_container_step_three">
                    <input type="checkbox" />
                    <span className="checkbox_step_three">bezdomnym</span>
                  </label>
                  </div>
                  <div className="help_part_two">
                  <label className="checkbox_container_step_three">
                    <input type="checkbox" />
                    <span className="checkbox_step_three">niepełnosprawnym</span>
                  </label>
                  <label className="checkbox_container_step_three">
                    <input type="checkbox" />
                    <span className="checkbox_step_three elders">osobom starszym</span>
                  </label>
                  </div>
                  <p className="form_main_step_three_organization">Wpisz nazwę konkretnej organizacji (opcjonalnie)</p>
                  <textarea className="form_main_step_three_message"></textarea>
                </form>
                <div className="form_main_buttons_step_three">
                  <button className="form_main_step_three_button" onClick={() => handleClick(2)}>
                    Wstecz
                  </button>
                  <button className="form_main_step_three_button" onClick={() => handleClick(4)}>
                    Dalej
                  </button>
                </div>
              </div>
            </div>
          </section>
        </>
      )}
      {currentPage === 4 && (
      <h1>step 4</h1>)}
    </>
  );
};

export default FormMain;
