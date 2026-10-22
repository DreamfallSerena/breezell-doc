<script setup lang="ts">
import { computed, ref } from "vue";
import BzTubiao from "./BzTubiao.vue";
import { shiyongwenben } from "./shuju";
import shilibiao from "./jiyishili.json";

// Box ▸ 超級記憶的四個頁面（BoxMemoryPage.tsx）：
// zonglan     記憶總覽（MemoryOverview：記憶循環示意圖、四張統計卡、組成、優先級、新鮮度、專案知識健康、存取頻率、即將過期）
// ku          記憶庫（MemoryLibrary：搜尋、P0/P1/P2、類型、Active/Dormant 篩選，可展開的記憶列）
// shangxiawen 上下文注入（MemoryContext：本輪注入快照、下一輪的記憶索引、對話輪次）
// weihu       預算與維護（MemoryMaintenance：活躍預算、常駐配額、維護動作、匯入匯出）
// suoding     沒有超級記憶權益時的鎖定卡（GateCard）
// 示意資料在 jiyishili.json，按頁面語言取用；記憶列可以展開、改優先級、設為常駐。
type youxian = "P0" | "P1" | "P2";
type leixing = "memory" | "skill" | "experience" | "trajectory" | "resource";
type jiyi = {
  id: string;
  lei: leixing;
  youxian: youxian;
  changzhu?: boolean;
  xin?: boolean;
  tisheng?: boolean;
  xiumian?: boolean;
  bianji?: string;
  biaoti: string;
  biaoqian: string[];
  l1: string;
  yuanyin: string;
  l2: string;
  laiyuan: string;
  shijian: string;
  queren: number;
  fangwen: number;
  guoqi?: number;
};
type shili = {
  jiyi: jiyi[];
  lunci: { xuhao: number; yulan: string; zhuangtai: string; shijian: string; huifu: number; wenjian: number }[];
  suoyin: { fenlei: string; tiao: { youxian: youxian; wen: string; biaoqian: string[]; shijian: string }[] }[];
};

const props = withDefaults(
  defineProps<{ ye?: string; qianru?: boolean; yetou?: boolean; gaoliang?: string; biaoji?: string; zhankai?: string; wanzheng?: string }>(),
  { ye: "zonglan", qianru: false, yetou: false, gaoliang: "", biaoji: "", zhankai: "m2", wanzheng: "" },
);

const { t, tihuan, yuyan } = shiyongwenben();
const shuju = computed(() => ((shilibiao as Record<string, shili>)[yuyan.value] ?? (shilibiao as Record<string, shili>).en) as shili);

const yemian: Record<string, { biao: string; shuo: string }> = {
  zonglan: { biao: "box.memory.overview", shuo: "box.memory.overviewDesc" },
  ku: { biao: "box.memory.library", shuo: "box.memory.libraryDesc" },
  shangxiawen: { biao: "box.memory.context", shuo: "box.memory.contextDesc" },
  weihu: { biao: "box.memory.maintenance", shuo: "box.memory.maintenanceDesc" },
  suoding: { biao: "box.memory.overview", shuo: "box.memory.overviewDesc" },
};

// ---------- 顏色與標籤（與源碼一致） ----------
const youxianse: Record<youxian, string> = { P0: "#bc8cff", P1: "#58a6ff", P2: "var(--bz-fg-3)" };
const leise: Record<leixing, string> = { memory: "#58a6ff", skill: "#3fb950", experience: "#d29922", trajectory: "#db6d28", resource: "#bc8cff" };
const leijian: Record<leixing, string> = {
  memory: "superMemory.catMemory",
  skill: "superMemory.catSkill",
  experience: "superMemory.catExperience",
  trajectory: "superMemory.catTrajectory",
  resource: "superMemory.catResource",
};
const leixingliebiao: leixing[] = ["memory", "skill", "experience", "trajectory", "resource"];
const CHANGZHU_SHANGXIAN = 12;

// 相對時間：示意資料寫成 5m / 2h / 3d / 40d。
const xiangdui = (s: string) => {
  const m = /^(\d+)([mhd])$/.exec(s);
  if (!m) return s;
  const n = Number(m[1]);
  if (m[2] === "m") return tihuan("box.memory.minutesAgo" as never, n);
  if (m[2] === "h") return tihuan("box.memory.hoursAgo" as never, n);
  if (n < 30) return tihuan("superMemory.daysAgo" as never, n);
  return "2026-09-12";
};
const biaotiwen = (j: jiyi) => (j.bianji ? `${t(`superMemory.editAction.${j.bianji}` as never)} ${j.biaoti}` : j.biaoti);

// ---------- 總覽的示意數字 ----------
const shuliang = { zong: 48, huoyue: 41, xiumian: 7, changzhu: 1, memory: 14, skill: 9, experience: 6, trajectory: 8, resource: 11, p0: 1, p1: 27, p2: 20 };
const zucheng = computed(() => leixingliebiao.map((l) => ({ l, zhi: shuliang[l] })));
const zuchengzong = computed(() => zucheng.value.reduce((s, x) => s + x.zhi, 0));
const xinxian = [
  { jian: "superMemory.freshIn24h", zhi: 6 },
  { jian: "superMemory.freshIn7d", zhi: 15 },
  { jian: "superMemory.freshIn30d", zhi: 21 },
  { jian: "superMemory.freshOlder", zhi: 6 },
];
const jiankang = [
  { jian: "superMemory.compilerVersion", zhi: "pk-3", jing: false },
  { jian: "superMemory.sourceRevision", zhi: "a3f9c2e81b04", jing: false },
  { jian: "superMemory.staleResources", zhi: "0", jing: false },
  { jian: "superMemory.failedCompiles", zhi: "0", jing: false },
  { jian: "superMemory.verifiedAndCorrected", zhi: "12 / 1", jing: false },
];
const zhishilei = [
  { jian: "superMemory.projectKind.overview", n: 1 },
  { jian: "superMemory.projectKind.entry_point", n: 3 },
  { jian: "superMemory.projectKind.command_config", n: 4 },
  { jian: "superMemory.projectKind.dependency", n: 6 },
  { jian: "superMemory.projectKind.module_owner", n: 5 },
];

// ---------- 記憶庫的互動狀態 ----------
const jiyilie = ref<jiyi[]>([]);
const chushihua = () => {
  jiyilie.value = shuju.value.jiyi.map((j) => ({ ...j }));
};
chushihua();
const youxianshaixuan = ref<"all" | youxian>("all");
const leishaixuan = ref<"all" | leixing>("all");
const shengming = ref<"active" | "dormant">("active");
const zhankaiji = ref(new Set<string>(props.zhankai ? [props.zhankai] : []));
const wanzhengji = ref(new Set<string>(props.wanzheng ? [props.wanzheng] : []));
const xuanqi = ref<string | null>(null);
const tishi = ref("");

const changzhushu = computed(() => jiyilie.value.filter((j) => j.changzhu).length);
const kejian = computed(() => {
  const shunxu: Record<youxian, number> = { P0: 0, P1: 1, P2: 2 };
  return jiyilie.value
    .filter((j) => (shengming.value === "dormant" ? j.xiumian : !j.xiumian))
    .filter((j) => youxianshaixuan.value === "all" || j.youxian === youxianshaixuan.value)
    .filter((j) => leishaixuan.value === "all" || j.lei === leishaixuan.value)
    .sort((a, b) => shunxu[a.youxian] - shunxu[b.youxian]);
});
const qiehuan = (ji: { value: Set<string> }, id: string) => {
  const xin = new Set(ji.value);
  if (xin.has(id)) xin.delete(id);
  else xin.add(id);
  ji.value = xin;
};
const sheyouxian = (j: jiyi, p: youxian) => {
  if (j.changzhu && p !== "P0") return;
  j.youxian = p;
  j.tisheng = false;
  xuanqi.value = null;
};
const qiehuanchangzhu = (j: jiyi) => {
  if (!j.changzhu && changzhushu.value >= CHANGZHU_SHANGXIAN) {
    tishi.value = t("superMemory.residentLimitReached" as never);
    return;
  }
  j.changzhu = !j.changzhu;
  if (j.changzhu) {
    (j as jiyi & { qian?: youxian }).qian = j.youxian;
    j.youxian = "P0";
  } else {
    j.youxian = (j as jiyi & { qian?: youxian }).qian ?? "P1";
  }
};
const youxianmingcheng: Record<youxian, string> = { P0: "superMemory.p0Permanent", P1: "superMemory.p190Days", P2: "superMemory.p230Days" };
const shuliangyouxian = computed(() => ({
  P0: jiyilie.value.filter((j) => !j.xiumian && j.youxian === "P0").length,
  P1: jiyilie.value.filter((j) => !j.xiumian && j.youxian === "P1").length,
  P2: jiyilie.value.filter((j) => !j.xiumian && j.youxian === "P2").length,
}));

