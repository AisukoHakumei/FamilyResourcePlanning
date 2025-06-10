<script lang="ts">
    import { Button } from "$lib/components/ui/button/index.js";
    import * as Card from "$lib/components/ui/card/index.js";
    import { Input } from "$lib/components/ui/input/index.js";
    import { Label } from "$lib/components/ui/label/index.js";
    import { enhance } from "$app/forms";
    import type { ActionData } from "./$types";

    let { form }: { form: ActionData } = $props();
</script>

<div class="flex h-screen w-full items-center justify-center px-4">
    <Card.Root class="mx-auto max-w-sm">
        <Card.Header>
            <Card.Title class="text-2xl">Login</Card.Title>
            <Card.Description>
                Enter your email below to login to your account <br />
                <span style="color: red">{form?.message ?? ""}</span>
            </Card.Description>
        </Card.Header>
        <Card.Content>
            <form method="post" action="?/login" use:enhance>
                <div class="grid gap-4">
                    <div class="grid gap-2">
                        <Label for="username">Username</Label>
                        <Input id="username" name="username" type="text" placeholder="" required />
                    </div>
                    <div class="grid gap-2">
                        <div class="flex items-center">
                            <Label for="password">Password</Label>
                            <a href="##" class="ml-auto inline-block text-sm underline"> Forgot your password? </a>
                        </div>
                        <Input id="password" name="password" type="password" required />
                    </div>
                    <Button type="submit" class="w-full">Login</Button>
                    <Button type="submit" variant="outline" class="w-full" formaction="?/register">Register</Button>
                </div>
            </form>
        </Card.Content>
    </Card.Root>
</div>
