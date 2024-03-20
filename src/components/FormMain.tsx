import React, { useState, FormEvent, useEffect, ChangeEvent, useRef } from 'react';

import supabase from './supabase';

import formMainBackground from '../assets/formMainBackground.png';
import tshirtIcon from '../assets/tshirtIcon.png';
import recycleIcon from '../assets/recycleIcon.png';
import decoration from '../assets/heroDecoration.svg';

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

  const items: string[] = [];

  if (checked.clothesNew) {
    items.push('ubrania w dobrym stanie');
  }

  if (checked.clothesTrash) {
    items.push('ubrania do wyrzucenia');
  }

  if (checked.other) {
    items.push('inne');
  }

  if (checked.books) {
    items.push('książki');
  }

  if (checked.toys) {
    items.push('zabawki');
  }

  const summaryItems = items.join(', ');

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

  const groups: string[] = [];

  if (checkedGroup.children) {
    groups.push('dzieciom');
  }

  if (checkedGroup.singleMothers) {
    groups.push('samotnym matkom');
  }

  if (checkedGroup.homeless) {
    groups.push('bezdomnym');
  }

  if (checkedGroup.disabled) {
    groups.push('niepełnosprawnym');
  }

  if (checkedGroup.elders) {
    groups.push('osobom starszym');
  }

  const summaryGroups = groups.join(', ');

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
  const [minuteError, setMinuteError] = useState('');

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const dateInputRef = useRef(null);

  function formatDate(inputDate: string) {
    const parts = inputDate.split('-');
    const formattedDate = `${parts[2]}.${parts[1]}.${parts[0]}`;
    return formattedDate;
  }

  const handleAddressSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    let isCorrect = true;

    if (formData.street === '') {
      setStreetError('Podana ulica jest nieprawidłowa!');
      isCorrect = false;
    } else if (formData.street.length < 2) {
      setStreetError('Podana ulica jest nieprawidłowa!');
      isCorrect = false;
    } else {
      setStreetError('');
    }

    if (formData.city === '') {
      setCityError('Podane miasto jest nieprawidłowe!');
      isCorrect = false;
    } else if (formData.city.length < 2) {
      setCityError('Podana ulica jest nieprawidłowa!');
      isCorrect = false;
    } else {
      setCityError('');
    }

    if (formData.post === '') {
      setPostError('Podany kod pocztowy jest nieprawidłowy!');
      isCorrect = false;
    } else if (!/^\d{2}-\d{3}$/.test(formData.post)) {
      setPostError('Podany kod pocztowy jest nieprawidłowy!');
      isCorrect = false;
    } else {
      setPostError('');
    }

    if (formData.phone === '') {
      setPhoneError('Podany numer jest nieprawidłowy!');
      isCorrect = false;
    } else if (!/^\d{9}$/.test(formData.phone)) {
      setPhoneError('Podany numer jest nieprawidłowy!');
      isCorrect = false;
    } else {
      setPhoneError('');
    }

    if (hour === '') {
      setHourError('Podana godzina jest nieporpawna!');
      isCorrect = false;
    } else {
      setHourError('');
    }

    if (minute == '') {
      setMinuteError('Podana minuta jest nieporpawna!');
      isCorrect = false;
    } else {
      setMinuteError('');
    }

    if (formData.date == '') {
      setDateError('Podana data jest nieporpawna!');
      isCorrect = false;
    } else {
      setDateError('');
    }

    if (isCorrect) {
      handleClick(5);
    }
  };

  const [hour, setHour] = useState('');
  const [minute, setMinute] = useState('');

  const time = `${hour}:${minute}`;

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

  //insert form data to supabase

  async function insertAddressFormData() {
    try {
      const { data, error } = await supabase.from('GiveBackForm').insert([
        {
          items: summaryItems,
          bags: bags,
          localization: city,
          localizationSpecific: localizationSpecific,
          group: summaryGroups,
          street: formData.street,
          city: formData.city,
          post: formData.post,
          phone: formData.phone,
          date: formData.date,
          hour: time,
          delivery: formData.delivery,
        },
      ]);
    } catch (error) {
      console.log(error.message);
    }
  }

  //custom select - step 2

  interface Option {
    value: number;
    label: string;
  }

  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<Option | null>(null);
  const options: Option[] = [
    { value: 1, label: '1' },
    { value: 2, label: '2' },
    { value: 3, label: '3' },
    { value: 4, label: '4' },
    { value: 5, label: '5' },
  ];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option: Option) => {
    setSelectedOption(option);
    setIsOpen(false);
    setBags(option.value);
  };

  //custom select - step 3

  interface OptionCity {
    value: string;
    label: string;
  }

  const [isCityOpen, setIsCityOpen] = useState(false);
  const [selectedOptionCity, setSelectedOptionCity] = useState<OptionCity | null>(null);
  const optionsCity: OptionCity[] = [
    { value: 'Poznań', label: 'Poznań' },
    { value: 'Warszawa', label: 'Warszawa' },
    { value: 'Kraków', label: 'Kraków' },
    { value: 'Wrocław', label: 'Wrocław' },
    { value: 'Katowice', label: 'Katowice' },
  ];

  const toggleCityDropdown = () => {
    setIsCityOpen(!isCityOpen);
  };

  const handleOptionCityClick = (option: OptionCity) => {
    setSelectedOptionCity(option);
    setIsCityOpen(false);
    setCity(option.value);
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
                      name="clothesNew"
                      checked={checked.clothesNew || false}
                      onChange={handleCheckboxChange}
                    />
                    <span className="checkbox"></span>
                  </label>
                  <label className="checkbox_container">
                    ubrania, do wyrzucenia
                    <input
                      type="checkbox"
                      name="clothesTrash"
                      checked={checked.clothesTrash || false}
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
                    <div className="custom_select_bags">
                      <div className="selected_option_bags" onClick={toggleDropdown}>
                        {selectedOption ? selectedOption.label : '— wybierz —'}
                      </div>
                      {isOpen && (
                        <ul className="options">
                          <li onClick={() => handleOptionClick(options[0])}>{options[0].label}</li>
                          <li value="1" onClick={() => handleOptionClick(options[1])}>
                            {options[1].label}
                          </li>
                          <li value="2" onClick={() => handleOptionClick(options[2])}>
                            {options[2].label}
                          </li>
                          <li onClick={() => handleOptionClick(options[3])}>{options[3].label}</li>
                          <li onClick={() => handleOptionClick(options[4])}>{options[4].label}</li>
                        </ul>
                      )}
                    </div>
                  </div>
                  {/* <div className="custom_select">
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
                  </div> */}
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
                  <div className="custom_select_city">
                    <div
                      className="selected_option_city"
                      onClick={toggleCityDropdown}
                      style={{ opacity: localizationSpecific.length !== 0 ? '0.5' : '' }}
                    >
                      {selectedOptionCity ? selectedOptionCity.label : '— wybierz —'}
                    </div>
                    {isCityOpen && (
                      <ul className="options_city">
                        <li onClick={() => handleOptionCityClick(optionsCity[0])}>{optionsCity[0].label}</li>
                        <li value="1" onClick={() => handleOptionCityClick(optionsCity[1])}>
                          {optionsCity[1].label}
                        </li>
                        <li value="2" onClick={() => handleOptionCityClick(optionsCity[2])}>
                          {optionsCity[2].label}
                        </li>
                        <li onClick={() => handleOptionCityClick(optionsCity[3])}>{optionsCity[3].label}</li>
                        <li onClick={() => handleOptionCityClick(optionsCity[4])}>{optionsCity[4].label}</li>
                      </ul>
                    )}
                  </div>
                  {/* <div className="custom_select_step_three">
                    <select value={city} onChange={whichCity} disabled={localizationSpecific.length !== 0}>
                      <option className="option" value="">
                        — wybierz —
                      </option>
                      <option value="Poznań">Poznań</option>
                      <option value="Warszawa">Warszawa</option>
                      <option value="Kraków">Kraków</option>
                      <option value="Wrocław">Wrocław</option>
                      <option value="Katowice">Katowice</option>
                    </select>
                  </div> */}
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
                    {streetError && <span className="validation_error validation_error_address">{streetError}</span>}
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
                    {cityError && <span className="validation_error validation_error_address">{cityError}</span>}
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
                        maxLength={6}
                      ></input>
                    </label>
                    {postError && <span className="validation_error validation_error_address">{postError}</span>}
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
                        maxLength={9}
                      ></input>
                    </label>
                    {phoneError && <span className="validation_error validation_error_address">{phoneError}</span>}
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
                    {dateError && <span className="validation_error validation_error_address2">{dateError}</span>}
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
                    {hourError && <span className="validation_error validation_error_address2">{hourError}</span>}
                    {minuteError && <span className="validation_error validation_error_address2">{minuteError}</span>}
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
                    <button className="form_main_step_four_button" type="submit">
                      Dalej
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </section>
        </>
      )}
      {currentPage === 5 && (
        <section className="summary">
          <div className="form_main_background_image">
            <img src={formMainBackground} alt="teddy bear" />
            <div className="summary_container">
              <p className="summary_title">Podsumowanie Twojej darowizny</p>
              <p className="summary_title2">Oddajesz:</p>
              <div className="items_summary">
                <div className="tshirt_icon_summary">
                  <img src={tshirtIcon} alt="t-shirt icon" />
                </div>
                <p>
                  {summaryItems
                    ? `worki: ${bags} | ${summaryItems} | ${summaryGroups}`
                    : `worki: ${bags} | ${summaryGroups}`}
                </p>
              </div>
              <div className="localization_summary">
                <div className="recycle_icon_summary">
                  <img src={recycleIcon} alt="recycle icon" />
                </div>
                <p>
                  {city || localizationSpecific
                    ? `dla lokalizacji: ${city ? city : localizationSpecific}`
                    : `dla lokalizacji: brak wybranej lokalizacji`}
                </p>
              </div>
            </div>
            <div className="form_summary">
              <div className="form_summary_address">
                <p className="address_title">Adres odbioru:</p>
                <div className="street_summary">
                  <p>Ulica</p>
                  <p className="street_value">{formData.street}</p>
                </div>
                <div className="city_summary">
                  <p>Miasto</p>
                  <p className="city_value">{formData.city}</p>
                </div>
                <div className="post_summary">
                  <p>
                    Kod <span>pocztowy</span>
                  </p>
                  <p className="post_value">{formData.post}</p>
                </div>
                <div className="phone_summary">
                  <p>
                    Numer <span>telefonu</span>
                  </p>
                  <p className="phone_value">{formData.phone}</p>
                </div>
              </div>
              <div className="form_summary_date">
                <p className="date_title">Termin odbioru:</p>
                <div className="date_summary">
                  <p>Data</p>
                  <p className="date_value">{formatDate(formData.date)}</p>
                </div>
                <div className="hour_summary">
                  <p>Godzina</p>
                  <p className="hour_value">{`${hour}:${minute}`}</p>
                </div>
                <div className="delivery_summary">
                  <p>
                    Uwagi<span>dla kuriera</span>
                  </p>
                  <p className="delivery_value">{formData.delivery}</p>
                </div>
              </div>
            </div>
            <div className="form_main_buttons_summary">
              <button className="form_main_summary_button" onClick={() => handleClick(4)}>
                Wstecz
              </button>
              <button
                className="form_main_summary_button confirm"
                onClick={() => {
                  insertAddressFormData();
                  handleClick(6);
                }}
              >
                Potwierdzam
              </button>
            </div>
          </div>
        </section>
      )}
      {currentPage === 6 && (
        <section className="thank_you">
          <div className="form_main_background_image">
            <img src={formMainBackground} alt="teddy bear" />
            <div className="thank_you_container">
              <h1>Dziękujemy za przesłanie formularza! Na maila prześlemy wszelkie informacje o odbiorze.</h1>
              <div className="thank_you_decoration">
                <img src={decoration} alt="text decoration" />
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default FormMain;
