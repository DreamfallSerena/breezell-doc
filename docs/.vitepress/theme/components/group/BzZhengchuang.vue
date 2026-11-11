<script setup lang="ts">
import BzCodicon from "../byok/BzCodicon.vue";
import BzPinpai from "../byok/BzPinpai.vue";

// Breezell 的整個視窗（標題列 + 活動列 + 側邊欄 + 編輯器 + 右側聊天 + 狀態列）。
// 尺寸、顏色、圓角全部照 browser/react/src/breezell-settings-tsx 之外的外框來源：
// 標題列 35px、活動列 44px、編輯器分頁列 35px、狀態列 22px，顏色用本站的 Breezell 主題變數。
// 四個分組教學畫面都裝在這個外框裡，才和 Breezell 實機一致；
// 數值與 BzChuangti（Agent 頁整體）相同，避免同一份文檔裡出現兩種外框。
type zhuangtailan = "code" | "page";

// 活動列：資源管理器、搜尋、原始碼管理（帶變更數）、執行與除錯、終端機、擴充、Breezell Box。
// 圖示與位置對應本機 Breezell 的實際排列；徽章只是示例數字。
const huodongxiang: { ming: string; biao?: string }[] = [
  { ming: "files" },
  { ming: "search" },
  { ming: "source-control", biao: "3" },
  { ming: "debug-alt" },
  { ming: "remote-explorer" },
  { ming: "extensions" },
  { ming: "package", biao: "5" },
];

withDefaults(
  defineProps<{
    gao?: number;
    ce?: number;
    chat?: boolean;
    huodong?: boolean;
    zhuangtai?: zhuangtailan;
    gongzuoqu?: string;
    tabs?: { ming: string; tu?: string; ci?: string; xuan?: boolean; guan?: boolean }[];
  }>(),
  {
    gao: 620,
    ce: 300,
    chat: false,
    huodong: true,
    zhuangtai: "page",
    gongzuoqu: "breezell-web",
    tabs: () => [],
  },
);
</script>

<template>
  <div class="bz">
    <div class="bz-chuangkou bz-zc" :style="{ height: `${gao}px` }">
      <div class="bz-zc-btl">
        <BzPinpai pinpai="breezell" :daxiao="16" />
        <span class="bz-zc-btl-an"><BzCodicon ming="layout-sidebar-left" :daxiao="16" /></span>
        <span class="bz-zc-qiehuan">
          <span class="bz-zc-qt">Box</span>
          <span class="bz-zc-qt bz-xuan">Agent</span>
        </span>
        <span class="bz-zc-kong" />
        <span class="bz-zc-mingling"><BzCodicon ming="search" :daxiao="12" />{{ gongzuoqu }}</span>
        <span class="bz-zc-kong" />
        <span class="bz-zc-btl-an"><BzCodicon ming="settings-gear" :daxiao="15" /></span>
      </div>

      <div class="bz-zc-ti">
        <div v-if="huodong" class="bz-zc-huodong">
          <span
            v-for="(xiang, i) in huodongxiang"
            :key="xiang.ming"
            class="bz-zc-hd-an"
            :class="{ 'bz-xuan': i === 0 }"
          >
            <BzCodicon :ming="xiang.ming" :daxiao="24" />
            <span v-if="xiang.biao" class="bz-zc-hd-biao">{{ xiang.biao }}</span>
          </span>
        </div>

        <div v-if="ce" class="bz-zc-ce" :style="{ width: `${ce}px` }">
          <slot name="ce" />
        </div>

        <div class="bz-zc-bianji">
          <div v-if="tabs.length" class="bz-zc-biaoqian">
            <span v-for="(t, i) in tabs" :key="i" class="bz-zc-bq" :class="{ 'bz-xuan': t.xuan }">
              <span v-if="t.ci" class="bz-zc-bq-tu"><BzCodicon :ming="t.ci" :daxiao="14" /></span>
              {{ t.ming }}
              <span v-if="t.guan" class="bz-zc-bq-guan"><BzCodicon ming="close" :daxiao="12" /></span>
            </span>
          </div>
          <div class="bz-zc-neirong">
            <slot />
          </div>
        </div>

        <div v-if="chat" class="bz-zc-liaotian">
          <slot name="liaotian" />
        </div>
      </div>

      <div class="bz-zc-zhuangtai">
        <span><BzCodicon ming="source-control" :daxiao="12" />main</span>
        <span class="bz-zc-kong" />
        <template v-if="zhuangtai === 'code'">
          <span>Ln 4, Col 18</span>
          <span>TypeScript</span>
        </template>
        <template v-else>
          <span>UTF-8</span>
          <span>LF</span>
        </template>
      </div>

      <slot name="fudong" />
    </div>
  </div>
</template>

<style scoped>
.bz-zc {
  position: relative;
  display: flex;
  flex-direction: column;
  container-type: inline-size;
}

.bz-zc-btl {
  display: flex;
  align-items: center;
  gap: 6px;
  height: 35px;
  flex-shrink: 0;
  padding: 0 10px;
  background: var(--bz-titlebar-bg);
  color: var(--bz-titlebar-fg);
  border-bottom: 1px solid var(--bz-border4);
}

.bz-zc-btl-an {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 26px;
  height: 22px;
  opacity: 0.8;
}

