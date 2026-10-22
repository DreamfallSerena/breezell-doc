<script setup lang="ts">
import { ref } from "vue";
import BzTubiao from "./BzTubiao.vue";
import { shiyongwenben } from "./shuju";

// Box ▸ 一般與語言（Settings.tsx GeneralSection + GeneralTabSelector）：
// 語言卡片（LanguageRowDropdown → SettingsChipSelect）、資料管理卡片（設定 / 對話各一組匯入、匯出、重設）、
// IDE 卡片（設定、快捷鍵、色彩主題）。語言選單可以操作：選了哪個語言，這個復刻畫面就改用哪個語言，
// 就像 Breezell 裡切換後立即生效一樣。
const props = withDefaults(defineProps<{ zhankai?: boolean; gaoliang?: "yuyan" | "" ; biaoji?: string }>(), {
  zhankai: false,
  gaoliang: "",
  biaoji: "",
});

const fugai = ref<string | undefined>(undefined);
const { t, yuyan } = shiyongwenben(fugai);
const dakai = ref(props.zhankai);

// 選單順序與 GeneralSection 的 langOptions 相同；名稱是各語言的自稱，不隨介面語言變化。
const yuyanlan = [
  { jian: "en", wenben: "general.language.en" },
  { jian: "ja", wenben: "general.language.ja" },
  { jian: "ko", wenben: "general.language.ko" },
  { jian: "es", wenben: "general.language.es" },
  { jian: "pt-br", wenben: "general.language.ptBR" },
  { jian: "ru", wenben: "general.language.ru" },
  { jian: "zh-hans", wenben: "general.language.zh" },
  { jian: "zh-hant", wenben: "general.language.zhTW" },
] as const;

const xuanze = (jian: string) => {
  fugai.value = jian;
  dakai.value = false;
};
</script>

