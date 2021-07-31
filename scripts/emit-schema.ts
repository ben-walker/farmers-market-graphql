import { emitSchemaDefinitionFile } from "type-graphql";

import { buildSchema } from "../src/schema";

const emitSchema = async () => {
  const schema = await buildSchema();
  await emitSchemaDefinitionFile("schema.gql", schema);
};

emitSchema().catch(console.error);
