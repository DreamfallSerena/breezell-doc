<script setup lang="ts">
import { computed } from "vue";
import BzTubiao from "../byok/BzTubiao.vue";
import BzMoshi from "../byok/BzMoshi.vue";
import BzZhengchuang from "./BzZhengchuang.vue";
import BzDaima from "./BzDaima.vue";
import { shiyongfenzuwenben } from "./shuju-fenzu";

// 復刻對話輸入框上方的分組膠囊（sidebar-tsx/ProjectGroupCapsule.tsx）：
// 收合時是一顆小膠囊（分組名、專案數、四個權限的小圖示、另一個視窗的 AI 正在做什麼），
// 點開後是每個成員的狀態與按鈕（跳到視窗、對話、交給它處理）、四個 AI 權限開關，以及「分組頁面」。
// zhankai 決定畫收合還是展開；gaoliang="jiaonang" 用橘色光圈標出膠囊。
const props = withDefaults(
  defineProps<{
    gao?: number;
    gaoliang?: "" | "jiaonang";
    biaoji?: string;
    zhankai?: boolean;
    fenming?: string;
    chengyuan?: string;
    huanjing?: string;
    dongzuo?: "editing" | "reading" | "searching" | "command" | "thinking" | "waiting";
    wenjian?: string;
    kai?: ("files" | "edit" | "memory" | "chat")[];
    duihuashu?: number;
    moxing?: string;
  }>(),
  {
    gao: 640,
    gaoliang: "",
    biaoji: "",
    zhankai: true,
    fenming: "breezell",
    chengyuan: "breezell-api",
    huanjing: "WSL",
    dongzuo: "editing",
    wenjian: "",
    kai: () => ["files", "chat"],
    duihuashu: 3,
    moxing: "claude-opus-5-5",
  },
);

const { t, tihuan, yuyan } = shiyongfenzuwenben();

// 卡片上方那兩句示範對話也要跟著頁面語言，否則英文頁會出現中文範例。
const shili: Record<string, readonly [string, string]> = {
  en: [
    "breezell-api changed its response format. Should the frontend follow?",
    "Let me look at where breezell-web calls this endpoint, then compare it with the change in breezell-api.",
  ],
  "zh-hans": [
    "breezell-api 那边的响应格式改了，前端要跟着调整吗？",
    "我先看一下 breezell-web 里调用这个接口的地方，再对照 breezell-api 的变更。",
  ],
  "zh-hant": [
    "breezell-api 那邊的回應格式改了，前端要跟著調整嗎？",
    "我先看一下 breezell-web 裡呼叫這個介面的地方，再對照 breezell-api 的變更。",
  ],
  ja: [
    "breezell-api のレスポンス形式が変わったようです。フロントエンドも合わせますか？",
    "まず breezell-web でこの API を呼んでいる箇所を見て、breezell-api の変更と照らし合わせます。",
  ],
  ko: [
    "breezell-api의 응답 형식이 바뀐 것 같아요. 프런트엔드도 맞춰야 할까요?",
    "먼저 breezell-web에서 이 엔드포인트를 호출하는 곳을 보고, breezell-api의 변경과 비교하겠습니다.",
  ],
  ru: [
    "В breezell-api изменился формат ответа. Нужно ли поправить фронтенд?",
    "Сначала посмотрю, где breezell-web вызывает этот эндпоинт, и сверю с изменениями в breezell-api.",
  ],
  es: [
    "breezell-api cambió el formato de respuesta. ¿Hay que ajustar el frontend?",
    "Primero miro dónde breezell-web llama a este endpoint y lo comparo con el cambio en breezell-api.",
  ],
  "pt-br": [
    "O breezell-api mudou o formato da resposta. O frontend precisa acompanhar?",
    "Primeiro vejo onde o breezell-web chama esse endpoint e comparo com a mudança no breezell-api.",
  ],
};

const shiliwen = computed(() => (shili[yuyan.value] ?? shili.en)[0]);
const shilida = computed(() => (shili[yuyan.value] ?? shili.en)[1]);

// 聊天面板頂端的標題列（SidebarChat 的 ChatTitleBar）：標題是執行緒名稱，右邊是切換箭頭。
const biaotishili: Record<string, string> = {
  en: "breezell-api response format",
  "zh-hans": "breezell-api 响应格式调整",
  "zh-hant": "breezell-api 回應格式調整",
  ja: "breezell-api のレスポンス形式",
  ko: "breezell-api 응답 형식",
  ru: "формат ответа breezell-api",
  es: "formato de respuesta de breezell-api",
  "pt-br": "formato de resposta do breezell-api",
};
const duihuaming = computed(() => biaotishili[yuyan.value] || biaotishili.en);

