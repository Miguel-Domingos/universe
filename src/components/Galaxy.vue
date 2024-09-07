<script setup lang="ts">
import GalaxyMap from "@/assets/textures/galaxy-square.jpg";
import { ref, shallowRef } from "vue";
import { SRGBColorSpace, type Mesh } from "three";
import { useEnvironment, Environment } from "@tresjs/cientos";
import { useRenderLoop } from "@tresjs/core";

const galaxyRef = ref<InstanceType<typeof Mesh> | null>(null);

const { resume, onLoop } = useRenderLoop();

const GalaxyRotation = shallowRef(0);

const GalaxyRef = ref<InstanceType<typeof Environment> | null>(null);

useRenderLoop().onLoop(({ delta }) => {});
</script>

<template>
  <!-- <TresMesh ref="galaxyRef">
    <TresSphereGeometry />
    <TresMeshStandardMaterial :map="texture" />
  </TresMesh> -->
  <Environment
    :background="true"
    :files="[GalaxyMap, GalaxyMap, GalaxyMap, GalaxyMap, GalaxyMap, GalaxyMap]"
  />
</template>
