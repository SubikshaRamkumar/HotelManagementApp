import React from 'react';
import { Provider } from 'react-redux';
import store from './Redux/store';
import Appr from './Appr';

const Appfr = () => {
  return (
    <Provider store={store}>
      <Appr/>
    </Provider>
  );
};

export default Appfr;