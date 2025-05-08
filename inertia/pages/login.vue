<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { Head } from '@inertiajs/vue3'
import { cn } from '~/lib/utils'
import { Button } from '~/components/ui/button'
import { Card, CardContent } from '~/components/ui/card'
import { Input } from '~/components/ui/input'
import { Label } from '~/components/ui/label'
import placeholderImage from '~/images/placeholder.svg'

const props = defineProps<{
    class?: HTMLAttributes['class']
}>()
</script>

<template>

    <Head title="Login" />
    <div class="flex min-h-svh flex-col items-center justify-center bg-muted p-6 md:p-10">
        <div class="w-full max-w-sm md:max-w-3xl">
            <div :class="cn('flex flex-col gap-6', props.class)">
                <Card class="overflow-hidden p-0">
                    <CardContent class="grid p-0 md:grid-cols-2">
                        <form class="p-6 md:p-8">
                            <div class="flex flex-col gap-6">
                                <div class="flex flex-col items-center text-center">
                                    <h1 class="text-2xl font-bold">
                                        Welcome back
                                    </h1>
                                    <p class="text-muted-foreground text-balance">
                                        Login to your Acme Inc account
                                    </p>
                                </div>
                                <div class="grid gap-3">
                                    <Label for="email">Email</Label>
                                    <Input id="email" type="email" placeholder="m@example.com" required />
                                </div>
                                <div class="grid gap-3">
                                    <div class="flex items-center">
                                        <Label for="password">Password</Label>
                                        <a href="#" class="ml-auto text-sm underline-offset-2 hover:underline">
                                            Forgot your password?
                                        </a>
                                    </div>
                                    <Input id="password" type="password" required />
                                </div>
                                <Button type="submit" class="w-full">
                                    Login
                                </Button>
                            </div>
                        </form>
                        <div class="bg-muted relative hidden md:block">
                            <img :src="placeholderImage" alt="Image" class="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale">
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    </div>
</template>
