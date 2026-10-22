<script setup lang="ts">
import { computed, ref } from "vue";
import BzTubiao from "./BzTubiao.vue";
import BzPinpai from "./BzPinpai.vue";
import { shiyongwenben } from "./shuju";

// 視覺代理對話框（Settings.tsx VisionProxySettingsDialog）：為一個不能讀圖的模型指定「圖像辨識模型」。
// 下拉清單和聊天的模型選擇器同一套樣式（搜尋、來源分頁、按提供者分組），只列出能直接讀圖的模型——
// 純文字模型（isTextOnlyVisionProxyTarget）不會出現；第一項是「未設定」。這裡的清單可以點選。
const props = withDefaults(
  defineProps<{ mubiao?: string; xuanzhong?: string; zhankai?: boolean; gaoliang?: "xuanze" | "baocun" | ""; biaoji?: string }>(),
  { mubiao: "deepseek-v4-pro", xuanzhong: "claude-sonnet-5-5", zhankai: false, gaoliang: "", biaoji: "" },
);

const { t } = shiyongwenben();
const dakai = ref(props.zhankai);
const dangqian = ref(props.xuanzhong);

const zu = [
  // 已啟用的模型（承接「自訂 API」教學裡打開的 Claude 模型，以及 DeepSeek 預設啟用的 5 個）；
  // deepseek-v4-pro 自己是純文字模型，所以不在清單裡。
  {
    tigong: "Anthropic",
    pinpai: "claude" as const,
    moxing: ["claude-fable-5-1", "claude-fable-5", "claude-opus-5", "claude-opus-5-5", "claude-opus-4-8", "claude-sonnet-5-5", "claude-haiku-5-5"],
  },
  {
    tigong: "DeepSeek",
    pinpai: "deepseek" as const,
    moxing: ["deepseek-flash", "deepseek-v4.1-pro", "deepseek-v4.1-flash", "deepseek-v4-flash", "deepseek-v4-flash-vision-exp"],
  },
];
const zongshu = zu.reduce((he, z) => he + z.moxing.length, 0);
const xianshiming = computed(() => {
  if (!dangqian.value) return t("models.visionProxyNotConfigured");
  const z = zu.find((x) => x.moxing.includes(dangqian.value));
  return z ? `${dangqian.value} (${z.tigong})` : dangqian.value;
});
const xuan = (ming: string) => {
  dangqian.value = ming;
  dakai.value = false;
};
</script>

