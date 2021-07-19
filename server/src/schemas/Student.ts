import { Field, ID, Int, ObjectType, InputType } from 'type-graphql';
import StudentAssessment from './StudentAssessment';
import Section from './Section';

@ObjectType()
export default class Student {
  @Field((type) => ID)
  id: string;

  @Field()
  name: string;

  @Field((type) => Int, { nullable: true })
  age?: number;

  @Field((type) => Section)
  section: Section;

  @Field((type) => [StudentAssessment])
  assessments: StudentAssessment[];

  @Field((type) => Int, { nullable: true })
  test2?: number;
}

@InputType()
export class StudentInput implements Partial<Student> {
  @Field((type) => ID, { nullable: true })
  id?: string;

  @Field()
  name: string;

  @Field((type) => Int, { nullable: true })
  age?: number;
}
