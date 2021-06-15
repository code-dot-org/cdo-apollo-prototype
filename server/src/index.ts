require('dotenv').config();
import 'reflect-metadata';
import { buildSchema } from 'type-graphql';
import { ApolloServer } from 'apollo-server';
import AssessmentResolver from './resolvers/AssessmentResolver';
import ScriptResolver from './resolvers/ScriptResolver';
import SectionResolver from './resolvers/SectionResolver';
import StudentResolver from './resolvers/StudentResolver';
import StudentAssessmentResolver from './resolvers/StudentAssessmentResolver';

async function bootstrap() {
  const schema = await buildSchema({
    resolvers: [
      AssessmentResolver,
      ScriptResolver,
      SectionResolver,
      StudentResolver,
      StudentAssessmentResolver,
    ],
    emitSchemaFile: true,
  });

  // Create GraphQL server
  const server = new ApolloServer({
    schema,
    // enable GraphQL Playground
    playground: true,
  });

  // Start the server
  const { url } = await server.listen(4000);
  console.log(`Server is running, GraphQL Playground available at ${url}`);
}

bootstrap();
