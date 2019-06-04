import React, { ReactNode } from 'react';
import styled from 'styled-components';

// minus header + footer height
const StyledContent = styled.main`
  box-sizing: border-box;
  flex-grow: 1;
  height: 100%;
  overflow: auto;
`;

interface IProps {
  children: ReactNode;
}

const Content = ({ children, ...rest }: IProps) => (
  <StyledContent {...rest}>{children}</StyledContent>
);

export default Content;
