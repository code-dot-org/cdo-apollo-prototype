/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { StudentInput } from "./../../../__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: StudentMutation
// ====================================================

export interface StudentMutation_updateStudent {
  __typename: "Student";
  id: string;
  name: string;
  age: number;
}

export interface StudentMutation {
  updateStudent: StudentMutation_updateStudent;
}

export interface StudentMutationVariables {
  student: StudentInput;
}
