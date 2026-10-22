import { computed, type Ref } from "vue";
import { useData } from "vitepress";
import wenbenbiao from "./wenben.json";
import tubiaobiao from "./tubiao.json";

// 復刻 Breezell 界面所需的文案、圖示與示例數據。
// wenben.json 從 Breezell 源碼 browser/react/src/util/i18n.*.ts 原樣抽出；
// tubiao.json 從 lucide-react（Breezell 界面所用的圖示庫）原樣抽出。

type wenbenjian = keyof (typeof wenbenbiao)["en"];

// fugai：可選的語言覆寫（例如復刻畫面裡的語言下拉選單切換後，畫面自身改用該語言）。
export function shiyongwenben(fugai?: Ref<string | undefined>) {
  const { localeIndex } = useData();
  const yuyan = computed(() => (fugai?.value ?? (localeIndex.value === "root" ? "en" : localeIndex.value)) as keyof typeof wenbenbiao);
  const t = (jian: wenbenjian) => {
    const dangqian = wenbenbiao[yuyan.value] as Record<string, string> | undefined;
    return dangqian?.[jian] ?? (wenbenbiao.en as Record<string, string>)[jian] ?? jian;
  };
  const tihuan = (jian: wenbenjian, ...canshu: (string | number)[]) =>
    canshu.reduce<string>((wenzi, zhi, xuhao) => wenzi.replace(`{${xuhao}}`, String(zhi)), t(jian));
  return { t, tihuan, yuyan };
}

export const tubiao = tubiaobiao as Record<string, string>;

// @lobehub/icons 的 Claude（彩色）與 OpenAI（單色）標記，Breezell 的 ProviderIcon 直接使用這兩個。
export const claudelujing =
  "M4.709 15.955l4.72-2.647.08-.23-.08-.128H9.2l-.79-.048-2.698-.073-2.339-.097-2.266-.122-.571-.121L0 11.784l.055-.352.48-.321.686.06 1.52.103 2.278.158 1.652.097 2.449.255h.389l.055-.157-.134-.098-.103-.097-2.358-1.596-2.552-1.688-1.336-.972-.724-.491-.364-.462-.158-1.008.656-.722.881.06.225.061.893.686 1.908 1.476 2.491 1.833.365.304.145-.103.019-.073-.164-.274-1.355-2.446-1.446-2.49-.644-1.032-.17-.619a2.97 2.97 0 01-.104-.729L6.283.134 6.696 0l.996.134.42.364.62 1.414 1.002 2.229 1.555 3.03.456.898.243.832.091.255h.158V9.01l.128-1.706.237-2.095.23-2.695.08-.76.376-.91.747-.492.584.28.48.685-.067.444-.286 1.851-.559 2.903-.364 1.942h.212l.243-.242.985-1.306 1.652-2.064.73-.82.85-.904.547-.431h1.033l.76 1.129-.34 1.166-1.064 1.347-.881 1.142-1.264 1.7-.79 1.36.073.11.188-.02 2.856-.606 1.543-.28 1.841-.315.833.388.091.395-.328.807-1.969.486-2.309.462-3.439.813-.042.03.049.061 1.549.146.662.036h1.622l3.02.225.79.522.474.638-.079.485-1.215.62-1.64-.389-3.829-.91-1.312-.329h-.182v.11l1.093 1.068 2.006 1.81 2.509 2.33.127.578-.322.455-.34-.049-2.205-1.657-.851-.747-1.926-1.62h-.128v.17l.444.649 2.345 3.521.122 1.08-.17.353-.608.213-.668-.122-1.374-1.925-1.415-2.167-1.143-1.943-.14.08-.674 7.254-.316.37-.729.28-.607-.461-.322-.747.322-1.476.389-1.924.315-1.53.286-1.9.17-.632-.012-.042-.14.018-1.434 1.967-2.18 2.945-1.726 1.845-.414.164-.717-.37.067-.662.401-.589 2.388-3.036 1.44-1.882.93-1.086-.006-.158h-.055L4.132 18.56l-1.13.146-.487-.456.061-.746.231-.243 1.908-1.312-.006.006z";
