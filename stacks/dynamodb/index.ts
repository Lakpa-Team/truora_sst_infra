import { Stack, Table } from "sst/constructs";

export function GenerateDynamoTable(stack: Stack) {
  const templateTable = new Table(stack, "Templates", {
    fields: {
      solicitudeId: "string",
      userType: "string",
    },
    primaryIndex: {
      partitionKey: "solicitudeId",
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
      state: "string",
    },
    primaryIndex: {
      partitionKey: "solicitudeId",
      sortKey: "state",
    },
  });

  return {
    solicitudeTable,
    solicitudeStateTable,
    templateTable,
  };
}
