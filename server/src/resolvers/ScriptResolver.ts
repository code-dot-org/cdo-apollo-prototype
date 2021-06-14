import { Arg, FieldResolver, Query, Resolver, Root, Int } from 'type-graphql';
import { script, assessments, students, ScriptData } from '../data';
import Script from '../schemas/Script';

@Resolver((of) => Script)
export default class {
  @Query((returns) => Script, { nullable: true })
  scriptById(@Arg('id', type => Int) id: number): ScriptData | undefined {
    return script;
  }

  @FieldResolver()
  assessments(@Root() scriptData: ScriptData) {
    return assessments;
  }

  @FieldResolver()
  students(@Root() scriptData: ScriptData) {
    return students;
  }
}
