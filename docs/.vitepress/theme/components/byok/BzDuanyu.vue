<script setup lang="ts">
import { computed, ref } from "vue";
import BzTubiao from "./BzTubiao.vue";
import { shiyongwenben } from "./shuju";

// 快速短語管理視窗（QuickPhrasesTray.tsx manageModal）：左邊是全部短語，右邊是收藏，
// 中間的箭頭把選中的短語加入收藏；「新增」展開上方的編輯器（名稱、動作類型、內容、終端機的工作目錄）。
// 星號、箭頭、移出收藏與動作類型都可以點，拖放用點擊代替。
type lei = "input" | "send" | "terminal";
type duanyu = { id: number; ming: string; lei: lei };

const props = withDefaults(defineProps<{ bianji?: boolean; gaoliang?: string; biaoji?: string }>(), {
  bianji: false,
  gaoliang: "",
  biaoji: "",
});

const { t } = shiyongwenben();

const quanbu = ref<duanyu[]>([
  { id: 1, ming: "Run dev server", lei: "terminal" },
  { id: 2, ming: "Review my changes", lei: "send" },
  { id: 3, ming: "Tests first", lei: "input" },
  { id: 4, ming: "Explain this error", lei: "input" },
  { id: 5, ming: "Clean install", lei: "terminal" },
]);
const shoucang = ref<number[]>([1, 2, 3]);
const xuanzhong = ref<number | null>(4);
const caogao = ref<lei>("terminal");

const tu = { input: "message-square", send: "send", terminal: "square-terminal" } as const;
const leiming = (l: lei) => t((l === "send" ? "quickPhrases.send" : l === "terminal" ? "quickPhrases.terminal" : "quickPhrases.insert") as never);
const shoucangliebiao = computed(() => shoucang.value.map((id) => quanbu.value.find((p) => p.id === id)!).filter(Boolean));

const qiehuanshoucang = (id: number) => {
  shoucang.value = shoucang.value.includes(id) ? shoucang.value.filter((x) => x !== id) : [...shoucang.value, id];
};
const jiaru = () => {
  if (xuanzhong.value != null && !shoucang.value.includes(xuanzhong.value)) shoucang.value = [...shoucang.value, xuanzhong.value];
};
const shanchu = (id: number) => {
  quanbu.value = quanbu.value.filter((p) => p.id !== id);
  shoucang.value = shoucang.value.filter((x) => x !== id);
  if (xuanzhong.value === id) xuanzhong.value = null;
};
</script>

