<script setup lang="ts">
import { computed, ref } from "vue";
import BzTubiao from "./BzTubiao.vue";

// 官網下載頁（Breezellwangye/front2 download.tsx，只有英文）與 macOS 安裝時會遇到的兩個畫面：
// xiazai    下載頁：推薦卡、平台分頁、各版本列表，選 macOS 時下面帶「macOS says the app is damaged?」說明
// jinggao   macOS 的「已損毀」提示框
// zhongduan 終端機執行解除隔離指令
type pingtai = "macOS" | "Windows" | "Linux";
const props = withDefaults(defineProps<{ ye?: string; gaoliang?: string; biaoji?: string }>(), { ye: "xiazai", gaoliang: "", biaoji: "" });

const banben: Record<pingtai, { ming: string; shuo: string }[]> = {
  macOS: [
    { ming: "Apple Silicon", shuo: "M1, M2, M3, M4 and newer Macs" },
    { ming: "Intel", shuo: "Older Intel-based Macs" },
    { ming: "Universal", shuo: "Apple Silicon & Intel · legacy build" },
  ],
  Windows: [
    { ming: "x64 · System", shuo: "64-bit · system-wide, needs admin" },
    { ming: "x64 · User", shuo: "64-bit · per-user, no admin" },
    { ming: "ARM64 · System", shuo: "ARM · system-wide, needs admin" },
    { ming: "ARM64 · User", shuo: "ARM · per-user, no admin" },
  ],
  Linux: [
    { ming: "x64 · .deb", shuo: "64-bit · Ubuntu, Debian and derivatives" },
    { ming: "x64 · .rpm", shuo: "64-bit · Fedora, RHEL, CentOS and derivatives" },
    { ming: "ARM64 · .deb", shuo: "aarch64 · Ubuntu, Debian and derivatives" },
    { ming: "ARM64 · .rpm", shuo: "aarch64 · Fedora, RHEL, CentOS and derivatives" },
  ],
};
const dangqian = ref<pingtai>("macOS");
const liebiao = computed(() => banben[dangqian.value]);
const zhiling = 'sudo xattr -rd com.apple.quarantine "/Applications/Breezell.app"';
const yifuzhi = ref(false);
const fuzhi = () => {
  yifuzhi.value = true;
  setTimeout(() => (yifuzhi.value = false), 1600);
};
const tubiao: Record<pingtai, string> = {
  macOS:
    "M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z",
  Windows: "M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.9-1.801",
  Linux: "",
};
</script>

