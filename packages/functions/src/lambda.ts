import { ApiHandler } from "sst/node/api";

export const handler = ApiHandler(async (event) => {
  return {
    statusCode: 200,
    body: `request`,
  };
});
