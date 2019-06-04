import React, { ReactNode } from 'react';
import styled from 'styled-components';

import Header from './Header';
import Footer from './Footer';

const StyledPage = styled.div`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 12px;
  height: 100%;
  padding: 80px 0;
  overflow: hidden;
`;

const StyledHeader = styled(Header)`
  position: fixed;
  top: 0;
  width: 100%;
`;

const StyledFooter = styled(Footer)`
  position: fixed;
  bottom: 0;
  width: 100%;
`;

interface IProps {
  children: ReactNode;
}

const Page = ({ children }: IProps) => {
  return (
    <StyledPage>
      <StyledHeader />
      {children}
      <StyledFooter />
    </StyledPage>
  );
};

export default Page;
