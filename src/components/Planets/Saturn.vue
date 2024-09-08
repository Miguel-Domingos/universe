<script setup lang="ts">
import SaturnMap from "@/assets/textures/Saturn/8k_saturn.jpg";

import { ref } from "vue";

import { useTexture, useRenderLoop } from "@tresjs/core";
import type { Mesh } from "three";

const SaturnTexture = await useTexture({
  map: SaturnMap,
});

const sphereRef = ref<InstanceType<typeof Mesh> | null>(null);
const { resume, onLoop } = useRenderLoop();

onLoop(({ delta }) => {
  // I will run at every frame ~ 60FPS (depending of your monitor)
  if (sphereRef.value) {
    sphereRef.value.rotation.y += 0.005;
    sphereRef.value.rotation.x -= 0.001;
  }
});
</script>

<template>
  <TresAmbientLight :intensity="1" cast-shadow />
  <TresMesh ref="sphereRef" :scale="1">
    <TresSphereGeometry :args="[1, 100, 100]" />
    <TresMeshStandardMaterial
      v-bind="SaturnTexture"
      :metalness="0.4"
      :roughness="0.7"
    />
  </TresMesh>
</template>
