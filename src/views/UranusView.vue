<script setup lang="ts">
import Uranus from "@/components/Planets/Uranus.vue";
import PlanentContent from "@/components/PlanentContent.vue";
import planetsData from "@/database/planets";
import GalaxyLayout from "@/layouts/GalaxyLayout.vue";
</script>

<template>
  <GalaxyLayout>
    <Uranus />

    <template #content>
      <PlanentContent :content="planetsData.uranus" />
    </template>
  </GalaxyLayout>
</template>
