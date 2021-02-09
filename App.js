import React from 'react';
import TabNavigator from './navigation/TabNavigator.js'

// react-redux-rematch
import { Provider } from 'react-redux'
import { init } from '@rematch/core'
import { nameModel } from './models/NameModel'
import { citiesModel } from './models/CitiesModel'
import 'redux'

const store = init({
  models: { nameModel, citiesModel },
});


export default function App() {
  return (
    <Provider store={store}>
      <TabNavigator />
    </Provider>
  );
}