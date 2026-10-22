<script setup lang="ts">
import BzTubiao from "./BzTubiao.vue";
import BzPinpai from "./BzPinpai.vue";
import { shiyongwenben } from "./shuju";

// 標題列：側欄切換鈕之後是「Box | Agent」頁面切換（titlebarPart.ts createBoxModeSwitch），
// 右側齒輪是全域選單，第一項是「Breezell Settings」（breezellSettingsPane.ts，MenuId.GlobalActivity）。
withDefaults(defineProps<{ gaoliang?: "box" | "chilun" | ""; caidan?: boolean; moshi?: "box" | "agent" }>(), {
  gaoliang: "",
  caidan: false,
  moshi: "agent",
});

const { t } = shiyongwenben();
</script>

<template>
  <div class="bz">
    <div class="bz-chuangkou bz-btl-wai" :class="{ 'bz-you-caidan': caidan }">
      <div class="bz-btl">
        <div class="bz-btl-zuo">
          <BzPinpai pinpai="breezell" :daxiao="16" />
          <span class="bz-btl-cebian"><BzTubiao ming="panel-left" :daxiao="16" :cuxi="1.6" /></span>
          <div class="bz-moshi" :class="{ 'bz-gl': gaoliang === 'box' }" role="tablist">
            <span class="bz-moshi-tab" :class="{ 'bz-xuan': moshi === 'box' }">Box</span>
            <span class="bz-moshi-tab" :class="{ 'bz-xuan': moshi === 'agent' }">Agent</span>
            <span v-if="gaoliang === 'box'" class="bz-biaoji" style="top: -12px; left: -10px">1</span>
          </div>
        </div>
        <div class="bz-btl-zhong">
          <span class="bz-mingling"><BzTubiao ming="search" :daxiao="12" />my-project</span>
        </div>
        <div class="bz-btl-you">
          <span class="bz-chilun" :class="{ 'bz-gl': gaoliang === 'chilun', 'bz-dakai': caidan }">
            <BzTubiao ming="settings" :daxiao="15" :cuxi="1.7" />
            <span v-if="gaoliang === 'chilun'" class="bz-biaoji" style="top: -10px; right: -12px">1</span>
          </span>
          <span class="bz-chuangkouanniu">
            <svg width="10" height="10" viewBox="0 0 10 10" aria-hidden="true"><path d="M0 5h10" stroke="currentColor" /></svg>
          </span>
          <span class="bz-chuangkouanniu">
            <svg width="10" height="10" viewBox="0 0 10 10" aria-hidden="true"><rect x="0.5" y="0.5" width="9" height="9" fill="none" stroke="currentColor" /></svg>
          </span>
          <span class="bz-chuangkouanniu">
            <svg width="10" height="10" viewBox="0 0 10 10" aria-hidden="true"><path d="M0 0l10 10M10 0L0 10" stroke="currentColor" /></svg>
          </span>
        </div>
      </div>
      <div v-if="caidan" class="bz-quanju">
        <div class="bz-quanju-xiang" :class="{ 'bz-gl': gaoliang === 'chilun' }">
          <span>{{ t("box.title") }}</span>
          <span v-if="gaoliang === 'chilun'" class="bz-biaoji" style="top: 4px; right: -10px">2</span>
        </div>
        <div class="bz-quanju-fen" />
        <div v-for="kuan in [62, 48, 70, 44, 56]" :key="kuan" class="bz-quanju-kong">
          <span :style="{ width: `${kuan}%` }" />
        </div>
      </div>
      <div class="bz-btl-ti">
        <div class="bz-btl-huodong">
          <span v-for="ming in ['copy', 'search', 'git-compare', 'boxes']" :key="ming"><BzTubiao :ming="ming" :daxiao="18" :cuxi="1.6" /></span>
        </div>
        <div class="bz-btl-bianjiqi">
          <div v-for="(kuan, xuhao) in [46, 72, 58, 38, 64, 52]" :key="xuhao" class="bz-daima" :style="{ width: `${kuan}%`, marginLeft: `${(xuhao % 3) * 14}px` }" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.bz-btl-wai {
  position: relative;
  background: var(--bz-editor-bg);
}

.bz-btl-wai.bz-you-caidan {
  min-height: 236px;
}

