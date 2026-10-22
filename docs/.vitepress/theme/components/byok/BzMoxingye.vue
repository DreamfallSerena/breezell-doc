<script setup lang="ts">
import { computed, ref } from "vue";
import BzTubiao from "./BzTubiao.vue";
import BzPinpai from "./BzPinpai.vue";
import BzYetou from "./BzYetou.vue";
import BzJianrongpeizhi from "./BzJianrongpeizhi.vue";
import { anthropicmoxing, geshijiage, geshitoken, jianrongmoxing, qudemoxing, shiyongwenben, type moxinghang, type xieyi } from "./shuju";

// Box ▸ 模型（BoxModelsPage.tsx ModelsWorkspace）：分類切換、提供者卡片、選中提供者的標頭帶，
// 下方是設定欄與模型表格。頁面窄於 1080px 時 Breezell 會把設定欄疊在表格上方，這裡同樣如此；
// 表格寬度不夠時依序隱藏「上下文」「能力」欄，規則與源碼 modelTableNeeds 一致。
type gaoliangxiang =
  | "ka"
  | "sousuo"
  | "peizhi"
  | "miyao"
  | "tianjia"
  | "shuru"
  | "quede"
  | "jiance"
  | "liantong"
  | "xinzeng"
  | "kaiguan"
  | "gengduo"
  | "jiage"
  | "quedeliebiao"
  | "";

const props = withDefaults(
  defineProps<{
    fenlei?: "api" | "compat";
    yetou?: boolean;
    xuanzeqi?: boolean;
    tigongshang?: "anthropic" | "compat";
    yipeizhi?: boolean;
    peizhi?: boolean;
    moxing?: "anthropic" | "jianrong" | "kong";
    dakai?: string[];
    quede?: boolean;
    caidan?: boolean;
    cuowu?: string;
    gaoliang?: gaoliangxiang;
    biaoji?: string;
    nicheng?: string;
    jichudizhi?: string;
    xieyi?: xieyi;
    peizhigaoliang?: "lianjie" | "miyao" | "xieyi" | "yushe" | "dizhi" | "qingqiutou" | "";
    caowei?: number;
  }>(),
  {
    fenlei: "api",
    yetou: true,
    xuanzeqi: true,
    tigongshang: "anthropic",
    yipeizhi: false,
    peizhi: true,
    moxing: "anthropic",
    dakai: () => [],
    quede: false,
    caidan: false,
    cuowu: "",
    gaoliang: "",
    biaoji: "",
    nicheng: "Claude Relay",
    jichudizhi: "https://relay.example.com",
    xieyi: "anthropic",
    peizhigaoliang: "",
    caowei: 1,
  },
);

const { t } = shiyongwenben();

const jianrong = computed(() => props.tigongshang === "compat");
const biaoti = computed(() => (jianrong.value ? props.nicheng || `Slot ${props.caowei}` : "Anthropic"));
const zhuji = computed(() => {
  try {
    return new URL(props.jichudizhi).host;
  } catch {
    return props.jichudizhi;
  }
});

// 相容槽位卡片：只列出用過的槽位與第 1 槽（源碼 entries.compat 的規則）；最後一張是目前選中的槽位。
const jianrongka = computed(() =>
  Array.from({ length: props.caowei }, (_, xuhao) => {
    const hao = xuhao + 1;
    const xuan = hao === props.caowei;
    const peizhi = xuan ? props.yipeizhi : true;
    return {
      hao,
      xuan,
      peizhi,
      ming: xuan ? biaoti.value : "Claude Relay",
      zhuji: xuan ? (props.yipeizhi ? zhuji.value : t("settings.noEndpoint")) : "relay.example.com",
    };
  }),
);

const hang = computed<moxinghang[]>(() => {
  if (props.moxing === "kong") return [];
  const yuan = props.moxing === "anthropic" ? anthropicmoxing : jianrongmoxing;
  return yuan.map((xiang) => ({ ...xiang, qiyong: xiang.qiyong || props.dakai.includes(xiang.mingcheng) }));
});
const qiyongshu = computed(() => (props.yipeizhi ? hang.value.filter((xiang) => xiang.qiyong).length : 0));
const zongshu = computed(() => (props.moxing === "anthropic" ? anthropicmoxing.length : hang.value.length));

