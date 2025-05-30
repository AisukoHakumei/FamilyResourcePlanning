<script lang="ts">
	import Blocks from "@lucide/svelte/icons/blocks";
	import Calendar from "@lucide/svelte/icons/calendar";
	import Home from "@lucide/svelte/icons/home";
	import HandCoins from "@lucide/svelte/icons/hand-coins";
	import MessageCircleQuestion from "@lucide/svelte/icons/message-circle-question";
	import SquareChartGantt from "@lucide/svelte/icons/square-chart-gantt";
	import Settings2 from "@lucide/svelte/icons/settings-2";
	import TreePalm from "@lucide/svelte/icons/tree-palm";
	import Trash2 from "@lucide/svelte/icons/trash-2";
	import ListTodo from "@lucide/svelte/icons/list-todo";

	import NavFavorites from "$lib/components/layout/nav-favorites.svelte";
	import NavMain from "$lib/components/layout/nav-main.svelte";
	import NavSecondary from "$lib/components/layout/nav-secondary.svelte";
	import AppName from "$lib/components/layout/app-name.svelte";
	import * as Sidebar from "$lib/components/ui/sidebar/index.js";
	import type { ComponentProps } from "svelte";

	// This is sample data.
	const data = {
		navMain: [
			{
				title: "Home",
				url: "#",
				icon: Home,
				isActive: true,
			},
			{
				title: "Budget Planning",
				url: "#",
				icon: HandCoins,
			},
			{
				title: "Projects",
				url: "#",
				icon: SquareChartGantt,
			},
			{
				title: "Holiday Planning",
				url: "#",
				icon: TreePalm,
			},
			{
				title: "Tasks & Chores",
				url: "#",
				icon: ListTodo,
				badge: "10",
			},
		],
		navSecondary: [
			{
				title: "Calendar",
				url: "#",
				icon: Calendar,
			},
			{
				title: "Settings",
				url: "#",
				icon: Settings2,
			},
			{
				title: "Templates",
				url: "#",
				icon: Blocks,
			},
			{
				title: "Trash",
				url: "#",
				icon: Trash2,
			},
			{
				title: "Help",
				url: "#",
				icon: MessageCircleQuestion,
			},
		],
		favoritesProjects: [
			{
				name: "Project Management & Task Tracking",
				url: "#",
				emoji: "📊",
			},
			{
				name: "Family Recipe Collection & Meal Planning",
				url: "#",
				emoji: "🍳",
			},
			{
				name: "Fitness Tracker & Workout Routines",
				url: "#",
				emoji: "💪",
			},
		],
		favoritesHolidayPlans: [
			{
				name: "Bali with friends",
				url: "#",
				emoji: "🇮🇩",
			},
			{
				name: "Japan with family",
				url: "#",
				emoji: "🇯🇵",
			},
			{
				name: "Road trip in South of France",
				url: "#",
				emoji: "🇫🇷",
			},
		],
	};

	let { ref = $bindable(null), ...restProps }: ComponentProps<typeof Sidebar.Root> = $props();
</script>

<Sidebar.Root class="border-r-0" {...restProps}>
	<Sidebar.Header>
		<AppName />
		<NavMain items={data.navMain} />
	</Sidebar.Header>
	<Sidebar.Content>
		<NavFavorites favoriteTypeName="Projects" favorites={data.favoritesProjects} />
		<NavFavorites favoriteTypeName="Holiday Plans" favorites={data.favoritesHolidayPlans} />
		<NavSecondary items={data.navSecondary} class="mt-auto" />
	</Sidebar.Content>
	<Sidebar.Rail />
</Sidebar.Root>
