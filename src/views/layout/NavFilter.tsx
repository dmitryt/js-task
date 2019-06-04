// Component which renders list of items, e.g. car list
import React, { useCallback, useState } from 'react';
import styled from 'styled-components';

import Select from '../../components/Select';
import Button from '../../components/Button';
import { IQuery } from '../../store/cars/types';
import { IDictionary } from '../../store/dictionaries/types';

const StyledContainer = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.border};
  padding: 24px;
`;

const ContentRight = styled.div`
  text-align: right;
`;

export interface IInputProps {
  manufacturers: IDictionary;
  colors: IDictionary;
  query: IQuery;
}

export interface IOutputProps {
  onSubmit: (f: IQuery) => void;
}

type IProps = IInputProps & IOutputProps;

const NavFilter = ({ manufacturers, colors, query, onSubmit }: IProps) => {
  const [filters, setFilters] = useState(query);
  const setColor = useCallback(
    (color: string) => {
      setFilters({ ...filters, color });
    },
    [filters]
  );
  const setManufacturer = useCallback(
    (manufacturer: string) => {
      setFilters({ ...filters, manufacturer });
    },
    [filters]
  );
  const onClick = () => onSubmit(filters);
  return (
    <StyledContainer data-testid="navfilter">
      <Select
        label="Color"
        name="color"
        options={colors.options || []}
        value={filters.color}
        onChange={setColor}
      />
      <Select
        label="Manufacturer"
        name="manufacturer"
        options={manufacturers.options || []}
        value={filters.manufacturer}
        onChange={setManufacturer}
      />
      <ContentRight>
        <Button label="Filter" onClick={onClick} />
      </ContentRight>
    </StyledContainer>
  );
};

export default NavFilter;
