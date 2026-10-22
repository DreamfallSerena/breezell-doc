<script setup lang="ts">
import { computed, ref, watch } from "vue";
import BzTubiao from "./BzTubiao.vue";
import BzPinpai from "./BzPinpai.vue";
import BzMoxingxuanxiang from "./BzMoxingxuanxiang.vue";
import BzMoshi from "./BzMoshi.vue";
import BzShuruTanchu from "./BzShuruTanchu.vue";
import BzJiuchan from "./BzJiuchan.vue";
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
    tanchu?: string;
    shuru?: string;
    quanbiao?: boolean;
    liushi?: boolean;
    duilie?: boolean;
    bianji?: boolean;
    huigun?: boolean;
    youhuawen?: string;
    sou?: string;
    suoding?: boolean;
    tanchugaoliang?: string;
    duiliewen?: string;
    zhuru?: string;
    zhurukai?: boolean;
    zhuruwen?: string;
    qiehuanka?: string;
    jihuabiaoti?: string;
    jihuazhaiyao?: string;
    jihuawenjian?: string;
    jihuashu?: number;
    jihuazhuangtai?: "" | "yizhixing";
    jiuchan?: string;
    jiuchanzhankai?: boolean;
    jiuchanyange?: boolean;
    yinguo?: string;
    yinguowen?: string;
    yinguowancheng?: boolean;
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
    tanchu: "",
    shuru: "",
    quanbiao: false,
    liushi: false,
    duilie: false,
    bianji: false,
    huigun: false,
    youhuawen: "",
    sou: "side",
    suoding: false,
    tanchugaoliang: "",
    duiliewen: "Also update the README|Then run the tests",
    zhuru: "",
    zhurukai: false,
    zhuruwen: "",
    qiehuanka: "",
    jihuabiaoti: "",
    jihuazhaiyao: "",
    jihuawenjian: "dark-mode-toggle.plan.md",
    jihuashu: 5,
    jihuazhuangtai: "",
    jiuchan: "",
    jiuchanzhankai: false,
    jiuchanyange: false,
    yinguo: "",
    yinguowen: "",
    yinguowancheng: false,
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
const tuopanmingzi = ["Breezell Browser", "inputToolbar.attach", "inputToolbar.quickPhrases", "inputToolbar.optimizePrompt", "MCP", "inputToolbar.skills"];
// 托盤面板以按鈕為錨（floating-ui placement top-start）：面板左緣對齊按鈕，太寬時往左推回視窗內。
const tuopanmianban: Record<string, { xuhao: number; kuan: number }> = {
  duanyu: { xuhao: 2, kuan: 288 },
  youhua: { xuhao: 3, kuan: 340 },
  mcp: { xuhao: 4, kuan: 260 },
};
const tanchuweizhi = computed(() => {
  const lei = props.tanchu;
  if (!lei) return "";
  if (lei === "moshi") return "moshi";
  if (lei === "shangxiawen") return "quan";
  if (lei in tuopanmianban) return "tuopan";
  return "fu";
});
const tuopanzuo = computed(() => {
  const x = tuopanmianban[props.tanchu];
  return x ? `clamp(0px, ${6 + x.xuhao * 28}px, calc(100% - ${x.kuan}px))` : "0px";
});
// 托盤按鈕各自的高亮鍵與開啟狀態（面板開著時按鈕呈按下狀）。
const tuopangaoliang = ["liulanqi", "fujian", "duanyu", "youhua", "mcp", "jineng"];
const tuopanzhuangtai = ["liulanqi", "", "duanyu", "youhua", "mcp", "jineng"];
// 排隊訊息的示意文字用「|」分隔，跟著頁面語言翻譯。
const duiliewen = computed(() => props.duiliewen.split("|"));
// 超級記憶的注入提示（SidebarChat.tsx RecalledMemoriesDisclosure）：zhuru 寫成「總數|常駐|相關」，
// zhuruwen 是注入條目的標題，用「|」分隔，前面幾條是常駐的。
const zhurushu = computed(() => props.zhuru.split("|").map((x) => Number(x) || 0));
const zhurukaizhuang = ref(props.zhurukai);
const zhurutiao = computed(() => (props.zhuruwen ? props.zhuruwen.split("|") : []));

// Plan 模式的兩張卡（SidebarChat.tsx plan_mode_switch / update_plan）：
// 切換建議卡等待時進度條跑 30 秒兩輪後自動略過；計畫卡的 Auto 開關即「自動執行計畫卡」。
const qiehuanpianhao = ref<"alwaysAsk" | "never" | "alwaysRun">("alwaysAsk");
const pianhaokai = ref(false);
const jihuazidong = ref(false);
// Entanglement 回覆裡的因果追蹤列（CausalTraceToolCard）：「Tracing Causal Pathways · 摘要」，點開看細節。
const yinguokai = ref(false);

