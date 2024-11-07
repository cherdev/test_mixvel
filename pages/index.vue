<template>
  <div class="wrapper">
    <MouseTrackPad />
  </div>
</template>

<script setup lang="ts">
import MouseTrackPad from "@/components/MouseTrackPad.vue";
</script>

<style scoped lang="scss">
.wrapper {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
