<script setup lang="ts">
import Earth from "@/components/Earth.vue";
import Mars from "@/components/Mars.vue";

import { TresCanvas, useRenderLoop } from "@tresjs/core";
import { OrbitControls, Stars } from "@tresjs/cientos";
import { shallowRef } from "vue";
import type { PlanetNames } from "@/types";

const StarRotation = shallowRef(0);

useRenderLoop().onLoop(({ delta }) => {
  StarRotation.value += 0.02 * delta;
});

const props = defineProps<{ planetName: PlanetNames }>();

const PlanetsComponent: Record<PlanetNames, any> = {
  Mercury: Earth,
  Venus: Earth,
  Earth: Earth,
  Mars: Mars,
  Jupiter: Earth,
  Saturn: Earth,
  Uranus: Earth,
  Neptune: Earth,
};
</script>

<template>
  <div class="relative w-full h-full">
    <TresCanvas
      clear-color="#101010"
      :alpha="true"
      window-size
      power-preference="high-performance"
    >
      <OrbitControls />
      <Stars
        :rotation="[StarRotation, StarRotation, StarRotation]"
        :radius="50"
        :depth="50"
        :count="10000"
        :size="0.3"
        :size-attenuation="true"
      />
      <TresPerspectiveCamera
        :position="[1, 2, 5]"
        :fov="45"
        :aspect="1"
        :near="0.1"
        :far="1000"
      />
      <Suspense>
        <component :is="PlanetsComponent[props.planetName]" />
      </Suspense>
    </TresCanvas>

    <div class="absolute w-full h-full overflow-hidden pointer-events-none">
      <slot />
    </div>
  </div>
</template>