const nengli = [
  { ming: "eye", jian: "box.models.filter.vision" },
  { ming: "wrench", jian: "box.models.filter.tools" },
  { ming: "brain", jian: "box.models.filter.reasoning" },
  { ming: "globe", jian: "box.models.filter.web" },
] as const;

const xuanzhongqude = ref(new Set(qudemoxing.slice(0, 4)));
const qiehuanqude = (ming: string) => {
  const xin = new Set(xuanzhongqude.value);
  if (xin.has(ming)) xin.delete(ming);
  else xin.add(ming);
  xuanzhongqude.value = xin;
};

const gl = (xiang: gaoliangxiang) => props.gaoliang === xiang;
</script>

<template>
  <div class="bz">
    <div class="bz-chuangkou bz-my-wai">
      <div class="bz-my">
        <BzYetou v-if="yetou" :fenlei="fenlei" :shuliang="{ signin: 9, api: 40, compat: caowei }" />

        <div v-if="xuanzeqi" class="bz-kapian bz-my-xuan">
          <div class="bz-my-guolv">
            <label class="bz-sousuo" :class="{ 'bz-gl': gl('sousuo') }">
              <BzTubiao ming="search" />
              <input :value="jianrong ? '' : 'Anthropic'" :placeholder="t('box.models.searchProvidersPlaceholder')" readonly />
              <span v-if="gl('sousuo') && biaoji" class="bz-biaoji" style="top: -10px; right: -8px">{{ biaoji }}</span>
            </label>
            <span class="bz-my-tian" />
            <template v-if="fenlei === 'compat'">
              <span class="bz-anniu" :class="{ 'bz-gl': gl('liantong') }"><BzTubiao ming="activity" />{{ t("box.models.checkConnectivity") }}</span>
              <span class="bz-anniu bz-zhu" :class="{ 'bz-gl': gl('xinzeng') }">
                <BzTubiao ming="plus" />{{ t("box.models.addCompat") }}
                <span v-if="gl('xinzeng') && biaoji" class="bz-biaoji" style="top: -10px; right: -8px">{{ biaoji }}</span>
              </span>
            </template>
          </div>
          <div class="bz-my-kawang">
            <span v-if="!jianrong" class="bz-my-ka bz-xuan" :class="{ 'bz-gl': gl('ka') }">
              <span class="bz-my-biaoji"><BzPinpai pinpai="claude" :daxiao="16" /></span>
              <span class="bz-my-kaming">Anthropic</span>
              <span class="bz-dian" :class="{ 'bz-hao': yipeizhi }" />
              <span v-if="gl('ka') && biaoji" class="bz-biaoji" style="top: -10px; right: -8px">{{ biaoji }}</span>
            </span>
            <template v-else>
              <span
                v-for="ka in jianrongka"
                :key="ka.hao"
                class="bz-my-ka bz-my-ka-jr"
                :class="{ 'bz-xuan': ka.xuan, 'bz-gl': ka.xuan && gl('ka') }"
              >
                <span class="bz-my-biaoji"><BzPinpai pinpai="openai" :daxiao="16" /></span>
                <span class="bz-my-kawen">
                  <span class="bz-my-kaming-xiao">{{ ka.ming }}</span>
                  <span class="bz-my-kaci">
                    <span class="bz-dian" :class="{ 'bz-hao': ka.peizhi }" />
                    <span>{{ ka.zhuji }}</span>
                  </span>
                </span>
                <span v-if="ka.xuan && gl('ka') && biaoji" class="bz-biaoji" style="top: -10px; right: -8px">{{ biaoji }}</span>
              </span>
            </template>
          </div>
        </div>

        <section class="bz-kapian bz-my-xuanzhong">
          <div class="bz-my-daitou">
            <span class="bz-my-biaoji bz-my-biaoji-da"><BzPinpai :pinpai="jianrong ? 'openai' : 'claude'" :daxiao="16" /></span>
            <div class="bz-my-daitou-wen">
              <span class="bz-my-daitou-ming">{{ biaoti }}</span>
              <span class="bz-zhuangtai" :class="{ 'bz-hao': yipeizhi }"><span class="bz-dian" :class="{ 'bz-hao': yipeizhi }" />{{ yipeizhi ? t("box.models.configured") : t("box.models.notConfigured") }}</span>
              <span v-if="jianrong" class="bz-mono bz-my-zhuji">{{ yipeizhi ? zhuji : "" }}</span>
              <span v-else class="bz-my-tongji">{{ zongshu }} {{ t("box.models.modelsCount") }} · {{ qiyongshu }} {{ t("box.models.enabledCount") }}</span>
            </div>
            <span class="bz-anniu" :class="{ 'bz-huoyue': peizhi, 'bz-gl': gl('peizhi') }">
              <BzTubiao ming="key-round" />{{ peizhi ? t("box.models.hideConfig") : t("box.models.editConfig") }}
              <BzTubiao :ming="peizhi ? 'chevron-down' : 'chevron-right'" />
              <span v-if="gl('peizhi') && biaoji" class="bz-biaoji" style="top: -10px; right: -8px">{{ biaoji }}</span>
            </span>
            <span v-if="jianrong && yipeizhi" class="bz-anniu bz-tubiaoanniu"><BzTubiao ming="trash-2" /></span>
          </div>

          <div class="bz-my-ti">
            <aside v-if="peizhi" class="bz-my-peizhi">
              <BzJianrongpeizhi v-if="jianrong" :nicheng="nicheng" :jichudizhi="jichudizhi" :xieyi="xieyi" :miyao="yipeizhi" :gaoliang="peizhigaoliang" />
              <div v-else class="bz-my-anthropic">
                <div class="bz-my-miyao" :class="{ 'bz-gl': gl('miyao') }">
                  <input
                    class="bz-mono"
                    :class="{ 'bz-my-yincang': yipeizhi }"
                    :value="yipeizhi ? 'sk-ant-api03-7Kp2xQm9vR4tL8wZ' : ''"
                    placeholder="API Key (sk-ant-key...)"
                    readonly
                  />
                  <span class="bz-my-yan"><BzTubiao ming="eye" :daxiao="14" :cuxi="2" /></span>
                  <span v-if="gl('miyao') && biaoji" class="bz-biaoji" style="top: -10px; right: -8px">{{ biaoji }}</span>
                </div>
                <div class="bz-my-huoqu">
                  <span class="bz-my-huoqu-tubiao"><BzTubiao ming="key-round" :daxiao="14" /></span>
                  <span class="bz-my-huoqu-wen">
                    <span class="bz-my-huoqu-ming">Get your API Key</span>
                    <span class="bz-my-huoqu-zhu">console.anthropic.com</span>
                  </span>
                  <BzTubiao ming="arrow-up-right" :daxiao="13" />
                </div>
              </div>
            </aside>

            <div class="bz-my-biao">
              <div class="bz-my-gongju">
                <label class="bz-sousuo">
                  <BzTubiao ming="search" />
                  <input :placeholder="t('box.models.searchPlaceholder')" readonly />
                </label>
                <div class="bz-my-shaixuan">
                  <span v-for="xiang in nengli" :key="xiang.jian" class="bz-my-shai" :title="t(xiang.jian)">
                    <BzTubiao :ming="xiang.ming" :daxiao="12" :cuxi="2.3" />{{ hang.length }}
                  </span>
                  <span class="bz-my-shai-fen" />
                  <span class="bz-my-shai" :title="t('box.models.filter.enabled')"><BzTubiao ming="check" :daxiao="12" :cuxi="2.3" />{{ qiyongshu }}</span>
                </div>
              </div>

              <div class="bz-my-tianjia">
                <div class="bz-my-tianjia-hang">
                  <input class="bz-my-shuru" :class="{ 'bz-gl': gl('shuru') }" :placeholder="t('box.models.addModelPlaceholder')" readonly />
                  <span class="bz-my-tian" />
                  <span class="bz-anniu bz-zhu" :class="{ 'bz-gl': gl('tianjia') }" :style="gl('tianjia') ? '' : 'opacity: 0.5'">
                    <BzTubiao ming="plus" />{{ t("box.models.add") }}
                    <span v-if="gl('tianjia') && biaoji" class="bz-biaoji" style="top: -10px; right: -8px">{{ biaoji }}</span>
                  </span>
                  <span class="bz-anniu" :class="{ 'bz-gl': gl('quede') }">
                    <BzTubiao ming="refresh-cw" />{{ t("box.models.fetch") }}
                    <span v-if="gl('quede') && biaoji" class="bz-biaoji" style="top: -10px; right: -8px">{{ biaoji }}</span>
                  </span>
                  <span v-if="jianrong" class="bz-anniu" :class="{ 'bz-gl': gl('jiance') }">
                    <BzTubiao ming="activity" />{{ t("box.models.health.checkSlot") }}
                    <span v-if="gl('jiance') && biaoji" class="bz-biaoji" style="top: -10px; right: -8px">{{ biaoji }}</span>
                  </span>
                </div>
                <div v-if="cuowu" class="bz-my-cuowu">{{ t(cuowu as never) }}</div>
                <div v-if="quede" class="bz-my-qude" :class="{ 'bz-gl': gl('quedeliebiao') }">
                  <div class="bz-my-qude-tou">
                    <label class="bz-sousuo bz-my-qude-sou">
                      <BzTubiao ming="search" :daxiao="12" />
                      <input :placeholder="t('box.models.searchFetchedPlaceholder')" readonly />
                    </label>
                    <span class="bz-my-qude-shu">{{ qudemoxing.length }} {{ t("box.models.modelsCount") }}</span>
                    <span class="bz-anniu">{{ t("box.models.selectAll") }}</span>
                    <span class="bz-anniu bz-zhu">
                      <BzTubiao ming="plus" />{{ t("box.models.addSelected") }}<span v-if="xuanzhongqude.size"> ({{ xuanzhongqude.size }})</span>
                      <span v-if="gl('quedeliebiao') && biaoji" class="bz-biaoji" style="top: -10px; right: -8px">{{ biaoji }}</span>
                    </span>
                    <span class="bz-my-guan"><BzTubiao ming="x" :daxiao="13" :cuxi="2.4" /></span>
                  </div>
                  <label v-for="ming in qudemoxing" :key="ming" class="bz-my-qude-xiang">
                    <input type="checkbox" :checked="xuanzhongqude.has(ming)" @change="qiehuanqude(ming)" />
                    <span>{{ ming }}</span>
                  </label>
                </div>
              </div>

              <div v-if="hang.length === 0" class="bz-my-kong">{{ t("box.models.noModelsForProvider") }}</div>
              <div v-else class="bz-my-biaoge" role="table">
                <div class="bz-my-hang bz-my-biaotou" role="row">
                  <span class="bz-my-tou bz-my-lie-ming">{{ t("box.usage.colModel") }}</span>
                  <span class="bz-my-tou bz-my-lie-sx bz-you">{{ t("box.models.context") }}</span>
                  <span class="bz-my-tou bz-my-lie-nl" style="padding-left: 36px">{{ t("box.models.capabilities") }}</span>
                  <span class="bz-my-tou bz-my-jiage-tou">
                    <span style="flex-shrink: 0">{{ t("models.pricing") }}</span>
                    <span class="bz-my-danwei">{{ t("box.models.price") }}</span>
                  </span>
                  <span />
                  <span class="bz-my-tou bz-you">{{ t("box.mcp.colEnabled") }}</span>
                </div>
                <div
                  v-for="(xiang, xuhao) in hang"
                  :key="xiang.mingcheng"
                  class="bz-my-hang bz-my-shuju"
                  :class="{ 'bz-tingyong': !(yipeizhi && xiang.qiyong) }"
                  role="row"
                >
                  <div class="bz-my-mingge bz-my-lie-ming">
                    <span class="bz-my-zhuangdian" :class="{ 'bz-hao': yipeizhi && xiang.qiyong }" />
                    <BzPinpai pinpai="claude" :daxiao="16" />
                    <span class="bz-my-moxingming">{{ xiang.mingcheng }}</span>
                    <span v-if="xiang.shiyongzhong" class="bz-my-shiyong"><BzTubiao ming="check" :daxiao="10" :cuxi="3" />{{ t("box.models.inUse") }}</span>
                  </div>
                  <div class="bz-my-shuzi bz-you bz-my-lie-sx">{{ geshitoken(xiang.shangxiawen) }}</div>
                  <div class="bz-my-nengli bz-my-lie-nl">
                    <span v-for="n in nengli" :key="n.ming" class="bz-my-nengli-ge" :title="t(n.jian)"><BzTubiao :ming="n.ming" :daxiao="11" :cuxi="2.3" /></span>
                  </div>
                  <div class="bz-my-jiage" :class="{ 'bz-gl': gl('jiage') && xuhao === 0 }">
                    <span v-if="xiang.shuru !== undefined" class="bz-my-shuzi">{{ geshijiage(xiang.shuru) }} / {{ geshijiage(xiang.shuchu ?? 0) }}</span>
                    <span v-else class="bz-my-tianjia-jia"><BzTubiao ming="coins" :daxiao="11" /><span>{{ t("box.models.editPrice") }}</span></span>
                  </div>
                  <div class="bz-my-gengduo-ge">
                    <span class="bz-my-gengduo" :class="{ 'bz-dakai': caidan && xuhao === 0, 'bz-gl': gl('gengduo') && xuhao === 0 }">
                      <BzTubiao ming="ellipsis" :daxiao="15" />
                      <span v-if="gl('gengduo') && xuhao === 0 && biaoji" class="bz-biaoji" style="top: -12px; right: -12px">{{ biaoji }}</span>
                    </span>
                    <div v-if="caidan && xuhao === 0" class="bz-my-caidan">
                      <span class="bz-my-caidan-xiang"><BzTubiao ming="pin" />{{ t("box.models.pin") }}</span>
                      <span class="bz-my-caidan-xiang bz-gl"><BzTubiao ming="settings-2" />{{ t("box.models.advanced") }}</span>
                      <span class="bz-my-caidan-fen" />
                      <span class="bz-my-caidan-xiang"><BzTubiao ming="x" />{{ t("box.models.remove") }}</span>
                    </div>
                  </div>
                  <div class="bz-you bz-my-kaiguan-ge">
                    <span
                      class="bz-kaiguan"
                      :class="{ 'bz-kai': yipeizhi && xiang.qiyong, 'bz-jinyong': !yipeizhi, 'bz-gl': gl('kaiguan') && dakai.includes(xiang.mingcheng) }"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<style scoped>
