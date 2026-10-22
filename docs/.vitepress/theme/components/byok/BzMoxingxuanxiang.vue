<script setup lang="ts">
import { computed, reactive, watch } from "vue";
import { shiyongwenben, type moxingxuanxiang } from "./shuju";

// 模型選擇器裡滑過模型時彈出的每模型設定（ModelDropdown.tsx PerModelSettings + PER_MODEL_SETTINGS_STYLE）。
// Claude 1M 模型有 200K（預設）↔ 1M 兩檔上下文；推理強度是 low / medium / high / xhigh / max 五檔；
// Fable / Opus / Sonnet 5.x 的推理無法關閉，Haiku 5.5 可以關；Fast 只有 Opus 5 系列與 Opus 4.8 提供（2× 價格）。
// 標籤 Context / Reasoning / Effort / Faster / Smarter / Fast 在 Breezell 裡本來就是英文，未翻譯。

const props = withDefaults(defineProps<{ moxing?: string; chushi?: Partial<moxingxuanxiang> }>(), {
  moxing: "claude-opus-5-5",
  chushi: () => ({}),
});
const emit = defineEmits<{ gengxin: [zhi: moxingxuanxiang] }>();

const { t } = shiyongwenben();

const nengli = computed(() => {
  const ming = props.moxing.toLowerCase();
  const haiku = ming.includes("haiku-5-5");
  const opus = /claude-opus-5(?:[^0-9]|$)/.test(ming) || ming.includes("claude-opus-4-8");
  const morenqiangdu = ming.includes("opus-5-5") || haiku ? "medium" : "high";
  return {
    kebiguan: haiku,
    kuaisu: opus,
    morenqiangdu,
  };
});

const qiangdulan = ["low", "medium", "high", "xhigh", "max"];
const meihua = (zhi: string) => (zhi === "xhigh" ? "Extra High" : zhi.charAt(0).toUpperCase() + zhi.slice(1));
const shangxiawenlan = [
  { zhi: 200_000, biaoqian: "200K" },
  { zhi: 1_000_000, biaoqian: "1M" },
];

const zhuangtai = reactive<moxingxuanxiang>({
  shangxiawen: props.chushi.shangxiawen ?? 200_000,
  tuili: props.chushi.tuili ?? true,
  qiangdu: props.chushi.qiangdu ?? nengli.value.morenqiangdu,
  kuaisu: props.chushi.kuaisu ?? false,
});

watch(
  () => props.moxing,
  () => {
    zhuangtai.qiangdu = nengli.value.morenqiangdu;
    zhuangtai.kuaisu = false;
    zhuangtai.tuili = true;
  },
);

watch(zhuangtai, () => emit("gengxin", { ...zhuangtai }), { deep: true, immediate: true });

const tuilikai = computed(() => !nengli.value.kebiguan || zhuangtai.tuili);
const xuhao = computed(() => qiangdulan.indexOf(zhuangtai.qiangdu));
const zuihou = qiangdulan.length - 1;
const dianwei = (i: number) => `calc(10px + (100% - 20px) * ${i / zuihou})`;
const shangxiawenxuhao = computed(() => shangxiawenlan.findIndex((xiang) => xiang.zhi === zhuangtai.shangxiawen));

const dianjihuagan = (shijian: MouseEvent) => {
  const gui = shijian.currentTarget as HTMLElement;
  const juxing = gui.getBoundingClientRect();
  const i = Math.round(((shijian.clientX - juxing.left - 10) / Math.max(1, juxing.width - 20)) * zuihou);
  zhuangtai.qiangdu = qiangdulan[Math.min(zuihou, Math.max(0, i))];
};

const anjian = (shijian: KeyboardEvent) => {
  const mubiao =
    shijian.key === "ArrowLeft" || shijian.key === "ArrowDown"
      ? xuhao.value - 1
      : shijian.key === "ArrowRight" || shijian.key === "ArrowUp"
        ? xuhao.value + 1
        : shijian.key === "Home"
          ? 0
          : shijian.key === "End"
            ? zuihou
            : undefined;
  if (mubiao === undefined) return;
  shijian.preventDefault();
  zhuangtai.qiangdu = qiangdulan[Math.min(zuihou, Math.max(0, mubiao))];
};
</script>

