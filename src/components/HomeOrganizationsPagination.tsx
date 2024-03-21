import { useState } from 'react';

const HomeOrganizationsPagination = () => {
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
              <p className="fundation">Organizacja “Lorem Ipsum 1”</p>
              <div className="wrapper">
                <p className="mission">Quis varius quam quisque id diam vel quam elementum pulvinar.</p>
                <p className="items">Egestas, sed, tempus</p>
              </div>
            </article>
            <article className="second_pagination_page_articles">
              <p className="fundation">Organizacja “Lorem Ipsum 2”</p>
              <div className="wrapper">
                <p className="mission">Hendrerit gravida rutrum quisque non tellus orci ac auctor augue.</p>
                <p className="items">Ut, aliquam, purus, sit, amet</p>
              </div>
            </article>
            <article className="third_pagination_page_articles">
              <p className="fundation">Organizacja “Lorem Ipsum 3”</p>
              <div className="wrapper">
                <p className="mission">Scelerisque in dictum non consectetur a erat nam.</p>
                <p className="items">Mi, quis, hendrerit, dolor</p>
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
      </section>
      <div className="pagination_buttons">
        <button
          onClick={() => handleClick(1)}
          className={currentPage === 1 ? 'current_page_button' : 'pagination_button'}
        >
          1
        </button>
        <button
          onClick={() => handleClick(2)}
          className={currentPage === 2 ? 'current_page_button' : 'pagination_button'}
        >
          2
        </button>
      </div>
    </>
  );
};

export default HomeOrganizationsPagination;