.bz-my-wai {
  background: var(--bz-editor-bg);
}

.bz-my {
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px;
  container-type: inline-size;
}

.bz-my-xuan {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 12px;
}

.bz-my-guolv {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
}

.bz-my-tian {
  flex: 1;
}

.bz-my-kawang {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(156px, 1fr));
  gap: 8px;
}

.bz-my-ka {
  position: relative;
  display: flex;
  align-items: center;
  gap: 9px;
  height: 42px;
  padding: 0 10px;
  min-width: 0;
  border-radius: 10px;
  background: color-mix(in srgb, var(--bz-fg) 3.5%, transparent);
  border: 1px solid color-mix(in srgb, var(--bz-fg) 8%, transparent);
  opacity: 0.72;
}

.bz-my-ka.bz-xuan {
  opacity: 1;
  background: var(--bz-editor-bg);
  border-color: color-mix(in srgb, var(--bz-button-bg) 55%, transparent);
  box-shadow: 0 0 0 3px color-mix(in srgb, var(--bz-button-bg) 14%, transparent);
}

.bz-my-ka-jr:not(.bz-xuan) {
  opacity: 1;
}

.bz-my-biaoji {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 26px;
  height: 26px;
  flex-shrink: 0;
  border-radius: 7px;
  color: var(--bz-fg-1);
  background: var(--bz-editor-bg);
  border: 1px solid color-mix(in srgb, var(--bz-fg) 9%, transparent);
}

