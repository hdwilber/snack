import * as React from 'react';
import { render } from 'react-dom';
import App from './root';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import { Provider } from 'react-redux';

import configureStore from './configureStore';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

const store = configureStore({});

render(
  <Provider store={store}>
    <MuiThemeProvider>
      <App/> 
    </MuiThemeProvider>
  </Provider>,
  document.querySelector('#ReactRoot'),
);