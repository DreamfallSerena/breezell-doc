<script setup lang="ts">
import { computed, onMounted, ref } from "vue";
import BzTubiao from "./BzTubiao.vue";
import BzPinpai from "./BzPinpai.vue";

// Breezell 官網（Breezellwangye/front2）上與登入、邀請解鎖有關的畫面：
// caidan        頂部導覽列與右上角頭像選單（navbar.tsx）
// yonghucaidan  帳戶頁側欄底部的使用者選單（dashboard-shell.tsx UserMenu）
// shezhi        帳戶頁 Settings 分頁（profile-section.tsx）與其中的解鎖卡片（entanglement-unlock-card.tsx）
// yaoqing       好友打開邀請連結後看到的助力頁（entanglement-invite-section.tsx）
// denglu        登入／註冊頁（login-section.tsx；註冊是同一個元件的三步模式）
// zhuomian      編輯器發起登入時的「Sign in to Breezell desktop」確認頁（login-section.tsx EditorDesktopConfirm）
// 官網每個頁面都是 <html lang="en">，沒有語言切換，所以這裡在所有語言的文檔裡都顯示英文（mode-unlock-i18n.ts 的 en 文案）。
const props = withDefaults(
  defineProps<{
    ye?: string;
    jindu?: number;
    lianjie?: boolean;
    zhuangtai?: string;
    buzhou?: number;
    laiyuan?: string;
    gaoliang?: string;
    biaoji?: string;
  }>(),
  {
    ye: "shezhi",
    jindu: 2,
    lianjie: false,
    zhuangtai: "",
    buzhou: 1,
    laiyuan: "",
    gaoliang: "",
    biaoji: "",
  },
);

const wen = {
  title: "Unlock Entanglement and Teams Modes",
  description: "Any paid plan includes Entanglement and Teams modes. On the Free plan, invite five Breezell users to unlock them permanently.",
  progress: "Unlock progress",
  unlocked: "Entanglement and Teams modes are unlocked",
  adminUnlocked: "Your Entanglement and Teams modes are unlocked. Welcome!",
  planUnlocked: "Entanglement and Teams modes are included in your plan",
  generate: "Generate invite link",
  regenerate: "Regenerate",
  copy: "Copy link",
  copied: "Copied",
  signIn: "Sign in to view unlock progress",
  inviteTitle: "Help unlock Entanglement and Teams modes",
  inviteDescription: "A***x invited you to assist their Entanglement and Teams mode unlock.",
  loginRequired: "Sign in or register before confirming your assist.",
  login: "Sign in",
  register: "Register",
  assist: "Assist",
  assistSuccess: "Assist completed",
  alreadyAssisted: "You already completed this assist",
  assistedOther: "Each account can assist only one unlock",
  selfAssist: "You cannot assist yourself",
  deviceAlreadyAssisted: "This device has already completed an unlock assist",
  deviceVerificationFailed: "Unable to verify this device. Refresh the page and try again.",
  completed: "This user already completed the unlock",
  invalid: "This invite link is invalid or expired",
  networkError: "Unlock status is temporarily unavailable. Please try again.",
  unavailableTitle: "Unable to load unlock status",
  retry: "Retry",
  goProfile: "View my account",
};

const lianjiewen = "https://breezell.com/mode-invite/entanglement?token=YOUR_INVITE_TOKEN";
const yaoqinglujing = "%2Fmode-invite%2Fentanglement%3Ftoken%3D…";

// 瀏覽器網址列：不是官網的一部分，只用來標出畫面所在的網址。
const dizhi = computed(() => {
  switch (props.ye) {
    case "caidan":
      return "breezell.com";
    case "yonghucaidan":
    case "shezhi":
      return "breezell.com/profile?tab=settings";
    case "yaoqing":
      return "breezell.com/mode-invite/entanglement?token=…";
    case "zhuomian":
      return "breezell.com/login?from=vscode&windowId=1";
    default:
      if (props.laiyuan === "bianjiqi") return "breezell.com/login?from=vscode&windowId=1";
      if (props.laiyuan === "yaoqing") return `breezell.com/${props.zhuangtai === "zhuce" ? "signup" : "login"}?redirect=${yaoqinglujing}`;
      return `breezell.com/${props.zhuangtai === "zhuce" ? "signup" : "login"}`;
  }
});

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

// 導覽列中間的連結（navbar.tsx ITEMS）
const dingdaohang = ["Pricing", "Docs", "FAQ", "Contact"];

// 解鎖卡片：jindu 到 5 即為已解鎖（source=assist）；zhuangtai 可指定 weidenglu / bukeyong / taocan / guanli。
const kazhuangtai = computed(() => {
  if (props.zhuangtai === "weidenglu" || props.zhuangtai === "bukeyong") return props.zhuangtai;
  if (props.zhuangtai === "taocan" || props.zhuangtai === "guanli") return "jiesuo";
  return props.jindu >= 5 ? "jiesuo" : "jindu";
});
const jiesuowen = computed(() =>
  props.zhuangtai === "guanli" ? wen.adminUnlocked : props.zhuangtai === "taocan" ? wen.planUnlocked : wen.unlocked,
);

const yisheng = ref(props.lianjie);
const yifuzhi = ref(false);
const fuzhi = () => {
  yifuzhi.value = true;
  setTimeout(() => (yifuzhi.value = false), 1800);
};

// 助力頁
const yqdenglu = computed(() => props.zhuangtai !== "weidenglu");
const yqlv = computed(() => props.zhuangtai === "chenggong" || props.zhuangtai === "yizhuli");
const yqzuzhi = computed(
  () =>
    ({
      yizhuli: wen.alreadyAssisted,
      taren: wen.assistedOther,
      ziji: wen.selfAssist,
      wancheng: wen.completed,
    })[props.zhuangtai] ?? "",
);
const yqcuowu = computed(
  () => ({ shebei: wen.deviceAlreadyAssisted, yanzheng: wen.deviceVerificationFailed })[props.zhuangtai] ?? "",
);

// 登入／註冊頁：可以點 Sign Up / Sign In 切換，註冊三步可以用 Previous / Next 走一遍。
const zhuce = ref(props.zhuangtai === "zhuce");
const dangqianbu = ref(props.buzhou);
const qiehuan = () => {
  zhuce.value = !zhuce.value;
  dangqianbu.value = 1;
};

// 桌面登入確認頁
const zmwancheng = computed(() => props.zhuangtai === "wancheng");
const zmfuzhi = ref(false);
const fuzhima = () => {
  zmfuzhi.value = true;
  setTimeout(() => (zmfuzhi.value = false), 1500);
};

// 帳戶頁內容區可以捲動；打開時把解鎖卡片捲到可見位置。
const neirong = ref<HTMLElement | null>(null);
const kapian = ref<HTMLElement | null>(null);
onMounted(() => {
  if (props.ye === "shezhi" && neirong.value && kapian.value) {
    const cha = kapian.value.getBoundingClientRect().top - neirong.value.getBoundingClientRect().top;
    neirong.value.scrollTop = Math.max(0, cha - 20);
  }
});
</script>

