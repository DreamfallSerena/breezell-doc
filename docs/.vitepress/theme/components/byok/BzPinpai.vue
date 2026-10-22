<script setup lang="ts">
import { claudelujing, openailujing } from "./shuju";

// 品牌標記：Claude（彩色）、OpenAI（單色，相容槽位的預設標記）、Breezell（產品圖示的深色方塊）。
withDefaults(defineProps<{ pinpai: "claude" | "openai" | "breezell"; daxiao?: number }>(), { daxiao: 16 });
</script>

<template>
  <svg v-if="pinpai === 'claude'" :width="daxiao" :height="daxiao" viewBox="0 0 24 24" aria-hidden="true">
    <path :d="claudelujing" fill="#D97757" fill-rule="nonzero" />
  </svg>
  <svg v-else-if="pinpai === 'openai'" :width="daxiao" :height="daxiao" viewBox="0 0 24 24" aria-hidden="true">
    <path :d="openailujing" fill="currentColor" fill-rule="evenodd" />
  </svg>
  <span
    v-else
    class="bz-chanpin"
    :style="{ width: `${daxiao}px`, height: `${daxiao}px`, borderRadius: `${Math.round(daxiao * 0.26)}px`, fontSize: `${Math.round(daxiao * 0.56)}px` }"
    aria-hidden="true"
  >B</span>
</template>

<style scoped>
.bz-chanpin {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  color: #f2efe6;
  font-weight: 800;
  letter-spacing: -0.04em;
  background: linear-gradient(135deg, #2a2a2e 0%, #0b0b0c 100%);
  box-shadow: 0 0 0 1px color-mix(in srgb, var(--bz-fg) 12%, transparent), inset 0 0 0 1px rgba(255, 255, 255, 0.08);
}
</style>
