import * as React from 'react';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import { Route, Switch, Redirect } from 'react-router';
import { ConnectedRouter } from 'connected-react-router';
import { createBrowserHistory } from 'history';

import Page from './views/layout/Page';
import CarsPage from './views/cars/Index';
import CarPage from './views/cars/Show';
import NotFoundPage from './views/404';

import configureStore from './store/configure';
import theme, { GlobalStyle } from './themes/default';

import '../server';

const history = createBrowserHistory();

const store = configureStore(history);

render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <>
        <ConnectedRouter history={history}>
          <Page>
            <Switch>
              <Route exact path="/cars" component={CarsPage} />
              <Route exact path="/cars/:stockNumber" component={CarPage} />
              <Route exact path="/not-found" component={NotFoundPage} />
              <Redirect exact from="/" to="/cars" />
              <Route component={NotFoundPage} />
            </Switch>
          </Page>
        </ConnectedRouter>
        <GlobalStyle />
      </>
    </ThemeProvider>
  </Provider>,
  document.getElementById('root')
);