export const deepseeklujing =
  "M23.748 4.482c-.254-.124-.364.113-.512.234-.051.039-.094.09-.137.136-.372.397-.806.657-1.373.626-.829-.046-1.537.214-2.163.848-.133-.782-.575-1.248-1.247-1.548-.352-.156-.708-.311-.955-.65-.172-.241-.219-.51-.305-.774-.055-.16-.11-.323-.293-.35-.2-.031-.278.136-.356.276-.313.572-.434 1.202-.422 1.84.027 1.436.633 2.58 1.838 3.393.137.093.172.187.129.323-.082.28-.18.552-.266.833-.055.179-.137.217-.329.14a5.526 5.526 0 01-1.736-1.18c-.857-.828-1.631-1.742-2.597-2.458a11.365 11.365 0 00-.689-.471c-.985-.957.13-1.743.388-1.836.27-.098.093-.432-.779-.428-.872.004-1.67.295-2.687.684a3.055 3.055 0 01-.465.137 9.597 9.597 0 00-2.883-.102c-1.885.21-3.39 1.102-4.497 2.623C.082 8.606-.231 10.684.152 12.85c.403 2.284 1.569 4.175 3.36 5.653 1.858 1.533 3.997 2.284 6.438 2.14 1.482-.085 3.133-.284 4.994-1.86.47.234.962.327 1.78.397.63.059 1.236-.03 1.705-.128.735-.156.684-.837.419-.961-2.155-1.004-1.682-.595-2.113-.926 1.096-1.296 2.746-2.642 3.392-7.003.05-.347.007-.565 0-.845-.004-.17.035-.237.23-.256a4.173 4.173 0 001.545-.475c1.396-.763 1.96-2.015 2.093-3.517.02-.23-.004-.467-.247-.588zM11.581 18c-2.089-1.642-3.102-2.183-3.52-2.16-.392.024-.321.471-.235.763.09.288.207.486.371.739.114.167.192.416-.113.603-.673.416-1.842-.14-1.897-.167-1.361-.802-2.5-1.86-3.301-3.307-.774-1.393-1.224-2.887-1.298-4.482-.02-.386.093-.522.477-.592a4.696 4.696 0 011.529-.039c2.132.312 3.946 1.265 5.468 2.774.868.86 1.525 1.887 2.202 2.891.72 1.066 1.494 2.082 2.48 2.914.348.292.625.514.891.677-.802.09-2.14.11-3.054-.614zm1-6.44a.306.306 0 01.415-.287.302.302 0 01.2.288.306.306 0 01-.31.307.303.303 0 01-.304-.308zm3.11 1.596c-.2.081-.399.151-.59.16a1.245 1.245 0 01-.798-.254c-.274-.23-.47-.358-.552-.758a1.73 1.73 0 01.016-.588c.07-.327-.008-.537-.239-.727-.187-.156-.426-.199-.688-.199a.559.559 0 01-.254-.078c-.11-.054-.2-.19-.114-.358.028-.054.16-.186.192-.21.356-.202.767-.136 1.146.016.352.144.618.408 1.001.782.391.451.462.576.685.914.176.265.336.537.445.848.067.195-.019.354-.25.452z";
