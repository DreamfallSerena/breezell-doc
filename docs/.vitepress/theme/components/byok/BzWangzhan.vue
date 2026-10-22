<script setup lang="ts">
import { computed, ref } from "vue";
import BzTubiao from "./BzTubiao.vue";
import { shiyongwenben } from "./shuju";

// Breezell 官網（Breezellwangye/front2）上與解鎖有關的三個畫面：
// caidan   右上角頭像選單（navbar.tsx）
// shezhi   帳戶頁 Settings 分頁裡的「解鎖 Entanglement 與 Teams」卡片（dashboard-shell.tsx + entanglement-unlock-card.tsx）
// yaoqing  好友打開邀請連結後看到的助力頁（entanglement-invite-section.tsx）
// 官網只有中文與英文兩套文案（mode-unlock-i18n.ts：<html lang> 以 zh 開頭用中文，否則英文），這裡照樣處理。
const props = withDefaults(defineProps<{ ye?: string; jindu?: number; lianjie?: boolean; zhuangtai?: string; gaoliang?: string; biaoji?: string }>(), {
  ye: "shezhi",
  jindu: 2,
  lianjie: false,
  zhuangtai: "",
  gaoliang: "",
  biaoji: "",
});

const { yuyan } = shiyongwenben();
const zh = computed(() => String(yuyan.value).startsWith("zh"));

const wen = computed(() =>
  zh.value
    ? {
        title: "纠缠模式与团队模式解锁",
        description: "开通任意付费套餐即可直接使用纠缠模式和团队模式；免费用户也可以邀请 5 名 Breezell 用户助力，永久解锁。",
        progress: "解锁进度",
        unlocked: "您已解锁纠缠模式和团队模式",
        generate: "生成邀请链接",
        regenerate: "重新生成",
        copy: "复制链接",
        copied: "已复制",
        inviteTitle: "帮助好友解锁纠缠模式和团队模式",
        inviteDescription: "Alex 邀请您为纠缠模式和团队模式解锁助力。",
        loginRequired: "请先登录或注册，再确认助力。",
        login: "登录",
        register: "注册",
        assist: "为 TA 助力",
        assistSuccess: "助力成功",
        assistedOther: "每个账号只能为一位用户助力解锁",
        goProfile: "查看我的账户",
      }
    : {
        title: "Unlock Entanglement and Teams Modes",
        description: "Any paid plan includes Entanglement and Teams modes. On the Free plan, invite five Breezell users to unlock them permanently.",
        progress: "Unlock progress",
        unlocked: "Entanglement and Teams modes are unlocked",
        generate: "Generate invite link",
        regenerate: "Regenerate",
        copy: "Copy link",
        copied: "Copied",
        inviteTitle: "Help unlock Entanglement and Teams modes",
        inviteDescription: "Alex invited you to assist their Entanglement and Teams mode unlock.",
        loginRequired: "Sign in or register before confirming your assist.",
        login: "Sign in",
        register: "Register",
        assist: "Assist",
        assistSuccess: "Assist completed",
        assistedOther: "Each account can assist only one unlock",
        goProfile: "View my account",
      },
);

// 帳戶頁左側欄（dashboard-shell.tsx NAV_GROUPS）
const daohang = [
  [
    { ming: "Overview", tu: "house" },
    { ming: "Usage", tu: "chart-column" },
    { ming: "Billing", tu: "credit-card" },
  ],
  [
    { ming: "Devices", tu: "monitor-smartphone" },
    { ming: "Settings", tu: "settings" },
  ],
  [{ ming: "Team", tu: "users" }],
];

const yisheng = ref(props.lianjie);
const yifuzhi = ref(false);
const lianjiewen = "https://breezell.com/mode-invite/entanglement?token=YOUR_INVITE_TOKEN";
const fuzhi = () => {
  yifuzhi.value = true;
  setTimeout(() => (yifuzhi.value = false), 1800);
};
</script>

