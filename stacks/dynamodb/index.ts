import { Stack, Table } from "sst/constructs";

export function GenerateDynamoTable(stack: Stack) {
  const templateTable = new Table(stack, "Template", {
    fields: {
      solicitudeType: "string",
      userType: "string",
    },
    primaryIndex: {
      partitionKey: "solicitudeType",
      sortKey: "userType",
    },
  });

  const solicitudeTable = new Table(stack, "Solicitude", {
    fields: {
      solicitudeId: "string",
      integrationId: "string",
    },
    primaryIndex: {
      partitionKey: "solicitudeId",
      sortKey: "integrationId",
    },
  });

  const solicitudeStateTable = new Table(stack, "SolicitudeState", {
    fields: {
      solicitudeId: "string",
      step: "string",
    },
    primaryIndex: {
      partitionKey: "solicitudeId",
      sortKey: "step",
    },
  });

  return {
    solicitudeTable,
    solicitudeStateTable,
    templateTable,
  };
}
