<script setup lang="ts">
import { computed, ref, watch } from "vue";
import BzTubiao from "./BzTubiao.vue";
import BzPinpai from "./BzPinpai.vue";
import BzMoxingxuanxiang from "./BzMoxingxuanxiang.vue";
import BzMoshi from "./BzMoshi.vue";
import { shiyongwenben, type duihuamoshi, type moxingxuanxiang } from "./shuju";

// Agent 頁的聊天輸入框（ChatInputArea.tsx 經典樣式，Modern UI 預設關閉）與模型選擇器
// （ModelDropdown.tsx ModelSelectBox → inputs.tsx BreezellCustomDropdownBox，listStyle='menu'）。
// 選擇器上方是搜尋框和「Breezell / 帳號直登 / API 提供者」三個來源分頁，下方是「Models / OpenAI-Compatible」切換；
// OpenAI-Compatible 分頁裡的模型按槽位暱稱分組。滑過模型會在旁邊彈出每模型設定。
const props = withDefaults(
  defineProps<{
    xuanzeqi?: "" | "api" | "compat";
    xuanxiang?: boolean;
    moxing?: string;
    caowei?: string;
    wen?: string;
    da?: string;
    gaoliang?: "jiaonang" | "fenye" | "hang" | "moshi" | "";
    biaoji?: string;
    moshi?: duihuamoshi;
    qianru?: boolean;
    moshibiaoji?: string;
    jiaonangbiaoji?: string;
  }>(),
  {
    xuanzeqi: "",
    xuanxiang: false,
    moxing: "claude-opus-5-5",
    caowei: "Claude Relay",
    wen: "",
    da: "",
    gaoliang: "",
    biaoji: "",
    moshi: "agent",
    qianru: false,
    moshibiaoji: "",
    jiaonangbiaoji: "",
  },
);

const { t } = shiyongwenben();

const dangqianfenye = ref<"api" | "compat">(props.xuanzeqi === "compat" ? "compat" : "api");
watch(
  () => props.xuanzeqi,
  (zhi) => {
    if (zhi) dangqianfenye.value = zhi;
  },
);

const anthropichang = [
  { ming: "claude-fable-5-1", jia: "$10.0/$50.0" },
  { ming: "claude-fable-5", jia: "$10.0/$50.0" },
  { ming: "claude-opus-5", jia: "$5.0/$25.0" },
  { ming: "claude-opus-5-5", jia: "$4.0/$20.0" },
  { ming: "claude-opus-4-8", jia: "$5.0/$25.0" },
  { ming: "claude-sonnet-5-5", jia: "$2.0/$10.0" },
  { ming: "claude-haiku-5-5", jia: "$0.10/$0.50" },
];
const jianronghang = ["claude-opus-5-5", "claude-sonnet-5-5", "claude-haiku-5-5"];

// 未打開每模型設定時，膠囊後綴按模型預設值顯示：Opus 5.5 / Haiku 5.5 預設 Medium，其餘 Claude 5 系列預設 High。
const morenqiangdu = /opus-5-5|haiku-5-5/.test(props.moxing) ? "medium" : "high";
const xuanxiangzhi = ref<moxingxuanxiang>({ shangxiawen: 200_000, tuili: true, qiangdu: morenqiangdu, kuaisu: false });
const meihua = (zhi: string) => (zhi === "xhigh" ? "Extra High" : zhi.charAt(0).toUpperCase() + zhi.slice(1));
const houzhui = computed(() => {
  const bufen = [xuanxiangzhi.value.shangxiawen >= 900_000 ? "1M" : "200K"];
  if (xuanxiangzhi.value.tuili) bufen.push(meihua(xuanxiangzhi.value.qiangdu));
  if (xuanxiangzhi.value.kuaisu) bufen.push("Fast");
  return bufen.join(" ");
});
</script>

