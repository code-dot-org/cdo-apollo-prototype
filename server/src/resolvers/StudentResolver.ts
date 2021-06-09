import { Arg, FieldResolver, Query, Resolver, Root } from 'type-graphql';
import { students, studentAssessments, section, StudentData } from '../data';
import Student from '../schemas/Student';

@Resolver((of) => Student)
export default class {
  @Query((returns) => Student, { nullable: true })
  studentById(@Arg('id') id: number): StudentData | undefined {
    return students.find((student) => student.id === id);
  }

  @FieldResolver()
  assessments(@Root() studentData: StudentData) {
    return studentAssessments.filter((sa) => {
      return sa.studentId === studentData.id;
    });
  }

  @FieldResolver()
  section(@Root() studentData: StudentData) {
    return section;
  }
}