<template>
  <div class="bz-xz">
    <!-- 下載頁 -->
    <div v-if="ye === 'xiazai'" class="bz-xz-kuang bz-xz-ye">
      <div class="bz-xz-tou">
        <div class="bz-xz-xiaobiao">Download</div>
        <div class="bz-xz-dabiao">Download Breezell</div>
        <div class="bz-xz-fubiao">Choose your platform and start coding smarter.</div>
        <span class="bz-xz-banben"><i />Latest version <b>1.4.37</b></span>
      </div>
      <div class="bz-xz-tuijian">
        <span class="bz-xz-tu bz-xz-tu-da"><svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor"><path :d="tubiao.macOS" /></svg></span>
        <div class="bz-xz-tj-wen">
          <div class="bz-xz-tj-xiao">Recommended for your macOS</div>
          <div class="bz-xz-tj-ming">Apple Silicon</div>
          <div class="bz-xz-tj-shuo">M1, M2, M3, M4 and newer Macs</div>
        </div>
        <span class="bz-xz-an-zhu" :class="{ 'bz-gl': gaoliang === 'xiazai' }">
          <span v-if="gaoliang === 'xiazai' && biaoji" class="bz-biaoji" style="top: -10px; right: -8px">{{ biaoji }}</span>
          <BzTubiao ming="download" :daxiao="16" :cuxi="2" />Download
        </span>
      </div>
      <div class="bz-xz-fenye" :class="{ 'bz-gl': gaoliang === 'fenye' }">
        <span v-if="gaoliang === 'fenye' && biaoji" class="bz-biaoji" style="top: -10px; right: -8px">{{ biaoji }}</span>
        <button v-for="p in (['macOS', 'Windows', 'Linux'] as pingtai[])" :key="p" type="button" :class="{ 'bz-xuan': dangqian === p }" @click="dangqian = p">
          <svg v-if="tubiao[p]" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path :d="tubiao[p]" /></svg>
          <BzTubiao v-else ming="terminal" :daxiao="16" :cuxi="2" />
          {{ p }}
        </button>
      </div>
      <div class="bz-xz-lie">
        <div v-for="b in liebiao" :key="b.ming" class="bz-xz-hang">
          <span class="bz-xz-tu">
            <svg v-if="tubiao[dangqian]" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path :d="tubiao[dangqian]" /></svg>
            <BzTubiao v-else ming="terminal" :daxiao="18" :cuxi="2" />
          </span>
          <div class="bz-xz-hang-wen">
            <div class="bz-xz-hang-ming">{{ b.ming }}</div>
            <div class="bz-xz-hang-shuo">{{ b.shuo }}</div>
          </div>
          <span class="bz-xz-an-ci"><BzTubiao ming="download" :daxiao="14" :cuxi="2" />Download</span>
        </div>
      </div>
      <div v-if="dangqian === 'macOS'" class="bz-xz-zhinan" :class="{ 'bz-gl': gaoliang === 'zhinan' }">
        <span v-if="gaoliang === 'zhinan' && biaoji" class="bz-biaoji" style="top: -10px; right: -8px">{{ biaoji }}</span>
        <div class="bz-xz-zn-tou">
          <span class="bz-xz-tu"><BzTubiao ming="terminal" :daxiao="16" :cuxi="2" /></span>
          <div>
            <div class="bz-xz-hang-ming">macOS says the app is damaged?</div>
            <p>If you see “Breezell.app is damaged and can’t be opened” (or “unidentified developer”), macOS may be blocking the downloaded app with quarantine. Drag the app into <code>Applications</code>, then run these steps once.</p>
          </div>
        </div>
        <div class="bz-xz-zn-bu">
          <div class="bz-xz-hang-ming">1. Open Terminal</div>
          <p>Open <b>Spotlight</b> (<kbd>⌘</kbd> <kbd>Space</kbd>), search for <b>Terminal</b>, and open it. You can also find it in <b>Applications → Utilities → Terminal</b>.</p>
        </div>
        <div class="bz-xz-zn-bu">
          <div class="bz-xz-hang-ming">2. Remove the “damaged” quarantine flag</div>
          <p>Paste the command below and press Return. Enter your Mac administrator password when prompted (characters won’t show as you type), then press Return again. This removes quarantine only from Breezell and leaves security checks enabled for other apps. After it finishes, open Breezell again from Applications.</p>
          <div class="bz-xz-ml">
            <code>{{ zhiling }}</code>
            <button type="button" :title="yifuzhi ? 'Copied' : 'Copy command'" @click="fuzhi"><BzTubiao :ming="yifuzhi ? 'check' : 'copy'" :daxiao="14" :cuxi="2" /></button>
          </div>
        </div>
      </div>
    </div>

    <!-- macOS 提示框 -->
    <div v-else-if="ye === 'jinggao'" class="bz-xz-mac">
      <div class="bz-xz-alert">
        <div class="bz-xz-alert-tu">
          <span class="bz-xz-app">B</span>
          <span class="bz-xz-jing">!</span>
        </div>
        <div class="bz-xz-alert-biao">“Breezell” is damaged and can’t be opened. You should move it to the Trash.</div>
        <div class="bz-xz-alert-shuo">This file was downloaded on an unknown date.</div>
        <div class="bz-xz-alert-an">
          <span class="bz-xz-alert-zhu">Move to Trash</span>
          <span>Cancel</span>
        </div>
      </div>
    </div>

    <!-- 終端機 -->
    <div v-else class="bz-xz-zd">
      <div class="bz-xz-zd-tou"><i /><i /><i /><span>Terminal — zsh</span></div>
      <div class="bz-xz-zd-ti">
        <div><span class="bz-xz-ts">~ %</span> {{ zhiling }}</div>
        <div>Password:<span class="bz-xz-gb" /></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.bz-xz {
  --wz-bg: oklch(1 0 0);
  --wz-fg: oklch(0.2 0.005 55);
  --wz-card: oklch(1 0 0);
  --wz-muted: oklch(0.955 0.005 75);
  --wz-muted-fg: oklch(0.52 0.01 60);
  --wz-border: oklch(0.91 0.006 70);
  --wz-primary: oklch(0.28 0.01 55);
  --wz-primary-fg: oklch(0.98 0.003 75);
  --bz-mark: #ff7340;
  margin: 16px 0;
  font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif;
  color: var(--wz-fg);
  text-align: left;
}

.dark .bz-xz {
  --wz-bg: oklch(0.13 0.004 55);
  --wz-fg: oklch(0.92 0.005 75);
  --wz-card: oklch(0.17 0.005 55);
  --wz-muted: oklch(0.22 0.006 55);
  --wz-muted-fg: oklch(0.58 0.01 65);
  --wz-border: oklch(1 0.005 65 / 10%);
  --wz-primary: oklch(0.88 0.015 75);
  --wz-primary-fg: oklch(0.15 0.005 55);
}