<template>
  <div :class="{ bz: !qianru }">
    <div class="bz-lt" :class="{ 'bz-chuangkou bz-cebian': !qianru, 'bz-lt-kai': xuanzeqi, 'bz-lt-qianru': qianru }">
      <div class="bz-lt-duihua">
        <template v-if="wen">
          <div class="bz-lt-yonghu">{{ wen }}</div>
          <div class="bz-lt-huida">
            <div class="bz-lt-huida-tou">
              <BzPinpai pinpai="claude" :daxiao="14" />
              <span>{{ moxing }}</span>
            </div>
            <div class="bz-lt-huida-wen">{{ da }}</div>
          </div>
        </template>
      </div>

      <div class="bz-lt-dibu">
        <div v-if="xuanzeqi" class="bz-lt-tanchu">
          <div class="bz-lt-xzq" data-bzm-popover="">
            <div class="bz-lt-sou">
              <div class="bz-lt-sou-gui" :class="{ 'bz-lt-he': dangqianfenye === 'api' }">
                <input class="bz-lt-sou-kuang" :placeholder="t('inputToolbar.searchModels')" readonly />
                <div v-if="dangqianfenye === 'api'" class="bz-lt-fenye" role="tablist">
                  <span class="bz-lt-tab"><span>{{ t("box.models.group.breezell") }}</span><span class="bz-lt-tab-shu">8</span></span>
                  <span class="bz-lt-tab"><span>{{ t("settings.providersTabSignIn") }}</span><span class="bz-lt-tab-shu">0</span></span>
                  <span class="bz-lt-tab bz-xuan"><span>{{ t("box.models.group.api") }}</span><span class="bz-lt-tab-shu">{{ anthropichang.length }}</span></span>
                </div>
              </div>
            </div>
            <div class="bz-lt-liebiao">
              <template v-if="dangqianfenye === 'api'">
                <div class="bz-lt-zu">
                  <span>Anthropic</span>
                  <svg class="bz-lt-zu-jian" viewBox="0 0 12 12" fill="none"><path d="M4.5 2.5L8 6L4.5 9.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /></svg>
                </div>
                <div
                  v-for="hang in anthropichang"
                  :key="hang.ming"
                  class="bz-lt-hang"
                  :class="{ 'bz-xuan': hang.ming === moxing, 'bz-xuanting': xuanxiang && hang.ming === moxing, 'bz-gl': gaoliang === 'hang' && hang.ming === moxing }"
                >
                  <span class="bz-lt-hang-zuo"><BzPinpai pinpai="claude" :daxiao="16" /><span class="bz-lt-hang-ming">{{ hang.ming }}</span></span>
                  <span class="bz-lt-hang-you">
                    <span class="bz-lt-jia">{{ hang.jia }}</span>
                    <svg v-if="hang.ming === moxing" class="bz-lt-gou" viewBox="0 0 12 12" fill="none"><path d="M10 3L4.5 8.5L2 6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /></svg>
                  </span>
                </div>
              </template>
              <template v-else>
                <div class="bz-lt-zu">
                  <span>{{ caowei }}</span>
                  <svg class="bz-lt-zu-jian" viewBox="0 0 12 12" fill="none"><path d="M4.5 2.5L8 6L4.5 9.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /></svg>
                </div>
                <div
                  v-for="ming in jianronghang"
                  :key="ming"
                  class="bz-lt-hang"
                  :class="{ 'bz-xuan': ming === moxing, 'bz-xuanting': xuanxiang && ming === moxing, 'bz-gl': gaoliang === 'hang' && ming === moxing }"
                >
                  <span class="bz-lt-hang-zuo"><BzPinpai pinpai="claude" :daxiao="16" /><span class="bz-lt-hang-ming">{{ ming }}</span></span>
                  <svg v-if="ming === moxing" class="bz-lt-gou" viewBox="0 0 12 12" fill="none"><path d="M10 3L4.5 8.5L2 6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /></svg>
                </div>
              </template>
            </div>
            <div class="bz-lt-dilan" role="tablist">
              <div class="bz-lt-dilan-gui" :class="{ 'bz-gl': gaoliang === 'fenye' }">
                <button type="button" class="bz-lt-tab" :class="{ 'bz-xuan': dangqianfenye === 'api' }" @click="dangqianfenye = 'api'">
                  <span>Models</span><span class="bz-lt-tab-shu">{{ anthropichang.length + 8 }}</span>
                </button>
                <button type="button" class="bz-lt-tab" :class="{ 'bz-xuan': dangqianfenye === 'compat' }" @click="dangqianfenye = 'compat'">
                  <span>OpenAI-Compatible</span><span class="bz-lt-tab-shu">{{ jianronghang.length }}</span>
                </button>
                <span v-if="gaoliang === 'fenye' && biaoji" class="bz-biaoji" style="top: -10px; right: -8px">{{ biaoji }}</span>
              </div>
            </div>
          </div>
          <div v-if="xuanxiang" class="bz-lt-fuceng" data-bzm-popover="">
            <BzMoxingxuanxiang :moxing="moxing" @gengxin="xuanxiangzhi = $event" />
          </div>
        </div>

        <div class="bz-lt-tuopan">
          <div class="bz-lt-shuru">
            <div class="bz-lt-zhanwei">{{ t("chat.input.placeholder") }}</div>
            <div class="bz-lt-gongju">
              <div class="bz-lt-gongju-zuo">
                <span class="bz-lt-moshi-wai" :class="{ 'bz-gl': gaoliang === 'moshi' }">
                  <BzMoshi :moshi="moshi" xingshi="jiaonang" />
                  <span v-if="gaoliang === 'moshi' && biaoji" class="bz-biaoji" style="top: -12px; right: -10px">{{ biaoji }}</span>
                  <span v-if="moshibiaoji" class="bz-biaoji" style="top: -14px; left: -6px">{{ moshibiaoji }}</span>
                </span>
                <span class="bz-lt-jiaonang" :class="{ 'bz-gl': gaoliang === 'jiaonang', 'bz-dakai': xuanzeqi }">
                  <span class="bz-lt-jiaonang-ming">{{ moxing }}</span>
                  <span class="bz-lt-jiaonang-hou">{{ houzhui }}</span>
                  <BzTubiao ming="chevron-down" :daxiao="12" />
                  <span v-if="gaoliang === 'jiaonang' && biaoji" class="bz-biaoji" style="top: -12px; right: -10px">{{ biaoji }}</span>
                  <span v-if="jiaonangbiaoji" class="bz-biaoji" style="top: -14px; left: -2px">{{ jiaonangbiaoji }}</span>
                </span>
              </div>
              <div class="bz-lt-gongju-you">
                <svg class="bz-lt-huan" width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
                  <circle cx="8" cy="8" r="6" fill="none" stroke-width="2" stroke="color-mix(in srgb, currentColor 22%, transparent)" />
                  <circle cx="8" cy="8" r="6" fill="none" stroke-width="2" stroke="currentColor" stroke-dasharray="4 40" transform="rotate(-90 8 8)" />
                </svg>
                <span class="bz-lt-at">@</span>
                <span class="bz-lt-fasong bz-jinyong"><BzTubiao ming="arrow-up" :daxiao="16" :cuxi="2" /></span>
              </div>
            </div>
          </div>
          <div class="bz-lt-tuopan-di">
            <span v-for="ming in ['paperclip', 'image', 'globe', 'sparkles']" :key="ming" class="bz-lt-tuopan-an"><BzTubiao :ming="ming" :daxiao="14" :cuxi="2" /></span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.bz-lt {
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 260px;
  padding: 12px;
}

