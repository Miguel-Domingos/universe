<script setup lang="ts">
import { TresCanvas, useRenderLoop } from "@tresjs/core";
import { OrbitControls, Stars } from "@tresjs/cientos";
import { shallowRef } from "vue";

const StarRotation = shallowRef(0);

useRenderLoop().onLoop(({ delta }) => {
  StarRotation.value += 0.02 * delta;
});
</script>

<template>
  <div class="relative w-full h-full">
    <TresCanvas
      clear-color="#101010"
      :alpha="true"
      window-size
      power-preference="low-power"
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
        :position="[-3, 2, 6]"
        :fov="45"
        :aspect="1"
        :near="0.1"
      />
      <Suspense>
        <slot />
      </Suspense>
    </TresCanvas>

    <div class="absolute w-full h-full overflow-hidden pointer-events-none">
      <slot name="content" />
    </div>
  </div>
</template>
