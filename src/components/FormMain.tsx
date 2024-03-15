import React, { useState, FormEvent } from 'react';

import formMainBackground from '../assets/formMainBackground.png';

const FormMain = () => {
  //form pagination

  const [currentPage, setCurrentPage] = useState(1);
  const handleClick = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    console.log(currentPage);
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
      {currentPage === 2 && <h1>page2</h1>}
    </>
  );
};

export default FormMain;
