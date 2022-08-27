import React from 'react';
import Navigation from './Navigation';
import { Login } from './screens';
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
}

export default App;
