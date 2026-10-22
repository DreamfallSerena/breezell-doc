<script setup lang="ts">
import { computed, ref } from "vue";
import BzTubiao from "./BzTubiao.vue";
import { moshishunxu, moshixinxi, shiyongwenben, type duihuamoshi } from "./shuju";

// 聊天輸入框周圍彈出的各個面板，由 BzLiaotian 依 lei 擺到對應位置：
// moshi       模式選單（ChatComposerChrome.tsx ChatModeDropdown；選單裡的模式名稱固定是英文 nameOfChatMode，說明以浮層顯示在旁邊）
// tiji        @ 選單根層（inputs.tsx getOptionsAtPath：files / folders / chats）
// tijisou     @ 後直接打字的搜尋結果（檔案與資料夾一起搜，開啟中的檔案標 Recent）
// xiegang     / 選單（getSlashOptions：快速短語 + 技能，關閉的技能變灰、可直接切換）
// shangxiawen Context 面板（ChatOverlayPanels.tsx ContextUsagePanel）
// duanyu      快速短語收藏面板（QuickPhrasesTray.tsx）
// youhua      提示詞優化預覽（PromptOptimizeTray.tsx）
// liulanqi    Breezell Browser 面板（ChatInputArea.tsx，尚未開啟瀏覽器時的樣子）
// mcp         MCP 開關面板（ChatInputArea.tsx）
const props = withDefaults(
  defineProps<{ lei: string; moshi?: duihuamoshi; suoding?: boolean; jindu?: number; gaoliang?: string; biaoji?: string; youhuawen?: string; sou?: string }>(),
  { moshi: "agent", suoding: false, jindu: 2, gaoliang: "", biaoji: "", youhuawen: "", sou: "side" },
);

const { t } = shiyongwenben();

// ---------- 模式選單 ----------
const moshijian: Record<duihuamoshi, string> = {
  normal: "normal",
  plan: "plan",
  analyze: "analyze",
  entanglement: "entanglement",
  agent: "agent",
  agent_teams: "agentTeams",
  dark_selene: "darkSelene",
};
const shouxian = (m: duihuamoshi) => props.suoding && (m === "entanglement" || m === "agent_teams");
// 有鎖定示意時，預設停在 Entanglement 上，讓說明直接顯示解鎖進度。
const morenting: duihuamoshi = props.suoding ? "entanglement" : props.moshi;
const xuanting = ref<duihuamoshi>(morenting);
// 說明浮層與滑過的那一列對齊；下半部的模式說明較長，改為與選單底部對齊（inputs.tsx hoveredDetail.alignBottom）。
const xiangqingweizhi = computed(() => {
  const xuhao = moshishunxu.indexOf(xuanting.value);
  return xuhao >= 3 ? { bottom: "0px" } : { top: `${4 + xuhao * 28}px` };
});

// ---------- Context 面板 ----------
const fenlei = [
  { jian: "systemPrompt", ming: "System prompt", se: "#9ca3afB3", zhi: 9_800 },
  { jian: "tools", ming: "Tools", se: "#c084fcB3", zhi: 14_600 },
  { jian: "rules", ming: "Rules", se: "#34d399B3", zhi: 1_200 },
  { jian: "memories", ming: "Memories", se: "#22d3eeB3", zhi: 600 },
  { jian: "skills", ming: "Skills", se: "#fbbf24B3", zhi: 2_100 },
  { jian: "mcp", ming: "MCP", se: "#f472b6B3", zhi: 3_400 },
  { jian: "subagents", ming: "Subagents", se: "#60a5faB3", zhi: 0 },
  { jian: "conversation", ming: "Conversation", se: "#fb923cB3", zhi: 62_500 },
];
const zongliang = 200_000;
const yiyong = fenlei.reduce((s, x) => s + x.zhi, 0);
const geshi = (n: number) => (n >= 1_000_000 ? `${(n / 1_000_000).toFixed(1)}M` : n >= 1_000 ? `${(n / 1_000).toFixed(1)}K` : `${Math.round(n)}`);
const tingfenlei = ref<string | null>(null);

