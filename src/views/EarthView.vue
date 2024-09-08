<script setup lang="ts">
import Earth from "@/components/Planets/Earth.vue";
import PlanentContent from "@/components/PlanentContent.vue";
import planetsData from "@/database/planets";
import GalaxyLayout from "@/layouts/GalaxyLayout.vue";
</script>

<template>
  <GalaxyLayout>
    <Earth />

    <template #content>
      <PlanentContent :content="planetsData.earth" />
    </template>
  </GalaxyLayout>
</template>
