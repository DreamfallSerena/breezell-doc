<script setup lang="ts">
import { computed } from "vue";
import BzTubiao from "./BzTubiao.vue";
import BzPinpai from "./BzPinpai.vue";
import BzYetou from "./BzYetou.vue";
import { shiyongwenben } from "./shuju";

// Box 頁（BoxSettingsPage.tsx）：左側 256px 側欄（空間切換、搜尋、Console / Workspace 導航、
// 版本更新與帳號），右側是麵包屑和當前頁。ye 指定「Breezell 設定」群組裡選中的頁（預設「模型」），
// gaoliang 非空時用橘色光圈標出該頁；預設插槽是模型頁頁首，其他頁由呼叫方傳入內容。
// zu 指定展開哪一個群組：settings（Breezell 設定，預設）或 memory（超級記憶的四個頁面）。
const props = withDefaults(defineProps<{ gaoliang?: string; ye?: string; biaoji?: string; zu?: "settings" | "memory" }>(), {
  gaoliang: "",
  ye: "tab.models",
  biaoji: "2",
  zu: "settings",
});

const { t } = shiyongwenben();

const shezhiye = [
  "tab.models",
  "tab.modelMonitor",
  "tab.accountPool",
  "tab.featureOptions",
  "tab.fim",
  "tab.general",
  "tab.mcp",
  "tab.privacy",
  "tab.experimental",
] as const;

const jiyiye = ["box.memory.overview", "box.memory.library", "box.memory.context", "box.memory.maintenance"] as const;
const dangqianye = computed<readonly string[]>(() => (props.zu === "memory" ? jiyiye : shezhiye));

// 分支線幾何：與 NavMain 的 BRANCH_* 常量一致。
const zhuganx = 16;
const banjing = 8;
const zhongdianx = 30;
// 各頁的說明文字（BoxSettingsPage.tsx SETTINGS_SECTIONS 的 descKey）。
const yeshuoming: Record<string, string> = {
  "tab.general": "box.desc.general",
  "tab.featureOptions": "box.desc.featureOptions",
  "tab.mcp": "box.desc.mcp",
  "tab.privacy": "box.desc.privacy",
  "tab.experimental": "box.desc.experimental",
  "box.memory.overview": "box.memory.overviewDesc",
  "box.memory.library": "box.memory.libraryDesc",
  "box.memory.context": "box.memory.contextDesc",
  "box.memory.maintenance": "box.memory.maintenanceDesc",
};

const maodian = computed(() => dangqianye.value.map((_, xuhao) => 6 + xuhao * (28 + 4) + 14));
const xuanzhong = computed(() => Math.max(0, dangqianye.value.indexOf(props.ye)));
const shugao = computed(() => 6 + dangqianye.value.length * 28 + (dangqianye.value.length - 1) * 4 + 2);
const fenzhi = (y: number) => `M ${zhuganx} ${y - banjing} A ${banjing} ${banjing} 0 0 0 ${zhuganx + banjing} ${y} H ${zhongdianx}`;
const zhugan = computed(() => `M ${zhuganx} 0 V ${maodian.value[maodian.value.length - 1] - banjing}`);
const miaobian = computed(() => {
  const y = maodian.value[xuanzhong.value];
  return `M ${zhuganx} 0 V ${y - banjing} A ${banjing} ${banjing} 0 0 0 ${zhuganx + banjing} ${y} H ${zhongdianx}`;
});

const zhukongzhitai = [
  { id: "settings", jian: "box.title", ming: "settings-2" },
  { id: "review", jian: "box.review.group", ming: "git-compare" },
  { id: "memory", jian: "box.memory.group", ming: "brain" },
  { id: "storage", jian: "box.storage.group", ming: "database-zap" },
  { id: "perf", jian: "box.perf.group", ming: "gauge" },
] as const;
const gongzuoqu = [
  { jian: "box.database.group", ming: "database" },
  { jian: "box.vault.group", ming: "vault" },
] as const;
</script>

