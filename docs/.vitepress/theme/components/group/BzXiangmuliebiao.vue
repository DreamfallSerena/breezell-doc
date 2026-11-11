<script setup lang="ts">
import BzZhengchuang from "./BzZhengchuang.vue";
import BzXiangmulan from "./BzXiangmulan.vue";
import BzDaima from "./BzDaima.vue";

// 資源管理器上方的專案清單（breezellExplorerTabsBar.ts 的「目前／全部」與分組書本按鈕，
// 下面是 breezellProjectsPane.ts 的 BreezellProjectsAllView），裝在完整的 Breezell 視窗裡：
// 左邊活動列與專案面板，右邊是編輯器裡開著的示例檔。
// gaoliang 用橘色光圈標出要點的位置：book（書本按鈕）、tabs、addgroup、group、row、opennew。
withDefaults(
  defineProps<{
    gao?: number;
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
    gao: 470,
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
</script>

<template>
  <BzZhengchuang :gao="gao" zhuangtai="code" :tabs="[{ ming: 'config.ts', xuan: true, guan: true }]">
    <template #ce>
      <BzXiangmulan
        :gaoliang="gaoliang"
        :biaoji="biaoji"
        :mo="mo"
        :fenming="fenming"
        :chengyuan="chengyuan"
        :qita="qita"
        :kong="kong"
        :tuozhuai="tuozhuai"
      />
    </template>
    <BzDaima />
  </BzZhengchuang>
</template>
