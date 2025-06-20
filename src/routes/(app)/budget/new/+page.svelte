<script lang="ts">
    import Breadcrumb from "$lib/components/layout/breadcrumb.svelte";
    import type { PageServerData } from "./$types";

    let { data }: { data: PageServerData } = $props();

</script>
<Breadcrumb path="New budget" />

<div class="flex flex-1 flex-col gap-4 p-4">
    
</div>