import { createFileRoute, Link } from "@tanstack/react-router";
import heroBg from "@/assets/web-hero.jpg";
import portfolioTanaka from "@/assets/portfolio-tanaka.png";
import portfolioHokuyou from "@/assets/portfolio-hokuyou.png";
import logo from "@/assets/alche-logo.png";
import { useMemo, useState } from "react";
import {
import { useMemo, useState } from "react";
import {
  ArrowRight,
  Check,
  X,
  Zap,
  PenLine,
  Sparkles,
  ChevronDown,
  ExternalLink,
  Mail,
} from "lucide-react";

export const Route = createFileRoute("/web")({
  head: () => ({
    meta: [
      { title: "Webサイト制作 10万円〜 原稿・画像おまかせ | 株式会社ALCHE" },
      {
        name: "description",
        content:
          "原稿・画像おまかせで、プロ品質のWebサイトが10万円。SEO対策標準装備、最短1日納品。中小企業・個人事業主向けの静的サイト制作サービス。",
      },
      {
        property: "og:title",
        content: "Webサイト制作 10万円〜 | 株式会社ALCHE",
      },
      {
        property: "og:description",
        content: "原稿・画像おまかせ、SEO対策標準装備、最短1日納品の静的サイト制作。",
      },
    ],
  }),
  component: WebLP,
});

const MAIL = "alche.inc2023@gmail.com";
const MAILTO = "https://timerex.net/s/shuma.h08_e384/1f697619";

/* --- Tokens (LP固有：ネイビー × ゴールド) --- */
const NAVY = "#0b1f3a";
const NAVY_DEEP = "#081530";
const GOLD = "#f5a524";
const GOLD_DARK = "#d97706";

function CTA({
  children,
  className = "",
  href = MAILTO,
}: {
  children: React.ReactNode;
  className?: string;
  href?: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm sm:text-base font-bold text-white shadow-lg shadow-amber-500/30 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-amber-500/40 ${className}`}
      style={{
        backgroundImage: `linear-gradient(135deg, ${GOLD} 0%, ${GOLD_DARK} 100%)`,
      }}
    >
      {children}
    </a>
  );
}

function TopNav() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-xl bg-white/80 border-b border-slate-200">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 h-14 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 text-sm font-semibold" style={{ color: NAVY }}>
          <img src={logo} alt="株式会社ALCHE" className="h-8 w-auto" />
          <span className="text-slate-400">/</span>
          <span>Web制作</span>
        </Link>
        <a
          href={MAILTO}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden sm:inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-xs font-bold text-white"
          style={{ background: GOLD }}
        >
          無料相談 <ArrowRight className="h-3.5 w-3.5" />
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden" style={{ background: NAVY }}>

      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `linear-gradient(135deg, ${NAVY}f2 0%, ${NAVY_DEEP}d9 60%, ${NAVY}b3 100%), radial-gradient(800px 400px at 90% 0%, ${GOLD}26, transparent 60%)`,
        }}
      />
      <div className="relative mx-auto max-w-6xl px-5 sm:px-8 pt-16 pb-24 sm:pt-24 sm:pb-32 text-white">

        <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3 py-1 text-xs">
          <Sparkles className="h-3.5 w-3.5" style={{ color: GOLD }} />
          中小企業・個人事業主のためのWeb制作
        </div>
        <h1 className="mt-6 text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.15]">
          原稿・画像おまかせで、
          <br />
          プロ品質のWebサイトが
          <span style={{ color: GOLD }}>10万円</span>。
        </h1>
        <p className="mt-6 text-base sm:text-lg text-white/80 leading-relaxed max-w-2xl">
          5分の質問に答えるだけ。SEO対策標準装備、最短1日の超スピード納品。
          原稿執筆もAI生成画像もすべてお任せください。
        </p>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-3xl">
          {[
            "静的サイト一式 10万円",
            "原稿・画像コミコミ",
            "最短1日納品",
          ].map((t) => (
            <div
              key={t}
              className="flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm font-medium"
            >
              <Check className="h-4 w-4 flex-shrink-0" style={{ color: GOLD }} />
              {t}
            </div>
          ))}
        </div>

        <div className="mt-10">
          <CTA>
            まずは5分の無料相談はこちら
            <ArrowRight className="h-4 w-4" />
          </CTA>
        </div>
      </div>
    </section>
  );
}

function Strengths() {
  const items = [
    {
      icon: PenLine,
      title: "5分の質問に答えるだけ",
      desc: "事前に用意するものは一切なし。こちらからの簡単な質問に答えるだけで、理想のサイトが完成します。",
    },
    {
      icon: Sparkles,
      title: "原稿・画像も丸投げOK",
      desc: "指定がなければ、原稿の執筆から、AI生成によるモデル級の人物画像・素材画像まで、すべてこちらでクオリティの高いものを用意します。",
    },
    {
      icon: Zap,
      title: "最短1日のスピード納品",
      desc: "スピードコースを選択すれば、即日〜翌日には公開可能です（通常コースも迅速対応）。",
    },
  ];
  return (
    <section className="py-20 sm:py-28 bg-white">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <div className="text-xs font-bold tracking-widest uppercase" style={{ color: GOLD_DARK }}>
            Why so cheap & fast?
          </div>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold" style={{ color: NAVY }}>
            なぜこんなに安くて早いの？
          </h2>
          <p className="mt-4 text-slate-600 leading-relaxed">
            AIを活用した制作フローと「丸投げOK」の体制で、品質を落とさず低価格を実現しました。
          </p>
        </div>
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {items.map((it) => (
            <div
              key={it.title}
              className="group rounded-2xl border border-slate-200 bg-white p-7 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div
                className="inline-flex h-12 w-12 items-center justify-center rounded-xl text-white"
                style={{ background: NAVY }}
              >
                <it.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-lg font-bold" style={{ color: NAVY }}>
                {it.title}
              </h3>
              <p className="mt-3 text-sm text-slate-600 leading-relaxed">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Compare() {
  const rows = [
    { label: "初期費用", other: "50万円〜", ours: "10万円（税込）" },
    { label: "原稿・画像準備", other: "お客様で用意（または別料金）", ours: "すべて丸投げで無料用意" },
    { label: "SEO対策", other: "オプション（有料）", ours: "標準装備（無料）" },
    { label: "納品スピード", other: "1ヶ月以上", ours: "最短1日" },
  ];
  return (
    <section className="py-20 sm:py-28" style={{ background: "#f8fafc" }}>
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <div className="text-xs font-bold tracking-widest uppercase" style={{ color: GOLD_DARK }}>
            Comparison
          </div>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold" style={{ color: NAVY }}>
            他社との圧倒的な違い
          </h2>
        </div>
        <div className="mt-10 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          {/* Desktop */}
          <table className="hidden sm:table w-full text-sm">
            <thead style={{ background: NAVY }}>
              <tr className="text-white">
                <th className="text-left p-5 font-semibold">項目</th>
                <th className="text-left p-5 font-semibold text-white/70">某制作会社（一例）</th>
                <th className="text-left p-5 font-semibold" style={{ color: GOLD }}>
                  本サービス
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r, i) => (
                <tr key={r.label} className={i % 2 ? "bg-slate-50/50" : ""}>
                  <td className="p-5 font-bold" style={{ color: NAVY }}>
                    {r.label}
                  </td>
                  <td className="p-5 text-slate-500">
                    <span className="inline-flex items-center gap-2">
                      <X className="h-4 w-4 text-slate-400" />
                      {r.other}
                    </span>
                  </td>
                  <td className="p-5 font-bold" style={{ color: NAVY }}>
                    <span className="inline-flex items-center gap-2">
                      <Check className="h-4 w-4" style={{ color: GOLD_DARK }} />
                      {r.ours}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {/* Mobile */}
          <div className="sm:hidden divide-y divide-slate-200">
            {rows.map((r) => (
              <div key={r.label} className="p-5">
                <div className="text-xs font-bold tracking-wide uppercase" style={{ color: NAVY }}>
                  {r.label}
                </div>
                <div className="mt-3 grid grid-cols-2 gap-3 text-sm">
                  <div>
                    <div className="text-[10px] text-slate-400 mb-1">某制作会社</div>
                    <div className="text-slate-500 flex items-start gap-1.5">
                      <X className="h-3.5 w-3.5 mt-0.5 flex-shrink-0" />
                      <span>{r.other}</span>
                    </div>
                  </div>
                  <div>
                    <div className="text-[10px] mb-1" style={{ color: GOLD_DARK }}>
                      本サービス
                    </div>
                    <div className="font-bold flex items-start gap-1.5" style={{ color: NAVY }}>
                      <Check className="h-3.5 w-3.5 mt-0.5 flex-shrink-0" style={{ color: GOLD_DARK }} />
                      <span>{r.ours}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  const BASE = 100000;
  const options = [
    { id: "form", label: "問い合わせ機能連携", price: 20000 },
    { id: "reserve", label: "オンライン予約機能連携", price: 30000 },
  ];
  const [selected, setSelected] = useState<Record<string, boolean>>({});

  const total = useMemo(() => {
    return options.reduce(
      (sum, o) => sum + (selected[o.id] ? o.price : 0),
      BASE,
    );
  }, [selected]);

  return (
    <section className="py-20 sm:py-28 bg-white">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <div className="text-xs font-bold tracking-widest uppercase" style={{ color: GOLD_DARK }}>
            Pricing
          </div>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold" style={{ color: NAVY }}>
            基本プランと選べるオプション
          </h2>
        </div>

        <div className="mt-12 grid lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {/* Base plan */}
          <div
            className="relative rounded-2xl p-8 text-white overflow-hidden shadow-2xl"
            style={{ background: `linear-gradient(135deg, ${NAVY} 0%, ${NAVY_DEEP} 100%)` }}
          >
            <div
              className="absolute -top-12 -right-12 h-40 w-40 rounded-full blur-3xl opacity-40"
              style={{ background: GOLD }}
            />
            <div className="relative">
              <div className="text-xs font-bold tracking-widest uppercase" style={{ color: GOLD }}>
                基本プラン
              </div>
              <h3 className="mt-2 text-2xl font-bold">静的サイト制作（5ページ前後）</h3>
              <div className="mt-6 flex items-baseline gap-2">
                <span className="text-5xl font-bold" style={{ color: GOLD }}>
                  ¥100,000
                </span>
                <span className="text-sm text-white/60">（税込）</span>
              </div>
              <ul className="mt-6 space-y-3 text-sm">
                {[
                  "HTML/CSS/JS コーディング",
                  "標準SEO対策",
                  "画像・原稿おまかせ用意",
                  "レスポンシブ（スマホ）対応",
                ].map((t) => (
                  <li key={t} className="flex items-center gap-2">
                    <Check className="h-4 w-4 flex-shrink-0" style={{ color: GOLD }} />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Simulator */}
          <div className="rounded-2xl border-2 border-slate-200 bg-white p-8 shadow-sm">
            <div className="text-xs font-bold tracking-widest uppercase" style={{ color: GOLD_DARK }}>
              料金シミュレーター
            </div>
            <h3 className="mt-2 text-2xl font-bold" style={{ color: NAVY }}>
              選べるオプション
            </h3>

            <div className="mt-6 space-y-3">
              {options.map((o) => {
                const checked = !!selected[o.id];
                return (
                  <label
                    key={o.id}
                    className={`flex items-center justify-between gap-3 rounded-xl border-2 px-4 py-4 cursor-pointer transition-all ${
                      checked
                        ? "bg-amber-50"
                        : "border-slate-200 bg-white hover:border-slate-300"
                    }`}
                    style={checked ? { borderColor: GOLD } : undefined}
                  >
                    <div className="flex items-center gap-3">
                      <input
                        type="checkbox"
                        checked={checked}
                        onChange={(e) =>
                          setSelected((s) => ({ ...s, [o.id]: e.target.checked }))
                        }
                        className="h-5 w-5 rounded accent-amber-500"
                      />
                      <span className="text-sm font-bold" style={{ color: NAVY }}>
                        {o.label}
                      </span>
                    </div>
                    <span className="text-sm font-bold" style={{ color: GOLD_DARK }}>
                      +¥{o.price.toLocaleString()}
                    </span>
                  </label>
                );
              })}
            </div>

            <div className="mt-6 pt-6 border-t border-slate-200 flex items-baseline justify-between">
              <span className="text-sm font-bold text-slate-600">お見積もり合計</span>
              <span className="text-3xl font-bold" style={{ color: NAVY }}>
                ¥{total.toLocaleString()}
                <span className="text-xs font-normal text-slate-500 ml-1">税込</span>
              </span>
            </div>

            <div className="mt-6">
              <CTA className="w-full">
                この内容で無料相談する <ArrowRight className="h-4 w-4" />
              </CTA>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Portfolio() {
  const tabs = [
    {
      id: "tanaka",
      label: "田中整骨院",
      desc: "清潔感と親しみやすさを重視した、地域密着型整骨院のLPサンプル。",
      url: "https://maushsh08.github.io/tanaka-seikotsu/",
      image: portfolioTanaka,
    },
    {
      id: "hokuyo",
      label: "北陽リフォーム",
      desc: "施工実績が引き立つ、信頼感とビジュアル重視のリフォーム会社LPサンプル。",
      url: "https://maushsh08.github.io/hokuyo-reform/",
      image: portfolioHokuyou,
    },
  ];
  const [active, setActive] = useState(tabs[0].id);
  const current = tabs.find((t) => t.id === active)!;

  return (
    <section className="py-20 sm:py-28" style={{ background: "#f8fafc" }}>
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <div className="text-xs font-bold tracking-widest uppercase" style={{ color: GOLD_DARK }}>
            Portfolio
          </div>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold" style={{ color: NAVY }}>
            制作実績
          </h2>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {tabs.map((t) => {
            const isActive = active === t.id;
            return (
              <button
                key={t.id}
                onClick={() => setActive(t.id)}
                className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all ${
                  isActive
                    ? "text-white shadow-md"
                    : "bg-white text-slate-600 border border-slate-200 hover:border-slate-300"
                }`}
                style={isActive ? { background: NAVY } : undefined}
              >
                {t.label}
              </button>
            );
          })}
        </div>

        <div className="mt-8 max-w-3xl mx-auto rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm">
          <div className="rounded-xl overflow-hidden border border-slate-200 bg-slate-50">
            <img
              src={current.image}
              alt={`${current.label} サンプルサイトのスクリーンショット`}
              className="w-full h-auto block"
              loading="lazy"
            />
          </div>
          <h3 className="mt-6 text-xl font-bold" style={{ color: NAVY }}>
            {current.label}
          </h3>
          <p className="mt-3 text-sm text-slate-600 leading-relaxed">{current.desc}</p>
          <a
            href={current.url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-bold text-white transition-all hover:-translate-y-0.5 hover:shadow-lg"
            style={{ background: NAVY }}
          >
            サンプルを見る <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const items = [
    {
      q: "本当に原稿や画像がなくても大丈夫ですか？",
      a: "はい、大丈夫です！業種に合わせた最適な原稿をこちらで作成し、画像もAIを駆使してモデル級の人物写真や綺麗なイメージ画像を無料でご用意します。",
    },
    {
      q: "SEO対策は具体的に何をしてくれますか？",
      a: "検索エンジンに評価されやすい適切なHTML構造（hタグの最適化）や、スマホ最適化、ページ軽量化（高速化）を標準で行います。",
    },
    {
      q: "途中で予約機能やフォームを付けたくなったら？",
      a: "オプションとしていつでも追加可能です。外部サービスと連携し、静的サイトの軽さを維持したまま便利な機能を実装します。",
    },
  ];
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="py-20 sm:py-28 bg-white">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <div className="text-center">
          <div className="text-xs font-bold tracking-widest uppercase" style={{ color: GOLD_DARK }}>
            FAQ
          </div>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold" style={{ color: NAVY }}>
            よくある質問
          </h2>
        </div>
        <div className="mt-10 space-y-3">
          {items.map((it, i) => {
            const isOpen = open === i;
            return (
              <div
                key={i}
                className="rounded-xl border border-slate-200 bg-white overflow-hidden transition-all"
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 p-5 text-left hover:bg-slate-50 transition-colors"
                >
                  <span className="font-bold text-sm sm:text-base" style={{ color: NAVY }}>
                    Q. {it.q}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 flex-shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                    style={{ color: GOLD_DARK }}
                  />
                </button>
                <div
                  className={`grid transition-all duration-300 ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 text-sm text-slate-600 leading-relaxed">
                      A. {it.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section
      className="py-24 sm:py-32 text-white relative overflow-hidden"
      style={{ background: `linear-gradient(135deg, ${NAVY} 0%, ${NAVY_DEEP} 100%)` }}
    >
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `radial-gradient(600px 400px at 50% 0%, ${GOLD}55, transparent 60%)`,
        }}
      />
      <div className="relative mx-auto max-w-4xl px-5 sm:px-8 text-center">
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight leading-tight">
          あなたのビジネスを、
          <br />
          <span style={{ color: GOLD }}>10万円</span>で次のステージへ。
        </h2>
        <p className="mt-6 text-white/70 leading-relaxed">
          無料相談は5分で完了。お見積もり・ご質問だけでも歓迎です。
        </p>
        <div className="mt-10 flex justify-center">
          <CTA className="text-base sm:text-lg px-10 py-5">
            <Mail className="h-5 w-5" />
            無料相談・お問い合わせ
          </CTA>
        </div>
        <p className="mt-4 text-xs text-white/50">{MAIL}</p>
      </div>
    </section>
  );
}

function FloatingCTA() {
  return (
    <div className="sm:hidden fixed bottom-0 inset-x-0 z-50 p-3 bg-white/95 backdrop-blur-xl border-t border-slate-200 shadow-2xl">
      <CTA className="w-full">10万円でWebサイトを作る</CTA>
    </div>
  );
}

function Footer() {
  return (
    <footer className="border-t border-slate-200 py-8 bg-white pb-24 sm:pb-8">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
        <div>© {new Date().getFullYear()} 株式会社ALCHE</div>
        <div className="flex items-center gap-5">
          <Link to="/" className="hover:text-slate-900 transition-colors">
            コーポレートサイト
          </Link>
          <Link to="/privacy" className="hover:text-slate-900 transition-colors">
            プライバシーポリシー
          </Link>
        </div>
      </div>
    </footer>
  );
}

function WebLP() {
  return (
    <div className="min-h-screen bg-white">
      <TopNav />
      <Hero />
      <Strengths />
      <Compare />
      <Pricing />
      <Portfolio />
      <FAQ />
      <FinalCTA />
      <Footer />
      <FloatingCTA />
    </div>
  );
}
