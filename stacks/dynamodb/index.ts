import { Stack, Table } from "sst/constructs";

export function GenerateDynamoTable(stack: Stack) {
  const configurationTable = new Table(stack, "Configuration", {
    fields: {
      caseType: "string",
      userType: "string",
    },
    primaryIndex: {
      partitionKey: "caseType",
      sortKey: "userType",
    },
  });

  const attachmentConfiguration = new Table(stack, "AttachmentConfiguration", {
    fields: {
      docTag: "string",
    },
    primaryIndex: {
      partitionKey: "docTag",
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
    globalIndexes: {
      gsi_integrationId: { partitionKey: "integrationId" },
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
    configurationTable,
    extradocumentTable: attachmentConfiguration,

    solicitudeTable,
    solicitudeStateTable,

    whatsappMessageTable,
    downloadableDocumentTable,
  };
}
