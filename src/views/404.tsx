import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Content from './layout/Content';
import Logo from '../components/Logo';
import { linkStyles } from '../style-utils';

const StyledContent = styled(Content)`
  flex-direction: column;
  align-items: center;
  padding-top: 200px;
  width: 400px;
  text-align: center;
  margin: 0 auto;
`;

const StyledTitle = styled.h3`
  font-size: ${({ theme }) => theme.sizes.large};
  font-weight: bold;
  margin: 24px 0;
`;

const StyledLink = styled(Link)`
  ${({ theme }) => linkStyles(theme)}
`;

const StyledDescription = styled.div`
  font-size: ${({ theme }) => theme.sizes.medium};
  line-height: 32px;
`;

const NotFoundPage = () => {
  return (
    <StyledContent>
      <Logo />
      <StyledTitle>404 - Not Found</StyledTitle>
      <StyledDescription>
        Sorry, the page you are looking for does not exist. You can always go
        back to the <StyledLink to="/">homepage</StyledLink>.
      </StyledDescription>
    </StyledContent>
  );
};

export default NotFoundPage;
