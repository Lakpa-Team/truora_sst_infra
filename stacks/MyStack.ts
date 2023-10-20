import { StackContext } from "sst/constructs";

import { GenerateDynamoTable } from "./dynamodb";

export function TruoraInfraestructure({ stack }: StackContext) {
  GenerateDynamoTable(stack);

  return {};
}
