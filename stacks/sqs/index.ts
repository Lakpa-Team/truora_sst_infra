import { Queue, Stack } from "sst/constructs";

export function GenerateSQS(stack: Stack) {
  const mainQueue = new Queue(stack, "truora-integration-main");
  const dlqQueue = new Queue(stack, "truora-integration-dlq");
  return { mainQueue, dlqQueue };
}
