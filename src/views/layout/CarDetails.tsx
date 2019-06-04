import React from 'react';
import styled from 'styled-components';
import { ICar } from '../../services/api/model/car';
import { prepareDescription } from '../../store/cars/utils';
import MessageBox from '../../components/MessageBox';

import { cars } from '../../assets/images';

const StyledThumbnailWrapper = styled.div`
  height: 320px;
  background-color: ${({ theme }) => theme.colors.border};
  width: 100%;
  text-align: center;
`;

const StyledThumbnail = styled.img`
  max-height: 100%;
  overflow: hidden;
`;

const StyledContent = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
`;

const StyledNotification = styled.div`
  font-size: ${({ theme }) => theme.sizes.small};
`;

const StyledName = styled.h3`
  font-size: ${({ theme }) => theme.sizes.large};
  margin-top: 0;
  margin-bottom: 24px;
`;

const StyledSpecification = styled.div`
  font-size: ${({ theme }) => theme.sizes.medium};
  margin-bottom: 24px;
`;

const StyledDetails = styled.div`
  width: 800px;
  display: flex;
  padding-top: 24px;
  line-height: 24px;
`;

const LeftColumn = styled.div`
  padding-right: 24px;
`;

export interface IInputProps {
  car: ICar;
  isCarFavourite: boolean;
}

interface IOutputProps {
  onToggleFavourite: () => void;
}

type IProps = IInputProps & IOutputProps;

const CarDetails = ({ car, isCarFavourite, onToggleFavourite }: IProps) => (
  <StyledContent>
    {car ? (
      <>
        <StyledThumbnailWrapper>
          <StyledThumbnail src={cars[0]} />
        </StyledThumbnailWrapper>
        <StyledDetails>
          <LeftColumn>
            <StyledName data-testid="title">
              {car.manufacturerName}&nbsp;{car.modelName}
            </StyledName>
            <StyledSpecification data-testid="specification">
              {prepareDescription(car)}
            </StyledSpecification>
            <StyledNotification>
              This car is currently available and can be delivered as soon as
              tomorrow morning. Please be aware that delivery times shown in
              this page are not definitive and can change due to bad whether
              conditions.
            </StyledNotification>
          </LeftColumn>
          <div>
            {isCarFavourite ? (
              <MessageBox
                message="This car is already in your collection of favourite items. Please, click the button, if you want to remove it from your collection"
                buttonLabel="Remove"
                onAccept={onToggleFavourite}
              />
            ) : (
              <MessageBox
                message="If you like this car, click the button and save it in your collection of favourite items"
                buttonLabel="Save"
                onAccept={onToggleFavourite}
              />
            )}
          </div>
        </StyledDetails>
      </>
    ) : null}
  </StyledContent>
);

export default CarDetails;
