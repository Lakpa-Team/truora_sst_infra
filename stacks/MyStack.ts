import { StackContext } from "sst/constructs";

import { GenerateDynamoTable } from "./dynamodb";
import { GenerateSQS } from "./sqs";

export function TruoraInfraestructure({ stack }: StackContext) {
  GenerateDynamoTable(stack);
  GenerateSQS(stack);
  return {};
}
