import * as React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  align-items: center;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  color: ${({ theme }) => theme.colors.text};
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  height: 80px;
  justify-content: center;
`;

interface IProps {
  className?: string;
}

const Footer = ({ className }: IProps) => (
  <StyledFooter data-testid="footer">&copy;Auto1 Group 2019</StyledFooter>
);

export default Footer;