// ---------- 上下文頁 ----------
const zhurutiao = computed(() => {
  const lie = shuju.value.jiyi;
  return [
    { j: lie[0], lei: "memory", fanwei: "global", ceng: "L1", fen: "high" },
    { j: lie[1], lei: "skill", fanwei: "workspace", ceng: "L1", fen: "high" },
    { j: lie[2], lei: "experience", fanwei: "workspace", ceng: "L0", fen: "medium" },
  ];
});
const xuanlunci = ref(3);
</script>

<template>
  <div :class="{ bz: !qianru }">
    <div class="bz-jy" :class="{ 'bz-chuangkou': !qianru, 'bz-jy-qianru': qianru }">
      <div v-if="yetou && ye !== 'ku'" class="bz-jy-yetou">
        <div class="bz-jy-yebiao">{{ t(yemian[ye].biao as never) }}</div>
        <div class="bz-jy-yeshuo">{{ t(yemian[ye].shuo as never) }}</div>
      </div>

      <!-- ===== 鎖定 ===== -->
      <div v-if="ye === 'suoding'" class="bz-jy-ka bz-jy-suo">
        <span class="bz-jy-suotu"><BzTubiao ming="lock" :daxiao="20" :cuxi="2" /></span>
        <div class="bz-jy-suobiao">{{ t("superMemory.proRequired") }}</div>
        <div class="bz-jy-suoshuo">{{ t("superMemory.availablePlans") }}</div>
      </div>

      <!-- ===== 總覽 ===== -->
      <template v-else-if="ye === 'zonglan'">
        <div class="bz-jy-ka bz-jy-liu" :class="{ 'bz-gl': gaoliang === 'liucheng' }">
          <span v-if="gaoliang === 'liucheng' && biaoji" class="bz-biaoji" style="top: -10px; right: -8px">{{ biaoji }}</span>
          <svg viewBox="0 0 1100 400" width="100%" role="img" :aria-label="t('box.memory.flowTitle')">
            <g v-for="(xian, i) in ['M230 200 H320', 'M540 200 H630', 'M760 128 V90 H130 V128', 'M760 322 V272', 'M630 250 H560 V330 H130 V272']" :key="i">
              <path :d="xian" fill="none" class="bz-jy-xian-di" stroke-width="1.25" />
              <path :d="xian" fill="none" class="bz-jy-xian-dong" stroke-width="1.5" stroke-linecap="round" :style="{ animationDelay: `${[0, 500, 1000, 1500, 800][i]}ms` }" />
            </g>
            <text x="275" y="190" class="bz-jy-liubiao" text-anchor="middle">{{ t("box.memory.flow.labelExtract").toUpperCase() }}</text>
            <text x="585" y="190" class="bz-jy-liubiao" text-anchor="middle">{{ t("box.memory.flow.labelWrite").toUpperCase() }}</text>
            <text x="445" y="80" class="bz-jy-liubiao" text-anchor="middle">{{ t("box.memory.flow.labelInject").toUpperCase() }}</text>
            <text x="776" y="301" class="bz-jy-liubiao" text-anchor="start">{{ t("box.memory.flow.labelCompile").toUpperCase() }}</text>
            <text x="345" y="322" class="bz-jy-liubiao" text-anchor="middle">{{ t("box.memory.flow.labelRecall").toUpperCase() }}</text>
            <g v-for="jd in [
              { x: 30, y: 128, w: 200, h: 144, biao: 'box.memory.flow.conversation', hang: [t('box.memory.flow.conversationSub1'), t('box.memory.flow.conversationSub2')], zhi: '3', zhong: false },
              { x: 320, y: 128, w: 220, h: 144, biao: 'box.memory.flow.extract', hang: [t('box.memory.flow.extractSub1'), t('box.memory.flow.extractSub2')], zhi: '', zhong: false },
              { x: 630, y: 128, w: 260, h: 144, biao: 'box.memory.flow.store', hang: [tihuan('box.memory.flow.storeSub1' as never, shuliang.huoyue, shuliang.xiumian), tihuan('box.memory.flow.storeSub2' as never, shuliang.changzhu, CHANGZHU_SHANGXIAN)], zhi: String(shuliang.zong), zhong: true },
              { x: 630, y: 322, w: 260, h: 68, biao: 'box.memory.flow.project', hang: [tihuan('box.memory.flow.projectSub' as never, 19)], zhi: '', zhong: false },
            ]" :key="jd.biao">
              <rect :x="jd.x" :y="jd.y" :width="jd.w" :height="jd.h" rx="14" class="bz-jy-jiedian" :class="{ 'bz-jy-zhong': jd.zhong }" stroke-width="1.25" />
              <foreignObject :x="jd.x" :y="jd.y" :width="jd.w" :height="jd.h">
                <div class="bz-jy-jd-nei">
                  <div class="bz-jy-jd-tou">
                    <div class="bz-jy-jd-biao">{{ t(jd.biao as never) }}</div>
                    <div v-if="jd.zhi" class="bz-jy-jd-zhi">{{ jd.zhi }}</div>
                  </div>
                  <div v-for="h in jd.hang" :key="h" class="bz-jy-jd-hang">{{ h }}</div>
                </div>
              </foreignObject>
            </g>
            <g class="bz-jy-maidong">
              <rect x="920" y="110" width="150" height="180" rx="14" fill="transparent" class="bz-jy-xukuang" stroke-dasharray="3 5" />
              <foreignObject x="920" y="110" width="150" height="180">
                <div class="bz-jy-zhonglei">
                  <div class="bz-jy-zhonglei-biao">{{ t("box.memory.flow.kindsTitle").toUpperCase() }}</div>
                  <div v-for="l in leixingliebiao" :key="l" class="bz-jy-zhonglei-hang">
                    <span><i :style="{ background: leise[l] }" />{{ t(leijian[l] as never) }}</span>
                    <span class="bz-jy-ruo">{{ shuliang[l] }}</span>
                  </div>
                </div>
              </foreignObject>
            </g>
          </svg>
        </div>

        <div class="bz-jy-tongji">
          <div v-for="k in [
            { biao: 'box.memory.totalMemories', tu: 'brain', zhi: String(shuliang.zong), ci: tihuan('box.memory.totalSub' as never, shuliang.huoyue, shuliang.xiumian) },
            { biao: 'box.memory.resident', tu: 'pin', zhi: `${shuliang.changzhu} / ${CHANGZHU_SHANGXIAN}`, ci: t('box.memory.residentSub') },
            { biao: 'superMemory.tokenSavings', tu: 'zap', zhi: '−82%', ci: tihuan('box.memory.savingsSub' as never, '1.9K', '10.6K') },
            { biao: 'box.memory.latestInjection', tu: 'message-square', zhi: '3', ci: tihuan('box.memory.latestInjectionSub' as never, '410') },
          ]" :key="k.biao" class="bz-jy-ka bz-jy-tongka" :class="{ 'bz-gl': gaoliang === k.biao }">
            <span v-if="gaoliang === k.biao && biaoji" class="bz-biaoji" style="top: -10px; right: -8px">{{ biaoji }}</span>
            <div class="bz-jy-tongka-tou"><span>{{ t(k.biao as never) }}</span><BzTubiao :ming="k.tu" :daxiao="12" :cuxi="2.2" /></div>
            <div class="bz-jy-tongka-zhi">{{ k.zhi }}</div>
            <div class="bz-jy-tongka-ci">{{ k.ci }}</div>
          </div>
        </div>

        <div class="bz-jy-shuang">
          <div class="bz-jy-ka bz-jy-pad">
            <div class="bz-jy-kabiao"><span>{{ t("box.memory.composition") }}</span><span class="bz-jy-dushu">{{ tihuan("superMemory.ofTotal" as never, shuliang.zong) }}</span></div>
            <div class="bz-jy-duidie">
              <i v-for="x in zucheng" :key="x.l" :style="{ width: `${(x.zhi / zuchengzong) * 100}%`, background: leise[x.l] }" />
            </div>
            <div class="bz-jy-tuli">
              <div v-for="x in zucheng" :key="x.l" class="bz-jy-tuli-xiang">
                <i :style="{ background: leise[x.l] }" />
                <div>
                  <div class="bz-jy-tuli-ming">{{ t(leijian[x.l] as never) }} · {{ Math.round((x.zhi / zuchengzong) * 100) }}%</div>
                  <div class="bz-jy-tuli-zhi">{{ x.zhi }}</div>
                </div>
              </div>
            </div>
          </div>
          <div class="bz-jy-ka bz-jy-pad">
            <div class="bz-jy-kabiao"><span>{{ t("superMemory.priorityDist") }}</span></div>
            <div v-for="p in (['P0', 'P1', 'P2'] as youxian[])" :key="p" class="bz-jy-tiao">
              <span class="bz-jy-tiao-ming">{{ t((p === 'P0' ? 'superMemory.p0Label' : p === 'P1' ? 'superMemory.p1Label' : 'superMemory.p2Label') as never) }}</span>
              <span class="bz-jy-tiao-zhi">{{ shuliang[p.toLowerCase() as 'p0'] }}</span>
              <div class="bz-jy-tiao-gui"><i :style="{ width: `${Math.max(2, Math.round((shuliang[p.toLowerCase() as 'p0'] / 27) * 100))}%`, background: youxianse[p] }" /></div>
            </div>
            <div class="bz-jy-xiaobiao">{{ t("superMemory.freshnessPulse") }}</div>
            <div class="bz-jy-sige">
              <div v-for="x in xinxian" :key="x.jian" class="bz-jy-pian">
                <div class="bz-jy-pian-zhi">{{ x.zhi }}</div>
                <div class="bz-jy-pian-ming">{{ t(x.jian as never) }}</div>
              </div>
            </div>
          </div>
        </div>

        <div class="bz-jy-shuang">
          <div class="bz-jy-ka bz-jy-pad">
            <div class="bz-jy-kabiao"><span>{{ t("superMemory.projectKnowledgeHealth") }}</span><span class="bz-jy-dushu">{{ tihuan("box.memory.compiledAgo" as never, xiangdui("2h")) }}</span></div>
            <div class="bz-jy-pianzu">
              <div v-for="x in jiankang" :key="x.jian" class="bz-jy-pian">
                <div class="bz-jy-pian-zhi bz-jy-pian-xiao">{{ x.zhi }}</div>
                <div class="bz-jy-pian-ming">{{ t(x.jian as never) }}</div>
              </div>
            </div>
            <div class="bz-jy-chips">
              <span v-for="x in zhishilei" :key="x.jian">{{ t(x.jian as never) }} · {{ x.n }}</span>
            </div>
          </div>
          <div class="bz-jy-lie2">
            <div class="bz-jy-ka bz-jy-pad">
              <div class="bz-jy-kabiao"><span>{{ t("superMemory.accessFreq") }}</span></div>
              <div v-for="j in [...shuju.jiyi].sort((a, b) => b.fangwen - a.fangwen).slice(0, 4)" :key="j.id" class="bz-jy-tiao">
                <span class="bz-jy-tiao-ming">{{ biaotiwen(j) }}</span>
                <span class="bz-jy-tiao-zhi">{{ j.fangwen }}×</span>
                <div class="bz-jy-tiao-gui"><i :style="{ width: `${Math.max(2, Math.round((j.fangwen / 26) * 100))}%` }" /></div>
              </div>
            </div>
            <div class="bz-jy-ka bz-jy-pad">
              <div class="bz-jy-kabiao"><span>{{ t("superMemory.expiringSoon") }}</span><span class="bz-jy-dushu">2</span></div>
              <div v-for="j in shuju.jiyi.filter((x) => x.youxian === 'P2' && !x.xiumian).slice(0, 2)" :key="j.id" class="bz-jy-guoqi">
                <span class="bz-jy-guoqi-tian">{{ j.guoqi === 7 ? 5 : 3 }}d</span>
                <span class="bz-jy-guoqi-ming">{{ biaotiwen(j) }}</span>
                <span class="bz-jy-pchip" :style="{ '--se': youxianse[j.youxian] }">{{ j.youxian }}</span>
              </div>
            </div>
          </div>
        </div>
        <div class="bz-jy-yusuan">{{ tihuan("box.memory.budgetLine" as never, t("box.memory.projectSize.medium"), 12, 40, 7, 25, 5, 20) }}</div>
      </template>

      <!-- ===== 記憶庫 ===== -->
      <template v-else-if="ye === 'ku'">
        <div v-if="yetou" class="bz-jy-yetou">
          <div class="bz-jy-yebiao">{{ t("box.memory.library") }}</div>
          <div class="bz-jy-yeshuo">{{ t("box.memory.libraryDesc") }}</div>
        </div>
        <div class="bz-jy-shaixuan">
          <label class="bz-jy-sou">
            <BzTubiao ming="search" :daxiao="13" :cuxi="2.3" />
            <span>{{ t("superMemory.searchPlaceholder") }}</span>
          </label>
          <div class="bz-jy-fenduan" :class="{ 'bz-gl': gaoliang === 'youxian' }">
            <button type="button" :class="{ 'bz-xuan': youxianshaixuan === 'all' }" @click="youxianshaixuan = 'all'">{{ t("superMemory.filterAll") }}</button>
            <button v-for="p in (['P0', 'P1', 'P2'] as youxian[])" :key="p" type="button" :class="{ 'bz-xuan': youxianshaixuan === p }" @click="youxianshaixuan = p">{{ p }} <i>{{ shuliangyouxian[p] }}</i></button>
          </div>
          <div class="bz-jy-fenduan">
            <button type="button" :class="{ 'bz-xuan': leishaixuan === 'all' }" @click="leishaixuan = 'all'">{{ t("superMemory.filterAllTypes") }}</button>
            <button v-for="l in leixingliebiao" :key="l" type="button" :class="{ 'bz-xuan': leishaixuan === l }" @click="leishaixuan = l">{{ t(leijian[l] as never) }}</button>
          </div>
          <div class="bz-jy-fenduan">
            <button type="button" :class="{ 'bz-xuan': shengming === 'active' }" @click="shengming = 'active'">{{ t("superMemory.active") }} <i>{{ jiyilie.filter((j) => !j.xiumian).length }}</i></button>
            <button type="button" :class="{ 'bz-xuan': shengming === 'dormant' }" @click="shengming = 'dormant'">{{ t("superMemory.dormant") }} <i>{{ jiyilie.filter((j) => j.xiumian).length }}</i></button>
          </div>
        </div>
        <div class="bz-jy-ka bz-jy-jishu">
          <span class="bz-jy-dushu">{{ tihuan("box.memory.showing" as never, kejian.length, kejian.length) }}</span>
          <span class="bz-jy-ruo">·</span>
          <span class="bz-jy-dushu" :class="{ 'bz-gl': gaoliang === 'changzhu' }">{{ tihuan("superMemory.residentCapacity" as never, changzhushu, CHANGZHU_SHANGXIAN) }}</span>
          <span class="bz-jy-ruo">·</span>
          <span class="bz-jy-dushu">{{ t("superMemory.memories") }} 3/40 · {{ t("superMemory.skills") }} 1/25 · {{ t("superMemory.experiences") }} 1/20</span>
          <span class="bz-jy-kong" />
          <span class="bz-jy-anniu">{{ t("superMemory.batchSelect") }}</span>
        </div>
        <div v-if="tishi" class="bz-jy-ka bz-jy-tishi">
          <BzTubiao ming="check" :daxiao="14" :cuxi="2.3" style="color: #3fb950" />
          <span>{{ tishi }}</span>
          <button type="button" class="bz-jy-xiaotu" @click="tishi = ''"><BzTubiao ming="x" :daxiao="12" :cuxi="2.4" /></button>
        </div>
        <div class="bz-jy-ka bz-jy-liebiao">
          <div class="bz-jy-lie-tou">
            <span>{{ shengming === "active" ? t("superMemory.active") : t("superMemory.dormant") }} · {{ kejian.length }}</span>
          </div>
          <div v-if="!kejian.length" class="bz-jy-kongzhuang">
            <div class="bz-jy-kong-biao">{{ t("superMemory.noMemories") }}</div>
            <div class="bz-jy-kong-shuo">{{ t("superMemory.autoExtracted") }}</div>
          </div>
          <div v-for="j in kejian" :key="j.id" class="bz-jy-hang-wai">
            <div class="bz-jy-hang" @click="qiehuan(zhankaiji, j.id)">
              <i class="bz-jy-dian" :style="{ background: leise[j.lei] }" />
              <div class="bz-jy-hang-zhong">
                <div class="bz-jy-hang-shang">
                  <span class="bz-jy-hang-biao">{{ biaotiwen(j) }}</span>
                  <span class="bz-jy-xuanqi-wai">
                    <button type="button" class="bz-jy-pchip" :class="{ 'bz-gl': gaoliang === 'pchip' && j.id === zhankai }" :style="{ '--se': youxianse[j.youxian] }" @click.stop="xuanqi = xuanqi === j.id ? null : j.id">
                      {{ j.youxian }}<BzTubiao ming="chevron-down" :daxiao="9" :cuxi="3" />
                    </button>
                    <span v-if="gaoliang === 'pchip' && j.id === zhankai && biaoji" class="bz-biaoji" style="top: -12px; right: -14px">{{ biaoji }}</span>
                    <div v-if="xuanqi === j.id" class="bz-jy-xuanqi" @click.stop>
                      <button v-for="p in (['P0', 'P1', 'P2'] as youxian[])" :key="p" type="button" :class="{ 'bz-xuan': j.youxian === p, 'bz-jinyong': j.changzhu && p !== 'P0' }" @click="sheyouxian(j, p)">
                        <span>{{ t(youxianmingcheng[p] as never) }}</span>
                        <BzTubiao v-if="j.youxian === p" ming="check" :daxiao="12" :cuxi="2.6" />
                      </button>
                      <div v-if="j.changzhu" class="bz-jy-xuanqi-zhu">{{ t("superMemory.residentUnpinBeforePriority") }}</div>
                    </div>
                  </span>
                  <span v-if="j.changzhu" class="bz-jy-pai"><BzTubiao ming="pin" :daxiao="9" :cuxi="2.6" />{{ t("superMemory.residentBadge") }}</span>
                  <span v-if="j.xin" class="bz-jy-pai bz-jy-xinpai">NEW</span>
                  <button v-if="j.tisheng && j.youxian === 'P1'" type="button" class="bz-jy-pai bz-jy-tisheng" :title="t('superMemory.makePermanent')" @click.stop="sheyouxian(j, 'P0')">↑P0</button>
                </div>
                <div class="bz-jy-hang-xia">
                  <span><BzTubiao ming="clock" :daxiao="11" :cuxi="2.2" />{{ xiangdui(j.shijian) }}</span>
                  <span>{{ t(leijian[j.lei] as never) }}</span>
                  <span v-if="j.biaoqian.length">#{{ j.biaoqian.length }}</span>
                  <span class="bz-jy-ruo">{{ j.laiyuan }}</span>
                </div>
              </div>
              <div class="bz-jy-hang-you">
                <span class="bz-jy-pin-wai">
                  <button type="button" class="bz-jy-xiaotu" :class="{ 'bz-kai': j.changzhu, 'bz-gl': gaoliang === 'pin' && j.id === zhankai }" :title="j.changzhu ? t('superMemory.residentOff') : t('superMemory.residentOn')" @click.stop="qiehuanchangzhu(j)">
                    <BzTubiao :ming="j.changzhu ? 'pin-off' : 'pin'" :daxiao="13" :cuxi="2.2" />
                  </button>
                  <span v-if="gaoliang === 'pin' && j.id === zhankai && biaoji" class="bz-biaoji" style="top: -12px; right: -10px">{{ biaoji }}</span>
                </span>
                <span class="bz-jy-xiaotu" :title="t('superMemory.delete')"><BzTubiao ming="trash-2" :daxiao="13" :cuxi="2.2" /></span>
                <BzTubiao ming="chevron-down" :daxiao="14" :cuxi="2.4" class="bz-jy-zhan" :style="{ transform: zhankaiji.has(j.id) ? undefined : 'rotate(-90deg)' }" />
              </div>
            </div>
            <div v-if="zhankaiji.has(j.id)" class="bz-jy-xiangqing">
              <div class="bz-jy-chips"><span v-for="b in j.biaoqian" :key="b">#{{ b }}</span></div>
              <div>
                <div class="bz-jy-xiaobiao bz-jy-xb-jin">{{ t("superMemory.l1Overview") }}</div>
                <div class="bz-jy-kuang">{{ j.l1 }}</div>
              </div>
              <div v-if="j.yuanyin">
                <div class="bz-jy-xiaobiao bz-jy-xb-jin">{{ t("superMemory.whyRemembered") }}</div>
                <div class="bz-jy-yuanyin">{{ j.yuanyin }}</div>
              </div>
              <div class="bz-jy-yuan">
                <span>{{ j.xiumian ? t("superMemory.dormant") : t("superMemory.active") }}</span>
                <span>{{ tihuan("superMemory.confirmations" as never, j.queren) }}</span>
                <span>{{ tihuan("superMemory.accessed" as never, j.fangwen) }}</span>
                <span>{{ tihuan("superMemory.last" as never, xiangdui(j.shijian)) }}</span>
                <span v-if="j.guoqi && j.youxian !== 'P0'" :style="{ color: j.guoqi <= 7 ? '#db6d28' : undefined }">{{ tihuan("superMemory.expires" as never, j.guoqi <= 7 ? "2026-10-29" : "2026-11-21") }}</span>
              </div>
              <div class="bz-jy-anzu">
                <button type="button" class="bz-jy-anniu" :class="{ 'bz-gl': gaoliang === 'wanzheng' && j.id === zhankai }" @click="qiehuan(wanzhengji, j.id)">
                  <BzTubiao ming="file-text" :daxiao="13" :cuxi="2.2" />{{ wanzhengji.has(j.id) ? t("box.memory.hideFull") : t("box.memory.showFull") }}
                </button>
                <span v-if="j.xiumian" class="bz-jy-anniu"><BzTubiao ming="refresh-cw" :daxiao="13" :cuxi="2.2" />{{ t("superMemory.restore") }}</span>
              </div>
              <div v-if="wanzhengji.has(j.id)">
                <div class="bz-jy-xiaobiao bz-jy-xb-jin">{{ t("superMemory.l2Full") }}</div>
                <div class="bz-jy-kuang bz-jy-mono">{{ j.l2 }}</div>
              </div>
            </div>
          </div>
        </div>
      </template>

      <!-- ===== 上下文注入 ===== -->
      <template v-else-if="ye === 'shangxiawen'">
        <div class="bz-jy-shuang bz-jy-shuang-kuan">
          <div class="bz-jy-lie2">
            <div class="bz-jy-ka bz-jy-pad" :class="{ 'bz-gl': gaoliang === 'zhuru' }">
              <span v-if="gaoliang === 'zhuru' && biaoji" class="bz-biaoji" style="top: -10px; right: -8px">{{ biaoji }}</span>
              <div class="bz-jy-kabiao"><span>{{ t("superMemory.currentTurnInjectionTitle") }}</span><span class="bz-jy-dushu">3 · ~410 {{ t("superMemory.tokens") }}</span></div>
              <div class="bz-jy-zhuangtai">
                <span class="bz-jy-zt-pai"><BzTubiao ming="check" :daxiao="12" :cuxi="2.6" style="color: #3fb950" />{{ t("superMemory.snapshotStatus.complete") }}</span>
                <span class="bz-jy-dushu">2026/10/22 14:05:31</span>
              </div>
              <div class="bz-jy-pianzu bz-jy-pianzu-xiao">
                <div class="bz-jy-zhibiao">{{ tihuan("superMemory.injectionResidentMetric" as never, 1, 1) }}</div>
                <div class="bz-jy-zhibiao">{{ tihuan("superMemory.injectionRelevantMetric" as never, 2, 0) }}</div>
                <div class="bz-jy-zhibiao">{{ t("superMemory.dynamic") }}: 2/8</div>
                <div class="bz-jy-zhibiao">{{ t("superMemory.contextType.memory") }}: 1</div>
                <div class="bz-jy-zhibiao">{{ t("superMemory.contextType.skill") }}: 1</div>
                <div class="bz-jy-zhibiao">{{ t("superMemory.contextType.experience") }}: 1</div>
                <div class="bz-jy-zhibiao">{{ t("superMemory.scope.workspace") }}: 2</div>
                <div class="bz-jy-zhibiao">{{ t("superMemory.scope.global") }}: 1</div>
              </div>
              <div v-for="x in zhurutiao" :key="x.j.id" class="bz-jy-zhurutiao">
                <div class="bz-jy-zr-biao">{{ x.j.biaoti }}</div>
                <div class="bz-jy-zr-yuan">
                  <span>{{ t(`superMemory.contextType.${x.lei}` as never) }}</span>
                  <span>{{ t(`superMemory.scope.${x.fanwei}` as never) }}</span>
                  <span>{{ x.ceng }}</span>
                  <span>{{ t(`superMemory.scoreBand.${x.fen}` as never) }}</span>
                </div>
              </div>
            </div>
            <div class="bz-jy-ka bz-jy-pad" :class="{ 'bz-gl': gaoliang === 'suoyin' }">
              <span v-if="gaoliang === 'suoyin' && biaoji" class="bz-biaoji" style="top: -10px; right: -8px">{{ biaoji }}</span>
              <div class="bz-jy-kabiao"><span>{{ t("superMemory.memoryIndexPreview") }}</span><span class="bz-jy-dushu">{{ tihuan("superMemory.indexPreviewTokens" as never, 186) }}</span></div>
              <div v-for="duan in shuju.suoyin" :key="duan.fenlei" class="bz-jy-duan">
                <div class="bz-jy-duan-tou">
                  <span class="bz-jy-duan-ming">{{ duan.fenlei }}</span>
                  <span class="bz-jy-dushu">{{ duan.tiao.length }}</span>
                  <span v-if="duan.tiao.some((x) => x.shijian.endsWith('h'))" class="bz-jy-xinxian">{{ tihuan("box.memory.freshCount" as never, duan.tiao.filter((x) => x.shijian.endsWith("h")).length) }}</span>
                </div>
                <div v-for="(x, i) in duan.tiao" :key="i" class="bz-jy-duan-hang">
                  <span class="bz-jy-pchip" :style="{ '--se': youxianse[x.youxian] }">{{ x.youxian }}</span>
                  <div class="bz-jy-duan-zhong">
                    <div class="bz-jy-duan-wen">{{ x.wen }}</div>
                    <div class="bz-jy-duan-biao">{{ x.biaoqian.map((b) => `#${b}`).join("  ") }}</div>
                  </div>
                  <span class="bz-jy-duan-shi">{{ xiangdui(x.shijian) }}</span>
                </div>
              </div>
            </div>
          </div>
          <div class="bz-jy-ka bz-jy-pad" :class="{ 'bz-gl': gaoliang === 'lunci' }">
            <span v-if="gaoliang === 'lunci' && biaoji" class="bz-biaoji" style="top: -10px; right: -8px">{{ biaoji }}</span>
            <div class="bz-jy-kabiao"><span>{{ t("superMemory.convTurns") }}</span><span class="bz-jy-dushu">{{ tihuan("superMemory.turnsInThread" as never, shuju.lunci.length) }}</span></div>
            <button v-for="l in shuju.lunci" :key="l.xuhao" type="button" class="bz-jy-lunci" :class="{ 'bz-xuan': xuanlunci === l.xuhao }" @click="xuanlunci = l.xuhao">
              <div class="bz-jy-lunci-shang">
                <span class="bz-jy-lunci-hao">{{ tihuan("superMemory.turn" as never, l.xuhao) }}</span>
                <span class="bz-jy-lunci-wen">{{ l.yulan }}</span>
              </div>
              <div class="bz-jy-lunci-xia">
                <span :style="{ color: l.zhuangtai === 'complete' ? '#3fb950' : '#db6d28' }">{{ t(`superMemory.snapshotStatus.${l.zhuangtai}` as never) }}</span>
                <span>{{ xiangdui(l.shijian) }}</span>
                <span v-if="l.huifu">{{ tihuan("superMemory.replies" as never, l.huifu) }}</span>
                <span v-if="l.wenjian">{{ tihuan("superMemory.files" as never, l.wenjian) }}</span>
              </div>
            </button>
          </div>
        </div>
      </template>

      <!-- ===== 預算與維護 ===== -->
      <template v-else-if="ye === 'weihu'">
        <div class="bz-jy-shuang">
          <div class="bz-jy-ka bz-jy-pad">
            <div class="bz-jy-kabiao"><span>{{ t("box.memory.budgetTitle") }}</span><span class="bz-jy-dushu">{{ tihuan("box.memory.budgetScope" as never, t("box.memory.projectSize.medium"), "1.2K") }}</span></div>
            <div class="bz-jy-yuanyin bz-jy-yushuo">{{ t("box.memory.budgetDesc") }}</div>
            <div v-for="x in [
              { ming: t('superMemory.memories'), yong: 12, shang: 40, se: leise.memory },
              { ming: t('superMemory.skills'), yong: 7, shang: 25, se: leise.skill },
              { ming: t('superMemory.experiences'), yong: 5, shang: 20, se: leise.experience },
            ]" :key="x.ming" class="bz-jy-tiao">
              <span class="bz-jy-tiao-ming">{{ x.ming }}</span>
              <span class="bz-jy-tiao-zhi">{{ x.yong }} / {{ x.shang }}</span>
              <div class="bz-jy-tiao-gui"><i :style="{ width: `${Math.round((x.yong / x.shang) * 100)}%`, background: x.se }" /></div>
            </div>
            <div class="bz-jy-tiao bz-jy-tiao-ge" :class="{ 'bz-gl': gaoliang === 'peie' }">
              <span v-if="gaoliang === 'peie' && biaoji" class="bz-biaoji" style="top: -10px; right: -8px">{{ biaoji }}</span>
              <span class="bz-jy-tiao-ming">{{ t("box.memory.residentQuota") }} <em>{{ t("superMemory.residentBadgeTip") }}</em></span>
              <span class="bz-jy-tiao-zhi">1 / {{ CHANGZHU_SHANGXIAN }}</span>
              <div class="bz-jy-tiao-gui"><i :style="{ width: `${Math.round((1 / CHANGZHU_SHANGXIAN) * 100)}%`, background: 'var(--bz-button-bg)' }" /></div>
            </div>
          </div>
          <div class="bz-jy-ka bz-jy-pad">
            <div class="bz-jy-kabiao"><span>{{ t("box.memory.storeTitle") }}</span></div>
            <div class="bz-jy-pianzu">
              <div v-for="x in [
                { ming: t('superMemory.active'), zhi: 41 },
                { ming: t('superMemory.dormant'), zhi: 7 },
                { ming: t('superMemory.p0Label'), zhi: 1 },
                { ming: t('superMemory.expiringSoon'), zhi: 2 },
                { ming: t('superMemory.unsynced'), zhi: 0 },
                { ming: t('superMemory.trajectories'), zhi: 8 },
              ]" :key="x.ming" class="bz-jy-pian">
                <div class="bz-jy-pian-zhi">{{ x.zhi }}</div>
                <div class="bz-jy-pian-ming">{{ x.ming }}</div>
              </div>
            </div>
          </div>
        </div>
        <div class="bz-jy-shuang">
          <div v-for="x in [
            { id: 'shengming', tu: 'layers', biao: 'box.memory.runLifecycle', shuo: 'box.memory.runLifecycleDesc', an: 'box.memory.runNow', antu: 'sparkles', zhu: true },
            { id: 'qingli', tu: 'wrench', biao: 'box.memory.purge', shuo: 'box.memory.purgeDesc', an: 'box.memory.runNow', antu: 'database', zhu: false },
            { id: 'daochu', tu: 'download', biao: 'box.memory.archiveExport', shuo: 'box.memory.archiveExportDesc', an: 'box.memory.archiveExport', antu: 'download', zhu: false },
            { id: 'daoru', tu: 'upload', biao: 'box.memory.archiveImport', shuo: 'box.memory.archiveImportDesc', an: 'box.memory.archiveImport', antu: 'upload', zhu: false },
          ]" :key="x.id" class="bz-jy-ka bz-jy-dongzuo" :class="{ 'bz-gl': gaoliang === x.id }">
            <span v-if="gaoliang === x.id && biaoji" class="bz-biaoji" style="top: -10px; right: -8px">{{ biaoji }}</span>
            <span class="bz-jy-dz-tu"><BzTubiao :ming="x.tu" :daxiao="16" :cuxi="2" /></span>
            <div class="bz-jy-dz-wen">
              <div class="bz-jy-dz-biao">{{ t(x.biao as never) }}</div>
              <div class="bz-jy-dz-shuo">{{ t(x.shuo as never) }}</div>
            </div>
            <span class="bz-jy-anniu" :class="{ 'bz-jy-zhuan': x.zhu }"><BzTubiao :ming="x.antu" :daxiao="13" :cuxi="2.2" />{{ t(x.an as never) }}</span>
          </div>
        </div>
        <div class="bz-jy-ka bz-jy-suo">
          <span class="bz-jy-suotu bz-jy-ruotu"><BzTubiao ming="brain" :daxiao="20" :cuxi="2" /></span>
          <div class="bz-jy-suobiao bz-jy-kongbiao">{{ t("box.memory.howTitle") }}</div>
          <div class="bz-jy-suoshuo">{{ t("box.memory.howHint") }}</div>
        </div>
      </template>
    </div>
  </div>
