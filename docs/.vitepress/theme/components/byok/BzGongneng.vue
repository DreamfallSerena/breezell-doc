<script setup lang="ts">
import { computed, reactive, ref } from "vue";
import BzTubiao from "./BzTubiao.vue";
import BzPinpai from "./BzPinpai.vue";
import { shiyongwenben } from "./shuju";

// Box ▸ 功能選項（Settings.tsx FeatureOptionsSection）：五個分組（模型、執行、編輯器、智慧、系統），
// 每組是幾張卡片（OptionCard），卡片裡是一列列設定（OptionRow / OptionModelRow）。
// 開關的初始值是 Breezell 的預設值（breezellSettingsTypes.ts defaultGlobalSettings），可以點擊切換；
// 「專用模型」列打開後，下面會出現模型選擇欄，和 Breezell 一樣。
type hang =
  | { lei: "kaiguan"; id: string; ming: string; shuo?: string; zhi: boolean; jinwindows?: boolean }
  | { lei: "xuanze"; id: string; ming: string; shuo?: string; xuan: string[]; zhi?: number }
  | { lei: "moxing"; id: string; ming: string; shuo?: string; gen: string; zhuan: string };
type ka = { id: string; tubiao: string; biaoti: string; shuoming?: string; liang?: boolean; hang: hang[] };
type zu = { id: string; biaoti: string; shuoming?: string; ka: ka[] };

// zu：只顯示這些分組（逗號分隔）；zhuanyong：一開始就切到「專用模型」的模型列 id（逗號分隔）。
// qianru：放進 BzHezi 的內容區時不畫自己的視窗外框。
const props = withDefaults(defineProps<{ zu?: string; yetou?: boolean; qianru?: boolean; gaoliang?: string; biaoji?: string; zhuanyong?: string; moxingming?: string }>(), {
  zu: "",
  zhuanyong: "",
  moxingming: "claude-haiku-5-5",
  yetou: false,
  gaoliang: "",
  biaoji: "",
});

const { t } = shiyongwenben();

// 完成提示音（chatCompletionSound.ts CHAT_COMPLETION_SOUND_IDS），預設 glass。
const shengyin = ["glass", "bell", "marimba", "success", "chord", "chord2", "glisten", "calm", "polite", "whistleronic", "voice", "voiceUrge"].map(
  (id) => `featureOptions.notifications.sound.${id}`,
);

const moxinghang = (id: string, jian: string): hang => ({
  lei: "moxing",
  id,
  ming: `models.${jian}.title`,
  shuo: `models.${jian}.desc`,
  gen: `models.${jian}.followChat`,
  zhuan: `models.${jian}.custom`,
});

