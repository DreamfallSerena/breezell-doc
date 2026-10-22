<script setup lang="ts">
import { computed, ref } from "vue";
import BzTubiao from "./BzTubiao.vue";
import { shiyongwenben } from "./shuju";

// 「規則、記憶與技能」面板（rules-memories-tsx/RulesMemories.tsx）：左側是「工作區」「全域」兩組，
// 每組都有 Rules / Memories / Skills / Commit；右側標頭顯示當前分頁與作用域，底部是對應檔案的路徑。
// 分頁名稱、「Rules, Memories & Skills」標題、Ctrl+Enter to save 等在 Breezell 裡本來就是英文。
// 左側導覽可以點選切換。
type fenye = "rules" | "memories" | "skills" | "xinjineng" | "commit";
const props = withDefaults(defineProps<{ fenye?: fenye; fanwei?: "workspace" | "global"; gaoliang?: string; biaoji?: string }>(), {
  fenye: "rules",
  fanwei: "workspace",
  gaoliang: "",
  biaoji: "",
});

const { t } = shiyongwenben();
const dangqian = ref<fenye>(props.fenye);
const zuoyongyu = ref(props.fanwei);

const daohang = [
  { tab: "rules", ming: "Rules", tubiao: "book-open" },
  { tab: "memories", ming: "Memories", tubiao: "brain" },
  { tab: "skills", ming: "Skills", tubiao: "zap" },
  { tab: "commit", ming: "Commit", tubiao: "git-commit-horizontal" },
] as const;
const zu = [
  { fanwei: "workspace", jian: "common.workspace", tubiao: "folder-open" },
  { fanwei: "global", jian: "common.global", tubiao: "globe-2" },
] as const;

const jiyi = [
  { riqi: "2026-10-18", id: "m-01", neirong: "The API server reads its port from PORT and defaults to 8080." },
  { riqi: "2026-10-20", id: "m-02", neirong: "Release notes are written in Traditional Chinese first, then English." },
  { riqi: "2026-10-21", id: "m-03", neirong: "Use pnpm, not npm, in this repository." },
];
const jineng = [
  { ming: "release-notes", shuoming: "Write release notes from merged changes in the project's changelog style" },
  { ming: "api-review", shuoming: "Review REST endpoint changes for breaking changes and missing tests" },
];
const shuliang = (tab: string) => (tab === "memories" ? jiyi.length : tab === "skills" ? jineng.length : undefined);
const xuanzhong = (tab: string, fanwei: string) =>
  zuoyongyu.value === fanwei && (dangqian.value === tab || (tab === "skills" && dangqian.value === "xinjineng"));
const xuan = (tab: (typeof daohang)[number]["tab"], fanwei: "workspace" | "global") => {
  dangqian.value = tab;
  zuoyongyu.value = fanwei;
};

const biaoti = computed(() =>
  dangqian.value === "rules" ? "Rules" : dangqian.value === "memories" ? "Memories" : dangqian.value === "commit" ? "Commit Message" : "Skills",
);
const biaotitubiao = computed(() =>
  dangqian.value === "rules" ? "book-open" : dangqian.value === "memories" ? "brain" : dangqian.value === "commit" ? "git-commit-horizontal" : "zap",
);
const lujing = computed(() => {
  const quan = zuoyongyu.value === "global";
  if (dangqian.value === "rules") return quan ? "~/.breezell/memories/global_rules.md" : "{workspace}/.breezell/rules/breezell.md";
  if (dangqian.value === "memories") return quan ? "~/.breezell/memories/global_memories.md" : "{workspace}/.breezell/memories/workspace_memories.md";
  if (dangqian.value === "commit") return quan ? "~/.breezell/memories/global_commit_prompt.md" : "{workspace}/.breezell/rules/commit_prompt.md";
  return quan ? "~/.breezell/skills/<name>/SKILL.md" : "{workspace}/.breezell/skills/<name>/SKILL.md";
});
</script>

