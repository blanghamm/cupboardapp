import React, {Component} from 'react';
import NavStack from './src/userauth/navstack.js';
import thunkMiddleware from 'redux-thunk';
import {createStore, applyMiddleware} from 'redux';
import rootReducer from './src/store/reducers/rootReducer';
import {Provider} from 'react-redux';
import {composeWithDevTools} from 'remote-redux-devtools';

const middleware = applyMiddleware(thunkMiddleware);

const store = createStore(rootReducer, composeWithDevTools(middleware));

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <NavStack />
      </Provider>
    );
  }
}
