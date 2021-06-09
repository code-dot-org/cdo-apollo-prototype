import { Field, Int, ObjectType } from 'type-graphql';
import Student from './Student';
import Script from './Script';

@ObjectType()
export default class Section {
  @Field((type) => Int)
  id: number;

  @Field()
  name: string;

  @Field((type) => [Student])
  students: Student[];

  @Field((type) => Script)
  assignedScript: Script;
}
