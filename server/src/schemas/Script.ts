import { Field, Int, ObjectType } from 'type-graphql';
import Assessment from './Assessment';
import Student from './Student';

@ObjectType()
export default class Script {
  @Field((type) => Int)
  id: number;

  @Field()
  name: string;

  @Field((type) => [Assessment])
  assessments: Assessment[];

  @Field((type) => [Student])
  students: Student[];
}