// Context 圓環：與面板裡的示意數字一致（約 47%）。
const huanchang = computed(() => (props.tanchu === "shangxiawen" ? 0.47 : 0.18) * 2 * Math.PI * 6);
const tanchugao: Record<string, number> = { moshi: 330, tiji: 330, tijisou: 380, xiegang: 470, shangxiawen: 470, duanyu: 340, youhua: 360, liulanqi: 430, mcp: 330 };
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
    <div
      class="bz-lt"
      :class="{ 'bz-chuangkou bz-cebian': !qianru, 'bz-lt-kai': xuanzeqi || jinengpan, 'bz-lt-qianru': qianru }"
      :style="tanchu && tanchugao[tanchu] ? { minHeight: `${tanchugao[tanchu]}px` } : undefined"
    >
      <div v-if="biaotilan" class="bz-lt-biaotilan">
        <span class="bz-lt-btl-an">
          <BzTubiao ming="plus" :daxiao="16" :cuxi="1.6" />
          <span v-if="quanbiao" class="bz-biaoji bz-lt-xb" style="top: -8px; right: -8px">1</span>
        </span>
        <span class="bz-lt-btl-an" :class="{ 'bz-gl': gaoliang === 'jiyi' }">
          <BzTubiao ming="notebook" :daxiao="16" :cuxi="1.6" />
          <span v-if="gaoliang === 'jiyi' && biaoji" class="bz-biaoji" style="top: -10px; right: -10px">{{ biaoji }}</span>
        </span>
        <span class="bz-lt-btl-an"><BzTubiao ming="history" :daxiao="16" :cuxi="1.6" /></span>
      </div>
      <BzJiuchan v-if="jiuchan" qianru :jieduan="jiuchan" :zhankai="jiuchanzhankai" :yange="jiuchanyange" :gaoliang="gaoliang" :biaoji="biaoji" />
      <div class="bz-lt-duihua">
        <template v-if="wen">
          <div class="bz-lt-yonghu-wai" :class="{ 'bz-lt-xianshi': bianji || huigun }">
            <div class="bz-lt-yonghu">
              <div class="bz-lt-yonghu-nei">
                <span v-if="wentupian" class="bz-lt-tu bz-lt-tu-wen" aria-hidden="true"><span class="bz-lt-tu-hua" /></span>
                <span>{{ wen }}</span>
              </div>
              <span class="bz-lt-huigun" :class="{ 'bz-gl': gaoliang === 'huigun' }" :title="t('editor.revertToThisPoint')">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M9 10h6c1.654 0 3 1.346 3 3s-1.346 3-3 3h-3v2h3c2.757 0 5-2.243 5-5s-2.243-5-5-5H9V5L4 9l5 4z" /></svg>
                <span v-if="gaoliang === 'huigun' && biaoji" class="bz-biaoji" style="top: -12px; right: -10px">{{ biaoji }}</span>
              </span>
            </div>
            <div v-if="zhuru" class="bz-lt-zhuru" :class="{ 'bz-gl': gaoliang === 'zhuru' }">
              <span v-if="gaoliang === 'zhuru' && biaoji" class="bz-biaoji" style="top: -10px; right: -8px">{{ biaoji }}</span>
              <button type="button" class="bz-lt-zhuru-an" :class="{ 'bz-kai': zhurukaizhuang }" @click="zhurukaizhuang = !zhurukaizhuang">
                <svg width="14" height="14" viewBox="0 0 16 16" aria-hidden="true" class="bz-lt-zhuru-quan"><circle cx="8" cy="8" r="5.5" fill="none" stroke="currentColor" stroke-width="1.2" /></svg>
                <BzTubiao ming="library" :daxiao="12" :cuxi="2" class="bz-lt-zhuru-tu" />
                <span class="bz-lt-zhuru-wen">{{ tihuan("superMemory.recalled.usedBreakdown" as never, zhurushu[0], zhurushu[1], zhurushu[2]) }}</span>
                <svg class="bz-lt-zhuru-jian" width="12" height="12" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-width="2" d="m18 9l-6 6l-6-6" /></svg>
              </button>
              <div v-if="zhurukaizhuang" class="bz-lt-zhuru-kuang">
                <div v-for="(x, i) in zhurutiao" :key="i" class="bz-lt-zhuru-tiao">
                  <span class="bz-lt-zhuru-lai">{{ t((i < zhurushu[1] ? "superMemory.recalled.sourceResident" : "superMemory.recalled.sourceRelevant") as never) }}</span>
                  <span>{{ x }}</span>
                </div>
              </div>
            </div>
            <span class="bz-lt-bianji" :class="{ 'bz-gl': gaoliang === 'bianji' }" aria-label="Edit message">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" style="transform: scaleX(-1)" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.779 17.779L4.36 19.918L6.5 13.5m4.279 4.279l8.364-8.643a3.027 3.027 0 0 0-2.14-5.165a3.03 3.03 0 0 0-2.14.886L6.5 13.5m4.279 4.279L6.499 13.5m2.14 2.14l6.213-6.504M12.75 7.04L17 11.28" /></svg>
              <span v-if="gaoliang === 'bianji' && biaoji" class="bz-biaoji" style="top: -12px; left: -12px">{{ biaoji }}</span>
            </span>
          </div>
          <div class="bz-lt-huida">
            <div class="bz-lt-huida-tou">
              <BzPinpai :pinpai="pinpai" :daxiao="14" />
              <span>{{ moxing }}</span>
            </div>
            <div v-if="yinguo" class="bz-lt-yinguo" :class="{ 'bz-gl': gaoliang === 'yinguo' }">
              <span v-if="gaoliang === 'yinguo' && biaoji" class="bz-biaoji" style="top: -10px; right: -8px">{{ biaoji }}</span>
              <button type="button" class="bz-lt-yinguo-tou" @click="yinguokai = !yinguokai">
                <span class="bz-lt-yinguo-ming">{{ yinguowancheng ? "Causal Trace Complete" : "Tracing Causal Pathways" }}</span>
                <span class="bz-lt-yinguo-dian">·</span>
                <span class="bz-lt-yinguo-chip">{{ yinguo }}</span>
                <svg width="13" height="13" viewBox="0 0 24 24" class="bz-lt-yinguo-jian" :class="{ 'bz-kai': yinguokai }"><path fill="none" stroke="currentColor" stroke-width="2" d="m18 9l-6 6l-6-6" /></svg>
              </button>
              <div v-if="yinguokai && yinguowen" class="bz-lt-yinguo-ti">{{ yinguowen.split("|").join("\n") }}</div>
            </div>
            <div class="bz-lt-huida-wen">{{ da }}<span v-if="liushi" class="bz-lt-dian" aria-hidden="true"><i /><i /><i /></span></div>
            <div v-if="qiehuanka" class="bz-lt-ka bz-lt-qhk" :class="{ 'bz-gl': gaoliang === 'qiehuanka' }">
              <span v-if="gaoliang === 'qiehuanka' && biaoji" class="bz-biaoji" style="top: -10px; right: -8px">{{ biaoji }}</span>
              <div class="bz-lt-qhk-tou">
                <BzTubiao ming="library" :daxiao="14" :cuxi="2" class="bz-lt-qhk-tu" />
                <span class="bz-lt-qhk-biao">{{ t("planSwitch.title") }}</span>
              </div>
              <div class="bz-lt-qhk-yuanyin">{{ qiehuanka }}</div>
              <div class="bz-lt-qhk-di">
                <span class="bz-lt-qhk-pianhao-wai">
                  <button type="button" class="bz-lt-qhk-pianhao" @click="pianhaokai = !pianhaokai">
                    {{ t(`planSwitch.${qiehuanpianhao}` as never) }}
                    <svg width="10" height="10" viewBox="0 0 16 16"><path fill="currentColor" fill-rule="evenodd" d="m7.976 10.072l4.357-4.357l.62.618L8.284 11h-.618L3 6.333l.619-.618z" clip-rule="evenodd" /></svg>
                  </button>
                  <div v-if="pianhaokai" class="bz-lt-qhk-caidan">
                    <button v-for="x in (['alwaysAsk', 'never', 'alwaysRun'] as const)" :key="x" type="button" @click="qiehuanpianhao = x; pianhaokai = false">
                      <svg v-if="qiehuanpianhao === x" width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M10 3L4.5 8.5L2 6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /></svg>
                      <span v-else class="bz-lt-qhk-kong" />
                      {{ t(`planSwitch.${x}` as never) }}
                    </button>
                  </div>
                </span>
                <span class="bz-lt-qhk-an">
                  <span class="bz-lt-qhk-lue">{{ t("planSwitch.skip") }}</span>
                  <span class="bz-lt-qhk-qie">{{ t("planSwitch.switch") }}<i>^⏎</i></span>
                </span>
              </div>
              <div class="bz-lt-qhk-jindu"><i /></div>
            </div>
            <div v-if="jihuabiaoti" class="bz-lt-ka bz-lt-jh" :class="{ 'bz-gl': gaoliang === 'jihua' }">
              <span v-if="gaoliang === 'jihua' && biaoji" class="bz-biaoji" style="top: -10px; right: -8px">{{ biaoji }}</span>
              <div class="bz-lt-jh-tou">
                <span class="bz-lt-jh-wenjian"><BzTubiao ming="library" :daxiao="14" :cuxi="2" class="bz-lt-jh-tu" />{{ jihuawenjian }}</span>
                <BzTubiao ming="download" :daxiao="13" :cuxi="2" class="bz-lt-jh-dakai" />
              </div>
              <div class="bz-lt-jh-biao">{{ jihuabiaoti }}</div>
              <div class="bz-lt-jh-zhai">{{ jihuazhaiyao }}</div>
              <div class="bz-lt-jh-shu">{{ jihuashu }} to-dos</div>
              <div class="bz-lt-jh-di">
                <span class="bz-lt-jh-kan">{{ t("planCard.actions.viewPlan") }}</span>
                <span class="bz-lt-jh-you">
                  <template v-if="jihuazhuangtai === 'yizhixing'">
                    <span class="bz-lt-jh-ruo">{{ t("planCard.actions.executed") }} <BzTubiao ming="check" :daxiao="13" :cuxi="2.4" /></span>
                  </template>
                  <template v-else>
                    <span class="bz-lt-jh-ruo">{{ t("planCard.actions.skip") }}</span>
                    <span class="bz-lt-jh-ruo">{{ t("planCard.actions.auto") }} <button type="button" class="bz-kaiguan bz-xiao" :class="{ 'bz-kai': jihuazidong }" @click="jihuazidong = !jihuazidong" /></span>
                    <span class="bz-lt-jh-zhixing">{{ t("planCard.actions.execute") }}<i> Ctrl+Enter</i></span>
                  </template>
                </span>
              </div>
            </div>
          </div>
        </template>
      </div>

      <div v-if="huigun" class="bz-lt-zhezhao">
        <div class="bz-lt-queren" role="dialog">
          <div class="bz-lt-queren-nei">
            <div class="bz-lt-queren-biao">{{ t("editor.revertConfirmTitle") }}</div>
            <div class="bz-lt-queren-shuo">{{ t("editor.revertConfirmBody") }}</div>
          </div>
          <div class="bz-lt-queren-di">
            <span class="bz-lt-queren-ci">{{ t("editor.revertConfirmKeep") }}</span>
            <span class="bz-lt-queren-zhu">{{ t("editor.revertConfirmDo") }}<span class="bz-lt-queren-jian">⏎</span></span>
          </div>
        </div>
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
        <div v-if="duilie" class="bz-lt-duilie" :class="{ 'bz-gl': gaoliang === 'duilie' }">
          <span v-if="gaoliang === 'duilie' && biaoji" class="bz-biaoji" style="top: -10px; right: -8px">{{ biaoji }}</span>
          <div class="bz-lt-duilie-tou">
            <span>{{ t("chat.queue.queued").replace("{0}", "2") }}</span>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="transform: rotate(90deg)"><polyline points="9 18 15 12 9 6" /></svg>
          </div>
          <div v-for="(x, i) in duiliewen" :key="i" class="bz-lt-duilie-hang">
            <svg class="bz-lt-duilie-tu" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z" /></svg>
            <span class="bz-lt-duilie-wen">{{ x }}</span>
            <span class="bz-lt-duilie-an">
              <span :class="{ 'bz-jinyong': i === 0 }" :title="t('chat.queue.moveUp')"><svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M4 10l4-4 4 4" /></svg></span>
              <span :class="{ 'bz-jinyong': i === duiliewen.length - 1 }" :title="t('chat.queue.moveDown')"><svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M4 6l4 4 4-4" /></svg></span>
              <span :title="t('common.edit')"><svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor" stroke="currentColor" stroke-width="0.6"><path d="M13.23 1h-1.46L3.52 9.25l-.16.22L1 13.59 2.41 15l4.12-2.36.22-.16L15 4.23V2.77L13.23 1zM2.41 13.59l1.51-3 1.45 1.45-2.96 1.55zm3.83-2.06L4.47 9.76l8-8 1.77 1.77-8 8z" /></svg></span>
              <span :title="t('chat.queue.sendNow')"><svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor" stroke="currentColor" stroke-width="0.6"><path d="M8 1L3 6h3v4h4V6h3L8 1zm5 10H3v1h10v-1z" /></svg></span>
              <span :title="t('common.delete')"><svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor" stroke="currentColor" stroke-width="0.6"><path d="M10 3h3v1h-1v9l-1 1H5l-1-1V4H3V3h3V2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v1zM9 2H7v1h2V2zM5 4v9h6V4H5zm2 2h1v5H7V6zm2 0h1v5H9V6z" /></svg></span>
            </span>
          </div>
        </div>
        <div class="bz-lt-tuopan">
          <div v-if="tanchuweizhi === 'fu' || tanchuweizhi === 'quan' || tanchuweizhi === 'tuopan'" class="bz-lt-tc" :class="`bz-lt-tc-${tanchuweizhi}`" :style="tanchuweizhi === 'tuopan' ? { left: tuopanzuo } : undefined">
            <BzShuruTanchu :lei="tanchu" :moshi="moshi" :suoding="suoding" :gaoliang="tanchugaoliang" :biaoji="biaoji" :youhuawen="youhuawen" :sou="sou" />
          </div>
          <div class="bz-lt-shuru">
            <div v-if="tanchuweizhi === 'moshi'" class="bz-lt-tc bz-lt-tc-moshi">
              <BzShuruTanchu lei="moshi" :moshi="moshi" :suoding="suoding" />
            </div>
            <div v-if="tupian" class="bz-lt-fujian"><span class="bz-lt-tu" aria-hidden="true"><span class="bz-lt-tu-hua" /></span></div>
            <div v-if="shuru" class="bz-lt-shuruwen">{{ shuru }}<span class="bz-lt-guangbiao" aria-hidden="true" /></div>
            <div v-else class="bz-lt-zhanwei">
              {{ t("chat.input.placeholder") }}
              <span v-if="quanbiao" class="bz-biaoji bz-lt-xb" style="top: -6px; right: 0">2</span>
            </div>
            <div class="bz-lt-gongju">
              <div class="bz-lt-gongju-zuo">
                <span class="bz-lt-moshi-wai" :class="{ 'bz-gl': gaoliang === 'moshi' }">
                  <BzMoshi :moshi="moshi" xingshi="jiaonang" />
                  <span v-if="quanbiao" class="bz-biaoji bz-lt-xb" style="top: -12px; right: -8px">3</span>
                  <span v-if="gaoliang === 'moshi' && biaoji" class="bz-biaoji" style="top: -12px; right: -10px">{{ biaoji }}</span>
                  <span v-if="moshibiaoji" class="bz-biaoji" style="top: -14px; left: -6px">{{ moshibiaoji }}</span>
                </span>
                <span class="bz-lt-jiaonang" :class="{ 'bz-gl': gaoliang === 'jiaonang', 'bz-dakai': xuanzeqi }">
                  <span class="bz-lt-jiaonang-ming">{{ moxing }}</span>
                  <span class="bz-lt-jiaonang-hou">{{ houzhuiwenzi }}</span>
                  <BzTubiao ming="chevron-down" :daxiao="12" />
                  <span v-if="quanbiao" class="bz-biaoji bz-lt-xb" style="top: -12px; right: -8px">4</span>
                  <span v-if="gaoliang === 'jiaonang' && biaoji" class="bz-biaoji" style="top: -12px; right: -10px">{{ biaoji }}</span>
                  <span v-if="jiaonangbiaoji" class="bz-biaoji" style="top: -14px; left: -2px">{{ jiaonangbiaoji }}</span>
                </span>
              </div>
              <div class="bz-lt-gongju-you">
                <span v-if="liushi" class="bz-lt-zhuan" aria-hidden="true" />
                <span class="bz-lt-huan-wai" :class="{ 'bz-gl': gaoliang === 'huan', 'bz-dakai': tanchu === 'shangxiawen' }">
                  <svg class="bz-lt-huan" width="14" height="14" viewBox="0 0 14 14" aria-hidden="true">
                    <circle cx="7" cy="7" r="6" fill="none" stroke-width="2" stroke="currentColor" opacity="0.15" />
                    <circle cx="7" cy="7" r="6" fill="none" stroke-width="2" stroke="currentColor" stroke-linecap="round" :stroke-dasharray="`${huanchang} 40`" transform="rotate(-90 7 7)" />
                  </svg>
                  <span v-if="quanbiao" class="bz-biaoji bz-lt-xb" style="top: -14px; right: -8px">5</span>
                  <span v-if="gaoliang === 'huan' && biaoji" class="bz-biaoji" style="top: -14px; right: -10px">{{ biaoji }}</span>
                </span>
                <span class="bz-lt-at" :class="{ 'bz-gl': gaoliang === 'at' }">
                  @
                  <span v-if="quanbiao" class="bz-biaoji bz-lt-xb" style="top: -14px; right: -8px">6</span>
                  <span v-if="gaoliang === 'at' && biaoji" class="bz-biaoji" style="top: -14px; right: -10px">{{ biaoji }}</span>
                </span>
                <span v-if="liushi" class="bz-lt-fasong bz-lt-tingzhi" :class="{ 'bz-gl': gaoliang === 'tingzhi' }">
                  <svg width="8" height="8" viewBox="0 0 24 24" aria-hidden="true"><rect x="2" y="2" width="20" height="20" rx="4" ry="4" fill="#000" /></svg>
                  <span v-if="gaoliang === 'tingzhi' && biaoji" class="bz-biaoji" style="top: -14px; right: -10px">{{ biaoji }}</span>
                </span>
                <span v-else class="bz-lt-fasong" :class="{ 'bz-jinyong': !shuru }">
                  <BzTubiao ming="arrow-up" :daxiao="16" :cuxi="2" />
                  <span v-if="quanbiao" class="bz-biaoji bz-lt-xb" style="top: -14px; right: -8px">7</span>
                </span>
              </div>
            </div>
          </div>
          <div class="bz-lt-tuopan-di">
            <span
              v-for="(ming, i) in tuopananniu"
              :key="ming"
              class="bz-lt-tuopan-an"
              :class="{ 'bz-dakai': (ming === 'layers' && jinengpan) || (!!tanchu && tanchu === tuopanzhuangtai[i]), 'bz-gl': gaoliang === tuopangaoliang[i] }"
              :title="tuopanmingzi[i].includes('.') ? t(tuopanmingzi[i] as never) : tuopanmingzi[i]"
            >
              <BzTubiao :ming="ming" :daxiao="14" :cuxi="2" />
              <span v-if="ming === 'plug' || ming === 'layers'" class="bz-lt-lvdian" aria-hidden="true" />
              <span v-if="gaoliang === tuopangaoliang[i] && biaoji" class="bz-biaoji" style="top: -12px; right: -10px">{{ biaoji }}</span>
              <span v-if="quanbiao && i === 0" class="bz-biaoji bz-lt-xb" style="top: -12px; left: -6px">8</span>
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
  align-items: flex-start;
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
/* ---------- 使用者訊息：滑過時出現編輯（左上角）與回滾（右側） ---------- */
.bz-lt-yonghu-wai {
  position: relative;
}

