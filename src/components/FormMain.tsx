import React, { useState, FormEvent, useEffect, ChangeEvent, useRef } from 'react';

import formMainBackground from '../assets/formMainBackground.png';

const FormMain = () => {
  //form pagination

  const [currentPage, setCurrentPage] = useState(1);
  const handleClick = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  //step one

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const [checked, setChecked] = useState<{ [key: string]: boolean }>({});
  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked: isChecked } = e.target;
    setChecked({ ...checked, [name]: isChecked });
  };

  // console.log(checked);

  //step two

  const [bags, setBags] = useState(0);
  const countBags = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = parseInt(e.target.value);
    setBags(value);
  };

  // console.log(bags);

  //step three

  const [city, setCity] = useState('');
  const whichCity = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setCity(value);
  };

  // console.log(city);

  const [checkedGroup, setCheckedGroup] = useState<{ [key: string]: boolean }>({});
  const handleCheckboxGroup = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked: isChecked } = e.target;
    setCheckedGroup({ ...checkedGroup, [name]: isChecked });
  };

  // console.log(checkedGroup);

  const handleSubmitGroup = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const [unchecked, setUnchecked] = useState(false);

  useEffect(() => {
    const allCheckboxesUnchecked = Object.values(checkedGroup).every((checked) => !checked);

    if (Object.keys(checkedGroup).length === 0 || allCheckboxesUnchecked) {
      setUnchecked(true);
    } else {
      setUnchecked(false);
    }
  }, [checkedGroup]);

  // console.log('unchecked boxes:', unchecked);

  const [localizationSpecific, setLocalizationSpecific] = useState('');

  const handleLocalizationSpecific = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const localization = e.target.value;
    setLocalizationSpecific(localization);
  };

  useEffect(() => {
    if (localizationSpecific) {
      setCity('');
    }
  }, [localizationSpecific]);

  // console.log(city, localizationSpecific);

  //step four

  interface FormData {
    street: string;
    city: string;
    post: string;
    phone: string;
    date: string;
    delivery: string;
  }

  //validate form data

  const [formData, setFormData] = useState<FormData>({
    street: '',
    city: '',
    post: '',
    phone: '',
    date: '',
    delivery: '',
  });

  const [streetError, setStreetError] = useState('');
  const [cityError, setCityError] = useState('');
  const [postError, setPostError] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [dateError, setDateError] = useState('');
  const [hourError, setHourError] = useState('');
  const [deliveryError, setDeliveryError] = useState('');

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const dateInputRef = useRef(null);

  const handleAddressSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const [hour, setHour] = useState('');
  const [minute, setMinute] = useState('');

  const handleHourChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputHour = event.target.value;
    if (/^([01]?[0-9]|2[0-3])?$/.test(inputHour) || inputHour === '') {
      setHour(inputHour);
    }
  };

  const handleMinuteChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputMinute = event.target.value;
    if (/^([0-5]?[0-9])?$/.test(inputMinute) || inputMinute === '') {
      setMinute(inputMinute);
    }
  };

  // console.log(formData, hour, minute)

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
                <form className="form_main_step_three" onSubmit={handleSubmitGroup}>
                  <div className="custom_select_step_three">
                    <select value={city} onChange={whichCity} disabled={localizationSpecific.length > 0}>
                      <option className="option" value="">
                        — wybierz —
                      </option>
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
                      <input
                        type="checkbox"
                        name="children"
                        checked={checkedGroup.children || false}
                        onChange={handleCheckboxGroup}
                      />
                      <span className="checkbox_step_three">dzieciom</span>
                    </label>
                    <label className="checkbox_container_step_three">
                      <input
                        type="checkbox"
                        name="singleMothers"
                        checked={checkedGroup.singleMothers || false}
                        onChange={handleCheckboxGroup}
                      />
                      <span className="checkbox_step_three mothers">samotnym matkom</span>
                    </label>
                    <label className="checkbox_container_step_three">
                      <input
                        type="checkbox"
                        name="homeless"
                        checked={checkedGroup.homeless || false}
                        onChange={handleCheckboxGroup}
                      />
                      <span className="checkbox_step_three">bezdomnym</span>
                    </label>
                  </div>
                  <div className="help_part_two">
                    <label className="checkbox_container_step_three">
                      <input
                        type="checkbox"
                        name="disabled"
                        checked={checkedGroup.disabled || false}
                        onChange={handleCheckboxGroup}
                      />
                      <span className="checkbox_step_three">niepełnosprawnym</span>
                    </label>
                    <label className="checkbox_container_step_three">
                      <input
                        type="checkbox"
                        name="elders"
                        checked={checkedGroup.elders || false}
                        onChange={handleCheckboxGroup}
                      />
                      <span className="checkbox_step_three elders">osobom starszym</span>
                    </label>
                  </div>
                  <p className="form_main_step_three_organization">Wpisz nazwę konkretnej lokalizacji (opcjonalnie)</p>
                  <textarea className="form_main_step_three_message" onChange={handleLocalizationSpecific}></textarea>

                  <div className="form_main_buttons_step_three">
                    <button className="form_main_step_three_button" onClick={() => handleClick(2)}>
                      Wstecz
                    </button>
                    <button
                      className="form_main_step_three_button"
                      onClick={() => handleClick(4)}
                      disabled={unchecked}
                      style={{ opacity: !unchecked ? '' : '0.5' }}
                    >
                      Dalej
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </section>
        </>
      )}
      {currentPage === 4 && (
        <>
          <section className="form_main_header">
            <p className="form_main_header_important">Ważne!</p>
            <p className="form_main_header_text form_main_header_text_step_three">
              Podaj adres oraz termin odbioru rzeczy.
            </p>
          </section>
          <section className="form_main">
            <div className="form_main_background_image">
              <img src={formMainBackground} alt="teddy bear" />
              <div className="form_main_step_one">
                <span className="step_count">Krok 4/4</span>
                <p className="step_instruction">Podaj adres oraz termin odbioru rzecz przez kuriera</p>
                <form className="form_main_step_four" onSubmit={handleAddressSubmit} noValidate>
                  <div className="form_main_step_four_part1">
                    <p>Adres odbioru:</p>
                    <label className="street">
                      Ulica
                      <input
                        className="street_input"
                        type="text"
                        name="street"
                        value={formData.street}
                        required
                        onChange={handleInputChange}
                      ></input>
                    </label>
                    <label className="city">
                      Miasto
                      <input
                        className="city_input"
                        type="city"
                        name="city"
                        value={formData.city}
                        required
                        onChange={handleInputChange}
                      ></input>
                    </label>
                    <label className="post">
                      <span>
                        Kod <span>pocztowy</span>
                      </span>
                      <input
                        className="post_input"
                        type="text"
                        name="post"
                        value={formData.post}
                        required
                        onChange={handleInputChange}
                      ></input>
                    </label>
                    <label className="phone">
                      <span>
                        Numer <span>telefonu</span>
                      </span>
                      <input
                        className="phone_input"
                        type="text"
                        name="phone"
                        value={formData.phone}
                        required
                        onChange={handleInputChange}
                      ></input>
                    </label>
                  </div>
                  <div className="form_main_step_four_part2">
                    <p>Termin odbioru:</p>
                    <label className="date">
                      Data
                      <input
                        className="date_input"
                        placeholder="dd/mm/rrrr"
                        type="date"
                        name="date"
                        ref={dateInputRef}
                        value={formData.date}
                        required
                        onChange={handleInputChange}
                      ></input>
                    </label>
                    <label className="hour">
                      Godzina
                      <div className="time_input">
                        <input
                          className="hour_input"
                          placeholder="hh"
                          type="text"
                          name="hour"
                          value={hour}
                          maxLength={2}
                          required
                          onChange={handleHourChange}
                        ></input>
                        :
                        <input
                          className="minute_input"
                          placeholder="mm"
                          type="text"
                          name="minute"
                          value={minute}
                          maxLength={2}
                          required
                          onChange={handleMinuteChange}
                        ></input>
                      </div>
                    </label>
                    <label className="delivery">
                      <span className="delivery_text">
                        Uwagi <span>dla kuriera</span>
                      </span>
                      <textarea
                        className="delivery_input"
                        name="delivery"
                        value={formData.delivery}
                        required
                        onChange={handleInputChange}
                      ></textarea>
                    </label>
                  </div>
                  <div className="form_main_buttons_step_four">
                    <button className="form_main_step_four_button" onClick={() => handleClick(3)}>
                      Wstecz
                    </button>
                    <button className="form_main_step_four_button" onClick={() => handleClick(5)}>
                      Dalej
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </section>
        </>
      )}
    </>
  );
};

export default FormMain;
