import { Arg, FieldResolver, Query, Resolver, Root, ID } from 'type-graphql';
import { script, assessments, students, ScriptData } from '../data';
import Script from '../schemas/Script';

@Resolver((of) => Script)
export default class {
  @Query((returns) => Script, { nullable: true })
  scriptById(@Arg('id', (type) => ID!) id: string): ScriptData | undefined {
    return script;
  }

  @FieldResolver()
  assessments() {
    return assessments;
  }

  @FieldResolver()
  students() {
    return students;
  }
}