// ---------- 快速短語 ----------
type duanyu = { ming: string; lei: "input" | "send" | "terminal"; nei: string };
const duanyuliebiao: duanyu[] = [
  { ming: "Run dev server", lei: "terminal", nei: "npm run dev" },
  { ming: "Review my changes", lei: "send", nei: "Review the uncommitted changes and list risky spots." },
  { ming: "Tests first", lei: "input", nei: "Write the failing test first, then the fix." },
];
const duanyutu = { input: "message-square", send: "send", terminal: "square-terminal" } as const;
const duanyuleiming = (l: duanyu["lei"]) => t((l === "send" ? "quickPhrases.send" : l === "terminal" ? "quickPhrases.terminal" : "quickPhrases.insert") as never);

// ---------- / 選單 ----------
const xiegangjineng = [
  { ming: "brainstorming", kai: true },
  { ming: "requesting-code-review", kai: true },
  { ming: "breezell-design", kai: false },
  { ming: "systematic-debugging", kai: false },
];
const jinengkai = ref(new Set(xiegangjineng.filter((x) => x.kai).map((x) => x.ming)));
const qiehuan = (ming: string) => {
  const xin = new Set(jinengkai.value);
  if (xin.has(ming)) xin.delete(ming);
  else xin.add(ming);
  jinengkai.value = xin;
};
const duanyumiaoshu = (d: duanyu) => (d.lei === "terminal" ? `Run in terminal: ${d.nei}` : d.lei === "send" ? `Send: ${d.nei}` : d.nei);

// ---------- @ 搜尋 ----------
const souhang = computed(() => [
  { tu: "file", ming: "Sidebar.vue", lu: "src/components/Sidebar.vue", shuo: "Recent" },
  { tu: "file", ming: "useSidebar.ts", lu: "src/composables/useSidebar.ts", shuo: "" },
  { tu: "file", ming: "sidebar.css", lu: "src/styles/sidebar.css", shuo: "" },
  { tu: "folder", ming: "sidebar", lu: "src/components/sidebar", shuo: "" },
]);

// ---------- MCP ----------
const mcpliebiao = ref([
  { ming: "github", zhuangtai: "#3fb950", kai: true },
  { ming: "postgres", zhuangtai: "#3fb950", kai: true },
  { ming: "playwright", zhuangtai: "#6e7681", kai: false },
]);
</script>

