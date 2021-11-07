import { useEffect } from 'react';
import { connect } from 'react-redux';

import './styles.css';
import { fetchData } from '../src/actions';

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
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    data: state.data
  };
}

export default connect(mapStateToProps)(App);