const quanxian = [
  { id: "files", ming: "projectGroup.permission.files", tu: "eye" },
  { id: "edit", ming: "projectGroup.permission.edit", tu: "pencil" },
  { id: "memory", ming: "explorerProjects.group.shareMemory", tu: "brain" },
  { id: "chat", ming: "projectGroup.permission.chat", tu: "messages-square" },
] as const;

const kaile = (id: string) => (props.kai as readonly string[]).includes(id);
const dongzuowen = computed(() => {
  if (props.dongzuo === "waiting") return t("projectGroup.activity.waiting");
  const jian = `projectGroup.activity.${props.dongzuo}` as const;
  const dai = props.wenjian;
  if (dai && props.dongzuo === "editing") return tihuan("projectGroup.activity.editingFile", dai);
  return t(jian);
});
const zhuangtaiwen = computed(() => [props.huanjing, t("projectGroup.page.status.open")].filter(Boolean).join(" · "));
const shuo = computed(() => tihuan("projectGroup.capsule.members", 2));
const duihuawen = computed(() => tihuan("projectGroup.capsule.conversations", props.duihuashu));
const youdui = computed(() => kaile("chat"));
</script>

<template>
  <BzZhengchuang :gao="gao" :ce="0" zhuangtai="code" chat :tabs="[{ ming: 'config.ts', xuan: true, guan: true }]">
    <BzDaima />
    <template #liaotian>
      <div class="bz-ft">
        <div class="bz-ft-tou">
          <span class="bz-ft-tou-ming">{{ duihuaming }}</span>
          <span class="bz-ft-tou-jian"><BzTubiao ming="chevron-down" :daxiao="16" :cuxi="2" /></span>
        </div>
        <div class="bz-ft-duihua">
          <div class="bz-ft-yonghu">{{ shiliwen }}</div>
          <div class="bz-ft-hui">{{ shilida }}</div>
        </div>

        <div class="bz-jn" :class="{ 'bz-gl': gaoliang === 'jiaonang' }">
          <span class="bz-jn-yao" role="button" :aria-label="t('projectGroup.capsule.expand')">
            <BzTubiao ming="link-2" :daxiao="11" :cuxi="2.2" />
            <span class="bz-jn-ming">{{ fenming }}</span>
            <span class="bz-jn-shu">{{ shuo }}</span>
            <span class="bz-jn-quan">
              <span v-for="q in quanxian" :key="q.id" class="bz-jn-quan-tu" :class="{ 'bz-kai': kaile(q.id) }">
                <BzTubiao :ming="q.tu" :daxiao="11" :cuxi="2.1" />
              </span>
            </span>
            <span class="bz-jn-huo">
              <span class="bz-jn-dian" />
              <span class="bz-jn-huo-wen">{{ chengyuan }}: {{ dongzuowen }}</span>
            </span>
            <BzTubiao :ming="zhankai ? 'chevron-up' : 'chevron-down'" :daxiao="11" :cuxi="2.2" />
          </span>

          <div v-if="zhankai" class="bz-jn-ban">
            <div class="bz-jn-cheng">
              <span class="bz-jn-cheng-dian bz-lv" />
              <div class="bz-jn-cheng-zhu">
                <div class="bz-jn-cheng-hang">
                  <span class="bz-jn-cheng-ming">{{ chengyuan }}</span>
                  <span class="bz-jn-cheng-zhuang">{{ zhuangtaiwen }}</span>
                </div>
                <div class="bz-jn-huodong">
                  <span class="bz-jn-dian" :class="{ 'bz-jn-dian-ting': dongzuo === 'waiting' }" />
                  <span>{{ dongzuowen }}</span>
                </div>
                <div class="bz-jn-anniu">
                  <span class="bz-jn-an"><BzTubiao ming="app-window" :daxiao="11" :cuxi="2.1" />{{ t("projectGroup.capsule.show") }}</span>
                  <span v-if="youdui" class="bz-jn-an"><BzTubiao ming="messages-square" :daxiao="11" :cuxi="2.1" />{{ duihuawen }}</span>
                  <span v-if="youdui" class="bz-jn-an"><BzTubiao ming="send" :daxiao="11" :cuxi="2.1" />{{ t("projectGroup.capsule.handOff") }}</span>
                </div>
              </div>
            </div>

            <div class="bz-jn-quanxian">
              <span class="bz-jn-biao">{{ t("projectGroup.page.options") }}</span>
              <div class="bz-jn-kaiguan">
                <span v-for="q in quanxian" :key="q.id" class="bz-jn-kg" :class="{ 'bz-kai': kaile(q.id) }" role="switch" :aria-checked="kaile(q.id)">
                  <BzTubiao :ming="q.tu" :daxiao="11" :cuxi="2.1" />{{ t(q.ming) }}
                </span>
              </div>
            </div>
            <div>
              <span class="bz-jn-an"><BzTubiao ming="settings-2" :daxiao="11" :cuxi="2.1" />{{ t("projectGroup.capsule.openPage") }}</span>
            </div>
          </div>
          <span v-if="gaoliang === 'jiaonang' && biaoji" class="bz-biaoji" style="top: -11px; right: -11px">{{ biaoji }}</span>
        </div>

        <div class="bz-ft-shuru">
          <div class="bz-ft-zhanwei" aria-hidden="true">{{ t("chat.input.placeholder") }}</div>
          <div class="bz-ft-gongju">
            <div class="bz-ft-zuo">
              <span class="bz-ft-moshi"><BzMoshi moshi="agent" xingshi="jiaonang" /></span>
              <span class="bz-ft-jiaonang">
                <span class="bz-ft-jiaonang-ming">{{ moxing }}</span>
                <BzTubiao ming="chevron-down" :daxiao="12" :cuxi="2" />
              </span>
            </div>
            <div class="bz-ft-you">
              <span class="bz-ft-huan-wai">
                <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true">
                  <circle cx="7" cy="7" r="6" fill="none" stroke-width="2" stroke="currentColor" opacity="0.15" />
                  <circle cx="7" cy="7" r="6" fill="none" stroke-width="2" stroke="currentColor" stroke-linecap="round" stroke-dasharray="6.8 40" transform="rotate(-90 7 7)" />
                </svg>
              </span>
              <span class="bz-ft-at">@</span>
              <span class="bz-ft-fasong bz-jinyong"><BzTubiao ming="arrow-up" :daxiao="16" :cuxi="2" /></span>
            </div>
          </div>
        </div>
      </div>
    </template>
  </BzZhengchuang>
