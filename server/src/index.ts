import { GraphQLServer } from 'graphql-yoga';
import 'reflect-metadata';
import { buildSchema } from 'type-graphql';
import ScriptResolver from './resolvers/ScriptResolver';
import SectionResolver from './resolvers/SectionResolver';
import StudentResolver from './resolvers/StudentResolver';
import StudentAssessmentResolver from './resolvers/StudentAssessmentResolver';

async function bootstrap() {
  const schema = await buildSchema({
    resolvers: [
      ScriptResolver,
      SectionResolver,
      StudentResolver,
      StudentAssessmentResolver,
    ],
    emitSchemaFile: true,
  });

  const server = new GraphQLServer({
    schema,
  });

  server.start(() => console.log('Server is running on http://localhost:4000'));
}

bootstrap();
