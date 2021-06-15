/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: StudentAssessmentData
// ====================================================

export interface StudentAssessmentData_student {
  __typename: "Student";
  id: number;
  name: string;
}

export interface StudentAssessmentData {
  __typename: "StudentAssessment";
  student: StudentAssessmentData_student;
  isLocked: boolean;
}
