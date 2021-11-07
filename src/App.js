import { useEffect } from 'react';
import { connect } from 'react-redux';

import './styles.css';
import { fetchData } from '../src/actions';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';

function App({ data, dispatch }) {
  useEffect(() => {
    try {
      dispatch(fetchData());
    } catch (err) {
      console.log(err, 'Error');
    }
  }, []);

  return (
    <div className="App">
      <Navbar languages={data.langauges} />
      <Home movies={data.movies} />
    </div>
  );
}

function mapStateToProps(state) {
  return {
    data: state.data
  };
}

export default connect(mapStateToProps)(App);
