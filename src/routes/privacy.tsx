import { createFileRoute, Link } from "@tanstack/react-router";
import logo from "@/assets/alche-logo.png";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "プライバシーポリシー | 株式会社ALCHE" },
      {
        name: "description",
        content:
          "株式会社ALCHEのプライバシーポリシー。Web制作・Webシステム開発に関する個人情報の取り扱いについて記載しています。",
      },
      { property: "og:title", content: "プライバシーポリシー | 株式会社ALCHE" },
      {
        property: "og:description",
        content: "株式会社ALCHEのWeb制作・Webシステム開発に関するプライバシーポリシー。",
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
            <img src={logo} alt="株式会社ALCHE" className="h-8 w-auto" />
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
          株式会社ALCHE（以下、「当社」といいます）は、Web制作およびWebシステム開発サービスの提供にあたり、お客様の個人情報の保護を最重要事項と位置付け、以下のとおりプライバシーポリシー（以下、「本ポリシー」といいます）を定めます。
        </p>

        <Section n={1} title="個人情報の定義">
          <p>
            本ポリシーにおける「個人情報」とは、個人情報の保護に関する法律（個人情報保護法）に定義される個人情報を指し、氏名、生年月日、住所、電話番号、メールアドレス、所属企業名・部署名、IPアドレス、Cookie情報など、特定の個人を識別できる情報をいいます。
          </p>
        </Section>

        <Section n={2} title="個人情報の取得方法">
          <p>
            当社は、お客様がお問い合わせフォーム、メール、電話、オンライン商談予約、見積もり依頼、ご契約手続き等を通じてご提供いただく際に、適法かつ公正な手段により個人情報を取得します。
          </p>
          <p>
            また、当社運営サイトの利用状況を把握するため、Cookieやアクセス解析ツール（Google Analytics等）を通じて、IPアドレス、ブラウザ情報、閲覧履歴等を取得する場合があります。
          </p>
        </Section>

        <Section n={3} title="個人情報の利用目的">
          <p>当社は、取得した個人情報を以下の目的で利用します。</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Web制作・Webシステム開発に関するお問い合わせへの対応</li>
            <li>お見積もり、ご提案、ご契約、請求等の業務遂行</li>
            <li>制作・開発業務における連絡・打ち合わせ・成果物の納品</li>
            <li>納品後の保守・運用・サポート対応</li>
            <li>当社サービスに関する情報提供、ご案内</li>
            <li>サイトの利用状況の分析およびサービス品質向上</li>
            <li>法令または契約に基づく義務の履行</li>
          </ul>
        </Section>

        <Section n={4} title="個人情報の第三者提供">
          <p>
            当社は、次の場合を除き、お客様の同意なく第三者に個人情報を提供しません。
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>法令に基づく場合</li>
            <li>
              人の生命、身体または財産の保護のために必要であって、本人の同意を得ることが困難な場合
            </li>
            <li>
              業務遂行に必要な範囲で、機密保持契約を締結した業務委託先（サーバー事業者、決済代行、外部協力者等）に提供する場合
            </li>
          </ul>
        </Section>

        <Section n={5} title="個人情報の安全管理">
          <p>
            当社は、取得した個人情報について、漏えい、滅失、毀損等を防止するため、適切な安全管理措置（アクセス制御、暗号化通信、ログ管理、従業者教育等）を講じます。
          </p>
        </Section>

        <Section n={6} title="お客様のデータ・成果物の取り扱い">
          <p>
            Web制作・Webシステム開発業務において、お客様からお預かりした原稿、画像、ロゴ、データベースの内容等は、契約に定める業務目的の範囲でのみ利用し、目的外利用は行いません。
          </p>
          <p>
            業務終了後、お客様の指示に従い、預かりデータの返却または安全な方法での削除を行います。
          </p>
        </Section>

        <Section n={7} title="Cookie（クッキー）の利用">
          <p>
            当社のWebサイトでは、サービス向上およびアクセス解析のためにCookieを使用する場合があります。Cookieはお客様のブラウザ設定により無効化することが可能ですが、その場合は一部機能が利用できなくなることがあります。
          </p>
        </Section>

        <Section n={8} title="個人情報の開示・訂正・削除">
          <p>
            お客様ご本人から、当社が保有する個人情報の開示、訂正、追加、削除、利用停止等のご請求があった場合、本人確認を行ったうえで、法令に従い速やかに対応します。
          </p>
        </Section>

        <Section n={9} title="プライバシーポリシーの変更">
          <p>
            当社は、法令の変更やサービス内容の変更に応じて、本ポリシーを予告なく変更することがあります。変更後の内容は、本ページに掲載した時点から効力を生じるものとします。
          </p>
        </Section>

        <Section n={10} title="お問い合わせ窓口">
          <p>
            本ポリシーに関するお問い合わせ、個人情報の取り扱いに関するご質問は、以下までご連絡ください。
          </p>
          <p>
            株式会社ALCHE
            <br />
            〒160-0023 東京都新宿区西新宿三丁目3番13号 西新宿水間ビル6階
            <br />
            メール：alche.inc2023@gmail.com
          </p>
        </Section>

        <p className="mt-12 text-xs text-muted-foreground">
          制定日：2024年4月1日 / 最終改定日：{new Date().getFullYear()}年
        </p>
      </main>

      <footer className="border-t border-border py-10">
        <div className="mx-auto max-w-3xl px-5 sm:px-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <img src={logo} alt="株式会社ALCHE" className="h-6 w-auto" />
          </div>
          <div>© {new Date().getFullYear()} ALCHE Inc. All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
}
