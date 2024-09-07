<script setup lang="ts">
import PlanentContent from "@/components/PlanentContent.vue";
import planetsData from "@/database/planets";
</script>

<template>
  <PlanentContent :content="planetsData.mars" />
</template>
