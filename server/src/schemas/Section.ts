import { Field, ID, ObjectType } from 'type-graphql';
import Student from './Student';
import Script from './Script';

@ObjectType()
export default class Section {
  @Field((type) => ID)
  id: string;

  @Field()
  name: string;

  @Field((type) => [Student])
  students: Student[];

  @Field((type) => Script)
  assignedScript: Script;
}
