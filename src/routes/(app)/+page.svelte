<script lang="ts">
    import Breadcrumb from "$lib/components/breadcrumb.svelte";
    import { enhance } from "$app/forms";
    import type { PageServerData } from "./$types";

    let { data }: { data: PageServerData } = $props();
</script>

<Breadcrumb path="Home" />
<div class="flex flex-1 flex-col gap-4 p-4">
    <h1>Hi, {data.user.username}!</h1>
    <p>Your user ID is {data.user.id}.</p>
    <form method="post" action="?/logout" use:enhance>
        <button>Sign out</button>
    </form>
</div>
