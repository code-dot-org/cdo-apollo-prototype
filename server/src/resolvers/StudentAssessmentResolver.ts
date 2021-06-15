import { Arg, Query, FieldResolver, Resolver, Root, Int } from 'type-graphql';
import {
  assessments,
  students,
  section,
  studentAssessments,
  StudentAssessmentData,
} from '../data';
import StudentAssessment from '../schemas/StudentAssessment';

@Resolver((of) => StudentAssessment)
export default class {
  @Query((returns) => [StudentAssessment], { nullable: true })
  sectionAssessments(
    @Arg('sectionId', (type) => Int!) sectionId: number,
    @Arg('assessmentId', (type) => Int!) assessmentId: number
  ): StudentAssessmentData[] {
    return section.studentIds.reduce((assessments, studentId) => {
      return assessments.concat(
        studentAssessments.filter(
          (sa) => sa.studentId === studentId && sa.assessmentId === assessmentId
        )
      );
    }, [] as StudentAssessmentData[]);
  }

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