<template>
  <div class="bz-wz">
    <div class="bz-wz-kuang" :class="{ 'bz-wz-kuang-zm': ye === 'zhuomian' }">
      <div class="bz-wz-liulanqi" aria-hidden="true">
        <span class="bz-wz-dian" /><span class="bz-wz-dian" /><span class="bz-wz-dian" />
        <span class="bz-wz-dizhi"><BzTubiao ming="lock-keyhole" :daxiao="11" :cuxi="2" />{{ dizhi }}</span>
      </div>

      <!-- 頂部導覽列：caidan 與 yaoqing 共用 -->
      <header v-if="ye === 'caidan' || ye === 'yaoqing'" class="bz-wz-daohang">
        <span class="bz-wz-logo"><BzPinpai pinpai="breezell" :daxiao="22" />Breezell</span>
        <nav class="bz-wz-zhongjian">
          <span class="bz-wz-lianjie">Resources<BzTubiao ming="chevron-down" :daxiao="12" :cuxi="2" /></span>
          <span v-for="x in dingdaohang" :key="x" class="bz-wz-lianjie">{{ x }}</span>
        </nav>
        <span class="bz-wz-you">
          <span class="bz-wz-zhuti"><BzTubiao ming="sun" :daxiao="16" :cuxi="2" /></span>
          <span v-if="ye === 'yaoqing' && !yqdenglu" class="bz-wz-an bz-wz-an-xiao">Login</span>
          <span v-else class="bz-wz-touxiang bz-wz-touxiang-7" :class="{ 'bz-gl': gaoliang === 'touxiang' }">
            {{ ye === "caidan" ? "A" : "S" }}
            <span v-if="gaoliang === 'touxiang' && biaoji" class="bz-biaoji" style="top: -10px; right: -12px">{{ biaoji }}</span>
          </span>
        </span>
      </header>

      <!-- 頭像選單（navbar.tsx） -->
      <div v-if="ye === 'caidan'" class="bz-wz-shouye">
        <div class="bz-wz-caidan">
          <div class="bz-wz-cd-tou">
            <span class="bz-wz-touxiang bz-wz-touxiang-10">A</span>
            <span class="bz-wz-cd-ren"><b>Alex</b><span>alex@example.com</span></span>
            <BzTubiao ming="chevron-right" :daxiao="16" :cuxi="2" class="bz-wz-ruo" />
          </div>
          <div class="bz-wz-cd-xinxi">
            <div><span><BzTubiao ming="crown" :daxiao="16" :cuxi="2" />Plan</span><b>Free</b></div>
            <div><span><BzTubiao ming="wallet" :daxiao="16" :cuxi="2" />Balance</span><b>$0.00</b></div>
            <div><span><BzTubiao ming="calendar" :daxiao="16" :cuxi="2" />Expires</span><b>Never</b></div>
          </div>
          <div class="bz-wz-cd-di">
            <span class="bz-wz-cd-xiang" :class="{ 'bz-gl': gaoliang === 'profile' }">
              <BzTubiao ming="user" :daxiao="16" :cuxi="2" />Profile
              <span v-if="gaoliang === 'profile' && biaoji" class="bz-biaoji" style="top: -10px; right: -8px">{{ biaoji }}</span>
            </span>
            <span class="bz-wz-cd-xiang"><BzTubiao ming="users" :daxiao="16" :cuxi="2" />Team</span>
          </div>
          <div class="bz-wz-cd-di">
            <span class="bz-wz-cd-xiang bz-wz-hong"><BzTubiao ming="log-out" :daxiao="16" :cuxi="2" />Sign Out</span>
          </div>
        </div>
      </div>

      <!-- 帳戶頁（dashboard-shell.tsx + profile-section.tsx） -->
      <div v-else-if="ye === 'shezhi' || ye === 'yonghucaidan'" class="bz-wz-zhuye" :class="{ 'bz-wz-zhuye-ce': ye === 'yonghucaidan' }">
        <aside class="bz-wz-ce">
          <div class="bz-wz-ce-tou">
            <span class="bz-wz-fanhui"><BzTubiao ming="arrow-left" :daxiao="12" :cuxi="2" />Back to Breezell</span>
            <span class="bz-wz-zhuti"><BzTubiao ming="sun" :daxiao="16" :cuxi="2" /></span>
          </div>
          <nav class="bz-wz-ce-dao">
            <template v-for="(zu, i) in daohang" :key="i">
              <div v-if="i > 0" class="bz-wz-ce-kong" />
              <span
                v-for="x in zu"
                :key="x.ming"
                class="bz-wz-ce-xiang"
                :class="{ 'bz-xuan': x.ming === 'Settings', 'bz-gl': gaoliang === 'settings' && x.ming === 'Settings' }"
              >
                <span class="bz-wz-ce-tu"><BzTubiao :ming="x.tu" :daxiao="14" :cuxi="2" /></span>{{ x.ming }}
                <span v-if="gaoliang === 'settings' && x.ming === 'Settings' && biaoji" class="bz-biaoji" style="top: -8px; right: -8px">{{ biaoji }}</span>
              </span>
            </template>
          </nav>
          <div class="bz-wz-ce-di">
            <div v-if="ye === 'yonghucaidan'" class="bz-wz-xiala">
              <div class="bz-wz-xl-biao"><b>Alex</b><span>alex@example.com</span></div>
              <div class="bz-wz-xl-fen" />
              <span class="bz-wz-xl-xiang"><BzTubiao ming="tags" :daxiao="16" :cuxi="2" />Plans &amp; pricing</span>
              <span class="bz-wz-xl-xiang" :class="{ 'bz-gl': gaoliang === 'zhanghushezhi' }">
                <BzTubiao ming="settings" :daxiao="16" :cuxi="2" />Account settings
                <span v-if="gaoliang === 'zhanghushezhi' && biaoji" class="bz-biaoji" style="top: -10px; right: -8px">{{ biaoji }}</span>
              </span>
              <div class="bz-wz-xl-fen" />
              <span class="bz-wz-xl-xiang bz-wz-hong"><BzTubiao ming="log-out" :daxiao="16" :cuxi="2" />Sign out</span>
            </div>
            <div class="bz-wz-yonghu" :class="{ 'bz-kai': ye === 'yonghucaidan' }">
              <span class="bz-wz-touxiang bz-wz-touxiang-7 bz-wz-touxiang-hui">AL</span>
              <span class="bz-wz-cd-ren"><b>Alex</b><span>Free</span></span>
              <BzTubiao ming="ellipsis" :daxiao="16" :cuxi="2" class="bz-wz-ruo" />
            </div>
          </div>
        </aside>
        <main ref="neirong" class="bz-wz-nei">
          <div class="bz-wz-yetou">
            <h3>Settings</h3>
            <p>Account details and preferences.</p>
          </div>
          <div class="bz-wz-duanluo">
            <section>
              <h4 class="bz-wz-duan-biao">Account</h4>
              <div class="bz-wz-liebiao">
                <div class="bz-wz-hang">
                  <div><b>Name</b><span>Shown in your team and in the editor.</span></div>
                  <div class="bz-wz-hang-you">Alex</div>
                </div>
                <div class="bz-wz-hang">
                  <div><b>Email</b></div>
                  <div class="bz-wz-hang-you">alex@example.com</div>
                </div>
                <div class="bz-wz-hang">
                  <div><b>Plan</b><span>No expiry on the Free plan.</span></div>
                  <div class="bz-wz-hang-you"><span class="bz-wz-pill">Free</span><span class="bz-wz-xiaoan">Adjust plan</span></div>
                </div>
                <div class="bz-wz-hang">
                  <div><b>Member since</b></div>
                  <div class="bz-wz-hang-you">Mar 2, 2026</div>
                </div>
                <div class="bz-wz-hang">
                  <div><b>User ID</b><span>Quote this in support requests.</span></div>
                  <div class="bz-wz-hang-you"><code>10482</code></div>
                </div>
              </div>
            </section>
            <section>
              <h4 class="bz-wz-duan-biao">Team</h4>
              <p class="bz-wz-duan-shuo">Collaborate on a shared balance with seat-based billing.</p>
              <div class="bz-wz-liebiao">
                <div class="bz-wz-hang">
                  <div><b>No team yet</b><span>Create a team from the Team plan or join one with an invite code.</span></div>
                  <div class="bz-wz-hang-you"><span class="bz-wz-xiaoan">Open team</span></div>
                </div>
              </div>
            </section>

            <!-- 解鎖卡片 -->
            <div ref="kapian" class="bz-wz-ka" :class="{ 'bz-gl': gaoliang === 'ka' }">
              <span v-if="gaoliang === 'ka' && biaoji" class="bz-biaoji" style="top: -10px; right: -8px">{{ biaoji }}</span>
              <div v-if="kazhuangtai === 'weidenglu'" class="bz-wz-ka-tou">
                <span class="bz-wz-ka-tu"><BzTubiao ming="lock-keyhole" :daxiao="20" :cuxi="2" /></span>
                <div class="bz-wz-ka-wen">
                  <h4>{{ wen.title }}</h4>
                  <p>{{ wen.signIn }}</p>
                </div>
              </div>
              <div v-else-if="kazhuangtai === 'bukeyong'" class="bz-wz-ka-tou">
                <span class="bz-wz-ka-tu bz-wz-huang"><BzTubiao ming="lock-keyhole" :daxiao="20" :cuxi="2" /></span>
                <div class="bz-wz-ka-wen">
                  <h4>{{ wen.unavailableTitle }}</h4>
                  <p>{{ wen.networkError }}</p>
                  <span class="bz-wz-an bz-wz-an-ka bz-wz-chongshi" :class="{ 'bz-gl': gaoliang === 'chongshi' }">
                    <BzTubiao ming="refresh-cw" :daxiao="16" :cuxi="2" />{{ wen.retry }}
                    <span v-if="gaoliang === 'chongshi' && biaoji" class="bz-biaoji" style="top: -10px; right: -8px">{{ biaoji }}</span>
                  </span>
                </div>
              </div>
              <template v-else>
                <div class="bz-wz-ka-tou">
                  <div class="bz-wz-ka-zuo">
                    <span class="bz-wz-ka-tu" :class="{ 'bz-wz-cheng': kazhuangtai === 'jiesuo' }">
                      <BzTubiao :ming="kazhuangtai === 'jiesuo' ? 'circle-check' : 'lock-keyhole'" :daxiao="20" :cuxi="2" />
                    </span>
                    <div class="bz-wz-ka-wen">
                      <h4>{{ wen.title }}</h4>
                      <p>{{ kazhuangtai === "jiesuo" ? jiesuowen : wen.description }}</p>
                    </div>
                  </div>
                  <span class="bz-wz-shuaxin" :class="{ 'bz-gl': gaoliang === 'shuaxin' }">
                    <BzTubiao ming="refresh-cw" :daxiao="16" :cuxi="2" />
                    <span v-if="gaoliang === 'shuaxin' && biaoji" class="bz-biaoji" style="top: -10px; right: -8px">{{ biaoji }}</span>
                  </span>
                </div>
                <template v-if="kazhuangtai === 'jindu'">
                  <div class="bz-wz-jd-tou" :class="{ 'bz-gl': gaoliang === 'jindu' }">
                    <span>{{ wen.progress }}</span><b>{{ jindu }}/5</b>
                    <span v-if="gaoliang === 'jindu' && biaoji" class="bz-biaoji" style="top: -10px; right: -8px">{{ biaoji }}</span>
                  </div>
                  <div class="bz-wz-jd"><i :style="{ width: `${(jindu / 5) * 100}%` }" /></div>
                  <div class="bz-wz-an-zu">
                    <button type="button" class="bz-wz-an bz-wz-an-ka bz-wz-an-zhu" :class="{ 'bz-gl': gaoliang === 'shengcheng' }" @click="yisheng = true">
                      <span v-if="gaoliang === 'shengcheng' && biaoji" class="bz-biaoji" style="top: -10px; right: -8px">{{ biaoji }}</span>
                      <BzTubiao :ming="yisheng ? 'refresh-cw' : 'link-2'" :daxiao="16" :cuxi="2" /><span>{{ yisheng ? wen.regenerate : wen.generate }}</span>
                    </button>
                    <button v-if="yisheng" type="button" class="bz-wz-an bz-wz-an-ka" :class="{ 'bz-gl': gaoliang === 'fuzhi' }" @click="fuzhi">
                      <span v-if="gaoliang === 'fuzhi' && biaoji" class="bz-biaoji" style="top: -10px; right: -8px">{{ biaoji }}</span>
                      <BzTubiao :ming="yifuzhi ? 'check' : 'copy'" :daxiao="16" :cuxi="2" /><span>{{ yifuzhi ? wen.copied : wen.copy }}</span>
                    </button>
                  </div>
                  <div v-if="yisheng" class="bz-wz-url">{{ lianjiewen }}</div>
                </template>
              </template>
            </div>

            <section>
              <h4 class="bz-wz-duan-biao">Session</h4>
              <div class="bz-wz-liebiao">
                <div class="bz-wz-hang">
                  <div><b>Sign out</b><span>Signs you out of the website. Editor sessions are managed under Devices.</span></div>
                  <div class="bz-wz-hang-you"><span class="bz-wz-xiaoan bz-wz-xiaoan-hong"><BzTubiao ming="log-out" :daxiao="14" :cuxi="2" />Sign out</span></div>
                </div>
              </div>
            </section>
          </div>
        </main>
      </div>

      <!-- 助力頁（entanglement-invite-section.tsx） -->
      <div v-else-if="ye === 'yaoqing'" class="bz-wz-yq">
        <div v-if="zhuangtai === 'wuxiao'" class="bz-wz-yq-ka bz-wz-yq-ka-xiao">
          <span class="bz-wz-yq-tu bz-wz-yq-tu-xiao bz-wz-meigui"><BzTubiao ming="link-2-off" :daxiao="32" :cuxi="2" /></span>
          <h3 class="bz-wz-yq-xiaobiao">{{ wen.invalid }}</h3>
        </div>
        <div v-else class="bz-wz-yq-ka">
          <span class="bz-wz-yq-tu" :class="{ 'bz-wz-cheng': yqlv }">
            <BzTubiao :ming="yqlv ? 'circle-check' : 'lock-keyhole'" :daxiao="40" :cuxi="2" />
          </span>
          <h3>{{ zhuangtai === "chenggong" ? wen.assistSuccess : wen.inviteTitle }}</h3>
          <p>{{ zhuangtai === "chenggong" ? `${jindu}/5` : wen.inviteDescription }}</p>
          <template v-if="!yqdenglu">
            <p class="bz-wz-yq-ti">{{ wen.loginRequired }}</p>
            <div class="bz-wz-yq-er">
              <span class="bz-wz-an bz-wz-an-da bz-wz-an-zhu" :class="{ 'bz-gl': gaoliang === 'denglu' }">
                {{ wen.login }}
                <span v-if="gaoliang === 'denglu' && biaoji" class="bz-biaoji" style="top: -10px; right: -8px">{{ biaoji }}</span>
              </span>
              <span class="bz-wz-an bz-wz-an-da" :class="{ 'bz-gl': gaoliang === 'zhuce' }">
                {{ wen.register }}
                <span v-if="gaoliang === 'zhuce' && biaoji" class="bz-biaoji" style="top: -10px; right: -8px">{{ biaoji }}</span>
              </span>
            </div>
          </template>
          <span
            v-else-if="zhuangtai !== 'chenggong' && !yqzuzhi"
            class="bz-wz-an bz-wz-an-da bz-wz-an-zhu bz-wz-an-man"
            :class="{ 'bz-gl': gaoliang === 'zhuli' }"
          >
            <span v-if="gaoliang === 'zhuli' && biaoji" class="bz-biaoji" style="top: -10px; right: -8px">{{ biaoji }}</span>
            <BzTubiao ming="user-plus" :daxiao="16" :cuxi="2" />{{ wen.assist }}
          </span>
          <span v-if="yqzuzhi" class="bz-wz-yq-kuang">{{ yqzuzhi }}</span>
          <span v-if="yqlv" class="bz-wz-an bz-wz-an-da bz-wz-yq-hui" :class="{ 'bz-gl': gaoliang === 'zhanghu' }">
            {{ wen.goProfile }}
            <span v-if="gaoliang === 'zhanghu' && biaoji" class="bz-biaoji" style="top: -10px; right: -8px">{{ biaoji }}</span>
          </span>
          <p v-if="yqcuowu" class="bz-wz-yq-cuo">{{ yqcuowu }}</p>
        </div>
      </div>

      <!-- 編輯器登入確認頁（EditorDesktopConfirm） -->
      <div v-else-if="ye === 'zhuomian'" class="bz-wz-zm">
        <div class="bz-wz-zm-nei">
          <span class="bz-wz-zm-logo"><BzPinpai pinpai="breezell" :daxiao="48" /></span>
          <h3>Sign in to Breezell desktop</h3>
          <p class="bz-wz-zm-shuo">The Breezell desktop app is asking to sign in with this account.</p>
          <div class="bz-wz-zm-zhanghu">
            <span class="bz-wz-zm-tou">A</span>
            <span class="bz-wz-zm-ren"><b>Alex</b><span>alex@example.com</span></span>
          </div>
          <div v-if="zmwancheng" class="bz-wz-zm-wan">
            <p class="bz-wz-zm-hao">Signed in. You can close this tab and return to Breezell.</p>
            <p class="bz-wz-zm-ma-shuo">If the editor does not continue, copy this code and paste it on the editor sign-in page.</p>
            <div class="bz-wz-zm-ma">
              <code>7KQ4-M2XD</code>
              <button type="button" class="bz-wz-zm-fuzhi" @click="fuzhima">{{ zmfuzhi ? "Copied" : "Copy" }}</button>
            </div>
          </div>
          <div v-else class="bz-wz-zm-an">
            <span class="bz-wz-zm-quxiao">Cancel</span>
            <span class="bz-wz-zm-denglu" :class="{ 'bz-gl': gaoliang === 'queren' }">
              Sign in
              <span v-if="gaoliang === 'queren' && biaoji" class="bz-biaoji" style="top: -10px; right: -8px">{{ biaoji }}</span>
            </span>
          </div>
          <p v-if="!zmwancheng" class="bz-wz-zm-zhu">This editor build still needs the browser to open Breezell. Choose Open if it asks.</p>
          <p class="bz-wz-zm-jing">Only continue if you just opened this page from the Breezell app.</p>
          <span v-if="!zmwancheng" class="bz-wz-zm-huan">or sign in with another account</span>
        </div>
      </div>

      <!-- 登入／註冊頁（login-section.tsx） -->
      <div v-else class="bz-wz-dl">
        <div class="bz-wz-dl-pinpai">
          <span class="bz-wz-dl-logo">
            <BzPinpai pinpai="breezell" :daxiao="28" />
            <span><b>Breezell</b><small>AI Coding Assistant</small></span>
          </span>
          <div>
            <h3>Code Smarter with AI</h3>
            <p>Access Claude, GPT, Gemini and more through a unified API. Built for developers who demand the best.</p>
          </div>
          <small>&copy; 2026 Breezell Team</small>
        </div>
        <div class="bz-wz-dl-you">
          <span class="bz-wz-dl-shouji"><BzPinpai pinpai="breezell" :daxiao="28" />Breezell</span>
          <div class="bz-wz-dl-ka">
            <div class="bz-wz-dl-tou">
              <span class="bz-wz-dl-fanhui"><BzTubiao ming="arrow-left" :daxiao="16" :cuxi="2" />Home</span>
              <b>{{ zhuce ? "Create Account" : "Welcome Back" }}</b>
              <span class="bz-wz-dl-fu">{{ zhuce ? "Sign up to get started" : "Sign in to your account" }}</span>
            </div>
            <div class="bz-wz-dl-nei">
              <span class="bz-wz-an bz-wz-an-biao bz-wz-dl-github" :class="{ 'bz-gl': gaoliang === 'github' }">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
                Continue with GitHub
                <span v-if="gaoliang === 'github' && biaoji" class="bz-biaoji" style="top: -10px; right: -8px">{{ biaoji }}</span>
              </span>
              <div class="bz-wz-dl-huo"><i /><span>or</span><i /></div>
              <div class="bz-wz-dl-biaodan">
                <div v-if="!zhuce" class="bz-wz-dl-zu">
                  <label><span>Email</span><span class="bz-wz-shuru">Enter your email</span></label>
                  <label><span>Password</span><span class="bz-wz-shuru">Enter your password</span></label>
                  <span class="bz-wz-an bz-wz-an-biao bz-wz-an-zhu bz-wz-dl-tijiao" :class="{ 'bz-gl': gaoliang === 'denglu' }">
                    Sign In
                    <span v-if="gaoliang === 'denglu' && biaoji" class="bz-biaoji" style="top: -10px; right: -8px">{{ biaoji }}</span>
                  </span>
                  <span class="bz-wz-dl-wangji">Forgot password?</span>
                </div>
                <div v-else>
                  <div class="bz-wz-dl-bu">
                    <span v-for="n in 3" :key="n" :class="{ 'bz-dao': dangqianbu >= n }">{{ n }}</span>
                  </div>
                  <div v-if="dangqianbu === 1" class="bz-wz-dl-zu">
                    <label><span>Username</span><span class="bz-wz-shuru">Enter your username</span></label>
                  </div>
                  <div v-else-if="dangqianbu === 2" class="bz-wz-dl-zu">
                    <label><span>Email</span><span class="bz-wz-shuru">Enter your email</span></label>
                    <label>
                      <span>Verification Code</span>
                      <span class="bz-wz-dl-yzm">
                        <span class="bz-wz-shuru">Enter code</span>
                        <span class="bz-wz-an bz-wz-an-biao bz-wz-an-zhu bz-wz-dl-huoqu" :class="{ 'bz-gl': gaoliang === 'huoqu' }">
                          Get Code
                          <span v-if="gaoliang === 'huoqu' && biaoji" class="bz-biaoji" style="top: -10px; right: -8px">{{ biaoji }}</span>
                        </span>
                      </span>
                    </label>
                  </div>
                  <div v-else class="bz-wz-dl-zu">
                    <label>
                      <span>Password</span><span class="bz-wz-shuru">Enter your password</span>
                      <small>Min 8 characters, uppercase, number, special character</small>
                    </label>
                    <label><span>Confirm Password</span><span class="bz-wz-shuru">Confirm your password</span></label>
                  </div>
                  <div class="bz-wz-dl-buan">
                    <button v-if="dangqianbu > 1" type="button" class="bz-wz-an bz-wz-an-biao" @click="dangqianbu--">Previous</button>
                    <button v-if="dangqianbu < 3" type="button" class="bz-wz-an bz-wz-an-biao bz-wz-an-zhu" :class="{ 'bz-gl': gaoliang === 'xiayibu' }" @click="dangqianbu++">
                      Next
                      <span v-if="gaoliang === 'xiayibu' && biaoji" class="bz-biaoji" style="top: -10px; right: -8px">{{ biaoji }}</span>
                    </button>
                    <span v-else class="bz-wz-an bz-wz-an-biao bz-wz-an-zhu" :class="{ 'bz-gl': gaoliang === 'chuangjian' }">
                      Create Account
                      <span v-if="gaoliang === 'chuangjian' && biaoji" class="bz-biaoji" style="top: -10px; right: -8px">{{ biaoji }}</span>
                    </span>
                  </div>
                </div>
              </div>
              <p class="bz-wz-dl-qiehuan">
                {{ zhuce ? "Already have an account?" : "Don't have an account?" }}
                <button type="button" :class="{ 'bz-gl': gaoliang === 'qiehuan' }" @click="qiehuan">
                  {{ zhuce ? "Sign In" : "Sign Up" }}
                  <span v-if="gaoliang === 'qiehuan' && biaoji" class="bz-biaoji" style="top: -10px; right: -12px">{{ biaoji }}</span>
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* 官網的 shadcn 色票（styles/global.css），淺色與深色各一組 */
.bz-wz {
  --wz-bg: oklch(1 0 0);
  --wz-fg: oklch(0.2 0.005 55);
  --wz-card: oklch(1 0 0);
  --wz-primary: oklch(0.28 0.01 55);
  --wz-primary-fg: oklch(0.98 0.003 75);
  --wz-muted: oklch(0.955 0.005 75);
  --wz-muted-fg: oklch(0.52 0.01 60);
  --wz-accent: oklch(0.94 0.008 70);
  --wz-border: oklch(0.91 0.006 70);
  --wz-input: oklch(0.91 0.006 70);
  --wz-destructive: oklch(0.577 0.245 27.325);
  --wz-rose: #e11d48;
  --wz-chrome: #ececea;
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
  --wz-accent: oklch(0.22 0.006 55);
  --wz-border: oklch(1 0.005 65 / 10%);
  --wz-input: oklch(1 0.005 65 / 14%);
  --wz-destructive: oklch(0.704 0.191 22.216);
  --wz-rose: #fb7185;
  --wz-chrome: #2a2a28;
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
  line-height: 1;
  background: var(--bz-mark);
}