.bz-zc-qiehuan {
  display: flex;
  gap: 2px;
  height: 24px;
  margin-left: 6px;
  padding: 2px;
  border-radius: 7px;
  background: color-mix(in srgb, var(--bz-titlebar-fg) 5%, transparent);
  border: 1px solid color-mix(in srgb, var(--bz-titlebar-fg) 8%, transparent);
}

.bz-zc-qt {
  display: inline-flex;
  align-items: center;
  padding: 0 10px;
  border-radius: 5px;
  font-size: 11px;
  font-weight: 500;
  color: color-mix(in srgb, var(--bz-titlebar-fg) 62%, transparent);
}

.bz-zc-qt.bz-xuan {
  color: var(--bz-titlebar-fg);
  background: color-mix(in srgb, var(--bz-titlebar-fg) 16%, transparent);
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.22), inset 0 1px 0 color-mix(in srgb, var(--bz-titlebar-fg) 10%, transparent);
}

.bz-zc-kong {
  flex: 1;
}

.bz-zc-mingling {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  width: 220px;
  height: 22px;
  border-radius: 11px;
  font-size: 12px;
  color: var(--bz-titlebar-fg);
  background: transparent;
  border: 1px solid transparent;
}

/* Modern UI 的指令中心平常是透明的，只有 hover 才露出底色（commandCenter.css） */
.bz-zc-mingling:hover {
  background: color-mix(in srgb, var(--bz-titlebar-fg) 7%, transparent);
}

.bz-zc-ti {
  display: flex;
  flex: 1;
  min-height: 0;
}

.bz-zc-huodong {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0;
  width: 36px;
  flex-shrink: 0;
  padding-top: 4px;
  color: var(--bz-activity-inactive);
  background: var(--bz-sidebar-bg);
  border-right: 1px solid var(--bz-border4);
}

.bz-zc-hd-an {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
}

.bz-zc-hd-an > :deep(svg) {
  position: relative;
  z-index: 1;
}

/* Modern UI：選中的那一項是一個 24px 的圓角底塊（styleOverrides/activityBar.css） */
.bz-zc-hd-an.bz-xuan::before {
  content: "";
  position: absolute;
  width: 32px;
  height: 32px;
  border-radius: 8px;
  background: var(--bz-activity-active);
}

.bz-zc-hd-an.bz-xuan {
  color: var(--bz-activity-fg);
}

.bz-zc-hd-biao {
  position: absolute;
  right: 4px;
  bottom: 5px;
  z-index: 2;
  min-width: 16px;
  height: 16px;
  padding: 0 4px;
  border-radius: 999px;
  background: var(--bz-badge-bg);
  color: var(--bz-badge-fg);
  font-size: 9px;
  font-weight: 600;
  line-height: 16px;
  text-align: center;
  font-variant-numeric: tabular-nums;
}

.bz-zc-ce {
  flex-shrink: 0;
  min-width: 0;
  max-width: 48%;
  background: var(--bz-sidebar-bg);
  border-right: 1px solid var(--bz-border4);
  font-size: 12px;
  color: var(--bz-sidebar-fg);
  overflow: hidden;
}

.bz-zc-bianji {
  position: relative;
  display: flex;
  flex-direction: column;
  flex: 1;
  min-width: 0;
  background: var(--bz-editor-bg);
}

.bz-zc-biaoqian {
  display: flex;
  align-items: center;
  gap: 2px;
  height: 35px;
  flex-shrink: 0;
  padding: 4px 8px 4px 8px;
  background: var(--bz-editor-bg);
  border-bottom: 1px solid var(--bz-border4);
  overflow: hidden;
}

/* Modern UI 分頁：編輯器底色上的透明圓角歐片，選中＝前景 10% 淡底，未選＝前景 50% 文字 */
.bz-zc-bq {
  display: flex;
  align-items: center;
  gap: 6px;
  max-width: 320px;
  height: 27px;
  padding: 0 10px;
  border-radius: 6px;
  font-size: 12px;
  font-weight: 600;
  color: color-mix(in srgb, var(--bz-fg) 50%, transparent);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.bz-zc-bq.bz-xuan {
  color: var(--bz-fg);
  background: color-mix(in srgb, var(--bz-fg) 10%, transparent);
}

.bz-zc-bq-tu {
  display: inline-flex;
  color: var(--bz-fg-2);
}

.bz-zc-bq-guan {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 18px;
  height: 18px;
  margin-left: 2px;
  border-radius: 4px;
  color: var(--bz-fg-3);
}

.bz-zc-neirong {
  flex: 1;
  min-height: 0;
  overflow: auto;
}

.bz-zc-liaotian {
  display: flex;
  flex-direction: column;
  width: 380px;
  flex-shrink: 1;
  min-width: 0;
  background: var(--bz-sidebar-bg);
  border-left: 1px solid var(--bz-border4);
  overflow: hidden;
}

.bz-zc-zhuangtai {
  display: flex;
  align-items: center;
  gap: 14px;
  height: 22px;
  flex-shrink: 0;
  padding: 0 10px;
  font-size: 11px;
  color: var(--bz-sidebar-fg);
  background: var(--bz-sidebar-bg);
  border-top: 1px solid var(--bz-border4);
}

.bz-zc-zhuangtai span {
  display: inline-flex;
  align-items: center;
  gap: 4px;
}

@container (max-width: 640px) {
  .bz-zc-mingling {
    display: none;
  }
}

@container (max-width: 480px) {
  .bz-zc-bianji {
    display: none;
  }

  .bz-zc-liaotian {
    flex: 1;
    width: auto;
  }
}
</style>
