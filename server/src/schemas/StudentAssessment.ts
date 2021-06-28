import { Field, ID, ObjectType } from 'type-graphql';
import Assessment from './Assessment';
import Student from './Student';

@ObjectType()
export default class StudentAssessment {
  @Field((type) => ID)
  id: string;

  @Field((type) => Assessment)
  assessment: Assessment;

  @Field((type) => Student)
  student: Student;

  @Field()
  isLocked: boolean;

  @Field()
  isCompleted: boolean;
}
