<script setup lang="ts">
import BzTubiao from "./BzTubiao.vue";
import BzPinpai from "./BzPinpai.vue";
import BzLiaotian from "./BzLiaotian.vue";

// Breezell 的 Agent 頁整體：標題列（側欄鈕之後是 Box | Agent 切換）、活動列、側邊欄、編輯器，
// 右側輔助欄是聊天，最下面是狀態列。biaozhu 打開時用數字標出各區，方便正文對照。
withDefaults(defineProps<{ biaozhu?: boolean; wen?: string; da?: string }>(), {
  biaozhu: true,
  wen: "",
  da: "",
});

const daima = [
  [{ c: "gj", t: "import" }, { c: "pt", t: " { " }, { c: "bl", t: "readFile" }, { c: "pt", t: " } " }, { c: "gj", t: "from" }, { c: "zf", t: " 'node:fs/promises'" }],
  [],
  [{ c: "gj", t: "export async function" }, { c: "hs", t: " loadConfig" }, { c: "pt", t: "(" }, { c: "bl", t: "path" }, { c: "pt", t: ": " }, { c: "lx", t: "string" }, { c: "pt", t: ") {" }],
  [{ c: "pt", t: "  " }, { c: "gj", t: "const" }, { c: "bl", t: " text" }, { c: "pt", t: " = " }, { c: "gj", t: "await" }, { c: "hs", t: " readFile" }, { c: "pt", t: "(" }, { c: "bl", t: "path" }, { c: "pt", t: ", " }, { c: "zf", t: "'utf8'" }, { c: "pt", t: ")" }],
  [{ c: "pt", t: "  " }, { c: "gj", t: "return" }, { c: "lx", t: " JSON" }, { c: "pt", t: "." }, { c: "hs", t: "parse" }, { c: "pt", t: "(" }, { c: "bl", t: "text" }, { c: "pt", t: ")" }],
  [{ c: "pt", t: "}" }],
];
const wenjian = [
  { ming: "src", ceng: 0, mulu: true },
  { ming: "config.ts", ceng: 1, xuan: true },
  { ming: "index.ts", ceng: 1 },
  { ming: "utils.ts", ceng: 1 },
  { ming: "package.json", ceng: 0 },
  { ming: "README.md", ceng: 0 },
];
</script>

