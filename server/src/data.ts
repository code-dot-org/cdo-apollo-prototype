import StudentAssessment from './schemas/StudentAssessment';

export interface StudentData {
  id: number;
  name: string;
  sectionId: number;
}

export interface SectionData {
  id: number;
  name: string;
  studentIds: number[];
  assignedScriptId: number;
}

export interface ScriptData {
  id: number;
  name: string;
  assessmentIds: number[];
}

export interface AssessmentData {
  id: number;
  name: string;
  scriptId: number;
}

export interface StudentAssessmentData {
  studentId: number;
  assessmentId: number;
  isLocked: boolean;
}

export const script: ScriptData = {
  id: 1,
  name: 'Demo Script',
  assessmentIds: [1, 2],
};

export const assessments: AssessmentData[] = [
  { id: 1, name: 'Assessment 1', scriptId: 1 },
  { id: 2, name: 'Assessment 2', scriptId: 1 },
];

export const section: SectionData = {
  id: 1,
  name: 'Demo Section',
  studentIds: [1, 2, 3, 4],
  assignedScriptId: 1,
};

export const students: StudentData[] = [
  { id: 1, name: 'Paul', sectionId: 1 },
  { id: 2, name: 'John', sectionId: 1 },
  { id: 3, name: 'Ringo', sectionId: 1 },
  { id: 4, name: 'George', sectionId: 1 },
];

export const studentAssessments: StudentAssessmentData[] = section.studentIds
  .map((studentId) => {
    return script.assessmentIds.map((assessmentId) => {
      return { studentId, assessmentId, isLocked: true };
    });
  })
  .reduce((accumulator, value) => accumulator.concat(value), []);
