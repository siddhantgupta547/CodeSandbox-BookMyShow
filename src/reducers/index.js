import { combineReducers } from 'redux';

import filtersReducer from '../reducers/filtersReducer';
import dataReducer from '../reducers/dataReducer';

export default combineReducers({
  data: dataReducer,
  filters: filtersReducer
});
