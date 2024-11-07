<template>
  <component :is="props.tag" :style="styles" :class="classes">
    <slot></slot>
  </component>
</template>

<script setup lang="ts">
import { ref } from "vue";
import type { PropType, CSSProperties } from "vue";

type ComponentTag =
  | "div"
  | "span"
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "p"
  | "b"
  | "i"
  | "em"
  | "strong";

type FontWeight =
  | "normal"
  | "bold"
  | "bolder"
  | "lighter"
  | 100
  | 200
  | 300
  | 400
  | 500
  | 600
  | 700
  | 800
  | 900;

type ColorClass =
  | "primary"
  | "secondary"
  | "primary-inverted"
  | "secondary-inverted"
  | "accent";

const props = defineProps({
  tag: { type: String as PropType<ComponentTag>, default: "div" },
  fontSize: { type: Number },
  lineHeight: { type: Number },
  fontWeight: { type: [String, Number] as PropType<FontWeight> },
  color: { type: String as PropType<ColorClass> },
});

const styles = ref<CSSProperties>({
  fontSize: props.fontSize + "px",
  lineHeight: props.lineHeight,
  fontWeight: props.fontWeight,
});

const classes = computed(() => [{}, [props.color]]);
</script>

<style scoped lang="scss">
.primary {
  color: #eeeeee;
}

.secondary {
  color: #cccccc;
}

.primary-inverted {
  color: #111111;
}

.secondary-inverted {
  color: #333333;
}

.accent {
  color: #1976d2;
}
</style>