<template>
  <div class="bz">
    <div class="bz-chuangkou bz-ct">
      <div class="bz-ct-btl">
        <BzPinpai pinpai="breezell" :daxiao="16" />
        <span class="bz-ct-btl-an"><BzTubiao ming="panel-left" :daxiao="16" :cuxi="1.6" /></span>
        <span class="bz-ct-qiehuan">
          <span class="bz-ct-tab">Box</span>
          <span class="bz-ct-tab bz-xuan">Agent</span>
          <span v-if="biaozhu" class="bz-biaoji" style="top: -11px; left: -10px">1</span>
        </span>
        <span class="bz-ct-kong" />
        <span class="bz-ct-mingling"><BzTubiao ming="search" :daxiao="12" />my-project</span>
        <span class="bz-ct-kong" />
        <span class="bz-ct-btl-an"><BzTubiao ming="settings" :daxiao="15" :cuxi="1.7" /></span>
      </div>
      <div class="bz-ct-ti">
        <div class="bz-ct-huodong">
          <span v-for="(ming, xuhao) in ['copy', 'search', 'git-compare', 'boxes']" :key="ming" :class="{ 'bz-xuan': xuhao === 0 }"><BzTubiao :ming="ming" :daxiao="20" :cuxi="1.6" /></span>
        </div>
        <div class="bz-ct-ce">
          <div class="bz-ct-ce-tou">EXPLORER</div>
          <div v-for="xiang in wenjian" :key="xiang.ming" class="bz-ct-wj" :class="{ 'bz-xuan': xiang.xuan }" :style="{ paddingLeft: `${10 + xiang.ceng * 12}px` }">
            <BzTubiao v-if="xiang.mulu" ming="chevron-down" :daxiao="12" />
            <span v-else class="bz-ct-wj-dian" />
            {{ xiang.ming }}
          </div>
        </div>
        <div class="bz-ct-bianji">
          <div class="bz-ct-biaoqian">
            <span class="bz-ct-bq bz-xuan">config.ts <BzTubiao ming="x" :daxiao="12" /></span>
            <span class="bz-ct-bq">index.ts</span>
          </div>
          <div class="bz-ct-daima bz-mono">
            <div v-for="(hang, xuhao) in daima" :key="xuhao" class="bz-ct-hang">
              <span class="bz-ct-hao">{{ xuhao + 1 }}</span>
              <span><span v-for="(duan, i) in hang" :key="i" :class="`bz-ct-${duan.c}`">{{ duan.t }}</span></span>
            </div>
          </div>
          <span v-if="biaozhu" class="bz-biaoji" style="top: 46px; right: 12px">2</span>
        </div>
        <div class="bz-ct-liaotian">
          <BzLiaotian qianru moxing="claude-opus-5-5" :wen="wen" :da="da" :moshibiaoji="biaozhu ? '4' : ''" :jiaonangbiaoji="biaozhu ? '5' : ''" />
          <span v-if="biaozhu" class="bz-biaoji" style="top: 10px; right: 12px">3</span>
        </div>
      </div>
      <div class="bz-ct-zhuangtai">
        <span><BzTubiao ming="git-compare" :daxiao="12" /> main</span>
        <span class="bz-ct-kong" />
        <span>Ln 4, Col 18</span>
        <span>TypeScript</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.bz-ct {
  display: flex;
  flex-direction: column;
  height: 470px;
  container-type: inline-size;
}

.bz-ct-btl {
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

.bz-ct-btl-an {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 26px;
  height: 22px;
  opacity: 0.8;
}

.bz-ct-qiehuan {
  position: relative;
  display: flex;
  gap: 2px;
  height: 24px;
  margin-left: 2px;
  padding: 2px;
  border-radius: 7px;
  background: color-mix(in srgb, var(--bz-titlebar-fg) 5%, transparent);
  border: 1px solid color-mix(in srgb, var(--bz-titlebar-fg) 8%, transparent);
}

.bz-ct-tab {
  display: inline-flex;
  align-items: center;
  padding: 0 10px;
  border-radius: 5px;
  font-size: 11px;
  font-weight: 500;
  color: color-mix(in srgb, var(--bz-titlebar-fg) 62%, transparent);
}

.bz-ct-tab.bz-xuan {
  color: var(--bz-titlebar-fg);
  background: color-mix(in srgb, var(--bz-titlebar-fg) 16%, transparent);
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.22), inset 0 1px 0 color-mix(in srgb, var(--bz-titlebar-fg) 10%, transparent);
}

.bz-ct-kong {
  flex: 1;
}

.bz-ct-mingling {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  width: 220px;
  height: 22px;
  border-radius: 6px;
  font-size: 12px;
  color: color-mix(in srgb, var(--bz-titlebar-fg) 80%, transparent);
  background: color-mix(in srgb, var(--bz-titlebar-fg) 6%, transparent);
  border: 1px solid color-mix(in srgb, var(--bz-titlebar-fg) 10%, transparent);
}

.bz-ct-ti {
  display: flex;
  flex: 1;
  min-height: 0;
}

.bz-ct-huodong {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px;
  width: 44px;
  flex-shrink: 0;
  padding-top: 10px;
  color: color-mix(in srgb, var(--bz-fg) 45%, transparent);
  background: var(--bz-sidebar-bg);
  border-right: 1px solid var(--bz-border4);
}

.bz-ct-huodong .bz-xuan {
  color: var(--bz-fg);
}

