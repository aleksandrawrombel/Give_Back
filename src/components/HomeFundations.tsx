import HomeFundationsPagination from './HomeFundationsPagination';

const HomeFundations = () => {
  return (
    <>
      <p className="fundation_text">
        W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz sprawdzić czym się
        zajmują, komu pomagają i czego potrzebują.
      </p>
      <HomeFundationsPagination />
    </>
  );
};

export default HomeFundations;
