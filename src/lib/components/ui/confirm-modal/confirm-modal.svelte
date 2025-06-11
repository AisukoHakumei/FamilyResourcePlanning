<script lang="ts">
    import * as Dialog from "$lib/components/ui/dialog";
    import { Button } from "$lib/components/ui/button";

    type Props = Dialog.RootProps & {
        title: Snippet;
        description: Snippet;
        contentProps?: WithoutChild<Dialog.ContentProps>;
        cancelButtonText?: string;
        confirmButtonText?: Snippet;
        onConfirm?: () => void;
        onCancel?: () => void;
    };
    let {
        isOpen = $bindable(false),
        children,
        contentProps,
        title,
        description,
        cancelButtonText = "Cancel",
        confirmButton,
        confirmButtonText = "Confirm",
        onConfirm = () => {},
        onCancel = $bindable(() => {})
    }: Props = $props();
</script>

<Dialog.Root bind:open={isOpen}>
    <Dialog.Content>
        <Dialog.Header>
            <Dialog.Title>{@render title()}</Dialog.Title>
            <Dialog.Description>{@render description()}</Dialog.Description>
        </Dialog.Header>
        <Dialog.Footer>
            <Button variant="outline" onclick={onCancel}>{cancelButtonText}</Button>
            {@render confirmButton(confirmButtonText)}
        </Dialog.Footer>
    </Dialog.Content>
</Dialog.Root>