.bz-my-biaoji-da {
  width: 28px;
  height: 28px;
  border-radius: 8px;
}

.bz-my-kaming {
  flex: 1;
  min-width: 0;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: var(--bz-fg-1);
  font-size: 15px;
  font-weight: 650;
  letter-spacing: -0.3px;
  line-height: 1.25;
}

.bz-my-kawen {
  display: flex;
  flex-direction: column;
  gap: 2px;
  flex: 1;
  min-width: 0;
}

.bz-my-kaming-xiao {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: var(--bz-fg-1);
  font-size: 12px;
  font-weight: 600;
  line-height: 1.2;
}

.bz-my-kaci {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  min-width: 0;
  color: var(--bz-fg-3);
  font-size: 10.5px;
  font-weight: 600;
  line-height: 1.2;
  white-space: nowrap;
  overflow: hidden;
}

.bz-my-kaci .bz-dian {
  width: 5px;
  height: 5px;
}

.bz-my-xuanzhong {
  overflow: visible;
}

.bz-my-daitou {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
  padding: 9px 14px;
  border-bottom: 1px solid color-mix(in srgb, var(--bz-fg) 7%, transparent);
}

.bz-my-daitou-wen {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
  flex: 1 1 200px;
  min-width: 0;
}

.bz-my-daitou-ming {
  color: var(--bz-fg-1);
  font-size: 14px;
  font-weight: 650;
  letter-spacing: -0.1px;
  line-height: 20px;
}