</template>

<style scoped>
.bz-jy {
  display: flex;
  flex-direction: column;
  gap: 14px;
  padding: 20px 24px 24px;
  background: var(--bz-editor-bg);
  container-type: inline-size;
  text-align: left;
}

.bz-jy-qianru {
  padding: 0;
  background: transparent;
}

.bz-jy-yetou {
  margin-bottom: 6px;
}

.bz-jy-yebiao {
  color: var(--bz-fg-1);
  font-size: 22px;
  font-weight: 650;
  letter-spacing: -0.4px;
  line-height: 1.2;
}

.bz-jy-yeshuo {
  margin-top: 6px;
  color: var(--bz-fg-3);
  font-size: 13px;
  line-height: 1.5;
}

/* surface：側欄底色 88% + 前景 4%，9% 細框，14px 圓角 */
.bz-jy-ka {
  position: relative;
  border-radius: 14px;
  background: color-mix(in srgb, var(--bz-sidebar-bg) 88%, var(--bz-editor-fg) 4%);
  border: 1px solid color-mix(in srgb, var(--bz-fg) 9%, transparent);
}

.bz-jy-pad {
  padding: 16px 18px;
}

.bz-jy-kabiao {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  margin-bottom: 12px;
  color: var(--bz-fg-3);
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.6px;
  text-transform: uppercase;
}

