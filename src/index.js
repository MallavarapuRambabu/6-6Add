import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

let initial = {
  details: [],
};

//
export const Add = 'add';


function reducer(state = initial, action) {
  if (action.type === Add) {
    return {
      ...state,
      details: [...state.details, action.payload],
    };
  }
  return state;
}


const store = createStore(reducer);
console.log("store",store.getState())


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}> {/* Fix the typo here */}
      <App />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