</template>

<style scoped>
.bz-ft {
  display: flex;
  flex-direction: column;
  flex: 1;
  min-height: 0;
  padding: 12px;
}

/* 聊天面板的標題列（ChatTitleBar：border-b zinc-300/10、px-4 py-2） */
.bz-ft-tou {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  padding: 8px 16px;
  margin: -12px -12px 8px;
  border-bottom: 1px solid color-mix(in srgb, var(--bz-fg) 10%, transparent);
}

.bz-ft-tou-ming {
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: var(--bz-input-fg);
  font-weight: 500;
}

.bz-ft-tou-jian {
  display: inline-flex;
  flex-shrink: 0;
  color: var(--bz-fg-2);
}

.bz-ft-duihua {
  display: flex;
  flex-direction: column;
  gap: 14px;
  flex: 1;
  min-height: 0;
  overflow: auto;
  padding: 4px 4px 16px;
}

.bz-ft-yonghu {
  align-self: stretch;
  padding: 8px 12px;
  border-radius: 10px;
  color: var(--bz-fg-1);
  font-size: 13px;
  line-height: 1.5;
  background: color-mix(in srgb, var(--bz-input-bg) 90%, var(--bz-sidebar-bg));
  border: 1px solid color-mix(in srgb, var(--bz-fg) 12%, transparent);
}

.bz-ft-hui {
  color: var(--bz-fg-1);
  font-size: 13px;
  line-height: 1.6;
  opacity: 0.92;
}

/* 分組膠囊（ProjectGroupCapsule.tsx）：細框圓膠囊 + 展開的面板（wash 底、圓角 10、內距 8/12/10） */
.bz-jn {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 6px;
  min-width: 0;
  margin: 6px 0;
}

.bz-jn-yao {
  align-self: flex-start;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  min-width: 0;
  max-width: 100%;
  padding: 2px 8px;
  border-radius: 999px;
  border: 1px solid color-mix(in srgb, var(--bz-fg) 11%, transparent);
  color: var(--bz-fg-3);
  font-size: 11px;
  white-space: nowrap;
}

.bz-jn-ming {
  flex-shrink: 0;
  max-width: 9em;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: var(--bz-fg-1);
  font-weight: 600;
}

.bz-jn-shu,
.bz-jn-quan {
  flex-shrink: 0;
}

.bz-jn-quan {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  padding-left: 2px;
}

.bz-jn-quan-tu {
  display: inline-flex;
  opacity: 0.3;
}

.bz-jn-quan-tu.bz-kai {
  opacity: 1;
  color: var(--bz-fg);
}

.bz-jn-huo {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  flex-shrink: 1;
  min-width: 0;
  padding-left: 2px;
}

.bz-jn-huo-wen {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: var(--bz-fg-2);
}

.bz-jn-dian {
  flex-shrink: 0;
  width: 6px;
  height: 6px;
  border-radius: 999px;
  background: #f59e0b;
}

.bz-jn-dian-ting {
  opacity: 0.9;
}

