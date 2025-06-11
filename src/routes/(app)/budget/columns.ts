import type { ColumnDef } from "@tanstack/table-core";
import {renderComponent} from "$lib/components/ui/data-table";
import DataTableActions from "./data-table-actions.svelte";

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
    },
    {
        id: "actions",
        cell: ({ row }) => {
            return renderComponent(DataTableActions, { id: row.original.id })
        }
    }
];