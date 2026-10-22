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
    gaoliang?: "jiaonang" | "fenye" | "hang" | "moshi" | "tishi" | "jiyi" | "jineng" | "";
    biaoji?: string;
    moshi?: duihuamoshi;
    qianru?: boolean;
    moshibiaoji?: string;
    jiaonangbiaoji?: string;
    tishi?: "" | "xuyao" | "wuxiao";
    daili?: string;
    tupian?: boolean;
    wentupian?: boolean;
    houzhui?: string;
    biaotilan?: boolean;
    jinengpan?: boolean;
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
    tishi: "",
    daili: "",
    tupian: false,
    wentupian: false,
    houzhui: "",
    biaotilan: false,
    jinengpan: false,
  },
);

const { t, tihuan } = shiyongwenben();
// 模型列與回覆標頭的品牌圖示跟著模型名走（ProviderIcon 對聚合提供者的規則）。
const pinpai = computed(() => (props.moxing.includes("deepseek") ? "deepseek" : "claude"));

const dangqianfenye = ref<"api" | "compat">(props.xuanzeqi === "compat" ? "compat" : "api");
watch(
  () => props.xuanzeqi,
  (zhi) => {
    if (zhi) dangqianfenye.value = zhi;
  },
);

// 托盤按鈕順序（ChatInputArea.tsx）：Breezell Browser、附加檔案、快速短語、提示詞優化、MCP、Skills。
// MCP 與快速短語在 Breezell 裡是 codicon，這裡用外形相近的 lucide 圖示代替。
const tuopananniu = ["globe", "paperclip", "message-square-text", "wand-sparkles", "plug", "layers"];
const neizhijineng = ["brainstorming", "breezell-design", "code-security-audit", "dispatching-parallel-agents", "receiving-code-review", "requesting-code-review"];
// 內建技能預設關閉（skillAvailability.ts skillToggleIsOn），這裡示意使用者已打開其中兩個。
const jinengkai = ref(new Set(["brainstorming", "requesting-code-review"]));
const qiehuanjineng = (ming: string) => {
  const xin = new Set(jinengkai.value);
  if (xin.has(ming)) xin.delete(ming);
  else xin.add(ming);
  jinengkai.value = xin;
};

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
const houzhuiwenzi = computed(() => {
  if (props.houzhui) return props.houzhui;
  const bufen = [xuanxiangzhi.value.shangxiawen >= 900_000 ? "1M" : "200K"];
  if (xuanxiangzhi.value.tuili) bufen.push(meihua(xuanxiangzhi.value.qiangdu));
  if (xuanxiangzhi.value.kuaisu) bufen.push("Fast");
  return bufen.join(" ");
});
</script>

