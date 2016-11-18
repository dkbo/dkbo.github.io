import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux'
import { Router, Route, browserHistory } from 'react-router'
import App from './containers/app';
import configureStore from './store/configureStore';

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store)

render(
    <Provider store={ store }>
      <Router history={history}>
        <Route path='/' component={App}>
          
        </Route>
      </Router>
    </Provider>,
     document.querySelector("#app")
);
