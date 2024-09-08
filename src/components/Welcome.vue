<script setup lang="ts">
import { Text3D } from "@tresjs/cientos";
const SpaceMonoReularFont =
  "https://raw.githubusercontent.com/Tresjs/assets/main/fonts/FiraCodeRegular.json";
</script>

<template>
  <TresAmbientLight :intensity="1" cast-shadow />
  <Text3D
    text="Realistic 3D planets"
    :position="[0, 0.3, 0]"
    center
    :font="SpaceMonoReularFont"
  >
    <TresMeshNormalMaterial />
  </Text3D>
  <Text3D
    :size="0.15"
    text="by Miguel Domingos"
    :position="[0, -0.3, 0]"
    center
    :font="SpaceMonoReularFont"
  >
    <TresMeshNormalMaterial />
  </Text3D>
</template>
