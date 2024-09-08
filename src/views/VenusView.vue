<script setup lang="ts">
import Venus from "@/components/Planets/Venus.vue";
import PlanentContent from "@/components/PlanentContent.vue";
import planetsData from "@/database/planets";
import GalaxyLayout from "@/layouts/GalaxyLayout.vue";
</script>

<template>
  <GalaxyLayout>
    <Venus />

    <template #content>
      <PlanentContent :content="planetsData.venus" />
    </template>
  </GalaxyLayout>
</template>
