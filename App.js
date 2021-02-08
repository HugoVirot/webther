import React from 'react';
import TabNavigator from './navigation/TabNavigator.js'

// react-redux-rematch
import { Provider } from 'react-redux'
import { init } from '@rematch/core'
import { nameModel } from './models/NameModel'
import 'redux'

const store = init({
  models: { nameModel },
});


export default function App() {
  return (
    <Provider store={store}>
      <TabNavigator />
    </Provider>
  );
}