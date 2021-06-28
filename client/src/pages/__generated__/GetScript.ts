/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetScript
// ====================================================

export interface GetScript_scriptById_assessments {
  __typename: "Assessment";
  id: string;
  name: string;
}

export interface GetScript_scriptById {
  __typename: "Script";
  name: string;
  assessments: GetScript_scriptById_assessments[];
}

export interface GetScript {
  scriptById: GetScript_scriptById | null;
}

export interface GetScriptVariables {
  id: string;
}
