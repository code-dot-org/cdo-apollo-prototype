import { Arg, FieldResolver, Query, Resolver, ID } from 'type-graphql';
import { section, script, students, SectionData } from '../data';
import Section from '../schemas/Section';

@Resolver((of) => Section)
export default class {
  @Query((returns) => Section, { nullable: true })
  sectionById(@Arg('id', (type) => ID!) id: string): SectionData | undefined {
    return section;
  }

  @FieldResolver()
  students() {
    return students;
  }

  @FieldResolver()
  assignedScript() {
    return script;
  }
}