.bz-xz :deep(.bz-biaoji) {
  position: absolute;
  z-index: 3;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 20px;
  height: 20px;
  padding: 0 6px;
  border-radius: 10px;
  color: #fff;
  font-size: 11px;
  font-weight: 700;
  background: var(--bz-mark);
}

.bz-xz .bz-gl {
  position: relative;
  box-shadow: 0 0 0 2px var(--bz-mark), 0 0 0 6px color-mix(in srgb, var(--bz-mark) 28%, transparent) !important;
}

.bz-xz button {
  font: inherit;
  color: inherit;
  cursor: pointer;
  border: none;
  background: none;
}

.bz-xz p {
  margin: 4px 0 0;
  font-size: 12px;
  line-height: 1.6;
  color: var(--wz-muted-fg);
}

.bz-xz p b {
  font-weight: 400;
  color: var(--wz-fg);
}

.bz-xz code,
.bz-xz kbd {
  padding: 0;
  border-radius: 4px;
  font-family: ui-monospace, monospace;
  font-size: 11px;
  color: var(--wz-fg);
  background: none;
}

.bz-xz kbd {
  padding: 1px 4px;
  font-size: 10px;
  border: 1px solid var(--wz-border);
}

.bz-xz-kuang {
  padding: 32px 24px;
  border-radius: 12px;
  background: var(--wz-bg);
  border: 1px solid var(--wz-border);
  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.02), 0 12px 32px -18px rgba(0, 0, 0, 0.35);
}

.bz-xz-tou {
  margin-bottom: 28px;
  text-align: center;
}

.bz-xz-xiaobiao {
  margin-bottom: 12px;
  font-size: 13px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--wz-muted-fg);
}

.bz-xz-dabiao {
  font-size: 32px;
  font-weight: 600;
  letter-spacing: -0.02em;
  line-height: 1.15;
}

.bz-xz-fubiao {
  margin-top: 12px;
  font-size: 15px;
  color: var(--wz-muted-fg);
}

.bz-xz-banben {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin-top: 18px;
  padding: 4px 12px;
  border-radius: 999px;
  font-size: 12px;
  color: var(--wz-muted-fg);
  border: 1px solid var(--wz-border);
}

.bz-xz-banben i {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: color-mix(in oklab, var(--wz-fg) 50%, transparent);
}

.bz-xz-banben b {
  font-weight: 500;
  color: var(--wz-fg);
}

.bz-xz-tuijian {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 20px;
  margin-bottom: 28px;
  padding: 24px;
  border-radius: 16px;
  background: color-mix(in oklab, var(--wz-card) 40%, transparent);
  border: 1px solid var(--wz-border);
}

.bz-xz-tu {
  display: grid;
  place-items: center;
  width: 40px;
  height: 40px;
  flex-shrink: 0;
  border-radius: 12px;
  background: var(--wz-bg);
  border: 1px solid var(--wz-border);
}

.bz-xz-tu-da {
  width: 56px;
  height: 56px;
  border-radius: 16px;
}

.bz-xz-tj-wen {
  flex: 1;
  min-width: 160px;
}

.bz-xz-tj-xiao {
  font-size: 12px;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: var(--wz-muted-fg);
}

.bz-xz-tj-ming {
  margin-top: 4px;
  font-size: 18px;
  font-weight: 600;
}

.bz-xz-tj-shuo,
.bz-xz-hang-shuo {
  font-size: 13px;
  color: var(--wz-muted-fg);
}

.bz-xz-an-zhu {
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 28px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
  color: var(--wz-primary-fg);
  background: var(--wz-primary);
}

.bz-xz-fenye {
  position: relative;
  display: inline-flex;
  gap: 4px;
  margin-bottom: 20px;
  padding: 4px;
  border-radius: 999px;
  border: 1px solid var(--wz-border);
}

.bz-xz-fenye button {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 6px 16px;
  border-radius: 999px;
  font-size: 14px;
  font-weight: 500;
  color: var(--wz-muted-fg);
}

.bz-xz-fenye button.bz-xuan {
  color: var(--wz-bg);
  background: var(--wz-fg);
}

.bz-xz-lie,
.bz-xz-zhinan {
  overflow: hidden;
  border-radius: 16px;
  border: 1px solid var(--wz-border);
}

.bz-xz-hang {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 14px 20px;
  border-bottom: 1px solid var(--wz-border);
}

.bz-xz-hang:last-child {
  border-bottom: 0;
}

.bz-xz-hang-wen {
  flex: 1;
  min-width: 0;
}

.bz-xz-hang-ming {
  font-size: 14px;
  font-weight: 500;
}

