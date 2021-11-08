import axios from 'axios';
import {
  FETCH_MOVIES_START,
  FETCH_MOVIES_SUCCESS,
  FETCH_MOVIES_FAILURE,
  ADD_FILTER,
  REMOVE_FILTER,
  CLEAR_FILTER
} from '../actions/actionTypes';

// Action Generators of Movies and Language
export function fetchStart() {
  return {
    type: FETCH_MOVIES_START
  };
}

//fetch data function would return a function handled by redux-thunk.
export function fetchData() {
  return async function (dispatch) {
    //start action is dispatched to set loading=true;
    dispatch(fetchStart());
    //try catch is used  to handle if any error occurs while getting th data from API
    try {
      const data = await axios.get(
        'https://peaceful-forest-62260.herokuapp.com/'
      );
      dispatch(fetchSuccess(data.data.moviesData, data.data.languageList));
    } catch (error) {
      // if error occurs then fetch failre is returned to display error.
      dispatch(fetchFailure(error));
    }
  };
}

export function fetchSuccess(movies, languages) {
  return {
    type: FETCH_MOVIES_SUCCESS,
    movies,
    languages
  };
}

export function fetchFailure(error) {
  return {
    type: FETCH_MOVIES_FAILURE,
    error
  };
}

/*-----------------------------------------------------------------------------------------------------------------*/

// Action Generators of filters

export function addFilter(key, value) {
  return {
    type: ADD_FILTER,
    key,
    value
  };
}

export function removeFilter(key, value) {
  return {
    type: REMOVE_FILTER,
    key,
    value
  };
}

export function clearFilter() {
  return {
    type: CLEAR_FILTER
  };
}