.bz-jy-dushu {
  color: var(--bz-fg-2);
  font-size: 11.5px;
  font-weight: 600;
  letter-spacing: 0;
  text-transform: none;
  font-variant-numeric: tabular-nums;
  white-space: nowrap;
}

.bz-jy-ruo {
  color: var(--bz-fg-4);
}

.bz-jy-shuang {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 380px), 1fr));
  gap: 12px;
}

.bz-jy-shuang-kuan {
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 420px), 1fr));
  align-items: start;
}

.bz-jy-lie2 {
  display: flex;
  flex-direction: column;
  gap: 12px;
  min-width: 0;
}

/* ---------- 記憶循環示意圖 ---------- */
.bz-jy-liu {
  padding: 18px 20px 12px;
  overflow: hidden;
}

.bz-jy-liu svg {
  display: block;
  max-width: 1100px;
  height: auto;
  margin: 0 auto;
}

.bz-jy-xian-di {
  stroke: color-mix(in srgb, var(--bz-fg) 18%, transparent);
}

.bz-jy-xian-dong {
  stroke: var(--bz-fg);
  stroke-opacity: 0.55;
  stroke-dasharray: 4 14;
  animation: bz-jy-liudong 2.4s linear infinite;
}

@keyframes bz-jy-liudong {
  to {
    stroke-dashoffset: -36;
  }
}