<template>
  <div class="bz">
    <div class="bz-chuangkou bz-cg">
      <div class="bz-cg-biaoti">{{ t("tab.general") }}</div>
      <div class="bz-cg-shuoming">{{ t("box.desc.general") }}</div>

      <div class="bz-kapian bz-cg-ka">
        <div class="bz-cg-katou">
          <span class="bz-cg-katubiao"><BzTubiao ming="languages" :daxiao="15" :cuxi="2" /></span>
          <span class="bz-cg-kawen">
            <span class="bz-cg-kaming">{{ t("general.language.title") }}</span>
            <span class="bz-cg-kashuo">{{ t("general.language.desc") }}</span>
          </span>
        </div>
        <div class="bz-cg-yuyanhang">
          <span class="bz-cg-hangming">{{ t("general.language.title") }}</span>
          <span class="bz-cg-xuan">
            <button type="button" class="bz-cg-chip" :class="{ 'bz-dakai': dakai, 'bz-gl': gaoliang === 'yuyan' }" @click="dakai = !dakai">
              <span>{{ t(yuyanlan.find((x) => x.jian === yuyan)?.wenben ?? "general.language.en") }}</span>
              <svg class="bz-cg-jian" viewBox="0 0 12 12" fill="none"><path d="M2.5 4.5L6 8L9.5 4.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /></svg>
              <span v-if="gaoliang === 'yuyan' && biaoji" class="bz-biaoji" style="top: -11px; right: -10px">{{ biaoji }}</span>
            </button>
            <span v-if="dakai" class="bz-cg-caidan">
              <button
                v-for="xiang in yuyanlan"
                :key="xiang.jian"
                type="button"
                class="bz-cg-xiang"
                :class="{ 'bz-xuan': xiang.jian === yuyan }"
                @click="xuanze(xiang.jian)"
              >
                <span>{{ t(xiang.wenben) }}</span>
                <svg v-if="xiang.jian === yuyan" class="bz-cg-gou" viewBox="0 0 12 12" fill="none"><path d="M10 3L4.5 8.5L2 6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /></svg>
              </button>
            </span>
          </span>
        </div>
      </div>

      <div class="bz-kapian bz-cg-ka">
        <div class="bz-cg-katou">
          <span class="bz-cg-katubiao"><BzTubiao ming="hard-drive" :daxiao="15" :cuxi="2" /></span>
          <span class="bz-cg-kawen">
            <span class="bz-cg-kaming">{{ t("general.dataManagement.title") }}</span>
            <span class="bz-cg-kashuo">{{ t("general.tabs.settingsDesc") }} · {{ t("general.tabs.chatsDesc") }}</span>
          </span>
        </div>
        <div class="bz-cg-zuwang">
          <div class="bz-cg-zu">
            <div class="bz-cg-zutou">
              <div class="bz-cg-zuming">{{ t("general.tabs.settings") }}</div>
              <div class="bz-cg-zushuo">{{ t("general.tabs.settingsDesc") }}</div>
            </div>
            <span class="bz-cg-dong"><span class="bz-cg-dongtu"><BzTubiao ming="upload" :daxiao="14" :cuxi="2.1" /></span><span class="bz-cg-dongming">{{ t("general.dataManagement.importSettings") }}</span><BzTubiao ming="chevron-right" :daxiao="14" /></span>
            <span class="bz-cg-dong"><span class="bz-cg-dongtu"><BzTubiao ming="download" :daxiao="14" :cuxi="2.1" /></span><span class="bz-cg-dongming">{{ t("general.dataManagement.exportSettings") }}</span><BzTubiao ming="chevron-right" :daxiao="14" /></span>
            <span class="bz-cg-dong bz-wei"><span class="bz-cg-dongtu"><BzTubiao ming="trash-2" :daxiao="14" :cuxi="2.1" /></span><span class="bz-cg-dongming">{{ t("general.resetSettings") }}</span><BzTubiao ming="chevron-right" :daxiao="14" /></span>
          </div>
          <div class="bz-cg-zu">
            <div class="bz-cg-zutou">
              <div class="bz-cg-zuming">{{ t("general.tabs.chats") }}</div>
              <div class="bz-cg-zushuo">{{ t("general.tabs.chatsDesc") }}</div>
            </div>
            <span class="bz-cg-dong"><span class="bz-cg-dongtu"><BzTubiao ming="upload" :daxiao="14" :cuxi="2.1" /></span><span class="bz-cg-dongming">{{ t("general.dataManagement.importChats") }}</span><BzTubiao ming="chevron-right" :daxiao="14" /></span>
            <span class="bz-cg-dong"><span class="bz-cg-dongtu"><BzTubiao ming="download" :daxiao="14" :cuxi="2.1" /></span><span class="bz-cg-dongming">{{ t("general.dataManagement.exportChats") }}</span><BzTubiao ming="chevron-right" :daxiao="14" /></span>
            <span class="bz-cg-dong bz-wei"><span class="bz-cg-dongtu"><BzTubiao ming="trash-2" :daxiao="14" :cuxi="2.1" /></span><span class="bz-cg-dongming">{{ t("general.resetChats") }}</span><BzTubiao ming="chevron-right" :daxiao="14" /></span>
          </div>
        </div>
      </div>

      <div class="bz-kapian bz-cg-ka">
        <div class="bz-cg-katou">
          <span class="bz-cg-katubiao"><BzTubiao ming="settings-2" :daxiao="15" :cuxi="2" /></span>
          <span class="bz-cg-kawen">
            <span class="bz-cg-kaming">{{ t("general.tabs.ide") }}</span>
            <span class="bz-cg-kashuo">{{ t("general.tabs.ideDesc") }}</span>
          </span>
        </div>
        <div class="bz-cg-ide">
          <span class="bz-cg-dong"><span class="bz-cg-dongtu"><BzTubiao ming="settings-2" :daxiao="14" :cuxi="2.1" /></span><span class="bz-cg-dongming">{{ t("general.ide.openSettings") }}</span><BzTubiao ming="chevron-right" :daxiao="14" /></span>
          <span class="bz-cg-dong"><span class="bz-cg-dongtu"><BzTubiao ming="keyboard" :daxiao="14" :cuxi="2.1" /></span><span class="bz-cg-dongming">{{ t("general.ide.keyboardShortcuts") }}</span><BzTubiao ming="chevron-right" :daxiao="14" /></span>
          <span class="bz-cg-dong"><span class="bz-cg-dongtu"><BzTubiao ming="palette" :daxiao="14" :cuxi="2.1" /></span><span class="bz-cg-dongming">{{ t("general.ide.colorTheme") }}</span><BzTubiao ming="chevron-right" :daxiao="14" /></span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.bz-cg {
  display: flex;
  flex-direction: column;
  gap: 14px;
  padding: 20px 24px 24px;
}

.bz-cg-biaoti {
  color: var(--bz-fg-1);
  font-size: 22px;
  font-weight: 650;
  letter-spacing: -0.4px;
  line-height: 1.2;
}

.bz-cg-shuoming {
  margin: -8px 0 6px;
  color: var(--bz-fg-3);
  font-size: 13px;
  line-height: 1.5;
}

.bz-cg-ka {
  display: flex;
  flex-direction: column;
  min-width: 0;
  padding: 16px 18px;
}

