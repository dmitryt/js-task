// A standard button.
import * as React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: ${({ theme }) => theme.colors.button};
  color: ${({ theme }) => theme.colors.textWhite};
  border: 0;
  width: 128px;
  height: 32px;
  font-size: ${({ theme }) => theme.sizes.small};
  &:active {
    background-color: ${({ theme }) => theme.colors.buttonPressed};
  }
`;

interface IProps {
  label: string;
  onClick: () => void;
}

const Button = ({ label, onClick }: IProps) => (
  <StyledButton type="button" onClick={onClick} data-testid="button">
    {label}
  </StyledButton>
);

export default Button;
