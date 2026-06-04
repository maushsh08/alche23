import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "プライバシーポリシー | 株式会社ALCHE" },
      {
        name: "description",
        content:
          "株式会社ALCHEが提供するBillHeroのプライバシーポリシー。個人情報の取り扱いについて記載しています。",
      },
      { property: "og:title", content: "プライバシーポリシー | 株式会社ALCHE" },
      {
        property: "og:description",
        content: "BillHeroのプライバシーポリシー。",
      },
    ],
  }),
  component: PrivacyPage,
});

function Section({
  n,
  title,
  children,
}: {
  n: number;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mt-10">
      <h2 className="text-xl sm:text-2xl font-semibold tracking-tight">
        {n}. {title}
      </h2>
      <div className="mt-4 text-sm sm:text-base text-muted-foreground leading-relaxed space-y-3">
        {children}
      </div>
    </section>
  );
}

function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border">
        <div className="mx-auto max-w-3xl px-5 sm:px-8 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 font-semibold tracking-tight">
            <span className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-foreground text-background text-xs font-bold">
              A
            </span>
            <span>ALCHE</span>
          </Link>
          <Link
            to="/"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            ← ホームへ戻る
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-5 sm:px-8 py-16 sm:py-24">
        <div className="text-xs font-medium tracking-widest uppercase text-[oklch(0.55_0.18_255)]">
          Privacy Policy
        </div>
        <h1 className="mt-3 text-3xl sm:text-5xl font-bold tracking-tight">
          プライバシーポリシー
        </h1>
        <p className="mt-6 text-sm sm:text-base text-muted-foreground leading-relaxed">
          BillHero（以下、「本アプリ」）は、ユーザーのプライバシーを尊重し、個人情報の保護に努めます。
        </p>

        <Section n={1} title="取得する情報">
          <p>
            本アプリでは、ユーザー登録やログイン機能は提供しておらず、氏名、住所、メールアドレスなどの個人情報を取得しません。
          </p>
          <p>また、本アプリは以下の情報を取得しない設計となっています。</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>氏名</li>
            <li>メールアドレス</li>
            <li>電話番号</li>
            <li>位置情報</li>
            <li>クレジットカード情報</li>
          </ul>
        </Section>

        <Section n={2} title="アプリ内データについて">
          <p>
            割り勘計算や支払い情報などの入力データは、ユーザー端末内または一時的なセッション内で処理されます。
          </p>
          <p>開発者がユーザーデータを収集・保存することはありません。</p>
        </Section>

        <Section n={3} title="外部サービスについて">
          <p>
            本アプリでは、サービス改善や動作確認のために、Google Playやブラウザ関連サービスなどの外部サービスが利用される場合があります。
          </p>
          <p>これらのサービスでは、匿名の利用情報が収集される場合があります。</p>
        </Section>

        <Section n={4} title="広告について">
          <p>現在、本アプリでは広告配信を行っていません。</p>
          <p>今後広告機能を導入する場合は、本ポリシーを更新します。</p>
        </Section>

        <Section n={5} title="アプリ内課金について">
          <p>現在、本アプリではアプリ内課金を提供していません。</p>
          <p>今後追加する場合は、本ポリシーを更新します。</p>
        </Section>

        <Section n={6} title="免責事項">
          <p>本アプリの利用によって生じた損害について、開発者は責任を負いません。</p>
        </Section>

        <Section n={7} title="プライバシーポリシーの変更">
          <p>本ポリシーは、必要に応じて変更される場合があります。</p>
        </Section>

        <Section n={8} title="お問い合わせ">
          <p>
            本アプリに関するお問い合わせは、Google Playストアの連絡先情報よりお願いいたします。
          </p>
        </Section>
      </main>

      <footer className="border-t border-border py-10">
        <div className="mx-auto max-w-3xl px-5 sm:px-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <span className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-foreground text-background text-[10px] font-bold">
              A
            </span>
            <span className="font-medium text-foreground">株式会社ALCHE</span>
          </div>
          <div>© {new Date().getFullYear()} ALCHE Inc. All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
}