.bz-ct-ce {
  width: 150px;
  flex-shrink: 0;
  padding-top: 6px;
  background: var(--bz-sidebar-bg);
  border-right: 1px solid var(--bz-border4);
  font-size: 12px;
  color: var(--bz-fg-2);
}

.bz-ct-ce-tou {
  padding: 4px 12px 8px;
  font-size: 11px;
  letter-spacing: 0.04em;
  color: var(--bz-fg-3);
}

.bz-ct-wj {
  display: flex;
  align-items: center;
  gap: 6px;
  height: 22px;
  white-space: nowrap;
}

.bz-ct-wj.bz-xuan {
  background: color-mix(in srgb, var(--bz-button-bg) 16%, transparent);
  color: var(--bz-fg-1);
}

.bz-ct-wj-dian {
  width: 12px;
  height: 12px;
  border-radius: 3px;
  background: color-mix(in srgb, var(--bz-link) 35%, transparent);
}

.bz-ct-bianji {
  position: relative;
  display: flex;
  flex-direction: column;
  flex: 1;
  min-width: 0;
  background: var(--bz-editor-bg);
}

.bz-ct-biaoqian {
  display: flex;
  height: 35px;
  flex-shrink: 0;
  background: var(--bz-sidebar-bg);
  border-bottom: 1px solid var(--bz-border4);
}

.bz-ct-bq {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 0 12px;
  font-size: 12px;
  color: var(--bz-fg-3);
  border-right: 1px solid var(--bz-border4);
  white-space: nowrap;
}

.bz-ct-bq.bz-xuan {
  color: var(--bz-fg-1);
  background: var(--bz-editor-bg);
}

.bz-ct-daima {
  padding: 10px 0;
  font-size: 12px;
  line-height: 19px;
  overflow: hidden;
  white-space: pre;
}

.bz-ct-hang {
  display: flex;
  gap: 14px;
}

.bz-ct-hao {
  width: 28px;
  flex-shrink: 0;
  text-align: right;
  color: var(--bz-fg-4);
}

.bz-ct-gj { color: #c586c0; }
.bz-ct-hs { color: #dcdcaa; }
.bz-ct-bl { color: #9cdcfe; }
.bz-ct-lx { color: #4ec9b0; }
.bz-ct-zf { color: #ce9178; }
.bz-ct-pt { color: var(--bz-editor-fg); }

:root:not(.dark) .bz-ct-gj { color: #af00db; }
:root:not(.dark) .bz-ct-hs { color: #795e26; }
:root:not(.dark) .bz-ct-bl { color: #001080; }
:root:not(.dark) .bz-ct-lx { color: #267f99; }
:root:not(.dark) .bz-ct-zf { color: #a31515; }

.bz-ct-liaotian {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 380px;
  min-width: 0;
  flex-shrink: 1;
  border-left: 1px solid var(--bz-border4);
}

.bz-ct-liaotian > :deep(div:first-child) {
  display: flex;
  flex-direction: column;
  flex: 1;
  min-width: 0;
  min-height: 0;
}

.bz-ct-liaotian :deep(.bz-lt) {
  padding: 10px;
}

.bz-ct-zhuangtai {
  display: flex;
  align-items: center;
  gap: 14px;
  height: 22px;
  flex-shrink: 0;
  padding: 0 10px;
  font-size: 11px;
  color: var(--bz-fg-3);
  background: var(--bz-sidebar-bg);
  border-top: 1px solid var(--bz-border4);
}

.bz-ct-zhuangtai span {
  display: inline-flex;
  align-items: center;
  gap: 4px;
}

@container (max-width: 700px) {
  .bz-ct-ce,
  .bz-ct-mingling {
    display: none;
  }
}

@container (max-width: 520px) {
  .bz-ct-bianji {
    display: none;
  }

  .bz-ct-liaotian {
    flex: 1;
    width: auto;
  }
}
</style>
