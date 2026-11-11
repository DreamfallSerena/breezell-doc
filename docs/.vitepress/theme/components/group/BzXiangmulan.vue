<script setup lang="ts">
import { computed } from "vue";
import BzCodicon from "../byok/BzCodicon.vue";
import { shiyongfenzuwenben } from "./shuju-fenzu";

// 資源管理器裡的專案面板（breezellProjectsPane.ts 的 BreezellProjectsAllView +
// breezellExplorerTabsBar.ts）：最上面是「目前／全部」分段控制與右側的分組書本按鈕，
// 接著是資源管理器的標題列，然後才是清單、虛線的新增按鈕與分組卡。
// 尺寸、圓角、顏色取自 browser/media/breezell.css 的 .breezell-projects-* 規則；
// 標題列的「資源管理器」是 VS Code 自己的字串，這裡按頁面語言給對應寫法。
const props = withDefaults(
  defineProps<{
    gaoliang?: "" | "book" | "tabs" | "addgroup" | "group" | "row" | "opennew";
    biaoji?: string;
    mo?: "all" | "current";
    fenming?: string;
    chengyuan?: string[];
    qita?: string[];
    kong?: boolean;
    tuozhuai?: boolean;
  }>(),
  {
    gaoliang: "",
    biaoji: "",
    mo: "all",
    fenming: "breezell",
    chengyuan: () => ["breezell-web", "breezell-api"],
    qita: () => ["breezell_doc"],
    kong: false,
    tuozhuai: false,
  },
);

const { t, yuyan } = shiyongfenzuwenben();

// VS Code 的資源管理器標題（workbench nls），照各語言使用者的實際畫面。
const ziyuanguanliqi: Record<string, string> = {
  en: "EXPLORER",
  "zh-hans": "资源管理器",
  "zh-hant": "檔案總管",
  ja: "エクスプローラー",
  ko: "탐색기",
  ru: "ПРОВОДНИК",
  es: "EXPLORADOR",
  "pt-br": "EXPLORER",
};
const biaoti = computed(() => ziyuanguanliqi[yuyan.value] ?? ziyuanguanliqi.en);

const xiang = (ming: string) => `~/xiangmu/${ming}`;
const chengyuanshu = computed(() => props.chengyuan.length);
</script>

