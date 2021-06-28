export interface StudentData {
  id: string;
  name: string;
  age?: number;
  sectionId: string;
}

export interface SectionData {
  id: string;
  name: string;
  studentIds: string[];
  assignedScriptId: string;
}

export interface ScriptData {
  id: string;
  name: string;
  assessmentIds: string[];
}

export interface AssessmentData {
  id: string;
  name: string;
  scriptId: string;
}

export interface StudentAssessmentData {
  id: string;
  studentId: string;
  assessmentId: string;
  isLocked: boolean;
  isCompleted: boolean;
}

export const script: ScriptData = {
  id: '1',
  name: 'Demo Script',
  assessmentIds: ['1', '2'],
};

export const assessments: AssessmentData[] = [
  { id: '1', name: 'Assessment 1', scriptId: '1' },
  { id: '2', name: 'Assessment 2', scriptId: '1' },
];

export const section: SectionData = {
  id: '1',
  name: 'Demo Section',
  studentIds: ['1', '2', '3', '4'],
  assignedScriptId: '1',
};

export const students: StudentData[] = [
  { id: '1', name: 'Paul', sectionId: '1' },
  { id: '2', name: 'John', sectionId: '1' },
  { id: '3', name: 'Ringo', sectionId: '1' },
  { id: '4', name: 'George', sectionId: '1' },
];

export const studentAssessments: StudentAssessmentData[] = section.studentIds
  .map((studentId) => {
    return script.assessmentIds.map((assessmentId) => {
      return {
        id: `${studentId}_${assessmentId}`,
        studentId,
        assessmentId,
        isLocked: true,
        isCompleted: false,
      };
    });
  })
  .reduce((accumulator, value) => accumulator.concat(value), []);
