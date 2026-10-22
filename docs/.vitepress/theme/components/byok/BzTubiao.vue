<script setup lang="ts">
import { computed } from "vue";
import { tubiao } from "./shuju";

const props = withDefaults(defineProps<{ ming: string; daxiao?: number; cuxi?: number }>(), {
  daxiao: 13,
  cuxi: 2.2,
});

const neirong = computed(() => tubiao[props.ming] ?? "");
</script>

<template>
  <svg
    :width="daxiao"
    :height="daxiao"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    :stroke-width="cuxi"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="true"
    v-html="neirong"
  />
</template>
