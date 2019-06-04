import React from 'react';
import styled from 'styled-components';
import { RouteComponentProps } from 'react-router-dom';

import Content from '../layout/Content';
import CarDetails from '../../containers/CarDetails';

const StyledContent = styled(Content)`
  display: flex;
  flex-direction: row;
`;

interface IParams {
  stockNumber: string;
}

const Show = ({
  match: {
    params: { stockNumber }
  }
}: RouteComponentProps<IParams>) => {
  return (
    <StyledContent>
      <CarDetails stockNumber={stockNumber} />
    </StyledContent>
  );
};

export default Show;
