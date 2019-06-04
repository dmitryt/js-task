import * as React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Logo from '../../components/Logo';

const StyledHeader = styled.header`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.bgWhite};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  height: 80px;
  justify-content: flex-end;
  flex-shrink: 0;
  font-size: 14px;
`;

const StyledLeftColumn = styled.div`
  flex: 1 auto;
  padding-left: 24px;
`;

const StyledLink = styled(Link)`
  justify-content: center;
  margin-right: 24px;
  &:link,
  &:visited {
    color: ${({ theme }) => theme.colors.text};
    text-decoration: none;
  }
  &:hover {
    text-decoration: underline;
  }
`;

interface IProps {
  className?: string;
}

const Header = ({ className }: IProps) => (
  <StyledHeader className={className} data-testid="header">
    <StyledLeftColumn>
      <Link to="/">
        <Logo />
      </Link>
    </StyledLeftColumn>
    <nav>
      <StyledLink data-testid="link" to="/purchase">
        Purchase
      </StyledLink>
      <StyledLink data-testid="link" to="/favorites">
        My Orders
      </StyledLink>
      <StyledLink data-testid="link" to="/sell">
        Sell
      </StyledLink>
    </nav>
  </StyledHeader>
);

export default Header;
