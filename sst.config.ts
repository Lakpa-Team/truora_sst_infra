import { SSTConfig } from "sst";
import { DocumentStatesTable, DocumentKeysTable } from "./stacks/Tables"

export default {
  config(_input) {
    return {
      name: "truora-DynamoDB",
      region: "us-east-1",
    };
  },
  stacks(app) {
    app
    .stack(DocumentStatesTable)
    .stack(DocumentKeysTable);
  }
} satisfies SSTConfig;