.bz-wz .bz-gl {
  position: relative;
  box-shadow: 0 0 0 2px var(--bz-mark), 0 0 0 6px color-mix(in srgb, var(--bz-mark) 28%, transparent) !important;
}

.bz-wz :where(button) {
  font: inherit;
  cursor: pointer;
  border: none;
  background: none;
  color: inherit;
  margin: 0;
}

.bz-wz h3,
.bz-wz h4,
.bz-wz p {
  margin: 0;
  border: none;
  padding: 0;
  letter-spacing: normal;
  line-height: 1.5;
}

.bz-wz code {
  padding: 0;
  border-radius: 0;
  background: none;
  color: inherit;
}

.bz-wz-kuang {
  overflow: hidden;
  border-radius: 12px;
  background: var(--wz-bg);
  border: 1px solid var(--wz-border);
  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.02), 0 12px 32px -18px rgba(0, 0, 0, 0.35);
  container-type: inline-size;
}

/* 瀏覽器網址列 */
.bz-wz-liulanqi {
  display: flex;
  align-items: center;
  gap: 6px;
  height: 34px;
  padding: 0 12px;
  background: var(--wz-chrome);
  border-bottom: 1px solid var(--wz-border);
}

.bz-wz-dian {
  width: 10px;
  height: 10px;
  flex-shrink: 0;
  border-radius: 50%;
  background: color-mix(in oklab, var(--wz-muted-fg) 35%, transparent);
}

