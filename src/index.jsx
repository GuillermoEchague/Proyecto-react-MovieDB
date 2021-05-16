import React from 'react';
import ReactDOM from 'react-dom';
import {Provider } from 'react-redux'; 
import { compose} from 'redux';
import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import reducer from './reducers'; 
import App from './routes/App';

const initialState = {
  favoriteMovies:[],
  sectionActive : 'Movies'
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, initialState, composeEnhancers(applyMiddleware(logger)));


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider >,
  document.getElementById('root'),
);

