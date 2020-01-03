import React, {Component} from 'react';
import NavStack from './src/userauth/navstack.js';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import configureStore from './configureStore';

const {persistor, store} = configureStore();

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <NavStack />
        </PersistGate>
      </Provider>
    );
  }
}
