import { computed, type Ref } from "vue";
import { useData } from "vitepress";
import wenbenbiao from "./fenzuwenben.json";

// 專案分組（群組）教學的介面文字。
// fenzuwenben.json 由 Breezell 源碼 browser/react/src/util/i18n.*.ts 抽出，
// 只保留 explorerProjects.* 與 projectGroup.* 這兩組鍵，值原樣沿用，畫面才能跟 Breezell 一致。

type wenbenjian = keyof (typeof wenbenbiao)["en"];

export function shiyongfenzuwenben(fugai?: Ref<string | undefined>) {
  const { localeIndex } = useData();
  const yuyan = computed(
    () => (fugai?.value ?? (localeIndex.value === "root" ? "en" : localeIndex.value)) as keyof typeof wenbenbiao,
  );
  const t = (jian: wenbenjian) => {
    const dangqian = wenbenbiao[yuyan.value] as Record<string, string> | undefined;
    return dangqian?.[jian] ?? (wenbenbiao.en as Record<string, string>)[jian] ?? jian;
  };
  const tihuan = (jian: wenbenjian, ...canshu: (string | number)[]) =>
    canshu.reduce<string>((wenzi, zhi, xuhao) => wenzi.replace(`{${xuhao}}`, String(zhi)), t(jian));
  return { t, tihuan, yuyan };
}
