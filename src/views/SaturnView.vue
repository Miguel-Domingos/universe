<script setup lang="ts">
import Saturn from "@/components/Planets/Saturn.vue";
import PlanentContent from "@/components/PlanentContent.vue";
import planetsData from "@/database/planets";
import GalaxyLayout from "@/layouts/GalaxyLayout.vue";
</script>

<template>
  <GalaxyLayout>
    <Saturn />

    <template #content>
      <PlanentContent :content="planetsData.saturn" />
    </template>
  </GalaxyLayout>
</template>
