import * as React from 'react';
import styled from 'styled-components';

import { logoSrc } from '../assets/images';

const StyledLogo = styled.img`
  width: 150px;
`;

const Logo = () => <StyledLogo src={logoSrc} data-testid="logo" />;

export default Logo;
