// ETA: 1 Hour
import React from 'react';
import {
  render,
  cleanup,
  wait,
  getByTestId,
  getAllByTestId
} from 'react-testing-library';
import 'jest-dom/extend-expect';
// Cannot use jest.mock in CodeSandBox ;(
// https://github.com/codesandbox/codesandbox-client/issues/513
import { BrowserRouter } from 'react-router-dom';

import Header from './Header';
import { prepareComponent } from '../../test-utils';

const Component = prepareComponent(Header);

const renderComponent = () => {
  const { container } = render(
    <BrowserRouter>
      <Component />
    </BrowserRouter>
  );
  return container;
};

afterEach(cleanup);
describe('<Header />', () => {
  it('should render <Logo />', async () => {
    const el = renderComponent();
    await wait(() => {
      expect(getByTestId(el, 'logo')).toBeInTheDocument();
    });
  });

  it('should render "My Orders" <Link to="/favorites" />', async () => {
    const el = renderComponent();
    await wait(() => {
      const hrefs = getAllByTestId(el, 'link').map(
        (el: HTMLAnchorElement) => (el.href || '').split('/').slice(-1)[0]
      );
      expect(hrefs).toEqual(expect.arrayContaining(['favorites']));
    });
  });
});
