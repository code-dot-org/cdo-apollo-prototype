/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetStudentAssessments
// ====================================================

export interface GetStudentAssessments_assessment {
  __typename: "Assessment";
  name: string;
}

export interface GetStudentAssessments_sectionAssessments_student {
  __typename: "Student";
  id: number;
  name: string;
}

export interface GetStudentAssessments_sectionAssessments {
  __typename: "StudentAssessment";
  student: GetStudentAssessments_sectionAssessments_student;
  isLocked: boolean;
}

export interface GetStudentAssessments {
  assessment: GetStudentAssessments_assessment | null;
  sectionAssessments: GetStudentAssessments_sectionAssessments[] | null;
}

export interface GetStudentAssessmentsVariables {
  sectionId: number;
  assessmentId: number;
}
