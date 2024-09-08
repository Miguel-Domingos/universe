<script setup lang="ts">
import UranusMap from "@/assets/textures/Uranus/2k_uranus.jpg";

import { ref } from "vue";

import { useTexture, useRenderLoop } from "@tresjs/core";
import type { Mesh } from "three";

const UranusTexture = await useTexture({
  map: UranusMap,
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
      v-bind="UranusTexture"
      :metalness="0.4"
      :roughness="0.7"
    />
  </TresMesh>
</template>
