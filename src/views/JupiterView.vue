<script setup lang="ts">
import Jupiter from "@/components/Planets/Jupiter.vue";
import PlanentContent from "@/components/PlanentContent.vue";
import planetsData from "@/database/planets";
import GalaxyLayout from "@/layouts/GalaxyLayout.vue";
</script>

<template>
  <GalaxyLayout>
    <Jupiter />

    <template #content>
      <PlanentContent :content="planetsData.jupiter" />
    </template>
  </GalaxyLayout>
</template>