export const openailujing =
  "M9.205 8.658v-2.26c0-.19.072-.333.238-.428l4.543-2.616c.619-.357 1.356-.523 2.117-.523 2.854 0 4.662 2.212 4.662 4.566 0 .167 0 .357-.024.547l-4.71-2.759a.797.797 0 00-.856 0l-5.97 3.473zm10.609 8.8V12.06c0-.333-.143-.57-.429-.737l-5.97-3.473 1.95-1.118a.433.433 0 01.476 0l4.543 2.617c1.309.76 2.189 2.378 2.189 3.948 0 1.808-1.07 3.473-2.76 4.163zM7.802 12.703l-1.95-1.142c-.167-.095-.239-.238-.239-.428V5.899c0-2.545 1.95-4.472 4.591-4.472 1 0 1.927.333 2.712.928L8.23 5.067c-.285.166-.428.404-.428.737v6.898zM12 15.128l-2.795-1.57v-3.33L12 8.658l2.795 1.57v3.33L12 15.128zm1.796 7.23c-1 0-1.927-.332-2.712-.927l4.686-2.712c.285-.166.428-.404.428-.737v-6.898l1.974 1.142c.167.095.238.238.238.428v5.233c0 2.545-1.974 4.472-4.614 4.472zm-5.637-5.303l-4.544-2.617c-1.308-.761-2.188-2.378-2.188-3.948A4.482 4.482 0 014.21 6.327v5.423c0 .333.143.571.428.738l5.947 3.449-1.95 1.118a.432.432 0 01-.476 0zm-.262 3.9c-2.688 0-4.662-2.021-4.662-4.519 0-.19.024-.38.047-.57l4.686 2.71c.286.167.571.167.856 0l5.97-3.448v2.26c0 .19-.07.333-.237.428l-4.543 2.616c-.619.357-1.356.523-2.117.523zm5.899 2.83a5.947 5.947 0 005.827-4.756C22.287 18.339 24 15.84 24 13.296c0-1.665-.713-3.282-1.998-4.448.119-.5.19-.999.19-1.498 0-3.401-2.759-5.947-5.946-5.947-.642 0-1.26.095-1.88.31A5.962 5.962 0 0010.205 0a5.947 5.947 0 00-5.827 4.757C1.713 5.447 0 7.945 0 10.49c0 1.666.713 3.283 1.998 4.448-.119.5-.19 1-.19 1.499 0 3.401 2.759 5.946 5.946 5.946.642 0 1.26-.095 1.88-.309a5.96 5.96 0 004.162 1.713z";

// Breezell 源碼 boxWidgets.tsx 的 formatTokens / formatPrice。
export const geshitoken = (shu: number): string => {
  if (!shu || shu <= 0) return "—";
  if (shu >= 1_000_000) {
    const m = shu / 1_000_000;
    return `${Number.isInteger(m) ? m : m.toFixed(m < 10 ? 2 : 1).replace(/\.?0+$/, "")}M`;
  }
  if (shu >= 1000) return `${Math.round(shu / 1000)}K`;
  return String(Math.round(shu));
};
export const geshijiage = (shu: number): string =>
  shu >= 100 ? `$${shu.toFixed(0)}` : shu >= 10 ? `$${shu.toFixed(1)}` : `$${shu.toFixed(2)}`;

export type moxinghang = {
  mingcheng: string;
  shangxiawen: number;
  shuru?: number;
  shuchu?: number;
  qiyong: boolean;
  shiyongzhong?: boolean;
  // false 表示純文字模型（visionInput 為 proxy-required）：能力欄的視覺圖示變灰，⋯ 選單多出「視覺代理」。
  shijue?: boolean;
};

// Anthropic 提供者的預設模型順序與能力，取自 common/providers/api/anthropic/modelOptions.ts。
// 前 5 個預設啟用（DEFAULT_ENABLED_MODELS_PER_PROVIDER = 5），其餘需要手動打開。
export const anthropicmoxing: moxinghang[] = [
  { mingcheng: "claude-fable-5-1", shangxiawen: 1_000_000, shuru: 10, shuchu: 50, qiyong: true },
  { mingcheng: "claude-fable-5", shangxiawen: 1_000_000, shuru: 10, shuchu: 50, qiyong: true },
  { mingcheng: "claude-opus-5", shangxiawen: 1_000_000, shuru: 5, shuchu: 25, qiyong: true },
  { mingcheng: "claude-opus-5-5", shangxiawen: 1_000_000, shuru: 4, shuchu: 20, qiyong: true },
  { mingcheng: "claude-opus-4-8", shangxiawen: 1_000_000, shuru: 5, shuchu: 25, qiyong: true },
  { mingcheng: "claude-opus-4-7", shangxiawen: 1_000_000, shuru: 5, shuchu: 25, qiyong: false },
  { mingcheng: "claude-sonnet-5", shangxiawen: 1_000_000, shuru: 2, shuchu: 10, qiyong: false },
  { mingcheng: "claude-sonnet-5-5", shangxiawen: 1_000_000, shuru: 2, shuchu: 10, qiyong: false },
  { mingcheng: "claude-sonnet-4-6", shangxiawen: 1_000_000, shuru: 3, shuchu: 15, qiyong: false },
  { mingcheng: "claude-opus-4-6", shangxiawen: 1_000_000, shuru: 5, shuchu: 25, qiyong: false },
  { mingcheng: "claude-opus-4-5", shangxiawen: 200_000, shuru: 5, shuchu: 25, qiyong: false },
  { mingcheng: "claude-opus-4-1", shangxiawen: 200_000, shuru: 15, shuchu: 75, qiyong: false },
  { mingcheng: "claude-sonnet-4-5", shangxiawen: 200_000, shuru: 3, shuchu: 15, qiyong: false },
  { mingcheng: "claude-haiku-5-5", shangxiawen: 1_000_000, shuru: 0.1, shuchu: 0.5, qiyong: false },
  { mingcheng: "claude-haiku-4-5", shangxiawen: 200_000, shuru: 1, shuchu: 5, qiyong: false },
];

