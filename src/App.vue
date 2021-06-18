<template>
  <router-view />
</template>

<script lang="ts">
import { ref, provide } from 'vue';
import { router } from './router';
export default {
  name: 'App',
  setup() {
    const EDGE_WIDTH = 500;
    const width = document.documentElement.clientWidth;
    const menuVisible = ref(width > EDGE_WIDTH ? true : false);
    provide('menuVisible', menuVisible);

    router.afterEach(() => {
      if (width > EDGE_WIDTH) {
        menuVisible.value = true
      }
    })
  }
}
</script>