.bz-lt-yonghu-nei {
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 6px;
  min-width: 0;
}

.bz-lt-huigun,
.bz-lt-bianji {
  position: relative;
  display: inline-grid;
  place-items: center;
  color: var(--bz-fg-3);
  opacity: 0;
  transition: opacity 200ms ease;
}

.bz-lt-huigun {
  flex-shrink: 0;
  padding: 2px;
  border-radius: 6px;
}

.bz-lt-bianji {
  position: absolute;
  top: 0;
  left: -4px;
  transform: translateY(-50%);
}

.bz-lt-yonghu-wai:hover .bz-lt-huigun,
.bz-lt-yonghu-wai:hover .bz-lt-bianji,
.bz-lt-xianshi .bz-lt-huigun,
.bz-lt-xianshi .bz-lt-bianji,
.bz-lt-huigun.bz-gl,
.bz-lt-bianji.bz-gl {
  opacity: 1;
}

.bz-lt-dian {
  display: inline-flex;
  gap: 3px;
  margin-left: 4px;
  vertical-align: middle;
}

.bz-lt-dian i {
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: currentColor;
  opacity: 0.4;
  animation: bz-lt-tiao 1.2s ease-in-out infinite;
}

.bz-lt-dian i:nth-child(2) {
  animation-delay: 0.15s;
}

