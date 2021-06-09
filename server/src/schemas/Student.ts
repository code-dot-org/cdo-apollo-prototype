import { Field, Int, ObjectType } from 'type-graphql';
import StudentAssessment from './StudentAssessment';
import Section from './Section';

@ObjectType()
export default class Student {
  @Field((type) => Int)
  id: number;

  @Field()
  name: string;

  @Field((type) => Section)
  section: Section;

  @Field((type) => [StudentAssessment])
  assessments: StudentAssessment[];
}