<template>
  <div class="bz">
    <div class="bz-chuangkou bz-gz">
      <aside class="bz-gz-ce">
        <div class="bz-gz-biaoti">Rules, Memories &amp; Skills</div>
        <nav class="bz-gz-dao">
          <div v-for="(z, zuhao) in zu" :key="z.fanwei" class="bz-gz-zu">
            <div v-if="zuhao > 0" class="bz-gz-fen" />
            <div class="bz-gz-zutou"><BzTubiao :ming="z.tubiao" :daxiao="11" :cuxi="1.7" />{{ t(z.jian) }}</div>
            <button
              v-for="xiang in daohang"
              :key="xiang.tab"
              type="button"
              class="bz-gz-xiang"
              :class="{ 'bz-xuan': xuanzhong(xiang.tab, z.fanwei), 'bz-gl': gaoliang === `${z.fanwei}-${xiang.tab}` }"
              @click="xuan(xiang.tab, z.fanwei)"
            >
              <span class="bz-gz-xiang-zuo"><BzTubiao :ming="xiang.tubiao" :daxiao="15" :cuxi="1.55" />{{ xiang.ming }}</span>
              <span v-if="shuliang(xiang.tab) !== undefined" class="bz-gz-shu">{{ shuliang(xiang.tab) }}</span>
              <span v-if="gaoliang === `${z.fanwei}-${xiang.tab}` && biaoji" class="bz-biaoji" style="top: -9px; right: -8px">{{ biaoji }}</span>
            </button>
          </div>
        </nav>
      </aside>
      <main class="bz-gz-zhu">
        <header class="bz-gz-tou">
          <span class="bz-gz-tou-zuo">
            <BzTubiao :ming="biaotitubiao" :daxiao="17" :cuxi="1.6" />
            <span class="bz-gz-tou-ming">{{ biaoti }}</span>
            <span class="bz-gz-zuoyong">{{ t(zuoyongyu === "workspace" ? "common.workspace" : "common.global") }}</span>
          </span>
          <span class="bz-gz-tou-you">
            <span v-if="dangqian !== 'skills' && dangqian !== 'xinjineng'" class="bz-gz-qingchu"><BzTubiao ming="trash-2" :daxiao="12" />{{ t("rulesMemories.clear") }}</span>
            <span class="bz-gz-guan"><BzTubiao ming="x" :daxiao="14" :cuxi="2.8" /></span>
          </span>
        </header>
        <div class="bz-gz-nei">
          <div v-if="dangqian === 'rules'" class="bz-gz-bianji bz-mono">
            <div><span class="bz-gz-md-biao"># Project rules</span></div>
            <div>- Use TypeScript strict mode. Do not add <span class="bz-gz-md-dai">any</span>.</div>
            <div>- Run <span class="bz-gz-md-dai">`pnpm test`</span> after changing files under src/.</div>
            <div>- Keep public API names unchanged unless I ask.</div>
            <div>- Answer in Traditional Chinese; keep code and identifiers in English.</div>
          </div>
          <div v-else-if="dangqian === 'commit'" class="bz-gz-commit">
            <div class="bz-gz-tishi">{{ t("rulesMemories.commitPromptHint") }}</div>
            <div class="bz-gz-bianji bz-mono">
              <div>Write the subject in English, imperative mood, at most 72 characters.</div>
              <div>Start with a type: feat, fix, docs, refactor, test or chore.</div>
              <div>Add a short body only when the change needs explaining.</div>
            </div>
          </div>
          <div v-else-if="dangqian === 'memories'" class="bz-gz-jiyi">
            <div v-for="xiang in jiyi" :key="xiang.id" class="bz-gz-ka">
              <div class="bz-gz-ka-tou"><span class="bz-gz-riqi">{{ xiang.riqi }}</span><span class="bz-mono bz-gz-id">{{ xiang.id }}</span></div>
              <div class="bz-mono bz-gz-ka-nei">{{ xiang.neirong }}</div>
            </div>
            <div class="bz-gz-tianjia" :class="{ 'bz-gl': gaoliang === 'tianjiajiyi' }">
              <BzTubiao ming="plus" :daxiao="12" />{{ t("rulesMemories.addMemory") }}
              <span v-if="gaoliang === 'tianjiajiyi' && biaoji" class="bz-biaoji" style="top: -9px; right: -8px">{{ biaoji }}</span>
            </div>
          </div>
          <div v-else-if="dangqian === 'skills'" class="bz-gz-jineng">
            <div class="bz-gz-tuofang">{{ t("skills.dropZipPrompt") }}</div>
            <div class="bz-gz-jineng-tou">
              <span>{{ jineng.length }} {{ t("skills.skillCountPlural") }}</span>
              <button type="button" class="bz-gz-xinjian" :class="{ 'bz-gl': gaoliang === 'xinjineng' }" @click="dangqian = 'xinjineng'">
                <BzTubiao ming="plus" :daxiao="12" />{{ t("skills.newSkill") }}
                <span v-if="gaoliang === 'xinjineng' && biaoji" class="bz-biaoji" style="top: -9px; right: -8px">{{ biaoji }}</span>
              </button>
            </div>
            <div v-for="j in jineng" :key="j.ming" class="bz-gz-jineng-hang">
              <div class="bz-gz-jineng-ming"><BzTubiao ming="zap" :daxiao="12" />@{{ j.ming }}</div>
              <div class="bz-gz-jineng-shuo">{{ j.shuoming }}</div>
            </div>
          </div>
          <div v-else class="bz-gz-xin">
            <div class="bz-gz-xin-tou">
              <span>{{ t("skills.createNewSkill") }}</span>
              <span class="bz-gz-xin-guan"><BzTubiao ming="x" :daxiao="14" /></span>
            </div>
            <input class="bz-gz-shuru" value="release-notes" :placeholder="t('skills.skillNamePlaceholder')" readonly />
            <input class="bz-gz-shuru" :placeholder="t('skills.skillDescriptionPlaceholder')" readonly />
            <div class="bz-gz-bianji bz-mono bz-gz-xin-bianji">
              <div class="bz-gz-md-biao"># Release notes</div>
              <div>1. Read the merged changes since the last tag.</div>
              <div>2. Group them under Features, Fixes and Other.</div>
              <div>3. One line per change, user-facing wording.</div>
            </div>
            <span class="bz-gz-chuangjian">{{ t("skills.createSkill") }}</span>
          </div>
        </div>
        <footer class="bz-gz-di bz-mono">{{ lujing }}</footer>
      </main>
    </div>
  </div>