.bz-lt-dian i:nth-child(3) {
  animation-delay: 0.3s;
}

@keyframes bz-lt-tiao {
  0%, 60%, 100% { opacity: 0.25; }
  30% { opacity: 0.9; }
}

/* ---------- 回滾確認（UserMessageRevertConfirm：置中、420px） ---------- */
.bz-lt-zhezhao {
  position: absolute;
  inset: 0;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background: rgba(0, 0, 0, 0.22);
}

.bz-lt-queren {
  width: min(420px, 100%);
  overflow: hidden;
  border-radius: 8px;
  background: var(--bz-editor-bg);
  color: var(--bz-fg);
  border: 1px solid color-mix(in srgb, var(--bz-fg) 18%, transparent);
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.28), inset 0 1px 0 color-mix(in srgb, var(--bz-fg) 8%, transparent);
}

.bz-lt-queren-nei {
  padding: 12px;
}

.bz-lt-queren-biao {
  margin-bottom: 8px;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: -0.01em;
  line-height: 1.2;
}

.bz-lt-queren-shuo {
  font-size: 12px;
  line-height: 1.45;
  color: var(--bz-fg-3);
}

.bz-lt-queren-di {
  display: flex;
  justify-content: flex-end;
  gap: 6px;
  padding: 0 12px 12px;
}