.bz-cg-katou {
  display: flex;
  align-items: center;
  gap: 12px;
}

.bz-cg-katubiao {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 34px;
  height: 34px;
  flex-shrink: 0;
  border-radius: 10px;
  color: var(--bz-fg-2);
}

.bz-cg-kawen {
  display: flex;
  flex-direction: column;
  flex: 1;
  min-width: 0;
}

.bz-cg-kaming {
  color: var(--bz-fg-1);
  font-size: 14px;
  font-weight: 650;
  letter-spacing: -0.1px;
  line-height: 1.25;
}

.bz-cg-kashuo {
  margin-top: 3px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: var(--bz-fg-3);
  font-size: 12.5px;
  font-weight: 500;
  line-height: 1.55;
}

.bz-cg-yuyanhang {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  margin-top: 6px;
  padding: 10px 0 2px;
}

.bz-cg-hangming {
  color: var(--bz-fg-1);
  font-size: 13px;
  font-weight: 600;
}

.bz-cg-xuan {
  position: relative;
  flex-shrink: 0;
}

.bz-cg-chip {
  position: relative;
  display: flex;
  align-items: center;
  gap: 6px;
  min-height: 26px;
  padding: 2px 10px;
  border-radius: 6px;
  font-size: 12px;
  color: var(--bz-fg-1);
  background: color-mix(in srgb, var(--bz-fg) 8%, transparent);
  border: 1px solid color-mix(in srgb, var(--bz-fg) 20%, transparent) !important;
}

.bz-cg-chip.bz-dakai {
  background: color-mix(in srgb, var(--bz-fg) 11%, transparent);
}

.bz-cg-jian {
  width: 12px;
  height: 12px;
  opacity: 0.7;
  transition: transform 150ms;
}

.bz-cg-chip.bz-dakai .bz-cg-jian {
  transform: rotate(180deg);
}

.bz-cg-caidan {
  position: absolute;
  top: calc(100% + 4px);
  right: 0;
  z-index: 6;
  display: flex;
  flex-direction: column;
  min-width: 100%;
  padding: 4px 0;
  border-radius: 6px;
  background: var(--bz-editor-bg);
  border: 1px solid color-mix(in srgb, var(--bz-fg) 14%, transparent);
  box-shadow: var(--bz-shadow);
}

.bz-cg-xiang {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  padding: 4px 12px;
  font-size: 12px;
  font-weight: 500;
  white-space: nowrap;
  text-align: left;
  color: var(--bz-fg-2);
}

.bz-cg-xiang:hover {
  background: color-mix(in srgb, var(--bz-button-bg) 14%, transparent);
}

.bz-cg-xiang.bz-xuan {
  color: var(--bz-fg-1);
}

.bz-cg-gou {
  width: 12px;
  height: 12px;
  opacity: 0.8;
}

.bz-cg-zuwang {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 280px), 1fr));
  gap: 12px;
  margin-top: 16px;
}

.bz-cg-zu {
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-width: 0;
  padding: 6px;
  border-radius: 12px;
  background: color-mix(in srgb, var(--bz-fg) 3.5%, transparent);
  border: 1px solid color-mix(in srgb, var(--bz-fg) 6%, transparent);
}

.bz-cg-zutou {
  padding: 8px 10px 6px;
}

.bz-cg-zuming {
  color: var(--bz-fg-1);
  font-size: 13px;
  font-weight: 650;
}

.bz-cg-zushuo {
  margin-top: 2px;
  color: var(--bz-fg-3);
  font-size: 12px;
  font-weight: 600;
  line-height: 1.5;
}

.bz-cg-dong {
  display: flex;
  align-items: center;
  gap: 12px;
  min-width: 0;
  padding: 9px 10px;
  border-radius: 10px;
  color: var(--bz-fg-1);
}

.bz-cg-dong > :deep(svg:last-child) {
  color: var(--bz-fg-3);
  opacity: 0.8;
}

.bz-cg-dong.bz-wei,
.bz-cg-dong.bz-wei > :deep(svg:last-child) {
  color: var(--bz-error);
}

.bz-cg-dongtu {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  flex-shrink: 0;
  border-radius: 9px;
  color: inherit;
}

.bz-cg-dong:not(.bz-wei) .bz-cg-dongtu {
  color: var(--bz-fg-2);
}

.bz-cg-dongming {
  flex: 1;
  min-width: 0;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-size: 12.5px;
  font-weight: 600;
  line-height: 1.35;
}

.bz-cg-ide {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 260px), 1fr));
  gap: 8px;
  margin-top: 14px;
}
</style>
