import { emitSchemaDefinitionFileSync } from "type-graphql";

import { schema } from "../src/schema";

emitSchemaDefinitionFileSync("schema.gql", schema);