const quanbu: zu[] = [
  {
    id: "models",
    biaoti: "featureOptions.group.models",
    shuoming: "featureOptions.dedicatedModels.desc",
    ka: [
      {
        id: "dedicatedModels",
        tubiao: "layers",
        biaoti: "featureOptions.dedicatedModels.title",
        shuoming: "featureOptions.dedicatedModels.cardDesc",
        liang: true,
        hang: [
          moxinghang("analysisModel", "analysisModel"),
          moxinghang("teamDesignModel", "teamDesignModel"),
          moxinghang("teamBugfixModel", "teamBugfixModel"),
          moxinghang("scmModel", "scmModel"),
        ],
      },
      {
        id: "followUp",
        tubiao: "lightbulb",
        biaoti: "featureOptions.followUp.title",
        shuoming: "featureOptions.followUp.desc",
        hang: [
          { lei: "kaiguan", id: "followUp.enable", ming: "featureOptions.followUp.enable", shuo: "featureOptions.followUp.enableDesc", zhi: false },
          { lei: "xuanze", id: "followUp.count", ming: "featureOptions.followUp.count", shuo: "featureOptions.followUp.countDesc", xuan: ["2", "3", "4"], zhi: 2 },
          { lei: "xuanze", id: "followUp.clickAction", ming: "featureOptions.followUp.clickAction", shuo: "featureOptions.followUp.clickActionDesc", xuan: ["featureOptions.followUp.clickSend", "featureOptions.followUp.clickInsert"] },
          moxinghang("followUp.model", "followUpModel"),
        ],
      },
      {
        id: "promptOptimize",
        tubiao: "wand-sparkles",
        biaoti: "featureOptions.promptOptimize.title",
        shuoming: "featureOptions.promptOptimize.desc",
        hang: [moxinghang("promptOptimize.model", "promptOptimizeModel")],
      },
      {
        id: "selectionAssist",
        tubiao: "whole-word",
        biaoti: "featureOptions.selectionAssist.title",
        shuoming: "featureOptions.selectionAssist.desc",
        hang: [
          { lei: "kaiguan", id: "selectionAssist.pill", ming: "featureOptions.selectionAssist.pill", shuo: "featureOptions.selectionAssist.pillDesc", zhi: true },
          { lei: "xuanze", id: "selectionAssist.pillPlacement", ming: "featureOptions.selectionAssist.pillPlacement", shuo: "featureOptions.selectionAssist.pillPlacementDesc", xuan: ["featureOptions.selectionAssist.pillBelow", "featureOptions.selectionAssist.pillAbove"] },
          { lei: "kaiguan", id: "selectionAssist.translate", ming: "featureOptions.selectionAssist.translate", shuo: "featureOptions.selectionAssist.translateDesc", zhi: true },
          { lei: "kaiguan", id: "selectionAssist.reasoningTranslate", ming: "featureOptions.selectionAssist.reasoningTranslate", shuo: "featureOptions.selectionAssist.reasoningTranslateDesc", zhi: true },
          { lei: "kaiguan", id: "selectionAssist.search", ming: "featureOptions.selectionAssist.search", shuo: "featureOptions.selectionAssist.searchDesc", zhi: true },
          moxinghang("selectionAssist.model", "selectionAssistModel"),
        ],
      },
    ],
  },
  {
    id: "execution",
    biaoti: "featureOptions.group.execution",
    shuoming: "featureOptions.toolPermissions.desc",
    ka: [
      {
        id: "toolPermissions",
        tubiao: "shield",
        biaoti: "featureOptions.toolPermissions.title",
        liang: true,
        hang: [
          { lei: "kaiguan", id: "toolPermissions.edits", ming: "featureOptions.toolPermissions.edits", zhi: true },
          { lei: "kaiguan", id: "toolPermissions.terminal", ming: "featureOptions.toolPermissions.terminal", zhi: false },
          { lei: "kaiguan", id: "toolPermissions.database", ming: "featureOptions.toolPermissions.database", zhi: true },
          { lei: "kaiguan", id: "toolPermissions.media", ming: "featureOptions.toolPermissions.media", zhi: false },
          { lei: "kaiguan", id: "toolPermissions.mcpTools", ming: "featureOptions.toolPermissions.mcpTools", zhi: true },
          { lei: "kaiguan", id: "toolPermissions.teams", ming: "featureOptions.toolPermissions.teams", shuo: "featureOptions.toolPermissions.teamsDesc", zhi: false },
        ],
      },
    ],
  },
  {
    id: "editor",
    biaoti: "featureOptions.group.editor",
    ka: [
      {
        id: "codeBehavior",
        tubiao: "code",
        biaoti: "featureOptions.codeBehavior.title",
        shuoming: "featureOptions.codeBehavior.desc",
        hang: [
          { lei: "kaiguan", id: "codeBehavior.autoFixLint", ming: "featureOptions.codeBehavior.autoFixLint", zhi: true },
          { lei: "kaiguan", id: "codeBehavior.autoAcceptChanges", ming: "featureOptions.codeBehavior.autoAcceptChanges", zhi: false },
          { lei: "kaiguan", id: "codeBehavior.autoOpenFile", ming: "featureOptions.codeBehavior.autoOpenFile", zhi: false },
          { lei: "kaiguan", id: "codeBehavior.browserHeadless", ming: "featureOptions.codeBehavior.browserHeadless", shuo: "featureOptions.codeBehavior.browserHeadlessDesc", zhi: true },
          { lei: "kaiguan", id: "codeBehavior.expandEditOnComplete", ming: "featureOptions.codeBehavior.expandEditOnComplete", shuo: "featureOptions.codeBehavior.expandEditOnCompleteDesc", zhi: false },
          { lei: "kaiguan", id: "codeBehavior.showInlineSuggestions", ming: "featureOptions.codeBehavior.showInlineSuggestions", zhi: true },
        ],
      },
      {
        id: "notifications",
        tubiao: "bell",
        biaoti: "featureOptions.notifications.title",
        shuoming: "featureOptions.notifications.desc",
        hang: [
          { lei: "kaiguan", id: "notifications.systemNotifications", ming: "featureOptions.notifications.systemNotifications", shuo: "featureOptions.notifications.systemNotificationsDesc", zhi: true },
          { lei: "xuanze", id: "notifications.sound", ming: "featureOptions.notifications.sound", shuo: "featureOptions.notifications.soundDesc", xuan: shengyin },
          { lei: "kaiguan", id: "notifications.soundBackground", ming: "featureOptions.notifications.soundBackground", shuo: "featureOptions.notifications.soundBackgroundDesc", zhi: false },
          { lei: "kaiguan", id: "notifications.soundForeground", ming: "featureOptions.notifications.soundForeground", shuo: "featureOptions.notifications.soundForegroundDesc", zhi: false },
          { lei: "xuanze", id: "notifications.errorSound", ming: "featureOptions.notifications.errorSound", shuo: "featureOptions.notifications.errorSoundDesc", xuan: ["featureOptions.notifications.errorSound.disconnect", "featureOptions.notifications.errorSound.voiceError"] },
          { lei: "kaiguan", id: "notifications.errorSoundBackground", ming: "featureOptions.notifications.errorSoundBackground", shuo: "featureOptions.notifications.errorSoundBackgroundDesc", zhi: false },
          { lei: "kaiguan", id: "notifications.errorSoundForeground", ming: "featureOptions.notifications.errorSoundForeground", shuo: "featureOptions.notifications.errorSoundForegroundDesc", zhi: false },
        ],
      },
    ],
  },
  {
    id: "intelligence",
    biaoti: "featureOptions.group.intelligence",
    ka: [
      {
        id: "contextManagement",
        tubiao: "lightbulb",
        biaoti: "featureOptions.contextManagement.title",
        shuoming: "featureOptions.contextManagement.desc",
        hang: [
          { lei: "kaiguan", id: "contextManagement.autoPlanExecution", ming: "featureOptions.contextManagement.autoPlanExecution", shuo: "featureOptions.contextManagement.autoPlanExecutionDesc", zhi: false },
          { lei: "xuanze", id: "contextManagement.planSwitchPref", ming: "featureOptions.contextManagement.planSwitchPref", shuo: "featureOptions.contextManagement.planSwitchPrefDesc", xuan: ["planSwitch.alwaysAsk", "planSwitch.never", "planSwitch.alwaysRun"] },
          { lei: "xuanze", id: "nativeWebSearch", ming: "featureOptions.nativeWebSearch.title", shuo: "featureOptions.nativeWebSearch.desc", xuan: ["featureOptions.nativeWebSearch.auto", "featureOptions.nativeWebSearch.always", "featureOptions.nativeWebSearch.off"] },
        ],
      },
      {
        id: "modes",
        tubiao: "network",
        biaoti: "featureOptions.modes.title",
        shuoming: "featureOptions.modes.desc",
        hang: [
          { lei: "kaiguan", id: "superpowers", ming: "featureOptions.superpowers.enable", shuo: "featureOptions.superpowers.desc", zhi: true },
          { lei: "kaiguan", id: "entanglement", ming: "featureOptions.entanglement.enable", shuo: "featureOptions.entanglement.enableDesc", zhi: true },
        ],
      },
    ],
  },
  {
    id: "system",
    biaoti: "featureOptions.group.system",
    ka: [
      {
        id: "externalFileAccess",
        tubiao: "folder",
        biaoti: "featureOptions.externalFileAccess.title",
        shuoming: "featureOptions.externalFileAccess.desc",
        hang: [
          { lei: "kaiguan", id: "externalFileAccess.allowRead", ming: "featureOptions.externalFileAccess.allowRead", shuo: "featureOptions.externalFileAccess.allowReadDesc", zhi: true },
          { lei: "kaiguan", id: "externalFileAccess.allowWrite", ming: "featureOptions.externalFileAccess.allowWrite", shuo: "featureOptions.externalFileAccess.allowWriteDesc", zhi: true },
        ],
      },
      {
        id: "netActivity",
        tubiao: "terminal",
        biaoti: "featureOptions.netActivity.title",
        shuoming: "featureOptions.netActivity.desc",
        hang: [
          { lei: "kaiguan", id: "netActivity.enable", ming: "featureOptions.netActivity.enable", shuo: "featureOptions.netActivity.enableDesc", zhi: true },
          { lei: "kaiguan", id: "netActivity.precise", ming: "featureOptions.netActivity.precise", shuo: "featureOptions.netActivity.preciseDesc", zhi: false, jinwindows: true },
        ],
      },
    ],
  },
];

