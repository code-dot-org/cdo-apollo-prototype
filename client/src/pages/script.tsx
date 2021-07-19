import React, { Fragment } from 'react';
import { RouteComponentProps } from '@reach/router';
import { gql, useQuery } from '@apollo/client';
import * as GetScriptTypes from './__generated__/GetScript';

import { Header, Loading, AssessmentTile } from '../components';

export const ASSESSMENT_TILE_DATA = gql`
  fragment AssessmentTile on Assessment {
    __typename
    id
    name
  }
`;

export const GET_SCRIPT = gql`
  query GetScript($id: ID!) {
    scriptById(id: $id) {
      name
      assessments {
        ...AssessmentTile
      }
    }
  }
  ${ASSESSMENT_TILE_DATA}
`;

interface ScriptOverviewProps extends RouteComponentProps {
  scriptId?: any;
}

const ScriptOverview: React.FC<ScriptOverviewProps> = ({ scriptId }) => {
  const { data, loading, error } = useQuery<
    GetScriptTypes.GetScript,
    GetScriptTypes.GetScriptVariables
  >(GET_SCRIPT, { variables: { id: scriptId } });

  if (loading) return <Loading />;
  if (error) return <p>ERROR: {error.message}</p>;
  if (!data || !data.scriptById) return <p>Not found</p>;
  const script = data.scriptById;

  return (
    <Fragment>
      <Header title={script.name} />
      {script.assessments?.map((assessment: any) => (
        <AssessmentTile key={assessment.id} assessment={assessment} />
      ))}
    </Fragment>
  );
};

export default ScriptOverview;
