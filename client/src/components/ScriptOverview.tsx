import React, { Fragment, useState } from 'react';
import { RouteComponentProps } from '@reach/router';
import { gql, useQuery } from '@apollo/client';

export const ASSESSMENT_ROW_DATA = gql`
  fragment AssessmentRow on Script {
    __typename
    id
    name
  }
`;

export const GET_SCRIPT = gql`
  query GetScript($id: number) {
    getScriptById(id: $id) {
      name
      assessments {
        ...AssessmentRow
      }
    }
  }
  ${ASSESSMENT_ROW_DATA}
`;

interface ScriptOverviewProps extends RouteComponentProps {}

const ScriptOverview: React.FC<ScriptOverviewProps> = () => {
  return <div />;
};

export default ScriptOverview;
