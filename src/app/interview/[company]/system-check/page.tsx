
import { Suspense } from "react";
import SystemCheckPage from "./SystemCheckPage";

export default function Page({
  params,
}: {
  params: Promise<{ company: string }>;
}) {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-screen items-center justify-center">
          Loading system check...
        </div>
      }
    >
      <SystemCheckPage params={params} />
    </Suspense>
  );
}