const xianshi = computed(() => {
  const yao = props.zu.split(",").map((x) => x.trim()).filter(Boolean);
  return yao.length ? quanbu.filter((z) => yao.includes(z.id)) : quanbu;
});

// 每個開關與專用模型列的狀態，以及每個下拉目前選中的項（以 id 為鍵）。
const zhuangtai = reactive<Record<string, boolean>>({});
const xuanzhong = reactive<Record<string, number>>({});
for (const z of quanbu)
  for (const k of z.ka)
    for (const h of k.hang) {
      if (h.lei === "xuanze") xuanzhong[h.id] = h.zhi ?? 0;
      else zhuangtai[h.id] = h.lei === "kaiguan" ? h.zhi : props.zhuanyong.split(",").includes(h.id);
    }
const dakai = ref("");
const xianshiming = (x: string) => (x.includes(".") ? t(x as never) : x);
const xuan = (id: string, i: number) => {
  xuanzhong[id] = i;
  dakai.value = "";
};
</script>

<template>
  <div class="bz">
    <div class="bz-gn" :class="qianru ? 'bz-gn-qianru' : 'bz-chuangkou'">
      <template v-if="yetou">
        <div class="bz-gn-yebiaoti">{{ t("tab.featureOptions") }}</div>
        <div class="bz-gn-yeshuo">{{ t("box.desc.featureOptions") }}</div>
      </template>
      <section v-for="z in xianshi" :key="z.id" class="bz-gn-zu">
        <div class="bz-gn-zutou">
          <div class="bz-gn-zuming">{{ t(z.biaoti as never) }}</div>
          <div v-if="z.shuoming" class="bz-gn-zushuo">{{ t(z.shuoming as never) }}</div>
        </div>
        <div v-for="k in z.ka" :key="k.id" class="bz-gn-ka" :class="{ 'bz-gl': gaoliang === k.id }">
          <span v-if="gaoliang === k.id && biaoji" class="bz-biaoji" style="top: -10px; right: -8px">{{ biaoji }}</span>
          <div class="bz-gn-katou">
            <span class="bz-gn-katu"><BzTubiao :ming="k.tubiao" :daxiao="14" :cuxi="2" /></span>
            <div class="bz-gn-kawen">
              <div class="bz-gn-kaming">{{ t(k.biaoti as never) }}</div>
              <div v-if="k.shuoming" class="bz-gn-kashuo">{{ t(k.shuoming as never) }}</div>
            </div>
          </div>
          <div class="bz-gn-kati" :class="{ 'bz-gn-liang': k.liang }">
            <div
              v-for="h in k.hang"
              :key="h.id"
              class="bz-gn-hang"
              :class="{ 'bz-gl': gaoliang === h.id }"
            >
              <span v-if="gaoliang === h.id && biaoji" class="bz-biaoji" style="top: -8px; right: -8px">{{ biaoji }}</span>
              <div class="bz-gn-hang-shang">
                <div class="bz-gn-hang-wen">
                  <div class="bz-gn-hang-ming">{{ t(h.ming as never) }}<span v-if="h.lei === 'kaiguan' && h.jinwindows" class="bz-gn-win">Windows</span></div>
                  <div v-if="h.shuo" class="bz-gn-hang-shuo">{{ t(h.shuo as never) }}</div>
                </div>
                <div class="bz-gn-kong">
                  <template v-if="h.lei === 'kaiguan'">
                    <button type="button" class="bz-kaiguan" :class="{ 'bz-kai': zhuangtai[h.id] }" @click="zhuangtai[h.id] = !zhuangtai[h.id]" />
                  </template>
                  <template v-else-if="h.lei === 'xuanze'">
                    <div class="bz-gn-xuan">
                      <button type="button" class="bz-gn-chip" :class="{ 'bz-gn-chip-kai': dakai === h.id }" @click="dakai = dakai === h.id ? '' : h.id">
                        <span>{{ xianshiming(h.xuan[xuanzhong[h.id]]) }}</span>
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2.5 4.5L6 8L9.5 4.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /></svg>
                      </button>
                      <div v-if="dakai === h.id" class="bz-gn-caidan">
                        <button
                          v-for="(x, i) in h.xuan"
                          :key="x"
                          type="button"
                          class="bz-gn-caidanxiang"
                          :class="{ 'bz-gn-xuanzhong': i === xuanzhong[h.id] }"
                          @click="xuan(h.id, i)"
                        >
                          <span>{{ xianshiming(x) }}</span>
                          <BzTubiao v-if="i === xuanzhong[h.id]" ming="check" :daxiao="12" :cuxi="2.2" />
                        </button>
                      </div>
                    </div>
                  </template>
                  <template v-else>
                    <span class="bz-gn-gen">{{ t((zhuangtai[h.id] ? h.zhuan : h.gen) as never) }}</span>
                    <button type="button" class="bz-kaiguan" :class="{ 'bz-kai': zhuangtai[h.id] }" @click="zhuangtai[h.id] = !zhuangtai[h.id]" />
                  </template>
                </div>
              </div>
              <div v-if="h.lei === 'moxing' && zhuangtai[h.id]" class="bz-gn-moxing">
                <BzPinpai pinpai="claude" :daxiao="14" />
                <span>{{ moxingming }}</span>
                <svg width="10" height="10" viewBox="0 0 12 12" fill="none"><path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /></svg>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped>
