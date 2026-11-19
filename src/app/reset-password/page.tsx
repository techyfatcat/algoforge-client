
import { Suspense } from "react";
import ResetPasswordPage from "./ResetPasswordPage";

export default function Page() {
  return (
    <Suspense
      fallback={
        <main className="flex min-h-screen items-center justify-center bg-white dark:bg-zinc-950">
          <p className="text-sm text-zinc-500">
            Loading password reset...
          </p>
        </main>
      }
    >
      <ResetPasswordPage />
    </Suspense>
  );
}