<template>
  <div class="bz">
    <div class="bz-chuangkou bz-sj-beijing" :class="{ 'bz-sj-gao': dakai }">
      <div class="bz-sj-mianban">
        <div class="bz-sj-tou">
          <div class="bz-sj-tou-wen">
            <div class="bz-sj-biaoti">{{ t("models.visionProxy") }}</div>
            <div class="bz-sj-mubiao">{{ mubiao }}</div>
          </div>
          <span class="bz-sj-guan"><BzTubiao ming="x" :daxiao="14" :cuxi="2.8" /></span>
        </div>
        <div class="bz-sj-ti">
          <div class="bz-sj-biaoqian">
            <span>{{ t("models.visionProxyModel") }}</span>
            <span v-if="dangqian" class="bz-mono bz-sj-dangqian">{{ dangqian }}</span>
          </div>
          <div class="bz-sj-jing" :class="{ 'bz-gl': gaoliang === 'xuanze' }">
            <button type="button" class="bz-sj-chufa" @click="dakai = !dakai">
              <span class="bz-sj-chufa-ming">{{ xianshiming }}</span>
              <BzTubiao ming="chevron-down" :daxiao="13" />
            </button>
            <span v-if="gaoliang === 'xuanze' && biaoji" class="bz-biaoji" style="top: -10px; right: -8px">{{ biaoji }}</span>
            <div v-if="dakai" class="bz-sj-liebiao">
              <div class="bz-sj-sou">
                <div class="bz-sj-sou-gui">
                  <input class="bz-sj-sou-kuang" :placeholder="t('inputToolbar.searchModels')" readonly />
                  <div class="bz-sj-fenye">
                    <span class="bz-sj-tab"><span>{{ t("box.models.group.breezell") }}</span><span class="bz-sj-shu">9</span></span>
                    <span class="bz-sj-tab"><span>{{ t("settings.providersTabSignIn") }}</span><span class="bz-sj-shu">0</span></span>
                    <span class="bz-sj-tab bz-xuan"><span>{{ t("box.models.group.api") }}</span><span class="bz-sj-shu">{{ zongshu }}</span></span>
                  </div>
                </div>
              </div>
              <div class="bz-sj-hangqu">
                <template v-for="z in zu" :key="z.tigong">
                  <div class="bz-sj-zu">
                    <span>{{ z.tigong }}</span>
                    <svg class="bz-sj-zujian" viewBox="0 0 12 12" fill="none"><path d="M4.5 2.5L8 6L4.5 9.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /></svg>
                  </div>
                  <button v-for="ming in z.moxing" :key="ming" type="button" class="bz-sj-hang" :class="{ 'bz-xuan': ming === dangqian }" @click="xuan(ming)">
                    <span class="bz-sj-hang-zuo"><BzPinpai :pinpai="z.pinpai" :daxiao="16" /><span>{{ ming }}</span></span>
                    <svg v-if="ming === dangqian" class="bz-sj-gou" viewBox="0 0 12 12" fill="none"><path d="M10 3L4.5 8.5L2 6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /></svg>
                  </button>
                </template>
              </div>
            </div>
          </div>
        </div>
        <div class="bz-sj-di">
          <span class="bz-sj-quxiao">{{ t("common.cancel") }}</span>
          <span class="bz-sj-baocun" :class="{ 'bz-gl': gaoliang === 'baocun' }">
            {{ t("common.save") }}
            <span v-if="gaoliang === 'baocun' && biaoji" class="bz-biaoji" style="top: -10px; right: -8px">{{ biaoji }}</span>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.bz-sj-beijing {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding: 32px 16px;
  background: color-mix(in srgb, var(--bz-editor-bg) 60%, #000 40%);
}

.bz-sj-beijing.bz-sj-gao {
  min-height: 650px;
}

.bz-sj-mianban {
  width: 100%;
  max-width: 448px;
  border-radius: 14px;
  color: var(--bz-fg);
  background: var(--bz-menu-bg);
  border: 1px solid color-mix(in srgb, var(--bz-fg) 14%, transparent);
  box-shadow: 0 18px 48px rgba(0, 0, 0, 0.28);
}

.bz-sj-tou {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 16px 20px;
  border-bottom: 1px solid color-mix(in srgb, var(--bz-fg) 10%, transparent);
}

.bz-sj-tou-wen {
  min-width: 0;
}

.bz-sj-biaoti {
  color: var(--bz-fg-1);
  font-size: 14px;
  font-weight: 600;
}

.bz-sj-mubiao {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: var(--bz-fg-4);
  font-size: 11px;
}

.bz-sj-guan {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 26px;
  height: 26px;
  flex-shrink: 0;
  border-radius: 50%;
  color: var(--bz-fg-1);
  opacity: 0.75;
  background: color-mix(in srgb, var(--bz-fg) 14%, transparent);
}

.bz-sj-ti {
  padding: 16px 20px 20px;
}

.bz-sj-biaoqian {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 8px;
  color: var(--bz-fg-2);
  font-size: 12px;
  font-weight: 500;
}

.bz-sj-dangqian {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: var(--bz-fg-4);
  font-size: 10.5px;
}

.bz-sj-jing {
  position: relative;
  padding: 6px 10px;
  border-radius: 12px;
  border: 1px solid color-mix(in srgb, var(--bz-fg) 12%, transparent);
  background: color-mix(in srgb, var(--bz-fg) 4%, transparent);
}

.bz-sj-chufa {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  width: 100%;
  min-height: 28px;
  font-size: 13px;
  color: var(--bz-fg-1);
}

.bz-sj-chufa-ming {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.bz-sj-liebiao {
  position: absolute;
  top: calc(100% + 4px);
  left: 0;
  right: 0;
  z-index: 5;
  border-radius: 8px;
  overflow: hidden;
  background: var(--bz-editor-bg);
  border: 1px solid color-mix(in srgb, var(--bz-fg) 18%, transparent);
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.28), inset 0 1px 0 color-mix(in srgb, var(--bz-fg) 8%, transparent);
}

.bz-sj-sou {
  padding: 6px;
}

.bz-sj-sou-gui {
  display: flex;
  flex-direction: column;
  border-radius: 11px;
  background: color-mix(in srgb, var(--bz-fg) 6%, transparent);
  border: 1px solid color-mix(in srgb, var(--bz-fg) 7%, transparent);
}

.bz-sj-sou-kuang {
  width: calc(100% + 2px);
  margin: -1px -1px 0;
  padding: 6px 8px;
  border-radius: 11px;
  font-size: 12px;
  color: var(--bz-fg-1);
  background: color-mix(in srgb, var(--bz-fg) 8%, var(--bz-editor-bg));
  border: 1px solid color-mix(in srgb, var(--bz-fg) 14%, transparent);
}

.bz-sj-fenye {
  display: flex;
  gap: 2px;
  padding: 3px;
}

.bz-sj-tab {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  flex: 1;
  min-width: 0;
  height: 26px;
  padding: 0 6px;
  border-radius: 8px;
  font-size: 11px;
  font-weight: 600;
  white-space: nowrap;
  overflow: hidden;
  color: var(--bz-fg-2);
}

.bz-sj-tab > span:first-child {
  overflow: hidden;
  text-overflow: ellipsis;
}

.bz-sj-tab.bz-xuan {
  color: var(--bz-fg-1);
  background: var(--bz-editor-bg);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.18);
}

