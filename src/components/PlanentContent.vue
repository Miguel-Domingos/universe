<script setup lang="ts">
import { RouterLink } from "vue-router";
import type { Planet } from "@/types";

const props = defineProps<{ content: Planet }>();
</script>

<template>
  <div v-if="props" class="z-10 relative flex items-center w-full h-full">
    <div
      class="absolute transition pointer-events-auto top-4 left-4 opacity-70 hover:opacity-100"
    >
      <RouterLink to="/">
        <button class="px-4 py-2 text-white rounded bg-slate-800">
          Go Home
        </button>
      </RouterLink>
    </div>

    <div class="absolute transition pointer-events-auto top-4 right-4">
      <a href="https://github.com/Miguel-Domingos/universe" target="_blank">
        <button
          class="px-2 py-2 text-xs text-white rounded outline-none bg-slate-800"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            class="text-xs"
          >
            <path
              fill="currentColor"
              d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2"
            />
          </svg>
        </button>
      </a>
    </div>

    <RouterLink
      :to="`/${props.content.back}`"
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

    <div
      class="flex items-center justify-end w-full h-full text-white opacity-80 md:justify-between"
    >
      <div class="hidden w-full max-w-xs space-y-2 md:block">
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
      :to="`/${props.content.next}`"
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
</template>
