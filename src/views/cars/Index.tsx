import * as React from 'react';
import styled from 'styled-components';

import Content from '../layout/Content';

import Cars from '../../containers/Cars';
import NavFilter from '../../containers/NavFilter';
import Pagination from '../../containers/Pagination';
import ListHeader from '../../containers/ListHeader';

const StyledContent = styled(Content)`
  display: flex;
  flex-direction: row;
  padding: 24px;
`;

const LeftColumn = styled.div`
  margin-right: 24px;
`;

const RightColumn = styled.div`
  flex: 1 auto;
`;

const Index = () => (
  <StyledContent>
    <>
      <LeftColumn>
        <NavFilter />
      </LeftColumn>
      <RightColumn>
        <ListHeader />
        <Cars />
        <Pagination />
      </RightColumn>
    </>
  </StyledContent>
);

export default Index;
