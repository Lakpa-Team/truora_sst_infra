import { SSTConfig } from "sst";
import { TruoraInfraestructure } from "./stacks/MyStack";

export default {
  config(_input) {
    return {
      name: "sst-truora-integration",
      region: "us-east-1",
    };
  },
  stacks(app) {
    app.stack(TruoraInfraestructure);
  },
} satisfies SSTConfig;
