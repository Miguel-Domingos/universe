<script setup lang="ts">
import { useGLTF } from "@tresjs/cientos";

const path = "@/assets/github.glb";
const { scene } = await useGLTF(path, { draco: true });
</script>

<template>
  <primitive :object="scene" />
</template>