<template>
  <div class="bz-wz" :class="{ 'bz-wz-zh': zh }">
    <!-- 頭像選單 -->
    <div v-if="ye === 'caidan'" class="bz-wz-kuang bz-wz-dingbu">
      <div class="bz-wz-daohang">
        <span class="bz-wz-logo">Breezell</span>
        <span class="bz-wz-lianjie">Docs</span>
        <span class="bz-wz-lianjie">Pricing</span>
        <span class="bz-wz-kong" />
        <span class="bz-wz-touxiang bz-wz-touxiang-xiao" :class="{ 'bz-gl': gaoliang === 'touxiang' }">
          AL
          <span v-if="gaoliang === 'touxiang' && biaoji" class="bz-biaoji" style="top: -10px; right: -12px">{{ biaoji }}</span>
        </span>
      </div>
      <div class="bz-wz-caidan">
        <div class="bz-wz-cd-tou">
          <span class="bz-wz-touxiang">AL</span>
          <span class="bz-wz-cd-ren"><b>Alex</b><span>alex@example.com</span></span>
          <BzTubiao ming="chevron-right" :daxiao="16" :cuxi="2" class="bz-wz-ruo" />
        </div>
        <div class="bz-wz-cd-xinxi">
          <div><span><BzTubiao ming="crown" :daxiao="16" :cuxi="2" />Plan</span><b>Free</b></div>
          <div><span><BzTubiao ming="wallet" :daxiao="16" :cuxi="2" />Balance</span><b>$0.00</b></div>
        </div>
        <div class="bz-wz-cd-di">
          <span class="bz-wz-cd-xiang" :class="{ 'bz-gl': gaoliang === 'profile' }">
            <BzTubiao ming="user" :daxiao="16" :cuxi="2" />Profile
            <span v-if="gaoliang === 'profile' && biaoji" class="bz-biaoji" style="top: -10px; right: -8px">{{ biaoji }}</span>
          </span>
          <span class="bz-wz-cd-xiang"><BzTubiao ming="users" :daxiao="16" :cuxi="2" />Team</span>
        </div>
      </div>
    </div>

    <!-- 帳戶頁 Settings 分頁 -->
    <div v-else-if="ye === 'shezhi'" class="bz-wz-kuang bz-wz-zhuye">
      <aside class="bz-wz-ce">
        <div class="bz-wz-ce-logo">Breezell</div>
        <div v-for="(zu, i) in daohang" :key="i" class="bz-wz-ce-zu">
          <span
            v-for="x in zu"
            :key="x.ming"
            class="bz-wz-ce-xiang"
            :class="{ 'bz-xuan': x.ming === 'Settings', 'bz-gl': gaoliang === 'settings' && x.ming === 'Settings' }"
          >
            <BzTubiao :ming="x.tu" :daxiao="16" :cuxi="2" />{{ x.ming }}
            <span v-if="gaoliang === 'settings' && x.ming === 'Settings' && biaoji" class="bz-biaoji" style="top: -8px; right: -8px">{{ biaoji }}</span>
          </span>
        </div>
        <div class="bz-wz-ce-di">
          <span class="bz-wz-touxiang bz-wz-touxiang-xiao bz-wz-touxiang-hui">AL</span>
          <span class="bz-wz-cd-ren"><b>Alex</b><span>Free</span></span>
          <BzTubiao ming="ellipsis" :daxiao="16" :cuxi="2" class="bz-wz-ruo" />
        </div>
      </aside>
      <main class="bz-wz-nei">
        <div class="bz-wz-duan">
          <div class="bz-wz-duan-biao">Account</div>
          <div class="bz-wz-hang"><span>Name</span><b>Alex</b></div>
          <div class="bz-wz-hang"><span>Plan</span><b class="bz-wz-pill">Free</b></div>
        </div>
        <div class="bz-wz-ka" :class="{ 'bz-gl': gaoliang === 'ka' }">
          <span v-if="gaoliang === 'ka' && biaoji" class="bz-biaoji" style="top: -10px; right: -8px">{{ biaoji }}</span>
          <div class="bz-wz-ka-tou">
            <span class="bz-wz-ka-tu" :class="{ 'bz-wz-cheng': jindu >= 5 }"><BzTubiao :ming="jindu >= 5 ? 'circle-check' : 'lock-keyhole'" :daxiao="20" :cuxi="2" /></span>
            <div class="bz-wz-ka-wen">
              <h3>{{ wen.title }}</h3>
              <p>{{ jindu >= 5 ? wen.unlocked : wen.description }}</p>
            </div>
            <BzTubiao ming="refresh-cw" :daxiao="16" :cuxi="2" class="bz-wz-ruo" />
          </div>
          <template v-if="jindu < 5">
            <div class="bz-wz-jd-tou"><span>{{ wen.progress }}</span><b>{{ jindu }}/5</b></div>
            <div class="bz-wz-jd"><i :style="{ width: `${(jindu / 5) * 100}%` }" /></div>
            <div class="bz-wz-an-zu">
              <button type="button" class="bz-wz-an bz-wz-an-zhu" :class="{ 'bz-gl': gaoliang === 'shengcheng' }" @click="yisheng = true">
                <span v-if="gaoliang === 'shengcheng' && biaoji" class="bz-biaoji" style="top: -10px; right: -8px">{{ biaoji }}</span>
                <BzTubiao :ming="yisheng ? 'refresh-cw' : 'link-2'" :daxiao="16" :cuxi="2" />{{ yisheng ? wen.regenerate : wen.generate }}
              </button>
              <button v-if="yisheng" type="button" class="bz-wz-an" :class="{ 'bz-gl': gaoliang === 'fuzhi' }" @click="fuzhi">
                <span v-if="gaoliang === 'fuzhi' && biaoji" class="bz-biaoji" style="top: -10px; right: -8px">{{ biaoji }}</span>
                <BzTubiao :ming="yifuzhi ? 'check' : 'copy'" :daxiao="16" :cuxi="2" />{{ yifuzhi ? wen.copied : wen.copy }}
              </button>
            </div>
            <div v-if="yisheng" class="bz-wz-url">{{ lianjiewen }}</div>
          </template>
        </div>
      </main>
    </div>

    <!-- 好友看到的助力頁 -->
    <div v-else class="bz-wz-kuang bz-wz-yq">
      <div class="bz-wz-yq-ka">
        <span class="bz-wz-yq-tu" :class="{ 'bz-wz-cheng': zhuangtai === 'chenggong' }"><BzTubiao :ming="zhuangtai === 'chenggong' ? 'circle-check' : 'lock-keyhole'" :daxiao="40" :cuxi="2" /></span>
        <h3>{{ zhuangtai === "chenggong" ? wen.assistSuccess : wen.inviteTitle }}</h3>
        <p>{{ zhuangtai === "chenggong" ? "3/5" : wen.inviteDescription }}</p>
        <template v-if="zhuangtai === 'weidenglu'">
          <p class="bz-wz-yq-ti">{{ wen.loginRequired }}</p>
          <div class="bz-wz-yq-er">
            <span class="bz-wz-an bz-wz-an-zhu bz-wz-an-da">{{ wen.login }}</span>
            <span class="bz-wz-an bz-wz-an-da">{{ wen.register }}</span>
          </div>
        </template>
        <span v-else-if="zhuangtai === 'chenggong'" class="bz-wz-an bz-wz-an-da bz-wz-yq-hui">{{ wen.goProfile }}</span>
        <span v-else-if="zhuangtai === 'yizhuli'" class="bz-wz-yq-kuang">{{ wen.assistedOther }}</span>
        <span v-else class="bz-wz-an bz-wz-an-zhu bz-wz-an-da bz-wz-an-man" :class="{ 'bz-gl': gaoliang === 'zhuli' }">
          <span v-if="gaoliang === 'zhuli' && biaoji" class="bz-biaoji" style="top: -10px; right: -8px">{{ biaoji }}</span>
          <BzTubiao ming="user-plus" :daxiao="16" :cuxi="2" />{{ wen.assist }}
        </span>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* 官網的 shadcn 色票（global.css），淺色與深色各一組 */
