import { useState, useEffect } from 'react';
import './Home.styles.scss';

import Row from '../rows/Row';

const noOfCols = (width = window.innerWidth) => {
  console.log('func', width);
  return Math.floor(width / 250);
};

const Home = ({ movies }) => {
  console.log('Comp');
  const [cols, setCols] = useState(noOfCols());
  const [rows, setRows] = useState(0);
  //const [reSize, setResize]= useState('');

  useEffect(() => {
    window.addEventListener('resize', updateCols);
    return () => {
      window.removeEventListener('resize', updateCols);
    };
  }, []);

  const updateCols = () => {
    setTimeout(() => {
      let newCols = noOfCols(window.innerWidth);
      if (newCols !== cols) {
        setCols(newCols);
      }
    }, 50);
  };

  const createRows = () => {
    const data = Object.values(movies);
    const size = data.length;
    const newRows = Math.ceil(size / cols);
    console.log('called');
    if (rows !== newRows) {
      setRows(newRows);
    }
    //setRows(rows);
  };
  createRows();

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

  const mapRows = () => {
    const slicedArray = [];

    const data = Object.values(movies);
    console.log('worked', data, rows);
    const cols = noOfCols();
    for (let i = 0; i < rows; i++) {
      slicedArray.push(data.slice(i * cols, i * cols + cols));
    }
    console.log(slicedArray, 'Slice');
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
          return <Row movies={rowData} key={`row${index}`} />;
        })}
      </div>
    </div>
  );
};

export default Home;