.bz-jy-liubiao {
  fill: var(--bz-fg-3);
  font-size: 10.5px;
  font-weight: 600;
  letter-spacing: 0.6px;
}

.bz-jy-jiedian {
  fill: color-mix(in srgb, var(--bz-sidebar-bg) 88%, var(--bz-editor-fg) 4%);
  stroke: color-mix(in srgb, var(--bz-fg) 18%, transparent);
}

.bz-jy-jiedian.bz-jy-zhong {
  stroke: color-mix(in srgb, var(--bz-fg) 35%, transparent);
}

.bz-jy-xukuang {
  stroke: color-mix(in srgb, var(--bz-fg) 12%, transparent);
}

.bz-jy-maidong {
  animation: bz-jy-maidong 3s ease-in-out infinite;
}

@keyframes bz-jy-maidong {
  0%, 100% { opacity: 0.82; }
  50% { opacity: 1; }
}

@media (prefers-reduced-motion: reduce) {
  .bz-jy-xian-dong,
  .bz-jy-maidong {
    animation: none;
  }
}

.bz-jy-jd-nei {
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: hidden;
  padding: 14px 18px 12px;
}

.bz-jy-jd-tou {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 8px;
}

.bz-jy-jd-biao {
  color: var(--bz-fg);
  font-size: 13.5px;
  font-weight: 650;
  line-height: 1.3;
}