<template>
  <div class="bz-ms">
    <div class="bz-ms-section">
      <div class="bz-ms-head bz-ms-pad">
        <span class="bz-ms-title">Context</span>
        <span class="bz-ms-aside">
          <span class="bz-ms-tag">{{ t("inputToolbar.contextDefault") }}</span>
          <span class="bz-ms-value">200K</span>
        </span>
      </div>
      <div class="bz-ms-seg-track" role="radiogroup" aria-label="Context window">
        <div
          class="bz-ms-seg-glow"
          :style="{ left: `calc(3px + (100% - 6px) * ${shangxiawenxuhao} / 2)`, width: 'calc((100% - 6px) / 2)' }"
        />
        <button
          v-for="xiang in shangxiawenlan"
          :key="xiang.zhi"
          type="button"
          role="radio"
          class="bz-ms-seg"
          :aria-checked="zhuangtai.shangxiawen === xiang.zhi"
          @click="zhuangtai.shangxiawen = xiang.zhi"
        >{{ xiang.biaoqian }}</button>
      </div>
    </div>
    <div class="bz-ms-rule" />
    <div class="bz-ms-section">
      <button
        type="button"
        class="bz-ms-row"
        :data-on="tuilikai ? '' : undefined"
        :aria-disabled="!nengli.kebiguan || undefined"
        @click="nengli.kebiguan && (zhuangtai.tuili = !zhuangtai.tuili)"
      >
        <span class="bz-ms-label">
          <svg class="bz-ms-icon" viewBox="0 0 1024 1024" aria-hidden="true">
            <path fill="currentColor" d="M725.376 51.52l56.256 105.536 105.536 56.32-105.536 56.192-56.32 105.536-56.192-105.536-105.536-56.256 105.536-56.256 56.256-105.536z m-384 133.376l113.792 213.312L668.48 512 455.168 625.792 341.376 839.04 227.584 625.792 14.272 512l213.312-113.792L341.376 184.96z m497.792 512L768 563.52l-71.04 133.376-133.376 71.04 133.312 71.168L768 972.416l71.168-133.312L972.48 768l-133.312-71.104z" />
          </svg>
          <span>Reasoning</span>
        </span>
        <span class="bz-ms-switch" :data-on="tuilikai ? '' : undefined" role="switch" :aria-checked="tuilikai" />
      </button>
      <div v-if="tuilikai" class="bz-ms-stepper" :data-max="xuhao === zuihou ? '' : undefined">
        <div class="bz-ms-head bz-ms-pad">
          <span class="bz-ms-title">Effort</span>
          <span class="bz-ms-value">{{ meihua(zhuangtai.qiangdu) }}</span>
        </div>
        <div class="bz-ms-ends bz-ms-pad">
          <span>Faster</span>
          <span>Smarter</span>
        </div>
        <div class="bz-ms-pad">
          <div
            role="slider"
            tabindex="0"
            aria-label="Reasoning effort"
            :aria-valuemin="0"
            :aria-valuemax="zuihou"
            :aria-valuenow="xuhao"
            :aria-valuetext="meihua(zhuangtai.qiangdu)"
            class="bz-ms-track"
            @click="dianjihuagan"
            @keydown="anjian"
          >
            <div class="bz-ms-fill" :style="{ width: xuhao === zuihou ? '100%' : `calc(${dianwei(xuhao)} + 6px)` }" />
            <span v-for="(zhi, i) in qiangdulan" :key="zhi" class="bz-ms-dot" :style="{ left: dianwei(i) }" />
            <div class="bz-ms-thumb" :style="{ left: dianwei(xuhao) }" />
          </div>
        </div>
      </div>
    </div>
    <template v-if="nengli.kuaisu">
      <div class="bz-ms-rule" />
      <div class="bz-ms-section bz-ms-list">
        <button
          type="button"
          class="bz-ms-row"
          :data-on="zhuangtai.kuaisu ? '' : undefined"
          @click="zhuangtai.kuaisu = !zhuangtai.kuaisu"
        >
          <span class="bz-ms-label">
            <svg class="bz-ms-icon" viewBox="0 0 24 24" aria-hidden="true">
              <path fill="currentColor" d="M13 2L3 14h9l-1 8l10-12h-9z" />
            </svg>
            <span>Fast</span>
            <span class="bz-ms-tag">2×</span>
          </span>
          <span class="bz-ms-switch" :data-on="zhuangtai.kuaisu ? '' : undefined" role="switch" :aria-checked="zhuangtai.kuaisu" />
        </button>
      </div>
    </template>
  </div>
</template>

