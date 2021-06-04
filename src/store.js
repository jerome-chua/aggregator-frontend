import React, { useReducer } from 'react';
import axios from 'axios';

axios.defaults.withCredentials = true;

// Initial State
export const initialState = {

};

// Reducer function
export function foodReducer(state, action) {
  switch (action.type) {

  }

  default:
    return state
}

// Types 

// Action Creators

// Provider
export const foodContext = React.createContext();
const { Provider } = foodContext;

export function foodProvider({ children }) {
  const [store, dispatch] = useReducer(foodReducer);

  return (
    <Provider value={{ store, dispatch }}>
      {children}
    </Provider>
  );
}

// Backend requests
const REACT_APP_BACKEND_URL = process.env.REACT_APP_BACKEND_URL || 'http://localhost:3004';
