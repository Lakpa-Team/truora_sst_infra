import { Queue, Stack } from "sst/constructs";

export function GenerateSQS(stack: Stack) {
  const mainQueue = new Queue(stack, "main-processor");
  const dlqQueue = new Queue(stack, "main-dlq");
  const downloadQueue = new Queue(stack, "downloader");
  const downloadDlqQueue = new Queue(stack, "downloader-dlq");
  return { mainQueue, dlqQueue, downloadQueue, downloadDlqQueue };
}