</template>

<style scoped>
.bz-gz {
  display: flex;
  height: 440px;
  border-radius: 12px;
  background: var(--bz-editor-bg);
  container-type: inline-size;
}

.bz-gz-ce {
  display: flex;
  flex-direction: column;
  width: 220px;
  flex-shrink: 0;
  padding: 12px;
  background: color-mix(in srgb, var(--bz-sidebar-bg) 92%, var(--bz-fg) 2%);
  border-right: 1px solid color-mix(in srgb, var(--bz-fg) 10%, transparent);
}

.bz-gz-biaoti {
  margin-bottom: 16px;
  padding: 8px;
  color: var(--bz-fg-1);
  font-size: 13px;
  font-weight: 600;
  line-height: 20px;
}

.bz-gz-dao {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.bz-gz-zu {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.bz-gz-fen {
  height: 1px;
  margin: 0 10px 12px;
  background: color-mix(in srgb, var(--bz-fg) 10%, transparent);
}

.bz-gz-zutou {
  display: flex;
  align-items: center;
  gap: 6px;
  margin-bottom: 4px;
  padding: 0 10px;
  font-size: 10px;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: color-mix(in srgb, var(--bz-fg-3) 60%, transparent);
}

.bz-gz-xiang {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 10px;
  border-radius: 6px;
  font-size: 12px;
  font-weight: 600;
  color: var(--bz-fg-3);
}

.bz-gz-xiang:hover {
  color: var(--bz-fg-1);
}

.bz-gz-xiang.bz-xuan {
  color: var(--bz-fg-1);
  background: color-mix(in srgb, var(--bz-button-bg) 12%, transparent);
}

.bz-gz-xiang-zuo {
  display: flex;
  align-items: center;
  gap: 10px;
}

.bz-gz-shu {
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 20px;
  height: 20px;
  padding: 0 6px;
  border-radius: 999px;
  font-size: 10px;
  font-weight: 600;
  color: var(--bz-button-bg);
  background: color-mix(in srgb, var(--bz-button-bg) 12%, transparent);
}

.bz-gz-zhu {
  display: flex;
  flex-direction: column;
  flex: 1;
  min-width: 0;
}

.bz-gz-tou {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 56px;
  flex-shrink: 0;
  padding: 0 20px;
  border-bottom: 1px solid color-mix(in srgb, var(--bz-fg) 9%, transparent);
}

.bz-gz-tou-zuo {
  display: flex;
  align-items: center;
  gap: 10px;
  min-width: 0;
  color: var(--bz-fg-2);
}

.bz-gz-tou-ming {
  color: var(--bz-fg-1);
  font-size: 14px;
  font-weight: 600;
}

.bz-gz-zuoyong {
  padding: 2px 6px;
  border-radius: 4px;
  font-size: 10px;
  font-weight: 600;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: var(--bz-fg-3);
  border: 1px solid color-mix(in srgb, var(--bz-fg) 10%, transparent);
}

.bz-gz-tou-you {
  display: flex;
  align-items: center;
  gap: 8px;
}

.bz-gz-qingchu {
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 4px 8px;
  font-size: 12px;
  font-weight: 600;
  color: var(--bz-fg-3);
}

.bz-gz-guan {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 26px;
  height: 26px;
  border-radius: 50%;
  opacity: 0.75;
  background: color-mix(in srgb, var(--bz-fg) 14%, transparent);
}

.bz-gz-nei {
  flex: 1;
  min-height: 0;
  overflow: hidden;
  padding: 16px 24px;
}

.bz-gz-bianji {
  height: 100%;
  padding: 12px 14px;
  border-radius: 8px;
  font-size: 12.5px;
  line-height: 1.7;
  color: var(--bz-editor-fg);
  border: 1px solid color-mix(in srgb, var(--bz-fg) 10%, transparent);
  overflow: hidden;
}

.bz-gz-md-biao {
  color: #569cd6;
  font-weight: 700;
}

.bz-gz-md-dai {
  color: #ce9178;
}

:root:not(.dark) .bz-gz-md-biao { color: #0451a5; }
:root:not(.dark) .bz-gz-md-dai { color: #a31515; }

.bz-gz-commit {
  display: flex;
  flex-direction: column;
  gap: 8px;
  height: 100%;
}

.bz-gz-commit .bz-gz-bianji {
  flex: 1;
  height: auto;
}

.bz-gz-tishi {
  padding: 0 4px;
  font-size: 11px;
  font-weight: 600;
  line-height: 1.6;
  color: var(--bz-fg-3);
}

.bz-gz-jiyi {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.bz-gz-ka {
  padding: 12px 14px;
  border-radius: 8px;
  background: color-mix(in srgb, var(--bz-fg) 4%, transparent);
}

.bz-gz-ka-tou {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 6px;
}

.bz-gz-riqi {
  font-size: 11px;
  font-weight: 600;
  color: var(--bz-fg-2);
}

.bz-gz-id {
  font-size: 10px;
  font-weight: 600;
  color: color-mix(in srgb, var(--bz-fg-3) 50%, transparent);
}

.bz-gz-ka-nei {
  font-size: 13px;
  line-height: 1.6;
  color: var(--bz-fg-1);
}

.bz-gz-tianjia {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  padding: 10px 0;
  border-radius: 8px;
  font-size: 11px;
  font-weight: 600;
  color: var(--bz-fg-3);
  border: 1px dashed color-mix(in srgb, var(--bz-fg) 14%, transparent);
}

.bz-gz-jineng {
  display: flex;
  flex-direction: column;
}

.bz-gz-tuofang {
  margin-bottom: 8px;
  font-size: 11px;
  font-weight: 600;
  color: color-mix(in srgb, var(--bz-fg-3) 70%, transparent);
}

.bz-gz-jineng-tou {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 12px;
  font-size: 11px;
  font-weight: 600;
  color: var(--bz-fg-3);
}

.bz-gz-xinjian {
  position: relative;
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 4px 8px;
  border-radius: 2px;
  font-size: 11px;
  font-weight: 600;
  color: var(--bz-fg-3);
}

.bz-gz-jineng-hang {
  padding: 10px 12px;
  border-radius: 6px;
}

.bz-gz-jineng-hang:hover {
  background: color-mix(in srgb, var(--bz-fg) 5%, transparent);
}

.bz-gz-jineng-ming {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 13px;
  font-weight: 600;
  color: var(--bz-fg-1);
}

.bz-gz-jineng-ming :deep(svg) {
  color: rgba(168, 85, 247, 0.7);
}

.bz-gz-jineng-shuo {
  margin-top: 2px;
  padding-left: 20px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-size: 11px;
  font-weight: 600;
  color: var(--bz-fg-3);
}

.bz-gz-xin {
  display: flex;
  flex-direction: column;
  gap: 12px;
  height: 100%;
}

.bz-gz-xin-tou {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 13px;
  font-weight: 600;
  color: var(--bz-fg-1);
}

.bz-gz-xin-guan {
  display: flex;
  color: var(--bz-fg-3);
}

.bz-gz-shuru {
  width: 100%;
  padding: 8px 12px;
  border-radius: 6px;
  font-size: 13px;
  color: var(--bz-fg-1);
  background: transparent;
  border: 1px solid color-mix(in srgb, var(--bz-fg) 10%, transparent);
}

.bz-gz-xin-bianji {
  flex: 1;
  height: auto;
  min-height: 90px;
}

.bz-gz-chuangjian {
  padding: 6px 16px;
  border-radius: 6px;
  text-align: center;
  font-size: 13px;
  font-weight: 600;
  color: var(--bz-button-fg);
  background: var(--bz-button-bg);
}

.bz-gz-di {
  flex-shrink: 0;
  padding: 8px 24px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-size: 10px;
  font-weight: 600;
  color: color-mix(in srgb, var(--bz-fg-3) 40%, transparent);
  border-top: 1px solid color-mix(in srgb, var(--bz-fg) 6%, transparent);
}

@container (max-width: 560px) {
  .bz-gz {
    flex-direction: column;
    height: auto;
  }

  .bz-gz-ce {
    width: auto;
    border-right: none;
    border-bottom: 1px solid color-mix(in srgb, var(--bz-fg) 10%, transparent);
  }

  .bz-gz-dao {
    flex-direction: row;
    gap: 8px;
  }

  .bz-gz-zu {
    flex: 1;
    min-width: 0;
  }

  .bz-gz-fen {
    display: none;
  }

  .bz-gz-nei {
    min-height: 280px;
  }
}
</style>
