import React from 'react';
import { render, cleanup, wait, getByTestId } from 'react-testing-library';
import 'jest-dom/extend-expect';

import CarDetails from './CarDetails';
import { prepareComponent } from '../../test-utils';

const Component = prepareComponent(CarDetails);

const car = {
  stockNumber: '12345',
  manufacturerName: 'BMW',
  modelName: 'Santana',
  color: 'green',
  mileage: {
    number: 64382,
    unit: 'km'
  },
  fuelType: 'Diesel',
  pictureUrl: ''
};

const renderComponent = () => {
  const props = { car, isFavourite: false, onToggleFavourite: () => {} };
  const { container } = render(<Component {...props} />);
  return container;
};

afterEach(cleanup);

describe('<CarDetails />', () => {
  it('should render car manufacturer name', async () => {
    const el = renderComponent();
    await wait(() => {
      const title = getByTestId(el, 'title');
      expect(title).toHaveTextContent('BMW');
    });
  });

  it('should render car model name', async () => {
    const el = renderComponent();
    await wait(() => {
      const title = getByTestId(el, 'title');
      expect(title).toHaveTextContent('Santana');
    });
  });

  it('should render car stock number', async () => {
    const el = renderComponent();
    await wait(() => {
      const spec = getByTestId(el, 'specification');
      expect(spec).toHaveTextContent('Stock # 12345');
    });
  });

  it('should render car mileage', async () => {
    const el = renderComponent();
    await wait(() => {
      const spec = getByTestId(el, 'specification');
      expect(spec).toHaveTextContent('64382 km');
    });
  });

  it('should render car fule type', async () => {
    const el = renderComponent();
    await wait(() => {
      const spec = getByTestId(el, 'specification');
      expect(spec).toHaveTextContent('Diesel');
    });
  });

  it('should render car color', async () => {
    const el = renderComponent();
    await wait(() => {
      const spec = getByTestId(el, 'specification');
      expect(spec).toHaveTextContent('green');
    });
  });

  it('should render "Save" favorites <Button />', async () => {
    const el = renderComponent();
    await wait(() => {
      const spec = getByTestId(el, 'button');
      expect(spec).toHaveTextContent('Save');
    });
  });
});