<template>
  <div class="bz">
    <div class="bz-chuangkou bz-dy" :style="{ height: bianji ? '620px' : '460px' }">
      <div class="bz-dy-tou">
        <span class="bz-dy-tubiao"><BzTubiao ming="message-square-text" :daxiao="15" :cuxi="2" /></span>
        <span class="bz-dy-biao">
          {{ t("general.quickPhrases.title") }}
          <span v-if="bianji" class="bz-dy-pai">{{ t("common.add") }}</span>
        </span>
        <span class="bz-dy-xinzeng" :class="{ 'bz-kai': bianji, 'bz-gl': gaoliang === 'xinzeng' }">
          {{ t("common.add") }}
          <BzTubiao ming="chevron-down" :daxiao="13" :style="{ transform: bianji ? 'rotate(180deg)' : 'none' }" />
          <span v-if="gaoliang === 'xinzeng' && biaoji" class="bz-biaoji" style="top: -12px; right: -10px">{{ biaoji }}</span>
        </span>
        <span class="bz-dy-guan"><BzTubiao ming="x" :daxiao="14" :cuxi="2.8" /></span>
      </div>

      <div class="bz-dy-ti">
        <div class="bz-dy-lan">
          <div class="bz-dy-ka">
            <div class="bz-dy-ka-tou">
              <span class="bz-dy-shu" />
              <span class="bz-dy-ka-ming">{{ t("quickPhrases.all") }}</span>
              <span class="bz-dy-ka-tishi">{{ t("quickPhrases.dragHint") }}</span>
              <span class="bz-dy-xiaoan">{{ t("quickPhrases.deleteAll") }}</span>
            </div>
            <div class="bz-dy-lie">
              <div v-for="p in quanbu" :key="p.id" class="bz-dy-hang" :class="{ 'bz-xuan': xuanzhong === p.id }" @click="xuanzhong = p.id">
                <BzTubiao ming="grip-vertical" :daxiao="12" class="bz-dy-ruo" />
                <BzTubiao :ming="tu[p.lei]" :daxiao="12" :cuxi="2" />
                <span class="bz-dy-ming">{{ p.ming }}</span>
                <button type="button" class="bz-dy-an" :class="{ 'bz-dy-xing': shoucang.includes(p.id) }" :title="t((shoucang.includes(p.id) ? 'quickPhrases.removeFavorite' : 'quickPhrases.addFavorite') as never)" @click.stop="qiehuanshoucang(p.id)">
                  <svg width="13" height="13" viewBox="0 0 24 24" :fill="shoucang.includes(p.id) ? 'currentColor' : 'none'" stroke="currentColor" stroke-width="2" stroke-linejoin="round"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" /></svg>
                </button>
                <button type="button" class="bz-dy-an" :title="t('common.delete')" @click.stop="shanchu(p.id)"><BzTubiao ming="trash-2" :daxiao="12" /></button>
              </div>
            </div>
          </div>

          <div class="bz-dy-zhong">
            <button type="button" class="bz-dy-jiantou" :class="{ 'bz-jinyong': xuanzhong == null || shoucang.includes(xuanzhong), 'bz-gl': gaoliang === 'jiantou' }" :title="t('quickPhrases.addFavorite')" @click="jiaru">
              <BzTubiao ming="chevron-right" :daxiao="16" :cuxi="2" />
              <span v-if="gaoliang === 'jiantou' && biaoji" class="bz-biaoji" style="top: -12px; right: -10px">{{ biaoji }}</span>
            </button>
          </div>

          <div class="bz-dy-ka">
            <div class="bz-dy-ka-tou">
              <span class="bz-dy-shu" />
              <span class="bz-dy-ka-ming">{{ t("quickPhrases.favorites") }}</span>
              <span class="bz-dy-ka-shu">{{ shoucangliebiao.length }}</span>
            </div>
            <div class="bz-dy-lie">
              <div v-if="!shoucangliebiao.length" class="bz-dy-kong">{{ t("quickPhrases.noFavorites") }}</div>
              <div v-for="p in shoucangliebiao" :key="p.id" class="bz-dy-hang">
                <BzTubiao :ming="tu[p.lei]" :daxiao="12" :cuxi="2" />
                <span class="bz-dy-ming">{{ p.ming }}</span>
                <span class="bz-dy-an" :title="t('quickPhrases.edit')"><BzTubiao ming="pencil" :daxiao="11" /></span>
                <button type="button" class="bz-dy-an" :title="t('quickPhrases.removeFavorite')" @click="qiehuanshoucang(p.id)"><BzTubiao ming="x" :daxiao="12" /></button>
              </div>
            </div>
          </div>
        </div>

        <div v-if="bianji" class="bz-dy-bianji">
          <div class="bz-dy-zhe" />
          <div class="bz-dy-bj">
            <div class="bz-dy-bk">
              <div class="bz-dy-bk-tou"><span class="bz-dy-shu" /><span>{{ t("quickPhrases.name") }}</span></div>
              <div class="bz-dy-bk-ti">
                <span class="bz-dy-shuru">Run dev server</span>
                <span class="bz-dy-leixing" :class="{ 'bz-gl': gaoliang === 'leixing' }">
                  <button v-for="l in (['input', 'send', 'terminal'] as lei[])" :key="l" type="button" :class="{ 'bz-xuan': caogao === l }" @click="caogao = l">
                    <BzTubiao :ming="tu[l]" :daxiao="11" :cuxi="2" />{{ leiming(l) }}
                  </button>
                  <span v-if="gaoliang === 'leixing' && biaoji" class="bz-biaoji" style="top: -12px; right: -10px">{{ biaoji }}</span>
                </span>
              </div>
            </div>
            <div class="bz-dy-bk">
              <div class="bz-dy-bk-tou"><span class="bz-dy-shu" /><span>{{ t("quickPhrases.content") }}</span><span class="bz-dy-bk-you">{{ leiming(caogao) }}</span></div>
              <div class="bz-dy-neirong">npm run dev</div>
            </div>
            <div v-if="caogao === 'terminal'" class="bz-dy-bk">
              <div class="bz-dy-bk-tou"><span class="bz-dy-shu" /><span>{{ t("quickPhrases.workingDirectory") }}</span></div>
              <div class="bz-dy-bk-ti"><span class="bz-dy-shuru bz-mono bz-dy-ruozi">{{ t("quickPhrases.workingDirectory") }}</span></div>
            </div>
            <div class="bz-dy-caozuo">
              <span class="bz-dy-xiaoan bz-dy-da">{{ t("common.cancel") }}</span>
              <span class="bz-dy-baocun">{{ t("common.save") }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.bz-dy {
  display: flex;
  flex-direction: column;
  color: var(--bz-fg);
  container-type: inline-size;
}

.bz-dy-tou {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 14px 20px;
  border-bottom: 1px solid color-mix(in srgb, var(--bz-fg) 12%, transparent);
}

.bz-dy-tubiao {
  display: grid;
  place-items: center;
  width: 32px;
  height: 32px;
  flex-shrink: 0;
  border-radius: 6px;
  background: color-mix(in srgb, var(--bz-fg) 8%, transparent);
  box-shadow: inset 0 0 0 1px color-mix(in srgb, var(--bz-fg) 12%, transparent);
}

.bz-dy-biao {
  display: flex;
  flex: 1;
  align-items: center;
  gap: 8px;
  min-width: 0;
  font-size: 15px;
  font-weight: 600;
}

.bz-dy-pai {
  padding: 2px 6px;
  border-radius: 6px;
  font-size: 10px;
  font-weight: 600;
  background: color-mix(in srgb, var(--bz-fg) 8%, transparent);
  border: 1px solid color-mix(in srgb, var(--bz-fg) 14%, transparent);
}

.bz-dy-xinzeng {
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 6px 10px;
  border-radius: 6px;
  font-size: 12px;
  font-weight: 500;
  background: color-mix(in srgb, var(--bz-fg) 6%, transparent);
  border: 1px solid color-mix(in srgb, var(--bz-fg) 16%, transparent);
}

.bz-dy-xinzeng.bz-kai {
  background: color-mix(in srgb, var(--bz-fg) 12%, transparent);
}

.bz-dy-guan {
  display: grid;
  place-items: center;
  width: 26px;
  height: 26px;
  flex-shrink: 0;
  border-radius: 50%;
  background: color-mix(in srgb, var(--bz-fg) 14%, transparent);
}

.bz-dy-ti {
  position: relative;
  flex: 1;
  min-height: 0;
  padding: 20px;
}

.bz-dy-lan {
  display: flex;
  align-items: stretch;
  gap: 12px;
  height: 100%;
}

.bz-dy-ka {
  display: flex;
  flex: 1;
  flex-direction: column;
  min-width: 0;
  overflow: hidden;
  border-radius: 8px;
  background: color-mix(in srgb, var(--bz-editor-bg) 86%, var(--bz-fg) 6%);
  border: 1px solid color-mix(in srgb, var(--bz-fg) 18%, transparent);
  box-shadow: inset 0 1px 0 color-mix(in srgb, var(--bz-fg) 8%, transparent);
}

.bz-dy-ka-tou,
.bz-dy-bk-tou {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 14px;
  border-bottom: 1px solid color-mix(in srgb, var(--bz-fg) 12%, transparent);
}

.bz-dy-shu {
  width: 4px;
  height: 14px;
  flex-shrink: 0;
  border-radius: 999px;
  background: color-mix(in srgb, var(--bz-button-bg) 70%, transparent);
}

.bz-dy-ka-ming {
  flex-shrink: 0;
  font-size: 13px;
  font-weight: 600;
}

.bz-dy-ka-tishi {
  min-width: 0;
  overflow: hidden;
  font-size: 11px;
  font-weight: 700;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.bz-dy-ka-shu {
  font-size: 11px;
  color: var(--bz-fg-3);
}

.bz-dy-xiaoan {
  flex-shrink: 0;
  margin-left: auto;
  padding: 2px 6px;
  border-radius: 6px;
  font-size: 11px;
  font-weight: 500;
  background: color-mix(in srgb, var(--bz-fg) 6%, transparent);
  border: 1px solid color-mix(in srgb, var(--bz-fg) 16%, transparent);
}

.bz-dy-lie {
  flex: 1;
  min-height: 0;
  overflow-y: auto;
  padding: 6px;
}

.bz-dy-hang {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 6px 8px;
  border-radius: 6px;
  color: var(--bz-fg-2);
  cursor: pointer;
}

.bz-dy-hang:hover {
  color: var(--bz-fg-1);
  background: color-mix(in srgb, var(--bz-fg) 6%, transparent);
}

.bz-dy-hang.bz-xuan {
  color: var(--bz-fg-1);
  background: color-mix(in srgb, var(--bz-button-bg) 38%, transparent);
}

.bz-dy-ruo {
  flex-shrink: 0;
  color: var(--bz-fg-4);
}

.bz-dy-ming {
  flex: 1;
  min-width: 0;
  overflow: hidden;
  font-size: 12.5px;
  font-weight: 500;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.bz-dy-an {
  display: grid;
  place-items: center;
  width: 24px;
  height: 24px;
  flex-shrink: 0;
  border-radius: 8px;
  color: var(--bz-fg-4);
}

.bz-dy-an:hover {
  color: var(--bz-fg-1);
}

.bz-dy-an.bz-dy-xing {
  color: #fbbf24;
}

.bz-dy-kong {
  padding: 32px 12px;
  font-size: 12px;
  font-weight: 700;
  text-align: center;
  color: var(--bz-fg-4);
}

.bz-dy-zhong {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.bz-dy-jiantou {
  position: relative;
  display: grid;
  place-items: center;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: color-mix(in srgb, var(--bz-editor-bg) 86%, var(--bz-fg) 6%) !important;
  border: 1px solid color-mix(in srgb, var(--bz-fg) 18%, transparent) !important;
}

.bz-dy-jiantou.bz-jinyong {
  opacity: 0.35;
}

.bz-dy-bianji {
  position: absolute;
  inset: 20px;
  z-index: 2;
}

.bz-dy-zhe {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.18);
}

.bz-dy-bj {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
  max-height: 100%;
  overflow-y: auto;
  padding: 12px;
  border-radius: 8px;
  background: var(--bz-editor-bg);
  border: 1px solid color-mix(in srgb, var(--bz-fg) 18%, transparent);
  box-shadow: 0 12px 28px rgba(0, 0, 0, 0.22);
}

.bz-dy-bk {
  flex-shrink: 0;
  border-radius: 8px;
  background: color-mix(in srgb, var(--bz-editor-bg) 86%, var(--bz-fg) 6%);
  border: 1px solid color-mix(in srgb, var(--bz-fg) 18%, transparent);
}

.bz-dy-bk-tou {
  padding: 10px 16px;
  font-size: 10px;
  font-weight: 600;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--bz-fg-3);
}

.bz-dy-bk-you {
  margin-left: auto;
  font-size: 11px;
  letter-spacing: 0;
  text-transform: none;
}

.bz-dy-bk-ti {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 12px;
  padding: 12px 16px;
}

.bz-dy-shuru {
  flex: 1;
  min-width: 140px;
  padding: 8px 12px;
  border-radius: 6px;
  font-size: 13px;
  font-weight: 500;
  background: color-mix(in srgb, var(--bz-fg) 6%, transparent);
  border: 1px solid color-mix(in srgb, var(--bz-fg) 12%, transparent);
}

.bz-dy-ruozi {
  font-size: 12px;
  color: var(--bz-fg-3);
}

.bz-dy-leixing {
  position: relative;
  display: flex;
  flex-shrink: 0;
  padding: 2px;
  border-radius: 6px;
  background: color-mix(in srgb, var(--bz-fg) 6%, transparent);
  border: 1px solid color-mix(in srgb, var(--bz-fg) 12%, transparent);
}

.bz-dy-leixing button {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 6px 10px;
  border-radius: 4px;
  font-size: 11px;
  font-weight: 500;
  color: var(--bz-fg-3);
}

.bz-dy-leixing button.bz-xuan {
  color: var(--bz-fg);
  background: color-mix(in srgb, var(--bz-button-bg) 22%, transparent);
}

.bz-dy-neirong {
  min-height: 72px;
  padding: 12px 16px;
  font-size: 12.5px;
  line-height: 1.6;
}

.bz-dy-caozuo {
  display: flex;
  justify-content: flex-end;
  gap: 8px;
}

.bz-dy-da {
  margin-left: 0;
  padding: 6px 10px;
  font-size: 12px;
}

.bz-dy-baocun {
  padding: 6px 14px;
  border-radius: 6px;
  font-size: 12px;
  font-weight: 500;
  color: #fff;
  background: var(--bz-button-bg);
}

@container (max-width: 520px) {
  .bz-dy-ka-tishi,
  .bz-dy-ruo,
  .bz-dy-ka-tou .bz-dy-xiaoan {
    display: none;
  }

  .bz-dy-tou {
    padding: 12px 14px;
  }

  .bz-dy-ti {
    padding: 12px;
  }

  .bz-dy-lan {
    gap: 6px;
  }

  .bz-dy-bianji {
    inset: 12px;
  }

  .bz-dy-lie {
    padding: 4px;
  }

  .bz-dy-hang {
    gap: 4px;
    padding: 6px;
  }

  .bz-dy-an {
    width: 20px;
  }

  .bz-dy-jiantou {
    width: 30px;
    height: 30px;
  }
}
</style>