.bz-sj-shu {
  flex-shrink: 0;
  color: var(--bz-fg-3);
}

.bz-sj-hangqu {
  max-height: 280px;
  overflow: hidden;
  padding: 4px 0;
}

.bz-sj-zu {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 12px 4px;
  font-size: 11px;
  font-weight: 500;
  color: color-mix(in srgb, var(--bz-fg) 55%, transparent);
}

.bz-sj-zujian {
  width: 12px;
  height: 12px;
  opacity: 0.6;
  transform: rotate(90deg);
}

.bz-sj-hang {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: calc(100% - 8px);
  margin: 1px 4px;
  padding: 5px 8px;
  border-radius: 8px;
  font-size: 13px;
  line-height: 20px;
  text-align: left;
  color: color-mix(in srgb, var(--bz-fg) 88%, transparent);
}

.bz-sj-hang:hover {
  background: color-mix(in srgb, var(--bz-fg) 8%, transparent);
}

.bz-sj-hang.bz-xuan {
  color: var(--bz-fg-1);
  font-weight: 500;
}

.bz-sj-hang-zuo {
  display: flex;
  align-items: center;
  gap: 8px;
  min-width: 0;
}

.bz-sj-gou {
  width: 12px;
  height: 12px;
  opacity: 0.8;
}

.bz-sj-di {
  display: flex;
  justify-content: flex-end;
  gap: 8px;
  padding: 14px 20px;
  border-top: 1px solid color-mix(in srgb, var(--bz-fg) 10%, transparent);
}

.bz-sj-quxiao,
.bz-sj-baocun {
  position: relative;
  padding: 6px 16px;
  border-radius: 8px;
  font-size: 13px;
}

.bz-sj-quxiao {
  color: var(--bz-fg-3);
}

.bz-sj-baocun {
  padding: 6px 20px;
  font-weight: 500;
  color: var(--bz-button-fg);
  background: var(--bz-button-bg);
}
</style>