.bz-lt.bz-lt-kai {
  min-height: 560px;
}

.bz-lt-duihua {
  display: flex;
  flex-direction: column;
  gap: 14px;
  flex: 1;
  padding: 4px 4px 16px;
}

.bz-lt-yonghu {
  align-self: stretch;
  padding: 8px 12px;
  border-radius: 10px;
  color: var(--bz-fg-1);
  font-size: 13px;
  line-height: 1.5;
  background: color-mix(in srgb, var(--bz-input-bg) 90%, var(--bz-sidebar-bg));
  border: 1px solid color-mix(in srgb, var(--bz-fg) 12%, transparent);
}

.bz-lt-huida {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.bz-lt-huida-tou {
  display: flex;
  align-items: center;
  gap: 6px;
  color: var(--bz-fg-3);
  font-size: 11px;
  font-weight: 600;
}

.bz-lt-huida-wen {
  color: var(--bz-fg-1);
  font-size: 13px;
  line-height: 1.6;
  white-space: pre-line;
}

.bz-lt-dibu {
  position: relative;
}

.bz-lt-tanchu {
  position: absolute;
  bottom: calc(100% + 4px);
  left: 24px;
  z-index: 5;
  display: flex;
  align-items: flex-end;
  gap: 2px;
}

.bz-lt-xzq,
.bz-lt-fuceng {
  border-radius: 8px;
  background: var(--bz-editor-bg);
  color: var(--bz-fg);
  border: 1px solid color-mix(in srgb, var(--bz-fg) 18%, transparent);
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.28), inset 0 1px 0 color-mix(in srgb, var(--bz-fg) 8%, transparent);
}

