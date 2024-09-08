<script setup lang="ts">
import Mars from "@/components/Planets/Mars.vue";
import PlanentContent from "@/components/PlanentContent.vue";
import planetsData from "@/database/planets";
import GalaxyLayout from "@/layouts/GalaxyLayout.vue";
</script>

<template>
  <GalaxyLayout>
    <Mars />

    <template #content>
      <PlanentContent :content="planetsData.mars" />
    </template>
  </GalaxyLayout>
</template>