.bz-wz {
  --wz-bg: oklch(1 0 0);
  --wz-fg: oklch(0.2 0.005 55);
  --wz-card: oklch(1 0 0);
  --wz-primary: oklch(0.28 0.01 55);
  --wz-primary-fg: oklch(0.98 0.003 75);
  --wz-muted: oklch(0.955 0.005 75);
  --wz-muted-fg: oklch(0.52 0.01 60);
  --wz-border: oklch(0.91 0.006 70);
  --wz-sidebar: oklch(0.975 0.003 75);
  --bz-mark: #ff7340;
  margin: 16px 0;
  font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif;
  color: var(--wz-fg);
  text-align: left;
}

.dark .bz-wz {
  --wz-bg: oklch(0.13 0.004 55);
  --wz-fg: oklch(0.92 0.005 75);
  --wz-card: oklch(0.17 0.005 55);
  --wz-primary: oklch(0.88 0.015 75);
  --wz-primary-fg: oklch(0.15 0.005 55);
  --wz-muted: oklch(0.22 0.006 55);
  --wz-muted-fg: oklch(0.58 0.01 65);
  --wz-border: oklch(1 0.005 65 / 10%);
  --wz-sidebar: oklch(0.15 0.004 55);
}

.bz-wz :deep(.bz-biaoji) {
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

.bz-wz .bz-gl {
  position: relative;
  box-shadow: 0 0 0 2px var(--bz-mark), 0 0 0 6px color-mix(in srgb, var(--bz-mark) 28%, transparent) !important;
}

.bz-wz button {
  font: inherit;
  cursor: pointer;
  border: none;
  background: none;
  color: inherit;
}

.bz-wz h3,
.bz-wz p {
  margin: 0;
  border: none;
  padding: 0;
  letter-spacing: normal;
  line-height: 1.5;
}

.bz-wz-kuang {
  overflow: hidden;
  border-radius: 12px;
  background: var(--wz-bg);
  border: 1px solid var(--wz-border);
  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.02), 0 12px 32px -18px rgba(0, 0, 0, 0.35);
}

