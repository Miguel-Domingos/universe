<script setup lang="ts">
import Mercury from "@/components/Planets/Mercury.vue";
import PlanentContent from "@/components/PlanentContent.vue";
import planetsData from "@/database/planets";
import GalaxyLayout from "@/layouts/GalaxyLayout.vue";
</script>

<template>
  <GalaxyLayout>
    <Mercury />

    <template #content>
      <PlanentContent :content="planetsData.mercury" />
    </template>
  </GalaxyLayout>
</template>