<template>
  <div class="bz-xm">
    <div class="bz-xm-ding">
      <div class="bz-xm-track" :class="{ 'bz-gl': gaoliang === 'tabs' }">
        <span class="bz-xm-tab" :class="{ active: mo === 'current' }">{{ t("explorerProjects.tabCurrent") }}</span>
        <span class="bz-xm-tab" :class="{ active: mo === 'all' }">{{ t("explorerProjects.tabAll") }}</span>
      </div>
      <button
        type="button"
        class="bz-xm-shu bz-zai"
        :class="{ 'bz-gl': gaoliang === 'book' }"
        :title="t('explorerProjects.groupMenu')"
        :aria-label="t('explorerProjects.groupMenu')"
      >
        <BzCodicon ming="library" :daxiao="14" />
        <span v-if="gaoliang === 'book' && biaoji" class="bz-biaoji" style="top: -11px; left: -8px">{{ biaoji }}</span>
      </button>
    </div>

    <div class="bz-xm-toubiao">
      <span class="bz-xm-zhedie"><BzCodicon ming="chevron-down" :daxiao="13" /></span>
      <span class="bz-xm-toubiao-ming">{{ biaoti }}</span>
      <span class="bz-xm-toubiao-an"><BzCodicon ming="ellipsis" :daxiao="14" /></span>
    </div>

    <div class="bz-xm-nei">
      <div v-if="mo === 'all'" class="bz-xm-dongzuo">
        <button type="button" class="bz-xm-jia" :class="{ 'bz-gl': gaoliang === 'addgroup' }">
          <span class="bz-xm-jia-tu"><BzCodicon ming="add" :daxiao="13" /></span>
          <span class="bz-xm-jia-wen">{{ t("explorerProjects.group.add") }}</span>
          <span v-if="gaoliang === 'addgroup' && biaoji" class="bz-biaoji" style="top: -11px; left: 8px">{{ biaoji }}</span>
        </button>
        <button type="button" class="bz-xm-jia">
          <span class="bz-xm-jia-tu"><BzCodicon ming="folder" :daxiao="13" /></span>
          <span class="bz-xm-jia-wen">{{ t("explorerProjects.addProject") }}</span>
        </button>
      </div>

      <div class="bz-xm-zu" :class="{ 'bz-gl': gaoliang === 'group' }">
        <div class="bz-xm-zu-tou" :aria-expanded="true">
          <span class="bz-xm-se" />
          <span class="bz-xm-zu-ming" :title="fenming">{{ fenming }}</span>
          <span class="bz-xm-zu-lian" :title="t('explorerProjects.group.shareMemory')" :aria-label="t('explorerProjects.group.shareMemory')">
            <BzCodicon ming="link" :daxiao="12" />
          </span>
          <span class="bz-xm-zu-shu">{{ chengyuanshu }}</span>
          <span class="bz-xm-zu-jian"><BzCodicon ming="chevron-down" :daxiao="14" /></span>
          <span v-if="gaoliang === 'group' && biaoji" class="bz-biaoji" style="top: -10px; right: -6px">{{ biaoji }}</span>
        </div>
        <div class="bz-xm-zu-ti">
          <div v-if="kong" class="bz-xm-tuo">{{ t("explorerProjects.group.dropHint") }}</div>
          <template v-else>
            <div v-for="(ming, i) in chengyuan" :key="ming" class="bz-xm-hang" :class="{ current: i === 0 }">
              <span class="bz-xm-dian open"><BzCodicon ming="circle" :daxiao="16" /></span>
              <div class="bz-xm-wen">
                <div class="bz-xm-ming">{{ ming }}</div>
                <div class="bz-xm-xi">{{ xiang(ming) }}</div>
              </div>
            </div>
          </template>
        </div>
      </div>

      <div v-for="ming in mo === 'all' ? qita : []" :key="ming" class="bz-xm-hang" :class="{ dragging: tuozhuai, 'bz-gl': gaoliang === 'row' }">
        <span class="bz-xm-dian none"><BzCodicon ming="circle" :daxiao="16" /></span>
        <div class="bz-xm-wen">
          <div class="bz-xm-ming">{{ ming }}</div>
          <div class="bz-xm-xi">{{ xiang(ming) }}</div>
        </div>
        <button type="button" class="bz-xm-kai" :class="{ 'bz-gl': gaoliang === 'opennew' }" :title="t('explorerProjects.openNewWindow')">
          <BzCodicon ming="versions" :daxiao="14" />
          <span v-if="gaoliang === 'opennew' && biaoji" class="bz-biaoji" style="top: -12px; right: -8px">{{ biaoji }}</span>
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.bz-xm {
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 0;
  container-type: inline-size;
  color: var(--bz-sidebar-fg);
}

.bz-xm-ding {
  display: flex;
  align-items: center;
  flex-shrink: 0;
  padding: 8px 8px 4px;
}

.bz-xm-track {
  display: flex;
  align-items: center;
  flex: 1 1 auto;
  min-width: 0;
  height: 26px;
  padding: 2px;
  border-radius: 8px;
  background: color-mix(in srgb, var(--bz-fg) 7%, transparent);
}

