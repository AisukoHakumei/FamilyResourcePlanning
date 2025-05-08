<script setup lang="ts">
import NavFavoriteProjects from '~/components/layouts/NavFavoriteProjects.vue'

import NavMain from '~/components/layouts/NavMain.vue'
import NavSecondary from '~/components/layouts/NavSecondary.vue'
import NavFavoriteHolidayPlans   from '~/components/layouts/NavFavoriteHolidayPlans.vue'
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  type SidebarProps,
  SidebarRail,
} from '~/components/ui/sidebar'
import {
  Blocks,
  Calendar,
  Command,
  HandCoins,
  Home,
  ListTodo,
  MessageCircleQuestion,
  Settings2,
  SquareChartGantt,
  Trash2,
  TreePalm
} from 'lucide-vue-next'

const props = defineProps<SidebarProps>()

// This is sample data.
const data = {
  navMain: [   
    {
      title: 'Home',
      url: '#',
      icon: Home,
      isActive: true,
    },
    {
      title: 'Budget Planning',
      url: '#',
      icon: HandCoins,
    },
    {
      title: 'Projects',
      url: '#',
      icon: SquareChartGantt,
    },
    {
      title: 'Holiday Planning',
      url: '#',
      icon: TreePalm,
    },
    {
      title: 'Tasks & Chores',
      url: '#',
      icon: ListTodo,
      badge: '10',
    },
  ],
  navSecondary: [
    {
      title: 'Calendar',
      url: '#',
      icon: Calendar,
    },
    {
      title: 'Settings',
      url: '#',
      icon: Settings2,
    },
    {
      title: 'Templates',
      url: '#',
      icon: Blocks,
    },
    {
      title: 'Trash',
      url: '#',
      icon: Trash2,
    },
    {
      title: 'Help',
      url: '#',
      icon: MessageCircleQuestion,
    },
  ],
  favorites: [
    {
      name: 'Project Management & Task Tracking',
      url: '#',
      emoji: '📊',
    },
    {
      name: 'Family Recipe Collection & Meal Planning',
      url: '#',
      emoji: '🍳',
    }
  ],
  workspaces: [
    {
      name: 'Personal Life Management',
      emoji: '🏠',
      pages: [
        {
          name: 'Daily Journal & Reflection',
          url: '#',
          emoji: '📔',
        },
        {
          name: 'Health & Wellness Tracker',
          url: '#',
          emoji: '🍏',
        },
        {
          name: 'Personal Growth & Learning Goals',
          url: '#',
          emoji: '🌟',
        },
      ],
    },
    {
      name: 'Professional Development',
      emoji: '💼',
      pages: [
        {
          name: 'Career Objectives & Milestones',
          url: '#',
          emoji: '🎯',
        },
        {
          name: 'Skill Acquisition & Training Log',
          url: '#',
          emoji: '🧠',
        },
        {
          name: 'Networking Contacts & Events',
          url: '#',
          emoji: '🤝',
        },
      ],
    },
    {
      name: 'Creative Projects',
      emoji: '🎨',
      pages: [
        {
          name: 'Writing Ideas & Story Outlines',
          url: '#',
          emoji: '✍️',
        },
        {
          name: 'Art & Design Portfolio',
          url: '#',
          emoji: '🖼️',
        },
        {
          name: 'Music Composition & Practice Log',
          url: '#',
          emoji: '🎵',
        },
      ],
    },
    {
      name: 'Home Management',
      emoji: '🏡',
      pages: [
        {
          name: 'Household Budget & Expense Tracking',
          url: '#',
          emoji: '💰',
        },
        {
          name: 'Home Maintenance Schedule & Tasks',
          url: '#',
          emoji: '🔧',
        },
        {
          name: 'Family Calendar & Event Planning',
          url: '#',
          emoji: '📅',
        },
      ],
    },
    {
      name: 'Travel & Adventure',
      emoji: '🧳',
      pages: [
        {
          name: 'Trip Planning & Itineraries',
          url: '#',
          emoji: '🗺️',
        },
        {
          name: 'Travel Bucket List & Inspiration',
          url: '#',
          emoji: '🌎',
        },
        {
          name: 'Travel Journal & Photo Gallery',
          url: '#',
          emoji: '📸',
        },
      ],
    },
  ],
}
</script>

<template>
  <Sidebar class="border-r-0" v-bind="props">
    <SidebarHeader>
      <SidebarMenu>
        <SidebarMenuItem>
          <SidebarMenuButton class="w-fit px-1.5">
            <div class="flex aspect-square size-5 items-center justify-center rounded-md bg-sidebar-primary text-sidebar-primary-foreground">
              <Command class="size-3" />
            </div>
            <span class="truncate font-semibold">Family Resource Planner</span>
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarMenu>
      <NavMain :items="data.navMain" />
    </SidebarHeader>
    <SidebarContent>
      <NavFavoriteProjects :favorites="data.favorites" />
      <NavFavoriteHolidayPlans :workspaces="data.workspaces" />
      <NavSecondary :items="data.navSecondary" class="mt-auto" />
    </SidebarContent>
    <SidebarRail />
  </Sidebar>
</template>
