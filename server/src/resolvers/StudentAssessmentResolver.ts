import { FieldResolver, Resolver, Root } from 'type-graphql';
import { assessments, students, StudentAssessmentData } from '../data';
import StudentAssessment from '../schemas/StudentAssessment';

@Resolver((of) => StudentAssessment)
export default class {
  @FieldResolver()
  assessment(@Root() data: StudentAssessmentData) {
    return assessments.find((asmt) => {
      return asmt.id === data.assessmentId;
    });
  }

  @FieldResolver()
  student(@Root() data: StudentAssessmentData) {
    return students.find((student) => {
      return student.id === data.studentId;
    });
  }
}
