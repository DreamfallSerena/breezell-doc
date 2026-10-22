<script setup lang="ts">
import { computed, ref, watch } from "vue";
import BzTubiao from "./BzTubiao.vue";
import { goujianqingqiudizhi, jiekouyushe, shiyongwenben, type xieyi } from "./shuju";

// OpenAI-Compatible 槽位的設定表單（Settings.tsx SettingsForProvider 的 isOpenAICompat 分支）：
// 連線、驗證、通訊協定、接口預設、請求地址預覽、自訂請求標頭，最後是帳號池入口卡片（BoxModelsPage.tsx AccountPoolHandoff）。
// 這個復刻可以直接操作：切換協定、修改 Base URL、點「Claude 1M」，請求地址會像 Breezell 一樣即時更新。
const props = withDefaults(
  defineProps<{
    nicheng?: string;
    jichudizhi?: string;
    xieyi?: xieyi;
    yushe?: number;
    miyao?: boolean;
    qingqiutou?: string;
    gaoliang?: "lianjie" | "miyao" | "xieyi" | "yushe" | "dizhi" | "qingqiutou" | "";
    zhanshizhanghaochi?: boolean;
    duli?: boolean;
  }>(),
  {
    nicheng: "Claude Relay",
    jichudizhi: "https://relay.example.com",
    xieyi: "anthropic",
    yushe: 0,
    miyao: true,
    qingqiutou: "{}",
    gaoliang: "",
    zhanshizhanghaochi: true,
    duli: false,
  },
);

const { t } = shiyongwenben();

const dangqianxieyi = ref<xieyi>(props.xieyi);
const dangqianyushe = ref(props.yushe);
const dizhi = ref(props.jichudizhi);
const ming = ref(props.nicheng);
const tou = ref(props.qingqiutou);
const xianshimiyao = ref(false);
// Settings.tsx 裡「Claude 1M」預設按鈕寫入的請求標頭。
const claude1m = '{"anthropic-beta": "context-1m-2025-08-07"}';
const miyaozhi = ref(props.miyao ? "sk-relay-3f9a7c21d8e4b6a0" : "");

watch(dangqianxieyi, () => {
  dangqianyushe.value = 0;
});

const yusheliebiao = computed(() => jiekouyushe[dangqianxieyi.value]);
const xuanzhongyushe = computed(() => yusheliebiao.value[dangqianyushe.value] ?? yusheliebiao.value[0]);
const qingqiudizhi = computed(() => goujianqingqiudizhi(dizhi.value, xuanzhongyushe.value.zhi));
const yushezhankai = ref(false);

const xieyilan: { id: xieyi; ming: string }[] = [
  { id: "openai", ming: "OpenAI" },
  { id: "openai-responses", ming: "Responses" },
  { id: "anthropic", ming: "Anthropic" },
];
</script>

