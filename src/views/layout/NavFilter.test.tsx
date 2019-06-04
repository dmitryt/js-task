// ETA: 2 hours
import React from 'react';
import {
  render,
  cleanup,
  wait,
  getByTestId,
  getAllByTestId
} from 'react-testing-library';
import 'jest-dom/extend-expect';

import NavFilter from './NavFilter';
import { prepareComponent } from '../../test-utils';

const Component = prepareComponent(NavFilter);

const renderComponent = () => {
  const props = {
    manufacturers: [],
    colors: [],
    query: {},
    onSubmit: () => {}
  };
  const { container } = render(<Component {...props} />);
  return container;
};

afterEach(cleanup);

describe('<NavFilter />', () => {
  it('should render "Color" <Label />', async () => {
    const el = renderComponent();
    await wait(() => {
      const labels = getAllByTestId(el, 'select-label').map(
        (el: HTMLElement) => el.innerHTML
      );
      expect(labels).toEqual(expect.arrayContaining(['Color']));
    });
  });

  it('should render colors <Select />', async () => {
    const el = renderComponent();
    await wait(() => {
      const controls = getAllByTestId(el, 'select-control').map(
        (el: HTMLElement) => el.getAttribute('data-testvalue')
      );
      expect(controls).toEqual(expect.arrayContaining(['color']));
    });
  });

  it('should render "Manufacturer" <Label />', async () => {
    const el = renderComponent();
    await wait(() => {
      const labels = getAllByTestId(el, 'select-label').map(
        (el: HTMLElement) => el.innerHTML
      );
      expect(labels).toEqual(expect.arrayContaining(['Manufacturer']));
    });
  });

  it('should render manufacturers <Select />', async () => {
    const el = renderComponent();
    await wait(() => {
      const controls = getAllByTestId(el, 'select-control').map(
        (el: HTMLElement) => el.getAttribute('data-testvalue')
      );
      expect(controls).toEqual(expect.arrayContaining(['manufacturer']));
    });
  });

  it('should render "Filter" <Button />', async () => {
    const el = renderComponent();
    await wait(() => {
      const spec = getByTestId(el, 'button');
      expect(spec).toHaveTextContent('Filter');
    });
  });

  it.skip('should change address bar to selected values on "Filter" press', () => {
    /* Valid combinations:
     ?color=black&manufacturer=BMW
     ?color=black&manufacturer=
     ?color=&manufacturer=BMW
     ?color=&manufacturer=
     ?color=black
     ?manufacturer=BMW
     ?color=
     ?manufacturer=
     ?
    */
    expect(false).toBe(true);
  });
});