<template>
  <div class="bz">
    <div class="bz-chuangkou bz-cebian bz-hezi">
      <aside class="bz-hz-ce">
        <div class="bz-hz-tou">
          <div class="bz-hz-ka">
            <BzPinpai pinpai="breezell" :daxiao="32" />
            <span class="bz-hz-ka-wen">
              <span class="bz-hz-ka-ming">Breezell Console</span>
              <span class="bz-hz-ka-ci">Settings · Data</span>
            </span>
            <span class="bz-hz-ka-jiantou"><BzTubiao ming="chevrons-up-down" :daxiao="16" :cuxi="2" /></span>
          </div>
          <div class="bz-hz-sousuo">
            <BzTubiao ming="search" :daxiao="14" />
            <span>{{ t("box.nav.searchPlaceholder") }}</span>
          </div>
        </div>
        <div class="bz-hz-dao">
          <div class="bz-hz-qu bz-hz-qu-zhu">
            <div class="bz-hz-qubiao">Console</div>
            <template v-for="xiang in zhukongzhitai" :key="xiang.id">
            <div class="bz-hz-zu">
              <span class="bz-hz-tubiao"><BzTubiao :ming="xiang.ming" :daxiao="16" :cuxi="2" /></span>
              <span class="bz-hz-zuming">{{ t(xiang.jian) }}</span>
              <span class="bz-hz-zhankai" :class="{ 'bz-kai': xiang.id === zu }"><BzTubiao ming="chevron-right" :daxiao="16" :cuxi="2" /></span>
            </div>
            <div v-if="xiang.id === zu" class="bz-hz-shu" :style="{ height: `${shugao}px` }">
              <svg class="bz-hz-xian" :width="zhongdianx + 2" :height="shugao" fill="none" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <path :d="zhugan" class="bz-hz-xian-dan" />
                <path v-for="y in maodian" :key="y" :d="fenzhi(y)" class="bz-hz-xian-dan" />
                <path :d="miaobian" class="bz-hz-xian-zhong" />
              </svg>
              <div class="bz-hz-hang-zu">
                <span
                  v-for="(jian, xuhao) in dangqianye"
                  :key="jian"
                  class="bz-hz-hang"
                  :class="{ 'bz-xuan': xuhao === xuanzhong, 'bz-gl': xuhao === xuanzhong && gaoliang }"
                >
                  {{ t(jian as never) }}
                  <span v-if="xuhao === xuanzhong && gaoliang && biaoji" class="bz-biaoji" style="top: 4px; right: 6px">{{ biaoji }}</span>
                </span>
              </div>
            </div>
            </template>
          </div>
          <div class="bz-hz-fenge" />
          <div class="bz-hz-qu">
            <div class="bz-hz-qubiao">Workspace</div>
            <div v-for="xiang in gongzuoqu" :key="xiang.jian" class="bz-hz-zu">
              <span class="bz-hz-tubiao"><BzTubiao :ming="xiang.ming" :daxiao="16" :cuxi="2" /></span>
              <span class="bz-hz-zuming">{{ t(xiang.jian) }}</span>
              <span class="bz-hz-zhankai"><BzTubiao ming="chevron-right" :daxiao="16" :cuxi="2" /></span>
            </div>
          </div>
        </div>
        <div class="bz-hz-di">
          <div class="bz-hz-ka">
            <span class="bz-hz-gengxin"><BzTubiao ming="circle-arrow-up" :daxiao="17" /></span>
            <span class="bz-hz-ka-wen">
              <span class="bz-hz-ka-ming">{{ t("box.updates.title") }}</span>
              <span class="bz-hz-ka-ci">v1.4.37</span>
            </span>
          </div>
          <div class="bz-hz-ka">
            <span class="bz-hz-touxiang">BZ</span>
            <span class="bz-hz-ka-wen">
              <span class="bz-hz-ka-hang">
                <span class="bz-hz-ka-ming">Breezell</span>
                <span class="bz-hz-fangan">Custom API</span>
              </span>
              <span class="bz-hz-ka-ci">you@example.com</span>
            </span>
            <span class="bz-hz-ka-jiantou"><BzTubiao ming="chevrons-up-down" :daxiao="16" :cuxi="2" /></span>
          </div>
        </div>
      </aside>
      <main class="bz-hz-zhu">
        <header class="bz-hz-zhutou">
          <span class="bz-hz-zhedie"><BzTubiao ming="panel-left" :daxiao="16" :cuxi="2" /></span>
          <span class="bz-hz-shuxian" />
          <span class="bz-hz-mianbao">
            <span class="bz-hz-mianbao-zu">{{ t(zu === "memory" ? "box.memory.group" : "box.title") }}</span>
            <BzTubiao ming="chevron-right" :daxiao="14" />
            <span class="bz-hz-mianbao-ye">{{ t(ye as never) }}</span>
          </span>
        </header>
        <div class="bz-hz-neirong">
          <slot>
            <BzYetou v-if="ye === 'tab.models'" />
            <template v-else>
              <div class="bz-hz-yebiaoti">{{ t(ye as never) }}</div>
              <div v-if="yeshuoming[ye]" class="bz-hz-yeshuo">{{ t(yeshuoming[ye] as never) }}</div>
            </template>
          </slot>
        </div>
      </main>
    </div>
  </div>