.bz-lt-queren-ci,
.bz-lt-queren-zhu {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  height: 26px;
  padding: 0 10px;
  border-radius: 8px;
  font-size: 11px;
  font-weight: 500;
}

.bz-lt-queren-ci {
  background: color-mix(in srgb, var(--bz-fg) 8%, transparent);
  border: 1px solid color-mix(in srgb, var(--bz-fg) 14%, transparent);
}

.bz-lt-queren-zhu {
  color: var(--bz-button-fg);
  background: var(--bz-button-bg);
}

.bz-lt-queren-jian {
  font-size: 11px;
  opacity: 0.7;
}

/* ---------- 排隊訊息（MessageQueueBar，貼在輸入框上方、左右各縮 16px） ---------- */
.bz-lt-duilie {
  position: relative;
  margin: 0 16px;
  padding-bottom: 4px;
  border-radius: 6px 6px 0 0;
  background: var(--bz-sidebar-bg);
  border: 1px solid color-mix(in srgb, var(--bz-fg) 12%, transparent);
  border-bottom: 0;
}

.bz-lt-duilie-tou {
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 4px 8px;
  font-size: 12px;
  font-weight: 600;
  color: var(--bz-fg-4);
}

.bz-lt-duilie-hang {
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 0 4px;
  padding: 4px 6px;
}

