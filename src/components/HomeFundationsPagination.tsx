import { useState } from 'react';

const HomeFundationsPagination = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const handleClick = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <section className="home_fundations_pagination">
        {currentPage === 1 && (
          <div className="first_pagination_page">
            <article className="first_pagination_page_articles">
              <p className="fundation">Fundacja “Dbam o Zdrowie”</p>
              <div className="wrapper">
                <p className="mission">Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.</p>
                <p className="items">ubrania, jedzenie, sprzęt AGD, meble, zabawki</p>
              </div>
            </article>
            <article className="second_pagination_page_articles">
              <p className="fundation">Fundacja “Dla dzieci”</p>
              <div className="wrapper">
                <p className="mission">Cel i misja: Pomoc dzieciom z ubogich rodzin.</p>
                <p className="items">ubrania, meble, zabawki</p>
              </div>
            </article>
            <article className="third_pagination_page_articles">
              <p className="fundation">Fundacja “Bez domu”</p>
              <div className="wrapper">
                <p className="mission">Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania.</p>
                <p className="items">ubrania, jedzenie, ciepłe koce</p>
              </div>
            </article>
          </div>
        )}
        {currentPage === 2 && (
          <div className="second_pagination_page">
            <article className="first_pagination_page_articles">
              <p className="fundation">Lorem ipsum dolor sit amet</p>
              <div className="wrapper">
                <p className="mission">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <p className="items">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
              </div>
            </article>
            <article className="second_pagination_page_articles">
              <p className="fundation">Lorem ipsum dolor sit amet</p>
              <div className="wrapper">
                <p className="mission">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <p className="items">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
              </div>
            </article>
            <article className="third_pagination_page_articles">
              <p className="fundation">Lorem ipsum dolor sit amet</p>
              <div className="wrapper">
                <p className="mission">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <p className="items">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
              </div>
            </article>
          </div>
        )}
        {currentPage === 3 && (
          <div className="third_pagination_page">
            <article className="first_pagination_page_articles">
              <p className="fundation">Lorem ipsum dolor sit amet</p>
              <div className="wrapper">
                <p className="mission">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                <p className="items">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
              </div>
            </article>
            <article className="second_pagination_page_articles">
              <p className="fundation">Lorem ipsum dolor sit amet</p>
              <div className="wrapper">
                <p className="mission">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                <p className="items">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
              </div>
            </article>
            <article className="third_pagination_page_articles">
              <p className="fundation">Lorem ipsum Lorem ipsum</p>
              <div className="wrapper">
                <p className="mission">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                <p className="items">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
              </div>
            </article>
          </div>
        )}
      </section>
      <div className="pagination_buttons">
        <button onClick={() => handleClick(1)}
        className={currentPage === 1 ? "current_page_button" : "pagination_button"}>
          1
        </button>
        <button onClick={() => handleClick(2)} className={currentPage === 2 ? "current_page_button" : "pagination_button"}>
          2
        </button>
        <button onClick={() => handleClick(3)} className={currentPage === 3 ? "current_page_button" : "pagination_button"}>
          3
        </button>
      </div>
    </>
  );
};

export default HomeFundationsPagination;