<style scoped>
.bz-ms {
  --ms-ink: var(--bz-fg);
  --ms-bg: var(--bz-editor-bg);
  --ms-muted: color-mix(in srgb, var(--ms-ink) 55%, transparent);
  --ms-faint: color-mix(in srgb, var(--ms-ink) 30%, transparent);
  --ms-soft: color-mix(in srgb, var(--ms-ink) 8%, transparent);
  --ms-fill: color-mix(in srgb, var(--ms-ink) 18%, transparent);
  --ms-spark: color-mix(in srgb, #a78bfa 75%, var(--ms-ink));
  --ms-ease: cubic-bezier(0.23, 1, 0.32, 1);
  display: flex;
  flex-direction: column;
  width: 232px;
  padding: 6px;
  color: var(--ms-ink);
  font-size: 12px;
  line-height: 16px;
}

.bz-ms-section { display: flex; flex-direction: column; gap: 8px; padding: 4px 0; }
.bz-ms-section.bz-ms-list { gap: 2px; }
.bz-ms-rule { height: 1px; margin: 2px 6px; background: var(--ms-soft); }
.bz-ms-pad { padding: 0 6px; }
.bz-ms-head { display: flex; align-items: center; gap: 6px; min-height: 16px; }
.bz-ms-title { color: var(--ms-muted); }
.bz-ms-value { font-weight: 500; font-variant-numeric: tabular-nums; transition: color 300ms ease; }
.bz-ms-aside { display: inline-flex; align-items: center; gap: 6px; margin-left: auto; }
.bz-ms-tag { padding: 0 5px; border-radius: 4px; background: var(--ms-soft); color: var(--ms-muted); font-size: 10px; font-weight: 400; line-height: 16px; white-space: nowrap; }
.bz-ms-icon { flex: none; width: 13px; height: 13px; color: var(--ms-muted); transition: color 200ms ease; }
.bz-ms-label { display: inline-flex; align-items: center; gap: 8px; min-width: 0; }

.bz-ms-row {
  display: flex !important;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  width: 100%;
  height: 30px;
  padding: 0 6px !important;
  border-radius: 8px;
  transition: background-color 150ms ease;
}
.bz-ms-row:hover { background: var(--ms-soft) !important; }
.bz-ms-row[aria-disabled="true"] { background: transparent !important; cursor: default; }
.bz-ms-row[data-on] .bz-ms-icon { color: var(--ms-ink); }

.bz-ms-switch { position: relative; flex: none; width: 26px; height: 16px; border-radius: 8px; background: var(--ms-fill); transition: background-color 220ms var(--ms-ease); }
.bz-ms-switch::after { content: ""; position: absolute; top: 2px; left: 2px; width: 12px; height: 12px; border-radius: 6px; background: var(--ms-muted); transition: transform 220ms var(--ms-ease), background-color 220ms ease; }
.bz-ms-switch[data-on] { background: var(--ms-ink); }
.bz-ms-switch[data-on]::after { transform: translateX(10px); background: var(--ms-bg); }
.bz-ms-row[aria-disabled="true"] .bz-ms-switch { opacity: 0.5; }

.bz-ms-seg-track { position: relative; display: flex; margin: 0 6px; padding: 3px; border-radius: 10px; background: var(--ms-soft); }
.bz-ms-seg-glow { position: absolute; top: 3px; bottom: 3px; border-radius: 7px; background: var(--ms-fill); transition: left 220ms var(--ms-ease), width 220ms var(--ms-ease); }
.bz-ms-seg {
  position: relative;
  flex: 1 1 0;
  display: inline-flex !important;
  align-items: center;
  justify-content: center;
  gap: 4px;
  min-width: 0;
  height: 24px;
  padding: 0 6px !important;
  border-radius: 7px;
  color: var(--ms-muted);
  font-variant-numeric: tabular-nums;
  transition: color 150ms ease;
}
.bz-ms-seg:hover { color: var(--ms-ink); }
.bz-ms-seg[aria-checked="true"] { color: var(--ms-ink); font-weight: 500; }

.bz-ms-stepper { display: flex; flex-direction: column; gap: 8px; }
.bz-ms-ends { display: flex; justify-content: space-between; color: var(--ms-muted); font-size: 11px; line-height: 14px; }
.bz-ms-track { position: relative; height: 20px; border-radius: 10px; background: var(--ms-soft); cursor: pointer; outline: none; }
.bz-ms-track:focus-visible { box-shadow: 0 0 0 1px var(--bz-link); }
.bz-ms-fill { position: absolute; top: 0; bottom: 0; left: 0; border-radius: 10px; background: var(--ms-fill); transition: width 220ms var(--ms-ease), background-color 300ms ease; }
.bz-ms-dot { position: absolute; top: 50%; width: 4px; height: 4px; margin: -2px 0 0 -2px; border-radius: 2px; background: var(--ms-faint); }
.bz-ms-thumb { position: absolute; top: -3px; width: 12px; height: 26px; margin-left: -6px; border-radius: 6px; background: var(--ms-ink); box-shadow: 0 2px 6px rgba(0, 0, 0, 0.25); transition: left 220ms var(--ms-ease), background-color 300ms ease; }
.bz-ms-stepper[data-max] .bz-ms-fill { background: color-mix(in srgb, var(--ms-spark) 35%, transparent); }
.bz-ms-stepper[data-max] .bz-ms-thumb { background: var(--ms-spark); }
.bz-ms-stepper[data-max] .bz-ms-value { color: var(--ms-spark); }

@media (prefers-reduced-motion: reduce) {
  .bz-ms *, .bz-ms *::after { transition: none !important; }
}
</style>