.bz-lt-duilie-tu {
  flex-shrink: 0;
  color: var(--bz-fg-4);
  opacity: 0.6;
}

.bz-lt-duilie-wen {
  flex: 1;
  min-width: 0;
  overflow: hidden;
  font-size: 13px;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: var(--bz-fg-2);
}

.bz-lt-duilie-an {
  display: flex;
  gap: 2px;
  flex-shrink: 0;
  opacity: 0.8;
  color: var(--bz-fg-2);
}

.bz-lt-duilie-an > span {
  display: grid;
  place-items: center;
  width: 20px;
  height: 20px;
}

.bz-lt-duilie-an > span.bz-jinyong {
  opacity: 0.3;
}

/* ---------- 輸入框周圍的彈出面板 ---------- */
.bz-lt-tuopan,
.bz-lt-shuru {
  position: relative;
}

.bz-lt-tc {
  position: absolute;
  z-index: 6;
}

/* @ / 選單與瀏覽器面板貼在輸入框上緣，與輸入框同寬 */
.bz-lt-tc-fu {
  right: 0;
  bottom: 100%;
  left: 0;
}

/* Context 面板與輸入框同寬，上移 8px */
.bz-lt-tc-quan {
  right: 0;
  bottom: calc(100% + 8px);
  left: 0;
}

