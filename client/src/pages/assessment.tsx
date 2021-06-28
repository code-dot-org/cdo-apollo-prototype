import React, { Fragment } from 'react';
import { gql, useQuery } from '@apollo/client';

import { Loading, Header, StudentAssessment } from '../components';
import { RouteComponentProps } from '@reach/router';
import * as GetStudentAssessmentTypes from './__generated__/GetStudentAssessments';

export const STUDENT_ASSESSMENT_DATA = gql`
  fragment StudentAssessmentData on StudentAssessment {
    __typename
    student {
      id
      name
    }
    isLocked
  }
`;

export const GET_STUDENT_ASSESSMENTS = gql`
  query GetStudentAssessments($sectionId: ID!, $assessmentId: ID!) {
    assessment(id: $assessmentId) {
      name
    }
    sectionAssessments(sectionId: $sectionId, assessmentId: $assessmentId) {
      ...StudentAssessmentData
    }
  }
  ${STUDENT_ASSESSMENT_DATA}
`;

interface AssessmentProps extends RouteComponentProps {
  assessmentId?: any;
}

const Assessment: React.FC<AssessmentProps> = ({ assessmentId }) => {
  const { data, loading, error } = useQuery<
    GetStudentAssessmentTypes.GetStudentAssessments,
    GetStudentAssessmentTypes.GetStudentAssessmentsVariables
  >(GET_STUDENT_ASSESSMENTS, {
    variables: { assessmentId: assessmentId, sectionId: '1' },
  });
  if (loading) return <Loading />;
  if (error) return <p>ERROR: {error.message}</p>;
  if (!data) return <p>Not found</p>;

  return (
    <Fragment>
      <Header title={data.assessment?.name || ''} />
      {data.sectionAssessments?.map((studentAssessmet) => (
        <StudentAssessment
          key={studentAssessmet.student.id}
          {...studentAssessmet}
        />
      ))}
    </Fragment>
  );
};

export default Assessment;
