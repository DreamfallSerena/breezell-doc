<script setup lang="ts">
// Breezell 示例檔（config.ts）的內容，數值與 BzChuangti 的編輯器完全相同，
// 只為了讓專案清單與分組建議卡這兩個畫面右側的編輯器看起來跟實機一致。
const daima = [
  [{ c: "gj", t: "import" }, { c: "pt", t: " { " }, { c: "bl", t: "readFile" }, { c: "pt", t: " } " }, { c: "gj", t: "from" }, { c: "zf", t: " 'node:fs/promises'" }],
  [],
  [{ c: "gj", t: "export async function" }, { c: "hs", t: " loadConfig" }, { c: "pt", t: "(" }, { c: "bl", t: "path" }, { c: "pt", t: ": " }, { c: "lx", t: "string" }, { c: "pt", t: ") {" }],
  [{ c: "pt", t: "  " }, { c: "gj", t: "const" }, { c: "bl", t: " text" }, { c: "pt", t: " = " }, { c: "gj", t: "await" }, { c: "hs", t: " readFile" }, { c: "pt", t: "(" }, { c: "bl", t: "path" }, { c: "pt", t: ", " }, { c: "zf", t: "'utf8'" }, { c: "pt", t: ")" }],
  [{ c: "pt", t: "  " }, { c: "gj", t: "return" }, { c: "lx", t: " JSON" }, { c: "pt", t: "." }, { c: "hs", t: "parse" }, { c: "pt", t: "(" }, { c: "bl", t: "text" }, { c: "pt", t: ")" }],
  [{ c: "pt", t: "}" }],
];
</script>

<template>
  <div class="bz-dm bz-mono">
    <div v-for="(hang, i) in daima" :key="i" class="bz-dm-hang">
      <span class="bz-dm-hao">{{ i + 1 }}</span>
      <span><span v-for="(duan, j) in hang" :key="j" :class="`bz-dm-${duan.c}`">{{ duan.t }}</span></span>
    </div>
  </div>
</template>

<style scoped>
.bz-dm {
  padding: 10px 0;
  font-size: 12px;
  line-height: 19px;
  overflow: hidden;
  white-space: pre;
}

.bz-dm-hang {
  display: flex;
  gap: 14px;
}

.bz-dm-hao {
  width: 28px;
  flex-shrink: 0;
  text-align: right;
  color: var(--bz-fg-4);
}

.bz-dm-gj { color: #c586c0; }
.bz-dm-hs { color: #dcdcaa; }
.bz-dm-bl { color: #9cdcfe; }
.bz-dm-lx { color: #4ec9b0; }
.bz-dm-zf { color: #ce9178; }
.bz-dm-pt { color: var(--bz-editor-fg); }

:root:not(.dark) .bz-dm-gj { color: #af00db; }
:root:not(.dark) .bz-dm-hs { color: #795e26; }
:root:not(.dark) .bz-dm-bl { color: #001080; }
:root:not(.dark) .bz-dm-lx { color: #267f99; }
:root:not(.dark) .bz-dm-zf { color: #a31515; }
</style>
