<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from "vue";
import { shiyongwenben } from "./shuju";
import shilibiao from "./jiuchanshili.json";

// Entanglement 模式聊天上方的因果面板（SidebarChat.tsx CausalDashboard）。
// 面板上的標籤在 Breezell 裡就是英文寫死的（Locate / Verify / Fix、Confidence、Root cause…），這裡照搬；
// 內容（根因、假設、證據）是示意資料，在 jiuchanshili.json 裡按語言提供。
// jieduan：locate / verify / fix / resolved / relocate；zhankai：展開細節。
type zhengju = { ji: string; lun: number; wen: string; gongju?: string };
type jiashe = { id: string; zhuangtai: "testing" | "confirmed" | "rejected"; miaoshu: string; fou?: string; jiaoxun?: string };
type shili = {
  mubiao: string;
  wancheng: string;
  genyin: string;
  jizhi: string;
  fanshi: string;
  jiashe: jiashe[];
  zhengju: zhengju[];
  xiufu: string;
  yanzheng: string;
  yuce: string;
  tu: { cong: string; dao: string }[];
  huandeng: string[];
};

// yange：顯示實驗功能「嚴格驗證」的失敗 → 通過關卡（StrictVerificationGate）。
// qianru：放在 BzLiaotian 裡時不另畫外框；單獨使用時包一層聊天面板底色的視窗。
const props = withDefaults(defineProps<{ jieduan?: string; zhankai?: boolean; gaoliang?: string; biaoji?: string; yange?: boolean; qianru?: boolean }>(), {
  yange: false,
  qianru: false,
  jieduan: "verify",
  zhankai: false,
  gaoliang: "",
  biaoji: "",
});

const { t, tihuan, yuyan } = shiyongwenben();
// 關卡三步：重現 → 修正 → 同一條指令通過；fix 階段時重現已完成，resolved 時全部完成。
const guanka = computed(() => {
  const j = props.jieduan;
  const fuxian = j === "locate" ? "pending" : "done";
  const xiu = j === "fix" || j === "resolved" ? "done" : "pending";
  const tong = j === "resolved" ? "done" : "pending";
  return [
    { jian: "causalGate.reproduce", zt: fuxian },
    { jian: "causalGate.fix", zt: xiu },
    { jian: "causalGate.pass", zt: tong },
  ];
});
const shuju = computed(() => ((shilibiao as Record<string, shili>)[yuyan.value] ?? (shilibiao as Record<string, shili>).en) as shili);

const buzhou = [
  { id: "locate", ming: "Locate" },
  { id: "verify", ming: "Verify" },
  { id: "fix", ming: "Fix" },
];
const yijiejue = computed(() => props.jieduan === "resolved");
const chongding = computed(() => props.jieduan === "relocate");
const dangqian = computed(() => (yijiejue.value ? 3 : chongding.value ? 0 : Math.max(0, buzhou.findIndex((b) => b.id === props.jieduan))));
const huose = computed(() => (chongding.value ? "#d97706" : "var(--bz-link)"));

// 信心與完成度隨階段變化
const xinxin = computed(() => (props.jieduan === "locate" || chongding.value ? "LOW" : props.jieduan === "verify" ? "MEDIUM" : "HIGH"));
const xinxinse: Record<string, string> = { LOW: "#d97706", MEDIUM: "#0ea5e9", HIGH: "#16a34a" };
const wanchengdu = computed(() =>
  yijiejue.value
    ? { ming: "Resolved", se: "#16a34a" }
    : props.jieduan === "fix"
      ? { ming: "Modified · unverified", se: "#d97706" }
      : { ming: "Investigating", se: "var(--bz-fg)" },
);

const zhengjuyuan: Record<string, { se: string; fang: "up" | "down" | "flat"; shu: 1 | 2 }> = {
  "++": { se: "#15803d", fang: "up", shu: 2 },
  "+": { se: "#22c55e", fang: "up", shu: 1 },
  "~": { se: "#d97706", fang: "flat", shu: 1 },
  "-": { se: "#f97316", fang: "down", shu: 1 },
  "--": { se: "#dc2626", fang: "down", shu: 2 },
};
const jiantou = (ji: string) => {
  const m = zhengjuyuan[ji];
  const yi = (y: number) => (m.fang === "up" ? `M3 ${y + 3} L6 ${y} L9 ${y + 3}` : `M3 ${y} L6 ${y + 3} L9 ${y}`);
  return m.shu === 2 ? [yi(2), yi(6.5)] : [yi(4.5)];
};
const jiashese: Record<string, { bg: string; fg: string }> = {
  testing: { bg: "color-mix(in srgb, #0ea5e9 18%, transparent)", fg: "#0ea5e9" },
  confirmed: { bg: "color-mix(in srgb, #16a34a 18%, transparent)", fg: "#16a34a" },
  rejected: { bg: "color-mix(in srgb, #dc2626 14%, transparent)", fg: "#dc2626" },
};

