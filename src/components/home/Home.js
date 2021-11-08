import { useState } from 'react';
import './Home.styles.scss';

import Row from '../rows/Row';

const Home = ({ movies }) => {
  const [reSize, setreSize] = useState(window.innerWidth);
  const [rows, setRows] = useState(41);

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

  const noOfCols = () => {
    return Math.floor(reSize / 250);
  };

  const createRows = () => {
    const data = Object.values(movies);
    const size = data.length;
    const rows = Math.ceil(size / noOfCols());
    setRows(rows);
  };

  const mapRows = () => {
    const slicedArray = [];

    const data = Object.values(movies);
    console.log('worked', data, rows);
    const cols = noOfCols();
    for (let i = 0; i < rows; i++) {
      slicedArray.push(data.slice(i * cols, i * cols + cols));
    }
    console.log(slicedArray, 'Slice', reSize);
    return slicedArray;
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
      <div className="movies-container">
        {mapRows().map((rowData, index) => {
          return <Row movies={rowData} id={index} key={`row${index}`} />;
        })}
      </div>
    </div>
  );
};

export default Home;