<template>
  <!-- 模式選單 -->
  <div v-if="lei === 'moshi'" class="bz-st-moshi">
    <div class="bz-st-ban bz-st-moshi-ban" @mouseleave="xuanting = morenting">
      <div
        v-for="m in moshishunxu"
        :key="m"
        class="bz-st-moshi-hang"
        :class="{ 'bz-xuan': m === moshi, 'bz-jinyong': shouxian(m), 'bz-ting': m === xuanting && m !== moshi }"
        @mouseenter="xuanting = m"
      >
        <span class="bz-st-moshi-zuo">
          <span v-if="m === 'agent'" class="bz-qiu bz-st-moshi-qiu" aria-hidden="true" />
          <svg v-else width="13" height="13" :viewBox="moshixinxi[m].shitu" aria-hidden="true">
            <path
              :d="moshixinxi[m].lujing"
              :fill="moshixinxi[m].miaobian ? 'none' : 'currentColor'"
              :stroke="moshixinxi[m].miaobian ? 'currentColor' : undefined"
              :stroke-width="moshixinxi[m].miaobian ? 2 : undefined"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <span>{{ moshixinxi[m].mingcheng }}</span>
        </span>
        <span class="bz-st-moshi-you">
          <BzTubiao v-if="shouxian(m)" ming="lock" :daxiao="12" :cuxi="2" />
          <svg v-if="m === moshi" width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M10 3L4.5 8.5L2 6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /></svg>
        </span>
      </div>
    </div>
    <div class="bz-st-xiangqing" :style="xiangqingweizhi">
      <span v-if="xuanting === 'entanglement' || xuanting === 'dark_selene'" class="bz-st-xq-mei">{{ t("chatMode.breezellOriginalMode") }}</span>
      <span class="bz-st-xq-biao">{{ t(`chatMode.${moshijian[xuanting]}Detail` as never) }}</span>
      <span class="bz-st-xq-shuo" :class="{ 'bz-st-xq-xie': xuanting === 'dark_selene' }">{{ t(`chatMode.${moshijian[xuanting]}Explain` as never) }}</span>
      <span v-if="shouxian(xuanting)" class="bz-st-xq-fen">
        <span class="bz-st-xq-biao">{{ t("chatMode.entanglementUnlockTitle") }}</span>
        <span class="bz-st-xq-zhu">{{ t("chatMode.entanglementUnlockProgress").replace("{0}", String(jindu)).replace("{1}", "5") }}</span>
        <span class="bz-st-xq-shuo">{{ t("chatMode.entanglementUnlockHint") }}</span>
      </span>
      <span v-if="xuanting === 'agent_teams'" class="bz-st-xq-fen"><span class="bz-st-xq-zhu">{{ t("chatMode.agentTeamsTokenWarning") }}</span></span>
      <span v-if="xuanting === 'dark_selene'" class="bz-st-xq-fen"><span class="bz-st-xq-zhu">{{ t("chatMode.darkSeleneTokenWarning") }}</span></span>
    </div>
  </div>

  <!-- @ 選單根層 -->
  <div v-else-if="lei === 'tiji'" class="bz-st-ban bz-st-fu">
    <div class="bz-st-lie">
      <div v-for="(x, i) in [{ tu: 'file', ming: 'files' }, { tu: 'folder', ming: 'folders' }, { tu: 'messages-square', ming: 'chats' }]" :key="x.ming" class="bz-st-tj-hang" :class="{ 'bz-xuan': i === 0 }">
        <span class="bz-st-tj-ka"><BzTubiao :ming="x.tu" :daxiao="14" :cuxi="1.8" /></span>
        <span class="bz-st-tj-wen"><span class="bz-st-tj-ming bz-st-cu">{{ x.ming }}</span></span>
        <BzTubiao ming="chevron-right" :daxiao="12" class="bz-st-tj-jian" />
      </div>
    </div>
  </div>

  <!-- @ 搜尋結果 -->
  <div v-else-if="lei === 'tijisou'" class="bz-st-ban bz-st-fu">
    <div class="bz-st-tou">
      <span class="bz-st-tou-fu">@</span>
      <span class="bz-st-tou-wen">{{ sou }}</span>
    </div>
    <div class="bz-st-lie">
      <div v-for="(x, i) in souhang" :key="x.lu" class="bz-st-tj-hang" :class="{ 'bz-xuan': i === 0 }">
        <span class="bz-st-tj-tu"><BzTubiao :ming="x.tu" :daxiao="14" :cuxi="1.8" /></span>
        <span class="bz-st-tj-wen">
          <span class="bz-st-tj-ming">{{ x.ming }}</span>
          <span class="bz-st-tj-ci">{{ x.lu }}</span>
          <span v-if="x.shuo" class="bz-st-tj-ci">{{ x.shuo }}</span>
        </span>
      </div>
    </div>
  </div>

  <!-- / 選單 -->
  <div v-else-if="lei === 'xiegang'" class="bz-st-ban bz-st-fu">
    <div class="bz-st-tou">
      <span class="bz-st-tou-fu">/</span>
      <span class="bz-st-tou-ming">Skills &amp; quick phrases</span>
    </div>
    <div class="bz-st-lie">
      <div v-for="(d, i) in duanyuliebiao" :key="d.ming" class="bz-st-tj-hang" :class="{ 'bz-xuan': i === 0 }">
        <span class="bz-st-tj-tu"><BzTubiao :ming="duanyutu[d.lei]" :daxiao="14" :cuxi="1.8" /></span>
        <span class="bz-st-tj-wen">
          <span class="bz-st-tj-ming">{{ d.ming }}</span>
          <span class="bz-st-tj-ci">{{ duanyumiaoshu(d) }}</span>
        </span>
      </div>
      <div v-for="j in xiegangjineng" :key="j.ming" class="bz-st-tj-hang" :class="{ 'bz-st-guan': !jinengkai.has(j.ming) }">
        <span class="bz-st-tj-tu"><BzTubiao ming="layers" :daxiao="14" :cuxi="1.8" /></span>
        <span class="bz-st-tj-wen">
          <span class="bz-st-tj-ming">{{ j.ming }}</span>
          <span v-if="!jinengkai.has(j.ming)" class="bz-st-tj-ci">Off — switch it on to use it</span>
        </span>
        <button type="button" class="bz-st-kai" :class="{ 'bz-kai': jinengkai.has(j.ming) }" @click="qiehuan(j.ming)" />
      </div>
    </div>
  </div>

  <!-- Context 面板 -->
  <div v-else-if="lei === 'shangxiawen'" class="bz-st-ban bz-st-cx">
    <div class="bz-st-cx-tou">
      <span class="bz-st-cx-biao">Context</span>
      <span class="bz-st-cx-an-zu">
        <span class="bz-st-cx-ya" :class="{ 'bz-gl': gaoliang === 'yasuo' }">
          <BzTubiao ming="shrink" :daxiao="12" :cuxi="2" />
          <span>{{ t("contextUsage.compress") }}</span>
          <span v-if="gaoliang === 'yasuo' && biaoji" class="bz-biaoji" style="top: -12px; right: -10px">{{ biaoji }}</span>
        </span>
        <span class="bz-st-guanbi"><BzTubiao ming="x" :daxiao="12" :cuxi="2.8" /></span>
      </span>
    </div>
    <div class="bz-st-cx-tongji">
      <span>{{ Math.round((yiyong / zongliang) * 100) }}% Full</span>
      <span>~{{ geshi(yiyong) }} / {{ geshi(zongliang) }} Tokens</span>
    </div>
    <div class="bz-st-cx-tiao" role="img">
      <span
        v-for="f in fenlei.filter((x) => x.zhi > 0)"
        :key="f.jian"
        :style="{ background: f.se, flexGrow: f.zhi, opacity: tingfenlei == null || tingfenlei === f.jian ? 1 : 0.35 }"
      />
      <span :style="{ flexGrow: zongliang - yiyong }" />
    </div>
    <ul class="bz-st-cx-lie" @mouseleave="tingfenlei = null">
      <li v-for="f in fenlei" :key="f.jian" :style="{ opacity: tingfenlei != null && tingfenlei !== f.jian ? 0.35 : 1 }" @mouseenter="tingfenlei = f.jian">
        <span class="bz-st-cx-se" :style="{ background: f.se }" />
        <span class="bz-st-cx-ming">{{ f.ming }}</span>
        <span class="bz-st-cx-zhi">{{ geshi(f.zhi) }}</span>
      </li>
    </ul>
  </div>

  <!-- 快速短語收藏面板 -->
  <div v-else-if="lei === 'duanyu'" class="bz-st-ban bz-st-dy">
    <div class="bz-st-dy-tou">
      <span class="bz-st-dy-biao">{{ t("inputToolbar.quickPhrases") }}</span>
      <span class="bz-st-dy-pai">{{ t("quickPhrases.favorites") }}</span>
      <span class="bz-st-dy-guanli" :class="{ 'bz-gl': gaoliang === 'guanli' }">
        {{ t("quickPhrases.manage") }}
        <span v-if="gaoliang === 'guanli' && biaoji" class="bz-biaoji" style="top: -12px; right: -10px">{{ biaoji }}</span>
      </span>
    </div>
    <div v-for="d in duanyuliebiao" :key="d.ming" class="bz-st-dy-hang">
      <span class="bz-st-dy-tu"><BzTubiao :ming="duanyutu[d.lei]" :daxiao="13" :cuxi="2" /></span>
      <span class="bz-st-dy-ming">{{ d.ming }}</span>
      <span class="bz-st-dy-lei">{{ duanyuleiming(d.lei) }}</span>
    </div>
  </div>

  <!-- 提示詞優化預覽 -->
  <div v-else-if="lei === 'youhua'" class="bz-st-ban bz-st-yh">
    <div class="bz-st-yh-tou">
      <BzTubiao ming="wand-sparkles" :daxiao="12" :cuxi="2" />
      <span>{{ t("promptOptimize.title") }}</span>
    </div>
    <div class="bz-st-yh-wen">{{ youhuawen }}</div>
    <div class="bz-st-yh-di">
      <span class="bz-st-yh-zhu" :class="{ 'bz-gl': gaoliang === 'tihuan' }">
        {{ t("promptOptimize.replace") }}
        <span v-if="gaoliang === 'tihuan' && biaoji" class="bz-biaoji" style="top: -12px; right: -10px">{{ biaoji }}</span>
      </span>
      <span class="bz-st-yh-ci">{{ t("promptOptimize.retrySame") }}</span>
      <span class="bz-st-yh-hou">{{ t("promptOptimize.dismiss") }}</span>
    </div>
  </div>

  <!-- Breezell Browser 面板 -->
  <div v-else-if="lei === 'liulanqi'" class="bz-st-ban bz-st-fu bz-st-ll">
    <div class="bz-st-ll-tou">
      <span class="bz-st-ll-wen">
        <span class="bz-st-ll-biao">Breezell Browser</span>
        <span class="bz-st-ll-zt"><span class="bz-st-ll-dian" />{{ t("browserPanel.readyToLaunch") }}</span>
      </span>
      <span class="bz-st-ll-kai">{{ t("browserPanel.open") }}</span>
      <span class="bz-st-ll-jia"><svg width="13" height="13" viewBox="0 0 12 12" fill="none"><path d="M6 2v8M2 6h8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" /></svg></span>
    </div>
    <div class="bz-st-ll-xian" />
    <div class="bz-st-ll-kong">
      <span class="bz-st-ll-qiu"><BzTubiao ming="globe" :daxiao="22" :cuxi="2" /></span>
      <span class="bz-st-ll-kbiao">{{ t("browserPanel.noBrowserOpen") }}</span>
      <span class="bz-st-ll-kshuo">{{ t("browserPanel.emptyHint") }}</span>
      <span class="bz-st-ll-sou">
        <svg width="13" height="13" viewBox="0 0 14 14" fill="none"><circle cx="6" cy="6" r="4.25" stroke="currentColor" stroke-width="1.4" /><path d="M9.4 9.4L12 12" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" /></svg>
        <span>{{ t("browserPanel.searchPlaceholder") }}</span>
      </span>
    </div>
  </div>

  <!-- MCP 面板 -->
  <div v-else-if="lei === 'mcp'" class="bz-st-ban bz-st-mcp">
    <div class="bz-st-mcp-tou">
      <span class="bz-st-mcp-zuo">MCP <BzTubiao ming="info" :daxiao="12" /></span>
      <span class="bz-st-mcp-you">
        <span>{{ mcpliebiao.filter((x) => x.kai).length }}/{{ mcpliebiao.length }}</span>
        <span class="bz-st-mcp-jia"><BzTubiao ming="plus" :daxiao="12" :cuxi="2" /></span>
      </span>
    </div>
    <div class="bz-st-mcp-lie">
      <div v-for="s in mcpliebiao" :key="s.ming" class="bz-st-mcp-hang">
        <span class="bz-st-mcp-dian" :style="{ background: s.kai ? s.zhuangtai : '#6e7681' }" />
        <span class="bz-st-mcp-ming">{{ s.ming }}</span>
        <span v-if="s.kai" class="bz-st-mcp-yin" :title="t('inputToolbar.referenceMcpServer')"><BzTubiao ming="send" :daxiao="13" /></span>
        <button type="button" class="bz-st-kai" :class="{ 'bz-kai': s.kai }" @click="s.kai = !s.kai" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.bz-st-ban {
  position: relative;
  border-radius: 8px;
  color: var(--bz-fg);
  background: var(--bz-editor-bg);
  border: 1px solid color-mix(in srgb, var(--bz-fg) 18%, transparent);
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.28), inset 0 1px 0 color-mix(in srgb, var(--bz-fg) 8%, transparent);
  font-size: 12px;
  text-align: left;
}