// DeepSeek 提供者的預設模型（common/providers/api/deepseek/deepseek.ts DEEPSEEK_DEFAULT_MODELS）。
// deepseek-v4-pro、deepseek-chat、deepseek-reasoner 不能直接讀圖，需要視覺代理。
export const deepseekmoxing: moxinghang[] = [
  { mingcheng: "deepseek-flash", shangxiawen: 1_000_000, shuru: 0.15, shuchu: 0.6, qiyong: true },
  { mingcheng: "deepseek-v4.1-pro", shangxiawen: 1_000_000, shuru: 0, shuchu: 0, qiyong: true },
  { mingcheng: "deepseek-v4.1-flash", shangxiawen: 1_000_000, shuru: 0.15, shuchu: 0.6, qiyong: true },
  { mingcheng: "deepseek-v4-flash", shangxiawen: 1_000_000, shuru: 0.15, shuchu: 0.6, qiyong: true },
  { mingcheng: "deepseek-v4-flash-vision-exp", shangxiawen: 1_000_000, shuru: 0.15, shuchu: 0.6, qiyong: true },
  { mingcheng: "deepseek-v4-pro", shangxiawen: 1_000_000, shuru: 0.66, shuchu: 1.98, qiyong: false, shijue: false },
  { mingcheng: "deepseek-chat", shangxiawen: 128_000, shuru: 0.27, shuchu: 1.1, qiyong: false, shijue: false },
  { mingcheng: "deepseek-reasoner", shangxiawen: 128_000, shuru: 0.55, shuchu: 2.19, qiyong: false, shijue: false },
];

// 自訂相容槽位裡手動新增的 Claude 模型：沒有內建單價，價格欄顯示「填寫單價」。
export const jianrongmoxing: moxinghang[] = [
  { mingcheng: "claude-opus-5-5", shangxiawen: 1_000_000, qiyong: true },
  { mingcheng: "claude-sonnet-5-5", shangxiawen: 1_000_000, qiyong: true },
  { mingcheng: "claude-haiku-5-5", shangxiawen: 1_000_000, qiyong: true },
  { mingcheng: "claude-fable-5-1", shangxiawen: 1_000_000, qiyong: false },
];

// 中轉站「擷取模型清單」常見返回，用於示例。
export const qudemoxing = [
  "claude-fable-5-1",
  "claude-opus-5-5",
  "claude-sonnet-5-5",
  "claude-haiku-5-5",
  "claude-opus-4-8",
  "claude-sonnet-4-6",
];

