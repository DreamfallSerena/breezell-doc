<script setup lang="ts">
import { computed } from "vue";
import { shiyongwenben } from "./shuju";

// 在正文裡引用 Breezell 界面上的原文案（取自 Breezell 的 i18n），隨頁面語言切換，保證與軟體裡看到的完全一致。
const props = defineProps<{ jian: string; canshu?: string }>();
const { t, tihuan } = shiyongwenben();
const wenzi = computed(() => (props.canshu === undefined ? t(props.jian as never) : tihuan(props.jian as never, props.canshu)));
</script>

<template>
  <span class="bz-wenben">{{ wenzi }}</span>
</template>

<style scoped>
.bz-wenben {
  padding: 1px 6px;
  border-radius: 5px;
  font-weight: 600;
  color: var(--vp-c-text-1);
  background: var(--vp-c-default-soft);
  border: 1px solid var(--vp-c-divider);
}
</style>
