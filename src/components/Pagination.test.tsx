// ETA: 1-2 hours
import React from 'react';
import {
  render,
  cleanup,
  getByTestId,
  waitForElement,
  wait
} from 'react-testing-library';
import 'jest-dom/extend-expect';

import Pagination from './Pagination';
import { prepareComponent } from './../test-utils';

const Component = prepareComponent(Pagination);

const renderComponent = (currentPage: number) => {
  const props = { currentPage, totalPages: 10, onChange: () => {} };
  const { container } = render(<Component {...props} />);
  return container;
};

afterEach(cleanup);

describe('<Pagination />', () => {
  it('should render "First" page link', async () => {
    const container = renderComponent(2);
    await wait(() => {
      expect(getByTestId(container, 'first')).toBeInTheDocument();
    });
  });

  it('should render "Previous" page link', async () => {
    const container = renderComponent(2);
    await wait(() => {
      expect(getByTestId(container, 'previous')).toBeInTheDocument();
    });
  });

  it('should render "Page 2 of 10"', async () => {
    const container = renderComponent(2);
    const currentPageEl = await waitForElement(() =>
      getByTestId(container, 'current')
    );
    expect(currentPageEl).toHaveTextContent('Page 2 of 10');
  });

  it('should render "Next" page link', async () => {
    const container = renderComponent(2);
    await wait(() => {
      expect(getByTestId(container, 'next')).toBeInTheDocument();
    });
  });

  it('should render "Last" page link', async () => {
    const container = renderComponent(2);
    await wait(() => {
      expect(getByTestId(container, 'last')).toBeInTheDocument();
    });
  });

  describe('on first page', () => {
    let container: HTMLElement;
    beforeEach(() => {
      container = renderComponent(1);
    });
    it('should disable "First" page link', async () => {
      const el = await waitForElement(() => getByTestId(container, 'first'));
      expect(el).toHaveClass('disabled');
    });

    it('should disable "Previous" page link', async () => {
      const el = await waitForElement(() => getByTestId(container, 'previous'));
      expect(el).toHaveClass('disabled');
    });

    it('should enable "Next" page link', async () => {
      const el = await waitForElement(() => getByTestId(container, 'next'));
      expect(el).not.toHaveClass('disabled');
    });
  });

  describe('on not last page and not first page', () => {
    let container: HTMLElement;
    beforeEach(() => {
      container = renderComponent(2);
    });
    it('should enable "First" page link', async () => {
      const el = await waitForElement(() => getByTestId(container, 'first'));
      expect(el).not.toHaveClass('disabled');
    });

    it('should enable "Previous" page link', async () => {
      const el = await waitForElement(() => getByTestId(container, 'previous'));
      expect(el).not.toHaveClass('disabled');
    });

    it('should enable "Next" page link', async () => {
      const el = await waitForElement(() => getByTestId(container, 'next'));
      expect(el).not.toHaveClass('disabled');
    });

    it('should enable "Last" page link', async () => {
      const el = await waitForElement(() => getByTestId(container, 'last'));
      expect(el).not.toHaveClass('disabled');
    });
  });

  describe('on last page', () => {
    let container: HTMLElement;
    beforeEach(() => {
      container = renderComponent(10);
    });
    it('should disable "Next" page link', async () => {
      const el = await waitForElement(() => getByTestId(container, 'next'));
      expect(el).toHaveClass('disabled');
    });

    it('should disable "Last" page link', async () => {
      const el = await waitForElement(() => getByTestId(container, 'last'));
      expect(el).toHaveClass('disabled');
    });
  });
});
