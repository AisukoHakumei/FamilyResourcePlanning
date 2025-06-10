<script lang="ts">
    import Activity from "@lucide/svelte/icons/activity";
    import DollarSign from "@lucide/svelte/icons/dollar-sign";
    import Users from "@lucide/svelte/icons/users";
    import CreditCard from "@lucide/svelte/icons/credit-card";
    import { Badge } from "$lib/components/ui/badge";
    import * as Card from "$lib/components/ui/card";
    import Breadcrumb from "$lib/components/layout/breadcrumb.svelte";
    import { enhance } from "$app/forms";
    import type { PageServerData } from "./$types";

    let { data }: { data: PageServerData } = $props();
</script>

<Breadcrumb path="Home" />
<div class="flex flex-1 flex-col gap-4 p-4">
    <div class="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
        <Card.Root data-x-chunk-name="dashboard-01-chunk-0" data-x-chunk-description="A card showing the total revenue in USD and the percentage difference from last month.">
            <Card.Header class="flex flex-row items-center justify-between space-y-0 pb-2">
                <Card.Title class="text-sm font-medium">Total Revenue</Card.Title>
                <DollarSign class="text-muted-foreground h-4 w-4" />
            </Card.Header>
            <Card.Content>
                <div class="text-2xl font-bold">$45,231.89</div>
                <p class="text-muted-foreground text-xs">+20.1% from last month</p>
            </Card.Content>
        </Card.Root>
        <Card.Root data-x-chunk-name="dashboard-01-chunk-1" data-x-chunk-description="A card showing the total subscriptions and the percentage difference from last month.">
            <Card.Header class="flex flex-row items-center justify-between space-y-0 pb-2">
                <Card.Title class="text-sm font-medium">Subscriptions</Card.Title>
                <Users class="text-muted-foreground h-4 w-4" />
            </Card.Header>
            <Card.Content>
                <div class="text-2xl font-bold">+2350</div>
                <p class="text-muted-foreground text-xs">+180.1% from last month</p>
            </Card.Content>
        </Card.Root>
        <Card.Root data-x-chunk-name="dashboard-01-chunk-2" data-x-chunk-description="A card showing the total sales and the percentage difference from last month.">
            <Card.Header class="flex flex-row items-center justify-between space-y-0 pb-2">
                <Card.Title class="text-sm font-medium">Sales</Card.Title>
                <CreditCard class="text-muted-foreground h-4 w-4" />
            </Card.Header>
            <Card.Content>
                <div class="text-2xl font-bold">+12,234</div>
                <p class="text-muted-foreground text-xs">+19% from last month</p>
            </Card.Content>
        </Card.Root>
        <Card.Root data-x-chunk-name="dashboard-01-chunk-3" data-x-chunk-description="A card showing the total active users and the percentage difference from last hour.">
            <Card.Header class="flex flex-row items-center justify-between space-y-0 pb-2">
                <Card.Title class="text-sm font-medium">Active Now</Card.Title>
                <Activity class="text-muted-foreground h-4 w-4" />
            </Card.Header>
            <Card.Content>
                <div class="text-2xl font-bold">+573</div>
                <p class="text-muted-foreground text-xs">+201 since last hour</p>
            </Card.Content>
        </Card.Root>
    </div>

    <h1>Hi, {data.user.username}!</h1>
    <p>Your user ID is {data.user.id}.</p>
    <form method="post" action="?/logout" use:enhance>
        <button>Sign out</button>
    </form>
</div>