.bz-wz-ruo {
  flex-shrink: 0;
  color: var(--wz-muted-fg);
}

.bz-wz-touxiang {
  position: relative;
  display: inline-grid;
  place-items: center;
  width: 40px;
  height: 40px;
  flex-shrink: 0;
  border-radius: 50%;
  font-size: 14px;
  font-weight: 600;
  color: var(--wz-primary-fg);
  background: var(--wz-primary);
}

.bz-wz-touxiang-xiao {
  width: 28px;
  height: 28px;
  font-size: 12px;
  font-weight: 500;
}

.bz-wz-touxiang-hui {
  color: var(--wz-muted-fg);
  background: var(--wz-muted);
}

/* ---------- 頭像選單 ---------- */
.bz-wz-dingbu {
  position: relative;
  min-height: 330px;
}

.bz-wz-daohang {
  display: flex;
  align-items: center;
  gap: 20px;
  height: 56px;
  padding: 0 20px;
  border-bottom: 1px solid var(--wz-border);
}

.bz-wz-logo {
  font-weight: 700;
  font-size: 15px;
}

.bz-wz-lianjie {
  font-size: 14px;
  color: var(--wz-muted-fg);
}

.bz-wz-kong {
  flex: 1;
}

.bz-wz-caidan {
  position: absolute;
  top: 64px;
  right: 16px;
  width: min(288px, calc(100% - 32px));
  overflow: hidden;
  border-radius: 12px;
  background: var(--wz-card);
  border: 1px solid var(--wz-border);
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.15);
}

.bz-wz-cd-tou {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px;
  border-bottom: 1px solid var(--wz-border);
}

.bz-wz-cd-ren {
  display: flex;
  flex: 1;
  flex-direction: column;
  min-width: 0;
  font-size: 12px;
  color: var(--wz-muted-fg);
}

.bz-wz-cd-ren b {
  font-size: 14px;
  font-weight: 500;
  color: var(--wz-fg);
}

.bz-wz-cd-xinxi {
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 16px;
  font-size: 14px;
}

.bz-wz-cd-xinxi div {
  display: flex;
  justify-content: space-between;
}

.bz-wz-cd-xinxi span {
  display: flex;
  align-items: center;
  gap: 8px;
  color: var(--wz-muted-fg);
}

.bz-wz-cd-xinxi b {
  font-weight: 500;
}

.bz-wz-cd-di {
  display: flex;
  flex-direction: column;
  padding: 8px 12px;
  border-top: 1px solid var(--wz-border);
}

.bz-wz-cd-xiang {
  position: relative;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  border-radius: 8px;
  font-size: 14px;
}

/* ---------- 帳戶頁 ---------- */
.bz-wz-zhuye {
  display: flex;
  min-height: 420px;
  container-type: inline-size;
}

.bz-wz-ce {
  display: flex;
  flex-direction: column;
  gap: 14px;
  width: 200px;
  flex-shrink: 0;
  padding: 16px 10px;
  background: var(--wz-sidebar);
  border-right: 1px solid var(--wz-border);
}

.bz-wz-ce-logo {
  padding: 0 8px 4px;
  font-weight: 700;
}

