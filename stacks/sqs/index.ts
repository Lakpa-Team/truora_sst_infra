import { Queue, Stack } from "sst/constructs";

export function GenerateSQS(stack: Stack) {
  new Queue(stack, "truora-integration-main");
  new Queue(stack, "truora-integration-dlq");
}