.bz-wz-dizhi {
  display: flex;
  align-items: center;
  gap: 6px;
  min-width: 0;
  margin-left: 10px;
  padding: 3px 12px;
  overflow: hidden;
  border-radius: 999px;
  font-size: 12px;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: var(--wz-muted-fg);
  background: var(--wz-bg);
}

.bz-wz-ruo {
  flex-shrink: 0;
  color: var(--wz-muted-fg);
}

.bz-wz-hong {
  color: var(--wz-rose) !important;
}

.bz-wz-touxiang {
  position: relative;
  display: inline-grid;
  place-items: center;
  flex-shrink: 0;
  border-radius: 50%;
  font-weight: 500;
  color: var(--wz-primary-fg);
  background: var(--wz-primary);
}

.bz-wz-touxiang-7 {
  width: 28px;
  height: 28px;
  font-size: 12px;
}

.bz-wz-touxiang-10 {
  width: 40px;
  height: 40px;
  font-size: 14px;
  font-weight: 600;
}

.bz-wz-touxiang-hui {
  color: var(--wz-muted-fg);
  background: var(--wz-muted);
}

.bz-wz-zhuti {
  display: inline-grid;
  place-items: center;
  width: 32px;
  height: 32px;
  color: var(--wz-muted-fg);
}

