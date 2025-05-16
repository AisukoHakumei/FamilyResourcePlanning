<script lang="ts">
	import SidebarLeft from "$lib/components/sidebar-left.svelte";
	import SidebarRight from "$lib/components/sidebar-right.svelte";
	import * as Breadcrumb from "$lib/components/ui/breadcrumb/index.js";
	import { Separator } from "$lib/components/ui/separator/index.js";
	import * as Sidebar from "$lib/components/ui/sidebar/index.js";

    let { children } = $props();
</script>

<Sidebar.Provider>
	<SidebarLeft />
	<Sidebar.Inset>
		{@render children()}
	</Sidebar.Inset>
	<SidebarRight />
</Sidebar.Provider>