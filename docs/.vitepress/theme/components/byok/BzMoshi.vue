<script setup lang="ts">
import { computed } from "vue";
import { moshixinxi, type duihuamoshi } from "./shuju";

// 一個對話模式的圖示加名稱，與輸入框裡模式膠囊（ChatModeDropdown）的寫法一致：
// Chat 是普通文字，其餘模式是漸層文字；Agent 的圖示是動態光球。
// xingshi="jiaonang" 時外面再包一層淡灰膠囊（.breezell-mode-pill）。
const props = withDefaults(defineProps<{ moshi?: duihuamoshi; xingshi?: "wenzi" | "jiaonang"; jiantou?: boolean }>(), {
  moshi: "agent",
  xingshi: "wenzi",
  jiantou: false,
});

const xinxi = computed(() => moshixinxi[props.moshi]);
</script>

<template>
  <span class="bz-ms-mo" :class="{ 'bz-ms-jiaonang': xingshi === 'jiaonang' }">
    <span v-if="moshi === 'agent'" class="bz-qiu" aria-hidden="true" />
    <svg v-else width="14" height="14" :viewBox="xinxi.shitu" aria-hidden="true">
      <path
        :d="xinxi.lujing"
        :fill="xinxi.miaobian ? 'none' : 'currentColor'"
        :stroke="xinxi.miaobian ? 'currentColor' : undefined"
        :stroke-width="xinxi.miaobian ? 2 : undefined"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
    <span class="bz-ms-ming" :class="{ 'bz-ms-jianbian': xinxi.jianbian }" :style="xinxi.jianbian ? { backgroundImage: xinxi.jianbian } : undefined">{{ xinxi.mingcheng }}</span>
    <svg v-if="jiantou" class="bz-ms-jian" width="10" height="10" viewBox="0 0 12 12" fill="none" aria-hidden="true"><path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /></svg>
  </span>
</template>

<style scoped>
.bz-ms-mo {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  color: var(--bz-fg-2, var(--vp-c-text-1));
  font-size: 13.5px;
  font-weight: 600;
  line-height: 1.2;
  white-space: nowrap;
  vertical-align: middle;
}

.bz-ms-jiaonang {
  justify-content: center;
  min-width: 85px;
  padding: 2px 10px;
  border-radius: 9999px;
  font-size: 12px;
  background: color-mix(in srgb, var(--bz-fg, currentColor) 8%, transparent);
}

.bz-ms-jiaonang .bz-ms-ming {
  font-size: 13.5px;
}

.bz-ms-ming {
  margin-right: 2px;
}

.bz-ms-jianbian {
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent;
}

.bz-ms-jian {
  opacity: 0.7;
}
</style>