.bz-my-zhuji {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  min-width: 0;
  color: var(--bz-fg-3);
  font-size: 11.5px;
  font-weight: 600;
}

.bz-my-tongji {
  color: var(--bz-fg-3);
  font-size: 11.5px;
  font-weight: 600;
  font-variant-numeric: tabular-nums;
  white-space: nowrap;
}

.bz-my-ti {
  display: flex;
  flex-direction: column;
}

.bz-my-peizhi {
  padding: 12px 18px 16px;
  border-bottom: 1px solid color-mix(in srgb, var(--bz-fg) 7%, transparent);
}

.bz-my-anthropic {
  display: flex;
  flex-direction: column;
}

.bz-my-miyao {
  position: relative;
  display: flex;
  align-items: center;
  margin: 4px 0;
  border-radius: 2px;
}

.bz-my-miyao input {
  width: 100%;
  padding: 4px 32px 4px 8px;
  border-radius: 2px;
  font-size: 13px;
  color: var(--bz-input-fg);
  background: color-mix(in srgb, var(--bz-fg) 14%, var(--bz-sidebar-bg));
  border: 1px solid color-mix(in srgb, var(--bz-fg) 28%, transparent);
}

.bz-my-yincang {
  -webkit-text-security: disc;
}

.bz-my-yan {
  position: absolute;
  right: 8px;
  display: flex;
  color: var(--bz-fg-3);
}