<template>
  <div :class="{ bz: duli }">
  <div :class="{ 'bz-chuangkou': duli, 'bz-jr-duli': duli }">
  <div class="bz-jr">
    <section class="bz-jr-duan bz-jr-xian" :class="{ 'bz-gl': gaoliang === 'lianjie' }">
      <div class="bz-jr-tou"><span class="bz-jr-toutubiao"><BzTubiao ming="globe" :daxiao="13" :cuxi="2" /></span>{{ t("settings.sectionConnection") }}</div>
      <div class="bz-jr-zu">
        <label class="bz-jr-ziduan">
          <span class="bz-biaoqian">{{ t("settings.nickname") }}</span>
          <input v-model="ming" class="bz-shurukuang" maxlength="30" :placeholder="t('settings.nicknamePlaceholder')" />
        </label>
        <label class="bz-jr-ziduan" :class="{ 'bz-gl': gaoliang === 'dizhi' }">
          <span class="bz-biaoqian">{{ t("settings.baseUrl") }}</span>
          <input v-model="dizhi" class="bz-shurukuang bz-mono" placeholder="https://api.example.com/v1" spellcheck="false" />
        </label>
      </div>
    </section>

    <section class="bz-jr-duan bz-jr-xian" :class="{ 'bz-gl': gaoliang === 'miyao' }">
      <div class="bz-jr-tou"><span class="bz-jr-toutubiao"><BzTubiao ming="key-round" :daxiao="13" :cuxi="2" /></span>{{ t("settings.sectionAuthentication") }}</div>
      <label class="bz-jr-ziduan">
        <span class="bz-biaoqian">{{ t("settings.apiKey") }}</span>
        <span class="bz-jr-miyao">
          <input
            v-model="miyaozhi"
            class="bz-shurukuang bz-mono"
            :class="{ 'bz-jr-yincang': !xianshimiyao && miyaozhi }"
            placeholder="sk-..."
            spellcheck="false"
            autocomplete="off"
          />
          <button type="button" class="bz-jr-yan" :aria-label="xianshimiyao ? 'Hide key' : 'Show key'" @click="xianshimiyao = !xianshimiyao">
            <BzTubiao ming="eye" :daxiao="16" :cuxi="1.5" />
          </button>
        </span>
      </label>
    </section>

    <section class="bz-jr-duan bz-jr-xieyiqu">
      <div class="bz-jr-tou"><span class="bz-jr-toutubiao"><BzTubiao ming="cable" :daxiao="13" :cuxi="2" /></span>{{ t("settings.sectionProtocol") }}</div>
      <div class="bz-jr-xieyi" :class="{ 'bz-gl': gaoliang === 'xieyi' }">
        <button
          v-for="xiang in xieyilan"
          :key="xiang.id"
          type="button"
          class="bz-jr-xieyi-an"
          :class="{ 'bz-xuan': dangqianxieyi === xiang.id }"
          @click="dangqianxieyi = xiang.id"
        >{{ xiang.ming }}</button>
      </div>
      <div v-if="dangqianxieyi === 'openai'" class="bz-jr-tishi">
        <div v-for="jian in (['settings.apiFormat.openaiTip1', 'settings.apiFormat.openaiTip2', 'settings.apiFormat.openaiTip3'] as const)" :key="jian" class="bz-jr-tiao">
          <span class="bz-jr-yuandian" />
          <span>{{ t(jian) }}</span>
        </div>
      </div>
      <div v-else-if="dangqianxieyi === 'openai-responses'" class="bz-jr-tishi">{{ t("settings.apiFormat.responsesTip") }}</div>
      <div v-else class="bz-jr-tishi">{{ t("settings.apiFormat.anthropicTip") }}</div>

      <div class="bz-jr-yushe" :class="{ 'bz-gl': gaoliang === 'yushe' }">
        <div class="bz-jr-yushe-tou">
          <span class="bz-jr-yushe-biao">{{ t("settings.endpointPreset") }}</span>
          <span class="bz-jr-yushe-shuo">{{ t(xuanzhongyushe.shuoming as never) }}</span>
        </div>
        <button type="button" class="bz-jr-xiala" @click="yushezhankai = !yushezhankai">
          <span>{{ t(xuanzhongyushe.mingcheng as never) }}</span>
          <BzTubiao ming="chevron-down" :daxiao="14" />
        </button>
        <div v-if="yushezhankai" class="bz-jr-xiala-liebiao">
          <button
            v-for="(xiang, xuhao) in yusheliebiao"
            :key="xiang.zhi"
            type="button"
            class="bz-jr-xiala-xiang"
            :class="{ 'bz-xuan': xuhao === dangqianyushe }"
            @click="dangqianyushe = xuhao; yushezhankai = false"
          >
            <span>{{ t(xiang.mingcheng as never) }}</span>
            <span class="bz-mono bz-jr-xiala-ci">{{ xiang.zhi }}</span>
          </button>
        </div>
        <div class="bz-mono bz-jr-houzhui">{{ xuanzhongyushe.zhi }}</div>
      </div>
      <div v-if="qingqiudizhi" class="bz-jr-dizhi" :class="{ 'bz-gl': gaoliang === 'dizhi' }">
        <span class="bz-jr-dizhi-biao">{{ t("settings.requestUrl") }}</span>
        <span class="bz-mono bz-jr-dizhi-zhi">{{ qingqiudizhi }}</span>
      </div>
    </section>

    <section class="bz-jr-duan bz-jr-touqu" :class="{ 'bz-gl': gaoliang === 'qingqiutou' }">
      <div class="bz-jr-tou">
        <span class="bz-jr-toutubiao"><BzTubiao ming="braces" :daxiao="13" :cuxi="2" /></span>
        <span>{{ t("settings.customHeaders") }} <span class="bz-jr-ruo">(JSON)</span></span>
        <span class="bz-jr-xuantian">{{ t("settings.optional") }}</span>
      </div>
      <input v-model="tou" class="bz-shurukuang bz-mono" placeholder='{"X-Custom-Header": "value"}' spellcheck="false" />
      <div class="bz-jr-yushetou">
        <span>{{ t("settings.customHeadersPresets") }}:</span>
        <button type="button" class="bz-mono bz-jr-1m" @click="tou = claude1m">Claude 1M</button>
      </div>
      <div class="bz-jr-zhu">{{ t("settings.customHeadersNote") }}</div>
    </section>

    <div v-if="zhanshizhanghaochi" class="bz-jr-chi">
      <div class="bz-jr-chi-ka">
        <div class="bz-jr-chi-hang">
          <span class="bz-jr-chi-tubiao"><BzTubiao ming="waypoints" :daxiao="14" /></span>
          <span class="bz-jr-chi-wen">
            <span class="bz-jr-chi-biaoti">{{ t("settings.accountPool") }} <span class="bz-dian" /></span>
            <span class="bz-jr-chi-zhai">{{ t("box.accountPool.summaryNone") }}</span>
          </span>
        </div>
        <div class="bz-jr-chi-shuo">{{ t("box.accountPool.linkDesc") }}</div>
        <div><span class="bz-anniu bz-zhu"><BzTubiao ming="arrow-up-right" />{{ t("box.accountPool.manage") }}</span></div>
      </div>
    </div>
  </div>
  </div>
  </div>
