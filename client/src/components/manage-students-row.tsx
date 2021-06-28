import React, { useState } from 'react';
import { useMutation, gql } from '@apollo/client';
import { StudentFragment } from './__generated__/StudentFragment';

export const STUDENT_FRAGMENT = gql`
  fragment StudentFragment on Student {
    __typename
    id
    name
    age
  }
`;

const UPDATE_STUDENT_MUTATION = gql`
  mutation StudentMutation($student: StudentInput!) {
    postStudent(student: $student) {
      ...StudentFragment
    }
  }
  ${STUDENT_FRAGMENT}
`;

type ManageStudentsRowProps = Partial<StudentFragment>;

const ManageStudentsRow: React.FC<ManageStudentsRowProps> = (student) => {
  const [formState, setFormState] = useState({
    name: student.name,
    age: student.age,
  });

  const [updateStudent, { error: postError }] = useMutation(
    UPDATE_STUDENT_MUTATION,
    {
      variables: {
        student: {
          id: student.id,
          name: formState.name,
          age: formState.age,
        },
      },
      update(cache, { data: { postStudent } }) {
        cache.modify({
          fields: {
            sectionById(section) {
              const postedStudentRef = cache.writeFragment({
                data: postStudent,
                fragment: STUDENT_FRAGMENT,
              });
              if (
                section.students.some(
                  (existing: StudentFragment) => existing.id === postStudent.id
                )
              ) {
                return section;
              }
              return {
                ...section,
                students: [...section.students, postedStudentRef],
              };
            },
          },
        });
      },
      onCompleted(_) {
        !student.id &&
          setFormState({
            name: undefined,
            age: undefined,
          });
      },
    }
  );

  const action = !student.name ? 'Save' : 'Update';
  const disabled =
    !formState.name ||
    (formState.name === student.name && formState.age === student.age);

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          updateStudent();
        }}
      >
        <div>
          <input
            value={formState.name || ''}
            onChange={(e) =>
              setFormState({
                ...formState,
                name: e.target.value,
              })
            }
            type='text'
            placeholder='Student Name'
          />
          <input
            value={formState.age || ''}
            onChange={(e) =>
              setFormState({
                ...formState,
                age: parseInt(e.target.value),
              })
            }
            type='number'
            placeholder='Age'
          />
          <button type='submit' disabled={disabled}>
            {action}
          </button>
        </div>
      </form>
      {postError && <p>Post failed :(</p>}
    </div>
  );
};

export default ManageStudentsRow;