.bz-my-huoqu {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 8px;
  padding: 8px 12px;
  border-radius: 8px;
  color: var(--bz-fg-3);
  background: color-mix(in srgb, var(--bz-link) 8%, transparent);
  border: 1px solid color-mix(in srgb, var(--bz-link) 24%, transparent);
}

.bz-my-huoqu-tubiao {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  flex-shrink: 0;
  border-radius: 6px;
  color: var(--bz-link);
  background: color-mix(in srgb, var(--bz-link) 14%, transparent);
}

.bz-my-huoqu-wen {
  display: flex;
  flex-direction: column;
  flex: 1;
  min-width: 0;
}

.bz-my-huoqu-ming {
  color: var(--bz-fg-1);
  font-size: 12px;
  font-weight: 600;
  line-height: 1.25;
}

.bz-my-huoqu-zhu {
  margin-top: 2px;
  font-size: 10px;
  font-weight: 500;
  line-height: 1.25;
}

.bz-my-biao {
  display: flex;
  flex-direction: column;
  min-width: 0;
}

.bz-my-gongju {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
  padding: 10px 14px;
}

.bz-my-shaixuan {
  display: inline-flex;
  align-items: center;
  gap: 2px;
  margin-left: auto;
  padding: 2px;
  border-radius: 9px;
  background: color-mix(in srgb, var(--bz-fg) 6%, transparent);
  border: 1px solid color-mix(in srgb, var(--bz-fg) 7%, transparent);
}