.bz-gn {
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding: 20px 24px 24px;
  container-type: inline-size;
}

.bz-gn-qianru {
  padding: 0;
}

.bz-gn-yebiaoti {
  color: var(--bz-fg-1);
  font-size: 22px;
  font-weight: 650;
  letter-spacing: -0.4px;
  line-height: 1.2;
}

.bz-gn-yeshuo {
  margin: -26px 0 0;
  color: var(--bz-fg-3);
  font-size: 13px;
  line-height: 1.5;
}

.bz-gn-zu {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.bz-gn-zutou {
  padding: 0 2px;
}

.bz-gn-zuming {
  color: var(--bz-fg-1);
  font-size: 13px;
  font-weight: 600;
}

.bz-gn-zushuo {
  margin-top: 2px;
  color: var(--bz-fg-3);
  font-size: 12px;
  line-height: 20px;
}

.bz-gn-ka {
  position: relative;
  border-radius: 12px;
  background: color-mix(in srgb, var(--bz-sidebar-bg) 93.5%, var(--bz-editor-fg) 6.5%);
  border: 1px solid color-mix(in srgb, var(--bz-fg) 9%, transparent);
}

.bz-gn-katou {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 16px 16px 12px;
}

.bz-gn-katu {
  display: grid;
  place-items: center;
  width: 28px;
  height: 28px;
  flex-shrink: 0;
  border-radius: 8px;
  color: var(--bz-fg-2);
}

.bz-gn-kawen {
  flex: 1;
  min-width: 0;
  padding-top: 2px;
}

.bz-gn-kaming {
  color: var(--bz-fg-1);
  font-size: 13.5px;
  font-weight: 600;
  line-height: 20px;
}

.bz-gn-kashuo {
  margin-top: 2px;
  color: var(--bz-fg-3);
  font-size: 12px;
  line-height: 20px;
}

.bz-gn-kati {
  padding: 0 16px 6px;
}

.bz-gn-hang {
  position: relative;
  padding: 12px 0;
  border-top: 1px solid color-mix(in srgb, var(--bz-fg) 7%, transparent);
  border-radius: 0;
}

.bz-gn-hang.bz-gl {
  margin: 0 -8px;
  padding: 12px 8px;
  border-radius: 8px;
}

.bz-gn-hang-shang {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 24px;
}

.bz-gn-hang-wen {
  flex: 1;
  min-width: 0;
}

.bz-gn-hang-ming {
  display: flex;
  align-items: center;
  gap: 6px;
  color: var(--bz-fg-1);
  font-size: 13px;
  font-weight: 500;
  line-height: 20px;
}

.bz-gn-win {
  padding: 0 5px;
  border-radius: 4px;
  font-size: 10px;
  color: var(--bz-fg-3);
  background: color-mix(in srgb, var(--bz-fg) 8%, transparent);
}

.bz-gn-hang-shuo {
  margin-top: 2px;
  color: var(--bz-fg-3);
  font-size: 12px;
  line-height: 18px;
}

.bz-gn-kong {
  display: flex;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  min-height: 20px;
  padding-top: 2px;
}

.bz-gn-gen {
  color: var(--bz-fg-3);
  font-size: 11.5px;
  white-space: nowrap;
}

.bz-gn-chip {
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 6px;
  min-height: 26px;
  padding: 2px 10px;
  border-radius: 6px;
  font-size: 12px;
  color: var(--bz-fg-1);
  background: color-mix(in srgb, var(--bz-fg) 8%, transparent);
  border: 1px solid color-mix(in srgb, var(--bz-fg) 20%, transparent);
  white-space: nowrap;
}

.bz-gn-chip svg {
  flex-shrink: 0;
  opacity: 0.7;
  transition: transform 0.15s;
}

.bz-gn-chip-kai {
  background: color-mix(in srgb, var(--bz-fg) 11%, transparent);
}

.bz-gn-chip-kai svg {
  transform: rotate(180deg);
}

.bz-gn-xuan {
  position: relative;
}

.bz-gn-caidan {
  position: absolute;
  top: calc(100% + 4px);
  right: 0;
  z-index: 20;
  display: flex;
  flex-direction: column;
  min-width: 100%;
  max-height: 260px;
  overflow-y: auto;
  padding: 4px 0;
  border-radius: 6px;
  background: var(--bz-menu-bg);
  border: 1px solid var(--bz-border3);
  box-shadow: var(--bz-shadow);
}

.bz-gn-caidanxiang {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  padding: 4px 12px;
  font-size: 12px;
  font-weight: 500;
  text-align: left;
  white-space: nowrap;
  color: var(--bz-fg-2);
  cursor: pointer;
}

.bz-gn-caidanxiang:hover {
  background: color-mix(in srgb, var(--bz-button-bg) 14%, transparent);
}

.bz-gn-xuanzhong {
  color: var(--bz-fg-1);
}

.bz-gn-moxing {
  display: flex;
  align-items: center;
  gap: 6px;
  margin-top: 12px;
  padding: 6px 10px;
  border-radius: 8px;
  font-size: 12px;
  color: var(--bz-fg-2);
  background: var(--bz-editor-bg);
  border: 1px solid color-mix(in srgb, var(--bz-fg) 7%, transparent);
}

/* 執行權限、專用模型這類卡片在寬螢幕兩列一排（md:grid-cols-2） */
@container (min-width: 600px) {
  .bz-gn-kati.bz-gn-liang {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    column-gap: 32px;
  }
}
</style>
