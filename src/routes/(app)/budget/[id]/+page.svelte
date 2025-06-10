<script lang="ts">
    import Breadcrumb from "$lib/components/layout/breadcrumb.svelte";
    import { Progress } from "$lib/components/ui/progress";
    import * as Card from "$lib/components/ui/card";
    import CircleFadingPlus from "@lucide/svelte/icons/circle-fading-plus";
    import type { PageProps } from "./$types";

    let { data }: PageProps = $props();

    const path = "Budget / " + data.budget?.name;
</script>

<Breadcrumb {path} />
<div class="flex flex-1 flex-col gap-4 p-4">
    Budget details
    <div class="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
        {#each data.budgetLines as budgetLine}
            {@const percentage = Math.ceil((budgetLine.usedAmount / budgetLine.allocatedAmount) * 100)}
            <Card.Root>
                <Card.Header>
                    <Card.Title>{budgetLine.name}</Card.Title>
                    <Card.Description>Budget line</Card.Description>
                </Card.Header>
                <Card.Content>
                    <Progress value={percentage} />
                    {percentage} %
                </Card.Content>
                <Card.Footer>
                    <p>More details</p>
                </Card.Footer>
            </Card.Root>
        {/each}
        <Card.Root>
            <Card.Header>
                <Card.Title>New budget line</Card.Title>
            </Card.Header>
            <Card.Content>
                <p class="flex items-center justify-center mt-6"><CircleFadingPlus size={48} /></p>
            </Card.Content>
        </Card.Root>
    </div>
</div>
