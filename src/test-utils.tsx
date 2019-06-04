import React, { ElementType, ComponentProps } from 'react';
import { ThemeProvider } from 'styled-components';
import { createBrowserHistory } from 'history';

import { IAppState } from './store';
import { initialState as carsState } from './store/cars';
import { initialState as dictionariesState } from './store/dictionaries';
import { initialState as metadataState } from './store/metadata';

import theme from './themes/default';

export const prepareComponent = (Component: ElementType) => (
  props: ComponentProps<any>
) => (
  <ThemeProvider theme={theme}>
    <Component {...props} />
  </ThemeProvider>
);

const history = createBrowserHistory();

export const getState = (): IAppState => ({
  cars: carsState,
  dictionaries: dictionariesState,
  metadata: metadataState,
  router: {
    context: {},
    setState: () => {},
    forceUpdate: () => {},
    render: () => null,
    refs: {},
    state: {},
    props: { history }
  }
});