.bz-jy-jd-zhi {
  color: var(--bz-fg);
  font-size: 18px;
  font-weight: 650;
  letter-spacing: -0.4px;
  line-height: 1;
  font-variant-numeric: tabular-nums;
}

.bz-jy-jd-hang {
  margin-top: 5px;
  color: var(--bz-fg-3);
  font-size: 11.5px;
  font-weight: 500;
  line-height: 1.45;
}

.bz-jy-zhonglei {
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 7px;
  height: 100%;
  padding: 14px 16px 12px;
}

.bz-jy-zhonglei-biao {
  margin-bottom: 2px;
  color: var(--bz-fg-3);
  font-size: 10.5px;
  font-weight: 600;
  letter-spacing: 0.6px;
  line-height: 1.2;
}

.bz-jy-zhonglei-hang {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  font-size: 11.5px;
  font-weight: 600;
  line-height: 1.25;
}

.bz-jy-zhonglei-hang > span:first-child {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  color: var(--bz-fg);
  white-space: nowrap;
}

.bz-jy-zhonglei-hang i,
.bz-jy-tuli-xiang > i {
  width: 7px;
  height: 7px;
  flex-shrink: 0;
  border-radius: 2px;
}

/* ---------- 統計卡 ---------- */
.bz-jy-tongji {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 12px;
}

@container (max-width: 660px) {
  .bz-jy-tongji {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@container (max-width: 324px) {
  .bz-jy-tongji {
    grid-template-columns: 1fr;
  }
}

.bz-jy-tongka {
  display: flex;
  flex-direction: column;
  gap: 6px;
  min-width: 0;
  padding: 12px 14px;
}

.bz-jy-tongka-tou {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  color: var(--bz-fg-3);
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.3px;
}

.bz-jy-tongka-tou span {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.bz-jy-tongka-zhi {
  color: var(--bz-fg-1);
  font-size: 21px;
  font-weight: 650;
  letter-spacing: -0.4px;
  line-height: 1.1;
  font-variant-numeric: tabular-nums;
}

.bz-jy-tongka-ci {
  color: var(--bz-fg-3);
  font-size: 11px;
  font-weight: 600;
  line-height: 1.4;
}

/* ---------- 組成、條形 ---------- */
.bz-jy-duidie {
  display: flex;
  gap: 1px;
  height: 12px;
  overflow: hidden;
  border-radius: 6px;
  background: color-mix(in srgb, var(--bz-fg) 7%, transparent);
}

.bz-jy-duidie i {
  min-width: 2px;
}

.bz-jy-tuli {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));
  gap: 8px 16px;
  margin-top: 12px;
}

.bz-jy-tuli-xiang {
  display: flex;
  align-items: flex-start;
  gap: 8px;
}

.bz-jy-tuli-xiang > i {
  width: 8px;
  height: 8px;
  margin-top: 4px;
}

.bz-jy-tuli-ming {
  color: var(--bz-fg-3);
  font-size: 11px;
  font-weight: 600;
}

.bz-jy-tuli-zhi {
  color: var(--bz-fg-1);
  font-size: 13px;
  font-weight: 600;
}

.bz-jy-tiao {
  position: relative;
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  align-items: center;
  gap: 4px 12px;
  padding: 7px 0;
  border-top: 1px solid color-mix(in srgb, var(--bz-fg) 6%, transparent);
}

.bz-jy-tiao-ming {
  overflow: hidden;
  color: var(--bz-fg-1);
  font-size: 12.5px;
  font-weight: 600;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.bz-jy-tiao-ming em {
  margin-left: 8px;
  color: var(--bz-fg-4);
  font-size: 11px;
  font-style: normal;
}

.bz-jy-tiao-zhi {
  color: var(--bz-fg-1);
  font-size: 12px;
  font-weight: 600;
  font-variant-numeric: tabular-nums;
}

.bz-jy-tiao-gui {
  grid-column: 1 / -1;
  height: 5px;
  overflow: hidden;
  border-radius: 3px;
  background: color-mix(in srgb, var(--bz-fg) 7%, transparent);
}

.bz-jy-tiao-gui i {
  display: block;
  height: 100%;
  border-radius: 3px;
  background: var(--bz-button-bg);
}

.bz-jy-tiao-ge {
  margin-top: 14px;
}

.bz-jy-xiaobiao {
  margin: 16px 0 8px;
  color: var(--bz-fg-3);
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.5px;
  text-transform: uppercase;
}

.bz-jy-xb-jin {
  margin: 0 0 4px;
  font-size: 10.5px;
}

.bz-jy-sige {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 8px;
}

.bz-jy-pianzu {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));
  gap: 8px;
}