// 收合時的跑馬燈：每 4.6 秒換一則，滑鼠停留時暫停。
const huandeng = computed(() => [
  { biao: "Current assessment:", wen: shuju.value.huandeng[0] },
  { biao: "To verify:", wen: shuju.value.huandeng[1] },
  { biao: "Latest finding:", wen: shuju.value.huandeng[2], ji: "++" },
]);
const huandengxu = ref(0);
const zanting = ref(false);
const kai = ref(props.zhankai);
let jishi: ReturnType<typeof setInterval> | undefined;
onMounted(() => {
  jishi = setInterval(() => {
    if (!zanting.value && !kai.value) huandengxu.value = (huandengxu.value + 1) % huandeng.value.length;
  }, 4600);
});
onBeforeUnmount(() => clearInterval(jishi));

const kaijiejue = ref(props.jieduan === "resolved");
// 進到 Fix / Resolved 時，原本在驗證的假設已被證實。
const jiashelie = computed<jiashe[]>(() =>
  shuju.value.jiashe.map((h) => (h.zhuangtai === "testing" && (props.jieduan === "fix" || props.jieduan === "resolved") ? { ...h, zhuangtai: "confirmed" } : h)),
);
const huoyue = computed(() => jiashelie.value.filter((h) => h.zhuangtai === "testing"));
const yijie = computed(() => jiashelie.value.filter((h) => h.zhuangtai !== "testing"));
const zuijin = computed(() => [...shuju.value.zhengju].reverse());

// 因果圖：與 CausalGraphDag 相同，每條邊把下游節點往下一層推。
const tubuju = computed(() => {
  const jiedian: string[] = [];
  for (const e of shuju.value.tu) for (const n of [e.cong, e.dao]) if (!jiedian.includes(n)) jiedian.push(n);
  const ceng = new Map(jiedian.map((n) => [n, 0]));
  for (let i = 0; i <= jiedian.length; i++) for (const e of shuju.value.tu) ceng.set(e.dao, Math.max(ceng.get(e.dao)!, ceng.get(e.cong)! + 1));
  const kuang = jiedian.map((n) => {
    const biao = n.length > 22 ? `${n.slice(0, 21)}…` : n;
    const w = Math.max(30, Math.round(biao.length * 6.2) + 14);
    return { n, biao, x: 6, y: 6 + ceng.get(n)! * 46, w, h: 20 };
  });
  const gao = 12 + (Math.max(...kuang.map((k) => k.y)) + 20);
  const kuan = Math.max(120, ...kuang.map((k) => k.w + 12));
  return { kuang, gao, kuan };
});
const kuangming = (n: string) => tubuju.value.kuang.find((k) => k.n === n)!;
</script>

