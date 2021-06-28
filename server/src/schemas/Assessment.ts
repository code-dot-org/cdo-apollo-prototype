import { Field, ID, ObjectType } from 'type-graphql';
import Script from './Script';

@ObjectType()
export default class Assessment {
  @Field((type) => ID)
  id: string;

  @Field()
  name: string;

  @Field((type) => Script)
  script: Script;
}
