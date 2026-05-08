import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Sparkles,
  Smartphone,
  Cpu,
  Layers,
  Rocket,
  Zap,
  Bot,
  Code2,
  Users,
  Mail,
  Menu,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "株式会社ALCHE | AI時代のAndroidアプリ開発" },
      {
        name: "description",
        content:
          "株式会社ALCHEは、BtoC向けAndroidアプリ開発を行うスタートアップです。AI・バイブコーディングを活用し、高速かつ高品質な開発を提供します。",
      },
      { property: "og:title", content: "株式会社ALCHE | AI時代のAndroidアプリ開発" },
      {
        property: "og:description",
        content:
          "AI・バイブコーディングを活用した、BtoC向けAndroidアプリ開発のスタートアップ。",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const MAIL = "alche.inc2023@gmail.com";
const MAILTO = `mailto:${MAIL}`;

const NAV = [
  { href: "#about", label: "About" },
  { href: "#service", label: "Service" },
  { href: "#features", label: "Features" },
  { href: "#company", label: "Company" },
  { href: "#contact", label: "Contact" },
];

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-xl bg-background/70 border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2 font-semibold tracking-tight">
          <span className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-foreground text-background text-xs font-bold">
            A
          </span>
          <span>ALCHE</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="hover:text-foreground transition-colors"
            >
              {n.label}
            </a>
          ))}
        </nav>
        <a
          href={MAILTO}
          className="hidden md:inline-flex items-center gap-1.5 rounded-full bg-foreground text-background px-4 py-2 text-sm font-medium hover:opacity-90 transition-opacity"
        >
          お問い合わせ <ArrowRight className="h-3.5 w-3.5" />
        </a>
        <button
          aria-label="menu"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-md hover:bg-muted"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-xl">
          <div className="px-5 py-4 flex flex-col gap-4 text-sm">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="text-muted-foreground"
              >
                {n.label}
              </a>
            ))}
            <a
              href={MAILTO}
              className="inline-flex items-center justify-center gap-1.5 rounded-full bg-foreground text-background px-4 py-2.5 font-medium"
            >
              お問い合わせ <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden pt-32 pb-24 sm:pt-40 sm:pb-32 bg-hero"
    >
      <div className="absolute inset-0 -z-10 [mask-image:radial-gradient(closest-side,black,transparent)]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,oklch(0.92_0.008_255/0.5)_1px,transparent_1px),linear-gradient(to_bottom,oklch(0.92_0.008_255/0.5)_1px,transparent_1px)] bg-[size:48px_48px]" />
      </div>

      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="animate-fade-up">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background/60 backdrop-blur px-3 py-1 text-xs text-muted-foreground">
            <Sparkles className="h-3.5 w-3.5 text-[oklch(0.55_0.18_255)]" />
            BtoC Android × AI Native Development
          </div>
          <h1 className="mt-6 text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1]">
            AI時代のアプリ開発を、
            <br />
            <span className="text-gradient">もっと速く。</span>
          </h1>
          <p className="mt-6 max-w-2xl text-base sm:text-lg text-muted-foreground leading-relaxed">
            株式会社ALCHEは、BtoC向けAndroidアプリ開発に特化したスタートアップ。
            <br className="hidden sm:block" />
            AI・バイブコーディングを駆使し、アイデアを最短でプロダクトに変えます。
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a
              href={MAILTO}
              className="group inline-flex items-center gap-2 rounded-full bg-foreground text-background px-6 py-3 text-sm font-medium shadow-elevated hover:translate-y-[-1px] transition-transform"
            >
              お問い合わせ
              <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
            </a>
            <a
              href="#service"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-background/60 backdrop-blur px-6 py-3 text-sm font-medium hover:bg-muted transition-colors"
            >
              サービスを見る
            </a>
          </div>

          <div className="mt-16 grid grid-cols-3 max-w-md gap-8 text-sm">
            {[
              { k: "Android", v: "BtoCアプリ" },
              { k: "AI Native", v: "高速開発" },
              { k: "Lean Team", v: "小規模・俊敏" },
            ].map((s) => (
              <div key={s.k}>
                <div className="text-xs text-muted-foreground">{s.k}</div>
                <div className="mt-1 font-medium">{s.v}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Section({
  id,
  eyebrow,
  title,
  desc,
  children,
}: {
  id: string;
  eyebrow: string;
  title: string;
  desc?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <div className="text-xs font-medium tracking-widest uppercase text-[oklch(0.55_0.18_255)]">
            {eyebrow}
          </div>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            {title}
          </h2>
          {desc && (
            <p className="mt-5 text-muted-foreground leading-relaxed">{desc}</p>
          )}
        </div>
        <div className="mt-12">{children}</div>
      </div>
    </section>
  );
}

function About() {
  const points = [
    {
      icon: Smartphone,
      title: "BtoC Androidアプリ",
      desc: "ユーザーに直接届くプロダクトづくりを軸に、Androidプラットフォームで磨き上げます。",
    },
    {
      icon: Bot,
      title: "AI・バイブコーディング",
      desc: "最新のAIツール群を組み合わせた開発フローで、構想から実装までを劇的に短縮。",
    },
    {
      icon: Rocket,
      title: "スピード感ある体制",
      desc: "小規模だからこそ意思決定が速い。プロトタイプから本番リリースまで一気通貫。",
    },
  ];
  return (
    <Section
      id="about"
      eyebrow="About"
      title="株式会社ALCHEについて"
      desc="私たちは、AI時代の開発スタイルを前提に設計された、Androidアプリ開発会社です。少人数だからこそ実現できる速度と、確かな技術で、BtoCプロダクトの価値を最大化します。"
    >
      <div className="grid sm:grid-cols-3 gap-4">
        {points.map((p) => (
          <div
            key={p.title}
            className="rounded-2xl border border-border bg-card p-6 shadow-soft hover:shadow-elevated transition-shadow duration-500"
          >
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-muted">
              <p.icon className="h-5 w-5" />
            </div>
            <h3 className="mt-5 font-semibold">{p.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
              {p.desc}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Service() {
  const items = [
    {
      icon: Smartphone,
      title: "Androidアプリ開発",
      desc: "企画・設計・実装・運用まで、BtoC領域のAndroidアプリをトータルで支援。",
    },
    {
      icon: Bot,
      title: "AI活用開発",
      desc: "LLM・生成AIを組み込んだ機能開発。プロダクト価値の核を作ります。",
    },
    {
      icon: Layers,
      title: "UI/UX設計",
      desc: "ユーザーに愛される体験を、シンプルで美しいインターフェースで実現。",
    },
    {
      icon: Rocket,
      title: "MVP開発",
      desc: "最小実用プロダクトを最短で。仮説検証のサイクルを加速します。",
    },
    {
      icon: Code2,
      title: "プロトタイプ開発",
      desc: "アイデアを動くカタチへ。意思決定を支える試作を素早くお届けします。",
    },
  ];
  return (
    <Section
      id="service"
      eyebrow="Service"
      title="提供サービス"
      desc="Androidアプリ開発を中心に、AI活用・UI/UX・MVP・プロトタイピングまで。プロダクトのフェーズに応じて柔軟にご支援します。"
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map((s, i) => (
          <div
            key={s.title}
            className="group relative rounded-2xl border border-border bg-card p-6 overflow-hidden hover:shadow-elevated transition-all duration-500"
          >
            <div className="flex items-center gap-3">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-foreground text-background">
                <s.icon className="h-5 w-5" />
              </div>
              <div className="text-xs text-muted-foreground">0{i + 1}</div>
            </div>
            <h3 className="mt-5 text-lg font-semibold">{s.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
              {s.desc}
            </p>
            <div className="absolute -bottom-12 -right-12 h-32 w-32 rounded-full bg-[oklch(0.7_0.15_240)]/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
        ))}
      </div>
    </Section>
  );
}

function Features() {
  const items = [
    {
      icon: Zap,
      title: "スピード開発",
      desc: "AI支援により、設計から実装までのリードタイムを大幅短縮。",
    },
    {
      icon: Cpu,
      title: "AI活用",
      desc: "バイブコーディングと生成AIを開発フロー全体に統合。",
    },
    {
      icon: Code2,
      title: "モダン技術",
      desc: "Kotlin / Jetpack Compose など最新スタックでの実装。",
    },
    {
      icon: Users,
      title: "ユーザー重視設計",
      desc: "UXを起点に、本当に使われるアプリを丁寧に作ります。",
    },
  ];
  return (
    <Section
      id="features"
      eyebrow="Features"
      title="ALCHEの強み"
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {items.map((f) => (
          <div
            key={f.title}
            className="rounded-2xl border-gradient bg-card p-6 shadow-soft hover:-translate-y-1 transition-transform duration-500"
          >
            <f.icon className="h-6 w-6 text-[oklch(0.55_0.18_255)]" />
            <h3 className="mt-5 font-semibold">{f.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
              {f.desc}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Company() {
  const rows = [
    { k: "会社名", v: "株式会社ALCHE" },
    {
      k: "所在地",
      v: (
        <>
          〒160-0023
          <br />
          東京都新宿区西新宿三丁目3番13号
          <br />
          西新宿水間ビル6階
        </>
      ),
    },
    { k: "事業内容", v: "BtoC向けAndroidアプリ開発" },
    {
      k: "お問い合わせ",
      v: (
        <a href={MAILTO} className="underline-offset-4 hover:underline">
          {MAIL}
        </a>
      ),
    },
  ];
  return (
    <Section id="company" eyebrow="Company" title="会社情報">
      <div className="rounded-2xl border border-border bg-card overflow-hidden shadow-soft">
        <dl className="divide-y divide-border">
          {rows.map((r) => (
            <div
              key={r.k}
              className="grid grid-cols-1 sm:grid-cols-[200px_1fr] gap-2 sm:gap-6 px-6 py-5 sm:py-6"
            >
              <dt className="text-sm font-medium text-muted-foreground">{r.k}</dt>
              <dd className="text-sm leading-relaxed">{r.v}</dd>
            </div>
          ))}
        </dl>
      </div>
    </Section>
  );
}

function Contact() {
  return (
    <section id="contact" className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-foreground text-background p-10 sm:p-16 shadow-elevated">
          <div className="absolute inset-0 opacity-30 bg-[radial-gradient(600px_300px_at_80%_20%,oklch(0.7_0.15_240),transparent_60%),radial-gradient(500px_300px_at_10%_90%,oklch(0.55_0.18_255),transparent_60%)]" />
          <div className="relative max-w-2xl">
            <div className="text-xs font-medium tracking-widest uppercase opacity-70">
              Contact
            </div>
            <h2 className="mt-3 text-3xl sm:text-5xl font-bold tracking-tight">
              プロジェクトの
              <br />
              ご相談はお気軽に。
            </h2>
            <p className="mt-5 text-sm sm:text-base opacity-80 leading-relaxed">
              アプリ開発のご依頼、AI活用に関するご相談など、まずはメールにてお問い合わせください。
            </p>
            <a
              href={MAILTO}
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-background text-foreground px-6 py-3 text-sm font-medium hover:opacity-90 transition-opacity"
            >
              <Mail className="h-4 w-4" />
              {MAIL}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-sm text-muted-foreground">
        <div className="flex items-center gap-2">
          <span className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-foreground text-background text-[10px] font-bold">
            A
          </span>
          <span className="font-medium text-foreground">株式会社ALCHE</span>
        </div>
        <div className="flex items-center gap-6">
          <Link to="/privacy" className="hover:text-foreground transition-colors">
            プライバシーポリシー
          </Link>
          <span>© {new Date().getFullYear()} ALCHE Inc. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}

function Index() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Service />
        <Features />
        <Company />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
