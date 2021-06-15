import { Arg, Query, Resolver, Int } from 'type-graphql';
import { assessments, AssessmentData } from '../data';
import Assessment from '../schemas/Assessment';

@Resolver((of) => Assessment)
export default class {
  @Query((returns) => Assessment, { nullable: true })
  assessment(@Arg('id', (type) => Int) id: number): AssessmentData | undefined {
    return assessments.find((assessment) => assessment.id === id);
  }
}
