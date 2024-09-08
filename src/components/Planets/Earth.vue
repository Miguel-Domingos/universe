<script setup lang="ts">
import EarthMap from "@/assets/textures/Earth/00_earthmap1k.jpg";
import EarthDisplacementMap from "@/assets/textures/Earth/01_earthbump1k.jpg";
import EarthNormalMap from "@/assets/textures/Earth/02_earthspec1k.jpg";
import CloudMap from "@/assets/textures/Earth/8k_earth_clouds.jpg";
import { ref } from "vue";
import type { Mesh } from "three";

import { useTexture, useRenderLoop } from "@tresjs/core";
const EarthTexture = await useTexture({
  map: EarthMap,
  displacementMap: EarthDisplacementMap,
  roughnessMap: EarthNormalMap,
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
    <TresSphereGeometry :args="[1.02, 100, 100]" />
    <TresMeshStandardMaterial
      v-bind="cloudTexture"
      :side="2"
      :opacity="0.4"
      :transparent="true"
      :depth-write="true"
    />
  </TresMesh>
  <TresMesh ref="sphereRef" :scale="1">
    <TresSphereGeometry :args="[1, 100, 100]" />
    <TresMeshStandardMaterial
      v-bind="EarthTexture"
      :displacement-scale="0.02"
      :metalness="0.4"
      :roughness="0.7"
    />
  </TresMesh>
  <TresAmbientLight :intensity="1" cast-shadow />
</template>