</template>

<style scoped>
.bz-hezi {
  display: flex;
  height: 620px;
  container-type: inline-size;
}

.bz-hz-ce {
  display: flex;
  flex-direction: column;
  width: 256px;
  flex-shrink: 0;
  min-height: 0;
}

.bz-hz-tou {
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 8px;
}

.bz-hz-ka {
  display: flex;
  align-items: center;
  gap: 10px;
  height: 48px;
  padding: 0 4px 0 7px;
  border-radius: 12px;
  border: 1px solid color-mix(in srgb, var(--bz-fg) 9%, transparent);
  background: color-mix(in srgb, var(--bz-fg) 3%, transparent);
}

.bz-hz-ka-wen {
  display: flex;
  flex-direction: column;
  gap: 3px;
  flex: 1;
  min-width: 0;
}

.bz-hz-ka-hang {
  display: flex;
  align-items: center;
  gap: 6px;
  min-width: 0;
}

.bz-hz-ka-ming {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: var(--bz-fg-1);
  font-size: 13px;
  font-weight: 600;
  line-height: 17px;
}

.bz-hz-ka-ci {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: var(--bz-fg-3);
  font-size: 11px;
  font-weight: 500;
  line-height: 14px;
}

.bz-hz-ka-jiantou {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 22px;
  height: 22px;
  color: var(--bz-fg-3);
}

.bz-hz-sousuo {
  position: relative;
  display: flex;
  align-items: center;
  gap: 6px;
  height: 30px;
  padding: 0 10px 0 9px;
  border-radius: 8px;
  border: 1px solid color-mix(in srgb, var(--bz-fg) 14%, transparent);
  background: color-mix(in srgb, var(--bz-fg) 5%, transparent);
  color: var(--bz-fg-3);
  font-size: 12px;
  font-weight: 600;
  white-space: nowrap;
  overflow: hidden;
}

.bz-hz-dao {
  display: flex;
  flex-direction: column;
  flex: 1;
  min-height: 0;
  overflow: hidden;
  margin-right: 8px;
}

.bz-hz-qu {
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 8px 0 8px 8px;
}

.bz-hz-qu-zhu {
  flex: 1 1 0;
  min-height: 0;
  overflow: hidden;
}

.bz-hz-qubiao {
  display: flex;
  align-items: center;
  height: 32px;
  padding: 0 8px;
  font-size: 11px;
  font-weight: 500;
  color: var(--bz-fg-3);
}

.bz-hz-zu {
  display: flex;
  align-items: center;
  gap: 8px;
  height: 32px;
  padding: 8px;
  border-radius: 6px;
  font-size: 13px;
  font-weight: 500;
  color: var(--bz-fg-1);
  flex-shrink: 0;
}

.bz-hz-tubiao {
  display: inline-flex;
}

