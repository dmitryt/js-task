import React from 'react';
import styled from 'styled-components';

import Select from '../../components/Select';
import { getResultsNumber } from '../../store/cars/utils';

const StyledContent = styled.div`
  display: flex;
`;
const LeftColumn = styled.div`
  flex: 1 auto;
  font-size: ${({ theme }) => theme.sizes.medium};
`;
const LeftColumnHeader = styled.h4`
  font-weight: bold;
  margin: 0 0 12px;
`;

const RightColumn = styled.div`
  width: 240px;
`;

export interface IInputProps {
  sort: string;
  page: number;
  total: number;
  itemsPerPage: number;
}

export interface IOutputProps {
  onSortChange: (s: string) => void;
}

type IProps = IInputProps & IOutputProps;

const sortOptions = [
  { value: '', label: 'None' },
  { value: 'asc', label: 'Mileage - Ascending' },
  { value: 'des', label: 'Mileage - Descending' }
];

const ListHeader = ({
  page,
  itemsPerPage,
  total,
  sort,
  onSortChange
}: IProps) => (
  <StyledContent>
    <LeftColumn>
      <LeftColumnHeader>Available Cars</LeftColumnHeader>
      <div>
        {`Showing ${getResultsNumber(
          page,
          itemsPerPage,
          total
        )} of ${total} results`}
      </div>
    </LeftColumn>
    <RightColumn>
      <Select
        name="sortBy"
        label="Sort by"
        options={sortOptions}
        value={sort}
        onChange={onSortChange}
      />
    </RightColumn>
  </StyledContent>
);

export default ListHeader;