.bz-my-shai {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  height: 24px;
  padding: 0 8px;
  border-radius: 7px;
  font-size: 11.5px;
  font-weight: 600;
  font-variant-numeric: tabular-nums;
  color: var(--bz-fg-3);
}

.bz-my-shai-fen {
  width: 1px;
  height: 14px;
  margin: 0 2px;
  background: color-mix(in srgb, var(--bz-fg) 14%, transparent);
}

.bz-my-tianjia {
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 0 14px 10px;
}

.bz-my-tianjia-hang {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
}

.bz-my-shuru {
  flex: 0 1 240px;
  min-width: 160px;
  height: 30px;
  padding: 0 10px;
  border-radius: 8px;
  font-size: 12.5px;
  background: var(--bz-field-bg);
  border: 1px solid var(--bz-field-border);
}

.bz-my-cuowu {
  font-size: 12px;
  font-weight: 600;
  color: var(--bz-error);
}

.bz-my-qude {
  border-radius: 10px;
  border: 1px solid color-mix(in srgb, var(--bz-fg) 9%, transparent);
}

.bz-my-qude-tou {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
  padding: 8px 12px;
  border-radius: 10px 10px 0 0;
  background: color-mix(in srgb, var(--bz-fg) 4%, transparent);
}

.bz-my-qude-sou {
  flex: 1 1 180px;
  min-width: 140px;
  height: 26px;
  border-radius: 7px;
}

.bz-my-qude-shu {
  color: var(--bz-fg-2);
  font-size: 12px;
  font-weight: 600;
  white-space: nowrap;
}

.bz-my-guan {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 26px;
  height: 26px;
  color: var(--bz-fg-3);
}

.bz-my-qude-xiang {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 6px 12px;
  border-top: 1px solid color-mix(in srgb, var(--bz-fg) 5%, transparent);
  color: var(--bz-fg-1);
  font-size: 12.5px;
  cursor: pointer;
}

.bz-my-kong {
  padding: 30px 16px;
  border-top: 1px solid color-mix(in srgb, var(--bz-fg) 6%, transparent);
  color: var(--bz-fg-3);
  font-size: 13px;
  font-weight: 600;
  text-align: center;
}

/* 表格：模型欄自適應，其餘固定寬（widthOfModelColumn） */
.bz-my-hang {
  display: grid;
  grid-template-columns: minmax(0, 1fr) 68px 125px 132px 26px 50px;
  column-gap: 12px;
  align-items: center;
  padding: 0 14px 0 16px;
}

.bz-my-biaotou {
  height: 32px;
  background: color-mix(in srgb, var(--bz-fg) 3%, transparent);
  border-top: 1px solid color-mix(in srgb, var(--bz-fg) 7%, transparent);
}

.bz-my-tou {
  min-width: 0;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: var(--bz-fg-3);
  font-size: 10.5px;
  font-weight: 650;
  letter-spacing: 0.5px;
  text-transform: uppercase;
}

.bz-my-tou.bz-my-lie-ming {
  padding-left: 39px;
}

.bz-my-jiage-tou {
  display: flex;
  justify-content: flex-end;
  gap: 5px;
}

.bz-my-danwei {
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  color: var(--bz-fg-4);
  font-weight: 500;
  letter-spacing: 0;
  text-transform: none;
}

.bz-you {
  text-align: right;
  justify-content: flex-end;
}

.bz-my-shuju {
  min-height: 44px;
  border-top: 1px solid color-mix(in srgb, var(--bz-fg) 6%, transparent);
  transition: opacity 120ms;
}

.bz-my-shuju.bz-tingyong {
  opacity: 0.55;
}

.bz-my-mingge {
  display: flex;
  align-items: center;
  gap: 8px;
  min-width: 0;
  overflow: hidden;
  padding-left: 3px;
  margin-left: -3px;
}

