import {
  ADD_FILTER,
  REMOVE_FILTER,
  CLEAR_FILTER
} from '../actions/actionTypes';

const initialState = {
  filters: new Array()
};

export default function filtersReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_FILTER:
      return {
        filters: [...state.filters, action.value]
      };
    case REMOVE_FILTER:
      let result = [...state.filters];
      let filteredArray = result.filter((item) => {
        if (item === action.value) {
        } else return item;
      });
      return {
        filters: filteredArray
      };
    case CLEAR_FILTER:
      return { filters: [] };
    default:
      return state;
  }
}
