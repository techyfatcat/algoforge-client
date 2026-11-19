
import { Suspense } from "react";
import AuthCallbackPage from "./AuthCallbackPage";

export default function Page() {
  return (
    <Suspense
      fallback={
        <main className="flex min-h-screen items-center justify-center bg-white dark:bg-zinc-950">
          <p className="text-sm text-zinc-500">Signing you in...</p>
        </main>
      }
    >
      <AuthCallbackPage />
    </Suspense>
  );
}
