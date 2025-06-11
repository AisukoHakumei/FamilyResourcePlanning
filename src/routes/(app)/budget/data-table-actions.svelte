<script lang="ts">
    import EllipsisIcon from "@lucide/svelte/icons/ellipsis";
    import Eye from "@lucide/svelte/icons/eye";
    import Pencil from "@lucide/svelte/icons/pencil";
    import Trash from "@lucide/svelte/icons/trash";
    import { Button } from "$lib/components/ui/button/index.ts";
    import * as DropdownMenu from "$lib/components/ui/dropdown-menu/index.ts";
    import ConfirmModal from "$lib/components/ui/confirm-modal/confirm-modal.svelte";
    import { goto } from "$app/navigation";
    import { enhance } from '$app/forms';

    let { id }: { id: string } = $props();
    let showDeleteModal = $state(false);

    let handleView = () => {
        // Handle view action
        goto(`/budget/${id}`);
    };

</script>

<ConfirmModal
        bind:isOpen={showDeleteModal}
        confirmButtonText="Delete"
        onCancel={() => showDeleteModal = false}
>
    {#snippet title()}
        Delete Budget
    {/snippet}
    {#snippet description()}
        Are you sure you want to delete this budget? This action cannot be undone.
    {/snippet}
    {#snippet confirmButton(confirmButtonText)}
        <form use:enhance method="post" action="?/deleteBudget&id={id}">
            <Button type="submit" variant="destructive">{confirmButtonText}</Button>
        </form>
    {/snippet}
</ConfirmModal>

<DropdownMenu.Root>
    <DropdownMenu.Trigger>
        {#snippet child({ props })}
            <Button
                    {...props}
                    variant="ghost"
                    size="icon"
                    class="relative size-8 p-0"
            >
                <span class="sr-only">Open menu</span>
                <EllipsisIcon />
            </Button>
        {/snippet}
    </DropdownMenu.Trigger>
    <DropdownMenu.Content>
        <DropdownMenu.Label>Actions</DropdownMenu.Label>
        <DropdownMenu.Item onSelect={handleView}><Eye />View</DropdownMenu.Item>
        <DropdownMenu.Item><Pencil />Edit</DropdownMenu.Item>
        <DropdownMenu.Separator />
        <DropdownMenu.Item onSelect={() => showDeleteModal = true}><Trash />Delete</DropdownMenu.Item>
    </DropdownMenu.Content>
</DropdownMenu.Root>