.bz-jy-pian,
.bz-jy-zhibiao {
  min-width: 0;
  padding: 10px 12px;
  border-radius: 10px;
  background: color-mix(in srgb, var(--bz-fg) 4%, transparent);
  border: 1px solid color-mix(in srgb, var(--bz-fg) 7%, transparent);
}

.bz-jy-pian-zhi {
  overflow: hidden;
  color: var(--bz-fg-1);
  font-size: 18px;
  font-weight: 650;
  letter-spacing: -0.4px;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-variant-numeric: tabular-nums;
}

.bz-jy-pian-xiao {
  font-size: 14px;
  letter-spacing: 0;
}

.bz-jy-pian-ming {
  margin-top: 2px;
  color: var(--bz-fg-3);
  font-size: 11px;
  font-weight: 600;
}

.bz-jy-chips {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.bz-jy-pianzu + .bz-jy-chips {
  margin-top: 12px;
}

.bz-jy-chips span {
  display: inline-flex;
  align-items: center;
  height: 22px;
  padding: 0 9px;
  border-radius: 999px;
  color: var(--bz-fg-2);
  font-size: 11px;
  font-weight: 600;
  background: color-mix(in srgb, var(--bz-fg) 6%, transparent);
}

.bz-jy-guoqi {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 7px 0;
  border-top: 1px solid color-mix(in srgb, var(--bz-fg) 6%, transparent);
}

.bz-jy-guoqi-tian {
  min-width: 34px;
  color: var(--bz-fg-1);
  font-size: 12px;
  font-weight: 650;
}

.bz-jy-guoqi-ming {
  flex: 1;
  min-width: 0;
  overflow: hidden;
  color: var(--bz-fg-2);
  font-size: 12px;
  font-weight: 600;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.bz-jy-yusuan {
  color: var(--bz-fg-4);
  font-size: 11.5px;
  font-weight: 600;
}

/* PriorityChip */
.bz-jy-pchip {
  display: inline-flex;
  align-items: center;
  gap: 3px;
  flex-shrink: 0;
  height: 19px;
  padding: 0 7px !important;
  border-radius: 5px;
  font-size: 10.5px;
  font-weight: 700;
  color: var(--se) !important;
  background: color-mix(in srgb, var(--se) 12%, transparent) !important;
  border: 1px solid color-mix(in srgb, var(--se) 30%, transparent) !important;
}

/* ---------- 記憶庫 ---------- */
.bz-jy-shaixuan {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px;
}

.bz-jy-sou {
  display: inline-flex;
  flex: 1 1 200px;
  align-items: center;
  gap: 8px;
  min-width: 160px;
  max-width: 320px;
  height: 30px;
  padding: 0 10px;
  border-radius: 8px;
  color: var(--bz-fg-4);
  font-size: 12.5px;
  font-weight: 600;
  background: color-mix(in srgb, var(--bz-fg) 5%, transparent);
  border: 1px solid color-mix(in srgb, var(--bz-fg) 9%, transparent);
}

.bz-jy-fenduan {
  position: relative;
  display: inline-flex;
  flex-wrap: wrap;
  gap: 2px;
  max-width: 100%;
  padding: 3px;
  border-radius: 11px;
  background: color-mix(in srgb, var(--bz-fg) 6%, transparent);
  border: 1px solid color-mix(in srgb, var(--bz-fg) 7%, transparent);
}

.bz-jy-fenduan button {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  height: 26px;
  padding: 0 10px;
  border-radius: 8px;
  font-size: 12px;
  font-weight: 600;
  white-space: nowrap;
  color: var(--bz-fg-2);
}

.bz-jy-fenduan button.bz-xuan {
  color: var(--bz-fg-1);
  background: var(--bz-editor-bg);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.18);
}

.bz-jy-fenduan i {
  font-style: normal;
  font-size: 11px;
  color: var(--bz-fg-3);
}

.bz-jy-jishu {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 14px;
  padding: 12px 18px;
}

.bz-jy-jishu .bz-jy-dushu {
  position: relative;
  white-space: normal;
}

.bz-jy-kong {
  flex: 1;
}

.bz-jy-anniu {
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  height: 30px;
  padding: 0 11px;
  border-radius: 8px;
  font-size: 12px;
  font-weight: 600;
  white-space: nowrap;
  color: var(--bz-fg-2);
  border: 1px solid color-mix(in srgb, var(--bz-fg) 10%, transparent) !important;
}

.bz-jy-anniu.bz-jy-zhuan {
  color: var(--bz-button-fg);
  background: var(--bz-button-bg);
  border-color: transparent !important;
}

.bz-jy-tishi {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 14px;
  font-size: 12.5px;
  font-weight: 600;
  color: var(--bz-fg-2);
}

.bz-jy-tishi > span {
  flex: 1;
}

.bz-jy-xiaotu {
  position: relative;
  display: inline-grid;
  place-items: center;
  width: 26px;
  height: 26px;
  border-radius: 7px;
  color: var(--bz-fg-3);
}

.bz-jy-xiaotu.bz-kai {
  color: var(--bz-fg-1);
  background: color-mix(in srgb, var(--bz-fg) 12%, transparent) !important;
}

.bz-jy-liebiao {
  overflow: visible;
}

.bz-jy-lie-tou {
  padding: 14px 18px 10px;
  color: var(--bz-fg-3);
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.6px;
  text-transform: uppercase;
}

.bz-jy-kongzhuang {
  padding: 30px 18px;
  text-align: center;
  border-top: 1px solid color-mix(in srgb, var(--bz-fg) 6%, transparent);
}

.bz-jy-kong-biao {
  color: var(--bz-fg-1);
  font-size: 13px;
  font-weight: 650;
}

.bz-jy-kong-shuo {
  margin-top: 4px;
  color: var(--bz-fg-3);
  font-size: 12px;
  font-weight: 600;
}

.bz-jy-hang-wai {
  border-top: 1px solid color-mix(in srgb, var(--bz-fg) 6%, transparent);
}

.bz-jy-hang {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 11px 18px;
  cursor: pointer;
}

.bz-jy-dian {
  width: 8px;
  height: 8px;
  flex-shrink: 0;
  margin-top: 6px;
  border-radius: 4px;
}

.bz-jy-hang-zhong {
  flex: 1;
  min-width: 0;
}

.bz-jy-hang-shang {
  display: flex;
  align-items: center;
  gap: 8px;
  min-width: 0;
}

.bz-jy-hang-biao {
  flex: 0 1 auto;
  min-width: 0;
  overflow: hidden;
  color: var(--bz-fg-1);
  font-size: 13px;
  font-weight: 600;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.bz-jy-xuanqi-wai {
  position: relative;
  flex-shrink: 0;
}

.bz-jy-xuanqi {
  position: absolute;
  top: calc(100% + 4px);
  left: 0;
  z-index: 20;
  min-width: 150px;
  padding: 4px;
  border-radius: 10px;
  background: var(--bz-menu-bg);
  border: 1px solid color-mix(in srgb, var(--bz-fg) 13%, transparent);
  box-shadow: 0 10px 28px rgba(0, 0, 0, 0.28);
}

.bz-jy-xuanqi button {
  display: flex;
  align-items: center;
  gap: 8px;
  width: 100%;
  height: 28px;
  padding: 0 8px;
  border-radius: 7px;
  font-size: 12px;
  font-weight: 600;
  text-align: left;
  white-space: nowrap;
  color: var(--bz-fg-2);
}

.bz-jy-xuanqi button span {
  flex: 1;
}

.bz-jy-xuanqi button.bz-xuan {
  color: var(--bz-fg-1);
  background: color-mix(in srgb, var(--bz-fg) 8%, transparent);
}

.bz-jy-xuanqi button.bz-jinyong {
  opacity: 0.45;
  cursor: not-allowed;
}

.bz-jy-xuanqi-zhu {
  max-width: 220px;
  padding: 6px 8px 4px;
  color: var(--bz-fg-4);
  font-size: 10.5px;
  font-weight: 600;
}

.bz-jy-pai {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  flex-shrink: 0;
  height: 19px;
  padding: 0 7px;
  border-radius: 999px;
  font-size: 10.5px;
  font-weight: 700;
  color: var(--bz-fg-2);
  background: color-mix(in srgb, var(--bz-fg) 8%, transparent);
}

.bz-jy-xinpai {
  color: #3fb950;
  background: color-mix(in srgb, #3fb950 12%, transparent);
}

.bz-jy-tisheng {
  color: #bc8cff;
  background: color-mix(in srgb, #bc8cff 12%, transparent) !important;
}

.bz-jy-hang-xia {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 10px;
  margin-top: 4px;
  color: var(--bz-fg-3);
  font-size: 11.5px;
  font-weight: 600;
}

.bz-jy-hang-xia > span:first-child {
  display: inline-flex;
  align-items: center;
  gap: 4px;
}

.bz-jy-hang-you {
  display: flex;
  align-items: center;
  gap: 4px;
  flex-shrink: 0;
}

.bz-jy-pin-wai {
  position: relative;
  display: inline-flex;
}

.bz-jy-zhan {
  margin-left: 4px;
  color: var(--bz-fg-4);
  transition: transform 120ms;
}

.bz-jy-xiangqing {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 0 18px 14px 38px;
}

.bz-jy-kuang {
  padding: 10px 12px;
  border-radius: 10px;
  color: var(--bz-fg-1);
  font-size: 12.5px;
  font-weight: 500;
  line-height: 1.6;
  white-space: pre-wrap;
  word-break: break-word;
  background: color-mix(in srgb, var(--bz-fg) 4%, transparent);
  border: 1px solid color-mix(in srgb, var(--bz-fg) 7%, transparent);
}

.bz-jy-mono {
  color: var(--bz-fg-2);
  font-family: var(--vp-font-family-mono);
  font-size: 11.5px;
}

.bz-jy-yuanyin {
  color: var(--bz-fg-2);
  font-size: 12.5px;
  font-weight: 500;
  line-height: 1.6;
}

.bz-jy-yushuo {
  margin-bottom: 8px;
  color: var(--bz-fg-3);
  font-size: 12px;
  font-weight: 600;
}

.bz-jy-yuan {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  color: var(--bz-fg-3);
  font-size: 11.5px;
  font-weight: 600;
}

.bz-jy-anzu {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

/* ---------- 上下文 ---------- */
.bz-jy-zhuangtai {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 10px;
  margin-bottom: 12px;
}

.bz-jy-zt-pai {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  height: 24px;
  padding: 0 10px;
  border-radius: 999px;
  color: var(--bz-fg-1);
  font-size: 11.5px;
  font-weight: 700;
  background: color-mix(in srgb, var(--bz-fg) 7%, transparent);
}

.bz-jy-pianzu-xiao {
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  margin-bottom: 4px;
}

.bz-jy-zhibiao {
  padding: 8px 10px;
  border-radius: 8px;
  color: var(--bz-fg-2);
  font-size: 11.5px;
  font-weight: 600;
}

.bz-jy-zhurutiao {
  padding: 9px 0;
  border-top: 1px solid color-mix(in srgb, var(--bz-fg) 6%, transparent);
}

.bz-jy-zhurutiao:first-of-type {
  margin-top: 8px;
}

.bz-jy-zr-biao {
  color: var(--bz-fg-1);
  font-size: 12.5px;
  font-weight: 600;
}

.bz-jy-zr-yuan,
.bz-jy-lunci-xia {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 3px;
  color: var(--bz-fg-3);
  font-size: 11px;
  font-weight: 600;
}

.bz-jy-duan {
  margin-top: 10px;
}

.bz-jy-duan-tou {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 4px;
}

.bz-jy-duan-ming {
  color: var(--bz-fg-1);
  font-size: 12px;
  font-weight: 700;
  text-transform: capitalize;
}

.bz-jy-xinxian {
  color: #3fb950;
  font-size: 10.5px;
  font-weight: 700;
}

.bz-jy-duan-hang {
  display: flex;
  align-items: flex-start;
  gap: 8px;
  padding: 6px 0;
  border-top: 1px solid color-mix(in srgb, var(--bz-fg) 5%, transparent);
}

.bz-jy-duan-zhong {
  flex: 1;
  min-width: 0;
}

.bz-jy-duan-wen {
  color: var(--bz-fg-2);
  font-size: 12px;
  font-weight: 600;
  line-height: 1.5;
}

.bz-jy-duan-biao,
.bz-jy-duan-shi {
  color: var(--bz-fg-4);
  font-size: 10.5px;
  font-weight: 600;
}

.bz-jy-duan-shi {
  white-space: nowrap;
}

.bz-jy-lunci {
  display: block;
  width: 100%;
  margin-top: 4px;
  padding: 10px 12px;
  border-radius: 10px;
  text-align: left;
  color: var(--bz-fg-2);
}

.bz-jy-lunci.bz-xuan {
  color: var(--bz-fg-1);
  background: color-mix(in srgb, var(--bz-fg) 8%, transparent);
}

.bz-jy-lunci-shang {
  display: flex;
  align-items: center;
  gap: 8px;
}

.bz-jy-lunci-hao {
  flex-shrink: 0;
  color: var(--bz-fg-3);
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.3px;
}

.bz-jy-lunci-wen {
  flex: 1;
  min-width: 0;
  overflow: hidden;
  font-size: 12.5px;
  font-weight: 600;
  white-space: nowrap;
  text-overflow: ellipsis;
}

/* ---------- 維護、鎖定 ---------- */
.bz-jy-dongzuo {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 14px;
  padding: 16px 18px;
}

.bz-jy-dz-tu {
  display: grid;
  place-items: center;
  width: 36px;
  height: 36px;
  flex-shrink: 0;
  border-radius: 10px;
  color: var(--bz-fg-2);
}

.bz-jy-dz-wen {
  flex: 1;
  min-width: 200px;
}

.bz-jy-dz-biao {
  color: var(--bz-fg-1);
  font-size: 13px;
  font-weight: 650;
}

.bz-jy-dz-shuo {
  margin-top: 2px;
  color: var(--bz-fg-3);
  font-size: 11.5px;
  font-weight: 600;
  line-height: 1.5;
}

.bz-jy-suo {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 48px 24px;
  text-align: center;
}

.bz-jy-suotu {
  display: grid;
  place-items: center;
  width: 48px;
  height: 48px;
  border-radius: 14px;
  color: var(--bz-fg-2);
}

.bz-jy-ruotu {
  opacity: 0.6;
}

.bz-jy-suobiao {
  margin-top: 4px;
  color: var(--bz-fg-1);
  font-size: 15px;
  font-weight: 650;
}

.bz-jy-kongbiao {
  font-size: 14px;
  font-weight: 600;
}

.bz-jy-suoshuo {
  max-width: 460px;
  color: var(--bz-fg-3);
  font-size: 12.5px;
  font-weight: 500;
  line-height: 1.6;
}

/* 窄螢幕：標題可以換行，內距收窄 */
@container (max-width: 480px) {
  .bz-jy:not(.bz-jy-qianru) {
    padding: 16px 14px 18px;
  }

  .bz-jy-hang {
    gap: 10px;
    padding: 11px 12px;
  }

  .bz-jy-hang-shang {
    flex-wrap: wrap;
    row-gap: 4px;
  }

  .bz-jy-hang-biao {
    flex-basis: 100%;
    white-space: normal;
  }

  .bz-jy-xiangqing {
    padding: 0 12px 14px 30px;
  }

  .bz-jy-sige {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