// 移植自 common/providers/openaiCompatible/apiPath.ts 的 getOpenAICompatBaseURL / buildOpenAICompatApiUrl
//（不含 DeepSeek / 智譜 / Kimi 官方主機的自動改寫）。
const zhongduanlujing = /\/(?:chat\/completions|fim\/completions|responses|messages|images\/generations|completions)$/i;
export const goujianqingqiudizhi = (jichudizhi: string, houzhui: string): string => {
  const jichu = jichudizhi.trim().replace(/\/+$/, "");
  if (!jichu) return "";
  const quzhongduan = jichu.replace(zhongduanlujing, "");
  const houzhuijichu = houzhui.replace(zhongduanlujing, "");
  const duanluo = houzhuijichu.split("/").filter(Boolean);
  let jieguo = `${quzhongduan}/${duanluo.join("/")}`;
  if (duanluo.length === 0) jieguo = quzhongduan;
  const xiaoxie = quzhongduan.toLowerCase();
  for (let chongdie = duanluo.length; chongdie > 0; chongdie--) {
    const houxuan = `/${duanluo.slice(0, chongdie).join("/")}`.toLowerCase();
    if (xiaoxie.endsWith(houxuan)) {
      const shengyu = duanluo.slice(chongdie).join("/");
      jieguo = shengyu ? `${quzhongduan}/${shengyu}` : quzhongduan;
      break;
    }
  }
  return `${jieguo}${houzhui.slice(houzhuijichu.length)}`;
};

export type moxingxuanxiang = { shangxiawen: number; tuili: boolean; qiangdu: string; kuaisu: boolean };

export type xieyi = "openai" | "openai-responses" | "anthropic";

export const jiekouyushe: Record<xieyi, { zhi: string; mingcheng: string; shuoming: string }[]> = {
  openai: [{ zhi: "/v1/chat/completions", mingcheng: "settings.endpointPreset.openaiSiliconFlowChat", shuoming: "settings.endpointPreset.openaiSiliconFlowChatDesc" }],
  "openai-responses": [{ zhi: "/v1/responses", mingcheng: "settings.endpointPreset.openaiResponses", shuoming: "settings.endpointPreset.openaiResponsesDesc" }],
  anthropic: [
    { zhi: "/v1/messages", mingcheng: "settings.endpointPreset.anthropicMessages", shuoming: "settings.endpointPreset.anthropicMessagesDesc" },
    { zhi: "/api/plan/v1/messages", mingcheng: "settings.endpointPreset.volcengineAgentPlan", shuoming: "settings.endpointPreset.volcengineAgentPlanDesc" },
  ],
};

// 對話模式（sidebar-tsx/ChatComposerChrome.tsx）：選單順序、名稱、漸層文字與圖示。
// 名稱本身不翻譯（nameOfChatMode 是寫死的英文）；Agent 的圖示是動態光球（.breezell-siri-orb）。
export type duihuamoshi = "normal" | "plan" | "analyze" | "entanglement" | "agent" | "agent_teams" | "dark_selene";

export const moshishunxu: duihuamoshi[] = ["normal", "plan", "analyze", "entanglement", "agent", "agent_teams", "dark_selene"];

