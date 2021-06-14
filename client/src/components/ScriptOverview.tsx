import React, { Fragment, useState } from 'react';
import { RouteComponentProps } from '@reach/router';
import { gql, useQuery } from '@apollo/client';
import * as AssessmentRowTypes from './__generated__/AssessmentRow';
import * as GetScriptTypes from './__generated__/GetScript';

export const ASSESSMENT_ROW_DATA = gql`
  fragment AssessmentRow on Assessment {
    __typename
    id
    name
  }
`;

export const GET_SCRIPT = gql`
  query GetScript($id: Int!) {
    scriptById(id: $id) {
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
  const {
    data,
    loading,
    error
  } = useQuery<
    GetScriptTypes.GetScript,
    GetScriptTypes.GetScriptVariables
  >(GET_SCRIPT, {variables: {id: 1}});

  if (loading) return <p>Loading...</p>;
  if (error) return <p>ERROR</p>;
  if (!data || !data.scriptById) return <p>Not found</p>;
  const script = data.scriptById;

  return (
    <Fragment>
      <h1>{script.name}</h1>
      {script.assessments?.map((assessment: any) => (
        <h2 key={assessment.id}>{assessment.name}</h2>
      ))}
    </Fragment>
  );
}

export default ScriptOverview;