<template>
  <div :class="{ bz: !qianru }">
    <div class="bz-lt" :class="{ 'bz-chuangkou bz-cebian': !qianru, 'bz-lt-kai': xuanzeqi || jinengpan, 'bz-lt-qianru': qianru }">
      <div v-if="biaotilan" class="bz-lt-biaotilan">
        <span class="bz-lt-btl-an"><BzTubiao ming="plus" :daxiao="16" :cuxi="1.6" /></span>
        <span class="bz-lt-btl-an" :class="{ 'bz-gl': gaoliang === 'jiyi' }">
          <BzTubiao ming="notebook" :daxiao="16" :cuxi="1.6" />
          <span v-if="gaoliang === 'jiyi' && biaoji" class="bz-biaoji" style="top: -10px; right: -10px">{{ biaoji }}</span>
        </span>
        <span class="bz-lt-btl-an"><BzTubiao ming="history" :daxiao="16" :cuxi="1.6" /></span>
      </div>
      <div class="bz-lt-duihua">
        <template v-if="wen">
          <div class="bz-lt-yonghu">
            <span v-if="wentupian" class="bz-lt-tu bz-lt-tu-wen" aria-hidden="true"><span class="bz-lt-tu-hua" /></span>
            <span>{{ wen }}</span>
          </div>
          <div class="bz-lt-huida">
            <div class="bz-lt-huida-tou">
              <BzPinpai :pinpai="pinpai" :daxiao="14" />
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

        <div v-if="tishi" class="bz-lt-tishi" role="status">
          <svg class="bz-lt-tishi-tu" width="16" height="16" viewBox="0 0 16 16" aria-hidden="true"><circle cx="8" cy="8" r="6.5" fill="none" stroke="currentColor" stroke-width="1.2" /><path d="M8 7v4" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" /><circle cx="8" cy="5" r=".8" fill="currentColor" /></svg>
          <div class="bz-lt-tishi-wen">
            <div class="bz-lt-tishi-biao">{{ t(tishi === "wuxiao" ? "chat.visionProxyHint.invalidTitle" : "chat.visionProxyHint.requiredTitle") }}</div>
            <div class="bz-lt-tishi-shuo">{{ tishi === "wuxiao" ? tihuan("chat.visionProxyHint.invalidDescription", daili, moxing) : tihuan("chat.visionProxyHint.requiredDescription", moxing) }}</div>
          </div>
          <span class="bz-lt-tishi-an" :class="{ 'bz-gl': gaoliang === 'tishi' }">
            {{ t("chat.visionProxyHint.configureAction") }}
            <span v-if="gaoliang === 'tishi' && biaoji" class="bz-biaoji" style="top: -10px; right: -8px">{{ biaoji }}</span>
          </span>
        </div>
        <div class="bz-lt-tuopan">
          <div class="bz-lt-shuru">
            <div v-if="tupian" class="bz-lt-fujian"><span class="bz-lt-tu" aria-hidden="true"><span class="bz-lt-tu-hua" /></span></div>
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
                  <span class="bz-lt-jiaonang-hou">{{ houzhuiwenzi }}</span>
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
            <span
              v-for="ming in tuopananniu"
              :key="ming"
              class="bz-lt-tuopan-an"
              :class="{ 'bz-dakai': ming === 'layers' && jinengpan, 'bz-gl': ming === 'layers' && gaoliang === 'jineng' }"
            >
              <BzTubiao :ming="ming" :daxiao="14" :cuxi="2" />
              <span v-if="ming === 'layers' && gaoliang === 'jineng' && biaoji" class="bz-biaoji" style="top: -12px; right: -10px">{{ biaoji }}</span>
            </span>
            <div v-if="jinengpan" class="bz-lt-jineng">
              <div class="bz-lt-jineng-tou">
                <span class="bz-lt-jineng-tab bz-xuan">{{ t("skills.builtinTab") }} <span class="bz-lt-jineng-shu">16</span></span>
                <span class="bz-lt-jineng-tab">{{ t("skills.myTab") }} <span class="bz-lt-jineng-shu">2</span></span>
                <span class="bz-lt-jineng-xinxi" :title="t('inputToolbar.toolsCacheTip')"><BzTubiao ming="info" :daxiao="12" /></span>
              </div>
              <div class="bz-lt-jineng-liebiao">
                <div v-for="ming in neizhijineng" :key="ming" class="bz-lt-jineng-hang" :class="{ 'bz-guan': !jinengkai.has(ming) }">
                  <BzTubiao ming="layers" :daxiao="13" />
                  <span class="bz-lt-jineng-ming">{{ ming }}</span>
                  <span v-if="jinengkai.has(ming)" class="bz-lt-jineng-yin" :title="t('inputToolbar.referenceSkill')"><BzTubiao ming="send" :daxiao="13" /></span>
                  <button type="button" class="bz-lt-jineng-kai" :class="{ 'bz-kai': jinengkai.has(ming) }" @click="qiehuanjineng(ming)" />
                </div>
              </div>
            </div>
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

