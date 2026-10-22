<script setup lang="ts">
import { ref } from "vue";
import BzTubiao from "./BzTubiao.vue";
import BzPinpai from "./BzPinpai.vue";
import BzMoxingxuanxiang from "./BzMoxingxuanxiang.vue";
import { shiyongwenben } from "./shuju";

// 模型列「⋯ → 進階設定」打開的對話框（Settings.tsx SimpleModelSettingsDialog）。
// 示例是相容槽位上走 Anthropic 協定的 claude-opus-5-5：1M 原生視窗、200K/1M 兩檔、輸出預留 16384、
// 推理預留 64000、推理不可關閉、預設強度 medium、支援 Fast；相容槽位上系統訊息預設 system-role（Anthropic 傳輸下可選 system-role / separated），
// 工具格式只有 Anthropic Style。右上角「啟用自訂設定」關閉時，下面所有卡片都是灰的、不可編輯。
withDefaults(defineProps<{ moxing?: string; tigongshang?: string }>(), {
  moxing: "claude-opus-5-5",
  tigongshang: "OpenAI-Compatible",
});

const { t } = shiyongwenben();

const zidingyi = ref(true);
const morendang = ref<"duan" | "chang">("duan");
const qiangdulan = ["low", "medium", "high", "xhigh", "max"];
const kexuan = ref(new Set(qiangdulan));
const moren = ref("medium");
const meihua = (zhi: string) => (zhi === "xhigh" ? "Extra High" : zhi.charAt(0).toUpperCase() + zhi.slice(1));
const qiehuan = (zhi: string) => {
  const xin = new Set(kexuan.value);
  if (xin.has(zhi) && xin.size > 1) xin.delete(zhi);
  else xin.add(zhi);
  kexuan.value = xin;
  if (!xin.has(moren.value)) moren.value = qiangdulan.find((x) => xin.has(x)) ?? "medium";
};
const jiagelan = ["models.inputPrice", "models.outputPrice", "models.cacheHitPrice", "models.cacheWrite5mPrice", "models.cacheWrite1hPrice"] as const;
</script>

