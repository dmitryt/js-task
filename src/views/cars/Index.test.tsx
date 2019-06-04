// ETA: 2-3 hours

//!!!! Cannot test components with containers, because it's not possible to use jest.mock inside CodeSandBox
// https://github.com/codesandbox/codesandbox-client/issues/513
import React from 'react';
import { render, cleanup, wait, getByTestId } from 'react-testing-library';
import 'jest-dom/extend-expect';

import Index from './Index';
import { prepareComponent } from '../../test-utils';

const Component = prepareComponent(Index);

const renderComponent = () => {
  const { container } = render(<Component />);
  return container;
};

describe.skip('<Index />', () => {
  afterEach(cleanup);
  it('should not render Welcome!', () => {
    const el = renderComponent();
    expect(el).not.toHaveTextContent('Welcome!');
  });

  it('should render <Header />', async () => {
    const el = renderComponent();
    await wait(() => {
      expect(getByTestId(el, 'header')).toBeInTheDocument();
    });
  });

  it('should render <Footer /> at the bottom', async () => {
    const el = renderComponent();
    await wait(() => {
      expect(getByTestId(el, 'footer')).toBeInTheDocument();
    });
  });

  it('should render <NavFilter />', async () => {
    const el = renderComponent();
    await wait(() => {
      expect(getByTestId(el, 'navfilter')).toBeInTheDocument();
    });
  });

  it('should render sort <Select /> by manufacturer or color', () => {
    expect(false).toBe(true);
  });

  it('should render "10 of 100 results"', () => {
    expect(false).toBe(true);
  });

  it('should render <List /> of cars', async () => {
    const el = renderComponent();
    await wait(() => {
      expect(getByTestId(el, 'list')).toBeInTheDocument();
    });
  });

  it('should render favorite cars first', () => {
    expect(false).toBe(true);
  });

  it('should render cars manufacturer and model name', () => {
    expect(false).toBe(true);
  });

  it('should render cars stock number, mileage, fuel type and color', () => {
    expect(false).toBe(true);
  });

  it('when click on "View details" should navigate to show car page', () => {
    expect(false).toBe(true);
  });

  describe('should stick elements on scroll or resize', () => {
    it('should stick <Header /> always on top', () => {
      expect(false).toBe(true);
    });

    it('should stick <FilterNav /> always on left top side', () => {
      expect(false).toBe(true);
    });
  });
});
