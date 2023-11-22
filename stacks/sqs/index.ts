import { Queue, Stack } from "sst/constructs";

export function GenerateSQS(stack: Stack) {
  const mainQueue = new Queue(stack, "truora-integration-main");
  const dlqQueue = new Queue(stack, "truora-integration-dlq");
  const downloadQueue = new Queue(stack, "truora-integration-downloader");
  const downloadDlqQueue = new Queue(
    stack,
    "truora-integration-downloader-dlq"
  );
  return { mainQueue, dlqQueue, downloadQueue, downloadDlqQueue };
}
