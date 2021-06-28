/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetSection
// ====================================================

export interface GetSection_sectionById_students {
  __typename: "Student";
  id: string;
  name: string;
  age: number;
}

export interface GetSection_sectionById {
  __typename: "Section";
  students: GetSection_sectionById_students[];
}

export interface GetSection {
  sectionById: GetSection_sectionById | null;
}

export interface GetSectionVariables {
  sectionId: string;
}
