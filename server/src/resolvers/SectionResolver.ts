import { Arg, FieldResolver, Query, Resolver, Root } from 'type-graphql';
import { section, script, students, SectionData } from '../data';
import Section from '../schemas/Section';

@Resolver((of) => Section)
export default class {
  @Query((returns) => Section, { nullable: true })
  sectionById(@Arg('id') id: number): SectionData | undefined {
    return section;
  }

  @FieldResolver()
  students(@Root() sectionData: SectionData) {
    return students;
  }

  @FieldResolver()
  assignedScript(@Root() sectionData: SectionData) {
    return script;
  }
}