<template>
  <div class="bz">
    <div class="bz-chuangkou bz-gj">
      <div class="bz-gj-tou">
        <span class="bz-gj-tubiao"><BzPinpai pinpai="claude" :daxiao="24" /></span>
        <div class="bz-gj-biaoti">
          <div class="bz-gj-meiti">{{ t("models.advancedSettings") }}</div>
          <div class="bz-gj-minghang">
            <span class="bz-gj-ming">{{ moxing }}</span>
            <span class="bz-gj-ti">{{ tigongshang }}</span>
          </div>
        </div>
        <button type="button" class="bz-gj-zidingyi bz-gl" @click="zidingyi = !zidingyi">
          <span>{{ t("models.enableCustomSettings") }}</span>
          <span class="bz-kaiguan bz-xiao" :class="{ 'bz-kai': zidingyi }" />
        </button>
        <span class="bz-gj-guan"><BzTubiao ming="x" :daxiao="14" :cuxi="2.8" /></span>
      </div>

      <div class="bz-gj-ti-qu">
        <div class="bz-gj-lan">
          <div class="bz-gj-ka" :class="{ 'bz-gj-hui': !zidingyi }">
            <div class="bz-gj-ka-tou"><BzTubiao ming="sliders-horizontal" />{{ t("models.basic") }}</div>
            <div class="bz-gj-ka-ti">
              <div class="bz-gj-tongji">
                <div class="bz-gj-tongji-ge">
                  <div class="bz-gj-xiaobiao">{{ t("models.contextWindowTotal") }}</div>
                  <div class="bz-gj-dashu">1M</div>
                </div>
                <div class="bz-gj-tongji-ge">
                  <div class="bz-gj-xiaobiao">{{ t("models.contextWindowUsable") }}</div>
                  <div class="bz-gj-dashu">{{ morendang === "duan" ? "183.6k" : "983.6k" }}</div>
                </div>
              </div>
              <div class="bz-gj-hang">
                <div class="bz-gj-hang-shang"><span>{{ t("models.contextLongToggle") }}</span><span class="bz-kaiguan bz-xiao bz-kai" /></div>
                <div class="bz-gj-shuo">{{ t("models.contextLongToggleDesc") }}</div>
              </div>
              <label class="bz-gj-ziduan">
                <span class="bz-gj-ziduan-ming">{{ t("models.contextShortWindow") }}</span>
                <input class="bz-gj-shuru bz-mono" value="200000" readonly />
                <span class="bz-gj-shuo">{{ t("models.contextShortWindowHint") }}</span>
              </label>
              <label class="bz-gj-ziduan">
                <span class="bz-gj-ziduan-ming">{{ t("models.contextLongWindow") }}</span>
                <input class="bz-gj-shuru bz-mono" value="1000000" readonly />
                <span class="bz-gj-shuo">{{ t("models.contextLongWindowHint") }}</span>
              </label>
              <div class="bz-gj-shuo">{{ t("models.contextOfficialTwoDesc") }}</div>
              <div class="bz-gj-dang">
                <button type="button" class="bz-gj-dang-an" :class="{ 'bz-xuan': morendang === 'duan' && zidingyi }" @click="morendang = 'duan'">
                  <span class="bz-gj-xiaobiao">{{ t("models.contextTierShort") }}</span>
                  <span class="bz-gj-dashu">200k</span>
                  <span class="bz-gj-dang-zhu">{{ morendang === "duan" ? t("models.contextDefaultNow") : t("models.contextSetDefault") }}</span>
                </button>
                <button type="button" class="bz-gj-dang-an" :class="{ 'bz-xuan': morendang === 'chang' && zidingyi }" @click="morendang = 'chang'">
                  <span class="bz-gj-xiaobiao">{{ t("models.contextTierLong") }}</span>
                  <span class="bz-gj-dashu">1M</span>
                  <span class="bz-gj-dang-zhu">{{ morendang === "chang" ? t("models.contextDefaultNow") : t("models.contextSetDefault") }}</span>
                </button>
              </div>
              <div class="bz-gj-xian" />
              <label class="bz-gj-ziduan">
                <span class="bz-gj-ziduan-ming">{{ t("models.outputTokenSpace") }}</span>
                <input class="bz-gj-shuru bz-mono" value="16384" readonly />
                <span class="bz-gj-shuo">{{ t("models.tokenSuffixHintOutput") }}</span>
              </label>
              <div class="bz-gj-xian" />
              <div>
                <div class="bz-gj-ziduan-ming">{{ t("models.submenuPreview") }}</div>
                <div class="bz-gj-shuo">{{ t("models.submenuPreviewDesc") }}</div>
              </div>
              <div class="bz-gj-yulan"><BzMoxingxuanxiang :moxing="moxing" /></div>
            </div>
          </div>

          <div class="bz-gj-ka" :class="{ 'bz-gj-hui': !zidingyi }">
            <div class="bz-gj-ka-tou"><BzTubiao ming="circle-dollar-sign" />{{ t("models.pricing") }}</div>
            <div class="bz-gj-ka-ti bz-gj-jiage">
              <label v-for="jian in jiagelan" :key="jian" class="bz-gj-ziduan">
                <span class="bz-gj-jiage-ming">{{ t(jian) }}</span>
                <input class="bz-gj-shuru bz-mono" placeholder="0" readonly />
              </label>
            </div>
          </div>
        </div>

        <div class="bz-gj-lan">
          <div class="bz-gj-ka" :class="{ 'bz-gj-hui': !zidingyi }">
            <div class="bz-gj-ka-tou"><BzTubiao ming="zap" />{{ t("models.fastMode") }}</div>
            <div class="bz-gj-ka-ti">
              <div class="bz-gj-hang">
                <div class="bz-gj-hang-shang"><span>{{ t("models.supportsFast") }}</span><span class="bz-kaiguan bz-xiao bz-kai" /></div>
                <div class="bz-gj-shuo">{{ t("models.supportsFastDesc") }}</div>
              </div>
              <div class="bz-gj-hang">
                <div class="bz-gj-hang-shang"><span>{{ t("models.enableFast") }}</span><span class="bz-kaiguan bz-xiao" /></div>
                <div class="bz-gj-shuo">{{ t("models.enableFastDesc") }}</div>
              </div>
            </div>
          </div>

          <div class="bz-gj-ka" :class="{ 'bz-gj-hui': !zidingyi }">
            <div class="bz-gj-ka-tou"><BzTubiao ming="sparkles" />{{ t("models.thinkingReasoning") }}</div>
            <div class="bz-gj-ka-ti">
              <div class="bz-gj-hang">
                <div class="bz-gj-hang-shang"><span>{{ t("models.supportsThinking") }}</span><span class="bz-kaiguan bz-xiao bz-kai" /></div>
                <div class="bz-gj-shuo">{{ t("models.supportsThinkingDesc") }}</div>
              </div>
              <div class="bz-gj-hang">
                <div class="bz-gj-hang-shang"><span>{{ t("models.canTurnOff") }}</span><span class="bz-kaiguan bz-xiao" /></div>
                <div class="bz-gj-shuo">{{ t("models.canTurnOffDesc") }}</div>
              </div>
              <div class="bz-gj-hang">
                <div class="bz-gj-hang-shang"><span>{{ t("models.canStreamOutput") }}</span><span class="bz-kaiguan bz-xiao bz-kai" /></div>
                <div class="bz-gj-shuo">{{ t("models.canStreamOutputDesc") }}</div>
              </div>
              <div class="bz-gj-hang">
                <div class="bz-gj-hang-shang"><span>{{ t("models.reasoningEffortAvailable") }}</span></div>
                <div class="bz-gj-pian">
                  <button v-for="zhi in qiangdulan" :key="zhi" type="button" class="bz-gj-pian-an" :class="{ 'bz-xuan': kexuan.has(zhi) }" @click="qiehuan(zhi)">{{ meihua(zhi) }}</button>
                </div>
                <div class="bz-gj-shuo">{{ t("models.reasoningEffortAvailableDesc") }}</div>
              </div>
              <div class="bz-gj-hang">
                <div class="bz-gj-hang-shang"><span>{{ t("models.reasoningEffortDefault") }}</span></div>
                <div class="bz-gj-pian">
                  <button
                    v-for="zhi in qiangdulan.filter((x) => kexuan.has(x))"
                    :key="zhi"
                    type="button"
                    class="bz-gj-pian-an"
                    :class="{ 'bz-xuan': moren === zhi }"
                    @click="moren = zhi"
                  >{{ meihua(zhi) }}</button>
                </div>
                <div class="bz-gj-shuo">{{ t("models.reasoningEffortDefaultDesc") }}</div>
              </div>
              <label class="bz-gj-ziduan">
                <span class="bz-gj-ziduan-ming">{{ t("models.reasoningOutputReserve") }}</span>
                <input class="bz-gj-shuru bz-mono" value="64000" readonly />
                <span class="bz-gj-shuo">{{ t("models.reasoningOutputReserveHint") }}</span>
              </label>
            </div>
          </div>

          <div class="bz-gj-ka" :class="{ 'bz-gj-hui': !zidingyi }">
            <div class="bz-gj-ka-tou"><BzTubiao ming="message-square" />{{ t("models.messageFormat") }}</div>
            <div class="bz-gj-ka-ti">
              <div class="bz-gj-hang">
                <div class="bz-gj-hang-shang"><span>{{ t("models.systemMessage") }}</span><span class="bz-gj-xiala bz-mono">system-role <BzTubiao ming="chevron-down" :daxiao="12" /></span></div>
                <div class="bz-gj-shuo">{{ t("models.systemMessageDesc") }}</div>
              </div>
            </div>
          </div>

          <div class="bz-gj-ka" :class="{ 'bz-gj-hui': !zidingyi }">
            <div class="bz-gj-ka-tou"><BzTubiao ming="wrench" />{{ t("models.toolCalling") }}</div>
            <div class="bz-gj-ka-ti">
              <div class="bz-gj-hang">
                <div class="bz-gj-hang-shang"><span>{{ t("models.toolFormat") }}</span><span class="bz-gj-xiala">Anthropic Style <BzTubiao ming="chevron-down" :daxiao="12" /></span></div>
                <div class="bz-gj-shuo">{{ t("models.toolFormatDesc") }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="bz-gj-di">
        <span class="bz-gj-quxiao">{{ t("common.cancel") }}</span>
        <span class="bz-gj-baocun">{{ t("common.save") }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.bz-gj {
  display: flex;
  flex-direction: column;
  border-radius: 16px;
  background: var(--bz-editor-bg);
  container-type: inline-size;
}

.bz-gj-tou {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 12px;
  padding: 14px 20px;
  border-bottom: 1px solid var(--bz-border4);
}

.bz-gj-tubiao {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  flex-shrink: 0;
  border-radius: 12px;
  background: color-mix(in srgb, var(--bz-fg) 8%, transparent);
  box-shadow: inset 0 0 0 1px color-mix(in srgb, var(--bz-fg) 10%, transparent);
}

.bz-gj-biaoti {
  flex: 1 1 160px;
  min-width: 0;
}

.bz-gj-meiti {
  color: var(--bz-fg-4);
  font-size: 10px;
  font-weight: 600;
  letter-spacing: 0.16em;
  text-transform: uppercase;
}

.bz-gj-minghang {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 2px;
  min-width: 0;
}

.bz-gj-ming {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: var(--bz-fg-1);
  font-size: 15px;
  font-weight: 600;
}

.bz-gj-ti {
  flex-shrink: 0;
  color: var(--bz-fg-4);
  font-size: 12px;
}

.bz-gj-zidingyi {
  display: flex;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  padding: 6px 12px;
  border-radius: 12px;
  border: 1px solid var(--bz-border3) !important;
  color: var(--bz-fg-2);
  font-size: 12px;
}

.bz-gj-guan {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 26px;
  height: 26px;
  flex-shrink: 0;
  border-radius: 50%;
  color: var(--bz-fg-1);
  opacity: 0.75;
  background: color-mix(in srgb, var(--bz-fg) 14%, transparent);
}

.bz-gj-ti-qu {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  align-items: start;
  gap: 12px;
  padding: 20px;
}

.bz-gj-lan {
  display: flex;
  flex-direction: column;
  gap: 12px;
  min-width: 0;
}

.bz-gj-ka {
  border-radius: 16px;
  border: 1px solid var(--bz-border3);
  background: color-mix(in srgb, var(--bz-editor-bg) 72%, var(--bz-fg) 4%);
  box-shadow: inset 0 1px 0 0 color-mix(in srgb, var(--bz-fg) 8%, transparent);
  transition: opacity 150ms;
}

.bz-gj-ka.bz-gj-hui {
  opacity: 0.4;
  pointer-events: none;
}

.bz-gj-ka-tou {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 16px 20px 8px;
  color: var(--bz-fg-3);
  font-size: 10px;
  font-weight: 600;
  letter-spacing: 0.16em;
  text-transform: uppercase;
}

.bz-gj-ka-tou :deep(svg) {
  opacity: 0.8;
}

.bz-gj-ka-ti {
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 0 20px 16px;
}

.bz-gj-tongji,
.bz-gj-dang {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 8px;
}

.bz-gj-tongji-ge {
  padding: 10px 14px;
  border-radius: 12px;
  background: color-mix(in srgb, var(--bz-fg) 6%, transparent);
}

.bz-gj-xiaobiao {
  display: block;
  color: var(--bz-fg-4);
  font-size: 10px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.bz-gj-dashu {
  display: block;
  margin-top: 2px;
  color: var(--bz-fg-1);
  font-size: 18px;
  font-weight: 600;
  font-variant-numeric: tabular-nums;
}

.bz-gj-hang {
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 2px 0;
}

.bz-gj-hang-shang {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  color: var(--bz-fg-2);
  font-size: 13px;
  line-height: 1.25;
}

.bz-gj-shuo {
  color: var(--bz-fg-3);
  font-size: 11px;
  font-weight: 600;
  line-height: 1.375;
}

.bz-gj-ziduan {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.bz-gj-ziduan-ming {
  color: var(--bz-fg-2);
  font-size: 13px;
}

.bz-gj-shuru {
  width: 100%;
  padding: 6px 10px;
  border-radius: 8px;
  font-size: 12.5px;
  color: var(--bz-fg-1);
  background: var(--bz-field-bg);
  border: 1px solid var(--bz-field-border);
}

.bz-gj-dang-an {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 10px 14px;
  border-radius: 12px;
  text-align: left;
  border: 1px solid var(--bz-border3) !important;
}

.bz-gj-dang-an.bz-xuan,
.bz-gj-pian-an.bz-xuan {
  border-color: transparent !important;
  background: color-mix(in srgb, var(--bz-button-bg) 18%, var(--bz-editor-bg) 82%);
  box-shadow: 0 0 0 1px color-mix(in srgb, var(--bz-button-bg) 45%, transparent);
}

.bz-gj-dang-zhu {
  margin-top: 2px;
  color: var(--bz-fg-3);
  font-size: 10px;
}

.bz-gj-xian {
  height: 1px;
  margin: 0 -4px;
  background: color-mix(in srgb, var(--bz-border4) 70%, transparent);
}

.bz-gj-yulan {
  align-self: flex-start;
  border-radius: 8px;
  border: 1px solid color-mix(in srgb, var(--bz-fg) 14%, transparent);
}

.bz-gj-jiage {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 10px;
}

.bz-gj-jiage-ming {
  color: var(--bz-fg-2);
  font-size: 12px;
}

.bz-gj-pian {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.bz-gj-pian-an {
  height: 26px;
  padding: 0 10px;
  border-radius: 8px;
  font-size: 12px;
  font-weight: 600;
  color: var(--bz-fg-2);
  border: 1px solid var(--bz-border3) !important;
}

.bz-gj-xiala {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  flex-shrink: 0;
  height: 28px;
  padding: 0 10px;
  border-radius: 8px;
  font-size: 12px;
  color: var(--bz-fg-1);
  background: var(--bz-field-bg);
  border: 1px solid var(--bz-field-border);
}

.bz-gj-di {
  display: flex;
  justify-content: flex-end;
  gap: 8px;
  padding: 12px 20px;
  border-top: 1px solid var(--bz-border4);
}

.bz-gj-quxiao,
.bz-gj-baocun {
  padding: 6px 16px;
  border-radius: 8px;
  font-size: 13px;
}

.bz-gj-quxiao {
  color: var(--bz-fg-3);
}

.bz-gj-baocun {
  padding: 6px 20px;
  font-weight: 500;
  color: var(--bz-button-fg);
  background: var(--bz-button-bg);
}

@container (max-width: 640px) {
  .bz-gj-ti-qu {
    grid-template-columns: minmax(0, 1fr);
  }
}
</style>
