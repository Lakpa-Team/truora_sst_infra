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

  const solicitudeStateTable = new Table(stack, "SolicitudeStep", {
    fields: {
      integrationId: "string",
      stepId: "string",
    },
    primaryIndex: {
      partitionKey: "integrationId",
      sortKey: "stepId",
    },
  });

  const whatsappMessageTable = new Table(stack, "whatsappMessage", {
    fields: {
      integrationId: "string",
      phoneIndex: "string",
    },
    primaryIndex: {
      partitionKey: "integrationId",
      sortKey: "phoneIndex",
    },
  });

  return {
    solicitudeTable,
    solicitudeStateTable,
    templateTable,
    whatsappMessageTable,
  };
}