<template>
  <div :class="{ bz: !qianru }">
  <div :class="{ 'bz-chuangkou bz-cebian bz-jc-wai': !qianru }">
  <div class="bz-jc" :class="{ 'bz-gl': gaoliang === 'mianban' }">
    <span v-if="gaoliang === 'mianban' && biaoji" class="bz-biaoji" style="top: -10px; right: -8px">{{ biaoji }}</span>
    <div class="bz-jc-tou">
      <div class="bz-jc-tou-hang">
        <div class="bz-jc-jindu" role="list">
          <template v-for="(b, i) in buzhou" :key="b.id">
            <div class="bz-jc-bu" :class="{ 'bz-gl': gaoliang === 'jieduan' && i === 0 }">
              <span v-if="gaoliang === 'jieduan' && i === 0 && biaoji" class="bz-biaoji" style="top: -12px; left: -8px">{{ biaoji }}</span>
              <span v-if="yijiejue || (!chongding && i < dangqian)" class="bz-jc-jie"><span class="bz-jc-guo">✓</span></span>
              <span v-else class="bz-jc-jie">
                <span v-if="i === dangqian" class="bz-jc-mai" :style="{ borderColor: huose }" />
                <span class="bz-jc-dian" :class="{ 'bz-huo': i === dangqian }" :style="i === dangqian ? { background: huose, boxShadow: `0 0 6px ${huose}` } : undefined" />
              </span>
              <span
                class="bz-jc-buming"
                :class="{ 'bz-huo': !yijiejue && i === dangqian, 'bz-guo': yijiejue || (!chongding && i < dangqian) }"
                :style="!yijiejue && i === dangqian ? { color: huose } : undefined"
              >{{ chongding && i === 0 ? "Relocate" : b.ming }}</span>
            </div>
            <span v-if="i < buzhou.length - 1" class="bz-jc-lian" :class="{ 'bz-guo': yijiejue || (!chongding && i < dangqian) }" />
          </template>
        </div>
        <span class="bz-jc-wan" :style="{ '--se': wanchengdu.se }"><i :class="{ 'bz-huxi': wanchengdu.ming === 'Investigating' }" />{{ wanchengdu.ming }}</span>
        <span class="bz-jc-shu" />
        <span class="bz-jc-xin" :class="{ 'bz-gl': gaoliang === 'xinxin' }">
          <span v-if="gaoliang === 'xinxin' && biaoji" class="bz-biaoji" style="top: -12px; right: -8px">{{ biaoji }}</span>
          <span class="bz-jc-xin-biao">Confidence</span>
          <span class="bz-jc-xinhao">
            <i v-for="n in 3" :key="n" :style="{ height: `${2 + n * 3}px`, background: n <= ['LOW', 'MEDIUM', 'HIGH'].indexOf(xinxin) + 1 ? xinxinse[xinxin] : undefined }" />
          </span>
          <span class="bz-jc-xin-pai" :style="{ '--se': xinxinse[xinxin] }">{{ xinxin === "LOW" ? "Low" : xinxin === "MEDIUM" ? "Medium" : "High" }}</span>
        </span>
      </div>
      <div v-if="yange" class="bz-jc-guan" :class="{ 'bz-gl': gaoliang === 'yange', 'bz-jc-guan-cheng': jieduan === 'resolved' }">
        <span v-if="gaoliang === 'yange' && biaoji" class="bz-biaoji" style="top: -10px; right: -8px">{{ biaoji }}</span>
        <div class="bz-jc-guan-shang">
          <span class="bz-jc-guan-biao">
            <svg width="13" height="13" viewBox="0 0 24 24"><path fill="currentColor" d="M5 21q-.825 0-1.412-.587T3 19V6.5q0-.35.113-.663t.337-.587l1.4-1.7q.225-.275.513-.413T6 3h12q.35 0 .638.138t.512.412l1.4 1.7q.225.275.338.588T21 6.5V19q0 .825-.587 1.413T19 21zm.4-15h13.2l-.85-1H6.25zm9.8 7.5l-1.375 1.375q-.3.3-.3.725t.3.725t.725.3t.725-.3L17.4 14.2q.3-.3.3-.7t-.3-.7l-2.125-2.125q-.3-.3-.725-.3t-.725.3t-.3.725t.3.725zm-6.35 0l1.375-1.375q.3-.3.3-.725t-.3-.725t-.725-.3t-.725.3L6.65 12.8q-.3.3-.3.7t.3.7l2.125 2.125q.3.3.725.3t.725-.3t.3-.725t-.3-.725z" /></svg>
            {{ t("causalGate.title") }}
          </span>
          <span v-if="jieduan === 'resolved'" class="bz-jc-guan-cheng-wen">{{ t("causalGate.proven") }}</span>
          <span v-else class="bz-jc-guan-bu">
            <template v-for="(g, i) in guanka" :key="g.jian">
              <span class="bz-jc-gb" :class="`bz-${g.zt}`"><i>{{ g.zt === "done" ? "✓" : "" }}</i>{{ t(g.jian as never) }}</span>
              <span v-if="i < guanka.length - 1" class="bz-jc-gb-xian" :class="`bz-${g.zt}`" />
            </template>
          </span>
        </div>
        <div v-if="jieduan !== 'resolved'" class="bz-jc-guan-xia">
          <span class="bz-jc-guan-ml">$ npm test -- counter.test.js</span>
          <span class="bz-jc-guan-ji">{{ t("causalGate.confidenceBasis") }}: {{ tihuan("causalGate.predictions" as never, jieduan === "locate" ? 0 : 1) }} · {{ jieduan === "locate" ? t("causalGate.notReproduced") : t("causalGate.reproduced") }}</span>
        </div>
      </div>
    </div>

    <div class="bz-jc-pao" @mouseenter="zanting = true" @mouseleave="zanting = false">
      <div :key="huandengxu" class="bz-jc-pao-wen">
        <template v-if="chongding">
          <span style="color: #d97706; margin-right: 6px">↺</span><span class="bz-jc-ruo">The current assessment did not hold. Relocating the issue.</span>
        </template>
        <template v-else>
          <svg v-if="huandeng[huandengxu].ji" width="12" height="12" viewBox="0 0 12 12" style="margin-right: 6px; vertical-align: -1.5px">
            <path v-for="(d, i) in jiantou('++')" :key="i" :d="d" fill="none" stroke="#15803d" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
          <b>{{ huandeng[huandengxu].biao }}</b> <span class="bz-jc-ruo">{{ huandeng[huandengxu].wen }}</span>
        </template>
      </div>
      <button type="button" class="bz-jc-zhan" :class="{ 'bz-gl': gaoliang === 'zhankai' }" :title="t((kai ? 'causal.collapseDetails' : 'causal.expandDetails') as never)" @click="kai = !kai">
        <span v-if="gaoliang === 'zhankai' && biaoji" class="bz-biaoji" style="top: -12px; right: -10px">{{ biaoji }}</span>
        <svg width="12" height="12" viewBox="0 0 24 24" :style="{ transform: kai ? 'none' : 'rotate(-90deg)' }"><path fill="none" stroke="currentColor" stroke-width="2" d="m18 9l-6 6l-6-6" /></svg>
      </button>
    </div>

    <div v-if="kai" class="bz-jc-xi">
      <div>
        <div class="bz-jc-biao">Completion contract</div>
        <div class="bz-jc-qiyue">
          <span class="bz-jc-ruo2">Target</span><span>{{ shuju.mubiao }}</span>
          <span class="bz-jc-ruo2">Done</span><span>{{ shuju.wancheng }}</span>
        </div>
      </div>
      <div>
        <div class="bz-jc-biao">Root cause</div>
        <div class="bz-jc-gen">
          <span class="bz-jc-gen-tu" :class="{ 'bz-que': jieduan !== 'locate' && !chongding }">{{ jieduan !== "locate" && !chongding ? "✓" : "?" }}</span>
          <span>{{ jieduan === "locate" || chongding ? "Investigating — no candidate yet" : shuju.genyin }}</span>
        </div>
        <template v-if="jieduan !== 'locate' && !chongding">
          <div class="bz-jc-fu"><b>Mechanism: </b>{{ shuju.jizhi }}</div>
          <div class="bz-jc-fu"><b>Counterfactual: </b>{{ shuju.fanshi }}</div>
        </template>
      </div>
      <div v-if="huoyue.length">
        <div class="bz-jc-biao">Hypotheses ({{ huoyue.length }} testing)</div>
        <div v-for="h in huoyue" :key="h.id" class="bz-jc-jiashe">
          <div class="bz-jc-js-shang">
            <span class="bz-jc-js-id">{{ h.id }}</span>
            <span class="bz-jc-js-zt" :style="{ background: jiashese[h.zhuangtai].bg, color: jiashese[h.zhuangtai].fg }">{{ h.zhuangtai }}</span>
            <span class="bz-jc-js-wen">{{ h.miaoshu }}</span>
          </div>
          <div v-if="h.fou" class="bz-jc-js-fu"><b>Kill: </b>{{ h.fou }}</div>
        </div>
      </div>
      <div v-if="yijie.length">
        <button type="button" class="bz-jc-zhedie" @click="kaijiejue = !kaijiejue">
          <svg width="11" height="11" viewBox="0 0 24 24" :style="{ transform: kaijiejue ? 'none' : 'rotate(-90deg)' }"><path fill="none" stroke="currentColor" stroke-width="2" d="m18 9l-6 6l-6-6" /></svg>
          Resolved ({{ yijie.length }})
        </button>
        <template v-if="kaijiejue">
          <div v-for="h in yijie" :key="h.id" class="bz-jc-jiashe">
            <div class="bz-jc-js-shang">
              <span class="bz-jc-js-id">{{ h.id }}</span>
              <span class="bz-jc-js-zt" :style="{ background: jiashese[h.zhuangtai].bg, color: jiashese[h.zhuangtai].fg }">{{ h.zhuangtai }}</span>
              <span class="bz-jc-js-wen" :class="{ 'bz-shan': h.zhuangtai === 'rejected' }">{{ h.miaoshu }}</span>
            </div>
            <div v-if="h.jiaoxun" class="bz-jc-js-fu bz-jc-js-jx"><b>Lesson: </b>{{ h.jiaoxun }}</div>
          </div>
        </template>
      </div>
      <div>
        <div class="bz-jc-biao">Evidence (last {{ zuijin.length }})</div>
        <div v-for="(e, i) in zuijin" :key="i" class="bz-jc-zj">
          <span class="bz-jc-zj-tu">
            <svg v-if="zhengjuyuan[e.ji].fang === 'flat'" width="12" height="12" viewBox="0 0 12 12"><path d="M2 6 C 3.2 4.3, 4.8 4.3, 6 6 C 7.2 7.7, 8.8 7.7, 10 6" fill="none" :stroke="zhengjuyuan[e.ji].se" stroke-width="1.8" stroke-linecap="round" /></svg>
            <svg v-else width="12" height="12" viewBox="0 0 12 12"><path v-for="(d, j) in jiantou(e.ji)" :key="j" :d="d" fill="none" :stroke="zhengjuyuan[e.ji].se" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /></svg>
          </span>
          <span class="bz-jc-zj-lun">t{{ e.lun }}</span>
          <span class="bz-jc-zj-wen">{{ e.wen }}<span v-if="e.gongju" class="bz-jc-zj-gj">{{ e.gongju }}</span></span>
        </div>
      </div>
      <div v-if="jieduan === 'fix' || yijiejue">
        <div class="bz-jc-biao">Fix</div>
        <div class="bz-jc-xiu">{{ shuju.xiufu }}</div>
        <div class="bz-jc-yan"><b>Verify: </b>{{ shuju.yanzheng }}</div>
      </div>
      <div v-if="jieduan === 'verify'">
        <div class="bz-jc-biao">Open prediction</div>
        <div class="bz-jc-yuce"><span class="bz-jc-yuce-qian">t4 · awaiting verdict — </span>{{ shuju.yuce }}</div>
      </div>
      <div v-if="jieduan !== 'locate' && !chongding">
        <div class="bz-jc-biao">Causal graph ({{ shuju.tu.length }} edges)</div>
        <div class="bz-jc-tu">
          <svg :width="tubuju.kuan" :height="tubuju.gao">
            <g v-for="(e, i) in shuju.tu" :key="i">
              <path
                :d="`M ${kuangming(e.cong).x + kuangming(e.cong).w / 2} ${kuangming(e.cong).y + 20} L ${kuangming(e.dao).x + kuangming(e.dao).w / 2} ${kuangming(e.dao).y - 3}`"
                fill="none"
                class="bz-jc-tu-xian"
                stroke-width="1.2"
              />
              <path
                :d="`M ${kuangming(e.dao).x + kuangming(e.dao).w / 2 - 3} ${kuangming(e.dao).y - 6} L ${kuangming(e.dao).x + kuangming(e.dao).w / 2} ${kuangming(e.dao).y - 1} L ${kuangming(e.dao).x + kuangming(e.dao).w / 2 + 3} ${kuangming(e.dao).y - 6}`"
                fill="none"
                class="bz-jc-tu-xian"
                stroke-width="1.2"
              />
            </g>
            <g v-for="k in tubuju.kuang" :key="k.n">
              <rect :x="k.x" :y="k.y" :width="k.w" :height="k.h" rx="5" class="bz-jc-tu-kuang" />
              <text :x="k.x + k.w / 2" :y="k.y + 13.5" font-size="10" text-anchor="middle" class="bz-jc-tu-zi">{{ k.biao }}</text>
            </g>
          </svg>
        </div>
      </div>
    </div>
  </div>
  </div>
  </div>
