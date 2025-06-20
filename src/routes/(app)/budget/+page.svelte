<script lang="ts">
    import Breadcrumb from "$lib/components/layout/breadcrumb.svelte";
    import { Button } from "$lib/components/ui/button";
    import DataTable from "$lib/components/ui/data-table/data-table.svelte";
    import type { PageServerData } from "./$types";
    import { columns } from "./columns";

    let { data }: { data: PageServerData } = $props();

</script>
<Breadcrumb path="Budget" />

<div class="flex flex-1 flex-col gap-4 p-4">

    <div><Button>New budget</Button></div>
    
    <DataTable data={data.budgetTable} columns={columns} />
</div>