import React, { Fragment } from 'react';
import { gql, useQuery } from '@apollo/client';

import { Loading, Header, StudentAssessment } from '../components';
import { RouteComponentProps } from '@reach/router';
import * as GetSectionTypes from './__generated__/GetSection';

import ManageStudentsRow, {
  STUDENT_FRAGMENT,
} from '../components/manage-students-row';

export const GET_SECTION = gql`
  query GetSection($sectionId: ID!) {
    sectionById(id: $sectionId) {
      students {
        ...StudentFragment
      }
    }
  }
  ${STUDENT_FRAGMENT}
`;

interface ManageStudentsProps extends RouteComponentProps {
  sectionId?: any;
}

const ManageStudents: React.FC<ManageStudentsProps> = ({ sectionId }) => {
  const { data, loading, error } = useQuery<
    GetSectionTypes.GetSection,
    GetSectionTypes.GetSectionVariables
  >(GET_SECTION, {
    variables: { sectionId: sectionId },
  });
  if (loading) return <Loading />;
  if (error) return <p>ERROR: {error.message}</p>;
  if (!data) return <p>Not found</p>;

  return (
    <Fragment>
      <ManageStudentsRow key='new' />
      {data.sectionById?.students?.map((student) => (
        <ManageStudentsRow key={student.id} {...student} />
      ))}
      <div>
        <br />
        Roster:
        <ul>
          {data.sectionById?.students?.map((student) => (
            <li key={student.id}>
              {student.name}: {student.age || '-'}
            </li>
          ))}
        </ul>
      </div>
    </Fragment>
  );
};

export default ManageStudents;
