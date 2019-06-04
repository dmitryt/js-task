// A placeholder is used to reserve space for content that soon will appear in a layout.
import * as React from 'react';
import styled from 'styled-components';

const BlockWithBackground = styled.div`
  background-color: ${({ theme }) => theme.colors.bgGrey};
`;

const MediumBlockWithBackground = styled(BlockWithBackground)`
  height: 24px;
  max-width: 210px;
`;

const SmallBlockWithBackground = styled(BlockWithBackground)`
  height: 12px;
`;

const StyledContent = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.border};
  display: flex;
  padding: 12px;
  box-sizing: border-box;
`;

const StyledDetails = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 24px;
  width: 210px;
  justify-content: space-between;
`;

const StyledThumbnail = styled(BlockWithBackground)`
  width: 80px;
`;

const StyledName = styled(MediumBlockWithBackground)``;

const StyledDescription = styled(SmallBlockWithBackground)`
  margin-top: -6px;
`;

const StyledLink = styled(SmallBlockWithBackground)`
  width: 60px;
`;

interface IProps {
  className?: string;
}

const Placeholder = ({ className }: IProps) => (
  <StyledContent className={className}>
    <StyledThumbnail />
    <StyledDetails>
      <StyledName />
      <StyledDescription />
      <StyledLink />
    </StyledDetails>
  </StyledContent>
);

export default Placeholder;