.bz-wz-ce-zu {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.bz-wz-ce-xiang {
  position: relative;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 7px 8px;
  border-radius: 6px;
  font-size: 14px;
  color: var(--wz-muted-fg);
}

.bz-wz-ce-xiang.bz-xuan {
  font-weight: 500;
  color: var(--wz-fg);
  background: var(--wz-muted);
}

.bz-wz-ce-di {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: auto;
  padding: 8px;
}

.bz-wz-nei {
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 24px;
  min-width: 0;
  padding: 24px;
}

.bz-wz-duan-biao {
  margin-bottom: 8px;
  font-size: 14px;
  font-weight: 600;
}

.bz-wz-hang {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
  font-size: 14px;
  border-top: 1px solid var(--wz-border);
}

.bz-wz-hang span {
  color: var(--wz-muted-fg);
}

.bz-wz-hang b {
  font-weight: 400;
}

.bz-wz-pill {
  padding: 2px 10px;
  border-radius: 999px;
  font-size: 12px;
  border: 1px solid var(--wz-border);
}

.bz-wz-ka {
  position: relative;
  padding: 24px;
  border-radius: 12px;
  background: var(--wz-card);
  box-shadow: inset 0 0 0 1px color-mix(in oklab, var(--wz-border) 70%, transparent);
}

.bz-wz-ka-tou {
  display: flex;
  align-items: flex-start;
  gap: 16px;
}

.bz-wz-ka-tu {
  display: grid;
  place-items: center;
  width: 40px;
  height: 40px;
  flex-shrink: 0;
  border-radius: 12px;
  color: var(--wz-primary);
  background: color-mix(in oklab, var(--wz-primary) 10%, transparent);
}

.bz-wz-ka-tu.bz-wz-cheng {
  color: #10b981;
  background: color-mix(in oklab, #10b981 10%, transparent);
}

.bz-wz-ka-wen {
  flex: 1;
  min-width: 0;
}

.bz-wz-ka-wen h3 {
  font-size: 16px;
  font-weight: 500;
}

.bz-wz-ka-wen p {
  margin-top: 4px;
  font-size: 14px;
  color: var(--wz-muted-fg);
}

.bz-wz-jd-tou {
  display: flex;
  justify-content: space-between;
  margin-top: 24px;
  font-size: 14px;
  color: var(--wz-muted-fg);
}

.bz-wz-jd-tou b {
  font-family: ui-monospace, monospace;
  font-weight: 400;
  color: var(--wz-fg);
}

.bz-wz-jd {
  height: 8px;
  margin-top: 8px;
  overflow: hidden;
  border-radius: 999px;
  background: var(--wz-muted);
}

.bz-wz-jd i {
  display: block;
  height: 100%;
  border-radius: 999px;
  background: var(--wz-primary);
}

.bz-wz-an-zu {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 20px;
}

.bz-wz-an {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 8px 16px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
  border: 1px solid var(--wz-border) !important;
}

.bz-wz-an-zhu {
  color: var(--wz-primary-fg) !important;
  background: var(--wz-primary) !important;
  border-color: transparent !important;
}

.bz-wz-url {
  margin-top: 12px;
  padding: 8px 12px;
  overflow-x: auto;
  border-radius: 8px;
  font-family: ui-monospace, monospace;
  font-size: 12px;
  white-space: nowrap;
  color: var(--wz-muted-fg);
  background: color-mix(in oklab, var(--wz-muted) 40%, transparent);
  border: 1px solid var(--wz-border);
}

@container (max-width: 560px) {
  .bz-wz-ce {
    display: none;
  }

  .bz-wz-nei {
    padding: 16px;
  }

  .bz-wz-ka {
    padding: 18px;
  }
}

/* ---------- 助力頁 ---------- */
.bz-wz-yq {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 380px;
  padding: 24px;
}

.bz-wz-yq-ka {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 512px;
  padding: 32px;
  border-radius: 16px;
  text-align: center;
  background: var(--wz-card);
  border: 1px solid var(--wz-border);
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.05);
}

.bz-wz-yq-tu {
  display: grid;
  place-items: center;
  width: 80px;
  height: 80px;
  margin-bottom: 24px;
  border-radius: 50%;
  color: var(--wz-primary);
  background: color-mix(in oklab, var(--wz-primary) 10%, transparent);
}

.bz-wz-yq-tu.bz-wz-cheng {
  color: #10b981;
  background: color-mix(in oklab, #10b981 10%, transparent);
}

.bz-wz-yq-ka h3 {
  font-size: 22px;
  font-weight: 700;
}

.bz-wz-yq-ka p {
  margin-top: 12px;
  font-size: 14px;
  line-height: 1.7;
  color: var(--wz-muted-fg);
}

.bz-wz-yq-ka .bz-wz-yq-ti {
  margin-top: 20px;
}

.bz-wz-yq-er {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
  width: 100%;
  margin-top: 20px;
}

.bz-wz-an-da {
  padding: 12px 16px;
  border-radius: 12px;
}

.bz-wz-an-man {
  width: 100%;
  margin-top: 24px;
}

.bz-wz-yq-hui {
  margin-top: 24px;
}

.bz-wz-yq-kuang {
  width: 100%;
  margin-top: 24px;
  padding: 12px 16px;
  border-radius: 12px;
  font-size: 14px;
  color: var(--wz-muted-fg);
  border: 1px solid var(--wz-border);
}
</style>
