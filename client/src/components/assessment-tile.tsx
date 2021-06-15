import React from 'react';
import styled, { css } from 'react-emotion';
import { Link } from '@reach/router';
import { unit } from '../styles';
import * as AssessmentTileTypes from '../pages/__generated__/AssessmentTile';

interface AssessmentTileProps {
  assessment: AssessmentTileTypes.AssessmentTile;
}

const AssessmentTile: React.FC<AssessmentTileProps> = ({ assessment }) => {
  const { id, name } = assessment;
  return (
    <StyledLink to={`/assessment/${id}`}>
      <h3>{name}</h3>
    </StyledLink>
  );
};

export default AssessmentTile;

/**
 * STYLED COMPONENTS USED IN THIS FILE ARE BELOW HERE
 */

export const cardClassName = css({
  padding: `${unit * 4}px ${unit * 5}px`,
  borderRadius: 7,
  color: 'black',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
});

const padding = unit * 2;
const StyledLink = styled(Link)(cardClassName, {
  display: 'block',
  marginTop: padding,
  textDecoration: 'none',
  ':not(:last-child)': {
    marginBottom: padding * 2,
  },
});
