import { useEffect } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
} from "@tanstack/react-router";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">ページが見つかりません</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          お探しのページは存在しないか、移動された可能性があります。
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            ホームへ戻る
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          ページを読み込めませんでした
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          問題が発生しました。再読み込みするか、ホームへお戻りください。
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            再試行
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            ホームへ戻る
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "ALCHE.inc" },
      { name: "description", content: "ALCHE株式会社の公式コーポレートサイト。Web制作・Webシステム開発・Androidアプリ開発を提供しています。" },
      { name: "author", content: "ALCHE.inc" },
      { property: "og:title", content: "ALCHE.inc" },
      { property: "og:description", content: "ALCHE株式会社の公式コーポレートサイト。Web制作・Webシステム開発・Androidアプリ開発を提供しています。" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:site", content: "@ALCHE" },
      { name: "twitter:title", content: "ALCHE.inc" },
      { name: "twitter:description", content: "ALCHE株式会社の公式コーポレートサイト。Web制作・Webシステム開発・Androidアプリ開発を提供しています。" },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/f76026cd-41d8-44bf-8af0-865bbd1339a5/id-preview-b2b06aad--c6b6be53-de20-4008-8ff1-d12d4fe6d1b4.lovable.app-1778214410463.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/f76026cd-41d8-44bf-8af0-865bbd1339a5/id-preview-b2b06aad--c6b6be53-de20-4008-8ff1-d12d4fe6d1b4.lovable.app-1778214410463.png" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
    </QueryClientProvider>
  );
}