/* ---------- 按鈕 ---------- */
.bz-wz-an {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-weight: 500;
  white-space: nowrap;
  color: var(--wz-fg) !important;
  background: transparent !important;
  border: 1px solid var(--wz-border) !important;
}

.bz-wz-an-zhu {
  color: var(--wz-primary-fg) !important;
  background: var(--wz-primary) !important;
  border-color: transparent !important;
}

.bz-wz-an-xiao {
  height: 32px;
  padding: 0 16px;
  border-radius: 6px;
  font-size: 13px;
  background: var(--wz-bg) !important;
}

.bz-wz-an-ka {
  padding: 8px 16px;
  border-radius: 8px;
  font-size: 14px;
}

.bz-wz-an-da {
  padding: 12px 16px;
  border-radius: 12px;
  font-size: 16px;
}

.bz-wz-an-biao {
  height: 42px;
  padding: 0 16px;
  border-radius: 12px;
  font-size: 14px;
}

/* ---------- 頂部導覽列 ---------- */
.bz-wz-daohang {
  display: flex;
  align-items: center;
  gap: 12px;
  height: 56px;
  padding: 0 20px;
  border-bottom: 1px solid var(--wz-border);
  background: color-mix(in oklab, var(--wz-bg) 80%, transparent);
}

.bz-wz-logo {
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 600;
  font-size: 16px;
  letter-spacing: -0.01em;
}