</template>

<style scoped>
.bz-jr-duli {
  padding: 12px 18px 16px;
}

.bz-jr {
  display: flex;
  flex-direction: column;
  min-width: 0;
}

.bz-jr-duan {
  padding-bottom: 16px;
  margin-bottom: 16px;
}

.bz-jr-xian {
  border-bottom: 1px solid color-mix(in srgb, var(--bz-fg) 8%, transparent);
}

.bz-jr-xieyiqu {
  padding-bottom: 4px;
  margin-bottom: 0;
}

.bz-jr-tou {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 10px;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: -0.01em;
  color: var(--bz-fg-2);
}

.bz-jr-toutubiao {
  display: inline-flex;
  opacity: 0.6;
}

.bz-jr-zu {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.bz-jr-ziduan {
  display: flex;
  flex-direction: column;
  gap: 4px;
  border-radius: 6px;
}

.bz-jr-miyao {
  position: relative;
  display: flex;
  align-items: center;
}

.bz-jr-miyao .bz-shurukuang {
  padding-right: 40px;
}

.bz-jr-yincang {
  -webkit-text-security: disc;
}

.bz-jr-yan {
  position: absolute;
  right: 12px;
  display: flex;
  color: var(--bz-fg-4);
}

.bz-jr-xieyi {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 2px;
  padding: 2px;
  margin-bottom: 12px;
  border-radius: 8px;
  background: color-mix(in srgb, var(--bz-fg) 6%, transparent);
}

.bz-jr-xieyi-an {
  padding: 8px;
  border-radius: 6px;
  font-size: 11px;
  font-weight: 600;
  text-align: center;
  color: var(--bz-fg-4);
  transition: color 150ms, background-color 150ms;
}

.bz-jr-xieyi-an:hover {
  color: var(--bz-fg-2);
}

.bz-jr-xieyi-an.bz-xuan {
  color: var(--bz-fg-1);
  background: color-mix(in srgb, var(--bz-button-bg) 18%, var(--bz-editor-bg) 82%);
  box-shadow: 0 0 0 1px color-mix(in srgb, var(--bz-button-bg) 45%, transparent);
}

.bz-jr-tishi {
  display: flex;
  flex-direction: column;
  gap: 2px;
  margin-bottom: 12px;
  font-size: 11px;
  font-weight: 600;
  line-height: 1.625;
  color: var(--bz-fg-3);
}

.bz-jr-tiao {
  display: flex;
  gap: 6px;
}

.bz-jr-yuandian {
  flex-shrink: 0;
  width: 4px;
  height: 4px;
  margin-top: 0.7em;
  border-radius: 50%;
  background: currentColor;
  opacity: 0.55;
}

.bz-jr-yushe {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 6px;
  border-radius: 6px;
}

.bz-jr-yushe-tou {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  font-size: 10px;
  font-weight: 600;
}

.bz-jr-yushe-biao {
  flex-shrink: 0;
  color: var(--bz-fg-4);
}

.bz-jr-yushe-shuo {
  min-width: 0;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: color-mix(in srgb, var(--bz-fg-4) 70%, transparent);
}

.bz-jr-xiala {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  min-height: 34px;
  padding: 8px 12px;
  border-radius: 6px;
  font-size: 13px;
  color: var(--bz-fg-1);
  background: color-mix(in srgb, var(--bz-fg) 5%, transparent);
  border: 1px solid color-mix(in srgb, var(--bz-fg) 12%, transparent) !important;
}

.bz-jr-xiala-liebiao {
  position: absolute;
  top: 58px;
  left: 0;
  right: 0;
  z-index: 5;
  padding: 4px;
  border-radius: 8px;
  background: var(--bz-menu-bg);
  border: 1px solid color-mix(in srgb, var(--bz-fg) 14%, transparent);
  box-shadow: var(--bz-shadow);
}

.bz-jr-xiala-xiang {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2px;
  width: 100%;
  padding: 6px 8px;
  border-radius: 5px;
  font-size: 13px;
  text-align: left;
}

.bz-jr-xiala-xiang:hover,
.bz-jr-xiala-xiang.bz-xuan {
  background: color-mix(in srgb, var(--bz-fg) 8%, transparent);
}

.bz-jr-xiala-ci {
  font-size: 11px;
  color: var(--bz-fg-3);
}

.bz-jr-houzhui {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  padding: 4px 8px;
  border-radius: 6px;
  font-size: 10px;
  color: var(--bz-fg-3);
  background: color-mix(in srgb, var(--bz-fg) 4%, transparent);
}

.bz-jr-dizhi {
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 12px 0;
  padding: 6px 10px;
  border-radius: 6px;
  background: color-mix(in srgb, var(--bz-button-bg) 12%, transparent);
  border: 1px solid color-mix(in srgb, var(--bz-button-bg) 28%, transparent);
}

.bz-jr-dizhi-biao {
  flex-shrink: 0;
  font-size: 10px;
  font-weight: 600;
  color: var(--bz-fg-4);
}

.bz-jr-dizhi-zhi {
  min-width: 0;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-size: 11px;
  color: var(--bz-link);
  user-select: text;
}

.bz-jr-touqu {
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin: 16px 0 0;
  padding: 16px 0 0;
  border-top: 1px solid color-mix(in srgb, var(--bz-fg) 8%, transparent);
  border-radius: 0;
}

.bz-jr-touqu .bz-jr-tou {
  margin-bottom: 4px;
}

.bz-jr-ruo {
  font-weight: 400;
  color: color-mix(in srgb, var(--bz-fg-4) 70%, transparent);
}

.bz-jr-xuantian {
  margin-left: 4px;
  padding: 1px 6px;
  border-radius: 4px;
  border: 1px solid var(--bz-border3);
  font-size: 9px;
  font-weight: 400;
  line-height: 1;
  color: color-mix(in srgb, var(--bz-fg-4) 60%, transparent);
}

.bz-jr-yushetou {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 0 2px;
  font-size: 10px;
  font-weight: 600;
  color: color-mix(in srgb, var(--bz-fg-4) 50%, transparent);
}

.bz-jr-1m {
  padding: 2px 8px;
  border-radius: 6px;
  font-size: 10px;
  color: var(--bz-fg-3);
  border: 1px solid color-mix(in srgb, var(--bz-fg) 14%, transparent) !important;
}

.bz-jr-1m:hover {
  color: var(--bz-fg-1);
}

.bz-jr-zhu {
  padding: 0 2px;
  font-size: 10px;
  font-weight: 600;
  line-height: 1.5;
  color: color-mix(in srgb, var(--bz-fg-4) 50%, transparent);
}

.bz-jr-chi {
  margin-top: 16px;
  padding-top: 16px;
  border-top: 1px solid color-mix(in srgb, var(--bz-fg) 8%, transparent);
}

.bz-jr-chi-ka {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 12px 14px;
  border-radius: 12px;
  background: color-mix(in srgb, var(--bz-fg) 4%, transparent);
  border: 1px solid color-mix(in srgb, var(--bz-fg) 8%, transparent);
}

.bz-jr-chi-hang {
  display: flex;
  align-items: center;
  gap: 10px;
}

.bz-jr-chi-tubiao {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  flex-shrink: 0;
  border-radius: 9px;
  color: var(--bz-fg-2);
  background: var(--bz-editor-bg);
  border: 1px solid color-mix(in srgb, var(--bz-fg) 9%, transparent);
}

.bz-jr-chi-wen {
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-width: 0;
}

.bz-jr-chi-biaoti {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 13px;
  font-weight: 650;
  color: var(--bz-fg-1);
}

.bz-jr-chi-zhai {
  font-size: 11.5px;
  font-weight: 600;
  color: var(--bz-fg-3);
}

.bz-jr-chi-shuo {
  font-size: 12px;
  line-height: 1.55;
  color: var(--bz-fg-3);
}
</style>
