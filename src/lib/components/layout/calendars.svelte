<script lang="ts">
	import * as Collapsible from "$lib/components/ui/collapsible/index.js";
	import * as Sidebar from "$lib/components/ui/sidebar/index.js";
	import { Checkbox } from "$lib/components/ui/checkbox/index.js";
	import ChevronRight from "@lucide/svelte/icons/chevron-right";

	let { calendars }: { calendars: { name: string; items: string[] }[] } = $props();
</script>

{#each calendars as calendar, index (calendar.name)}
	<Sidebar.Group class="py-0">
		<Collapsible.Root open={index === 0} class="group/collapsible">
			<Sidebar.GroupLabel class="group/label text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground w-full text-sm">
				{#snippet child({ props })}
					<Collapsible.Trigger {...props}>
						{calendar.name}
						<ChevronRight class="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-90" />
					</Collapsible.Trigger>
				{/snippet}
			</Sidebar.GroupLabel>
			<Collapsible.Content>
				<Sidebar.GroupContent>
					<Sidebar.Menu>
						{#each calendar.items as item, index (item)}
							<Sidebar.MenuItem>
								<Sidebar.MenuButton>
									<Checkbox />
									{item}
								</Sidebar.MenuButton>
							</Sidebar.MenuItem>
						{/each}
					</Sidebar.Menu>
				</Sidebar.GroupContent>
			</Collapsible.Content>
		</Collapsible.Root>
	</Sidebar.Group>
	<Sidebar.Separator class="mx-0" />
{/each}