/* 托盤面板以按鈕為錨，蓋在輸入框上 */
.bz-lt-tc-tuopan {
  bottom: 34px;
}

/* 模式選單從模式膠囊往上開（placement top-start） */
.bz-lt-tc-moshi {
  bottom: 36px;
  left: 6px;
}

.bz-lt-shuruwen {
  min-height: 20px;
  font-size: 13px;
  color: var(--bz-fg-1);
  white-space: pre-wrap;
}

.bz-lt-guangbiao {
  display: inline-block;
  width: 1px;
  height: 15px;
  margin-left: 1px;
  vertical-align: -3px;
  background: var(--bz-fg-1);
  animation: bz-lt-shan 1s steps(1) infinite;
}

@keyframes bz-lt-shan {
  50% { opacity: 0; }
}

.bz-lt-zhanwei {
  position: relative;
}

.bz-lt-huan-wai {
  position: relative;
  display: inline-grid;
  place-items: center;
  width: 22px;
  height: 22px;
  margin-right: 4px;
  border-radius: 4px;
  color: var(--bz-fg-3);
}

.bz-lt-huan-wai.bz-dakai {
  color: var(--bz-fg-1);
}

.bz-lt-huan-wai .bz-lt-huan {
  margin-right: 0;
}

.bz-lt-at,
.bz-lt-fasong {
  position: relative;
}

.bz-lt-at.bz-gl {
  border-radius: 4px;
}

.bz-lt-fasong.bz-lt-tingzhi {
  background: #fff;
}

.bz-lt-zhuan {
  width: 12px;
  height: 12px;
  margin-right: 4px;
  border-radius: 50%;
  border: 2px solid color-mix(in srgb, var(--bz-fg) 20%, transparent);
  border-top-color: var(--bz-fg-2);
  animation: bz-lt-zhuan 0.9s linear infinite;
}

@keyframes bz-lt-zhuan {
  to { transform: rotate(360deg); }
}

.bz-lt-tuopan-an {
  position: relative;
}

.bz-lt-lvdian {
  position: absolute;
  top: 4px;
  right: 3px;
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: #3fb950;
}

/* 總覽圖上的編號：比教學用的標記稍小，不帶光圈 */
.bz-lt-xb {
  z-index: 3;
}

/* ---------- 超級記憶注入提示 ---------- */
.bz-lt-zhuru {
  position: relative;
  display: flex;
  flex-direction: column;
  margin-top: 6px;
  border-radius: 6px;
}

.bz-lt-zhuru-an {
  display: flex;
  align-items: center;
  gap: 6px;
  max-width: 100%;
  color: var(--bz-fg-3);
  text-align: left;
}

.bz-lt-zhuru-quan {
  flex-shrink: 0;
  opacity: 0.55;
}

.bz-lt-zhuru-tu {
  flex-shrink: 0;
  margin-left: -2px;
  opacity: 0.7;
}

.bz-lt-zhuru-wen {
  overflow: hidden;
  padding-right: 0.25em;
  font-size: 12px;
  font-style: italic;
  white-space: nowrap;
  text-overflow: ellipsis;
  opacity: 0.85;
}

.bz-lt-zhuru-jian {
  flex-shrink: 0;
  opacity: 0;
  transform: rotate(-90deg);
  transition: transform 0.15s, opacity 0.15s;
}

.bz-lt-zhuru-an:hover .bz-lt-zhuru-jian,
.bz-lt-zhuru-an.bz-kai .bz-lt-zhuru-jian {
  opacity: 0.45;
}

.bz-lt-zhuru-an.bz-kai .bz-lt-zhuru-jian {
  transform: none;
}

.bz-lt-zhuru-kuang {
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-top: 6px;
  padding: 8px 10px;
  border-radius: 8px;
  background: color-mix(in srgb, var(--bz-fg) 4%, transparent);
  box-shadow: inset 0 0 0 1px color-mix(in srgb, var(--bz-fg) 8%, transparent);
}

.bz-lt-zhuru-tiao {
  display: flex;
  align-items: baseline;
  gap: 6px;
  color: var(--bz-fg-2);
  font-size: 11.5px;
  line-height: 1.4;
}

.bz-lt-zhuru-lai {
  flex-shrink: 0;
  color: var(--bz-fg-3);
  font-size: 9px;
  font-weight: 600;
  opacity: 0.75;
}

/* ---------- Plan 模式的卡片 ---------- */
.bz-lt-ka {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin: 6px 0 2px;
  padding: 6px 8px;
  border-radius: 8px;
  font-size: 12px;
  background: var(--bz-editor-bg);
  border: 1px solid color-mix(in srgb, var(--bz-fg) 12%, transparent);
}

.bz-lt-qhk-tou,
.bz-lt-jh-wenjian {
  display: flex;
  align-items: center;
  gap: 6px;
}

.bz-lt-qhk-tu {
  color: #e89c30;
  opacity: 0.7;
}

.bz-lt-qhk-biao {
  color: #e89c30;
  font-size: 13px;
}