.bz-wz-zhongjian {
  display: flex;
  flex: 1;
  justify-content: center;
  gap: 4px;
}

.bz-wz-lianjie {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  height: 32px;
  padding: 0 10px;
  font-size: 13px;
  color: var(--wz-muted-fg);
}

.bz-wz-lianjie:first-child {
  color: var(--wz-fg);
}

.bz-wz-you {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-left: auto;
}

@container (max-width: 600px) {
  .bz-wz-zhongjian {
    display: none;
  }
}

/* ---------- 頭像選單 ---------- */
.bz-wz-shouye {
  position: relative;
  min-height: 400px;
}

.bz-wz-caidan {
  position: absolute;
  top: 8px;
  right: 16px;
  width: min(288px, calc(100% - 32px));
  overflow: hidden;
  border-radius: 12px;
  background: var(--wz-card);
  border: 1px solid var(--wz-border);
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.12), 0 8px 10px -6px rgba(0, 0, 0, 0.1);
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
  height: 540px;
}

.bz-wz-ce {
  display: flex;
  flex-direction: column;
  width: 220px;
  flex-shrink: 0;
  background: color-mix(in oklab, var(--wz-card) 40%, transparent);
  border-right: 1px solid color-mix(in oklab, var(--wz-border) 70%, transparent);
}

.bz-wz-ce-tou {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 40px;
  margin-bottom: 4px;
  padding: 16px 16px 0;
}

.bz-wz-fanhui {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 0 4px;
  font-size: 14px;
  color: var(--wz-muted-fg);
}

.bz-wz-ce-dao {
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 1px;
  padding: 12px 8px 16px;
}

.bz-wz-ce-kong {
  height: 16px;
}

.bz-wz-ce-xiang {
  position: relative;
  display: flex;
  align-items: center;
  gap: 8px;
  height: 30px;
  padding: 0 10px;
  border-radius: 6px;
  font-size: 14px;
  color: color-mix(in oklab, var(--wz-fg) 85%, transparent);
}

.bz-wz-ce-tu {
  display: inline-grid;
  place-items: center;
  width: 16px;
  height: 16px;
  color: var(--wz-muted-fg);
}

.bz-wz-ce-xiang.bz-xuan {
  color: var(--wz-fg);
  background: var(--wz-muted);
}

.bz-wz-ce-di {
  position: relative;
  padding: 8px;
  border-top: 1px solid color-mix(in oklab, var(--wz-border) 70%, transparent);
}

.bz-wz-yonghu {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px;
  border-radius: 6px;
}

.bz-wz-yonghu.bz-kai {
  background: var(--wz-muted);
}

.bz-wz-yonghu .bz-wz-cd-ren b {
  color: color-mix(in oklab, var(--wz-fg) 90%, transparent);
}

/* 使用者選單：DropdownMenuContent side="top" align="start" w-60 */
.bz-wz-xiala {
  position: absolute;
  bottom: calc(100% - 4px);
  left: 8px;
  z-index: 4;
  width: 240px;
  padding: 4px;
  border-radius: 8px;
  background: var(--wz-card);
  border: 1px solid var(--wz-border);
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);
}

.bz-wz-xl-biao {
  display: flex;
  flex-direction: column;
  gap: 2px;
  padding: 6px 8px;
  font-size: 12px;
  color: var(--wz-muted-fg);
}

.bz-wz-xl-biao b {
  font-size: 14px;
  font-weight: 500;
  color: var(--wz-fg);
}

.bz-wz-xl-fen {
  height: 1px;
  margin: 4px -4px;
  background: var(--wz-border);
}

.bz-wz-xl-xiang {
  position: relative;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 6px 8px;
  border-radius: 4px;
  font-size: 14px;
}

.bz-wz-xl-xiang :deep(svg) {
  color: var(--wz-muted-fg);
}

.bz-wz-nei {
  flex: 1;
  min-width: 0;
  overflow-y: auto;
  padding: 24px 24px 40px;
}

.bz-wz-yetou {
  margin-bottom: 24px;
}

.bz-wz-yetou h3 {
  font-size: 20px;
  font-weight: 600;
  letter-spacing: -0.01em;
}

.bz-wz-yetou p {
  margin-top: 4px;
  font-size: 14px;
  color: var(--wz-muted-fg);
}

