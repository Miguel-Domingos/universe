<script setup lang="ts">
import GalaxyLayout from "@/layouts/GalaxyLayout.vue";
import { RouterLink } from "vue-router";
import type { Planet } from "@/types";

const props = defineProps<{ content: Planet }>();
</script>

<template>
  <GalaxyLayout :planetName="props.content.name">
    <div v-if="props" class="flex items-center w-full h-full">
      <RouterLink
        to="/mars"
        class="transition pointer-events-auto opacity-30 hover:opacity-100"
      >
        <div
          class="flex items-center justify-center h-20 text-white -translate-x-1/2 bg-[#141414] rounded-full min-w-20"
        >
          <span class="translate-x-[75%]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="m3.55 12l7.35 7.35q.375.375.363.875t-.388.875t-.875.375t-.875-.375l-7.7-7.675q-.3-.3-.45-.675T.825 12t.15-.75t.45-.675l7.7-7.7q.375-.375.888-.363t.887.388t.375.875t-.375.875z"
              />
            </svg>
          </span>
        </div>
      </RouterLink>

      <div class="flex items-center justify-between w-full h-full text-white">
        <div class="w-full max-w-xs space-y-2">
          <h1 class="text-4xl font-bold">{{ props.content.name }}</h1>
          <div class="w-full">
            <span class="text-lg">
              {{ props.content.description }}
            </span>
          </div>
        </div>
        <div class="flex flex-col gap-2 text-right">
          <div class="flex flex-col">
            <h1 class="text-xl font-bold">Day</h1>
            <span> {{ props.content.day }} </span>
          </div>
          <div class="flex flex-col">
            <h1 class="text-xl font-bold">Year</h1>
            <span> {{ props.content.year }} </span>
          </div>

          <div class="flex flex-col">
            <h1 class="text-xl font-bold">Radius</h1>
            <span> {{ props.content.radius }} </span>
          </div>

          <div class="flex flex-col">
            <h1 class="text-xl font-bold">Planet Type</h1>
            <span> {{ props.content.planet_type }} </span>
          </div>
          <div class="flex flex-col">
            <h1 class="text-xl font-bold">Moons</h1>

            <span>{{ props.content.moons }}</span>
          </div>
        </div>
      </div>
      <RouterLink
        to="/mars"
        class="transition pointer-events-auto opacity-30 hover:opacity-100"
      >
        <div
          class="flex items-center justify-center h-20 text-white translate-x-1/2 bg-[#141414] rounded-full min-w-20"
        >
          <span class="-translate-x-[50%]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="m14.475 12l-7.35-7.35q-.375-.375-.363-.888t.388-.887t.888-.375t.887.375l7.675 7.7q.3.3.45.675t.15.75t-.15.75t-.45.675l-7.7 7.7q-.375.375-.875.363T7.15 21.1t-.375-.888t.375-.887z"
              />
            </svg>
          </span>
        </div>
      </RouterLink>
    </div>
  </GalaxyLayout>
</template>