/* 貼在輸入框上緣的面板（data-bzm-attached="above"）：只有上方圓角、沒有下框線 */
.bz-st-fu {
  border-bottom: 0;
  border-radius: 6px 6px 0 0;
  box-shadow: 0 -4px 24px rgba(0, 0, 0, 0.25);
}

.bz-st-cu {
  font-weight: 500;
}

/* ---------- 模式選單 ---------- */
.bz-st-moshi {
  position: relative;
  display: flex;
  align-items: flex-start;
}

.bz-st-moshi-ban {
  padding: 4px 0;
}

.bz-st-moshi-hang {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 26px;
  margin: 1px 2px;
  padding: 0 6px;
  border-radius: 4px;
  white-space: nowrap;
  cursor: pointer;
  color: var(--bz-fg-2);
}

.bz-st-moshi-hang.bz-ting {
  background: color-mix(in srgb, var(--bz-button-bg) 14%, transparent);
}

.bz-st-moshi-hang.bz-xuan {
  color: var(--bz-fg-1);
  background: color-mix(in srgb, var(--bz-button-bg) 20%, transparent);
}

.bz-st-moshi-hang.bz-jinyong {
  opacity: 0.5;
  cursor: not-allowed;
}

.bz-st-moshi-zuo {
  display: flex;
  align-items: center;
  gap: 6px;
  font-weight: 500;
}

