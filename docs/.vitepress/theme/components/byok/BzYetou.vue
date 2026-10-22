<script setup lang="ts">
import BzTubiao from "./BzTubiao.vue";
import { shiyongwenben } from "./shuju";

// 模型頁頁首：標題與說明（SectionHeading）、底線分頁（PageTabBar）、
// 提供者分類切換（CategorySwitch：Breezell · 帳號登入 · API 提供者 · OpenAI 相容）。
withDefaults(
  defineProps<{
    fenlei?: "breezell" | "signin" | "api" | "compat" | "";
    gaoliangfenlei?: "breezell" | "signin" | "api" | "compat" | "";
    biaoji?: string;
    shuliang?: { signin: number; api: number; compat: number };
  }>(),
  { fenlei: "", gaoliangfenlei: "", biaoji: "", shuliang: () => ({ signin: 9, api: 40, compat: 1 }) },
);

const { t } = shiyongwenben();

const fenye = [
  { jian: "box.usage.tab.models", ming: "boxes" },
  { jian: "box.usage.tab.cache", ming: "radio" },
  { jian: "box.usage.tab.tokens", ming: "coins" },
  { jian: "box.usage.tab.breezell", ming: "wallet" },
] as const;

const fenleilan = [
  { id: "breezell", jian: "box.models.group.breezell" },
  { id: "signin", jian: "box.models.group.signin" },
  { id: "api", jian: "box.models.group.api" },
  { id: "compat", jian: "box.models.group.compat" },
] as const;
</script>

<template>
  <div class="bz-yt">
    <div class="bz-yt-biaoti">{{ t("tab.models") }}</div>
    <div class="bz-yt-shuoming">{{ t("box.desc.models") }}</div>
    <div class="bz-yt-fenye" role="tablist">
      <span v-for="(ye, xuhao) in fenye" :key="ye.jian" class="bz-yt-ye" :class="{ 'bz-xuan': xuhao === 0 }">
        <BzTubiao :ming="ye.ming" :daxiao="14" />
        {{ t(ye.jian) }}
      </span>
    </div>
    <div v-if="fenlei" class="bz-yt-fenlei" role="tablist">
      <span
        v-for="lei in fenleilan"
        :key="lei.id"
        class="bz-yt-lei"
        :class="{ 'bz-xuan': lei.id === fenlei, 'bz-gl': lei.id === gaoliangfenlei }"
      >
        {{ t(lei.jian) }}
        <span v-if="lei.id !== 'breezell'" class="bz-yt-shu">{{ shuliang[lei.id] }}</span>
        <span v-if="lei.id === gaoliangfenlei && biaoji" class="bz-biaoji" style="top: -11px; right: -9px">{{ biaoji }}</span>
      </span>
    </div>
  </div>
</template>

<style scoped>
.bz-yt {
  display: flex;
  flex-direction: column;
}

.bz-yt-biaoti {
  color: var(--bz-fg-1);
  font-size: 22px;
  font-weight: 650;
  letter-spacing: -0.4px;
  line-height: 1.2;
}

.bz-yt-shuoming {
  margin: 6px 0 20px;
  max-width: 760px;
  color: var(--bz-fg-3);
  font-size: 13px;
  line-height: 1.5;
}

.bz-yt-fenye {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  column-gap: 22px;
  border-bottom: 1px solid color-mix(in srgb, var(--bz-fg) 8%, transparent);
}

.bz-yt-ye {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  height: 38px;
  padding: 0 1px;
  margin-bottom: -1px;
  border-bottom: 2px solid transparent;
  font-size: 13px;
  font-weight: 600;
  white-space: nowrap;
  color: var(--bz-fg-3);
}

.bz-yt-ye.bz-xuan {
  color: var(--bz-fg-1);
  border-bottom-color: var(--bz-fg);
}

.bz-yt-fenlei {
  display: inline-flex;
  align-items: center;
  flex-wrap: wrap;
  align-self: flex-start;
  max-width: 100%;
  gap: 2px;
  margin-top: 16px;
  padding: 3px;
  border-radius: 10px;
  background: color-mix(in srgb, var(--bz-fg) 5%, transparent);
  border: 1px solid color-mix(in srgb, var(--bz-fg) 8%, transparent);
}

.bz-yt-lei {
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  height: 28px;
  padding: 0 14px;
  border-radius: 7px;
  font-size: 13px;
  font-weight: 600;
  white-space: nowrap;
  color: var(--bz-fg-3);
}

.bz-yt-lei.bz-xuan {
  color: var(--bz-fg-1);
  background: color-mix(in srgb, var(--bz-fg) 13%, transparent);
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.35), inset 0 0 0 1px color-mix(in srgb, var(--bz-fg) 6%, transparent);
}

.bz-yt-shu {
  font-size: 11.5px;
  font-weight: 600;
  font-variant-numeric: tabular-nums;
  color: var(--bz-fg-4);
}

.bz-yt-lei.bz-xuan .bz-yt-shu {
  color: var(--bz-fg-3);
}
</style>