.bz-btl {
  display: flex;
  align-items: center;
  height: 35px;
  padding: 0 0 0 10px;
  background: var(--bz-titlebar-bg);
  color: var(--bz-titlebar-fg);
  border-bottom: 1px solid var(--bz-border4);
}

.bz-btl-zuo,
.bz-btl-you {
  display: flex;
  align-items: center;
  gap: 6px;
  flex: 1 1 0;
  min-width: 0;
}

.bz-btl-you {
  justify-content: flex-end;
  gap: 0;
}

.bz-btl-zhong {
  flex: 0 1 300px;
  min-width: 0;
  display: flex;
  justify-content: center;
}

.bz-btl-cebian {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 26px;
  height: 22px;
  margin-left: 4px;
  border-radius: 5px;
  opacity: 0.8;
}

/* titlebarpart.css .breezell-mode-switch */
.bz-moshi {
  position: relative;
  display: flex;
  align-items: stretch;
  gap: 2px;
  height: 24px;
  margin-left: 6px;
  padding: 2px;
  border-radius: 7px;
  background: color-mix(in srgb, var(--bz-titlebar-fg) 5%, transparent);
  border: 1px solid color-mix(in srgb, var(--bz-titlebar-fg) 8%, transparent);
}

.bz-moshi-tab {
  display: inline-flex;
  align-items: center;
  padding: 0 10px;
  border-radius: 5px;
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.01em;
  color: color-mix(in srgb, var(--bz-titlebar-fg) 62%, transparent);
}

.bz-moshi-tab.bz-xuan {
  background: color-mix(in srgb, var(--bz-titlebar-fg) 16%, transparent);
  color: var(--bz-titlebar-fg);
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.22), inset 0 1px 0 color-mix(in srgb, var(--bz-titlebar-fg) 10%, transparent);
}

.bz-mingling {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  width: 100%;
  max-width: 300px;
  height: 22px;
  border-radius: 6px;
  font-size: 12px;
  color: color-mix(in srgb, var(--bz-titlebar-fg) 80%, transparent);
  background: color-mix(in srgb, var(--bz-titlebar-fg) 6%, transparent);
  border: 1px solid color-mix(in srgb, var(--bz-titlebar-fg) 10%, transparent);
}

.bz-chilun {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 26px;
  margin-right: 8px;
  border-radius: 5px;
}

.bz-chilun.bz-dakai {
  background: color-mix(in srgb, var(--bz-titlebar-fg) 12%, transparent);
}

.bz-chuangkouanniu {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 46px;
  height: 35px;
  opacity: 0.8;
}

.bz-quanju {
  position: absolute;
  top: 36px;
  right: 150px;
  z-index: 4;
  width: 220px;
  padding: 4px;
  border-radius: 6px;
  background: var(--bz-menu-bg);
  border: 1px solid color-mix(in srgb, var(--bz-fg) 12%, transparent);
  box-shadow: var(--bz-shadow);
}

.bz-quanju-xiang {
  position: relative;
  display: flex;
  align-items: center;
  height: 26px;
  padding: 0 10px;
  border-radius: 4px;
  font-size: 13px;
  color: var(--bz-button-fg);
  background: var(--bz-button-bg);
}

.bz-quanju-fen {
  height: 1px;
  margin: 5px 6px;
  background: color-mix(in srgb, var(--bz-fg) 12%, transparent);
}

.bz-quanju-kong {
  display: flex;
  align-items: center;
  height: 24px;
  padding: 0 10px;
}

.bz-quanju-kong span {
  height: 7px;
  border-radius: 4px;
  background: color-mix(in srgb, var(--bz-fg) 12%, transparent);
}

.bz-btl-ti {
  display: flex;
  height: 150px;
}

.bz-btl-wai.bz-you-caidan .bz-btl-ti {
  height: 200px;
}

.bz-btl-huodong {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px;
  width: 44px;
  padding-top: 12px;
  color: color-mix(in srgb, var(--bz-fg) 45%, transparent);
  background: var(--bz-sidebar-bg);
  border-right: 1px solid var(--bz-border4);
}

.bz-btl-bianjiqi {
  flex: 1;
  padding: 16px 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.bz-daima {
  height: 8px;
  border-radius: 4px;
  background: color-mix(in srgb, var(--bz-fg) 8%, transparent);
}

@media (max-width: 560px) {
  .bz-btl-zhong,
  .bz-chuangkouanniu {
    display: none;
  }

  .bz-quanju {
    right: 8px;
  }
}
</style>