.bz-xm-tab {
  flex: 1 1 0;
  min-width: 0;
  height: 22px;
  border-radius: 6px;
  color: var(--bz-fg-3);
  font-size: 10.5px;
  font-weight: 600;
  letter-spacing: 0.02em;
  line-height: 22px;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.bz-xm-tab.active {
  color: var(--bz-fg-1);
  background: color-mix(in srgb, var(--bz-fg) 11%, transparent);
}

.bz-xm-shu {
  position: relative;
  flex: 0 0 auto;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 26px;
  height: 26px;
  margin-left: 6px;
  border-radius: 8px;
  color: var(--bz-sidebar-fg);
  background: color-mix(in srgb, var(--bz-fg) 7%, transparent);
}

/* .in-group：這個專案已經在分組裡，圖示轉成前景色 */
.bz-xm-shu.bz-zai {
  color: var(--bz-fg);
}

/* 資源管理器自己的標題列（VS Code 的 viewlet 標題） */
.bz-xm-toubiao {
  display: flex;
  align-items: center;
  gap: 4px;
  flex-shrink: 0;
  height: 32px;
  padding: 0 8px;
  font-size: 11px;
  color: var(--bz-sidebar-fg);
  letter-spacing: 0.02em;
}

.bz-xm-zhedie {
  display: inline-flex;
}

.bz-xm-toubiao-ming {
  flex: 1;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  text-transform: uppercase;
}

.bz-xm-toubiao-an {
  display: inline-flex;
}

.bz-xm-nei {
  flex: 1;
  min-height: 0;
  overflow: hidden;
  padding: 0 8px 12px;
}

.bz-xm-dongzuo {
  display: flex;
  align-items: stretch;
  gap: 6px;
  margin: 2px 0 8px;
}

.bz-xm-jia {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  flex: 1 1 0;
  min-width: 0;
  padding: 5px 8px;
  border-radius: 8px;
  border: 1px dashed color-mix(in srgb, var(--bz-fg) 22%, transparent);
  color: color-mix(in srgb, var(--bz-fg) 55%, transparent);
  font-size: 11.5px;
  white-space: nowrap;
}

.bz-xm-jia-tu,
.bz-xm-jia-wen {
  display: inline-flex;
  min-width: 0;
}

.bz-xm-jia-wen {
  overflow: hidden;
  text-overflow: ellipsis;
}

.bz-xm-zu {
  margin: 6px 0 8px;
  border: 1px solid color-mix(in srgb, var(--bz-fg) 10%, transparent);
  border-radius: 8px;
  background: color-mix(in srgb, var(--bz-fg) 3.5%, transparent);
  overflow: hidden;
}

.bz-xm-zu-tou {
  position: relative;
  display: flex;
  align-items: center;
  gap: 7px;
  padding: 6px 8px 6px 10px;
  min-width: 0;
}

.bz-xm-se {
  flex: 0 0 auto;
  width: 8px;
  height: 8px;
  border-radius: 3px;
  background: color-mix(in srgb, var(--bz-button-bg) 85%, transparent);
}

.bz-xm-zu-ming {
  flex: 1 1 auto;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: var(--bz-fg);
  font-size: 12px;
  font-weight: 600;
}

.bz-xm-zu-lian {
  flex: 0 0 auto;
  display: inline-flex;
  margin-right: 4px;
  color: var(--bz-link);
}

.bz-xm-zu-shu {
  flex: 0 0 auto;
  min-width: 16px;
  padding: 0 5px;
  border-radius: 999px;
  text-align: center;
  font-size: 10px;
  line-height: 16px;
  font-variant-numeric: tabular-nums;
  color: color-mix(in srgb, var(--bz-fg) 75%, transparent);
  background: color-mix(in srgb, var(--bz-fg) 9%, transparent);
}

.bz-xm-zu-jian {
  flex: 0 0 auto;
  display: inline-flex;
  color: color-mix(in srgb, var(--bz-fg) 55%, transparent);
}

.bz-xm-zu-ti {
  padding: 2px 4px 4px;
}

.bz-xm-tuo {
  margin: 2px 6px 6px;
  padding: 8px 6px 10px;
  border: 1px dashed color-mix(in srgb, var(--bz-fg) 18%, transparent);
  border-radius: 6px;
  text-align: center;
  font-size: 11px;
  color: color-mix(in srgb, var(--bz-fg) 45%, transparent);
}

.bz-xm-hang {
  position: relative;
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 1px 0;
  padding: 8px 6px 8px 8px;
  border-radius: 8px;
  transition: background-color 80ms ease;
}

.bz-xm-hang:hover {
  background: var(--bz-list-hover);
}

/* 目前專案：list.activeSelectionBackground 72%（breezell.css 的 .breezell-projects-row.current） */
.bz-xm-hang.current {
  background: color-mix(in srgb, var(--bz-list-active) 72%, transparent);
}

.bz-xm-hang.dragging {
  opacity: 0.45;
}

.bz-xm-dian {
  flex: 0 0 auto;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
}

/* 專案列最前面的狀態點：Codicon.circle（實心小圓點） */
.bz-xm-dian.none {
  opacity: 0;
  visibility: hidden;
}

.bz-xm-dian.open {
  color: color-mix(in srgb, var(--bz-fg) 62%, transparent);
}

.bz-xm-wen {
  flex: 1 1 auto;
  min-width: 0;
}

.bz-xm-ming {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: var(--bz-fg);
  font-size: 13px;
  font-weight: 700;
  line-height: 1.25;
}

.bz-xm-xi {
  margin-top: 2px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: var(--bz-fg-3);
  font-size: 11px;
  line-height: 1.3;
  opacity: 0.9;
}

.bz-xm-kai {
  position: relative;
  flex: 0 0 auto;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 22px;
  height: 22px;
  border-radius: 4px;
  color: var(--bz-fg-2);
  opacity: 0.45;
}

.bz-xm-kai:hover {
  opacity: 1;
  background: color-mix(in srgb, var(--bz-fg) 8%, transparent);
}
@container (max-width: 260px) {
  .bz-xm-jia-wen {
    display: none;
  }
}

</style>
