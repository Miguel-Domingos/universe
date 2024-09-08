<script setup lang="ts">
import Neptune from "@/components/Planets/Neptune.vue";
import PlanentContent from "@/components/PlanentContent.vue";
import planetsData from "@/database/planets";
import GalaxyLayout from "@/layouts/GalaxyLayout.vue";
</script>

<template>
  <GalaxyLayout>
    <Neptune />

    <template #content>
      <PlanentContent :content="planetsData.neptune" />
    </template>
  </GalaxyLayout>
</template>
