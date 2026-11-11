<script setup lang="ts">
import { computed } from "vue";
import zibiao from "./codicon.json";

// 真正的 Codicon 字型圖示（資源管理器、活動列、分頁列、狀態列用的那一套）。
// codicon.json 的字碼取自 Breezell 源碼 src/vs/base/common/codiconsLibrary.ts，
// 字型檔是 docs/public/codicon.ttf（源碼 src/vs/base/browser/ui/codicons/codicon/codicon.ttf）。
// 需要「跟實際介面同一個圖形」時用這個，不要用 lucide 近似。
const props = withDefaults(defineProps<{ ming: string; daxiao?: number }>(), { daxiao: 16 });

const zi = computed(() => {
  const code = (zibiao as Record<string, string>)[props.ming];
  return code ? String.fromCharCode(parseInt(code, 16)) : "";
});
</script>

<template>
  <i class="bz-ci" :style="{ fontSize: `${daxiao}px` }" aria-hidden="true">{{ zi }}</i>
</template>
