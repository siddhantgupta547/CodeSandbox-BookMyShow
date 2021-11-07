import './Home.styles.scss';

const Home = ({ movies }) => {
  const filters = {
    EventLanguage: ['Hindi', 'English'],
    EventGenre: ['Action', 'Romance']
  };

  const filterContainer = () => {
    let filtersSection = [];
    for (let i in filters) {
      typeof filters[i] === 'object'
        ? (filtersSection = [...filtersSection, ...filters[i]])
        : filtersSection.push(filters[i]);
    }
    return filtersSection;
  };

  return (
    <div className="home-container">
      <div className="filters-section">
        <span style={{ color: 'white' }}>Applied Filters:&nbsp;</span>
        {Object.keys(filters).length &&
          filterContainer().map((filter) => (
            <div className="Appliedfilter">{filter}</div>
          ))}
      </div>
    </div>
  );
};

export default Home;