.bz-lt-xzq {
  display: flex;
  flex-direction: column;
  width: 320px;
  overflow: hidden;
}

.bz-lt-fuceng {
  margin-bottom: 64px;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.18), inset 0 1px 0 color-mix(in srgb, var(--bz-fg) 8%, transparent);
}

.bz-lt-sou {
  padding: 6px;
}

.bz-lt-sou-gui.bz-lt-he {
  display: flex;
  flex-direction: column;
  border-radius: 11px;
  background: color-mix(in srgb, var(--bz-fg) 6%, transparent);
  border: 1px solid color-mix(in srgb, var(--bz-fg) 7%, transparent);
}

.bz-lt-sou-kuang {
  width: 100%;
  padding: 6px 8px;
  border-radius: 6px;
  font-size: 12px;
  color: var(--bz-fg-1);
  background: color-mix(in srgb, var(--bz-fg) 8%, var(--bz-editor-bg));
  border: 1px solid color-mix(in srgb, var(--bz-fg) 14%, transparent);
}

.bz-lt-he .bz-lt-sou-kuang {
  margin: -1px -1px 0;
  width: calc(100% + 2px);
  border-radius: 11px;
}

.bz-lt-fenye,
.bz-lt-dilan-gui {
  position: relative;
  display: flex;
  gap: 2px;
  padding: 3px;
}

.bz-lt-tab {
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

.bz-lt-tab > span:first-child {
  overflow: hidden;
  text-overflow: ellipsis;
}

.bz-lt-tab.bz-xuan {
  color: var(--bz-fg-1);
  background: var(--bz-editor-bg);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.18);
}

.bz-lt-tab-shu {
  flex-shrink: 0;
  color: var(--bz-fg-3);
  font-size: 11px;
  font-variant-numeric: tabular-nums;
}

.bz-lt-liebiao {
  height: 280px;
  padding: 4px 0;
  overflow: hidden;
}

.bz-lt-zu {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 6px;
  padding: 8px 12px 4px;
  font-size: 11px;
  font-weight: 500;
  color: color-mix(in srgb, var(--bz-fg) 55%, transparent);
}

.bz-lt-zu-jian {
  width: 12px;
  height: 12px;
  opacity: 0.6;
  transform: rotate(90deg);
}

.bz-lt-hang {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 1px 4px;
  padding: 5px 8px;
  border-radius: 8px;
  font-size: 13px;
  line-height: 20px;
  white-space: nowrap;
  color: color-mix(in srgb, var(--bz-fg) 88%, transparent);
}

.bz-lt-hang.bz-xuan {
  color: var(--bz-fg-1);
}

.bz-lt-hang.bz-xuanting {
  background: color-mix(in srgb, var(--bz-fg) 8%, transparent);
}

.bz-lt-hang-zuo {
  display: flex;
  align-items: center;
  gap: 8px;
  min-width: 0;
}

.bz-lt-hang-ming {
  overflow: hidden;
  text-overflow: ellipsis;
}

.bz-lt-hang.bz-xuan .bz-lt-hang-ming {
  font-weight: 500;
}

.bz-lt-hang-you {
  display: flex;
  align-items: center;
  gap: 6px;
  flex-shrink: 0;
  padding-left: 16px;
}

