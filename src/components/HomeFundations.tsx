import React from 'react';

import Pagination from './Pagination';

const HomeFundations: React.FC = () => {
  return (
    <>
      <section className="who_we_help_buttons">
        <button className="who_we_help_button fundation_button">Fundacjom</button>
        <button className="who_we_help_button organization_button">Organizacjom pozarządowym</button>
        <button className="who_we_help_button locals_button">Lokalnym zbiórkom</button>
      </section>
      <p className="fundation_text">
        W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz sprawdzić czym się
        zajmują, komu pomagają i czego potrzebują.
      </p>
      <Pagination totalPages={3} />
    </>
  );
};

export default HomeFundations;