.bz-lt-qhk-yuanyin {
  color: color-mix(in srgb, var(--bz-fg) 60%, transparent);
  font-size: 13px;
  line-height: 1.5;
}

.bz-lt-qhk-di,
.bz-lt-jh-di {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  margin-top: 4px;
}

.bz-lt-qhk-pianhao-wai {
  position: relative;
}

.bz-lt-qhk-pianhao {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  min-height: 20px;
  padding: 0 6px;
  font-size: 12px;
  color: var(--bz-fg-2);
  opacity: 0.7;
}

.bz-lt-qhk-caidan {
  position: absolute;
  bottom: calc(100% + 4px);
  left: 0;
  z-index: 5;
  display: flex;
  flex-direction: column;
  min-width: 140px;
  padding: 4px;
  border-radius: 6px;
  background: var(--bz-menu-bg);
  border: 1px solid color-mix(in srgb, var(--bz-fg) 18%, transparent);
  box-shadow: var(--bz-shadow);
}

.bz-lt-qhk-caidan button {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 12px;
  white-space: nowrap;
  text-align: left;
}

.bz-lt-qhk-caidan button:hover {
  background: color-mix(in srgb, var(--bz-button-bg) 20%, transparent);
}

.bz-lt-qhk-kong {
  width: 12px;
}

.bz-lt-qhk-an,
.bz-lt-jh-you {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-left: auto;
  white-space: nowrap;
}

.bz-lt-qhk-lue {
  padding: 0 6px;
  color: var(--bz-fg-2);
}

.bz-lt-qhk-qie {
  display: inline-flex;
  align-items: baseline;
  gap: 2px;
  padding: 2px 6px;
  border-radius: 4px;
  color: #fff;
  background: #e89c30;
}

.bz-lt-qhk-qie i {
  font-size: 10px;
  font-style: normal;
  opacity: 0.5;
}

.bz-lt-qhk-jindu {
  height: 2px;
  margin: 4px 0 -2px;
  overflow: hidden;
  border-radius: 1px;
  background: color-mix(in srgb, var(--bz-fg) 10%, transparent);
}

.bz-lt-qhk-jindu i {
  display: block;
  width: 0;
  height: 100%;
  background: #e89c30;
  animation: bz-lt-jindu 30s linear infinite;
}

@keyframes bz-lt-jindu {
  to { width: 100%; }
}

.bz-lt-jh-tou {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.bz-lt-jh-wenjian {
  gap: 4px;
  color: var(--bz-fg);
}

.bz-lt-jh-tu {
  color: var(--bz-fg-3);
  opacity: 0.75;
}

.bz-lt-jh-dakai {
  color: var(--bz-fg-2);
}

.bz-lt-jh-biao {
  color: var(--bz-fg);
  font-size: 13px;
  font-weight: 500;
  line-height: 18px;
}

.bz-lt-jh-zhai {
  margin-top: 2px;
  color: var(--bz-fg-3);
  font-size: 13px;
  line-height: 18px;
}

.bz-lt-jh-shu {
  margin-top: 2px;
  font-weight: 600;
  color: var(--bz-fg);
}

.bz-lt-jh-kan {
  color: var(--bz-link);
}

.bz-lt-jh-ruo {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  color: var(--bz-fg-3);
}

.bz-lt-jh-zhixing {
  padding: 2px 6px;
  border-radius: 4px;
  color: var(--bz-button-fg);
  background: var(--bz-button-bg);
}

.bz-lt-jh-zhixing i {
  font-style: normal;
  opacity: 0.72;
}

@media (prefers-reduced-motion: reduce) {
  .bz-lt-qhk-jindu i {
    animation: none;
    width: 40%;
  }
}

/* ---------- Entanglement 的因果追蹤列 ---------- */
.bz-lt-yinguo {
  position: relative;
  min-width: 0;
  border-radius: 6px;
}

.bz-lt-yinguo-tou {
  display: flex;
  align-items: center;
  gap: 6px;
  max-width: 100%;
  font-size: 13px;
  text-align: left;
}

.bz-lt-yinguo-ming {
  flex-shrink: 0;
  color: var(--bz-fg);
  opacity: 0.7;
}

.bz-lt-yinguo-dian {
  flex-shrink: 0;
  opacity: 0.35;
}

.bz-lt-yinguo-chip {
  min-width: 0;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  opacity: 0.45;
}

.bz-lt-yinguo-jian {
  flex-shrink: 0;
  opacity: 0;
  transform: rotate(-90deg);
  transition: transform 0.15s, opacity 0.15s;
}

.bz-lt-yinguo-tou:hover .bz-lt-yinguo-jian,
.bz-lt-yinguo-jian.bz-kai {
  opacity: 0.6;
}

.bz-lt-yinguo-jian.bz-kai {
  transform: none;
}

.bz-lt-yinguo-ti {
  max-height: 144px;
  overflow-y: auto;
  padding: 2px 0 4px 6px;
  font-size: 13px;
  font-style: italic;
  line-height: 1.5;
  white-space: pre-wrap;
  opacity: 0.5;
}
</style>
