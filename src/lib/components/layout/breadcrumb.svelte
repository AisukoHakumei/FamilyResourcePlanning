<script lang="ts">
    import * as Breadcrumb from "$lib/components/ui/breadcrumb/index.js";
    import { Separator } from "$lib/components/ui/separator/index.js";
    import * as Sidebar from "$lib/components/ui/sidebar/index.js";

    let { path } = $props();
</script>

<header class="bg-background sticky top-0 flex h-14 shrink-0 items-center gap-2">
    <div class="flex flex-1 items-center gap-2 px-3">
        <Sidebar.Trigger />
        <Separator orientation="vertical" class="mr-2 h-4" />
        <Breadcrumb.Root>
            <Breadcrumb.List>
                <Breadcrumb.Item>
                    <Breadcrumb.Page class="line-clamp-1">
                        {path}
                    </Breadcrumb.Page>
                </Breadcrumb.Item>
            </Breadcrumb.List>
        </Breadcrumb.Root>
    </div>
</header>
