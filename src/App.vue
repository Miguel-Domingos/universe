<script setup lang="ts">
import { RouterView, useRouter } from "vue-router";

useRouter().beforeResolve((to, from, next) => {
  // @ts-ignore
  if (!document.startViewTransition) return;
  return new Promise((resolve) => {
    // @ts-ignore
    document.startViewTransition(async () => {
      resolve();
      await next();
    });
  });
});
</script>

<template>
  <RouterView v-slot="{ Component }">
    <template v-if="Component">
      <Transition mode="out-in">
        <KeepAlive>
          <Suspense>
            <!-- main content -->
            <component :is="Component"></component>

            <!-- loading state -->
            <template #fallback> Loading... </template>
          </Suspense>
        </KeepAlive>
      </Transition>
    </template>
  </RouterView>
</template>
