import { Field, Int, ObjectType } from 'type-graphql';
import Script from './Script';

@ObjectType()
export default class Assessment {
  @Field((type) => Int)
  id: number;

  @Field()
  name: string;

  @Field((type) => Script)
  script: Script;
}
