// Component which renders list of items, e.g. car list
import * as React from 'react';
import styled from 'styled-components';

import ListItem from './ListItem';
import { ICar } from '../../services/api/model/car';
import Placeholder from '../../components/Placeholder';

const StyledList = styled.div`
  height: calc(100% - 115px);
  overflow: auto;
`;
const StyledListItem = styled(ListItem)`
  margin-bottom: 12px;
  height: 90px;
`;
const StyledPlaceholder = styled(Placeholder)`
  margin-bottom: 12px;
  height: 90px;
`;

export interface IInputProps {
  cars: ICar[];
  isCarsLoading: boolean;
}

type IProps = IInputProps;

const List = ({ cars, isCarsLoading }: IProps) => {
  const Component = isCarsLoading ? StyledPlaceholder : StyledListItem;
  return (
    <StyledList data-testid="list">
      {cars.map(item => (
        <Component key={item.stockNumber} data={item} />
      ))}
    </StyledList>
  );
};

export default List;
