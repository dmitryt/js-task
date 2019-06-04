// A standard button.
import * as React from 'react';
import styled from 'styled-components';

import Button from './Button';

const StyledContent = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.border};
  padding: 24px;
  font-size: ${({ theme }) => theme.sizes.small};
  box-sizing: border-box;
  width: 280px;
`;

const StyledFooter = styled.div`
  text-align: right;
`;

interface IProps {
  message: string;
  buttonLabel: string;
  onAccept: () => void;
}

const MessageBox = ({ buttonLabel, message, onAccept }: IProps) => (
  <StyledContent>
    {message}
    <StyledFooter>
      <Button onClick={onAccept} label={buttonLabel} />
    </StyledFooter>
  </StyledContent>
);

export default MessageBox;