</template>

<style scoped>
.bz-jc-wai {
  padding: 12px;
}

.bz-jc {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 2px;
  margin: 0 0 6px;
  padding-bottom: 3px;
  border-radius: 10px;
  color: var(--bz-fg);
  font-size: 12px;
  background: color-mix(in srgb, var(--bz-editor-bg) 95%, var(--bz-fg) 3%);
  box-shadow: inset 0 0 0 1px color-mix(in srgb, var(--bz-fg) 10%, transparent);
  text-align: left;
}

.bz-jc-tou {
  overflow: hidden;
  border-radius: 10px;
  background: color-mix(in srgb, var(--bz-editor-bg) 92%, var(--bz-fg) 8%);
  border: 1px solid color-mix(in srgb, var(--bz-fg) 12%, transparent);
}

.bz-jc-tou-hang {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 4px 12px;
  min-height: 28px;
  padding: 6px 10px;
}

.bz-jc-jindu {
  display: flex;
  flex: 1;
  align-items: center;
  min-width: 0;
  white-space: nowrap;
}

.bz-jc-bu {
  position: relative;
  display: flex;
  align-items: center;
  gap: 4px;
  flex-shrink: 0;
  border-radius: 6px;
}

.bz-jc-jie {
  position: relative;
  display: inline-grid;
  place-items: center;
  width: 22px;
  height: 22px;
}

