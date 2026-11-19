import { Suspense } from "react";
import VerifyEmailPage from "./VerifyEmailPage";

export default function Page() {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-screen items-center justify-center">
          Verifying your email...
        </div>
      }
    >
      <VerifyEmailPage />
    </Suspense>
  );
}