.bz-hz-zuming {
  flex: 1;
  min-width: 0;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.bz-hz-zhankai {
  display: inline-flex;
  opacity: 0.7;
}

.bz-hz-zhankai.bz-kai {
  transform: rotate(90deg);
}

.bz-hz-shu {
  position: relative;
  flex-shrink: 0;
}

.bz-hz-xian {
  position: absolute;
  top: 0;
  left: 0;
  overflow: visible;
}

.bz-hz-xian-dan {
  stroke: color-mix(in srgb, var(--bz-fg) 18%, transparent);
}

.bz-hz-xian-zhong {
  stroke: var(--bz-fg);
}

.bz-hz-hang-zu {
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 6px 0 2px 32px;
}

.bz-hz-hang {
  position: relative;
  display: flex;
  align-items: center;
  height: 28px;
  padding: 0 10px 0 6px;
  border-radius: 6px;
  font-size: 13px;
  font-weight: 500;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: color-mix(in srgb, var(--bz-fg-1) 70%, transparent);
}

.bz-hz-hang.bz-xuan {
  color: var(--bz-fg-1);
  overflow: visible;
}

.bz-hz-fenge {
  flex-shrink: 0;
  height: 1px;
  margin: 2px 18px;
  background: color-mix(in srgb, var(--bz-fg) 12%, transparent);
}

.bz-hz-di {
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 8px;
}

.bz-hz-gengxin {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  flex-shrink: 0;
  border-radius: 9px;
  color: var(--bz-link);
  background: color-mix(in srgb, var(--bz-button-bg) 14%, transparent);
  box-shadow: inset 0 0 0 1px color-mix(in srgb, var(--bz-button-bg) 26%, transparent);
}

.bz-hz-touxiang {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  flex-shrink: 0;
  border-radius: 50%;
  font-size: 12px;
  font-weight: 650;
  color: var(--bz-fg-1);
  background: color-mix(in srgb, var(--bz-fg) 12%, transparent);
}

.bz-hz-fangan {
  display: inline-flex;
  align-items: center;
  flex-shrink: 0;
  padding: 0 5px;
  border-radius: 5px;
  border: 1px solid color-mix(in srgb, var(--bz-link) 26%, transparent);
  background: color-mix(in srgb, var(--bz-link) 12%, transparent);
  color: var(--bz-link);
  font-size: 10px;
  font-weight: 600;
  line-height: 16px;
  white-space: nowrap;
}

.bz-hz-zhu {
  display: flex;
  flex-direction: column;
  flex: 1;
  min-width: 0;
  overflow: hidden;
  background: var(--bz-editor-bg);
  border-left: 1px solid var(--bz-border4);
}

.bz-hz-zhutou {
  display: flex;
  align-items: center;
  gap: 8px;
  height: 64px;
  flex-shrink: 0;
  padding: 0 16px;
}

.bz-hz-zhedie {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  margin-left: -4px;
  border-radius: 6px;
}

.bz-hz-shuxian {
  width: 1px;
  height: 16px;
  margin-right: 8px;
  background: color-mix(in srgb, var(--bz-fg) 14%, transparent);
}

.bz-hz-mianbao {
  display: flex;
  align-items: center;
  gap: 6px;
  min-width: 0;
  font-size: 13px;
  color: var(--bz-fg-3);
  white-space: nowrap;
}

.bz-hz-mianbao-ye {
  color: var(--bz-fg-1);
}

.bz-hz-neirong {
  flex: 1;
  min-height: 0;
  overflow: hidden;
  padding: 4px 24px 24px;
}

.bz-hz-yebiaoti {
  color: var(--bz-fg-1);
  font-size: 22px;
  font-weight: 650;
  letter-spacing: -0.4px;
  line-height: 1.2;
}

.bz-hz-yeshuo {
  margin-top: 6px;
  max-width: 760px;
  color: var(--bz-fg-3);
  font-size: 13px;
  line-height: 1.5;
}

@container (max-width: 560px) {
  .bz-hz-zhu {
    display: none;
  }

  .bz-hz-ce {
    width: 100%;
  }
}
</style>