.bz-xz-hang-shuo {
  overflow: hidden;
  font-size: 12px;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.bz-xz-an-ci {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  flex-shrink: 0;
  padding: 6px 12px;
  border-radius: 999px;
  font-size: 12px;
  font-weight: 500;
  color: var(--wz-muted-fg);
  border: 1px solid var(--wz-border);
}

.bz-xz-zhinan {
  position: relative;
  margin-top: 24px;
  overflow: visible;
}

.bz-xz-zn-tou {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 16px 20px;
  border-bottom: 1px solid var(--wz-border);
}

.bz-xz-zn-bu {
  padding: 16px 20px;
  border-bottom: 1px solid var(--wz-border);
}

.bz-xz-zn-bu:last-child {
  border-bottom: 0;
}

.bz-xz-ml {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 12px;
  padding: 10px 12px;
  border-radius: 12px;
  background: color-mix(in oklab, var(--wz-muted) 40%, transparent);
  border: 1px solid var(--wz-border);
}

.bz-xz-ml code {
  flex: 1;
  min-width: 0;
  overflow-x: auto;
  font-size: 13px;
  white-space: pre;
}

.bz-xz-ml button {
  display: grid;
  place-items: center;
  width: 32px;
  height: 32px;
  flex-shrink: 0;
  border-radius: 8px;
  color: var(--wz-muted-fg);
}

@media (max-width: 640px) {
  .bz-xz-an-ci {
    display: none;
  }

  .bz-xz-kuang {
    padding: 24px 14px;
  }
}

/* ---------- macOS 提示框 ---------- */
.bz-xz-mac {
  display: flex;
  justify-content: center;
  padding: 36px 16px;
  border-radius: 12px;
  background: linear-gradient(135deg, #5b6ea8, #8a6fb3 55%, #c48aa0);
}

.bz-xz-alert {
  width: 260px;
  padding: 20px 16px 16px;
  border-radius: 14px;
  text-align: center;
  color: #1d1d1f;
  background: rgba(236, 236, 236, 0.92);
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.35), inset 0 0 0 0.5px rgba(0, 0, 0, 0.12);
  font-family: -apple-system, "SF Pro Text", "Helvetica Neue", sans-serif;
}

.bz-xz-alert-tu {
  position: relative;
  width: 64px;
  height: 64px;
  margin: 0 auto 12px;
}

.bz-xz-app {
  display: grid;
  place-items: center;
  width: 64px;
  height: 64px;
  border-radius: 15px;
  font-size: 32px;
  font-weight: 700;
  color: #fff;
  background: linear-gradient(160deg, #3d3d3f, #111);
}

.bz-xz-jing {
  position: absolute;
  right: -4px;
  bottom: -4px;
  display: grid;
  place-items: center;
  width: 26px;
  height: 26px;
  border-radius: 50%;
  font-size: 16px;
  font-weight: 800;
  color: #1d1d1f;
  background: #ffcc00;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.25);
}

.bz-xz-alert-biao {
  font-size: 13px;
  font-weight: 700;
  line-height: 1.35;
}

.bz-xz-alert-shuo {
  margin-top: 8px;
  font-size: 11px;
  line-height: 1.4;
}

.bz-xz-alert-an {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 16px;
}

.bz-xz-alert-an span {
  padding: 6px;
  border-radius: 7px;
  font-size: 13px;
  background: #fff;
  box-shadow: 0 0.5px 1px rgba(0, 0, 0, 0.2);
}

.bz-xz-alert-an .bz-xz-alert-zhu {
  color: #fff;
  background: #0a84ff;
}

/* ---------- 終端機 ---------- */
.bz-xz-zd {
  overflow: hidden;
  border-radius: 10px;
  background: #1e1e1e;
  box-shadow: 0 12px 32px -14px rgba(0, 0, 0, 0.5), inset 0 0 0 0.5px rgba(255, 255, 255, 0.15);
}

.bz-xz-zd-tou {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 9px 12px;
  font-size: 12px;
  color: #a8a8a8;
  background: #2d2d2d;
}

.bz-xz-zd-tou i {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: #ff5f57;
}

.bz-xz-zd-tou i:nth-child(2) {
  background: #febc2e;
}

.bz-xz-zd-tou i:nth-child(3) {
  background: #28c840;
}

.bz-xz-zd-tou span {
  flex: 1;
  margin-right: 60px;
  text-align: center;
}

.bz-xz-zd-ti {
  min-height: 100px;
  padding: 12px 14px;
  overflow-x: auto;
  font-family: ui-monospace, "SF Mono", Menlo, monospace;
  font-size: 13px;
  line-height: 1.6;
  white-space: pre;
  color: #e6e6e6;
}

.bz-xz-ts {
  color: #7ee787;
}

.bz-xz-gb {
  display: inline-block;
  width: 8px;
  height: 15px;
  margin-left: 4px;
  vertical-align: -3px;
  background: #e6e6e6;
  animation: bz-xz-shan 1s steps(1) infinite;
}

@keyframes bz-xz-shan {
  50% { opacity: 0; }
}
</style>
