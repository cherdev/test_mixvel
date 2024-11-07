<template>
  <div class="mouse-track-pad">
    <VTypography
      class="mouse-track-pad__title"
      tag="h1"
      :font-size="32"
      font-weight="bold"
      color="accent"
    >
      Позиция курсора
    </VTypography>

    <div class="mouse-track-pad__col">
      <VTypography :font-size="22">X: {{ mouseTracking.x }}</VTypography>
      <VTypography :font-size="22">Y: {{ mouseTracking.y }}</VTypography>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useMouseTracking } from "@/composables/MouseTracking.ts";
import VTypography from "@/components/VTypography.vue";

const mouseTracking = useMouseTracking();
</script>

<style scoped lang="scss">
.mouse-track-pad {
  &__title {
    margin-bottom: 12px;
  }

  &__row {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &__col {
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: center;
  }
}
</style>
