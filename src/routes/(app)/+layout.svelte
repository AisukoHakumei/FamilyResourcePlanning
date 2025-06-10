<script lang="ts">
	import SidebarLeft from "$lib/components/layout/sidebar-left.svelte";
	import SidebarRight from "$lib/components/layout/sidebar-right.svelte";
	import * as Sidebar from "$lib/components/ui/sidebar";

    let { children } = $props();
</script>

<Sidebar.Provider>
	<SidebarLeft />
	<Sidebar.Inset>
		{@render children()}
	</Sidebar.Inset>
	<SidebarRight />
</Sidebar.Provider>