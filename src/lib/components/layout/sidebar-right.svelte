<script lang="ts">
	import Calendars from "$lib/components/layout/calendars.svelte";
	import DatePicker from "$lib/components/layout/date-picker.svelte";
	import NavUser from "$lib/components/layout/nav-user.svelte";
	import * as Sidebar from "$lib/components/ui/sidebar/index.js";
	import Plus from "@lucide/svelte/icons/plus";
	import type { ComponentProps } from "svelte";

	// This is sample data.
	const data = {
		user: {
			name: "shadcn",
			email: "m@example.com",
			avatar: "/avatars/shadcn.jpg",
		},
		calendars: [
			{
				name: "My Calendars",
				items: ["Personal", "Work", "Family"],
			},
			{
				name: "Favorites",
				items: ["Holidays", "Birthdays"],
			},
			{
				name: "Other",
				items: ["Travel", "Reminders", "Deadlines"],
			},
		],
	};

	let { ref = $bindable(null), ...restProps }: ComponentProps<typeof Sidebar.Root> = $props();
</script>

<Sidebar.Root bind:ref collapsible="none" class="sticky top-0 hidden h-svh border-l lg:flex" {...restProps}>
	<Sidebar.Header class="border-sidebar-border h-16 border-b">
		<NavUser user={data.user} />
	</Sidebar.Header>
	<Sidebar.Content>
		<DatePicker />
		<Sidebar.Separator class="mx-0" />
		<Calendars calendars={data.calendars} />
	</Sidebar.Content>
	<Sidebar.Footer>
		<Sidebar.Menu>
			<Sidebar.MenuItem>
				<Sidebar.MenuButton>
					<Plus />
					<span>New Calendar</span>
				</Sidebar.MenuButton>
			</Sidebar.MenuItem>
		</Sidebar.Menu>
	</Sidebar.Footer>
</Sidebar.Root>
