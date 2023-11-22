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

  const whatsappMessageTable = new Table(stack, "WhatsAppMessage", {
    fields: {
      phoneIndex: "string",
      integrationId: "string",
    },
    primaryIndex: {
      partitionKey: "phoneIndex",
      sortKey: "integrationId",
    },
  });

  const downloadableDocumentTable = new Table(stack, "DownloadableDocument", {
    fields: {
      integrationId: "string",
      docToken: "string",
    },
    primaryIndex: {
      partitionKey: "integrationId",
      sortKey: "docToken",
    },
  });

  return {
    solicitudeTable,
    solicitudeStateTable,
    templateTable,
    whatsappMessageTable,
    downloadableDocumentTable,
  };
}