.bz-lt-jia {
  font-size: 11px;
  font-weight: 600;
  font-style: italic;
  font-variant-numeric: tabular-nums;
  opacity: 0.4;
}

.bz-lt-gou {
  width: 12px;
  height: 12px;
  flex-shrink: 0;
  opacity: 0.8;
}

.bz-lt-dilan {
  padding: 6px;
  border-top: 1px solid color-mix(in srgb, var(--bz-fg) 12%, transparent);
}

.bz-lt-dilan-gui {
  border-radius: 11px;
  background: color-mix(in srgb, var(--bz-fg) 6%, transparent);
  border: 1px solid color-mix(in srgb, var(--bz-fg) 7%, transparent);
}

.bz-lt-tuopan {
  display: flex;
  flex-direction: column;
  gap: 2px;
  padding-bottom: 3px;
  border-radius: 14px;
  border: 1px dashed color-mix(in srgb, var(--bz-fg) 16%, transparent);
  background: color-mix(in srgb, var(--bz-fg) 3.5%, transparent);
}

.bz-lt-shuru {
  display: flex;
  flex-direction: column;
  gap: 18px;
  margin: -1px -1px 0;
  padding: 8px 10px;
  border-radius: 14px;
  background: color-mix(in srgb, var(--bz-input-bg) 90%, var(--bz-sidebar-bg));
  border: 1px solid color-mix(in srgb, var(--bz-fg) 12%, transparent);
}

.bz-lt-zhanwei {
  min-height: 20px;
  color: var(--bz-fg-3);
  font-size: 13px;
  white-space: pre;
}

.bz-lt-gongju {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 4px;
}

.bz-lt-gongju-zuo {
  display: flex;
  align-items: center;
  gap: 8px;
  min-width: 0;
}

.bz-lt-moshi-wai {
  position: relative;
  display: inline-flex;
  flex-shrink: 0;
  border-radius: 9999px;
}

.bz-lt.bz-lt-qianru {
  flex: 1;
  min-height: 0;
  min-width: 0;
  background: var(--bz-sidebar-bg);
}

.bz-lt-jiaonang {
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 4px;
  min-width: 0;
  height: 22px;
  padding: 0 4px;
  border-radius: 6px;
  font-size: 12px;
  color: var(--bz-fg-3);
}

.bz-lt-jiaonang.bz-dakai {
  background: color-mix(in srgb, var(--bz-fg) 8%, transparent);
}

.bz-lt-jiaonang-ming {
  min-width: 56px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.bz-lt-jiaonang-hou {
  flex-shrink: 1;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-left: 2px;
  font-weight: 500;
  white-space: nowrap;
  color: var(--bz-fg-4);
}

.bz-lt-gongju-you {
  display: flex;
  align-items: center;
  gap: 4px;
  flex-shrink: 0;
  color: var(--bz-fg-2);
}

.bz-lt-huan {
  margin-right: 6px;
  color: var(--bz-fg-3);
}

.bz-lt-at {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 22px;
  height: 22px;
  font-size: 18px;
  font-weight: 700;
  line-height: 1;
}

.bz-lt-fasong {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  color: #000;
  background: #fff;
  box-shadow: 0 0 0 1px color-mix(in srgb, var(--bz-fg) 14%, transparent);
}

.bz-lt-fasong.bz-jinyong {
  color: var(--bz-editor-bg);
  background: color-mix(in srgb, var(--bz-fg) 40%, transparent);
  box-shadow: none;
}

.bz-lt-tuopan-di {
  display: flex;
  align-items: center;
  gap: 2px;
  padding: 2px 6px 0;
  color: var(--bz-fg-3);
}

.bz-lt-tuopan-an {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 22px;
  border-radius: 6px;
}

@media (max-width: 640px) {
  .bz-lt-tanchu {
    left: 0;
    flex-direction: column;
    align-items: flex-start;
  }

  .bz-lt-fuceng {
    display: none;
  }

  .bz-lt-xzq {
    width: min(320px, 100%);
  }
}
</style>