.bz-jn-ban {
  display: flex;
  flex-direction: column;
  gap: 8px;
  min-width: 0;
  padding: 8px 12px 10px;
  border-radius: 10px;
  border: 1px solid color-mix(in srgb, var(--bz-fg) 11%, transparent);
  background: color-mix(in srgb, var(--bz-fg) 3.5%, transparent);
}

.bz-jn-cheng {
  display: flex;
  align-items: flex-start;
  gap: 8px;
  padding: 6px 0;
}

.bz-jn-cheng-dian {
  flex-shrink: 0;
  width: 7px;
  height: 7px;
  margin-top: 5px;
  border-radius: 999px;
}

.bz-lv {
  background: #22c55e;
}

.bz-jn-cheng-zhu {
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-width: 0;
  flex: 1;
}

.bz-jn-cheng-hang {
  display: flex;
  align-items: baseline;
  gap: 6px;
  min-width: 0;
}

.bz-jn-cheng-ming {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: var(--bz-fg-1);
  font-size: 12px;
  font-weight: 600;
}

.bz-jn-cheng-zhuang {
  flex-shrink: 0;
  color: var(--bz-fg-3);
  font-size: 11px;
}

.bz-jn-huodong {
  display: flex;
  align-items: center;
  gap: 6px;
  min-width: 0;
  color: var(--bz-fg-2);
  font-size: 11px;
}

.bz-jn-anniu {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: 2px;
}

.bz-jn-an {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 2px 7px;
  border-radius: 6px;
  border: 1px solid color-mix(in srgb, var(--bz-fg) 11%, transparent);
  color: var(--bz-fg-2);
  font-size: 11px;
  white-space: nowrap;
}

.bz-jn-quanxian {
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding-top: 8px;
  border-top: 1px solid color-mix(in srgb, var(--bz-fg) 11%, transparent);
}

.bz-jn-biao {
  color: var(--bz-fg-3);
  font-size: 10px;
  font-weight: 600;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

.bz-jn-kaiguan {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.bz-jn-kg {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  padding: 3px 8px;
  border-radius: 999px;
  border: 1px solid color-mix(in srgb, var(--bz-fg) 11%, transparent);
  color: var(--bz-fg-3);
  font-size: 11px;
}

.bz-jn-kg.bz-kai {
  border-color: color-mix(in srgb, var(--bz-fg) 40%, transparent);
  background: color-mix(in srgb, var(--bz-fg) 9%, transparent);
  color: var(--bz-fg-1);
  font-weight: 600;
}

.bz-jinyong {
  opacity: 0.5;
}

/* 輸入框（BzLiaotian 的同一組尺寸：內距 8/10、圓角 14、gap 18） */
.bz-ft-shuru {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 18px;
  padding: 8px 10px;
  border-radius: 14px;
  background: color-mix(in srgb, var(--bz-input-bg) 90%, var(--bz-sidebar-bg));
  border: 1px solid color-mix(in srgb, var(--bz-fg) 12%, transparent);
}

.bz-ft-zhanwei,
.bz-ft-shuruwen {
  min-height: 20px;
  font-size: 13px;
  line-height: 1.5;
  color: var(--bz-fg-1);
  white-space: pre-wrap;
}

.bz-ft-guangbiao {
  display: inline-block;
  width: 1px;
  height: 14px;
  margin-left: 2px;
  vertical-align: -2px;
  background: var(--bz-fg-1);
  animation: bz-ft-shanshuo 1s step-end infinite;
}

@keyframes bz-ft-shanshuo {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}

@media (prefers-reduced-motion: reduce) {
  .bz-ft-guangbiao { animation: none; }
}

.bz-ft-gongju {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 4px;
}

.bz-ft-zuo {
  position: relative;
  display: flex;
  align-items: center;
  gap: 8px;
  min-width: 0;
}

.bz-ft-moshi {
  display: inline-flex;
  flex-shrink: 0;
}

.bz-ft-jiaonang {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  min-width: 0;
  height: 22px;
  padding: 0 4px;
  border-radius: 6px;
  color: var(--bz-fg-3);
  font-size: 12px;
}

.bz-ft-jiaonang-ming {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.bz-ft-you {
  display: flex;
  align-items: center;
  gap: 8px;
}

/* 輸入框右側的上下文圓環（ChatInputArea 的 ContextRing，尺寸與 BzLiaotian 相同） */
.bz-ft-huan-wai {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  color: var(--bz-fg-2);
}

.bz-ft-at {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 22px;
  height: 22px;
  font-size: 18px;
  font-weight: 700;
  line-height: 1;
  color: var(--bz-fg-2);
}

.bz-ft-fasong {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 22px;
  height: 22px;
  border-radius: 6px;
  color: var(--bz-editor-bg);
  background: var(--bz-fg);
}
</style>