export const moshixinxi: Record<duihuamoshi, { mingcheng: string; jianbian?: string; shitu?: string; lujing?: string; miaobian?: boolean }> = {
  normal: {
    mingcheng: "Chat",
    shitu: "0 0 24 24",
    miaobian: true,
    lujing:
      "m5.6 19.92l1.524-1.219l.01-.008c.318-.255.479-.383.658-.474q.241-.123.508-.178C8.499 18 8.706 18 9.122 18h8.681c1.118 0 1.678 0 2.105-.218a2 2 0 0 0 .874-.874C21 16.48 21 15.92 21 14.804V7.197c0-1.118 0-1.678-.218-2.105a2 2 0 0 0-.875-.874C19.48 4 18.92 4 17.8 4H6.2c-1.12 0-1.68 0-2.108.218a2 2 0 0 0-.874.874C3 5.52 3 6.08 3 7.2v11.471c0 1.066 0 1.599.218 1.872a1 1 0 0 0 .783.377c.35 0 .766-.334 1.599-1",
  },
  plan: {
    mingcheng: "Plan",
    jianbian: "linear-gradient(to right, #34d399, #38bdf8, #a78bfa)",
    shitu: "0 0 24 24",
    lujing:
      "M12 2c3.31 0 6 2.66 6 5.95C18 12.41 12 19 12 19S6 12.41 6 7.95C6 4.66 8.69 2 12 2m0 4a2 2 0 0 0-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2m8 13c0 2.21-3.58 4-8 4s-8-1.79-8-4c0-1.29 1.22-2.44 3.11-3.17l.64.91C6.67 17.19 6 17.81 6 18.5c0 1.38 2.69 2.5 6 2.5s6-1.12 6-2.5c0-.69-.67-1.31-1.75-1.76l.64-.91C18.78 16.56 20 17.71 20 19",
  },
  analyze: {
    mingcheng: "Analyze",
    jianbian: "linear-gradient(to right, var(--bz-magenta), var(--bz-blue), var(--bz-magenta))",
    shitu: "0 0 24 24",
    lujing:
      "M16.5 11c1.93 0 3.5-1.57 3.5-3.5S18.43 4 16.5 4S13 5.57 13 7.5V9h-2V7.5C11 5.57 9.43 4 7.5 4S4 5.57 4 7.5S5.57 11 7.5 11H9v2H7.5C5.57 13 4 14.57 4 16.5S5.57 20 7.5 20s3.5-1.57 3.5-3.5V15h2v1.5c0 1.93 1.57 3.5 3.5 3.5s3.5-1.57 3.5-3.5s-1.57-3.5-3.5-3.5H15v-2zM15 7.5a1.501 1.501 0 0 1 3 0c0 .826-.673 1.5-1.5 1.5H15zm-6 9c0 .826-.673 1.5-1.5 1.5S6 17.326 6 16.5c0-.828.673-1.5 1.5-1.5H9zM9 9H7.5A1.501 1.501 0 1 1 9 7.5zm4 4h-2v-2h2zm3.5 2a1.501 1.501 0 0 1 0 3c-.827 0-1.5-.674-1.5-1.5V15z",
  },
  entanglement: {
    mingcheng: "Entanglement",
    jianbian: "linear-gradient(to right, #22d3ee, #a78bfa, #f472b6)",
    shitu: "0 0 32 32",
    lujing:
      "M16.604 1.914a1.04 1.04 0 1 0-2.082 0v1.04h2.082zm0 20.803h-2.082v3.207c0 .574-4.225 4.03-4.225 4.03l2.468-.002l2.807-2.673l3.013 2.692l2.272-.04l-4.254-4.01zM28.566 7.113a1.56 1.56 0 0 0 0-3.12H2.56a1.56 1.56 0 0 0 0 3.12h1.584v12.505l-.932-.022c-.86 0-1.213.467-1.213 1.04c0 .576.35 1.04 1.212 1.04H27.81c.86 0 1.298-.464 1.298-1.04c0-1.094-1.3-1.04-1.3-1.04l-.803.11V7.112h1.56zm-17.13 10.403c-3.772 0-4.195-4.19-4.195-4.19c0-4.097 4.163-4.162 4.163-4.162v4.16h4.193c0 4.192-4.16 4.192-4.16 4.192zm7.28-4.128h-1.07v-1.073h1.07zm0-3.12h-1.07V9.193h1.07v1.073zm4.598 3.12H20.26a.536.536 0 0 1 0-1.073h3.057a.537.537 0 0 1-.003 1.073m0-3.12H20.26a.536.536 0 0 1 0-1.073h3.057a.535.535 0 1 1-.003 1.072z",
  },
  agent: {
    mingcheng: "Agent",
    jianbian: "linear-gradient(to right, #60a5fa, #fb923c)",
  },
  agent_teams: {
    mingcheng: "Teams",
    jianbian: "linear-gradient(to right, #f59e0b, #ef4444, #ec4899)",
    shitu: "0 0 24 24",
    lujing:
      "M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z",
  },
  dark_selene: {
    mingcheng: "DarkSelene",
    jianbian: "linear-gradient(to right, #94a3b8, #8b9cf7, #c4b5fd)",
    shitu: "0 0 24 24",
    lujing:
      "M12.1 2.05a1 1 0 0 1 .23 1.1A7.5 7.5 0 0 0 20.85 11.67a1 1 0 0 1 1.1.23a1 1 0 0 1 .2 1.05A10 10 0 1 1 11.05 1.85a1 1 0 0 1 1.05.2",
  },
};
