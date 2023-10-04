import { StackContext, Table } from "sst/constructs"

export function DocumentStatesTable({ stack }: StackContext) {
	const documentStatesTable = new Table(stack, "DocumentStatesTable", {
		fields: {
            userId: "string",
			documentType: "string",
			state: "string",
		},
		primaryIndex: {
			partitionKey: "userId", sortKey: "state"
		},
	})

	return {
		documentStatesTable,
	}
}

export function DocumentKeysTable({ stack }: StackContext) {
	const documentKeysTable = new Table(stack, "DocumentKeysTable", {
		fields: {
			documentId: "string",
		},
		primaryIndex: {
			partitionKey: "documentId",
		},
	})

	return {
		documentKeysTable,
	}
}