.bz-st-moshi-zuo svg {
  opacity: 0.8;
}

.bz-st-moshi-qiu {
  width: 13px;
  height: 13px;
}

.bz-st-moshi-you {
  display: flex;
  align-items: center;
  gap: 6px;
  padding-left: 16px;
  opacity: 0.8;
}

.bz-st-xiangqing {
  position: absolute;
  left: calc(100% + 6px);
  display: flex;
  flex-direction: column;
  width: max-content;
  max-width: 240px;
  padding: 9px 12px;
  border-radius: 6px;
  font-size: 11px;
  line-height: 1.5;
  color: var(--bz-fg-2);
  background: var(--bz-editor-bg);
  border: 1px solid color-mix(in srgb, var(--bz-fg) 10%, transparent);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.16);
  pointer-events: none;
}

@media (max-width: 640px) {
  .bz-st-xiangqing {
    max-width: 150px;
  }
}

.bz-st-xq-mei {
  margin-bottom: 2px;
  font-size: 10px;
  font-weight: 500;
  letter-spacing: 0.4px;
  color: var(--bz-fg-3);
}

.bz-st-xq-biao {
  display: block;
  font-weight: 600;
}

.bz-st-xq-shuo {
  display: block;
  margin-top: 2px;
  opacity: 0.62;
  line-height: 1.45;
}

