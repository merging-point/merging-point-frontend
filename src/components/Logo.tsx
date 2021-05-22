import React, { HTMLAttributes } from 'react';
import styled from '@emotion/styled';

export default (props: HTMLAttributes<HTMLImageElement>) => (
  <Logo src={require('../assets/logo.svg')} {...props} />
);

const Logo = styled.img`
  width: 200px;
`;
