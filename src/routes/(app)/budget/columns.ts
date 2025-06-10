import type { ColumnDef } from "@tanstack/table-core";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type BudgetTable = {
    id: string;
    name: string;
    totalAmount: number;
    status: "available" | "consumed" | "over-consumed" | "closed";
};

export const columns: ColumnDef<BudgetTable>[] = [
    {
        accessorKey: "name",
        header: "Name",
    },
    {
        accessorKey: "totalAmount",
        header: "Total Amount",
    },
    {
        accessorKey: "status",
        header: "Status",
    }
];