.bz-st-xq-xie {
  font-style: italic;
}

.bz-st-xq-fen {
  display: block;
  margin-top: 8px;
  padding-top: 7px;
  border-top: 1px solid color-mix(in srgb, var(--bz-fg) 9%, transparent);
}

.bz-st-xq-zhu {
  display: block;
  margin-top: 3px;
  color: var(--bz-fg-3);
  font-variant-numeric: tabular-nums;
}

/* ---------- @ 與 / 選單 ---------- */
.bz-st-tou {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 6px 10px;
  font-size: 11px;
  border-bottom: 1px solid color-mix(in srgb, var(--bz-fg) 10%, transparent);
}

.bz-st-tou-fu {
  font-weight: 700;
  color: var(--bz-fg-3);
}

.bz-st-tou-wen {
  color: var(--bz-fg-1);
}

.bz-st-tou-ming {
  font-weight: 500;
  color: var(--bz-fg-2);
}

.bz-st-lie {
  padding: 4px 0;
}

.bz-st-tj-hang {
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 0 4px;
  padding: 6px 10px;
  border-radius: 5px;
  color: var(--bz-fg-2);
}

.bz-st-tj-hang.bz-xuan {
  color: var(--bz-fg-1);
  background: color-mix(in srgb, var(--bz-button-bg) 14%, transparent);
}

.bz-st-tj-ka {
  display: grid;
  place-items: center;
  width: 22px;
  height: 22px;
  flex-shrink: 0;
  border-radius: 6px;
  background: color-mix(in srgb, var(--bz-fg) 10%, transparent);
}

.bz-st-tj-tu {
  display: grid;
  place-items: center;
  width: 16px;
  height: 16px;
  flex-shrink: 0;
}

.bz-st-tj-wen {
  display: flex;
  flex: 1;
  flex-direction: column;
  min-width: 0;
}

