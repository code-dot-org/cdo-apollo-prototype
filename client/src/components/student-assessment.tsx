import React from 'react';
import styled from 'react-emotion';

import { unit } from '../styles';
import { cardClassName } from './assessment-tile';
import { StudentAssessmentData } from '../pages/__generated__/StudentAssessmentData';

type LaunchDetailProps = Partial<StudentAssessmentData>;

const StudentAssessment: React.FC<LaunchDetailProps> = ({
  student,
  isLocked,
}) => (
  <Card>
    <h3>{student?.name}</h3>
    <h5>Locked: {isLocked ? 'true' : 'false'}</h5>
  </Card>
);

export default StudentAssessment;

/**
 * STYLED COMPONENTS USED IN THIS FILE ARE BELOW HERE
 */

const Card = styled('div')(cardClassName, {
  // height: 365,
  marginBottom: unit * 4,
});