.bz-lt-yonghu {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

/* 圖片附件縮圖（ChatInputArea.tsx ImageSelectionTag：32×32、紫色細框）；圖內是一張畫出來的報錯截圖示意。 */
.bz-lt-tu {
  position: relative;
  display: inline-block;
  width: 32px;
  height: 32px;
  overflow: hidden;
  border-radius: 2px;
  border: 1px solid rgba(168, 85, 247, 0.3);
  background: #1f2430;
}

.bz-lt-tu-wen {
  width: 96px;
  height: 60px;
}

.bz-lt-tu-hua {
  position: absolute;
  inset: 18% 12%;
  border-radius: 2px;
  background:
    linear-gradient(#e5534b, #e5534b) 8% 22% / 18% 14% no-repeat,
    linear-gradient(#c9d1d9, #c9d1d9) 34% 22% / 54% 10% no-repeat,
    linear-gradient(#768390, #768390) 8% 58% / 80% 8% no-repeat,
    linear-gradient(#768390, #768390) 8% 78% / 60% 8% no-repeat,
    #2d333b;
}

.bz-lt-fujian {
  display: flex;
  gap: 4px;
  margin-bottom: -10px;
}

.bz-lt-tishi {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px 12px;
  margin-bottom: 6px;
  padding: 10px 12px;
  border-radius: 6px;
  background: color-mix(in srgb, var(--bz-fg) 3.5%, transparent);
  border: 1px solid color-mix(in srgb, var(--bz-fg) 12%, transparent);
}

.bz-lt-tishi-tu {
  flex-shrink: 0;
  color: var(--bz-placeholder);
}

.bz-lt-tishi-wen {
  flex: 1;
  min-width: 180px;
}

.bz-lt-tishi-biao {
  color: var(--bz-fg-1);
  font-size: 12.5px;
  font-weight: 600;
  line-height: 1.375;
}

.bz-lt-tishi-shuo {
  margin-top: 2px;
  color: var(--bz-fg-3);
  font-size: 11.5px;
  line-height: 1.375;
}

.bz-lt-tishi-an {
  position: relative;
  flex-shrink: 0;
  padding: 4px 10px;
  border-radius: 4px;
  font-size: 11.5px;
  font-weight: 500;
  color: var(--bz-fg-2);
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

.bz-lt-biaotilan {
  display: flex;
  justify-content: flex-end;
  gap: 2px;
  height: 35px;
  margin: -12px -12px 8px;
  padding: 0 8px;
  align-items: center;
  border-bottom: 1px solid var(--bz-border4);
}

.bz-lt-btl-an {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 26px;
  height: 22px;
  border-radius: 5px;
  color: var(--bz-fg-2);
}

.bz-lt-tuopan-di {
  position: relative;
}

.bz-lt-tuopan-an.bz-dakai {
  color: var(--bz-fg-1);
  background: color-mix(in srgb, var(--bz-fg) 10%, transparent);
}

/* 技能面板（ChatInputArea.tsx showSkillsPanel）：內建 / 我的技能兩個分頁，每列可「在訊息中引用」或開關 */
.bz-lt-jineng {
  position: absolute;
  bottom: calc(100% + 6px);
  left: 6px;
  z-index: 6;
  display: flex;
  flex-direction: column;
  width: 280px;
  overflow: hidden;
  border-radius: 8px;
  background: var(--bz-editor-bg);
  color: var(--bz-fg);
  border: 1px solid color-mix(in srgb, var(--bz-fg) 18%, transparent);
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.28);
}

.bz-lt-jineng-tou {
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 6px 8px;
  border-bottom: 1px solid color-mix(in srgb, var(--bz-fg) 12%, transparent);
}

.bz-lt-jineng-tab {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  height: 24px;
  padding: 0 8px;
  border-radius: 4px;
  font-size: 11px;
  font-weight: 600;
  color: var(--bz-fg-3);
}

.bz-lt-jineng-tab.bz-xuan {
  color: var(--bz-fg-1);
  background: color-mix(in srgb, var(--bz-fg) 12%, transparent);
}

.bz-lt-jineng-shu {
  opacity: 0.6;
}

.bz-lt-jineng-xinxi {
  display: inline-flex;
  margin-left: auto;
  opacity: 0.7;
  color: var(--bz-desc, var(--bz-fg-3));
}

.bz-lt-jineng-liebiao {
  display: flex;
  flex-direction: column;
  padding: 4px 0;
}

.bz-lt-jineng-hang {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 6px 10px;
  color: var(--bz-fg);
}

.bz-lt-jineng-hang.bz-guan {
  color: var(--bz-fg-3);
}

.bz-lt-jineng-ming {
  flex: 1;
  min-width: 0;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-size: 13px;
  font-weight: 700;
}

.bz-lt-jineng-yin {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  color: var(--bz-fg-2);
}

.bz-lt-jineng-kai {
  position: relative;
  width: 28px;
  height: 16px;
  flex-shrink: 0;
  border-radius: 999px;
  background: color-mix(in srgb, var(--bz-fg) 26%, transparent);
}

.bz-lt-jineng-kai::after {
  content: "";
  position: absolute;
  top: 2px;
  left: 2px;
  width: 12px;
  height: 12px;
  border-radius: 999px;
  background: #fff;
  transition: left 150ms;
}

.bz-lt-jineng-kai.bz-kai {
  background: var(--bz-button-bg);
}

.bz-lt-jineng-kai.bz-kai::after {
  left: 14px;
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
