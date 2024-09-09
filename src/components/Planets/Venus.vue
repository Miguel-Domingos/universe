<script setup lang="ts">
import VenusMap from "@/assets/textures/Venus/2k_venus_surface.jpg";
import CloudMap from "@/assets/textures/Venus/2k_venus_atmosphere.jpg";
import { ref } from "vue";
import type { Mesh } from "three";

import { useTexture, useRenderLoop } from "@tresjs/core";
const VenusTexture = await useTexture({
  map: VenusMap,
});

const cloudTexture = await useTexture({
  map: CloudMap,
});

const sphereRef = ref<InstanceType<typeof Mesh> | null>(null);
const cloudRef = ref<InstanceType<typeof Mesh> | null>(null);

const { onLoop } = useRenderLoop();

onLoop(({ delta }) => {
  // I will run at every frame ~ 60FPS (depending of your monitor)
  if (sphereRef.value && cloudRef.value) {
    sphereRef.value.rotation.y += 0.002;
    // sphereRef.value.rotation.x -= 0.001;

    cloudRef.value.rotation.y -= 0.002;
    // cloudRef.value.rotation.x -= 0.001;
  }
});
</script>

<template>
  <TresMesh ref="cloudRef" :scale="1">
    <TresSphereGeometry :args="[1.01, 100, 100]" />
    <TresMeshStandardMaterial
      v-bind="cloudTexture"
      :side="2"
      :opacity="0.1"
      :transparent="true"
      :depth-write="true"
    />
  </TresMesh>
  <TresMesh ref="sphereRef" :scale="1">
    <TresSphereGeometry :args="[1, 100, 100]" />
    <TresMeshStandardMaterial
      v-bind="VenusTexture"
      :metalness="0.4"
      :roughness="0.7"
    />
  </TresMesh>
  <TresAmbientLight :intensity="1" cast-shadow />
</template>
