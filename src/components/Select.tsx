// Default Select.
import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { IDictionaryOption } from '../store/dictionaries/types';

const StyledContent = styled.label`
  font-size: 12px;
`;

const StyledSelect = styled.div`
  height: 30px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  background: none;
  display: block;
  margin: 12px 0;
  font-size: ${({ theme }) => theme.sizes.small};
  position: relative;
  width: 240px;
  padding-left: 12px;
  box-sizing: border-box;
  line-height: 30px;
`;

const StyledDropdown = styled.ul`
  border: 1px solid ${({ theme }) => theme.colors.border};
  background-color: ${({ theme }) => theme.colors.bgWhite};
  position: absolute;
  margin: 0;
  padding: 0;
  width: 100%;
  outline: none;
  z-index: 1;
  top: 40px;
  left: 0;
`;

const StyledArrow = styled.span`
  position: absolute;
  right: 0;
  width: 0;
  height: 0;
  right: 12px;
  top: 12px;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
`;

const StyledArrowUp = styled(StyledArrow)`
  border-bottom: 6px solid ${({ theme }) => theme.colors.border};
`;

const StyledArrowDown = styled(StyledArrow)`
  border-top: 6px solid ${({ theme }) => theme.colors.border};
`;

const StyledLabel = styled.span`
  font-size: ${({ theme }) => theme.sizes.xsmall};
`;

const StyledOption = styled.li`
  cursor: pointer;
  box-sizing: border-box;
  list-style-type: none;
  width: 100%;
  height: 30px;
  line-height: 30px;
  padding-left: 12px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  &:hover {
    background-color: ${({ theme }) => theme.colors.dropdownItem};
    color: ${({ theme }) => theme.colors.textWhite};
  }
  &:last-child {
    border-bottom: none;
  }
`;

interface IProps {
  label: string;
  value: string;
  name: string;
  options: IDictionaryOption[] | null;
  onChange: (v: string) => void;
}

const Select = ({ label, onChange, options, value, name }: IProps) => {
  const [isDropdownOpened, setDropdownOpened] = useState(false);
  const dropdownEl = useRef(null);
  const toggleDropdown = () => setDropdownOpened(!isDropdownOpened);
  const closeDropdown = () => setDropdownOpened(false);
  const labelByValue: { [l: string]: string } = (options || []).reduce(
    (acc, { label, value }) => ({ ...acc, [value]: label }),
    {}
  );
  useEffect(() => {
    if (isDropdownOpened && dropdownEl.current) {
      dropdownEl.current.focus();
    }
  }, [isDropdownOpened]);
  return (
    <StyledContent>
      <StyledLabel data-testid="select-label">{label}</StyledLabel>
      <StyledSelect
        onClick={toggleDropdown}
        data-testid="select-control"
        data-testvalue={name}
      >
        {labelByValue[value]}
        {isDropdownOpened ? (
          <StyledDropdown tabIndex={0} ref={dropdownEl} onBlur={closeDropdown}>
            {(options || []).map(({ value: cValue, label }) => (
              <StyledOption key={cValue} onClick={() => onChange(cValue)}>
                {label}
              </StyledOption>
            ))}
          </StyledDropdown>
        ) : null}
        {isDropdownOpened ? <StyledArrowUp /> : <StyledArrowDown />}
      </StyledSelect>
    </StyledContent>
  );
};

export default Select;