.bz-my-zhuangdian {
  width: 7px;
  height: 7px;
  flex-shrink: 0;
  border-radius: 4px;
  background: color-mix(in srgb, var(--bz-fg) 18%, transparent);
}

.bz-my-zhuangdian.bz-hao {
  background: var(--bz-good);
  box-shadow: 0 0 0 3px color-mix(in srgb, var(--bz-good) 16%, transparent);
}

.bz-my-moxingming {
  flex: 0 1 auto;
  min-width: 48px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: var(--bz-fg-1);
  font-size: 13px;
  font-weight: 600;
  letter-spacing: -0.1px;
}

.bz-my-shiyong {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  flex-shrink: 0;
  height: 18px;
  padding: 0 7px;
  border-radius: 999px;
  font-size: 10.5px;
  font-weight: 700;
  background: var(--bz-button-bg);
  color: var(--bz-button-fg);
}

.bz-my-shuzi {
  color: var(--bz-fg-2);
  font-size: 12px;
  font-weight: 600;
  font-variant-numeric: tabular-nums;
  white-space: nowrap;
}

.bz-my-nengli {
  display: flex;
  align-items: center;
  gap: 3px;
  padding-left: 36px;
}

.bz-my-nengli-ge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  flex-shrink: 0;
  border-radius: 6px;
  color: var(--bz-link);
  background: color-mix(in srgb, var(--bz-link) 13%, transparent);
  border: 1px solid color-mix(in srgb, var(--bz-link) 26%, transparent);
}

.bz-my-jiage {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  min-width: 0;
  border-radius: 6px;
}

.bz-my-tianjia-jia {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  height: 22px;
  padding: 0 6px;
  border-radius: 6px;
  color: var(--bz-fg-3);
  font-size: 12px;
  font-weight: 600;
  white-space: nowrap;
  overflow: hidden;
}

.bz-my-gengduo-ge {
  position: relative;
  display: flex;
  justify-content: center;
}

.bz-my-gengduo {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 26px;
  height: 26px;
  border-radius: 7px;
  color: var(--bz-fg-3);
}

.bz-my-gengduo.bz-dakai {
  color: var(--bz-fg-1);
  background: color-mix(in srgb, var(--bz-fg) 12%, transparent);
}

.bz-my-caidan {
  position: absolute;
  top: 30px;
  right: -8px;
  z-index: 6;
  display: flex;
  flex-direction: column;
  width: 200px;
  padding: 5px;
  border-radius: 12px;
  background: var(--bz-menu-bg);
  border: 1px solid color-mix(in srgb, var(--bz-fg) 12%, transparent);
  box-shadow: var(--bz-shadow);
}

.bz-my-caidan-xiang {
  display: flex;
  align-items: center;
  gap: 9px;
  min-height: 32px;
  padding: 6px 10px;
  border-radius: 8px;
  color: var(--bz-fg-2);
  font-size: 12.5px;
  font-weight: 600;
}

.bz-my-caidan-fen {
  height: 1px;
  margin: 4px 6px;
  background: color-mix(in srgb, var(--bz-fg) 10%, transparent);
}

.bz-my-kaiguan-ge {
  display: flex;
}

/* 表格放不下時：先去掉上下文欄，再去掉能力欄（與 modelTableNeeds 相同的寬度門檻） */
@container (max-width: 642px) {
  .bz-my-hang {
    grid-template-columns: minmax(0, 1fr) 125px 132px 26px 50px;
  }

  .bz-my-lie-sx {
    display: none;
  }
}

@container (max-width: 562px) {
  .bz-my-hang {
    grid-template-columns: minmax(0, 1fr) 132px 26px 50px;
  }

  .bz-my-lie-nl {
    display: none;
  }
}

/* 只在手機寬度：再去掉價格欄，保證模型名稱看得見（Breezell 本身不會窄到這個寬度） */
@container (max-width: 420px) {
  .bz-my-hang {
    grid-template-columns: minmax(0, 1fr) 26px 50px;
  }

  .bz-my-jiage,
  .bz-my-jiage-tou {
    display: none;
  }
}
</style>
