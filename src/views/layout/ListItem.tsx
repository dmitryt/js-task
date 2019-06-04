import * as React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { ICar } from '../../store/cars/types';
import { prepareDescription } from '../../store/cars/utils';
import { linkStyles } from '../../style-utils';
import { cars } from '../../assets/images';

const StyledContent = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.border};
  display: flex;
  font-size: 12px;
  padding: 12px;
  box-sizing: border-box;
`;

const ListItemDetails = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 24px;
  margin-left: 24px;
`;

const ListItemThumbnail = styled.img`
  background-color: ${({ theme }) => theme.colors.border};
  width: 80px;
`;

const ListItemName = styled.h4`
  font-size: 18px;
  font-weight: bold;
  margin: 0;
`;

const ListItemDescription = styled.span``;

const ListItemLink = styled(Link)`
  ${({ theme }) => linkStyles(theme)}
`;

interface IProps {
  data: ICar;
  className?: string;
}

const ListItem = ({ data, className }: IProps) => {
  const description = prepareDescription(data);
  return (
    <StyledContent className={className}>
      <ListItemThumbnail src={cars[0]} />
      <ListItemDetails>
        <ListItemName title={`${data.manufacturerName} ${data.modelName}`}>
          {data.manufacturerName}&nbsp;{data.modelName}
        </ListItemName>
        <ListItemDescription title={description || ''}>
          {description}
        </ListItemDescription>
        <ListItemLink to={`/cars/${data.stockNumber}`}>
          View Details
        </ListItemLink>
      </ListItemDetails>
    </StyledContent>
  );
};

export default ListItem;
