import React from 'react';
import styled from 'react-emotion';
import { size } from 'polished';

import { unit, colors } from '../styles';

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <Container>
      <h2>{title}</h2>
    </Container>
  );
};

export default Header;

/**
 * STYLED COMPONENTS USED IN THIS FILE ARE BELOW HERE
 */

const Container = styled('div')({
  display: 'flex',
  alignItems: 'center',
  marginBottom: unit * 4.5,
});

const Image = styled('img')(size(134), (props: { round: boolean }) => ({
  marginRight: unit * 2.5,
  borderRadius: props.round ? '50%' : '0%',
}));

const Subheading = styled('h5')({
  marginTop: unit / 2,
  color: colors.textSecondary,
});
