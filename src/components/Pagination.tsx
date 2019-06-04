// A component to render a pagination.
import * as React from 'react';
import styled from 'styled-components';

import { linkStyles } from '../style-utils';

const StyledContent = styled.div`
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  & > span {
    margin-right: 24px;
  }
`;

const StyledLink = styled.span`
  ${({ theme }) => linkStyles(theme)}
`;

export interface IInputProps {
  currentPage: number;
  totalPages: number;
}

export interface IOutputProps {
  onChange: (n: number) => void;
}

export interface IProps extends IInputProps, IOutputProps {}

const Pagination = ({ currentPage, totalPages, onChange }: IProps) => (
  <StyledContent>
    {currentPage === 1 ? (
      <>
        <span data-testid="first" className="disabled">
          First
        </span>
        <span data-testid="previous" className="disabled">
          Previous
        </span>
      </>
    ) : (
      <>
        <StyledLink data-testid="first" onClick={() => onChange(1)}>
          First
        </StyledLink>
        <StyledLink
          data-testid="previous"
          onClick={() => onChange(currentPage - 1)}
        >
          Previous
        </StyledLink>
      </>
    )}
    <span data-testid="current">
      Page {currentPage} of {totalPages}
    </span>
    {currentPage === totalPages ? (
      <>
        <span data-testid="next" className="disabled">
          Next
        </span>
        <span data-testid="last" className="disabled">
          Last
        </span>
      </>
    ) : (
      <>
        <StyledLink
          data-testid="next"
          onClick={() => onChange(currentPage + 1)}
        >
          Next
        </StyledLink>
        <StyledLink data-testid="last" onClick={() => onChange(totalPages)}>
          Last
        </StyledLink>
      </>
    )}
  </StyledContent>
);

export default Pagination;
