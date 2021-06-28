import {
  Arg,
  Query,
  Mutation,
  FieldResolver,
  Resolver,
  Root,
  ID,
} from 'type-graphql';
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
    @Arg('sectionId', (type) => ID!) sectionId: string,
    @Arg('assessmentId', (type) => ID!) assessmentId: string
  ): StudentAssessmentData[] {
    return section.studentIds.reduce((assessments, studentId) => {
      return assessments.concat(
        studentAssessments.filter(
          (sa) => sa.studentId === studentId && sa.assessmentId === assessmentId
        )
      );
    }, [] as StudentAssessmentData[]);
  }

  @Mutation((returns) => StudentAssessment)
  markStudentAsssessmentCompleted(
    @Arg('id', (type) => ID!) id: string
  ): StudentAssessmentData {
    const studentAssessment = studentAssessments.find((sa) => {
      return sa.id === id;
    });
    if (!studentAssessment) {
      throw new Error(`Couldn't find the student assessment with id ${id}`);
    }
    if (studentAssessment.isCompleted === true) {
      throw new Error(`Student assessment with id ${id} is already completed`);
    }
    studentAssessment.isCompleted = true;
    studentAssessment.isLocked = true;
    return studentAssessment;
  }

  @Mutation((returns) => StudentAssessment)
  setStudentAssessmentLocked(
    @Arg('id', (type) => ID!) id: string,
    @Arg('isLocked') isLocked: boolean
  ): StudentAssessmentData {
    const studentAssessment = studentAssessments.find((sa) => {
      return sa.id === id;
    });
    if (!studentAssessment) {
      throw new Error(`Couldn't find the student assessment with id ${id}`);
    }
    studentAssessment.isLocked = isLocked;
    return studentAssessment;
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