.bz-jc-guo {
  display: inline-grid;
  place-items: center;
  width: 14px;
  height: 14px;
  border-radius: 4px;
  font-size: 9px;
  color: #16a34a;
  background: color-mix(in srgb, #16a34a 15%, transparent);
  box-shadow: inset 0 0 0 1px color-mix(in srgb, #16a34a 45%, transparent);
}

.bz-jc-mai {
  position: absolute;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  border: 1px solid;
  animation: bz-jc-mai 2.2s ease-out infinite;
}

@keyframes bz-jc-mai {
  0% { transform: scale(0.6); opacity: 0.9; }
  100% { transform: scale(1.55); opacity: 0; }
}

.bz-jc-dian {
  width: 5px;
  height: 5px;
  border-radius: 50%;
  box-shadow: inset 0 0 0 1px color-mix(in srgb, var(--bz-fg) 26%, transparent);
}

.bz-jc-dian.bz-huo {
  width: 6px;
  height: 6px;
}

.bz-jc-buming {
  font-size: 10px;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  opacity: 0.38;
}

.bz-jc-buming.bz-huo {
  font-weight: 700;
  opacity: 1;
}

.bz-jc-buming.bz-guo {
  opacity: 0.72;
}

.bz-jc-lian {
  flex: 0 1 22px;
  min-width: 10px;
  max-width: 22px;
  height: 1px;
  margin: 0 7px;
  opacity: 0.75;
  background: repeating-linear-gradient(90deg, color-mix(in srgb, var(--bz-fg) 26%, transparent) 0 3px, transparent 3px 6px);
}

.bz-jc-lian.bz-guo {
  opacity: 0.6;
  background: linear-gradient(90deg, #16a34a, color-mix(in srgb, #16a34a 30%, transparent));
}

.bz-jc-wan,
.bz-jc-xin-pai {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  flex-shrink: 0;
  padding: 1px 7px;
  border-radius: 999px;
  font-size: 9.5px;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  white-space: nowrap;
  color: var(--se);
  background: color-mix(in srgb, var(--se) 10%, transparent);
  box-shadow: inset 0 0 0 1px color-mix(in srgb, var(--se) 28%, transparent);
}

.bz-jc-wan i {
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: var(--se);
}

.bz-jc-wan i.bz-huxi {
  animation: bz-jc-huxi 1.8s ease-in-out infinite;
}

@keyframes bz-jc-huxi {
  50% { opacity: 0.3; }
}

.bz-jc-shu {
  width: 1px;
  height: 12px;
  flex-shrink: 0;
  background: color-mix(in srgb, var(--bz-fg) 14%, transparent);
}

.bz-jc-xin {
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  flex-shrink: 0;
  border-radius: 6px;
}

.bz-jc-xin-biao {
  font-size: 9px;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  opacity: 0.42;
}

.bz-jc-xinhao {
  display: flex;
  align-items: flex-end;
  gap: 2px;
}

.bz-jc-xinhao i {
  width: 3px;
  border-radius: 1px;
  background: color-mix(in srgb, var(--bz-fg) 16%, transparent);
}

.bz-jc-pao {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 6px 10px 7px;
  line-height: 1.4;
  overflow: hidden;
}

.bz-jc-pao-wen {
  flex: 1;
  min-width: 0;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  animation: bz-jc-ru 0.24s cubic-bezier(0.16, 1, 0.3, 1);
}

@keyframes bz-jc-ru {
  from { opacity: 0; transform: translateY(6px); }
  to { opacity: 1; transform: none; }
}

.bz-jc-pao-wen b {
  margin-right: 4px;
  font-weight: 600;
  opacity: 0.72;
}

.bz-jc-ruo {
  opacity: 0.88;
}

.bz-jc-zhan {
  position: relative;
  display: inline-grid;
  place-items: center;
  width: 20px;
  height: 20px;
  flex-shrink: 0;
  border-radius: 4px;
  opacity: 0.7;
}

.bz-jc-zhan svg {
  transition: transform 0.15s;
}

.bz-jc-xi {
  display: flex;
  flex-direction: column;
  gap: 12px;
  max-height: 260px;
  overflow-y: auto;
  padding: 8px 10px;
  scrollbar-width: thin;
}

.bz-jc-biao {
  margin-bottom: 4px;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.6px;
  text-transform: uppercase;
  opacity: 0.45;
}

.bz-jc-qiyue {
  display: grid;
  grid-template-columns: auto minmax(0, 1fr);
  gap: 3px 8px;
  line-height: 1.45;
}

.bz-jc-ruo2 {
  opacity: 0.48;
}

.bz-jc-gen {
  display: flex;
  align-items: flex-start;
  gap: 6px;
  line-height: 1.5;
}

.bz-jc-gen-tu {
  display: grid;
  place-items: center;
  width: 14px;
  height: 14px;
  flex-shrink: 0;
  margin-top: 1px;
  border-radius: 50%;
  font-size: 10px;
  font-weight: 700;
  opacity: 0.55;
  background: color-mix(in srgb, var(--bz-fg) 10%, transparent);
}

.bz-jc-gen-tu.bz-que {
  color: #16a34a;
  opacity: 1;
  background: color-mix(in srgb, #16a34a 18%, transparent);
}

.bz-jc-fu {
  margin-top: 6px;
  padding-left: 20px;
  font-size: 11px;
  line-height: 1.5;
  opacity: 0.7;
}

.bz-jc-fu b,
.bz-jc-js-fu b,
.bz-jc-yan b {
  font-weight: 600;
}

.bz-jc-jiashe {
  margin-top: 6px;
  padding: 6px 8px;
  border-radius: 6px;
  line-height: 1.45;
  background: color-mix(in srgb, var(--bz-fg) 4%, transparent);
  border: 1px solid color-mix(in srgb, var(--bz-fg) 8%, transparent);
}

.bz-jc-js-shang {
  display: flex;
  align-items: center;
  gap: 6px;
}

.bz-jc-js-id,
.bz-jc-js-zt {
  flex-shrink: 0;
  padding: 0 5px;
  border-radius: 3px;
  font-size: 10px;
  letter-spacing: 0.4px;
}

.bz-jc-js-id {
  font-weight: 700;
  opacity: 0.75;
  background: color-mix(in srgb, var(--bz-fg) 10%, transparent);
}

.bz-jc-js-zt {
  font-weight: 600;
}

.bz-jc-js-wen {
  flex: 1;
  min-width: 0;
}

.bz-jc-js-wen.bz-shan {
  opacity: 0.55;
  text-decoration: line-through;
}

.bz-jc-js-fu {
  margin-top: 4px;
  padding-left: 6px;
  font-size: 11px;
  opacity: 0.7;
  border-left: 2px solid color-mix(in srgb, var(--bz-fg) 12%, transparent);
}

.bz-jc-js-jx {
  font-style: italic;
  border-left-color: color-mix(in srgb, #dc2626 35%, transparent);
}

.bz-jc-zhedie {
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.3px;
  opacity: 0.55;
}

.bz-jc-zj {
  display: flex;
  align-items: flex-start;
  gap: 6px;
  margin-top: 4px;
  font-size: 11px;
  line-height: 1.5;
}

.bz-jc-zj-tu {
  flex-shrink: 0;
  width: 18px;
  margin-top: 2px;
  text-align: center;
}

.bz-jc-zj-lun {
  flex-shrink: 0;
  font-size: 10px;
  opacity: 0.45;
}

.bz-jc-zj-wen {
  flex: 1;
  min-width: 0;
  opacity: 0.85;
}

.bz-jc-zj-gj {
  margin-left: 5px;
  padding: 0 4px;
  border-radius: 3px;
  font-size: 9px;
  opacity: 0.8;
  background: color-mix(in srgb, var(--bz-fg) 8%, transparent);
}

.bz-jc-xiu {
  font-size: 11px;
  line-height: 1.5;
  opacity: 0.9;
}

.bz-jc-yan {
  margin-top: 4px;
  padding-left: 8px;
  font-size: 11px;
  line-height: 1.5;
  opacity: 0.75;
  border-left: 2px solid color-mix(in srgb, #16a34a 35%, transparent);
}

.bz-jc-yuce {
  padding-left: 8px;
  font-size: 11px;
  line-height: 1.5;
  opacity: 0.85;
  border-left: 2px solid color-mix(in srgb, #d97706 45%, transparent);
}

.bz-jc-yuce-qian {
  font-size: 10px;
  opacity: 0.55;
}

.bz-jc-tu {
  padding: 4px 2px;
  overflow-x: auto;
  border-radius: 6px;
  background: color-mix(in srgb, var(--bz-fg) 3%, transparent);
}

.bz-jc-tu-xian {
  stroke: color-mix(in srgb, var(--bz-fg) 40%, transparent);
}

.bz-jc-tu-kuang {
  fill: color-mix(in srgb, var(--bz-fg) 6%, transparent);
  stroke: color-mix(in srgb, var(--bz-fg) 22%, transparent);
}

.bz-jc-tu-zi {
  fill: var(--bz-fg);
  opacity: 0.9;
}

@media (prefers-reduced-motion: reduce) {
  .bz-jc-mai,
  .bz-jc-wan i.bz-huxi,
  .bz-jc-pao-wen {
    animation: none;
  }
}

/* ---------- 嚴格驗證關卡 ---------- */
.bz-jc-guan {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 6px 10px;
  background: color-mix(in srgb, #a78bfa 6%, var(--bz-editor-bg));
}

.bz-jc-guan-cheng {
  background: color-mix(in srgb, #16a34a 10%, var(--bz-editor-bg));
}

.bz-jc-guan-shang {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px;
}

.bz-jc-guan-biao {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  color: #a78bfa;
  font-size: 9.5px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.bz-jc-guan-cheng .bz-jc-guan-biao,
.bz-jc-guan-cheng-wen {
  color: #16a34a;
}

.bz-jc-guan-cheng-wen {
  font-size: 11.5px;
  font-weight: 700;
}

.bz-jc-guan-bu {
  display: flex;
  flex: 1;
  align-items: center;
  gap: 4px;
  min-width: 0;
}

.bz-jc-gb {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  flex-shrink: 0;
  font-size: 11px;
  font-weight: 600;
  white-space: nowrap;
}

.bz-jc-gb i {
  display: inline-grid;
  place-items: center;
  width: 13px;
  height: 13px;
  border-radius: 999px;
  font-size: 9px;
  font-style: normal;
  box-shadow: inset 0 0 0 1.5px color-mix(in srgb, var(--bz-fg) 35%, transparent);
}

.bz-jc-gb.bz-pending {
  opacity: 0.5;
}

.bz-jc-gb.bz-done {
  color: #16a34a;
}

.bz-jc-gb.bz-done i {
  background: color-mix(in srgb, #16a34a 18%, transparent);
  box-shadow: inset 0 0 0 1.5px color-mix(in srgb, #16a34a 70%, transparent);
}

.bz-jc-gb-xian {
  flex: 0 1 18px;
  min-width: 6px;
  height: 1.5px;
  border-radius: 1px;
  background: color-mix(in srgb, var(--bz-fg) 16%, transparent);
}

.bz-jc-gb-xian.bz-done {
  background: color-mix(in srgb, #16a34a 55%, transparent);
}

.bz-jc-guan-xia {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 10.5px;
}

.bz-jc-guan-ml {
  flex: 1;
  min-width: 0;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-family: var(--vp-font-family-mono);
  opacity: 0.62;
}

.bz-jc-guan-ji {
  flex-shrink: 0;
  white-space: nowrap;
  opacity: 0.55;
}
</style>
