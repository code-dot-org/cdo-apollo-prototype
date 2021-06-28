import {
  Arg,
  FieldResolver,
  Query,
  Resolver,
  Mutation,
  Root,
  ID,
} from 'type-graphql';
import { students, studentAssessments, section, StudentData } from '../data';
import Student, { StudentInput } from '../schemas/Student';

@Resolver((of) => Student)
export default class {
  @Query((returns) => Student, { nullable: true })
  studentById(@Arg('id', (type) => ID!) id: string): StudentData | undefined {
    return students.find((student) => student.id === id);
  }

  @Mutation((returns) => Student)
  postStudent(
    @Arg('student', (type) => StudentInput!) posted: StudentData
  ): StudentData {
    if (!posted.id) {
      const student = {
        ...posted,
        id: `${students.length + 1}`,
        sectionId: '1',
      };
      students.push(student);
      return student;
    }
    const previous = students.find((student) => student.id === posted.id);
    if (!previous) {
      throw new Error(`Couldn't find the student with id ${posted.id}`);
    }
    const index = students.indexOf(previous);
    students[index] = { ...previous, ...posted };
    return students[index];
  }

  @FieldResolver()
  assessments(@Root() studentData: StudentData) {
    return studentAssessments.filter((sa) => {
      return sa.studentId === studentData.id;
    });
  }

  @FieldResolver()
  section() {
    return section;
  }
}
