import React from 'react';

import threeColumnsBackground from '../assets/threeColumnsBackground.png';

const HomeThreeColumns = () => {
  return (
    <>
    <section className="landing_page_container statistics" style={{ backgroundImage: `url(${threeColumnsBackground})` }}>
      <ul className="statistics_columns">
        <li>
          <span className="statistics_number">10</span>
          <span className="statistics_name">oddanych wokrów</span>
          <span className="statistics_text">
            Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam
            erat volutpat.
          </span>
        </li>
        <li>
          <span className="statistics_number">5</span>
          <span className="statistics_name">wspartych organizacji</span>
          <span className="statistics_text">
            Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam
            erat volutpat.
          </span>
        </li>
        <li>
          <span className="statistics_number">7</span>
          <span className="statistics_name">zorganizowanych zbiórek</span>
          <span className="statistics_text">
            Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam
            erat volutpat.
          </span>
        </li>
      </ul>
    </section>
    </>
  );
};

export default HomeThreeColumns;