.bz-st-tj-ming {
  overflow: hidden;
  font-size: 12px;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.bz-st-tj-ci {
  overflow: hidden;
  font-size: 10px;
  line-height: 1.25;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: color-mix(in srgb, var(--bz-fg-3) 50%, transparent);
}

.bz-st-tj-jian {
  flex-shrink: 0;
  opacity: 0.4;
}

.bz-st-guan .bz-st-tj-tu,
.bz-st-guan .bz-st-tj-wen {
  opacity: 0.5;
}

.bz-st-kai {
  position: relative;
  flex-shrink: 0;
  width: 28px;
  height: 16px;
  border-radius: 999px;
  background: color-mix(in srgb, var(--bz-fg) 26%, transparent) !important;
  transition: background-color 150ms;
}

.bz-st-kai::after {
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

.bz-st-kai.bz-kai {
  background: var(--bz-button-bg) !important;
}

.bz-st-kai.bz-kai::after {
  left: 14px;
}

/* ---------- Context 面板 ---------- */
.bz-st-cx {
  padding: 12px;
  line-height: 1.45;
}

.bz-st-cx-tou {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
}

.bz-st-cx-biao {
  font-size: 14px;
  font-weight: 700;
  letter-spacing: -0.01em;
  line-height: 1.2;
}

.bz-st-cx-an-zu {
  display: flex;
  align-items: center;
  gap: 6px;
}

.bz-st-cx-ya {
  position: relative;
  display: flex;
  align-items: center;
  gap: 4px;
  height: 22px;
  padding: 0 8px;
  border-radius: 4px;
  font-size: 11px;
  font-weight: 500;
  background: color-mix(in srgb, var(--bz-fg) 8%, transparent);
  border: 1px solid color-mix(in srgb, var(--bz-fg) 14%, transparent);
}

.bz-st-guanbi {
  display: grid;
  place-items: center;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  opacity: 0.8;
  background: color-mix(in srgb, var(--bz-fg) 14%, transparent);
}

.bz-st-cx-tongji {
  display: flex;
  justify-content: space-between;
  margin-bottom: 6px;
  font-weight: 500;
  color: var(--bz-fg-3);
}

.bz-st-cx-tiao {
  display: flex;
  height: 8px;
  margin-bottom: 12px;
  overflow: hidden;
  border-radius: 4px;
  background: color-mix(in srgb, var(--bz-fg) 8%, transparent);
}

.bz-st-cx-tiao span {
  transition: opacity 120ms ease;
}

.bz-st-cx-lie {
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin: 0;
  padding: 0;
  list-style: none;
}

.bz-st-cx-lie li {
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 0;
  transition: opacity 120ms ease;
}

.bz-st-cx-se {
  width: 10px;
  height: 10px;
  flex-shrink: 0;
  border-radius: 3px;
}

.bz-st-cx-ming {
  flex: 1;
  font-weight: 500;
}

.bz-st-cx-zhi {
  font-weight: 500;
  color: var(--bz-fg-3);
}

/* ---------- 快速短語 ---------- */
.bz-st-dy {
  width: 288px;
  overflow: hidden;
}

.bz-st-dy-tou {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 6px 10px;
  border-bottom: 1px solid color-mix(in srgb, var(--bz-fg) 12%, transparent);
}

.bz-st-dy-biao {
  font-weight: 600;
}

.bz-st-dy-pai {
  flex: 1 0 auto;
  max-width: max-content;
  padding: 0 4px;
  border-radius: 4px;
  font-size: 10px;
  font-weight: 600;
  line-height: 16px;
  background: color-mix(in srgb, var(--bz-fg) 8%, transparent);
  border: 1px solid color-mix(in srgb, var(--bz-fg) 14%, transparent);
}

.bz-st-dy-guanli {
  position: relative;
  margin-left: auto;
  padding: 2px 6px;
  border-radius: 6px;
  font-size: 10.5px;
  font-weight: 500;
  line-height: 16px;
  background: color-mix(in srgb, var(--bz-fg) 6%, transparent);
  border: 1px solid color-mix(in srgb, var(--bz-fg) 16%, transparent);
}

.bz-st-dy-hang {
  display: flex;
  align-items: center;
  gap: 8px;
  height: 36px;
  padding: 0 14px;
}

.bz-st-dy-hang:hover {
  background: color-mix(in srgb, var(--bz-fg) 7%, transparent);
}

.bz-st-dy-tu,
.bz-st-dy-lei {
  flex-shrink: 0;
  color: var(--bz-fg-3);
}

.bz-st-dy-ming {
  flex: 1;
  min-width: 0;
  overflow: hidden;
  font-size: 13px;
  font-weight: 500;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.bz-st-dy-lei {
  font-size: 10px;
  font-weight: 600;
}

/* ---------- 提示詞優化 ---------- */
.bz-st-yh {
  width: 340px;
  overflow: hidden;
}

.bz-st-yh-tou {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 6px 10px;
  font-size: 11px;
  font-weight: 600;
  color: var(--bz-fg-3);
  border-bottom: 1px solid color-mix(in srgb, var(--bz-fg) 12%, transparent);
}

.bz-st-yh-wen {
  max-height: 196px;
  overflow-y: auto;
  padding: 8px 10px;
  font-size: 12.5px;
  line-height: 20px;
  white-space: pre-wrap;
  color: var(--bz-fg-1);
}

.bz-st-yh-di {
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 6px 8px;
  border-top: 1px solid color-mix(in srgb, var(--bz-fg) 12%, transparent);
}

.bz-st-yh-zhu,
.bz-st-yh-ci,
.bz-st-yh-hou {
  position: relative;
  display: inline-flex;
  align-items: center;
  height: 24px;
  padding: 0 8px;
  border-radius: 4px;
  font-size: 11px;
}

.bz-st-yh-zhu {
  font-weight: 600;
  color: var(--bz-button-fg);
  background: var(--bz-button-bg);
}

.bz-st-yh-ci {
  font-weight: 500;
  color: var(--bz-fg-2);
  border: 1px solid color-mix(in srgb, var(--bz-fg) 14%, transparent);
}

.bz-st-yh-hou {
  margin-left: auto;
  font-weight: 500;
  color: var(--bz-fg-3);
}

/* ---------- Breezell Browser ---------- */
.bz-st-ll {
  border-radius: 16px 16px 0 0;
  box-shadow: 0 -16px 40px rgba(0, 0, 0, 0.28), inset 0 1px 0 color-mix(in srgb, var(--bz-fg) 8%, transparent);
}

.bz-st-ll-tou {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 12px 8px;
}

.bz-st-ll-wen {
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 2px;
  min-width: 0;
}

.bz-st-ll-biao {
  font-size: 12px;
  font-weight: 600;
  line-height: 1;
  letter-spacing: -0.01em;
  color: var(--bz-fg-1);
}

.bz-st-ll-zt {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 10.5px;
  line-height: 1;
  color: var(--bz-fg-3);
}

.bz-st-ll-dian {
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: color-mix(in srgb, var(--bz-fg) 32%, transparent);
}

.bz-st-ll-kai {
  flex-shrink: 0;
  padding: 4px 10px;
  border-radius: 7px;
  font-size: 11px;
  font-weight: 500;
  color: var(--bz-fg-1);
  background: color-mix(in srgb, var(--bz-fg-3) 10%, transparent);
}

.bz-st-ll-jia {
  display: grid;
  place-items: center;
  width: 28px;
  height: 28px;
  flex-shrink: 0;
  border-radius: 7px;
  color: var(--bz-fg-3);
}

.bz-st-ll-xian {
  height: 1px;
  margin: 0 12px;
  background: color-mix(in srgb, var(--bz-fg) 8%, transparent);
}

.bz-st-ll-kong {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  padding: 28px 20px;
}

.bz-st-ll-qiu {
  margin-bottom: 8px;
  color: color-mix(in srgb, var(--bz-fg-3) 45%, transparent);
}

.bz-st-ll-kbiao {
  font-size: 12.5px;
  font-weight: 600;
  letter-spacing: -0.01em;
  color: var(--bz-fg-1);
}

.bz-st-ll-kshuo {
  max-width: 230px;
  font-size: 10.5px;
  line-height: 1.6;
  text-align: center;
  color: var(--bz-fg-3);
}

.bz-st-ll-sou {
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
  margin-top: 8px;
  padding: 8px 10px;
  border-radius: 9px;
  font-size: 12px;
  color: color-mix(in srgb, var(--bz-fg-3) 60%, transparent);
  background: color-mix(in srgb, var(--bz-fg) 4%, transparent);
  border: 1px solid color-mix(in srgb, var(--bz-fg) 10%, transparent);
}

/* ---------- MCP ---------- */
.bz-st-mcp {
  width: 260px;
  overflow: hidden;
}

.bz-st-mcp-tou {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 6px 10px;
  font-size: 11px;
  font-weight: 600;
  color: var(--bz-fg-3);
  border-bottom: 1px solid color-mix(in srgb, var(--bz-fg) 12%, transparent);
}

.bz-st-mcp-zuo,
.bz-st-mcp-you {
  display: flex;
  align-items: center;
  gap: 6px;
}

.bz-st-mcp-jia {
  display: grid;
  place-items: center;
  width: 16px;
  height: 16px;
  color: var(--bz-fg-2);
}

.bz-st-mcp-lie {
  padding: 4px 0;
}

.bz-st-mcp-hang {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 6px 10px;
}

.bz-st-mcp-dian {
  width: 8px;
  height: 8px;
  flex-shrink: 0;
  border-radius: 50%;
}

.bz-st-mcp-ming {
  flex: 1;
  min-width: 0;
  overflow: hidden;
  font-size: 14px;
  font-weight: 700;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.bz-st-mcp-yin {
  display: grid;
  place-items: center;
  width: 20px;
  height: 20px;
  color: var(--bz-fg-2);
}
</style>