.bz-wz-duanluo {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.bz-wz-duan-biao {
  margin-bottom: 8px;
  padding: 0 2px;
  font-size: 13px;
  font-weight: 600;
}

.bz-wz-duan-shuo {
  margin: -6px 0 8px;
  padding: 0 2px;
  font-size: 12px;
  color: var(--wz-muted-fg);
}

.bz-wz-liebiao {
  overflow: hidden;
  border-radius: 12px;
  background: var(--wz-card);
  box-shadow: inset 0 0 0 1px color-mix(in oklab, var(--wz-border) 70%, transparent);
}

.bz-wz-hang {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 12px 16px;
  font-size: 14px;
}

.bz-wz-hang + .bz-wz-hang {
  border-top: 1px solid color-mix(in oklab, var(--wz-border) 60%, transparent);
}

.bz-wz-hang > div:first-child {
  display: flex;
  flex-direction: column;
  min-width: 0;
}

.bz-wz-hang b {
  font-weight: 500;
}

.bz-wz-hang > div:first-child span {
  margin-top: 2px;
  font-size: 13px;
  line-height: 1.6;
  color: var(--wz-muted-fg);
}

.bz-wz-hang-you {
  display: flex;
  flex-shrink: 0;
  align-items: center;
  gap: 8px;
}

.bz-wz-hang-you code {
  padding: 2px 6px;
  border-radius: 4px;
  font-family: ui-monospace, monospace;
  font-size: 12px;
  background: var(--wz-muted);
}

.bz-wz-pill {
  display: inline-flex;
  align-items: center;
  padding: 2px 8px;
  border-radius: 999px;
  font-size: 11px;
  font-weight: 500;
  color: var(--wz-muted-fg);
  background: var(--wz-muted);
  box-shadow: inset 0 0 0 1px var(--wz-border);
}

.bz-wz-xiaoan {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  height: 28px;
  padding: 0 10px;
  border-radius: 6px;
  font-size: 13px;
  font-weight: 500;
  white-space: nowrap;
  box-shadow: inset 0 0 0 1px var(--wz-border);
}

.bz-wz-xiaoan-hong {
  color: var(--wz-rose);
  box-shadow: inset 0 0 0 1px color-mix(in oklab, #f43f5e 30%, transparent);
}

/* 解鎖卡片：設定頁把它包成 rounded-[12px]、ring-1 ring-inset ring-border/70 */
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
  justify-content: space-between;
  gap: 16px;
}

.bz-wz-ka-zuo {
  display: flex;
  flex: 1;
  align-items: flex-start;
  gap: 16px;
  min-width: 0;
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

.bz-wz-ka-tu.bz-wz-huang {
  color: #f59e0b;
  background: color-mix(in oklab, #f59e0b 10%, transparent);
}

.bz-wz-ka-wen {
  flex: 1;
  min-width: 0;
}

.bz-wz-ka-wen h4 {
  font-size: 16px;
  font-weight: 500;
}

.bz-wz-ka-wen p {
  margin-top: 4px;
  font-size: 14px;
  color: var(--wz-muted-fg);
}

.bz-wz-chongshi {
  margin-top: 16px;
}

.bz-wz-shuaxin {
  position: relative;
  display: inline-grid;
  place-items: center;
  flex-shrink: 0;
  width: 32px;
  height: 32px;
  border-radius: 8px;
  color: var(--wz-muted-fg);
}

.bz-wz-jd-tou {
  position: relative;
  display: flex;
  justify-content: space-between;
  margin-top: 24px;
  border-radius: 4px;
  font-size: 14px;
  color: var(--wz-muted-fg);
}

.bz-wz-jd-tou b {
  font-family: ui-monospace, monospace;
  font-weight: 400;
  font-variant-numeric: tabular-nums;
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

@container (max-width: 600px) {
  .bz-wz-ce {
    display: none;
  }

  /* 使用者選單那一張在窄畫面只留側欄，選單才看得到 */
  .bz-wz-zhuye-ce .bz-wz-ce {
    display: flex;
    width: 100%;
    border-right: none;
  }

  .bz-wz-zhuye-ce .bz-wz-nei {
    display: none;
  }

  .bz-wz-nei {
    padding: 16px;
  }

  .bz-wz-ka {
    padding: 18px;
  }

  .bz-wz-hang {
    flex-direction: column;
    align-items: flex-start;
  }
}

/* ---------- 助力頁 ---------- */
.bz-wz-yq {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 400px;
  padding: 32px 24px;
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
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.05), 0 8px 10px -6px rgba(0, 0, 0, 0.05);
}

.bz-wz-yq-ka-xiao {
  max-width: 448px;
  box-shadow: none;
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

.bz-wz-yq-tu-xiao {
  width: 64px;
  height: 64px;
  margin-bottom: 20px;
}

.bz-wz-yq-tu.bz-wz-meigui {
  color: #f43f5e;
  background: color-mix(in oklab, #f43f5e 10%, transparent);
}

.bz-wz-yq-ka h3 {
  font-size: 24px;
  font-weight: 700;
  line-height: 1.35;
}

.bz-wz-yq-ka .bz-wz-yq-xiaobiao {
  font-size: 20px;
  font-weight: 600;
}

.bz-wz-yq-ka p {
  margin-top: 12px;
  font-size: 14px;
  line-height: 24px;
  color: var(--wz-muted-fg);
}

.bz-wz-yq-ka .bz-wz-yq-ti {
  margin-top: 20px;
  line-height: 1.5;
}

.bz-wz-yq-er {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
  width: 100%;
  margin-top: 20px;
}

.bz-wz-an-man {
  width: 100%;
  margin-top: 24px;
  padding: 12px 20px;
}

.bz-wz-yq-hui {
  margin-top: 24px;
  padding: 12px 20px;
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

.bz-wz-yq-ka .bz-wz-yq-cuo {
  margin-top: 16px;
  line-height: 1.5;
  color: #f43f5e;
}

@container (max-width: 480px) {
  .bz-wz-yq {
    padding: 20px 12px;
  }

  .bz-wz-yq-ka {
    padding: 24px 18px;
  }

  .bz-wz-yq-er {
    grid-template-columns: 1fr;
  }
}

/* ---------- 編輯器登入確認頁（固定的淺色頁面） ---------- */
.bz-wz-kuang-zm {
  --wz-chrome: #ececea;
  --wz-border: #e6e6e1;
  --wz-bg: #ffffff;
  --wz-muted-fg: #6b6b66;
}

.bz-wz-zm {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 48px 24px;
  color: #1c1c1a;
  background: #f7f7f4;
}

.bz-wz-zm-nei {
  width: 100%;
  max-width: 420px;
  text-align: center;
}

.bz-wz-zm-logo {
  display: flex;
  justify-content: center;
  margin-bottom: 32px;
}

.bz-wz-zm h3 {
  font-size: 28px;
  font-weight: 600;
  letter-spacing: -0.02em;
  line-height: 1.25;
  color: #1c1c1a;
}

.bz-wz-zm .bz-wz-zm-shuo {
  margin-top: 8px;
  font-size: 15px;
  color: #6b6b66;
}

.bz-wz-zm-zhanghu {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-top: 32px;
  padding: 12px 16px;
  border-radius: 12px;
  text-align: left;
  background: #fff;
  border: 1px solid #e6e6e1;
}

.bz-wz-zm-tou {
  display: grid;
  place-items: center;
  width: 40px;
  height: 40px;
  flex-shrink: 0;
  border-radius: 50%;
  font-size: 14px;
  font-weight: 500;
  color: #3d3d3a;
  background: #eceae4;
}

.bz-wz-zm-ren {
  display: flex;
  flex-direction: column;
  min-width: 0;
  font-size: 13px;
  color: #8a8a84;
}

.bz-wz-zm-ren b {
  font-size: 15px;
  font-weight: 500;
  color: #1c1c1a;
}

.bz-wz-zm-an {
  display: flex;
  gap: 12px;
  margin-top: 24px;
}

.bz-wz-zm-quxiao,
.bz-wz-zm-denglu {
  position: relative;
  display: inline-flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  height: 44px;
  border-radius: 8px;
  font-size: 15px;
  font-weight: 500;
  color: #1c1c1a;
  background: #ececec;
}

.bz-wz-zm-denglu {
  color: #fff;
  background: #111;
}

.bz-wz-zm .bz-wz-zm-zhu,
.bz-wz-zm .bz-wz-zm-jing {
  margin-top: 16px;
  font-size: 13px;
  line-height: 1.625;
  color: #8a8a84;
}

.bz-wz-zm .bz-wz-zm-jing {
  margin-top: 32px;
}

.bz-wz-zm-huan {
  display: inline-block;
  margin-top: 16px;
  font-size: 14px;
  color: #1c1c1a;
  text-decoration: underline;
  text-underline-offset: 4px;
}

.bz-wz-zm-wan {
  margin-top: 32px;
}

.bz-wz-zm .bz-wz-zm-hao {
  font-size: 15px;
  color: #3d3d3a;
}

.bz-wz-zm .bz-wz-zm-ma-shuo {
  margin-top: 20px;
  font-size: 13px;
  line-height: 1.625;
  color: #6b6b66;
}

.bz-wz-zm-ma {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin-top: 12px;
}

.bz-wz-zm-ma code {
  padding: 8px 16px;
  border-radius: 8px;
  font-size: 20px;
  font-weight: 600;
  letter-spacing: 0.18em;
  color: #1c1c1a;
  background: #fff;
  border: 1px solid #e6e6e1;
}

.bz-wz .bz-wz-zm-fuzhi {
  height: 44px;
  padding: 0 12px;
  border-radius: 8px;
  font-size: 13px;
  font-weight: 500;
  color: #1c1c1a;
  background: #ececec;
}

/* ---------- 登入／註冊頁 ---------- */
.bz-wz-dl {
  display: flex;
  min-height: 560px;
}

.bz-wz-dl-pinpai {
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 42%;
  flex-shrink: 0;
  padding: 32px;
  background: linear-gradient(to bottom right, color-mix(in oklab, var(--wz-primary) 5%, transparent), transparent);
}

.bz-wz-dl-logo {
  display: flex;
  align-items: center;
  gap: 8px;
}

.bz-wz-dl-logo span {
  display: flex;
  flex-direction: column;
}

.bz-wz-dl-logo b {
  font-size: 17px;
  font-weight: 600;
  letter-spacing: -0.01em;
}

.bz-wz-dl-logo small,
.bz-wz-dl-pinpai > small {
  font-size: 12px;
  color: var(--wz-muted-fg);
}

.bz-wz-dl-pinpai > small {
  font-size: 13px;
}

.bz-wz-dl-pinpai h3 {
  margin-bottom: 12px;
  font-size: 28px;
  font-weight: 700;
  line-height: 1.2;
}

.bz-wz-dl-pinpai p {
  font-size: 15px;
  line-height: 1.6;
  color: var(--wz-muted-fg);
}

.bz-wz-dl-shouji {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 32px;
  font-size: 18px;
  font-weight: 600;
  letter-spacing: -0.01em;
}

.bz-wz-dl-you {
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: 0;
  padding: 28px 20px;
}

.bz-wz-dl-ka {
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
  max-width: 400px;
  padding: 24px 0;
  border-radius: 12px;
  background: color-mix(in oklab, var(--wz-card) 80%, transparent);
  border: 1px solid color-mix(in oklab, var(--wz-border) 60%, transparent);
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
}

.bz-wz-dl-tou {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  padding: 0 24px;
}

.bz-wz-dl-fanhui {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 16px;
  font-size: 14px;
  color: var(--wz-muted-fg);
}

.bz-wz-dl-tou b {
  font-size: 24px;
  font-weight: 700;
  line-height: 1.3;
}

.bz-wz-dl-fu {
  font-size: 14px;
  color: var(--wz-muted-fg);
}

.bz-wz-dl-nei {
  padding: 0 24px;
}

.bz-wz-dl-github {
  width: 100%;
  margin-bottom: 24px;
  background: var(--wz-bg) !important;
}

.bz-wz-dl-huo {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 24px;
  font-size: 14px;
  color: var(--wz-muted-fg);
}

.bz-wz-dl-huo i {
  flex: 1;
  height: 1px;
  background: var(--wz-border);
}

.bz-wz-dl-biaodan {
  min-height: 280px;
}

.bz-wz-dl-zu {
  display: grid;
  gap: 16px;
}

.bz-wz-dl-zu label {
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-size: 14px;
  font-weight: 500;
  color: var(--wz-muted-fg);
}

.bz-wz-dl-zu small {
  font-size: 12px;
  font-weight: 400;
}

.bz-wz-shuru {
  display: flex;
  align-items: center;
  height: 42px;
  padding: 0 12px;
  border-radius: 12px;
  font-size: 14px;
  font-weight: 400;
  color: var(--wz-muted-fg);
  border: 1px solid var(--wz-input);
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
}

.bz-wz-dl-yzm {
  display: flex;
  gap: 12px;
}

.bz-wz-dl-yzm .bz-wz-shuru {
  flex: 1;
}

.bz-wz-dl-huoqu {
  flex-shrink: 0;
  padding: 0 20px;
}

.bz-wz-dl-tijiao {
  width: 100%;
  margin-top: 8px;
}

.bz-wz-dl-wangji {
  margin-top: 4px;
  font-size: 14px;
  text-align: center;
  color: var(--wz-muted-fg);
}

.bz-wz-dl-bu {
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-bottom: 24px;
}

.bz-wz-dl-bu span {
  display: grid;
  place-items: center;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  font-size: 14px;
  font-weight: 500;
  color: var(--wz-muted-fg);
  background: var(--wz-muted);
}

.bz-wz-dl-bu span.bz-dao {
  color: var(--wz-primary-fg);
  background: var(--wz-primary);
}

.bz-wz-dl-buan {
  display: flex;
  gap: 12px;
  margin-top: 24px;
}

.bz-wz-dl-buan > * {
  flex: 1;
}

.bz-wz-dl-qiehuan {
  margin-top: 24px !important;
  font-size: 14px;
  text-align: center;
  color: var(--wz-muted-fg);
}

.bz-wz-dl-qiehuan button {
  position: relative;
  font-weight: 500;
  color: var(--wz-primary) !important;
}

@container (min-width: 680px) {
  .bz-wz-dl-pinpai {
    display: flex;
  }

  .bz-wz-dl-shouji {
    display: none;
  }
}
</style>
