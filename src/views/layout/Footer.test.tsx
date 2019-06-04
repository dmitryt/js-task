// ETA: 30 minutes
import React from 'react';
import { render, cleanup } from 'react-testing-library';
import 'jest-dom/extend-expect';

import Footer from './Footer';
import { prepareComponent } from '../../test-utils';

const Component = prepareComponent(Footer);

const renderComponent = () => {
  const { container } = render(<Component />);
  return container;
};

afterEach(cleanup);

describe('<Footer />', () => {
  it('should render "©Auto1 Group 2019"', () => {
    const el = renderComponent();
    expect(el).toHaveTextContent('©Auto1 Group 2019');
  });
});
