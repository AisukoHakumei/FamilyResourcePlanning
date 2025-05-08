<script setup lang="ts">
import type { LucideIcon } from 'lucide-vue-next'

import { Badge } from '~/components/ui/badge'
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '~/components/ui/sidebar'

defineProps<{
  items: {
    title: string
    url: string
    icon: LucideIcon
    isActive?: boolean
    badge?: string
  }[]
}>()
</script>

<template>
  <SidebarMenu>
    <SidebarMenuItem v-for="item in items" :key="item.title">
      <SidebarMenuButton as-child :is-active="item.isActive">
        <a :href="item.url">
          <component :is="item.icon" />
          <span>{{ item.title }}</span>
          <Badge v-if="item?.badge === '' || item?.badge !== undefined">{{ item?.badge }}</Badge>
        </a>
      </SidebarMenuButton>
    </SidebarMenuItem>
  </SidebarMenu>
</template>
