import { createStore, combineReducers } from 'redux';

// Initial state
const initialState = {
  isLoggedIn: false,
};

// Actions
const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';

// Action creators
export const login = () => {
  return {
    type: LOGIN,
  };
};

export const logout = () => {
  return {
    type: LOGOUT,
  };
};

// Auth reducer
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        isLoggedIn: true,
      };
    case LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
      };
    default:
      return state;
  }
};

// Root reducer
const rootReducer = combineReducers({
  auth: authReducer,
});

// Store
const store = createStore(rootReducer);

export default store;