import { StrictMode } from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import configureStore from '../store';
import { Provider } from 'react-redux';

const store = configureStore();
//console.log(store);

const rootElement = document.getElementById('root');
ReactDOM.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
  rootElement
);
